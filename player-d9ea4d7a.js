/* K53 film player: plays the session films inside the study app.
   A film is { title, scenes:[{id,name,dur}], css, shared(kit), mods:{id:fn(kit)}, score(kit) }.
   Everything on screen is a pure function of time t, so play, pause and scrubbing are exact. */
(function () {
  'use strict';
  if (window.K53Player) return;

  // ---------- Time and easing ----------
  var clamp01 = function (x) { return x < 0 ? 0 : x > 1 ? 1 : x; };
  var clamp = function (x, a, b) { return x < a ? a : x > b ? b : x; };
  var seg = function (t, a, b) { return clamp01((t - a) / (b - a)); };
  var lerp = function (a, b, p) { return a + (b - a) * p; };
  var eo = function (x) { return 1 - Math.pow(1 - clamp01(x), 3); };
  var ei = function (x) { return Math.pow(clamp01(x), 3); };
  var eio = function (x) { x = clamp01(x); return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2; };
  var eoq = function (x) { return 1 - Math.pow(1 - clamp01(x), 4); };
  var eox = function (x) { return 1 - Math.pow(2, -10 * clamp01(x)); };
  var eob = function (x, c1) { if (c1 === undefined) c1 = 1.4; x = clamp01(x); var c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); };
  var smoothstep = function (a, b, x) { var p = clamp01((x - a) / (b - a)); return p * p * (3 - 2 * p); };
  function rng(seed) { var s = seed >>> 0; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
  function vnoise(seed) { var r = rng(seed), tab = []; for (var i = 0; i < 256; i++) tab.push(r() * 2 - 1); return function (x) { var i = Math.floor(x), f = x - i, a = tab[i & 255], b = tab[(i + 1) & 255], u = f * f * (3 - 2 * f); return a + (b - a) * u; }; }
  var breathe = function (t, amt, period) { return 1 + (amt === undefined ? 0.012 : amt) * Math.sin(t * 2 * Math.PI / (period || 3.2)); };

  var TextFx = {
    split: function (el) {
      if (el.__words) return el.__words;
      var text = el.textContent; el.textContent = '';
      var parts = text.split(/(\s+)/), spans = [];
      parts.forEach(function (w) {
        if (/^\s+$/.test(w)) { el.appendChild(document.createTextNode(w)); return; }
        if (!w) return;
        var s = document.createElement('span'); s.textContent = w; s.style.display = 'inline-block';
        el.appendChild(s); spans.push(s);
      });
      el.__words = spans; return spans;
    },
    fadeFromRight: function (el, t, t0, o) {
      o = o || {}; var stagger = o.stagger === undefined ? 0.11 : o.stagger, dur = o.dur === undefined ? 0.5 : o.dur, dx = o.dx === undefined ? 26 : o.dx;
      if (!el) return t0;
      var ws = TextFx.split(el);
      ws.forEach(function (s, i) { var p = eo(seg(t, t0 + i * stagger, t0 + i * stagger + dur)); s.style.opacity = p; s.style.transform = 'translateX(' + ((1 - p) * dx).toFixed(1) + 'px)'; });
      return t0 + (ws.length - 1) * stagger + dur;
    },
    fadeOutLeft: function (el, t, t0, o) {
      o = o || {}; var stagger = o.stagger === undefined ? 0.07 : o.stagger, dur = o.dur === undefined ? 0.35 : o.dur, dx = o.dx === undefined ? 22 : o.dx;
      if (!el) return;
      var ws = TextFx.split(el);
      ws.forEach(function (s, i) { var p = ei(seg(t, t0 + i * stagger, t0 + i * stagger + dur)); if (t >= t0) { s.style.opacity = 1 - p; s.style.transform = 'translateX(' + (-p * dx).toFixed(1) + 'px)'; } });
    },
    inOut: function (el, t, tIn, tOut, o) { if (tOut !== undefined && t >= tOut) TextFx.fadeOutLeft(el, t, tOut, o); else TextFx.fadeFromRight(el, t, tIn, o); }
  };

  function h(html) { var tpl = document.createElement('template'); tpl.innerHTML = String(html).trim(); return tpl.content.firstElementChild; }
  function el(tag, o, kids) {
    o = o || {}; var e = document.createElement(tag);
    if (o['class']) e.className = o['class']; if (o.style) e.setAttribute('style', o.style);
    if (o.text != null) e.textContent = o.text; if (o.html != null) e.innerHTML = o.html;
    if (o.attrs) Object.keys(o.attrs).forEach(function (k) { e.setAttribute(k, o.attrs[k]); });
    (kids || []).forEach(function (c) { e.appendChild(c); });
    return e;
  }
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };

  // ---------- Score: recorded as data, played with WebAudio ----------
  var PITCHED = { marimba: { pan: -0.1, rev: 0.35, gain: 0 }, ep: { pan: 0.25, rev: 0.45, gain: -2 }, bass: { pan: 0, rev: 0.05, gain: -3 }, pad: { pan: 0, rev: 0.6, gain: -6 }, vibes: { pan: -0.3, rev: 0.55, gain: -2 }, glock: { pan: 0.4, rev: 0.55, gain: -6 }, pluck: { pan: -0.15, rev: 0.35, gain: -1 }, keys: { pan: 0.1, rev: 0.3, gain: -5 } };
  var PALIAS = { rhodes: 'ep', piano: 'ep', kalimba: 'pluck', harp: 'pluck', sub: 'bass', lead: 'keys', synth: 'keys', bell: 'glock', bells: 'glock', celesta: 'glock', vibraphone: 'vibes', mallet: 'marimba', xylophone: 'marimba', strings: 'pad' };
  var DRUMS = { kick: { pan: 0, rev: 0.05, gain: 0 }, snare: { pan: 0.05, rev: 0.25, gain: -2 }, clap: { pan: -0.1, rev: 0.3, gain: -3 }, hat: { pan: 0.3, rev: 0.1, gain: -8 }, openhat: { pan: 0.3, rev: 0.15, gain: -8 }, shaker: { pan: -0.35, rev: 0.1, gain: -10 }, sidestick: { pan: 0.1, rev: 0.25, gain: -4 }, woodblock: { pan: -0.2, rev: 0.2, gain: -4 }, tamb: { pan: 0.4, rev: 0.2, gain: -8 }, tom: { pan: -0.25, rev: 0.25, gain: -2 }, crash: { pan: 0.2, rev: 0.4, gain: -8 }, ride: { pan: 0.35, rev: 0.3, gain: -9 }, cowbell: { pan: -0.3, rev: 0.2, gain: -8 } };
  var DALIAS = { bd: 'kick', sd: 'snare', hh: 'hat', hihat: 'hat', ohh: 'openhat', stick: 'sidestick', rim: 'sidestick', wb: 'woodblock', block: 'woodblock', tambourine: 'tamb', cymbal: 'crash', shake: 'shaker' };
  var FX = { tick: { pan: 0, rev: 0.12, gain: 2 }, click: { pan: 0, rev: 0.18, gain: 0 }, doubleclick: { pan: 0, rev: 0.18, gain: 0 }, pop: { pan: 0, rev: 0.25, gain: -4 }, ding: { pan: 0.15, rev: 0.5, gain: -5 }, chime: { pan: 0.15, rev: 0.55, gain: -6 }, whoosh: { pan: 0, rev: 0.3, gain: -8 }, boing: { pan: 0, rev: 0.3, gain: -4 }, revswell: { pan: 0, rev: 0.45, gain: -8 }, roll: { pan: 0, rev: 0.2, gain: -6 }, thud: { pan: 0, rev: 0.2, gain: -2 }, sparkle: { pan: 0.2, rev: 0.6, gain: -8 } };
  var FALIAS = { keytick: 'tick', key: 'tick', tap: 'click', swoosh: 'whoosh', swish: 'whoosh', swell: 'revswell', rise: 'revswell', bell: 'ding', save: 'ding', success: 'chime', bloop: 'pop', bubble: 'pop', drop: 'thud', land: 'thud', twinkle: 'sparkle' };
  var own = function (o, k) { return Object.prototype.hasOwnProperty.call(o, k) ? o[k] : undefined; };

  function midiOf(p) {
    if (typeof p === 'number') return p;
    var m = /^([A-Ga-g])([#b]?)(-?\d)$/.exec(String(p).trim());
    if (!m) return 60;
    var base = { c: 0, d: 2, e: 4, f: 5, g: 7, a: 9, b: 11 }[m[1].toLowerCase()];
    return 12 * (parseInt(m[3], 10) + 1) + base + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0);
  }

  function recordScore(fn, T) {
    var ev = [], tracks = {}, bpm = 120, t0 = 0, master = { gain: -6, fadeOut: 1 };
    var B = function () { return 60 / bpm; };
    var beat = function (n) { return t0 + n * B(); };
    var when = function (o) {
      o = o || {};
      if (o.beat != null) return { t: beat(o.beat), dur: (o.beats != null ? o.beats : 1) * B() };
      return { t: Number(o.t) || 0, dur: o.dur != null ? Number(o.dur) : 0.5 };
    };
    var trk = function (name) {
      var tr = own(tracks, name);
      if (!tr) { var p = own(PITCHED, name) ? name : (own(PALIAS, name) || 'marimba'); tr = tracks[name] = { patch: p, params: {} }; }
      return tr;
    };
    var pushNote = function (track, pitch, t, dur, vel, extra) {
      var tr = trk(track);
      ev.push({ kind: 'note', patch: tr.patch, params: Object.assign({}, tr.params, extra || {}), midi: midiOf(pitch), t: t, dur: Math.max(0.03, dur), vel: vel == null ? 80 : vel });
    };
    var S = {
      tempo: function (b, o) { bpm = Number(b) || 120; t0 = o && o.t0 != null ? Number(o.t0) : 0; },
      beat: beat,
      toBeat: function (t) { return (t - t0) / B(); },
      seed: function () {},
      program: function (track, patch, o) {
        var p = String(patch).toLowerCase(); p = own(PITCHED, p) ? p : (own(PALIAS, p) || 'marimba');
        tracks[track] = { patch: p, params: Object.assign({}, o || {}) };
      },
      note: function (track, pitch, o) { var w = when(o); pushNote(track, pitch, w.t, w.dur, o && o.vel); },
      chord: function (track, ps, o) { var w = when(o), sp = (o && o.spread) || 0; (ps || []).forEach(function (p, i) { pushNote(track, p, w.t + i * sp, w.dur, o && o.vel); }); },
      pattern: function (track, str, o) {
        o = o || {}; var step = o.step || 0.5, reps = o.repeat || 1, from = o.from || 0, pitches = o.pitch || ['C5'], vel = o.vel == null ? 80 : o.vel, k = 0, s = String(str);
        if (!Array.isArray(pitches)) pitches = [pitches];
        for (var r = 0; r < reps; r++) for (var i = 0; i < s.length; i++) {
          var c = s[i]; if (c !== 'x' && c !== 'X' && c !== 'o') continue;
          var b = from + (r * s.length + i) * step;
          pushNote(track, pitches[k % pitches.length], beat(b), o.dur != null ? o.dur * B() : step * B() * 0.9, c === 'X' ? Math.min(127, vel * 1.25) : c === 'o' ? vel * 0.55 : vel);
          k++;
        }
      },
      run: function (track, ps, o) { o = o || {}; var st = o.step || 0.1, v = o.vel == null ? 70 : o.vel, cr = o.cresc || 0; (ps || []).forEach(function (p, i) { pushNote(track, p, (o.t || 0) + i * st, st * 1.5, Math.min(127, v + i * cr)); }); },
      drum: function (name, o) {
        var n = String(name).toLowerCase(); n = own(DRUMS, n) ? n : own(DALIAS, n); if (!n) return;
        var w = when(o); ev.push({ kind: 'drum', patch: n, t: w.t, dur: 0, vel: o && o.vel != null ? o.vel : 90, params: {} });
      },
      drums: function (map, o) {
        o = o || {}; var step = o.step || 0.5, reps = o.repeat || 1, from = o.from || 0, vel = o.vel == null ? 80 : o.vel;
        Object.keys(map || {}).forEach(function (name) {
          var s = String(map[name]);
          for (var r = 0; r < reps; r++) for (var i = 0; i < s.length; i++) {
            var c = s[i]; if (c !== 'x' && c !== 'X' && c !== 'o') continue;
            S.drum(name, { beat: from + (r * s.length + i) * step, vel: c === 'X' ? Math.min(127, vel * 1.25) : c === 'o' ? vel * 0.55 : vel });
          }
        });
      },
      fx: function (name, t, o) {
        var n = String(name).toLowerCase(); n = own(FX, n) ? n : own(FALIAS, n); if (!n) return;
        o = o || {}; ev.push({ kind: 'fx', patch: n, t: Number(t) || 0, dur: o.dur != null ? Number(o.dur) : (n === 'whoosh' ? 0.5 : n === 'revswell' ? 1 : n === 'roll' ? 1 : 0), vel: o.vel == null ? 80 : o.vel, params: { pan: o.pan, pitch: o.pitch, into: o.into } });
      },
      ticks: function (times, o) { (times || []).forEach(function (t) { S.fx('tick', t, o); }); },
      master: function (o) { if (o) { if (o.gain != null) master.gain = o.gain; if (o.fadeOut != null) master.fadeOut = o.fadeOut; } }
    };
    try { fn(S, T); } catch (e) { console.error('K53 film score: ' + e); }
    ev = ev.filter(function (e) { return e.t > -0.1; }).map(function (e) { if (e.t < 0) e.t = 0; e.at = e.kind === 'fx' && e.patch === 'revswell' ? Math.max(0, e.t - Math.max(0.2, e.dur)) : e.t; return e; });
    ev.sort(function (a, b) { return a.at - b.at; });
    return { events: ev, master: master };
  }

  // ---------- Synth ----------
  var dB = function (g) { return Math.pow(10, g / 20); };
  var hz = function (m) { return 440 * Math.pow(2, (m - 69) / 12); };
  var velAmp = function (v) { return Math.pow(Math.max(1, Math.min(127, v)) / 127, 1.5); };

  function Engine(shared) {
    var AC = window.AudioContext || window.webkitAudioContext;
    this.ok = !!(shared || AC);
    if (!this.ok) return;
    this.shared = !!shared;
    var ctx = this.ctx = shared || new AC();
    this.out = ctx.createGain(); this.out.gain.value = 1;
    var comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 3;
    this.out.connect(comp); comp.connect(ctx.destination);
    var len = ctx.sampleRate * 2;
    this.noise = ctx.createBuffer(1, len, ctx.sampleRate);
    var d = this.noise.getChannelData(0), r = rng(91);
    for (var i = 0; i < len; i++) d[i] = r() * 2 - 1;
    var ir = ctx.createBuffer(2, Math.floor(ctx.sampleRate * 2.2), ctx.sampleRate);
    for (var ch = 0; ch < 2; ch++) { var b = ir.getChannelData(ch), rr = rng(7 + ch); for (var j = 0; j < b.length; j++) b[j] = (rr() * 2 - 1) * Math.pow(1 - j / b.length, 3.2); }
    this.ir = ir;
  }
  Engine.prototype.session = function (masterDb) {
    var ctx = this.ctx, bus = ctx.createGain(); bus.gain.value = dB(masterDb);
    bus.connect(this.out);
    var dry = ctx.createGain(); dry.connect(bus);
    var rev = ctx.createConvolver(); rev.buffer = this.ir; var revOut = ctx.createGain(); revOut.gain.value = 0.55; rev.connect(revOut); revOut.connect(bus);
    return { bus: bus, dry: dry, rev: rev, nodes: [] };
  };
  Engine.prototype.endSession = function (s) {
    if (!s) return;
    var ctx = this.ctx, now = ctx.currentTime;
    try { s.bus.gain.cancelScheduledValues(now); s.bus.gain.setValueAtTime(s.bus.gain.value, now); s.bus.gain.linearRampToValueAtTime(0, now + 0.08); } catch (e) {}
    setTimeout(function () { s.nodes.forEach(function (n) { try { n.stop(); } catch (e) {} }); try { s.bus.disconnect(); } catch (e) {} }, 150);
  };
  Engine.prototype.voice = function (s, ev, at, cut) {
    var ctx = this.ctx, def = ev.kind === 'note' ? PITCHED[ev.patch] : ev.kind === 'drum' ? DRUMS[ev.patch] : FX[ev.patch];
    if (!def) return;
    var p = ev.params || {};
    var g = ctx.createGain(); g.gain.value = velAmp(ev.vel) * dB(def.gain + (p.gain || 0));
    var pan = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    if (pan) { pan.pan.value = clamp(p.pan != null ? p.pan : def.pan, -1, 1); g.connect(pan); }
    var head = pan || g; head.connect(s.dry);
    var rv = clamp(p.rev != null ? p.rev : def.rev, 0, 1);
    if (rv > 0.001) { var sg = ctx.createGain(); sg.gain.value = rv; head.connect(sg); sg.connect(s.rev); }
    var self = this, nodes = s.nodes;
    var osc = function (type, f, dest, t0, t1, det) { var o = ctx.createOscillator(); o.type = type; o.frequency.value = Math.min(f, ctx.sampleRate * 0.45); if (det) o.detune.value = det; o.connect(dest); o.start(t0); o.stop(t1 + 0.05); nodes.push(o); return o; };
    var noise = function (dest, t0, t1) { var n = ctx.createBufferSource(); n.buffer = self.noise; n.loop = true; n.connect(dest); n.start(t0, (t0 * 0.37) % 1.5); n.stop(t1 + 0.05); nodes.push(n); return n; };
    var env = function (dest, t0, peak, att, tau, end) { var e = ctx.createGain(); e.gain.setValueAtTime(0, t0); e.gain.linearRampToValueAtTime(peak, t0 + Math.max(0.0005, att)); e.gain.setTargetAtTime(0, t0 + Math.max(0.0005, att), Math.max(0.001, tau)); e.gain.setValueAtTime(0, end); e.connect(dest); return e; };
    var sus = function (dest, t0, dur, att, peak, susLvl, rel) {
      var e = ctx.createGain(), off = t0 + Math.max(dur, att + 0.01);
      e.gain.setValueAtTime(0, t0); e.gain.linearRampToValueAtTime(peak, t0 + att);
      e.gain.setTargetAtTime(peak * susLvl, t0 + att, 0.3);
      e.gain.setValueAtTime(peak * susLvl, off); e.gain.linearRampToValueAtTime(0, off + rel);
      e.connect(dest); return { g: e, end: off + rel };
    };
    var filt = function (type, f, q, dest) { var b = ctx.createBiquadFilter(); b.type = type; b.frequency.value = f; b.Q.value = q || 0.7; b.connect(dest); return b; };
    var T0 = at, dur = cut != null ? cut : ev.dur;
    if (ev.kind === 'note') {
      var f = hz(ev.midi), k = Math.max(0.5, Math.min(2, 440 / Math.max(60, f)));
      switch (ev.patch) {
        case 'marimba': osc('sine', f, env(g, T0, 1, 0.003, 0.18 * k, T0 + 1.2), T0, T0 + 1.2); osc('sine', f * 3.93, env(g, T0, 0.28, 0.002, 0.045, T0 + 0.3), T0, T0 + 0.3); return;
        case 'vibes': osc('sine', f, env(g, T0, 1, 0.004, 0.7, T0 + 2.5), T0, T0 + 2.5); osc('sine', f * 4, env(g, T0, 0.15, 0.002, 0.1, T0 + 0.4), T0, T0 + 0.4); return;
        case 'glock': osc('sine', f, env(g, T0, 0.9, 0.002, 0.9, T0 + 2.8), T0, T0 + 2.8); osc('sine', f * 2.76, env(g, T0, 0.3, 0.001, 0.2, T0 + 0.8), T0, T0 + 0.8); return;
        case 'pluck': osc('triangle', f, env(g, T0, 1, 0.002, 0.25, T0 + 1), T0, T0 + 1); return;
        case 'ep': { var a = sus(g, T0, dur, 0.006, 0.75, 0.5, 0.35); osc('sine', f, a.g, T0, a.end); var b2 = sus(g, T0, Math.min(dur, 0.4), 0.004, 0.18, 0.2, 0.2); osc('sine', f * 2, b2.g, T0, b2.end); return; }
        case 'keys': { var kk = sus(filt('lowpass', 2200, 0.6, g), T0, dur, 0.01, 0.6, 0.6, 0.25); osc('triangle', f, kk.g, T0, kk.end); return; }
        case 'bass': { var bb = sus(filt('lowpass', 520, 0.8, g), T0, dur, 0.006, 1, 0.65, 0.12); osc('triangle', f, bb.g, T0, bb.end); osc('sine', f, bb.g, T0, bb.end); return; }
        case 'pad': { var lp = filt('lowpass', 950, 0.5, g), pp = sus(lp, T0, dur, Math.min(0.7, dur * 0.4), 0.24, 0.9, 1.2); osc('sawtooth', f, pp.g, T0, pp.end, -7); osc('sawtooth', f, pp.g, T0, pp.end, 7); return; }
      }
      return;
    }
    if (ev.kind === 'drum') {
      switch (ev.patch) {
        case 'kick': { var ke = env(g, T0, 1.2, 0.001, 0.13, T0 + 0.6), ko = osc('sine', 150, ke, T0, T0 + 0.6); ko.frequency.setValueAtTime(150, T0); ko.frequency.exponentialRampToValueAtTime(45, T0 + 0.12); return; }
        case 'snare': noise(env(filt('bandpass', 1800, 0.8, g), T0, 0.9, 0.001, 0.09, T0 + 0.4), T0, T0 + 0.4); osc('triangle', 190, env(g, T0, 0.5, 0.001, 0.06, T0 + 0.3), T0, T0 + 0.3); return;
        case 'clap': [0, 0.012, 0.025].forEach(function (o) { noise(env(filt('bandpass', 1300, 1.2, g), T0 + o, 0.7, 0.001, o === 0.025 ? 0.08 : 0.01, T0 + o + 0.3), T0 + o, T0 + o + 0.3); }); return;
        case 'hat': noise(env(filt('highpass', 8000, 0.7, g), T0, 0.6, 0.001, 0.025, T0 + 0.15), T0, T0 + 0.15); return;
        case 'openhat': noise(env(filt('highpass', 7500, 0.7, g), T0, 0.6, 0.001, 0.18, T0 + 0.8), T0, T0 + 0.8); return;
        case 'shaker': noise(env(filt('bandpass', 6500, 1.4, g), T0, 0.9, 0.012, 0.035, T0 + 0.2), T0, T0 + 0.2); return;
        case 'sidestick': noise(env(filt('bandpass', 2600, 2, g), T0, 0.9, 0.001, 0.022, T0 + 0.15), T0, T0 + 0.15); osc('triangle', 900, env(g, T0, 0.5, 0.001, 0.018, T0 + 0.1), T0, T0 + 0.1); return;
        case 'woodblock': osc('sine', 1100, env(g, T0, 0.9, 0.001, 0.04, T0 + 0.25), T0, T0 + 0.25); return;
        case 'tamb': noise(env(filt('highpass', 6000, 1, g), T0, 0.7, 0.002, 0.09, T0 + 0.4), T0, T0 + 0.4); return;
        case 'tom': { var te = env(g, T0, 1, 0.001, 0.18, T0 + 0.6), to = osc('sine', 130, te, T0, T0 + 0.6); to.frequency.setValueAtTime(130, T0); to.frequency.exponentialRampToValueAtTime(80, T0 + 0.25); return; }
        case 'crash': noise(env(filt('highpass', 4500, 0.5, g), T0, 0.8, 0.002, 0.65, T0 + 2.2), T0, T0 + 2.2); return;
        case 'ride': noise(env(filt('highpass', 6000, 0.5, g), T0, 0.45, 0.002, 0.35, T0 + 1.2), T0, T0 + 1.2); osc('sine', 3200, env(g, T0, 0.1, 0.001, 0.3, T0 + 1), T0, T0 + 1); return;
        case 'cowbell': osc('square', 560, env(filt('bandpass', 900, 2, g), T0, 0.5, 0.001, 0.08, T0 + 0.4), T0, T0 + 0.4); osc('square', 845, env(filt('bandpass', 900, 2, g), T0, 0.35, 0.001, 0.08, T0 + 0.4), T0, T0 + 0.4); return;
      }
      return;
    }
    // foley
    var ps = Math.pow(2, (p.pitch || 0) / 12);
    switch (ev.patch) {
      case 'tick': osc('sine', 1500 * ps, env(g, T0, 0.8, 0.001, 0.014, T0 + 0.1), T0, T0 + 0.1); return;
      case 'click': osc('triangle', 1800 * ps, env(g, T0, 0.7, 0.001, 0.012, T0 + 0.1), T0, T0 + 0.1); noise(env(filt('highpass', 3000, 0.7, g), T0, 0.3, 0.001, 0.008, T0 + 0.06), T0, T0 + 0.06); return;
      case 'doubleclick': [0, 0.09].forEach(function (o) { osc('triangle', 1800 * ps, env(g, T0 + o, 0.7, 0.001, 0.012, T0 + o + 0.1), T0 + o, T0 + o + 0.1); }); return;
      case 'pop': { var po = osc('sine', 420 * ps, env(g, T0, 0.9, 0.002, 0.06, T0 + 0.3), T0, T0 + 0.3); po.frequency.setValueAtTime(420 * ps, T0); po.frequency.exponentialRampToValueAtTime(950 * ps, T0 + 0.05); return; }
      case 'ding': osc('sine', 1318.5 * ps, env(g, T0, 0.6, 0.002, 0.5, T0 + 2), T0, T0 + 2); osc('sine', 1975.5 * ps, env(g, T0 + 0.08, 0.5, 0.002, 0.55, T0 + 2.1), T0 + 0.08, T0 + 2.1); return;
      case 'chime': [659.3, 830.6, 987.8, 1318.5].forEach(function (fq, i) { var o2 = T0 + i * 0.07; osc('sine', fq * ps, env(g, o2, 0.5, 0.002, 0.45, o2 + 1.8), o2, o2 + 1.8); }); return;
      case 'sparkle': { var r = rng(Math.floor(T0 * 1000)); for (var i2 = 0; i2 < 6; i2++) { var o3 = T0 + i2 * 0.05; osc('sine', (2000 + r() * 2500) * ps, env(g, o3, 0.3, 0.001, 0.12, o3 + 0.6), o3, o3 + 0.6); } return; }
      case 'thud': { var th = osc('sine', 95, env(g, T0, 1, 0.002, 0.15, T0 + 0.6), T0, T0 + 0.6); th.frequency.setValueAtTime(95, T0); th.frequency.exponentialRampToValueAtTime(48, T0 + 0.2); noise(env(filt('lowpass', 400, 0.7, g), T0, 0.4, 0.001, 0.05, T0 + 0.3), T0, T0 + 0.3); return; }
      case 'boing': { var bo = osc('sine', 220, env(g, T0, 0.8, 0.003, 0.3, T0 + 0.9), T0, T0 + 0.9); bo.frequency.setValueAtTime(220, T0); bo.frequency.exponentialRampToValueAtTime(520, T0 + 0.08); bo.frequency.exponentialRampToValueAtTime(300, T0 + 0.5); return; }
      case 'whoosh': {
        var wd = Math.max(0.15, dur), bp = filt('bandpass', 400, 0.9, g), we = ctx.createGain(); we.connect(bp);
        we.gain.setValueAtTime(0, T0); we.gain.linearRampToValueAtTime(0.9, T0 + wd * (p.into ? 0.85 : 0.4)); we.gain.linearRampToValueAtTime(0, T0 + wd);
        bp.frequency.setValueAtTime(p.into ? 3000 : 400, T0); bp.frequency.exponentialRampToValueAtTime(p.into ? 600 : 2800, T0 + wd * 0.6); bp.frequency.exponentialRampToValueAtTime(500, T0 + wd);
        noise(we, T0, T0 + wd); return;
      }
      case 'revswell': {
        var rd = Math.max(0.2, ev.dur), st = Math.max(T0 - rd, ctx.currentTime); if (T0 - st < 0.1) return;
        var lp2 = filt('lowpass', 300, 0.7, g), re = ctx.createGain(); re.connect(lp2);
        re.gain.setValueAtTime(0, st); re.gain.linearRampToValueAtTime(0.9, T0 - 0.02); re.gain.linearRampToValueAtTime(0, T0 + 0.05);
        lp2.frequency.setValueAtTime(300, st); lp2.frequency.exponentialRampToValueAtTime(5000, T0);
        noise(re, st, T0 + 0.1); return;
      }
      case 'roll': {
        var rl = Math.max(0.2, dur), n = Math.max(4, Math.round(rl * 9)), tt = 0;
        for (var j = 0; j < n; j++) { var x = j / n, o4 = T0 + rl * (1 - Math.pow(1 - x, 1.8)); if (o4 - tt < 0.02 && j) continue; tt = o4; osc('sine', 1500 * ps, env(g, o4, 0.5, 0.001, 0.012, o4 + 0.08), o4, o4 + 0.08); }
        osc('sine', 1318.5, env(g, T0 + rl, 0.6, 0.002, 0.5, T0 + rl + 2), T0 + rl, T0 + rl + 2);
        osc('sine', 1975.5, env(g, T0 + rl + 0.08, 0.5, 0.002, 0.55, T0 + rl + 2.1), T0 + rl + 0.08, T0 + rl + 2.1);
        return;
      }
    }
  };

  // ---------- Player ----------
  var CSS = [
    '.k53p{display:flex;flex-direction:column;gap:10px;width:100%}',
    '.k53p-view{position:relative;width:100%;aspect-ratio:16/9;overflow:hidden;border-radius:14px;background:#F3F5F7;box-shadow:0 6px 18px rgba(0,0,0,.18);contain:layout paint}',
    '.k53p-view:fullscreen{border-radius:0;background:#000;aspect-ratio:auto;width:100vw;height:100vh}',
    '.k53p-view:-webkit-full-screen{border-radius:0;background:#000;width:100vw;height:100vh}',
    '#k53stage{position:absolute;left:0;top:0;width:1920px;height:1080px;overflow:hidden;transform-origin:0 0;background:#F3F5F7}',
    '#k53stage .k53p-scene{position:absolute;inset:0;display:none}',
    '#k53stage .k53p-miss{display:flex;align-items:center;justify-content:center;font:700 72px/1.1 var(--display,system-ui,sans-serif);color:#18212B;text-align:center;padding:120px}',
    '.k53p-big{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:clamp(64px,14vw,104px);height:clamp(64px,14vw,104px);border-radius:50%;border:0;background:#F5C400;color:#18212B;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 30px rgba(0,0,0,.28);cursor:pointer;transition:transform .2s}',
    '.k53p-big:hover{transform:translate(-50%,-50%) scale(1.06)}',
    '.k53p-big svg{width:42%;height:42%;margin-left:8%}',
    '.k53p-bar{display:flex;align-items:center;gap:8px;flex-wrap:wrap}',
    '.k53p-btn{min-width:44px;min-height:44px;border-radius:10px;border:1px solid var(--line,#dbe1e7);background:var(--surface,#fff);color:var(--ink,#18212b);display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:0 10px;font:700 15px/1 inherit;cursor:pointer;transition:transform .15s,background .15s}',
    '.k53p-btn:hover{transform:translateY(-1px)}',
    '.k53p-btn.k53p-main{background:#F5C400;border-color:#F5C400;color:#18212B}',
    '.k53p-btn svg{width:20px;height:20px}',
    '.k53p-range{flex:1 1 160px;min-width:120px;height:44px;accent-color:#F5C400;cursor:pointer}',
    '.k53p-vol{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line,#dbe1e7);border-radius:10px;padding:0 10px 0 0;min-height:44px;background:var(--surface,#fff)}',
    '.k53p-vol .k53p-btn{border:0;background:transparent}',
    '.k53p-vrange{width:clamp(80px,22vw,130px);height:44px;accent-color:#F5C400;cursor:pointer;margin:0}',
    '.k53p-vpct{font:600 13px/1 ui-monospace,"IBM Plex Mono",monospace;min-width:38px;text-align:right;color:var(--ink2,#3a4654)}',
    '.k53p-time{font:600 14px/1 ui-monospace,"IBM Plex Mono",monospace;color:var(--ink2,#3a4654);white-space:nowrap}',
    '.k53p-cap{font-size:15px;color:var(--ink2,#3a4654);display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap}',
    '.k53p-cap b{color:var(--ink,#18212b)}',
    '.k53p-view:fullscreen .k53p-big{width:120px;height:120px}',
    '.k53p.k53p-fs{position:fixed;left:0;top:0;width:100vw;height:100vh;height:100dvh;z-index:2147483000;background:#000;margin:0;padding:0 0 8px;gap:6px;box-sizing:border-box}',
    '.k53p.k53p-fs.k53p-rot{width:100vh;width:100dvh;height:100vw;transform-origin:0 0;transform:translateX(100vw) rotate(90deg)}',
    '.k53p.k53p-fs .k53p-view{flex:1 1 auto;aspect-ratio:auto;height:auto;min-height:0;border-radius:0;box-shadow:none;background:#000}',
    '.k53p.k53p-fs .k53p-bar{padding:0 10px;flex:0 0 auto;flex-wrap:nowrap}',
    '.k53p.k53p-fs .k53p-range{min-width:60px}',
    '.k53p.k53p-fs .k53p-cap{display:none}',
    '.k53p.k53p-fs .k53p-btn{background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.25);color:#fff}',
    '.k53p.k53p-fs .k53p-btn.k53p-main{background:#F5C400;color:#18212B}',
    '.k53p.k53p-fs .k53p-vol{background:rgba(255,255,255,.12);border-color:rgba(255,255,255,.25)}',
    '.k53p.k53p-fs .k53p-time,.k53p.k53p-fs .k53p-vpct{color:#fff}'
  ].join('\n');

  var ICON = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l13-7.5z" fill="currentColor"/></svg>',
    pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="4.5" width="4.2" height="15" rx="1.2" fill="currentColor"/><rect x="13.8" y="4.5" width="4.2" height="15" rx="1.2" fill="currentColor"/></svg>',
    replay: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v5h5"/></svg>',
    prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="5" width="2.6" height="14" rx="1" fill="currentColor"/><path d="M19 5v14L9 12z" fill="currentColor"/></svg>',
    next: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="16.4" y="5" width="2.6" height="14" rx="1" fill="currentColor"/><path d="M5 5v14l10-7z" fill="currentColor"/></svg>',
    sound: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19 6a8.5 8.5 0 0 1 0 12"/></svg>',
    mute: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9v6h4l5 4V5L8 9z" fill="currentColor"/><path d="M17 9l5 6M22 9l-5 6"/></svg>',
    exitfull: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5"/></svg>',
    full: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>'
  };
  var fmt = function (s) { s = Math.max(0, Math.floor(s)); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); };

  function scopeCss(css) {
    // Prefix every rule with the stage id so the film's classes cannot touch the app
    var out = [], depth = 0;
    css = String(css).replace(/\/\*[\s\S]*?\*\//g, '');
    css.split('}').forEach(function (chunk) {
      var i = chunk.indexOf('{'); if (i < 0) return;
      var sel = chunk.slice(0, i).trim(), body = chunk.slice(i + 1);
      if (!sel) return;
      var scoped = sel.split(',').map(function (s) {
        s = s.trim(); if (!s) return s;
        if (/^#stage\b/.test(s)) return s.replace(/^#stage/, '#k53stage');
        if (/^(html|body|:root)\b/.test(s)) return '#k53stage';
        return '#k53stage ' + s;
      }).join(', ');
      out.push(scoped + '{' + body + '}');
    });
    return out.join('\n');
  }

  function create(host, film, opts) {
    opts = opts || {};
    if (!document.getElementById('k53p-css')) { var st = document.createElement('style'); st.id = 'k53p-css'; st.textContent = CSS; document.head.appendChild(st); }
    var old = document.getElementById('k53p-film-css'); if (old) old.parentNode.removeChild(old);
    var fcss = document.createElement('style'); fcss.id = 'k53p-film-css'; fcss.textContent = scopeCss(film.css || ''); document.head.appendChild(fcss);

    var list = film.scenes || [], at = [], T = {}, end = 0;
    list.forEach(function (s) { at.push(end); T[s.id] = end; end += s.dur; });
    T.END = end;
    var dur = end;

    var root = el('div', { 'class': 'k53p' });
    var view = el('div', { 'class': 'k53p-view' });
    var stage = el('div', { attrs: { id: 'k53stage', 'aria-hidden': 'true' } });
    stage.style.setProperty('--display', '"Barlow Semi Condensed","Instrument Sans",system-ui,sans-serif');
    stage.style.setProperty('--sans', '"Source Sans 3","Plus Jakarta Sans",system-ui,sans-serif');
    stage.style.fontFamily = 'var(--sans)';
    view.appendChild(stage);
    var big = el('button', { 'class': 'k53p-big', html: ICON.play, attrs: { type: 'button', 'aria-label': 'Play the film' } });
    view.appendChild(big);
    var bPlay = el('button', { 'class': 'k53p-btn k53p-main', html: ICON.play, attrs: { type: 'button', 'aria-label': 'Play' } });
    var bPrev = el('button', { 'class': 'k53p-btn', html: ICON.prev, attrs: { type: 'button', 'aria-label': 'Previous part' } });
    var bNext = el('button', { 'class': 'k53p-btn', html: ICON.next, attrs: { type: 'button', 'aria-label': 'Next part' } });
    var range = el('input', { 'class': 'k53p-range', attrs: { type: 'range', min: '0', max: String(Math.round(dur * 10)), step: '1', value: '0', 'aria-label': 'Position in the film' } });
    var time = el('span', { 'class': 'k53p-time', text: '0:00 / ' + fmt(dur) });
    var bSnd = el('button', { 'class': 'k53p-btn', html: ICON.sound, attrs: { type: 'button', 'aria-label': 'Turn sound off', 'aria-pressed': 'true' } });
    var bFull = el('button', { 'class': 'k53p-btn', html: ICON.full, attrs: { type: 'button', 'aria-label': 'Full screen' } });
    var vol = 0.8; try { var sv = parseFloat(window.localStorage.getItem('k53-film-vol')); if (!isNaN(sv)) vol = Math.max(0, Math.min(1, sv)); } catch (e) {}
    var vRange = el('input', { 'class': 'k53p-vrange', attrs: { type: 'range', min: '0', max: '100', step: '5', value: String(Math.round(vol * 100)), 'aria-label': 'Film volume' } });
    var vPct = el('span', { 'class': 'k53p-vpct', text: Math.round(vol * 100) + '%' });
    var vBox = el('div', { 'class': 'k53p-vol' }, [bSnd, vRange, vPct]);
    var bar = el('div', { 'class': 'k53p-bar' }, [bPlay, bPrev, bNext, range, time, vBox, bFull]);
    var capL = el('span'), capR = el('span');
    var cap = el('div', { 'class': 'k53p-cap', attrs: { 'aria-live': 'polite' } }, [capL, capR]);
    root.appendChild(view); root.appendChild(bar); root.appendChild(cap);
    host.innerHTML = ''; host.appendChild(root);

    // Kit
    var defs = {}, kits = {}, boxes = {}, failed = {}, scoreFn = null, open = null;
    var base = {
      W: 1920, H: 1080, stage: stage, h: h, el: el, esc: esc,
      css: function (text) { var s = document.createElement('style'); s.textContent = scopeCss(text); fcss.parentNode.appendChild(s); return s; },
      clamp01: clamp01, clamp: clamp, seg: seg, lerp: lerp, eo: eo, ei: ei, eio: eio, eoq: eoq, eox: eox, eob: eob, smoothstep: smoothstep, rng: rng, vnoise: vnoise, breathe: breathe,
      step: function (t, a) { return t >= a ? 1 : 0; }, pulse: function (t, a, b) { return t >= a && t < b ? 1 : 0; },
      spring: function (x) { x = clamp01(x); return 1 - Math.exp(-6 * x) * Math.cos(10 * x); },
      TextFx: TextFx, fonts: { display: '"Barlow Semi Condensed",system-ui,sans-serif', sans: '"Source Sans 3",system-ui,sans-serif', serif: 'Georgia,serif', mono: '"IBM Plex Mono",monospace' },
      typing: { times: [] },
      module: function () { return null; }, json: function () { return null; }, modules: function () { return []; },
      scene: function (id, def) { if (id === open && def && typeof def.render === 'function') defs[id] = def; },
      score: function (fn) { if (typeof fn === 'function') scoreFn = fn; }
    };
    try { if (film.shared) film.shared(base); } catch (e) { console.error('K53 film shared: ' + e); }
    list.forEach(function (s) {
      var box = el('div', { 'class': 'k53p-scene' }); stage.appendChild(box); boxes[s.id] = box;
      var k = Object.create(base); k.stage = box; kits[s.id] = k;
      open = s.id;
      try {
        var mod = film.mods && film.mods[s.id];
        if (mod) mod(k);
        open = null;
        var def = defs[s.id];
        if (!def) throw new Error('no scene');
        box.style.display = 'block';
        if (typeof def.init === 'function') def.init.call(def, k);
        def.render.call(def, 0, k);
        box.style.display = 'none';
      } catch (e) {
        open = null; failed[s.id] = true; console.error('K53 film scene ' + s.id + ': ' + e);
        box.innerHTML = ''; box.className = 'k53p-scene k53p-miss'; box.textContent = s.name;
      }
    });
    var score = null;
    try { if (film.score) film.score(base); } catch (e) { console.error('K53 film score: ' + e); }
    if (scoreFn) score = recordScore(scoreFn, Object.assign({}, T));

    // State
    var t = 0, playing = false, wall0 = 0, film0 = 0, raf = 0, cur = -1, muted = !!opts.muted, engine = null, sess = null, schedTo = 0, schedTimer = 0, destroyed = false, evIdx = 0;

    function sceneAt(tt) { var i = 0; while (i + 1 < list.length && tt >= at[i + 1]) i++; return i; }
    function draw() {
      var i = sceneAt(t), s = list[i];
      if (!s) return;
      if (i !== cur) {
        if (cur >= 0 && list[cur]) boxes[list[cur].id].style.display = 'none';
        boxes[s.id].style.display = failed[s.id] ? 'flex' : 'block';
        cur = i;
        capL.innerHTML = 'Part ' + (i + 1) + ' of ' + list.length + ': <b>' + esc(s.name) + '</b>';
      }
      if (!failed[s.id]) { try { defs[s.id].render.call(defs[s.id], Math.min(t - at[i], s.dur - 0.0001), kits[s.id]); } catch (e) { console.error('K53 film render ' + s.id + ': ' + e); } }
      time.textContent = fmt(t) + ' / ' + fmt(dur);
      if (!range.__drag) range.value = String(Math.round(t * 10));
    }
    function fit() {
      var w = view.clientWidth, hh = view.clientHeight; if (!w || !hh) return;
      var sc = Math.min(w / 1920, hh / 1080);
      stage.style.transform = 'translate(' + ((w - 1920 * sc) / 2).toFixed(1) + 'px,' + ((hh - 1080 * sc) / 2).toFixed(1) + 'px) scale(' + sc.toFixed(5) + ')';
    }
    var ro = window.ResizeObserver ? new ResizeObserver(fit) : null;
    if (ro) ro.observe(view); else window.addEventListener('resize', fit);
    fit();

    // Audio
    function wake() {
      if (!engine) return;
      try { if (navigator.audioSession && navigator.audioSession.type !== 'playback') navigator.audioSession.type = 'playback'; } catch (e) {}
      try { if (engine.ctx.state !== 'running') engine.ctx.resume(); } catch (e) {}
      try { var b = engine.ctx.createBuffer(1, 1, 22050), src = engine.ctx.createBufferSource(); src.buffer = b; src.connect(engine.ctx.destination); src.start(0); } catch (e) {}
    }
    function audioStart() {
      if (!score || muted) return;
      if (!engine) { try { engine = new Engine(opts.audioContext); } catch (e) { engine = null; } if (!engine || !engine.ok) { engine = null; return; } }
      engine.out.gain.value = vol;
      wake();
      audioStop();
      sess = engine.session(score.master.gain);
      var now = engine.ctx.currentTime + 0.05, f0 = t;
      sess.c0 = now; sess.f0 = f0;
      // carry long notes already sounding (pads), so a seek does not land in silence
      score.events.forEach(function (ev) {
        if (ev.kind === 'note' && ev.t < f0 && ev.t + ev.dur > f0 + 0.3 && ev.dur > 1) engine.voice(sess, ev, now, ev.t + ev.dur - f0);
      });
      // fade out at the end
      var fo = score.master.fadeOut || 0;
      if (fo > 0) { var fs = now + Math.max(0, dur - fo - f0); try { sess.bus.gain.setValueAtTime(dB(score.master.gain), Math.max(now, fs)); sess.bus.gain.linearRampToValueAtTime(0.0001, now + Math.max(0.05, dur - f0)); } catch (e) {} }
      evIdx = 0; while (evIdx < score.events.length && score.events[evIdx].at < f0) evIdx++;
      schedTo = f0;
      pump();
      schedTimer = setInterval(pump, 60);
    }
    function pump() {
      if (!sess || !engine) return;
      if (engine.ctx.state !== 'running') { try { engine.ctx.resume(); } catch (e) {} }
      var ctxNow = engine.ctx.currentTime, filmNow = sess.f0 + (ctxNow - sess.c0), horizon = filmNow + 0.35;
      while (evIdx < score.events.length && score.events[evIdx].at <= horizon) {
        var ev = score.events[evIdx++];
        if (ev.t > dur + 0.01) continue;
        var when = sess.c0 + (ev.t - sess.f0);
        if (sess.c0 + (ev.at - sess.f0) < ctxNow - 0.05) continue;
        try { engine.voice(sess, ev, Math.max(when, ctxNow)); } catch (e) {}
      }
    }
    function audioStop() { clearInterval(schedTimer); schedTimer = 0; if (engine && sess) engine.endSession(sess); sess = null; }

    function tick() {
      if (!playing || destroyed) return;
      t = film0 + (performance.now() - wall0) / 1000;
      if (t >= dur) { t = dur - 0.001; draw(); pause(true); return; }
      draw();
      raf = requestAnimationFrame(tick);
    }
    function setPlayIcon() {
      bPlay.innerHTML = playing ? ICON.pause : (t >= dur - 0.01 ? ICON.replay : ICON.play);
      bPlay.setAttribute('aria-label', playing ? 'Pause' : (t >= dur - 0.01 ? 'Watch again' : 'Play'));
      big.style.display = !playing && (t < 0.05 || t >= dur - 0.01) ? 'flex' : 'none';
      big.innerHTML = t >= dur - 0.01 ? ICON.replay : ICON.play;
      big.setAttribute('aria-label', t >= dur - 0.01 ? 'Watch the film again' : 'Play the film');
    }
    function play() {
      if (playing) return;
      if (t >= dur - 0.01) t = 0;
      playing = true; wall0 = performance.now(); film0 = t;
      audioStart(); setPlayIcon();
      if (opts.onPlay) try { opts.onPlay(); } catch (e) {}
      raf = requestAnimationFrame(tick);
    }
    function pause(ended) {
      if (!playing) return;
      playing = false; cancelAnimationFrame(raf); audioStop(); setPlayIcon();
      capR.textContent = ended ? 'Finished. Press play to watch again.' : '';
      if (ended && opts.onEnd) { try { opts.onEnd(); } catch (e) {} }
    }
    function seek(nt) {
      t = clamp(nt, 0, dur - 0.001); film0 = t; wall0 = performance.now();
      draw(); capR.textContent = '';
      if (playing) audioStart(); else setPlayIcon();
    }
    function toggle() { if (playing) pause(); else play(); }
    bPlay.addEventListener('click', toggle);
    big.addEventListener('click', play);
    bPrev.addEventListener('click', function () { var i = sceneAt(t); seek(t - at[i] > 1.5 ? at[i] : at[Math.max(0, i - 1)]); });
    bNext.addEventListener('click', function () { var i = sceneAt(t); if (i + 1 < list.length) seek(at[i + 1]); });
    range.addEventListener('input', function () { range.__drag = true; seek(Number(range.value) / 10); });
    range.addEventListener('change', function () { range.__drag = false; });
    function sndIcon() {
      var off = muted || vol === 0;
      bSnd.innerHTML = off ? ICON.mute : ICON.sound;
      bSnd.setAttribute('aria-label', off ? 'Turn sound on' : 'Turn sound off');
      bSnd.setAttribute('aria-pressed', off ? 'false' : 'true');
      vPct.textContent = off ? 'Off' : Math.round(vol * 100) + '%';
      vRange.setAttribute('aria-valuetext', off ? 'Sound off' : Math.round(vol * 100) + ' percent');
    }
    bSnd.addEventListener('click', function () {
      if (vol === 0) { vol = 0.8; vRange.value = '80'; muted = false; }
      else muted = !muted;
      sndIcon();
      if (playing) { if (muted) audioStop(); else if (!sess) audioStart(); }
    });
    vRange.addEventListener('input', function () {
      vol = Math.max(0, Math.min(1, Number(vRange.value) / 100));
      try { window.localStorage.setItem('k53-film-vol', String(vol)); } catch (e) {}
      if (engine) { try { engine.out.gain.setTargetAtTime(vol, engine.ctx.currentTime, 0.03); } catch (e) { engine.out.gain.value = vol; } }
      if (vol > 0 && muted) { muted = false; if (playing && !sess) audioStart(); }
      sndIcon();
    });
    sndIcon();
    // Full screen: the real one where the browser allows it, otherwise the player fills the window
    // (phones, and pages shown inside a frame, often refuse the real one). On a portrait phone it turns sideways.
    var fsMode = 0, prevOverflow = '';
    function setFsIcon() { var on = fsMode !== 0; bFull.innerHTML = on ? ICON.exitfull : ICON.full; bFull.setAttribute('aria-label', on ? 'Leave full screen' : 'Full screen'); }
    function layoutFs() {
      if (fsMode !== 2) return;
      var portrait = window.innerHeight > window.innerWidth;
      root.classList.toggle('k53p-rot', portrait);
      fit();
    }
    function enterPseudo() {
      fsMode = 2; prevOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden';
      root.classList.add('k53p-fs'); layoutFs(); setFsIcon();
      setTimeout(fit, 60);
    }
    function leaveFs() {
      var d = document;
      if (fsMode === 1 && (d.fullscreenElement || d.webkitFullscreenElement)) { try { (d.exitFullscreen || d.webkitExitFullscreen).call(d); } catch (e) {} }
      if (fsMode === 2) { root.classList.remove('k53p-fs', 'k53p-rot'); document.body.style.overflow = prevOverflow; }
      fsMode = 0; setFsIcon(); setTimeout(fit, 60);
    }
    var onFsChange = function () { var d = document; if (fsMode === 1 && !(d.fullscreenElement || d.webkitFullscreenElement)) { fsMode = 0; setFsIcon(); setTimeout(fit, 60); } };
    document.addEventListener('fullscreenchange', onFsChange); document.addEventListener('webkitfullscreenchange', onFsChange);
    window.addEventListener('resize', layoutFs); window.addEventListener('orientationchange', layoutFs);
    bFull.addEventListener('click', function () {
      if (fsMode !== 0) { leaveFs(); return; }
      var small = Math.min(window.innerWidth, window.innerHeight) < 600 || ('ontouchstart' in window);
      var rq = root.requestFullscreen || root.webkitRequestFullscreen;
      if (!rq || small) { enterPseudo(); return; }
      try {
        var pr = rq.call(root);
        fsMode = 1; setFsIcon();
        if (pr && pr.then) pr.then(function () { root.classList.add('k53p-fs'); setTimeout(fit, 60); }, function () { fsMode = 0; enterPseudo(); });
      } catch (e) { fsMode = 0; enterPseudo(); }
    });
    var onFsChange2 = function () { var d = document; if (!(d.fullscreenElement || d.webkitFullscreenElement) && fsMode !== 2) root.classList.remove('k53p-fs'); };
    document.addEventListener('fullscreenchange', onFsChange2);
    stage.addEventListener('click', toggle);
    var onVis = function () { if (document.hidden) pause(); };
    document.addEventListener('visibilitychange', onVis);

    capR.textContent = '';
    draw(); setPlayIcon();
    if (opts.autoplay) play();

    return {
      root: root, play: play, pause: function () { pause(); }, seek: seek, duration: dur,
      destroy: function () {
        destroyed = true; pause(); audioStop(); if (fsMode !== 0) leaveFs();
        document.removeEventListener('fullscreenchange', onFsChange); document.removeEventListener('webkitfullscreenchange', onFsChange); document.removeEventListener('fullscreenchange', onFsChange2);
        window.removeEventListener('resize', layoutFs); window.removeEventListener('orientationchange', layoutFs); document.removeEventListener('visibilitychange', onVis);
        if (ro) ro.disconnect(); else window.removeEventListener('resize', fit);
        if (engine) { try { engine.out.disconnect(); if (!engine.shared) engine.ctx.close(); } catch (e) {} }
        if (root.parentNode) root.parentNode.removeChild(root);
        var c = document.getElementById('k53p-film-css'); if (c) c.parentNode.removeChild(c);
      }
    };
  }

  window.K53Player = { create: create, version: 1 };
})();
