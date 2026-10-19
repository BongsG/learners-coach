(window.K53F = window.K53F || {})[3] = {
 title: "Session 3: Regulatory signs 2",
 scenes: [{"id": "title", "name": "Regulatory signs 2", "dur": 7}, {"id": "limit", "name": "Do not exceed", "dur": 15}, {"id": "reserve", "name": "Reservation signs", "dur": 13}, {"id": "residential", "name": "Residential area", "dur": 19}, {"id": "trapres", "name": "Trap: residential speed", "dur": 16}, {"id": "freeway", "name": "Freeway rules start", "dur": 14}, {"id": "derestrict", "name": "Crossed out = cancelled", "dur": 14}, {"id": "trapx", "name": "Trap: the red cross", "dur": 16}, {"id": "plates", "name": "Selective plates", "dur": 17}, {"id": "compare", "name": "Three round signs", "dur": 15}, {"id": "end", "name": "Remember", "dur": 11}],
 css: "#stage { --ground:#F3F5F7; --main:#1F5F8B; --second:#18212B; --accent:#F5C400; --sign-red:#C8102E; --sign-blue:#0A4D94; color:var(--second); font-family:var(--sans, system-ui, sans-serif) }\n.ground { position:absolute; inset:0; background:var(--ground); background-image:linear-gradient(color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px), linear-gradient(90deg, color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px); background-size:80px 80px; background-position:-1px -1px }\n.words { position:absolute; margin:0; display:flex; flex-direction:column; gap:24px } .words > * { margin:0 }\n.line { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:96px; line-height:1.02; font-weight:700; letter-spacing:-0.01em } .sub { font-size:40px; line-height:1.3; color:color-mix(in srgb, var(--second) 78%, var(--ground)) }\n.kicker { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:30px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:var(--main); display:flex; align-items:center; gap:16px }\n.kicker::before { content:''; width:44px; height:8px; border-radius:4px; background:var(--accent) }\n.bar { height:10px; width:160px; border-radius:5px; background:var(--accent) }\n.art { position:absolute; inset:0; width:100%; height:100%; overflow:visible }\n.sr { fill:var(--sign-red) } .sb { fill:var(--sign-blue) } .sw { fill:#FFFFFF } .sk { fill:var(--second) }\n.edge { fill:none; stroke:color-mix(in srgb, var(--second) 18%, transparent); stroke-width:3 }\n.shadow { fill:rgba(0,0,0,.12) }\n.card { position:absolute; background:#FFFFFF; border:3px solid color-mix(in srgb, var(--main) 35%, var(--ground)); border-radius:28px; box-shadow:0 18px 40px -18px rgba(0,0,0,.25) }\n.tag { display:inline-flex; align-self:flex-start; padding:10px 22px; border-radius:999px; background:var(--main); color:#FFFFFF; font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:34px; font-weight:700 }\n.tag.no { background:var(--sign-red) }\n.road { fill:color-mix(in srgb, var(--second) 82%, var(--ground)) } .lane { stroke:#FFFFFF; stroke-width:8; stroke-dasharray:40 34; fill:none } .lane.solid { stroke-dasharray:none; stroke:var(--accent) }",
 shared: function (kit) {
window.SG = {
  oct(cx, cy, r) { const p = []; for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + i * Math.PI / 4; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } return p.join(' '); },
  octWedge(cx, cy, r, i) { const a1 = Math.PI / 8 + i * Math.PI / 4, a2 = a1 + Math.PI / 4; return cx + ',' + cy + ' ' + (cx + r * Math.cos(a1)).toFixed(1) + ',' + (cy + r * Math.sin(a1)).toFixed(1) + ' ' + (cx + r * Math.cos(a2)).toFixed(1) + ',' + (cy + r * Math.sin(a2)).toFixed(1); },
  arrowUp(cx, cy, s) { return 'M' + cx + ' ' + (cy + s) + ' V' + (cy - s * 0.35) + ' M' + (cx - s * 0.55) + ' ' + (cy + s * 0.15) + ' L' + cx + ' ' + (cy - s) + ' L' + (cx + s * 0.55) + ' ' + (cy + s * 0.15); },
  wob(t, seed) { return Math.sin(t * 2.1 + seed) * 0.8 + Math.sin(t * 1.3 + seed * 2) * 0.5; },
  ringC(R) { return 2 * Math.PI * R * 0.84; },
  ring(R, p) { return '<circle class="shadow" cx="12" cy="18" r="' + R + '"/><circle class="sw ' + p + '-face" r="' + R + '"/><circle class="' + p + '-ring" r="' + (R * 0.84).toFixed(1) + '" fill="none" stroke-width="' + (R * 0.22).toFixed(1) + '" style="stroke:var(--sign-red)" stroke-dasharray="' + SG.ringC(R).toFixed(1) + '" transform="rotate(-90)"/>'; },
  plate4() { return '<rect class="shadow" x="-188" y="-132" width="400" height="300" rx="22"/><rect class="sw" x="-200" y="-150" width="400" height="300" rx="22"/><rect class="sb" x="-188" y="-138" width="376" height="276" rx="14"/>'; },
  resi(p) {
    return SG.plate4() + '<g class="' + p + '-sym"><polygon points="-172,-4 -106,-70 -40,-4" fill="#FFFFFF"/><rect x="-158" y="-10" width="104" height="94" fill="#FFFFFF"/><rect x="-122" y="34" width="32" height="50" class="sb"/>' +
      '<circle cx="12" cy="-22" r="18" fill="#FFFFFF"/><rect x="-4" y="0" width="32" height="84" rx="14" fill="#FFFFFF"/><circle cx="64" cy="12" r="13" fill="#FFFFFF"/><rect x="52" y="28" width="24" height="56" rx="11" fill="#FFFFFF"/>' +
      '<rect x="108" y="20" width="50" height="26" rx="8" fill="#FFFFFF"/><rect x="94" y="38" width="80" height="34" rx="12" fill="#FFFFFF"/><circle cx="112" cy="76" r="10" fill="#FFFFFF"/><circle cx="156" cy="76" r="10" fill="#FFFFFF"/>' +
      '<rect x="-172" y="92" width="346" height="8" rx="4" fill="#FFFFFF"/></g>';
  },
  fwy(p) {
    return SG.plate4() + '<polygon class="' + p + '-road" points="-150,128 -36,-24 36,-24 150,128" fill="#FFFFFF"/><polygon class="sb" points="-7,118 -3,-14 3,-14 7,118"/>' +
      '<g class="' + p + '-bridge"><rect x="-176" y="-86" width="352" height="30" rx="4" fill="#FFFFFF"/><rect x="-140" y="-60" width="18" height="38" fill="#FFFFFF"/><rect x="122" y="-60" width="18" height="38" fill="#FFFFFF"/></g>';
  },
  rpanel(p, letter, sym) {
    return '<rect class="shadow" x="-138" y="-182" width="300" height="400" rx="20"/><rect class="sw" x="-150" y="-200" width="300" height="400" rx="20"/><rect class="sb" x="-138" y="-188" width="276" height="376" rx="12"/>' +
      '<text class="' + p + '-l" x="0" y="-6" text-anchor="middle" style="font:700 200px var(--display, var(--sans, system-ui, sans-serif)); fill:#FFFFFF">' + letter + '</text><g class="' + p + '-s">' + sym + '</g>';
  },
  busW: '<rect x="-96" y="44" width="192" height="88" rx="16" fill="#FFFFFF"/><rect x="-80" y="58" width="34" height="28" rx="5" class="sb"/><rect x="-36" y="58" width="34" height="28" rx="5" class="sb"/><rect x="8" y="58" width="34" height="28" rx="5" class="sb"/><rect x="52" y="58" width="30" height="28" rx="5" class="sb"/><circle cx="-54" cy="134" r="18" fill="#FFFFFF"/><circle cx="54" cy="134" r="18" fill="#FFFFFF"/><circle cx="-54" cy="134" r="7" class="sb"/><circle cx="54" cy="134" r="7" class="sb"/>',
  carW: '<path d="M-96 128 V100 Q-96 86 -80 84 L-52 50 H44 L74 84 Q96 86 96 102 V128 Z" fill="#FFFFFF"/><path d="M-40 60 H34 L56 84 H-60 Z" class="sb"/><circle cx="-54" cy="132" r="18" fill="#FFFFFF"/><circle cx="54" cy="132" r="18" fill="#FFFFFF"/><circle cx="-54" cy="132" r="7" class="sb"/><circle cx="54" cy="132" r="7" class="sb"/>',
  cross(p) { return '<line class="' + p + '-x1" x1="-210" y1="-160" x2="210" y2="160" stroke-width="30" stroke-linecap="round" style="stroke:var(--sign-red)" stroke-dasharray="528"/><line class="' + p + '-x2" x1="-210" y1="160" x2="210" y2="-160" stroke-width="30" stroke-linecap="round" style="stroke:var(--sign-red)" stroke-dasharray="528"/>'; },
  br(t) { return 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2); },
  trap(id, d) {
    const CARD = 'width:770px;height:400px;padding:36px;box-sizing:border-box';
    return {
      init(kit) {
        kit.stage.append(kit.h('<div class="ground">' +
          '<div class="words" style="left:150px;top:110px;width:1620px"><div class="tag no ' + id + '-tq">Tricky question</div><h2 class="line ' + id + '-q">' + d.q + '</h2></div>' +
          '<div class="card ' + id + '-c1" style="left:150px;top:400px;' + CARD + '"><div class="words" style="position:relative;gap:18px"><div class="tag no">Trap</div><p class="sub ' + id + '-trap">' + d.trap + '</p></div>' +
          '<div class="' + id + '-strike" style="position:absolute;left:36px;right:36px;top:160px;height:10px;border-radius:5px;background:var(--sign-red);transform-origin:left center"></div></div>' +
          '<div class="card ' + id + '-c2" style="left:1000px;top:400px;' + CARD + '"><div class="words" style="position:relative;gap:18px"><div class="tag">Remember</div><p class="sub" style="color:var(--second)">' + d.simple + '</p></div></div>' +
          '<div class="' + id + '-hook" style="position:absolute;left:150px;top:850px;width:1620px;padding:22px 40px;box-sizing:border-box;border-radius:24px;background:var(--accent)"><p class="line" style="margin:0;font-size:72px">' + d.hook + '</p></div>' +
          '</div>'));
        const q = function (c) { return kit.stage.querySelector('.' + id + '-' + c); };
        this.k = kit;
        this.q = q('q');
        this.s = { tq: q('tq').style, c1: q('c1').style, c2: q('c2').style, st: q('strike').style, trap: q('trap').style, hook: q('hook').style };
      },
      render(t) {
        const { seg, eo, eio, eob, lerp, TextFx } = this.k;
        const s = this.s;
        s.tq.opacity = eo(seg(t, -0.4, 0.4));
        TextFx.fadeFromRight(this.q, t, -0.2, { dur: 0.9, stagger: 0.12 });
        const c1 = eo(seg(t, 1.6, 2.6));
        s.c1.opacity = c1;
        s.c1.transform = 'translateX(' + lerp(60, 0, c1) + 'px)';
        const k = eio(seg(t, 5.8, 6.6));
        s.st.transform = 'scaleX(' + k.toFixed(4) + ')';
        s.trap.opacity = lerp(1, 0.5, k);
        const c2 = eo(seg(t, 6.6, 7.6));
        s.c2.opacity = c2;
        s.c2.transform = 'translateX(' + lerp(60, 0, c2) + 'px)';
        const h = Math.max(0, eob(seg(t, 10.8, 11.8), 1.4));
        s.hook.opacity = Math.min(1, h * 1.5);
        s.hook.transform = 'translateY(' + lerp(40, 0, Math.min(1, h)).toFixed(1) + 'px)';
      },
    };
  }
};
},
 mods: {
  "title": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('title', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="title-sign">' + SG.ring(250, 'title') +
      '<text class="title-num" x="0" y="70" text-anchor="middle" style="font:700 200px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)">60</text>' +
      '</g></svg>' +
      '<div class="words" style="left:150px;top:290px;width:900px">' +
      '<div class="kicker title-kick">Session 3 · Learners Coach</div>' +
      '<h1 class="line" style="font-size:132px">Regulatory signs 2</h1>' +
      '<p class="sub title-sub">Limits, reserved lanes and parking, rule areas and the plates that narrow a sign down</p>' +
      '</div></div>'));
    this.C = SG.ringC(250);
    this.sign = kit.stage.querySelector('.title-sign');
    this.face = kit.stage.querySelector('.title-face');
    this.ring = kit.stage.querySelector('.title-ring');
    this.num = kit.stage.querySelector('.title-num');
    this.kick = kit.stage.querySelector('.title-kick').style;
    this.sub = kit.stage.querySelector('.title-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.kick.opacity = eo(seg(t, -0.6, -0.1));
    TextFx.fadeFromRight(this.line, t, -0.5);
    const sb = eo(seg(t, 0.6, 1.2));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
    const f = eob(seg(t, -0.5, 0.1), 1.6);
    this.face.setAttribute('transform', 'scale(' + Math.max(0, f).toFixed(3) + ')');
    this.ring.setAttribute('stroke-dashoffset', (this.C * (1 - eio(seg(t, -0.3, 0.9)))).toFixed(1));
    const n = Math.max(0, eob(seg(t, 0.9, 1.4), 1.8));
    this.num.style.opacity = Math.min(1, n * 1.5);
    this.num.setAttribute('transform', 'scale(' + lerp(0.5, 1, n).toFixed(3) + ')');
    this.sign.setAttribute('transform', 'translate(1420 ' + (540 - t * 1.5).toFixed(1) + ') scale(' + SG.br(t).toFixed(4) + ') rotate(' + (SG.wob(t, 1) * 0.6).toFixed(2) + ')');
  },
});

},
  "limit": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const LM_SUBS = ['Speed: do not go faster than the number shown.', 'Height: do not go over the height shown.', 'Mass, width and length work the same way: not more than shown.'];
const LM_T = [0, 4.8, 7.6];
kit.scene('limit', {
  init(kit) {
    const F = 'font:700 210px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="limit-sign">' + SG.ring(240, 'limit') +
      '<g class="limit-s0"><text x="0" y="72" text-anchor="middle" style="' + F + '">60</text></g>' +
      '<g class="limit-s1"><polygon class="sk" points="-56,-130 56,-130 0,-62"/><polygon class="sk" points="-56,130 56,130 0,62"/><line x1="-90" y1="0" x2="90" y2="0" stroke-width="10" stroke-dasharray="22 16" style="stroke:var(--second)"/></g>' +
      '<g class="limit-s2"><rect x="-128" y="-70" width="150" height="104" rx="10" class="sk"/><path d="M30 -38 H92 L124 0 V34 H30 Z" class="sk"/><circle cx="-84" cy="50" r="24" class="sk"/><circle cx="80" cy="50" r="24" class="sk"/><circle cx="-84" cy="50" r="9" class="sw"/><circle cx="80" cy="50" r="9" class="sw"/></g>' +
      '</g></svg>' +
      '<div class="words" style="left:960px;top:220px;width:840px">' +
      '<div class="tag no limit-tag">Limit sign: red ring, no line</div>' +
      '<h2 class="line">Do not exceed</h2>' +
      '<p class="sub limit-sub">' + LM_SUBS[0] + '</p></div></div>'));
    this.C = SG.ringC(240);
    this.sign = kit.stage.querySelector('.limit-sign');
    this.face = kit.stage.querySelector('.limit-face');
    this.ring = kit.stage.querySelector('.limit-ring');
    this.s = [0, 1, 2].map(function (i) { return kit.stage.querySelector('.limit-s' + i); });
    this.tag = kit.stage.querySelector('.limit-tag').style;
    this.subEl = kit.stage.querySelector('.limit-sub');
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const f = eob(seg(t, 0.0, 0.5), 1.6);
    this.face.setAttribute('transform', 'scale(' + Math.max(0, f).toFixed(3) + ')');
    this.ring.setAttribute('stroke-dashoffset', (this.C * (1 - eio(seg(t, 0.2, 1.0)))).toFixed(1));
    this.sign.setAttribute('transform', 'translate(520 ' + (470 - t * 1.2).toFixed(1) + ') scale(' + SG.br(t).toFixed(4) + ')');
    for (let i = 0; i < 3; i++) {
      const a = i === 0 ? 1.0 : LM_T[i];
      const end = i === 2 ? 99 : LM_T[i + 1];
      const sc = Math.max(0, eob(seg(t, a, a + 0.45), 1.7)) * (1 - eo(seg(t, end - 0.35, end)));
      this.s[i].setAttribute('transform', 'scale(' + sc.toFixed(3) + ')');
      this.s[i].style.opacity = sc > 0.01 ? 1 : 0;
    }
    this.tag.opacity = eo(seg(t, 1.0, 1.4));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.0, 1.5))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 1.2);
    let k = 0; if (t >= LM_T[2]) k = 2; else if (t >= LM_T[1]) k = 1;
    if (this.subEl.textContent !== LM_SUBS[k]) this.subEl.textContent = LM_SUBS[k];
    const near = Math.min(Math.abs(t - LM_T[1]), Math.abs(t - LM_T[2]));
    const op = Math.min(eo(seg(t, 1.9, 2.5)), Math.min(1, near / 0.3));
    this.subEl.style.opacity = op;
    this.subEl.style.transform = 'translateX(' + lerp(26, 0, op) + 'px)';
  },
});

},
  "reserve": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const RS_SUBS = ['R reserves a roadway or lane for the vehicle shown.', 'P reserves parking for the vehicle shown.'];
const RS_B = 5.0;
kit.scene('reserve', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="reserve-a">' + SG.rpanel('reserve-a', 'R', SG.busW) + '</g>' +
      '<g class="reserve-b">' + SG.rpanel('reserve-b', 'P', SG.carW) + '</g>' +
      '</svg>' +
      '<div class="words" style="left:960px;top:220px;width:840px">' +
      '<div class="tag reserve-tag">Reservation sign: blue rectangle</div>' +
      '<h2 class="line">Kept for some</h2>' +
      '<p class="sub reserve-sub">' + RS_SUBS[0] + '</p></div></div>'));
    const q = function (c) { return kit.stage.querySelector('.' + c); };
    this.g = [q('reserve-a'), q('reserve-b')];
    this.l = [q('reserve-a-l'), q('reserve-b-l')];
    this.s = [q('reserve-a-s'), q('reserve-b-s')];
    this.tag = q('reserve-tag').style;
    this.subEl = q('reserve-sub');
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const br = SG.br(t);
    const act = eio(seg(t, RS_B, RS_B + 0.6));
    const st = [-0.1, RS_B - 0.2];
    const xs = [300, 680];
    for (let i = 0; i < 2; i++) {
      const p = Math.max(0, eob(seg(t, st[i], st[i] + 0.6), 1.6));
      const dim = i === 0 ? lerp(1, 0.55, act) : 1;
      this.g[i].setAttribute('transform', 'translate(' + xs[i] + ' ' + (480 - t * 1.3).toFixed(1) + ') scale(' + (p * br * (i === 1 ? 1 + 0.04 * act : 1)).toFixed(4) + ')');
      this.g[i].style.opacity = (p > 0.01 ? 1 : 0) * dim;
      const l = Math.max(0, eob(seg(t, st[i] + 0.6, st[i] + 1.1), 1.8));
      this.l[i].style.opacity = Math.min(1, l * 1.5);
      this.l[i].setAttribute('transform', 'translate(0 ' + lerp(-60, 0, Math.min(1, l)).toFixed(1) + ')');
      const s = eo(seg(t, st[i] + 1.0, st[i] + 1.6));
      this.s[i].style.opacity = s;
      this.s[i].setAttribute('transform', 'translate(' + lerp(-80, 0, s).toFixed(1) + ' 0)');
    }
    this.tag.opacity = eo(seg(t, 1.0, 1.4));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.0, 1.5))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 1.2);
    const k = t >= RS_B ? 1 : 0;
    if (this.subEl.textContent !== RS_SUBS[k]) this.subEl.textContent = RS_SUBS[k];
    const op = Math.min(eo(seg(t, 1.9, 2.5)), Math.min(1, Math.abs(t - RS_B) / 0.3));
    this.subEl.style.opacity = op;
    this.subEl.style.transform = 'translateX(' + lerp(26, 0, op) + 'px)';
  },
});

},
  "residential": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const RD_SUBS = ['No more than 30 km/h.', 'Pedestrians have right of way.', 'No driving through without stopping.', 'No vehicles over 3 500 kg or with more than 10 passenger seats, except for local access.'];
const RD_T = [0, 4.8, 7.4, 9.8];
kit.scene('residential', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="residential-sign">' + SG.resi('residential') + '</g>' +
      '<g class="residential-badge"><rect x="-170" y="-60" width="340" height="120" rx="24" class="sw"/><rect x="-170" y="-60" width="340" height="120" rx="24" class="edge" style="stroke:var(--sign-red);stroke-width:8px"/>' +
      '<text x="0" y="28" text-anchor="middle" style="font:700 80px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)">30 km/h</text></g>' +
      '<g class="residential-ped"><circle cx="0" cy="-74" r="18" class="sk"/><rect x="-16" y="-52" width="32" height="74" rx="14" class="sk"/></g>' +
      '</svg>' +
      '<div class="words" style="left:960px;top:200px;width:840px">' +
      '<div class="tag residential-tag">Residential area sign</div>' +
      '<h2 class="line">Residential area</h2>' +
      '<p class="sub residential-sub">' + RD_SUBS[0] + '</p></div></div>'));
    const q = function (c) { return kit.stage.querySelector('.' + c); };
    this.sign = q('residential-sign');
    this.sym = q('residential-sym');
    this.badge = q('residential-badge');
    this.ped = q('residential-ped');
    this.tag = q('residential-tag').style;
    this.subEl = q('residential-sub');
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const p = Math.max(0, eob(seg(t, -0.1, 0.5), 1.6));
    this.sign.setAttribute('transform', 'translate(500 ' + (430 - t * 1.2).toFixed(1) + ') scale(' + (1.25 * p * SG.br(t)).toFixed(4) + ')');
    const s = Math.max(0, eob(seg(t, 0.5, 1.0), 1.7));
    this.sym.setAttribute('transform', 'translate(0 ' + lerp(40, 0, Math.min(1, s)).toFixed(1) + ')');
    this.sym.style.opacity = Math.min(1, s * 1.5);
    const b = Math.max(0, eob(seg(t, 1.9, 2.4), 1.8));
    const hb = 1 + 0.05 * Math.sin(Math.PI * seg(t, 2.6, 3.2));
    this.badge.setAttribute('transform', 'translate(500 ' + (790 - t * 1.2).toFixed(1) + ') scale(' + (b * hb).toFixed(4) + ')');
    this.badge.style.opacity = b > 0.01 ? 1 : 0;
    const w = seg(t, 4.9, 7.3);
    const pv = eo(seg(t, 4.9, 5.2)) * (1 - eo(seg(t, 7.0, 7.3)));
    this.ped.setAttribute('transform', 'translate(' + lerp(140, 860, w).toFixed(1) + ' ' + (960 - Math.abs(Math.sin(t * 7)) * 6).toFixed(1) + ')');
    this.ped.style.opacity = pv;
    this.tag.opacity = eo(seg(t, 1.0, 1.4));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.0, 1.5))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 1.2);
    let k = 0; for (let i = 1; i < 4; i++) if (t >= RD_T[i]) k = i;
    if (this.subEl.textContent !== RD_SUBS[k]) this.subEl.textContent = RD_SUBS[k];
    let near = 9; for (let i = 1; i < 4; i++) near = Math.min(near, Math.abs(t - RD_T[i]));
    const op = Math.min(eo(seg(t, 1.9, 2.5)), Math.min(1, near / 0.3));
    this.subEl.style.opacity = op;
    this.subEl.style.transform = 'translateX(' + lerp(26, 0, op) + 'px)';
  },
});

},
  "trapres": function (kit) {
kit.scene('trapres', SG.trap('trapres', {
  q: 'What is the speed limit in a residential area?',
  trap: 'Guessing 40 or 60 because it is in town.',
  simple: '30 km/h, and pedestrians have right of way.',
  hook: 'Residential: 30 and walkers first.',
}));

},
  "freeway": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const FW_SUBS = ['No hand signals, except in an emergency.', 'No stopping, except in an emergency.', 'Learners only with a licensed driver.'];
const FW_T = [0, 4.8, 7.4];
kit.scene('freeway', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="freeway-sign">' + SG.fwy('freeway') + '</g>' +
      '</svg>' +
      '<div class="words" style="left:960px;top:220px;width:840px">' +
      '<div class="tag freeway-tag">Freeway sign</div>' +
      '<h2 class="line">Freeway rules start</h2>' +
      '<p class="sub freeway-sub">' + FW_SUBS[0] + '</p></div></div>'));
    const q = function (c) { return kit.stage.querySelector('.' + c); };
    this.sign = q('freeway-sign');
    this.road = q('freeway-road');
    this.bridge = q('freeway-bridge');
    this.tag = q('freeway-tag').style;
    this.subEl = q('freeway-sub');
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const p = Math.max(0, eob(seg(t, -0.1, 0.5), 1.6));
    this.sign.setAttribute('transform', 'translate(500 ' + (460 - t * 1.3).toFixed(1) + ') scale(' + (1.3 * p * SG.br(t)).toFixed(4) + ')');
    const r = eo(seg(t, 0.5, 1.2));
    this.road.setAttribute('transform', 'translate(0 128) scale(1 ' + Math.max(0.001, r).toFixed(3) + ') translate(0 -128)');
    const b = eob(seg(t, 1.0, 1.5), 1.6);
    this.bridge.setAttribute('transform', 'translate(' + lerp(260, 0, Math.min(1, Math.max(0, b))).toFixed(1) + ' 0)');
    this.bridge.style.opacity = Math.min(1, Math.max(0, b) * 2);
    this.tag.opacity = eo(seg(t, 1.0, 1.4));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.0, 1.5))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 1.2);
    let k = 0; if (t >= FW_T[2]) k = 2; else if (t >= FW_T[1]) k = 1;
    if (this.subEl.textContent !== FW_SUBS[k]) this.subEl.textContent = FW_SUBS[k];
    const near = Math.min(Math.abs(t - FW_T[1]), Math.abs(t - FW_T[2]));
    const op = Math.min(eo(seg(t, 1.9, 2.5)), Math.min(1, near / 0.3));
    this.subEl.style.opacity = op;
    this.subEl.style.transform = 'translateX(' + lerp(26, 0, op) + 'px)';
  },
});

},
  "derestrict": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const DR_SUBS = ['A red diagonal cross or line over a sign means that rule has ended.', 'It does not mean forbidden. Here, residential rules no longer apply.', 'End of toll road, end of freeway, end of residential area and so on.'];
const DR_T = [0, 5.2, 7.8];
kit.scene('derestrict', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="derestrict-sign"><g class="derestrict-a">' + SG.resi('derestrict-r') + '</g>' +
      '<g class="derestrict-b">' + SG.fwy('derestrict-f') + '</g>' + SG.cross('derestrict') + '</g>' +
      '</svg>' +
      '<div class="words" style="left:960px;top:220px;width:840px">' +
      '<div class="tag no derestrict-tag">De-restriction sign</div>' +
      '<h2 class="line">Crossed out = cancelled</h2>' +
      '<p class="sub derestrict-sub">' + DR_SUBS[0] + '</p></div></div>'));
    const q = function (c) { return kit.stage.querySelector('.' + c); };
    this.sign = q('derestrict-sign');
    this.a = q('derestrict-a');
    this.b = q('derestrict-b');
    this.x1 = q('derestrict-x1');
    this.x2 = q('derestrict-x2');
    this.tag = q('derestrict-tag').style;
    this.subEl = q('derestrict-sub');
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const p = Math.max(0, eob(seg(t, -0.1, 0.5), 1.6));
    const sw = DR_T[2];
    const pulse = 1 - 0.08 * Math.sin(Math.PI * seg(t, sw - 0.4, sw + 0.4));
    this.sign.setAttribute('transform', 'translate(500 ' + (460 - t * 1.3).toFixed(1) + ') scale(' + (1.2 * p * pulse * SG.br(t)).toFixed(4) + ')');
    const ab = eio(seg(t, sw - 0.3, sw + 0.3));
    this.a.style.opacity = 1 - ab;
    this.b.style.opacity = ab;
    this.x1.setAttribute('stroke-dashoffset', (528 * (1 - eo(seg(t, 1.4, 1.8)))).toFixed(1));
    this.x2.setAttribute('stroke-dashoffset', (528 * (1 - eo(seg(t, 1.9, 2.3)))).toFixed(1));
    this.tag.opacity = eo(seg(t, 0.8, 1.2));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.8, 1.3))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 1.0);
    let k = 0; if (t >= DR_T[2]) k = 2; else if (t >= DR_T[1]) k = 1;
    if (this.subEl.textContent !== DR_SUBS[k]) this.subEl.textContent = DR_SUBS[k];
    const near = Math.min(Math.abs(t - DR_T[1]), Math.abs(t - DR_T[2]));
    const op = Math.min(eo(seg(t, 2.3, 2.9)), Math.min(1, near / 0.3));
    this.subEl.style.opacity = op;
    this.subEl.style.transform = 'translateX(' + lerp(26, 0, op) + 'px)';
  },
});

},
  "trapx": function (kit) {
kit.scene('trapx', SG.trap('trapx', {
  q: 'What does a red cross through a sign mean?',
  trap: 'Thinking it means the action is forbidden.',
  simple: 'A red diagonal cross over a sign means the restriction is over. For example, crossed out residential area sign = residential rules no longer apply.',
  hook: 'Crossed out = cancelled.',
}));

},
  "plates": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const PL_SUBS = ['Only at the times or days shown.', 'Only for the vehicle shown.', 'Only for the distance shown.', 'Only at night, or only by day.'];
const PL_T = [0, 4.8, 7.4, 10.0];
kit.scene('plates', {
  init(kit) {
    const K = 'fill="none" stroke-width="10" stroke-linecap="round" style="stroke:var(--second)"';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="plates-sign">' + SG.rpanel('plates', 'P', SG.carW) + '</g>' +
      '<g class="plates-plate"><rect class="shadow" x="-140" y="-57" width="300" height="150" rx="16"/><rect class="sw" x="-150" y="-75" width="300" height="150" rx="16"/>' +
      '<rect x="-150" y="-75" width="300" height="150" rx="16" class="edge" style="stroke:var(--second);stroke-width:8px"/>' +
      '<g class="plates-i0"><circle r="48" ' + K + '/><path d="M0 0 V-30 M0 0 H24" ' + K + '/></g>' +
      '<g class="plates-i1"><rect x="-80" y="-44" width="160" height="70" rx="14" class="sk"/><rect x="-66" y="-32" width="30" height="24" rx="4" class="sw"/><rect x="-28" y="-32" width="30" height="24" rx="4" class="sw"/><rect x="10" y="-32" width="30" height="24" rx="4" class="sw"/><circle cx="-44" cy="30" r="14" class="sk"/><circle cx="44" cy="30" r="14" class="sk"/></g>' +
      '<g class="plates-i2"><path d="M-110 0 H110 M-110 -30 V30 M110 -30 V30" ' + K + '/><polygon points="-104,0 -78,-16 -78,16" class="sk"/><polygon points="104,0 78,-16 78,16" class="sk"/></g>' +
      '<g class="plates-i3"><path d="M18 -50 A52 52 0 1 0 18 50 A40 40 0 1 1 18 -50 Z" class="sk"/><circle cx="62" cy="-22" r="7" class="sk"/><circle cx="90" cy="16" r="5" class="sk"/></g>' +
      '</g></svg>' +
      '<div class="words" style="left:960px;top:220px;width:840px">' +
      '<div class="tag plates-tag">Selective plate</div>' +
      '<h2 class="line">Plates narrow it down</h2>' +
      '<p class="sub plates-sub">' + PL_SUBS[0] + '</p></div></div>'));
    const q = function (c) { return kit.stage.querySelector('.' + c); };
    this.sign = q('plates-sign');
    this.plate = q('plates-plate');
    this.i = [0, 1, 2, 3].map(function (n) { return q('plates-i' + n); });
    this.tag = q('plates-tag').style;
    this.subEl = q('plates-sub');
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const br = SG.br(t);
    const p = Math.max(0, eob(seg(t, -0.1, 0.5), 1.6));
    this.sign.setAttribute('transform', 'translate(500 ' + (330 - t * 1.2).toFixed(1) + ') scale(' + (0.85 * p * br).toFixed(4) + ')');
    const pl = eob(seg(t, 0.9, 1.5), 1.6);
    this.plate.setAttribute('transform', 'translate(500 ' + (lerp(820, 640, pl) - t * 1.2).toFixed(1) + ') scale(' + br.toFixed(4) + ')');
    this.plate.style.opacity = Math.min(1, Math.max(0, pl) * 2);
    for (let n = 0; n < 4; n++) {
      const a = n === 0 ? 1.4 : PL_T[n];
      const end = n === 3 ? 99 : PL_T[n + 1];
      const sc = Math.max(0, eob(seg(t, a, a + 0.45), 1.7)) * (1 - eo(seg(t, end - 0.35, end)));
      this.i[n].setAttribute('transform', 'scale(' + sc.toFixed(3) + ')');
      this.i[n].style.opacity = sc > 0.01 ? 1 : 0;
    }
    this.tag.opacity = eo(seg(t, 1.0, 1.4));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.0, 1.5))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 1.2);
    let k = 0; for (let n = 1; n < 4; n++) if (t >= PL_T[n]) k = n;
    if (this.subEl.textContent !== PL_SUBS[k]) this.subEl.textContent = PL_SUBS[k];
    let near = 9; for (let n = 1; n < 4; n++) near = Math.min(near, Math.abs(t - PL_T[n]));
    const op = Math.min(eo(seg(t, 1.9, 2.5)), Math.min(1, near / 0.3));
    this.subEl.style.opacity = op;
    this.subEl.style.transform = 'translateX(' + lerp(26, 0, op) + 'px)';
  },
});

},
  "compare": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('compare', {
  init(kit) {
    const F = 'font:700 140px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)';
    const lab = function (x, cls, tag, sub) { return '<div class="words compare-l" style="left:' + (x - 300) + 'px;top:730px;width:600px;text-align:center"><div class="tag' + cls + '" style="align-self:center">' + tag + '</div><p class="sub" style="margin-top:8px">' + sub + '</p></div>'; };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="compare-a">' + SG.ring(170, 'compare-a') + '<text class="compare-num" x="0" y="50" text-anchor="middle" style="' + F + '">60</text></g>' +
      '<g class="compare-b">' + SG.ring(170, 'compare-b') + '<text class="compare-p" x="0" y="50" text-anchor="middle" style="' + F + '">P</text>' +
      '<line class="compare-slash" x1="-100" y1="-100" x2="100" y2="100" stroke-width="30" style="stroke:var(--sign-red)" stroke-dasharray="282.8"/></g>' +
      '<g class="compare-c"><circle class="shadow" cx="12" cy="18" r="170"/><circle class="sb compare-disc" r="170"/>' +
      '<path class="compare-arrow" d="' + SG.arrowUp(0, 0, 95) + '" fill="none" stroke="#FFFFFF" stroke-width="34" stroke-linecap="round" stroke-linejoin="round"/></g>' +
      '</svg>' +
      '<div class="words" style="left:0;top:80px;width:1920px;text-align:center"><h2 class="line compare-h">Three round signs</h2></div>' +
      lab(380, ' no', 'Ring and number', 'Not more than') + lab(960, ' no', 'Ring and line', 'You must not') + lab(1540, '', 'Blue disc', 'You must') +
      '<div class="words compare-foot" style="left:0;top:960px;width:1920px;text-align:center">' +
      '<p class="kicker" style="justify-content:center">Blue says do. Red ring says do not. Add a number: not more than.</p></div>' +
      '</div>'));
    const q = function (c) { return kit.stage.querySelector('.' + c); };
    this.g = [q('compare-a'), q('compare-b'), q('compare-c')];
    this.face = [q('compare-a-face'), q('compare-b-face'), q('compare-disc')];
    this.ring = [q('compare-a-ring'), q('compare-b-ring')];
    this.mark = [q('compare-num'), q('compare-p'), q('compare-arrow')];
    this.slash = q('compare-slash');
    this.h = q('compare-h');
    this.l = [...kit.stage.querySelectorAll('.compare-l')];
    this.foot = q('compare-foot').style;
    this.C = SG.ringC(170);
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, 0.0);
    const xs = [380, 960, 1540], st = [0.0, 1.5, 3.0];
    for (let i = 0; i < 3; i++) {
      const f = Math.max(0, eob(seg(t, st[i], st[i] + 0.5), 1.6));
      this.face[i].setAttribute('transform', 'scale(' + f.toFixed(3) + ')');
      if (i < 2) this.ring[i].setAttribute('stroke-dashoffset', (this.C * (1 - eio(seg(t, st[i] + 0.2, st[i] + 0.9)))).toFixed(1));
      const m = Math.max(0, eob(seg(t, st[i] + 0.8, st[i] + 1.2), 1.8));
      this.mark[i].style.opacity = Math.min(1, m * 1.5);
      this.mark[i].setAttribute('transform', 'scale(' + lerp(0.5, 1, m).toFixed(3) + ')');
      const hl = 1 + 0.06 * Math.sin(Math.PI * seg(t, 7.4 + i * 1.0, 8.2 + i * 1.0));
      this.g[i].setAttribute('transform', 'translate(' + xs[i] + ' ' + (480 - t * 1.3).toFixed(1) + ') scale(' + (SG.br(t + i) * hl).toFixed(4) + ')');
      const la = eo(seg(t, 4.4 + i * 0.5, 5.0 + i * 0.5));
      this.l[i].style.opacity = la;
      this.l[i].style.transform = 'translateY(' + lerp(24, 0, la) + 'px)';
    }
    this.g[1].style.opacity = t >= 1.5 ? 1 : 0;
    this.g[2].style.opacity = t >= 3.0 ? 1 : 0;
    this.slash.setAttribute('stroke-dashoffset', (282.8 * (1 - eo(seg(t, 2.6, 2.95)))).toFixed(1));
    const f = eo(seg(t, 6.4, 7.1));
    this.foot.opacity = f;
    this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});

},
  "end": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('end', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="end-s1"><circle class="shadow" cx="10" cy="14" r="110"/><circle class="sw" r="110"/>' +
      '<circle r="92" fill="none" stroke-width="24" style="stroke:var(--sign-red)"/>' +
      '<text y="30" text-anchor="middle" style="font:700 88px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)">60</text></g>' +
      '<g class="end-s2"><g transform="scale(0.5)">' + SG.rpanel('end-r', 'R', SG.busW) + '</g></g>' +
      '<g class="end-s3"><g transform="scale(0.55)">' + SG.resi('end-x') + SG.cross('end') + '</g></g>' +
      '</svg>' +
      '<div class="words" style="left:180px;top:300px;width:920px">' +
      '<div class="kicker end-k">Session 3 · Learners Coach</div>' +
      '<div class="bar end-bar" style="transform-origin:left center"></div>' +
      '<h2 class="line end-h">Crossed out = cancelled.</h2>' +
      '<p class="sub end-sub">Red ring and number: not more than. Residential: 30 and walkers first. Next: the mini test.</p></div>' +
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
    const pos = [[1400, 290], [1640, 560], [1360, 800]];
    for (let i = 0; i < 3; i++) {
      const st = 0.6 + i * 0.35;
      const s = Math.max(0, eob(seg(t, st, st + 0.6), 1.6));
      const br = 1 + 0.012 * Math.sin((tt + i * 0.9) * 2 * Math.PI / 3.2) * (1 - seg(t, 3.5, 4.5));
      const y = pos[i][1] + lerp(-40, 0, eo(seg(t, st, st + 0.6))) - tt * 1.2;
      this.s[i].setAttribute('transform', 'translate(' + pos[i][0] + ' ' + y.toFixed(1) + ') rotate(' + lerp(-14 + i * 10, 0, eo(seg(t, st, st + 0.8))).toFixed(2) + ') scale(' + (s * br).toFixed(4) + ')');
    }
  },
});

},
 },
 score: function (kit) {
kit.score(function (S, T) {
  const N = 208, BPM = N * 60 / (T.end - T.limit), B = 60 / BPM;
  S.tempo(BPM, { t0: T.limit });
  S.program('pad', 'pad', { rev: 0.6, gain: -4 });
  S.program('mallet', 'marimba', { rev: 0.3, pan: -0.15 });
  S.program('keys', 'ep', { rev: 0.35, pan: 0.15 });
  S.program('bass', 'bass', { gain: -3 });
  S.program('bell', 'glock', { rev: 0.5, gain: -6 });
  // Title: near silent, a pad and one bell note
  S.chord('pad', ['D3', 'A3', 'F#4'], { t: 0, dur: T.limit + 0.4, vel: 30 });
  S.note('bell', 'A5', { t: 1.3, dur: 2.6, vel: 40 });
  S.fx('pop', 1.3, { vel: 40 });
  // Progression, one chord per 8 beats; breaks drop to pad and mallet only
  const prog = [['D3', 'A3', 'F#4'], ['B2', 'F#3', 'D4'], ['G2', 'D3', 'B3'], ['A2', 'E3', 'C#4']];
  const roots = ['D2', 'B1', 'G1', 'A1'];
  const brk = function (b) { return (b >= 64 && b < 80) || (b >= 128 && b < 144) || b >= 192; };
  for (let i = 0; i < N / 8; i++) {
    const c = prog[i % 4], b = i * 8;
    S.chord('pad', c, { beat: b, beats: 8, vel: 34 });
    if (i >= 2 && !brk(b)) { S.note('bass', roots[i % 4], { beat: b, beats: 3, vel: 64 }); S.note('bass', roots[i % 4], { beat: b + 4, beats: 2, vel: 54 }); }
    if (i >= 4 && i % 2 === 0 && !brk(b)) S.chord('keys', c.map(function (p) { return p.replace(/\d/, function (d) { return String(+d + 1); }); }), { beat: b, beats: 6, vel: 40 });
  }
  // Calm marimba ostinato over the signs (52 x 4 beats = N)
  S.pattern('mallet', 'x.x.X..x', { from: 0, repeat: N / 4, pitch: ['D5', 'A4', 'F#5', 'A4', 'E5'], vel: 50 });
  // Light pulse in three stretches, kept inside the grid
  [[16, 64], [80, 128], [144, 192]].forEach(function (r) { S.drums({ shaker: 'oxoxoxox', sidestick: '....x...', kick: 'x.......' }, { from: r[0], repeat: (r[1] - r[0]) / 4, vel: 46 }); });
  // Pops as each sign builds
  [['limit', 0.3], ['limit', 1.3], ['reserve', 0.1], ['reserve', 6.2], ['residential', 0.1], ['freeway', 0.1], ['freeway', 1.4], ['derestrict', 0.1], ['plates', 0.1], ['plates', 1.3], ['compare', 0.2], ['compare', 2.0], ['compare', 3.9]].forEach(function (p) { S.fx('pop', T[p[0]] + p[1], { vel: 56 }); });
  S.fx('ding', T.residential + 2.6, { vel: 50 });
  S.fx('whoosh', T.residential + 6.4, { dur: 3.0, vel: 30 });
  S.fx('click', T.derestrict + 1.9, { vel: 46 });
  S.fx('click', T.derestrict + 2.5, { vel: 46 });
  S.fx('click', T.compare + 3.45, { vel: 44 });
  // Trap scenes: card in, strike, answer in, hook ding
  ['trapres', 'trapx'].forEach(function (id) {
    S.fx('pop', T[id] + 1.7, { vel: 48 });
    S.fx('click', T[id] + 5.9, { vel: 44 });
    S.fx('pop', T[id] + 6.7, { vel: 52 });
    S.fx('ding', T[id] + 11.0, { vel: 50 });
  });
  // Stop-time, then the hit on the end card
  S.fx('revswell', T.end, { dur: 1.4, vel: 60 });
  S.run('mallet', ['D5', 'E5', 'F#5', 'A5', 'B5', 'D6'], { t: T.end - 0.6, step: 0.1, vel: 50, cresc: 8 });
  S.chord('keys', ['D4', 'F#4', 'A4', 'D5'], { t: T.end, dur: T.END - T.end, vel: 72 });
  S.chord('pad', ['D3', 'A3', 'D4', 'F#4'], { t: T.end, dur: T.END - T.end, vel: 48 });
  S.note('bass', 'D2', { t: T.end, dur: 3, vel: 84 });
  S.drum('kick', { t: T.end, vel: 96 });
  S.drum('crash', { t: T.end, vel: 60 });
  S.fx('pop', T.end + 0.9, { vel: 48 }); S.fx('pop', T.end + 1.35, { vel: 48 }); S.fx('pop', T.end + 1.8, { vel: 48 });
  S.note('bell', 'F#5', { t: T.end + 2.8, dur: 3.5, vel: 40 });
  S.master({ gain: -6, fadeOut: 2.5 });
});

}
};