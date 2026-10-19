(window.K53F = window.K53F || {})[4] = {
 title: "Session 4: Traffic signals and hand signals",
 scenes: [{"id": "title", "name": "Traffic signals", "dur": 7}, {"id": "discs", "name": "Steady discs", "dur": 15}, {"id": "trapyellow", "name": "Trap: steady yellow", "dur": 14}, {"id": "flashred", "name": "Flashing red", "dur": 12}, {"id": "trapflash", "name": "Trap: flashing red", "dur": 14}, {"id": "bustram", "name": "Bus and tram lights", "dur": 9}, {"id": "arrows", "name": "Flashing red arrow", "dur": 13}, {"id": "traparrow", "name": "Trap: red arrow", "dur": 14}, {"id": "greenarrows", "name": "Yellow and green arrows", "dur": 12}, {"id": "pedestrian", "name": "Pedestrian signals", "dur": 12}, {"id": "overhead", "name": "Overhead lane signals", "dur": 12}, {"id": "trapoverhead", "name": "Trap: slanted arrow", "dur": 14}, {"id": "flashing", "name": "Flashing lights", "dur": 12}, {"id": "officer", "name": "Traffic officer", "dur": 15}, {"id": "trapofficer", "name": "Trap: officer's back", "dur": 14}, {"id": "flagman", "name": "Flagman", "dur": 12}, {"id": "handsignals", "name": "Your hand signals", "dur": 23}, {"id": "freeway", "name": "Not on a freeway", "dur": 9}, {"id": "end", "name": "Remember", "dur": 11}],
 css: "#stage { --ground:#F3F5F7; --main:#1F5F8B; --second:#18212B; --accent:#F5C400; --sign-red:#C8102E; --sign-blue:#0A4D94; color:var(--second); font-family:var(--sans, system-ui, sans-serif) }\n.ground { position:absolute; inset:0; background:var(--ground); background-image:linear-gradient(color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px), linear-gradient(90deg, color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px); background-size:80px 80px; background-position:-1px -1px }\n.words { position:absolute; margin:0; display:flex; flex-direction:column; gap:24px } .words > * { margin:0 }\n.line { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:96px; line-height:1.02; font-weight:700; letter-spacing:-0.01em } .sub { font-size:40px; line-height:1.3; color:color-mix(in srgb, var(--second) 78%, var(--ground)) }\n.kicker { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:30px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:var(--main); display:flex; align-items:center; gap:16px }\n.kicker::before { content:''; width:44px; height:8px; border-radius:4px; background:var(--accent) }\n.bar { height:10px; width:160px; border-radius:5px; background:var(--accent) }\n.art { position:absolute; inset:0; width:100%; height:100%; overflow:visible }\n.sr { fill:var(--sign-red) } .sb { fill:var(--sign-blue) } .sw { fill:#FFFFFF } .sk { fill:var(--second) }\n.edge { fill:none; stroke:color-mix(in srgb, var(--second) 18%, transparent); stroke-width:3 }\n.shadow { fill:rgba(0,0,0,.12) }\n.card { position:absolute; background:#FFFFFF; border:3px solid color-mix(in srgb, var(--main) 35%, var(--ground)); border-radius:28px; box-shadow:0 18px 40px -18px rgba(0,0,0,.25) }\n.tag { display:inline-flex; align-self:flex-start; padding:10px 22px; border-radius:999px; background:var(--main); color:#FFFFFF; font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:34px; font-weight:700 }\n.tag.no { background:var(--sign-red) }\n.road { fill:color-mix(in srgb, var(--second) 82%, var(--ground)) } .lane { stroke:#FFFFFF; stroke-width:8; stroke-dasharray:40 34; fill:none } .lane.solid { stroke-dasharray:none; stroke:var(--accent) }\n.sig-box { fill:var(--second) } .sig-off { fill:color-mix(in srgb, var(--second) 72%, var(--ground)) } .sig-r { fill:var(--sign-red) } .sig-y { fill:var(--accent) } .sig-g { fill:#1E9E58 }\n.sig-ra { fill:none; stroke:var(--sign-red); stroke-linecap:round; stroke-linejoin:round } .sig-ya { fill:none; stroke:var(--accent); stroke-linecap:round; stroke-linejoin:round } .sig-ga { fill:none; stroke:#1E9E58; stroke-linecap:round; stroke-linejoin:round }\n.ppl-body { fill:var(--main) } .ppl-head { fill:color-mix(in srgb, var(--second) 55%, var(--ground)) } .ppl-arm { fill:none; stroke:var(--main); stroke-width:34; stroke-linecap:round } .ppl-vest { fill:var(--accent) }\n.tag.wait { background:var(--accent); color:var(--second) }\n.sig-rm { fill:var(--sign-red); stroke:var(--sign-red) } .sig-gm { fill:#1E9E58; stroke:#1E9E58 }\n",
 shared: function (kit) {
window.SG = {
  oct(cx, cy, r) { const p = []; for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + i * Math.PI / 4; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } return p.join(' '); },
  octWedge(cx, cy, r, i) { const a1 = Math.PI / 8 + i * Math.PI / 4, a2 = a1 + Math.PI / 4; return cx + ',' + cy + ' ' + (cx + r * Math.cos(a1)).toFixed(1) + ',' + (cy + r * Math.sin(a1)).toFixed(1) + ' ' + (cx + r * Math.cos(a2)).toFixed(1) + ',' + (cy + r * Math.sin(a2)).toFixed(1); },
  arrowUp(cx, cy, s) { return 'M' + cx + ' ' + (cy + s) + ' V' + (cy - s * 0.35) + ' M' + (cx - s * 0.55) + ' ' + (cy + s * 0.15) + ' L' + cx + ' ' + (cy - s) + ' L' + (cx + s * 0.55) + ' ' + (cy + s * 0.15); },
  wob(t, seed) { return Math.sin(t * 2.1 + seed) * 0.8 + Math.sin(t * 1.3 + seed * 2) * 0.5; },
  lampY(n, r, i) { const g = 2 * r + 24; return -n * g / 2 + g * i + g / 2; },
  box(n, r) { const g = 2 * r + 24, w = 2 * r + 48, h = n * g + 24, rx = (r * 0.5).toFixed(1); let s = '<rect class="shadow" x="' + (-w / 2 + 12) + '" y="' + (-h / 2 + 18) + '" width="' + w + '" height="' + h + '" rx="' + rx + '"/><rect class="sig-box" x="' + (-w / 2) + '" y="' + (-h / 2) + '" width="' + w + '" height="' + h + '" rx="' + rx + '"/>'; for (let i = 0; i < n; i++) s += '<circle class="sig-off" cy="' + SG.lampY(n, r, i) + '" r="' + r + '"/>'; return s; },
  arrowL(r) { return 'M' + (r * 0.55).toFixed(1) + ' 0 H' + (-r * 0.45).toFixed(1) + ' M' + (-r * 0.08).toFixed(1) + ' ' + (-r * 0.42).toFixed(1) + ' L' + (-r * 0.52).toFixed(1) + ' 0 L' + (-r * 0.08).toFixed(1) + ' ' + (r * 0.42).toFixed(1); },
  flash(t, t0, per) { if (t < t0) return 1; return ((t - t0) % per) < per / 2 ? 1 : 0; },
  person(cls) { return '<rect class="ppl-body" x="-48" y="170" width="40" height="160" rx="18"/><rect class="ppl-body" x="8" y="170" width="40" height="160" rx="18"/><rect class="' + (cls || 'ppl-body') + '" x="-62" y="-40" width="124" height="230" rx="52"/><circle class="ppl-head" cy="-100" r="52"/>'; },
  trap(kit, id, d) {
    const W = kit.stage.appendChild(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="' + id + '-art">' + (d.art || '') + '</g></svg>' +
      '<div class="words" style="left:140px;top:90px;width:1140px;gap:26px">' +
      '<div class="kicker ' + id + '-k">Tricky question</div>' +
      '<h2 class="line ' + id + '-q" style="font-size:68px">' + d.q + '</h2>' +
      '<div class="card ' + id + '-c1" style="position:relative;padding:22px 30px;display:flex;flex-direction:column;gap:12px"><div class="tag no">Trap</div>' +
      '<p class="sub" style="margin:0;position:relative">' + d.trap + '<span class="' + id + '-x" style="position:absolute;left:-6px;right:-6px;top:50%;height:6px;border-radius:3px;background:var(--sign-red);transform-origin:left center"></span></p></div>' +
      '<div class="card ' + id + '-c2" style="position:relative;padding:22px 30px;display:flex;flex-direction:column;gap:12px"><div class="tag">Remember</div><p class="sub" style="margin:0">' + d.simple + '</p></div>' +
      '<div class="line ' + id + '-h" style="font-size:64px;align-self:flex-start;background:var(--accent);padding:10px 28px;border-radius:18px">' + d.hook + '</div>' +
      '</div></div>'));
    const q = function (c) { return W.querySelector('.' + id + '-' + c); };
    return { art: q('art'), k: q('k').style, q: q('q'), c1: q('c1').style, x: q('x').style, c2: q('c2').style, h: q('h').style, ax: d.ax || 1560, ay: d.ay || 540 };
  },
  trapRender(o, t, kit) {
    const { seg, eo, eio, eob, lerp, TextFx } = kit;
    o.k.opacity = eo(seg(t, -0.6, -0.1));
    TextFx.fadeFromRight(o.q, t, 0.0, { stagger: 0.08, dur: 0.8 });
    const s = eob(seg(t, 0.4, 1.4), 1.6), br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    o.art.setAttribute('transform', 'translate(' + o.ax + ' ' + (o.ay - t * 1.2).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    const a = eo(seg(t, 1.6, 2.6)), b = eo(seg(t, 6.0, 7.0)), c = eob(seg(t, 10.0, 11.0), 1.5);
    o.c1.opacity = a; o.c1.transform = 'translateX(' + lerp(26, 0, a) + 'px)';
    o.x.transform = 'scaleX(' + eio(seg(t, 5.0, 5.8)).toFixed(4) + ')';
    o.c2.opacity = b; o.c2.transform = 'translateX(' + lerp(26, 0, b) + 'px)';
    o.h.opacity = Math.min(1, Math.max(0, c) * 1.5); o.h.transform = 'scale(' + lerp(0.85, 1, Math.min(1, Math.max(0, c))).toFixed(4) + ')';
  }
};

},
 mods: {
  "title": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('title', {
  init(kit) {
    const r = 92, cls = ['sig-r', 'sig-y', 'sig-g'];
    let lit = '';
    for (let i = 0; i < 3; i++) lit += '<circle class="' + cls[i] + ' title-lit" cx="0" cy="' + SG.lampY(3, r, i) + '" r="' + r + '"/>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="title-sign"><g class="title-box">' + SG.box(3, r) + '</g>' + lit + '</g></svg>' +
      '<div class="words" style="left:150px;top:260px;width:920px">' +
      '<div class="kicker title-kick">Session 4 · Learners Coach</div>' +
      '<h1 class="line" style="font-size:120px">Traffic signals and hand signals</h1>' +
      '<p class="sub title-sub">Steady or flashing, disc or arrow, light or hand.</p>' +
      '</div></div>'));
    this.sign = kit.stage.querySelector('.title-sign');
    this.box = kit.stage.querySelector('.title-box');
    this.lit = [...kit.stage.querySelectorAll('.title-lit')];
    this.kick = kit.stage.querySelector('.title-kick').style;
    this.sub = kit.stage.querySelector('.title-sub').style;
    this.line = kit.stage.querySelector('.line');
    this.r = r;
  },
  render(t) {
    t = t / 1.3;
    this.kick.opacity = eo(seg(t, -0.6, -0.1));
    TextFx.fadeFromRight(this.line, t, -0.5);
    this.sub.opacity = eo(seg(t, 0.6, 1.2));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.6, 1.2))) + 'px)';
    const b = eob(seg(t, -0.6, 0.0), 1.6);
    this.box.setAttribute('transform', 'scale(1 ' + Math.max(0.02, b).toFixed(3) + ')');
    for (let i = 0; i < 3; i++) {
      const p = eob(seg(t, 0.1 + i * 0.35, 0.6 + i * 0.35), 1.8);
      const dim = i < 2 ? eio(seg(t, 2.6, 3.2)) : 0;
      const y = SG.lampY(3, this.r, i);
      this.lit[i].setAttribute('transform', 'translate(0 ' + y + ') scale(' + Math.max(0, p).toFixed(3) + ') translate(0 ' + (-y) + ')');
      this.lit[i].style.opacity = (p > 0 ? 1 : 0) * (1 - dim);
    }
    const breathe = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(1460 ' + (540 - t * 1.5).toFixed(1) + ') scale(' + breathe.toFixed(4) + ')');
  },
});

},
  "discs": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
const DS_SUBS = ['Green: go in any direction the signs allow, but give way to traffic and pedestrians still crossing.', 'Yellow: stop before the white line unless you cannot do so safely. Then wait for green.', 'Red: stop before the white line and wait for green.'];
const DS_T = [0, 4.4, 7.8];
kit.scene('discs', {
  init(kit) {
    const r = 80, cls = ['sig-r', 'sig-y', 'sig-g'];
    let lit = '';
    for (let i = 0; i < 3; i++) lit += '<circle class="' + cls[i] + ' discs-lit" cy="' + SG.lampY(3, r, i) + '" r="' + r + '"/>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="discs-sign">' + SG.box(3, r) + lit + '</g>' +
      '<g class="discs-road"><rect class="road" x="0" y="880" width="1920" height="200"/>' +
      '<line class="lane" x1="0" y1="980" x2="1920" y2="980"/>' +
      '<rect x="1500" y="880" width="18" height="100" fill="#FFFFFF"/>' +
      '<g class="discs-car"><rect x="-150" y="-46" width="150" height="76" rx="22" style="fill:var(--main)"/><rect x="-110" y="-36" width="58" height="30" rx="8" fill="#FFFFFF" opacity=".85"/><circle cx="-118" cy="32" r="16" class="sk"/><circle cx="-34" cy="32" r="16" class="sk"/></g></g>' +
      '</svg>' +
      '<div class="words" style="left:960px;top:150px;width:840px">' +
      '<div class="tag discs-tag">Steady discs</div>' +
      '<h2 class="line">One colour, one rule</h2>' +
      '<p class="sub discs-sub">' + DS_SUBS[0] + '</p></div></div>'));
    this.sign = kit.stage.querySelector('.discs-sign');
    this.lit = [...kit.stage.querySelectorAll('.discs-lit')];
    this.car = kit.stage.querySelector('.discs-car');
    this.road = kit.stage.querySelector('.discs-road').style;
    this.tag = kit.stage.querySelector('.discs-tag').style;
    this.subEl = kit.stage.querySelector('.discs-sub');
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(480 ' + (460 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    const g = eo(seg(t, 0.6, 1.1)) * (1 - eo(seg(t, DS_T[1] - 0.25, DS_T[1] + 0.25)));
    const y = eo(seg(t, DS_T[1] - 0.25, DS_T[1] + 0.25)) * (1 - eo(seg(t, DS_T[2] - 0.25, DS_T[2] + 0.25)));
    const rd = eo(seg(t, DS_T[2] - 0.25, DS_T[2] + 0.25));
    this.lit[0].style.opacity = rd; this.lit[1].style.opacity = y; this.lit[2].style.opacity = g;
    this.road.opacity = eo(seg(t, 0.2, 0.8));
    let x = lerp(-200, 900, eo(seg(t, 1.2, 4.4)));
    x += lerp(0, 580, eo(seg(t, 4.6, 6.6)));
    const dip = Math.sin(Math.PI * seg(t, 6.5, 6.9)) * 4;
    this.car.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + (946 + dip).toFixed(1) + ')');
    this.tag.opacity = eo(seg(t, 0.6, 1.0));
    TextFx.fadeFromRight(this.line, t, 0.8);
    let k = 0; if (t >= DS_T[2]) k = 2; else if (t >= DS_T[1]) k = 1;
    if (this.subEl.textContent !== DS_SUBS[k]) this.subEl.textContent = DS_SUBS[k];
    const near = Math.min(Math.abs(t - DS_T[1]), Math.abs(t - DS_T[2]));
    const op = Math.min(eo(seg(t, 1.6, 2.2)), Math.min(1, near / 0.3));
    this.subEl.style.opacity = op;
    this.subEl.style.transform = 'translateX(' + lerp(26, 0, op) + 'px)';
  },
});

},
  "trapyellow": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapyellow', {
  init(kit) {
    this.o = SG.trap(kit, 'trapyellow', {
      q: 'Steady yellow light: speed up or stop?',
      trap: 'Treating yellow as ‘hurry through’.',
      simple: 'The DoT manual says stop unless you cannot do so safely. Stop before the white line and wait for green.',
      hook: 'Yellow = get ready to stop, not get ready to race.',
      art: SG.box(3, 70) + '<circle class="sig-y" cy="' + SG.lampY(3, 70, 1) + '" r="70"/>',
      ax: 1580, ay: 540
    });
  },
  render(t) {
    SG.trapRender(this.o, t, kit);
  },
});

},
  "flashred": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('flashred', {
  init(kit) {
    const r = 80;
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="flashred-sign">' + SG.box(3, r) +
      '<circle class="sig-r flashred-lit" cy="' + SG.lampY(3, r, 0) + '" r="' + r + '"/></g>' +
      '<g class="flashred-stop"><polygon class="shadow" points="' + SG.oct(8, 12, 96) + '"/><polygon class="sw" points="' + SG.oct(0, 0, 96) + '"/><polygon class="sr" points="' + SG.oct(0, 0, 86) + '"/>' +
      '<text y="18" text-anchor="middle" fill="#FFFFFF" style="font:700 52px var(--display, var(--sans, system-ui, sans-serif)); letter-spacing:2px">STOP</text></g>' +
      '<g class="flashred-four"><circle r="44" style="fill:var(--accent)" stroke="#FFFFFF" stroke-width="5"/><text y="16" text-anchor="middle" style="font:700 46px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)">4</text></g>' +
      '</svg>' +
      '<div class="words" style="left:960px;top:150px;width:840px">' +
      '<div class="tag no flashred-tag">Flashing red</div>' +
      '<h2 class="line">Treat it as a 4-way stop</h2>' +
      '<p class="sub flashred-sub">Stop completely, go in the order you arrived, and let pedestrians cross. Also used when lights are out of order.</p></div>' +
      '<div class="words flashred-foot" style="left:960px;top:900px;width:840px"><p class="kicker">Not proceed with caution: that is flashing yellow</p></div>' +
      '</div>'));
    this.sign = kit.stage.querySelector('.flashred-sign');
    this.lit = kit.stage.querySelector('.flashred-lit').style;
    this.stop = kit.stage.querySelector('.flashred-stop');
    this.four = kit.stage.querySelector('.flashred-four');
    this.tag = kit.stage.querySelector('.flashred-tag').style;
    this.sub = kit.stage.querySelector('.flashred-sub').style;
    this.foot = kit.stage.querySelector('.flashred-foot').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(380 ' + (470 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    const on = eo(seg(t, 0.5, 0.9));
    this.lit.opacity = on * (0.12 + 0.88 * SG.flash(t, 1.2, 1.2));
    this.tag.opacity = eo(seg(t, 0.8, 1.2));
    TextFx.fadeFromRight(this.line, t, 1.0);
    this.sub.opacity = eo(seg(t, 2.0, 2.6));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 2.0, 2.6))) + 'px)';
    const st = eob(seg(t, 2.8, 3.4), 1.7);
    this.stop.setAttribute('transform', 'translate(700 ' + (330 - t * 1.3).toFixed(1) + ') rotate(' + lerp(-20, 0, eo(seg(t, 2.8, 3.5))).toFixed(2) + ') scale(' + (Math.max(0, st) * br).toFixed(4) + ')');
    const f = eob(seg(t, 3.5, 3.9), 1.8);
    this.four.setAttribute('transform', 'translate(780 ' + (250 - t * 1.3).toFixed(1) + ') scale(' + Math.max(0, f).toFixed(3) + ')');
    const ft = eo(seg(t, 5.2, 5.9));
    this.foot.opacity = ft;
    this.foot.transform = 'translateY(' + lerp(16, 0, ft) + 'px)';
  },
});

},
  "trapflash": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapflash', {
  init(kit) {
    this.o = SG.trap(kit, 'trapflash', {
      q: 'What do you do at a flashing red traffic light?',
      trap: 'Choosing ‘proceed with caution’ as if it were a flashing yellow.',
      simple: 'Treat the intersection as a 4-way stop: stop completely, then go in the order you arrived, and let pedestrians cross.',
      hook: 'Flashing red = four-way stop.',
      art: SG.box(3, 70) + '<circle class="sig-r trapflash-lit" cy="' + SG.lampY(3, 70, 0) + '" r="70"/>',
      ax: 1580, ay: 540
    });
    this.lit = kit.stage.querySelector('.trapflash-lit').style;
  },
  render(t) {
    SG.trapRender(this.o, t, kit);
    this.lit.opacity = 0.12 + 0.88 * SG.flash(t, 1.6, 1.2);
  },
});

},
  "bustram": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('bustram', {
  init(kit) {
    const r = 110;
    const bus = function (sc) { return '<g transform="scale(' + sc + ')"><rect x="-70" y="-48" width="140" height="84" rx="16" class="sk"/><rect x="-56" y="-36" width="34" height="30" rx="5" class="sw"/><rect x="-16" y="-36" width="34" height="30" rx="5" class="sw"/><rect x="24" y="-36" width="34" height="30" rx="5" class="sw"/><circle cx="-38" cy="40" r="13" class="sk"/><circle cx="38" cy="40" r="13" class="sk"/></g>'; };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="bustram-sign">' + SG.box(1, r) +
      '<circle class="sig-y bustram-lit" r="' + r + '"/><g class="bustram-sym">' + bus(1) + '</g></g>' +
      '<g class="bustram-road"><rect class="road" x="0" y="860" width="1920" height="220"/><line class="lane" x1="0" y1="970" x2="1920" y2="970"/>' +
      '<g class="bustram-bus"><rect x="-260" y="-70" width="260" height="110" rx="22" style="fill:var(--accent)"/>' +
      '<rect x="-236" y="-54" width="50" height="40" rx="8" fill="#FFFFFF" opacity=".85"/><rect x="-172" y="-54" width="50" height="40" rx="8" fill="#FFFFFF" opacity=".85"/><rect x="-108" y="-54" width="50" height="40" rx="8" fill="#FFFFFF" opacity=".85"/><rect x="-44" y="-54" width="34" height="56" rx="8" fill="#FFFFFF" opacity=".85"/>' +
      '<circle cx="-200" cy="40" r="20" class="sk"/><circle cx="-60" cy="40" r="20" class="sk"/></g></g>' +
      '</svg>' +
      '<div class="words" style="left:960px;top:170px;width:840px">' +
      '<div class="tag bustram-tag">Discs</div>' +
      '<h2 class="line">Bus and tram lights</h2>' +
      '<p class="sub bustram-sub">A bus or tram symbol in the lights: those lights only apply to buses or trams.</p></div></div>'));
    this.sign = kit.stage.querySelector('.bustram-sign');
    this.lit = kit.stage.querySelector('.bustram-lit');
    this.sym = kit.stage.querySelector('.bustram-sym');
    this.road = kit.stage.querySelector('.bustram-road').style;
    this.bus = kit.stage.querySelector('.bustram-bus');
    this.tag = kit.stage.querySelector('.bustram-tag').style;
    this.sub = kit.stage.querySelector('.bustram-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    const s = eob(seg(t, 0.0, 0.9), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(480 ' + (430 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    const l = eob(seg(t, 0.7, 1.5), 1.7);
    this.lit.setAttribute('transform', 'scale(' + Math.max(0, l).toFixed(3) + ')');
    const b = eob(seg(t, 1.3, 2.2), 1.8);
    this.sym.setAttribute('transform', 'scale(' + Math.max(0, b).toFixed(3) + ')');
    this.tag.opacity = eo(seg(t, 1.0, 1.6));
    TextFx.fadeFromRight(this.line, t, 1.2, { dur: 0.8 });
    this.sub.opacity = eo(seg(t, 2.4, 3.4));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 2.4, 3.4))) + 'px)';
    this.road.opacity = eo(seg(t, 3.0, 4.0));
    const x = lerp(-120, 2300, eio(seg(t, 4.0, 8.6)));
    this.bus.setAttribute('transform', 'translate(' + x.toFixed(1) + ' 920)');
  },
});

},
  "arrows": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('arrows', {
  init(kit) {
    const r = 64;
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<rect class="road" x="-20" y="300" width="1000" height="220"/><rect class="road" x="640" y="300" width="220" height="800"/>' +
      '<line class="lane" x1="0" y1="410" x2="630" y2="410"/><line class="lane" x1="750" y1="540" x2="750" y2="1080"/>' +
      '<rect x="640" y="526" width="110" height="12" fill="#FFFFFF"/>' +
      '<g class="arrows-car"><g class="arrows-body"><rect x="-60" y="-32" width="120" height="64" rx="18" style="fill:var(--main)"/><rect x="8" y="-24" width="30" height="48" rx="7" fill="#FFFFFF" opacity=".85"/></g></g>' +
      '<g class="arrows-sign">' + SG.box(3, r) +
      '<path class="sig-ra arrows-lit" transform="translate(0 ' + SG.lampY(3, r, 0) + ')" d="' + SG.arrowL(r) + '" stroke-width="18"/></g>' +
      '</svg>' +
      '<div class="words" style="left:1060px;top:170px;width:760px">' +
      '<div class="tag no arrows-tag">Flashing red arrow</div>' +
      '<h2 class="line">Stop first, then slip left</h2>' +
      '<p class="sub arrows-sub">Stop at the line. Then you may turn left, even though the main light is red, giving way to anyone with a green.</p></div>' +
      '</div>'));
    this.sign = kit.stage.querySelector('.arrows-sign');
    this.lit = kit.stage.querySelector('.arrows-lit').style;
    this.car = kit.stage.querySelector('.arrows-car');
    this.body = kit.stage.querySelector('.arrows-body');
    this.tag = kit.stage.querySelector('.arrows-tag').style;
    this.sub = kit.stage.querySelector('.arrows-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(420 ' + (790 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    this.lit.opacity = eo(seg(t, 0.5, 0.9)) * (0.12 + 0.88 * SG.flash(t, 1.2, 1.2));
    this.tag.opacity = eo(seg(t, 0.8, 1.2));
    TextFx.fadeFromRight(this.line, t, 1.0);
    this.sub.opacity = eo(seg(t, 2.0, 2.6));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 2.0, 2.6))) + 'px)';
    let x = 695, y = lerp(1160, 600, eo(seg(t, 0.4, 3.2))), a = -90;
    const p = eio(seg(t, 5.6, 7.4));
    if (p > 0) {
      const q = 1 - p;
      x = q * q * 695 + 2 * q * p * 695 + p * p * 470;
      y = q * q * 600 + 2 * q * p * 465 + p * p * 465;
      a = lerp(-90, -180, p);
    }
    x -= lerp(0, 700, ei(seg(t, 7.4, 9.6)));
    const dip = Math.sin(Math.PI * seg(t, 3.1, 3.5)) * 3;
    this.car.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ')');
    this.body.setAttribute('transform', 'rotate(' + a.toFixed(2) + ') translate(' + (-dip).toFixed(2) + ' 0)');
  },
});

},
  "traparrow": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('traparrow', {
  init(kit) {
    this.o = SG.trap(kit, 'traparrow', {
      q: 'The light shows a flashing red arrow pointing left. Can you turn?',
      trap: 'Thinking any red means you may not move at all.',
      simple: 'Yes, but only after stopping at the line. Then turn left when safe, giving way to anyone who has a green.',
      hook: 'Stop first, then slip left.',
      art: SG.box(3, 70) + '<path class="sig-ra traparrow-lit" transform="translate(0 ' + SG.lampY(3, 70, 0) + ')" d="' + SG.arrowL(70) + '" stroke-width="18"/>',
      ax: 1580, ay: 540
    });
    this.lit = kit.stage.querySelector('.traparrow-lit').style;
  },
  render(t) {
    SG.trapRender(this.o, t, kit);
    this.lit.opacity = 0.12 + 0.88 * SG.flash(t, 1.6, 1.2);
  },
});

},
  "greenarrows": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const GA_SUBS = ['Steady yellow arrow: stop and wait for the green arrow.', 'Green arrow, steady or flashing: go that way, giving way to anyone still crossing.', 'Arrow sign above a light: that light is only for traffic going that way.'];
const GA_T = [0, 3.9, 6.6];
kit.scene('greenarrows', {
  init(kit) {
    const r = 80, R = 'transform="translate(0 ';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="greenarrows-sign">' +
      '<g class="greenarrows-board"><rect class="shadow" x="-96" y="-422" width="204" height="130" rx="16"/><rect class="sw" x="-104" y="-430" width="208" height="130" rx="16"/><rect class="edge" x="-104" y="-430" width="208" height="130" rx="16"/>' +
      '<path transform="translate(0 -365) rotate(180)" d="' + SG.arrowL(80) + '" fill="none" stroke-width="20" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--second)"/></g>' +
      SG.box(3, r) +
      '<path class="sig-ya greenarrows-y" ' + R + SG.lampY(3, r, 1) + ') rotate(180)" d="' + SG.arrowL(r) + '" stroke-width="20"/>' +
      '<path class="sig-ga greenarrows-g" ' + R + SG.lampY(3, r, 2) + ') rotate(180)" d="' + SG.arrowL(r) + '" stroke-width="20"/></g>' +
      '</svg>' +
      '<div class="words" style="left:960px;top:200px;width:840px">' +
      '<div class="tag greenarrows-tag">Arrow signals</div>' +
      '<h2 class="line">Arrows point the way</h2>' +
      '<p class="sub greenarrows-sub">' + GA_SUBS[0] + '</p></div></div>'));
    this.sign = kit.stage.querySelector('.greenarrows-sign');
    this.board = kit.stage.querySelector('.greenarrows-board');
    this.y = kit.stage.querySelector('.greenarrows-y').style;
    this.g = kit.stage.querySelector('.greenarrows-g').style;
    this.tag = kit.stage.querySelector('.greenarrows-tag').style;
    this.subEl = kit.stage.querySelector('.greenarrows-sub');
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(480 ' + (560 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    const sw = eo(seg(t, GA_T[1] - 0.25, GA_T[1] + 0.25));
    this.y.opacity = eo(seg(t, 0.5, 1.0)) * (1 - sw);
    this.g.opacity = sw;
    const b = eob(seg(t, GA_T[2] - 0.2, GA_T[2] + 0.4), 1.6);
    this.board.setAttribute('transform', 'translate(0 ' + lerp(-200, 0, Math.min(1, Math.max(0, b))).toFixed(1) + ')');
    this.board.style.opacity = Math.min(1, Math.max(0, b) * 2);
    this.tag.opacity = eo(seg(t, 0.6, 1.0));
    TextFx.fadeFromRight(this.line, t, 0.8);
    let k = 0; if (t >= GA_T[2]) k = 2; else if (t >= GA_T[1]) k = 1;
    if (this.subEl.textContent !== GA_SUBS[k]) this.subEl.textContent = GA_SUBS[k];
    const near = Math.min(Math.abs(t - GA_T[1]), Math.abs(t - GA_T[2]));
    const op = Math.min(eo(seg(t, 1.6, 2.2)), Math.min(1, near / 0.3));
    this.subEl.style.opacity = op;
    this.subEl.style.transform = 'translateX(' + lerp(26, 0, op) + 'px)';
  },
});

},
  "pedestrian": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const PD_SUBS = ['Steady red man: wait.', 'Flashing red man: the steady red man is about to come on. Do not start crossing.', 'Steady green man: cross. Drivers give way.'];
const PD_T = [0, 3.4, 6.2];
kit.scene('pedestrian', {
  init(kit) {
    const r = 110, man = function (cls, walk) {
      return '<g class="' + cls + '"><circle cy="-62" r="18"/><rect x="-18" y="-40" width="36" height="58" rx="14"/>' +
        (walk ? '<path d="M-6 10 L-34 66 M6 10 L30 66 M-14 -30 L-40 4 M14 -30 L36 0" stroke-width="16" stroke-linecap="round" fill="none"/>' : '<path d="M-9 10 V68 M9 10 V68 M-22 -30 V14 M22 -30 V14" stroke-width="16" stroke-linecap="round" fill="none"/>') + '</g>';
    };
    const y0 = SG.lampY(2, r, 0), y1 = SG.lampY(2, r, 1);
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="pedestrian-sign">' + SG.box(2, r) +
      '<g transform="translate(0 ' + y0 + ') scale(1.3)">' + man('sig-rm pedestrian-red', false) + '</g>' +
      '<g transform="translate(0 ' + y1 + ') scale(1.3)">' + man('sig-gm pedestrian-green', true) + '</g>' +
      '</g></svg>' +
      '<div class="words" style="left:900px;top:200px;width:900px">' +
      '<div class="tag pedestrian-tag">Pedestrian signals</div>' +
      '<h2 class="line">Red man, green man</h2>' +
      '<p class="sub pedestrian-sub">' + PD_SUBS[0] + '</p></div>' +
      '<div class="words pedestrian-foot" style="left:900px;top:880px;width:900px"><p class="kicker">Pedal cyclist signals follow the same rules</p></div>' +
      '</div>'));
    this.sign = kit.stage.querySelector('.pedestrian-sign');
    this.red = kit.stage.querySelector('.pedestrian-red').style;
    this.green = kit.stage.querySelector('.pedestrian-green').style;
    this.tag = kit.stage.querySelector('.pedestrian-tag').style;
    this.subEl = kit.stage.querySelector('.pedestrian-sub');
    this.foot = kit.stage.querySelector('.pedestrian-foot').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(460 ' + (520 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    const sw = eo(seg(t, PD_T[2] - 0.25, PD_T[2] + 0.25));
    const fl = t >= PD_T[1] && t < PD_T[2] - 0.25 ? 0.12 + 0.88 * SG.flash(t, PD_T[1], 1.2) : 1;
    this.red.opacity = eo(seg(t, 0.5, 1.0)) * fl * (1 - sw);
    this.green.opacity = sw;
    this.tag.opacity = eo(seg(t, 0.6, 1.0));
    TextFx.fadeFromRight(this.line, t, 0.8);
    let k = 0; if (t >= PD_T[2]) k = 2; else if (t >= PD_T[1]) k = 1;
    if (this.subEl.textContent !== PD_SUBS[k]) this.subEl.textContent = PD_SUBS[k];
    const near = Math.min(Math.abs(t - PD_T[1]), Math.abs(t - PD_T[2]));
    const op = Math.min(eo(seg(t, 1.6, 2.2)), Math.min(1, near / 0.3));
    this.subEl.style.opacity = op;
    this.subEl.style.transform = 'translateX(' + lerp(26, 0, op) + 'px)';
    const f = eo(seg(t, 7.0, 7.7));
    this.foot.opacity = f;
    this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});

},
  "overhead": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const OH_X = [480, 960, 1440];
kit.scene('overhead', {
  init(kit) {
    const P = function (i, sym) { return '<g class="overhead-p"><rect class="shadow" x="-128" y="-122" width="268" height="268" rx="22"/><rect class="sig-box" x="-140" y="-140" width="280" height="280" rx="22"/>' + sym + '</g>'; };
    const label = function (i, tag, cls, sub) { return '<div class="words overhead-l" style="left:' + (OH_X[i] - 250) + 'px;top:690px;width:500px;text-align:center;align-items:center"><div class="tag ' + cls + '" style="align-self:center">' + tag + '</div><p class="sub" style="margin-top:6px">' + sub + '</p></div>'; };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      P(0, '<g class="overhead-d"><path class="sig-ga" transform="rotate(-90)" d="' + SG.arrowL(170) + '" stroke-width="30"/></g>') +
      P(1, '<g class="overhead-d"><path class="sig-ra" d="M-70 -70 L70 70 M70 -70 L-70 70" stroke-width="32"/></g>') +
      P(2, '<g class="overhead-d"><path class="sig-ya" transform="rotate(-45)" d="' + SG.arrowL(170) + '" stroke-width="30"/></g>') +
      '</svg>' +
      '<div class="words" style="left:0;top:90px;width:1920px;text-align:center">' +
      '<h2 class="line overhead-h">Overhead lane signals</h2></div>' +
      label(0, 'Green arrow', '', 'You may use this lane') +
      label(1, 'Red cross', 'no', 'You may not use this lane') +
      label(2, 'Yellow slanted arrow', 'wait', 'Lane closing ahead: move over the way it points') +
      '</div>'));
    this.p = [...kit.stage.querySelectorAll('.overhead-p')];
    this.d = [...kit.stage.querySelectorAll('.overhead-d')];
    this.l = [...kit.stage.querySelectorAll('.overhead-l')].map(function (e) { return e.style; });
    this.h = kit.stage.querySelector('.overhead-h');
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, 0.0);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    for (let i = 0; i < 3; i++) {
      const a = 0.3 + i * 1.5;
      const s = eob(seg(t, a, a + 0.6), 1.6);
      this.p[i].setAttribute('transform', 'translate(' + OH_X[i] + ' ' + (440 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
      const d = eob(seg(t, a + 0.4, a + 0.9), 1.8);
      this.d[i].setAttribute('transform', 'scale(' + Math.max(0, d).toFixed(3) + ')');
      const l = eo(seg(t, a + 0.7, a + 1.3));
      this.l[i].opacity = l;
      this.l[i].transform = 'translateY(' + lerp(24, 0, l) + 'px)';
    }
  },
});

},
  "trapoverhead": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapoverhead', {
  init(kit) {
    this.o = SG.trap(kit, 'trapoverhead', {
      q: 'An overhead sign shows a yellow arrow pointing down at an angle.',
      trap: 'Reading it as ‘go straight’.',
      simple: 'The lane you are in is closing ahead. Move into the next lane in the direction of the arrow as soon as it is safe.',
      hook: 'Slanted yellow arrow = lane closing, move over.',
      art: '<rect class="shadow" x="-128" y="-122" width="268" height="268" rx="22"/><rect class="sig-box" x="-140" y="-140" width="280" height="280" rx="22"/><path class="sig-ya" transform="rotate(-45)" d="' + SG.arrowL(170) + '" stroke-width="30"/>',
      ax: 1580, ay: 540
    });
  },
  render(t) {
    SG.trapRender(this.o, t, kit);
  },
});

},
  "flashing": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('flashing', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="flashing-a"><rect class="sk" x="-12" y="-40" width="24" height="330" rx="8"/>' +
      '<rect class="shadow" x="-182" y="-112" width="376" height="152" rx="70"/><rect class="sig-box" x="-190" y="-120" width="380" height="152" rx="70"/>' +
      '<circle class="sig-off" cx="-95" cy="-44" r="56"/><circle class="sig-off" cx="95" cy="-44" r="56"/>' +
      '<circle class="sig-r flashing-l" cx="-95" cy="-44" r="56"/><circle class="sig-r flashing-l" cx="95" cy="-44" r="56"/></g>' +
      '<g class="flashing-b"><rect class="sk" x="-12" y="40" width="24" height="250" rx="8"/>' +
      '<polygon class="shadow" points="12,-112 182,182 -158,182"/><polygon class="sr" points="0,-130 170,165 -170,165"/><polygon class="sw" points="0,-74 120,134 -120,134"/>' +
      '<rect class="sk" x="-11" y="-20" width="22" height="90" rx="9"/><circle class="sk" cy="100" r="13"/>' +
      '<rect class="sig-box" x="-44" y="-226" width="88" height="88" rx="18"/><circle class="sig-off" cy="-182" r="32"/><circle class="sig-y flashing-y" cy="-182" r="32"/></g>' +
      '</svg>' +
      '<div class="words" style="left:0;top:70px;width:1920px;text-align:center">' +
      '<h2 class="line flashing-h">Flashing lights on the road</h2></div>' +
      '<div class="words flashing-la" style="left:160px;top:800px;width:700px;text-align:center;align-items:center"><div class="tag no" style="align-self:center">Flashing red light</div><p class="sub" style="margin-top:6px">For example at a railway crossing: stop, and go only when it is safe.</p></div>' +
      '<div class="words flashing-lb" style="left:1060px;top:800px;width:700px;text-align:center;align-items:center"><div class="tag wait" style="align-self:center">Flashing yellow light on a sign</div><p class="sub" style="margin-top:6px">A hazard or rule ahead: slow down.</p></div>' +
      '</div>'));
    this.a = kit.stage.querySelector('.flashing-a');
    this.b = kit.stage.querySelector('.flashing-b');
    this.l = [...kit.stage.querySelectorAll('.flashing-l')].map(function (e) { return e.style; });
    this.y = kit.stage.querySelector('.flashing-y').style;
    this.h = kit.stage.querySelector('.flashing-h');
    this.la = kit.stage.querySelector('.flashing-la').style;
    this.lb = kit.stage.querySelector('.flashing-lb').style;
  },
  render(t) {
    TextFx.fadeFromRight(this.h, t, 0.0, { dur: 0.8 });
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    const sa = eob(seg(t, 0.4, 1.4), 1.6), sb = eob(seg(t, 4.6, 5.6), 1.6);
    this.a.setAttribute('transform', 'translate(510 ' + (470 - t * 1.2).toFixed(1) + ') scale(' + (Math.max(0, sa) * br).toFixed(4) + ')');
    this.b.setAttribute('transform', 'translate(1410 ' + (470 - t * 1.2).toFixed(1) + ') scale(' + (Math.max(0, sb) * br).toFixed(4) + ')');
    const fa = SG.flash(t, 1.4, 1.2), on = eo(seg(t, 1.0, 1.4));
    this.l[0].opacity = on * (t < 1.4 ? 1 : fa);
    this.l[1].opacity = on * (t < 1.4 ? 0 : 1 - fa);
    this.y.opacity = eo(seg(t, 5.2, 5.6)) * (0.12 + 0.88 * SG.flash(t, 5.6, 1.4));
    const la = eo(seg(t, 1.6, 2.6)), lb = eo(seg(t, 5.8, 6.8));
    this.la.opacity = la; this.la.transform = 'translateY(' + lerp(24, 0, la) + 'px)';
    this.lb.opacity = lb; this.lb.transform = 'translateY(' + lerp(24, 0, lb) + 'px)';
  },
});

},
  "officer": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const OF_SUBS = ['Facing you, one arm raised: traffic in front of him stops.', 'Back to you, arm stretched out sideways: traffic behind him stops. That is you.', 'Both signals at once: traffic in front and behind stops.'];
const OF_K = ['Facing you', 'Back to you', 'Both signals'];
const OF_T = [0, 4.8, 8.0];
kit.scene('officer', {
  init(kit) {
    const arm = function (cls, x) { return '<g transform="translate(' + x + ' 0)"><g class="' + cls + '"><line x1="0" y1="0" x2="0" y2="170" class="ppl-arm"/></g></g>'; };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="officer-fig"><ellipse class="shadow" cx="10" cy="336" rx="130" ry="22"/>' +
      arm('officer-al', -50) + arm('officer-ar', 50) + SG.person() +
      '<rect class="ppl-vest" x="-62" y="40" width="124" height="34"/>' +
      '<rect class="sk" x="-56" y="-162" width="112" height="34" rx="12"/>' +
      '<g class="officer-eyes"><circle class="sk" cx="-18" cy="-96" r="7"/><circle class="sk" cx="18" cy="-96" r="7"/><rect class="sk" x="-62" y="-130" width="124" height="10" rx="4"/></g></g>' +
      '</svg>' +
      '<div class="words" style="left:300px;top:110px;width:400px;align-items:center"><div class="tag wait officer-k" style="align-self:center">Facing you</div></div>' +
      '<div class="words" style="left:900px;top:170px;width:900px">' +
      '<div class="tag officer-tag">He comes before every light and sign</div>' +
      '<h2 class="line">Traffic officer</h2>' +
      '<p class="sub officer-sub">' + OF_SUBS[0] + '</p></div></div>'));
    this.fig = kit.stage.querySelector('.officer-fig');
    this.al = kit.stage.querySelector('.officer-al');
    this.ar = kit.stage.querySelector('.officer-ar');
    this.eyes = kit.stage.querySelector('.officer-eyes').style;
    this.kEl = kit.stage.querySelector('.officer-k');
    this.tag = kit.stage.querySelector('.officer-tag').style;
    this.subEl = kit.stage.querySelector('.officer-sub');
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.fig.setAttribute('transform', 'translate(500 ' + (560 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br * 1.15).toFixed(4) + ')');
    const ra = lerp(0, 180, eio(seg(t, 1.2, 2.0))) + lerp(0, -90, eio(seg(t, OF_T[1] + 0.3, OF_T[1] + 1.1)));
    const la = lerp(0, -180, eio(seg(t, OF_T[2] + 0.3, OF_T[2] + 1.1)));
    this.ar.setAttribute('transform', 'rotate(' + (-ra).toFixed(2) + ')');
    this.al.setAttribute('transform', 'rotate(' + (-la).toFixed(2) + ')');
    this.eyes.opacity = 1 - eo(seg(t, OF_T[1] - 0.2, OF_T[1] + 0.3));
    this.tag.opacity = eo(seg(t, 0.6, 1.0));
    TextFx.fadeFromRight(this.line, t, 0.8);
    let k = 0; if (t >= OF_T[2]) k = 2; else if (t >= OF_T[1]) k = 1;
    if (this.subEl.textContent !== OF_SUBS[k]) this.subEl.textContent = OF_SUBS[k];
    if (this.kEl.textContent !== OF_K[k]) this.kEl.textContent = OF_K[k];
    const near = Math.min(Math.abs(t - OF_T[1]), Math.abs(t - OF_T[2]));
    const op = Math.min(eo(seg(t, 1.8, 2.4)), Math.min(1, near / 0.3));
    this.subEl.style.opacity = op;
    this.subEl.style.transform = 'translateX(' + lerp(26, 0, op) + 'px)';
    this.kEl.style.opacity = Math.min(eo(seg(t, 0.8, 1.2)), Math.min(1, near / 0.3));
  },
});

},
  "trapofficer": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapofficer', {
  init(kit) {
    this.o = SG.trap(kit, 'trapofficer', {
      q: 'A traffic officer has his back to you with one arm stretched out sideways. What now?',
      trap: 'Thinking only the traffic he faces must stop.',
      simple: 'This signal stops traffic approaching from behind him, which is you.',
      hook: 'Back to you, arm out: you stop.',
      art: '<ellipse class="shadow" cx="10" cy="336" rx="130" ry="22"/><g transform="translate(50 0) rotate(-90)"><line x1="0" y1="0" x2="0" y2="170" class="ppl-arm"/></g>' + SG.person() + '<rect class="ppl-vest" x="-62" y="40" width="124" height="34"/><rect class="sk" x="-56" y="-162" width="112" height="34" rx="12"/>',
      ax: 1580, ay: 480
    });
  },
  render(t) {
    SG.trapRender(this.o, t, kit);
  },
});

},
  "flagman": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const FM_SUBS = ['Flag held out level: stop.', 'Flag waved up and down: slow down and proceed with caution.', 'Beckoning: traffic in front may proceed.'];
const FM_T = [0, 3.8, 6.6];
kit.scene('flagman', {
  init(kit) {
    const arm = function (cls, x, extra) { return '<g transform="translate(' + x + ' 0)"><g class="' + cls + '"><line x1="0" y1="0" x2="0" y2="160" class="ppl-arm"/>' + extra + '</g></g>'; };
    const flag = '<line x1="0" y1="140" x2="0" y2="290" stroke-width="10" stroke-linecap="round" style="stroke:var(--second)"/><rect class="sr" x="4" y="196" width="110" height="94" rx="6"/>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="flagman-fig"><ellipse class="shadow" cx="10" cy="336" rx="130" ry="22"/>' +
      arm('flagman-al', -50, '') + arm('flagman-ar', 50, flag) + SG.person() +
      '<rect class="ppl-vest" x="-62" y="10" width="124" height="30"/><rect class="ppl-vest" x="-62" y="80" width="124" height="30"/>' +
      '<path class="sk" d="M-58 -128 A58 58 0 0 1 58 -128 Z"/></g>' +
      '</svg>' +
      '<div class="words" style="left:900px;top:200px;width:900px">' +
      '<div class="tag flagman-tag">Road works</div>' +
      '<h2 class="line">Flagman</h2>' +
      '<p class="sub flagman-sub">' + FM_SUBS[0] + '</p></div></div>'));
    this.fig = kit.stage.querySelector('.flagman-fig');
    this.al = kit.stage.querySelector('.flagman-al');
    this.ar = kit.stage.querySelector('.flagman-ar');
    this.tag = kit.stage.querySelector('.flagman-tag').style;
    this.subEl = kit.stage.querySelector('.flagman-sub');
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.fig.setAttribute('transform', 'translate(480 ' + (540 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br * 1.15).toFixed(4) + ')');
    const wave = Math.sin(2 * Math.PI * Math.max(0, t - FM_T[1]) / 1.6) * 30 * eo(seg(t, FM_T[1], FM_T[1] + 0.6)) * (1 - eo(seg(t, FM_T[2] - 0.4, FM_T[2])));
    const ra = lerp(0, -90, eio(seg(t, 1.0, 1.8))) + wave + lerp(0, 70, eio(seg(t, FM_T[2], FM_T[2] + 0.8)));
    const beck = eio(seg(t, FM_T[2] + 0.4, FM_T[2] + 1.0));
    const la = beck * (130 + 22 * Math.sin(2 * Math.PI * Math.max(0, t - FM_T[2] - 1.0) / 1.4));
    this.ar.setAttribute('transform', 'rotate(' + ra.toFixed(2) + ')');
    this.al.setAttribute('transform', 'rotate(' + la.toFixed(2) + ')');
    this.tag.opacity = eo(seg(t, 0.6, 1.0));
    TextFx.fadeFromRight(this.line, t, 0.8);
    let k = 0; if (t >= FM_T[2]) k = 2; else if (t >= FM_T[1]) k = 1;
    if (this.subEl.textContent !== FM_SUBS[k]) this.subEl.textContent = FM_SUBS[k];
    const near = Math.min(Math.abs(t - FM_T[1]), Math.abs(t - FM_T[2]));
    const op = Math.min(eo(seg(t, 1.6, 2.2)), Math.min(1, near / 0.3));
    this.subEl.style.opacity = op;
    this.subEl.style.transform = 'translateX(' + lerp(26, 0, op) + 'px)';
  },
});

},
  "handsignals": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const HS_SUBS = ['Stop: forearm raised, palm forward.', 'Slow down: arm out, moving up and down.', 'Right turn: arm straight out.', 'Left turn: arm rotating in a circle.', 'Overtake: arm out, waving forward.'];
const HS_T = [1.6, 5.8, 10.0, 14.2, 18.4];
const HS_A = function (k, t) {
  if (k === 0) return [90, 90];
  if (k === 1) return [90 + 18 * Math.sin(2 * Math.PI * t / 1.6), 0];
  if (k === 2) return [90, 0];
  if (k === 3) return [90 + 20 * Math.sin(2 * Math.PI * t / 1.8), 24 * Math.cos(2 * Math.PI * t / 1.8)];
  return [90, 20 + 20 * Math.sin(2 * Math.PI * t / 1.4)];
};
kit.scene('handsignals', {
  init(kit) {
    let list = '';
    ['Stop', 'Slow down', 'Right turn', 'Left turn', 'Overtake'].forEach(function (w) { list += '<div class="tag handsignals-li" style="font-size:28px;padding:8px 18px">' + w + '</div>'; });
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="handsignals-fig"><g transform="translate(-50 0)"><g class="handsignals-up"><line x1="0" y1="0" x2="0" y2="100" class="ppl-arm"/>' +
      '<g transform="translate(0 100)"><g class="handsignals-fo"><line x1="0" y1="0" x2="0" y2="90" class="ppl-arm"/><circle cy="100" r="22" class="ppl-head"/></g></g></g></g>' +
      SG.person() + '<rect x="-300" y="110" width="600" height="240" rx="40" style="fill:color-mix(in srgb, var(--main) 70%, var(--second))"/>' +
      '<rect x="-300" y="110" width="600" height="20" rx="10" class="sw" opacity=".6"/></g>' +
      '</svg>' +
      '<div class="words" style="left:960px;top:160px;width:860px">' +
      '<div class="tag wait handsignals-tag">Car (Code B)</div>' +
      '<h2 class="line">Your own hand signals</h2>' +
      '<p class="sub handsignals-sub">' + HS_SUBS[0] + '</p>' +
      '<div class="handsignals-list" style="display:flex;flex-wrap:wrap;gap:12px;margin-top:10px">' + list + '</div></div></div>'));
    this.fig = kit.stage.querySelector('.handsignals-fig');
    this.up = kit.stage.querySelector('.handsignals-up');
    this.fo = kit.stage.querySelector('.handsignals-fo');
    this.li = [...kit.stage.querySelectorAll('.handsignals-li')].map(function (e) { return e.style; });
    this.tag = kit.stage.querySelector('.handsignals-tag').style;
    this.subEl = kit.stage.querySelector('.handsignals-sub');
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    const s = eob(seg(t, 0.0, 0.9), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.fig.setAttribute('transform', 'translate(500 ' + (560 - t * 1.0).toFixed(1) + ') scale(' + (Math.max(0, s) * br * 1.1).toFixed(4) + ')');
    let k = -1; for (let i = 0; i < 5; i++) if (t >= HS_T[i]) k = i;
    let a = [0, 0];
    if (k >= 0) {
      const prev = k === 0 ? [0, 0] : HS_A(k - 1, t), cur = HS_A(k, t), m = eio(seg(t, HS_T[k], HS_T[k] + 0.7));
      a = [lerp(prev[0], cur[0], m), lerp(prev[1], cur[1], m)];
    }
    this.up.setAttribute('transform', 'rotate(' + a[0].toFixed(2) + ')');
    this.fo.setAttribute('transform', 'rotate(' + a[1].toFixed(2) + ')');
    this.tag.opacity = eo(seg(t, 0.6, 1.4));
    TextFx.fadeFromRight(this.line, t, 0.8, { dur: 0.8 });
    const kk = Math.max(0, k);
    if (this.subEl.textContent !== HS_SUBS[kk]) this.subEl.textContent = HS_SUBS[kk];
    let near = 9; for (let i = 1; i < 5; i++) near = Math.min(near, Math.abs(t - HS_T[i]));
    const op = Math.min(eo(seg(t, 1.8, 2.8)), Math.min(1, near / 0.3));
    this.subEl.style.opacity = op;
    this.subEl.style.transform = 'translateX(' + lerp(26, 0, op) + 'px)';
    for (let i = 0; i < 5; i++) {
      const p = eo(seg(t, HS_T[i] + 0.2, HS_T[i] + 1.0));
      this.li[i].opacity = p * (i === k ? 1 : 0.45);
      this.li[i].transform = 'translateY(' + lerp(16, 0, p) + 'px)';
    }
  },
});

},
  "freeway": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('freeway', {
  init(kit) {
    const car = function (y, cls) { return '<g class="freeway-car" transform="translate(0 ' + y + ')"><rect x="-80" y="-34" width="160" height="68" rx="20" style="fill:var(--' + cls + ')"/><rect x="20" y="-26" width="40" height="52" rx="8" fill="#FFFFFF" opacity=".85"/></g>'; };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="freeway-road"><rect class="road" x="0" y="640" width="1920" height="380"/>' +
      '<line class="lane solid freeway-e1" x1="0" y1="660" x2="1920" y2="660" stroke-dasharray="1920"/><line class="lane solid freeway-e2" x1="0" y1="1000" x2="1920" y2="1000" stroke-dasharray="1920"/>' +
      '<line class="lane" x1="0" y1="773" x2="1920" y2="773"/><line class="lane" x1="0" y1="886" x2="1920" y2="886"/>' +
      car(716, 'main') + car(830, 'second') + car(943, 'main') + '</g>' +
      '</svg>' +
      '<div class="words" style="left:150px;top:140px;width:1300px">' +
      '<div class="tag no freeway-tag">Freeway</div>' +
      '<h2 class="line">No hand signals on a freeway</h2>' +
      '<p class="sub freeway-sub">Hand signals may not be used on a freeway, except in an emergency.</p></div></div>'));
    this.road = kit.stage.querySelector('.freeway-road').style;
    this.e = [...kit.stage.querySelectorAll('.freeway-e1, .freeway-e2')];
    this.cars = [...kit.stage.querySelectorAll('.freeway-car')];
    this.tag = kit.stage.querySelector('.freeway-tag').style;
    this.sub = kit.stage.querySelector('.freeway-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    this.road.opacity = eo(seg(t, -0.4, 0.6));
    this.road.transform = 'translateY(' + lerp(60, 0, eo(seg(t, -0.4, 0.6))) + 'px)';
    for (let i = 0; i < 2; i++) this.e[i].setAttribute('stroke-dashoffset', (1920 * (1 - eio(seg(t, 0.2, 1.6)))).toFixed(1));
    const sp = [150, 115, 135], x0 = [-300, 520, 1100];
    for (let i = 0; i < 3; i++) {
      const x = ((x0[i] + t * sp[i]) % 2300 + 2300) % 2300 - 200;
      const y = [716, 830, 943][i];
      this.cars[i].setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + y + ')');
    }
    this.tag.opacity = eo(seg(t, 0.8, 1.4));
    TextFx.fadeFromRight(this.line, t, 1.0, { dur: 0.8 });
    this.sub.opacity = eo(seg(t, 2.2, 3.2));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 2.2, 3.2))) + 'px)';
  },
});

},
  "end": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('end', {
  init(kit) {
    const r = 46;
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="end-s1">' + SG.box(3, r) + '<circle class="sig-r" cy="' + SG.lampY(3, r, 0) + '" r="' + r + '"/></g>' +
      '<g class="end-s2"><rect class="shadow" x="-98" y="-92" width="196" height="196" rx="18"/><rect class="sig-box" x="-104" y="-104" width="208" height="208" rx="18"/>' +
      '<path class="sig-ya" transform="rotate(-45)" d="' + SG.arrowL(124) + '" stroke-width="24"/></g>' +
      '<g class="end-s3"><g transform="translate(46 0) rotate(-180)"><line x1="0" y1="0" x2="0" y2="160" class="ppl-arm"/></g>' + SG.person() +
      '<rect class="ppl-vest" x="-62" y="40" width="124" height="34"/><rect class="sk" x="-56" y="-162" width="112" height="34" rx="12"/></g>' +
      '</svg>' +
      '<div class="words" style="left:180px;top:300px;width:940px">' +
      '<div class="kicker end-k">Session 4 · Learners Coach</div>' +
      '<div class="bar end-bar" style="transform-origin:left center"></div>' +
      '<h2 class="line end-h">Steady or flashing? Disc or arrow?</h2>' +
      '<p class="sub end-sub">Flashing red is a 4-way stop. Follow the person directing traffic. Next: the mini test.</p></div>' +
      '</div>'));
    this.s = [1, 2, 3].map(function (i) { return kit.stage.querySelector('.end-s' + i); });
    this.k = kit.stage.querySelector('.end-k').style;
    this.bar = kit.stage.querySelector('.end-bar').style;
    this.h = kit.stage.querySelector('.end-h');
    this.sub = kit.stage.querySelector('.end-sub').style;
  },
  render(t) {
    t = t / 1.3;
    const k = eo(seg(t, 0.0, 0.5));
    this.k.opacity = k;
    this.k.transform = 'translateY(' + lerp(14, 0, k) + 'px)';
    this.bar.transform = 'scaleX(' + eio(seg(t, 0.2, 0.9)).toFixed(4) + ')';
    TextFx.fadeFromRight(this.h, t, 0.4);
    const sb = eo(seg(t, 1.4, 2.0));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
    const tt = Math.min(t, 4.5);
    const pos = [[1400, 300], [1660, 560], [1380, 820]], sc = [1, 1, 0.62];
    for (let i = 0; i < 3; i++) {
      const st = 0.6 + i * 0.35;
      const s = eob(seg(t, st, st + 0.6), 1.6);
      const br = 1 + 0.012 * Math.sin((tt + i * 0.9) * 2 * Math.PI / 3.2);
      const y = pos[i][1] + lerp(-40, 0, eo(seg(t, st, st + 0.6))) - tt * 1.2;
      this.s[i].setAttribute('transform', 'translate(' + pos[i][0] + ' ' + y.toFixed(1) + ') rotate(' + lerp(-14 + i * 10, 0, eo(seg(t, st, st + 0.8))).toFixed(2) + ') scale(' + (Math.max(0, s) * br * sc[i]).toFixed(4) + ')');
    }
  },
});

},
 },
 score: function (kit) {
kit.score(function (S, T) {
  const BEATS = 336, BPM = BEATS * 60 / (T.end - T.discs), B = 60 / BPM;
  S.tempo(BPM, { t0: T.discs });
  S.program('pad', 'pad', { rev: 0.6, gain: -4 });
  S.program('mallet', 'marimba', { rev: 0.3, pan: -0.15 });
  S.program('keys', 'ep', { rev: 0.35, pan: 0.15 });
  S.program('bass', 'bass', { gain: -3 });
  S.program('bell', 'glock', { rev: 0.5, gain: -6 });
  // Title: near silent, a pad and one bell note
  S.chord('pad', ['D3', 'A3', 'F#4'], { t: 0, dur: T.discs + 0.4, vel: 30 });
  S.note('bell', 'A5', { t: 1.3, dur: 2, vel: 40 });
  S.fx('pop', 1.8, { vel: 40 });
  // Progression, one chord per 8 beats; every so often the groove drops to pad and mallet
  const prog = [['D3', 'A3', 'F#4'], ['B2', 'F#3', 'D4'], ['G2', 'D3', 'B3'], ['A2', 'E3', 'C#4']];
  const roots = ['D2', 'B1', 'G1', 'A1'];
  const drop = [8, 9, 18, 19, 28, 29, 35, 36];
  for (let i = 0; i < BEATS / 8; i++) {
    const c = prog[i % 4], rest = drop.indexOf(i) >= 0;
    S.chord('pad', c, { beat: i * 8, beats: 8, vel: rest ? 38 : 34 });
    if (rest) continue;
    if (i >= 2) { S.note('bass', roots[i % 4], { beat: i * 8, beats: 3, vel: 64 }); S.note('bass', roots[i % 4], { beat: i * 8 + 4, beats: 2, vel: 54 }); S.drums({ shaker: 'oxoxoxox', sidestick: '....x...', kick: 'x.......' }, { from: i * 8, repeat: 2, vel: 46 }); }
    if (i >= 4 && i % 2 === 0) S.chord('keys', c.map(function (p) { return p.replace(/\d/, function (d) { return String(+d + 1); }); }), { beat: i * 8, beats: 6, vel: 40 });
  }
  // Calm marimba ostinato over the signs, ending on the hit
  S.pattern('mallet', 'x.x.X..x', { from: 0, repeat: BEATS / 4, pitch: ['D5', 'A4', 'F#5', 'A4', 'E5'], vel: 50 });
  // Pops as each sign builds
  [['discs', 0.4], ['discs', 1.3], ['flashred', 0.4], ['flashred', 3.9], ['bustram', 0.5], ['bustram', 1.6], ['arrows', 0.4], ['greenarrows', 0.4], ['greenarrows', 8.6], ['pedestrian', 0.4], ['overhead', 0.65], ['overhead', 2.6], ['overhead', 4.55], ['flashing', 0.6], ['flashing', 4.8], ['officer', 0.4], ['flagman', 0.4], ['handsignals', 0.4], ['freeway', 0.5]].forEach(function (p) { S.fx('pop', T[p[0]] + p[1], { vel: 56 }); });
  // Trap scenes: art pops, the trap is struck through, the hook lands
  ['trapyellow', 'trapflash', 'traparrow', 'trapoverhead', 'trapofficer'].forEach(function (id) { S.fx('pop', T[id] + 0.6, { vel: 50 }); S.fx('click', T[id] + 5.0, { vel: 46 }); S.fx('ding', T[id] + 10.3, { vel: 50 }); });
  [1.6, 5.8, 10.0, 14.2, 18.4].forEach(function (s) { S.fx('click', T.handsignals + s + 0.2, { vel: 40 }); });
  S.fx('whoosh', T.arrows + 7.3, { dur: 2.3, vel: 30 });
  S.fx('click', T.officer + 2.6, { vel: 44 });
  S.fx('click', T.flagman + 2.3, { vel: 44 });
  S.fx('whoosh', T.freeway + 1.0, { dur: 2.0, vel: 26 });
  // Stop-time, then the hit on the end card
  S.fx('revswell', T.end, { dur: 1.4, vel: 60 });
  S.run('mallet', ['D5', 'E5', 'F#5', 'A5', 'B5', 'D6'], { t: T.end - 0.6, step: 0.1, vel: 50, cresc: 8 });
  S.chord('keys', ['D4', 'F#4', 'A4', 'D5'], { t: T.end, dur: T.END - T.end, vel: 72 });
  S.chord('pad', ['D3', 'A3', 'D4', 'F#4'], { t: T.end, dur: T.END - T.end, vel: 48 });
  S.note('bass', 'D2', { t: T.end, dur: 3, vel: 84 });
  S.drum('kick', { t: T.end, vel: 96 });
  S.drum('crash', { t: T.end, vel: 60 });
  S.fx('pop', T.end + 0.9, { vel: 48 }); S.fx('pop', T.end + 1.35, { vel: 48 }); S.fx('pop', T.end + 1.8, { vel: 48 });
  S.note('bell', 'F#5', { t: T.end + 2.8, dur: 3, vel: 40 });
  S.master({ gain: -6, fadeOut: 2.5 });
});

}
};