(window.K53F = window.K53F || {})[1] = {
 title: "Session 1: The test and vehicle controls",
 scenes: [{"id": "title", "name": "Session 1", "dur": 7}, {"id": "format", "name": "The test", "dur": 12}, {"id": "apply", "name": "Apply and validity", "dur": 10}, {"id": "ages", "name": "Minimum age", "dur": 11}, {"id": "diagram", "name": "Numbered diagram", "dur": 11}, {"id": "trapnum", "name": "Trap: the numbers", "dur": 13}, {"id": "look", "name": "Mirrors 1 and 3", "dur": 11}, {"id": "steer", "name": "Steer and signal", "dur": 11}, {"id": "gear", "name": "Gear: 6 and 8", "dur": 12}, {"id": "trapgear", "name": "Trap: gear lever only", "dur": 13}, {"id": "trapclutch", "name": "Trap: the clutch", "dur": 13}, {"id": "brakes", "name": "Parked or moving", "dur": 12}, {"id": "trapparked", "name": "Trap: parked car", "dur": 13}, {"id": "extras", "name": "Three more numbers", "dur": 11}, {"id": "sharp", "name": "Sharp turn", "dur": 15}, {"id": "trapsharp", "name": "Trap: sharp turn", "dur": 13}, {"id": "motoparts", "name": "Bike numbers", "dur": 14}, {"id": "moto", "name": "Motorcycle riders", "dur": 12}, {"id": "trapmstill", "name": "Trap: no parking brake", "dur": 13}, {"id": "trapmstop", "name": "Trap: sudden stop", "dur": 13}, {"id": "trapmgear", "name": "Trap: bike gears", "dur": 13}, {"id": "motosharp", "name": "Bike official answers", "dur": 14}, {"id": "end", "name": "Remember", "dur": 11}],
 css: "#stage { --ground:#F3F5F7; --main:#1F5F8B; --second:#18212B; --accent:#F5C400; --sign-red:#C8102E; --sign-blue:#0A4D94; color:var(--second); font-family:var(--sans, system-ui, sans-serif) }\n.ground { position:absolute; inset:0; background:var(--ground); background-image:linear-gradient(color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px), linear-gradient(90deg, color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px); background-size:80px 80px; background-position:-1px -1px }\n.words { position:absolute; margin:0; display:flex; flex-direction:column; gap:24px } .words > * { margin:0 }\n.line { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:96px; line-height:1.02; font-weight:700; letter-spacing:-0.01em } .sub { font-size:40px; line-height:1.3; color:color-mix(in srgb, var(--second) 78%, var(--ground)) }\n.kicker { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:30px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:var(--main); display:flex; align-items:center; gap:16px }\n.kicker::before { content:''; width:44px; height:8px; border-radius:4px; background:var(--accent) }\n.bar { height:10px; width:160px; border-radius:5px; background:var(--accent) }\n.art { position:absolute; inset:0; width:100%; height:100%; overflow:visible }\n.sr { fill:var(--sign-red) } .sb { fill:var(--sign-blue) } .sw { fill:#FFFFFF } .sk { fill:var(--second) }\n.edge { fill:none; stroke:color-mix(in srgb, var(--second) 18%, transparent); stroke-width:3 }\n.shadow { fill:rgba(0,0,0,.12) }\n.card { position:absolute; background:#FFFFFF; border:3px solid color-mix(in srgb, var(--main) 35%, var(--ground)); border-radius:28px; box-shadow:0 18px 40px -18px rgba(0,0,0,.25) }\n.tag { display:inline-flex; align-self:flex-start; padding:10px 22px; border-radius:999px; background:var(--main); color:#FFFFFF; font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:34px; font-weight:700 }\n.tag.no { background:var(--sign-red) }\n.road { fill:color-mix(in srgb, var(--second) 82%, var(--ground)) } .lane { stroke:#FFFFFF; stroke-width:8; stroke-dasharray:40 34; fill:none } .lane.solid { stroke-dasharray:none; stroke:var(--accent) }.badge-disc { fill:var(--accent); stroke:#FFFFFF; stroke-width:5 } .badge-num { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-weight:700; fill:var(--second) }\n.dash-glass { fill:color-mix(in srgb, var(--main) 14%, #FFFFFF); stroke:color-mix(in srgb, var(--second) 18%, transparent); stroke-width:3 } .dash-body { fill:color-mix(in srgb, var(--second) 22%, var(--ground)) } .dash-floor { fill:color-mix(in srgb, var(--second) 9%, var(--ground)) }\n.dash-stroke { fill:none; stroke:var(--second) } .dash-wheel { fill:none; stroke:var(--second); stroke-width:26 }\n",
 shared: function (kit) {
window.SG = {
  oct(cx, cy, r) { const p = []; for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + i * Math.PI / 4; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } return p.join(' '); },
  octWedge(cx, cy, r, i) { const a1 = Math.PI / 8 + i * Math.PI / 4, a2 = a1 + Math.PI / 4; return cx + ',' + cy + ' ' + (cx + r * Math.cos(a1)).toFixed(1) + ',' + (cy + r * Math.sin(a1)).toFixed(1) + ' ' + (cx + r * Math.cos(a2)).toFixed(1) + ',' + (cy + r * Math.sin(a2)).toFixed(1); },
  arrowUp(cx, cy, s) { return 'M' + cx + ' ' + (cy + s) + ' V' + (cy - s * 0.35) + ' M' + (cx - s * 0.55) + ' ' + (cy + s * 0.15) + ' L' + cx + ' ' + (cy - s) + ' L' + (cx + s * 0.55) + ' ' + (cy + s * 0.15); },
  wob(t, seed) { return Math.sin(t * 2.1 + seed) * 0.8 + Math.sin(t * 1.3 + seed * 2) * 0.5; }
};SG.ease = function (t, a, b) { const p = Math.max(0, Math.min(1, (t - a) / (b - a))); return 1 - Math.pow(1 - p, 3); };
SG.back = function (t, a, b) { const p = Math.max(0, Math.min(1, (t - a) / (b - a))); const c = 1.7, x = p - 1; return p <= 0 ? 0 : 1 + (c + 1) * x * x * x + c * x * x; };
SG.inR = function (st, t, a, b) { const e = SG.ease(t, a, b); st.opacity = e; st.transform = 'translateX(' + (26 * (1 - e)).toFixed(1) + 'px)'; };
SG.badge = function (n, x, y, cls, r) { r = r || 30; return '<g transform="translate(' + x + ' ' + y + ')"><g class="' + cls + '"><circle r="' + r + '" class="badge-disc"/><text y="' + (r * 0.37).toFixed(1) + '" text-anchor="middle" class="badge-num" style="font-size:' + Math.round(r * 1.1) + 'px">' + n + '</text></g></g>'; };
SG.dash = function (p) {
  const c = function (n, inner) { return '<g class="' + p + '-c' + n + '">' + inner + '</g>'; };
  const b = function (n, x, y) { return SG.badge(n, x, y, p + '-b' + n); };
  return '<g class="' + p + '-base"><path class="dash-glass" d="M60 40 H840 L800 260 H100 Z"/><rect class="dash-body" x="20" y="260" width="860" height="170" rx="40"/><rect class="dash-floor" x="80" y="430" width="740" height="290" rx="30"/></g>' +
    c(1, '<line x1="450" y1="40" x2="450" y2="64" class="dash-stroke" stroke-width="10"/><rect x="380" y="60" width="140" height="46" rx="20" class="sk"/>') +
    c(2, '<line x1="190" y1="250" x2="410" y2="150" class="dash-stroke" stroke-width="12" stroke-linecap="round"/>') +
    c(3, '<rect x="-60" y="170" width="80" height="62" rx="24" class="sk"/><rect x="880" y="170" width="80" height="62" rx="24" class="sk"/>') +
    c(5, '<line x1="770" y1="380" x2="880" y2="336" class="dash-stroke" stroke-width="16" stroke-linecap="round"/>') +
    c(4, '<circle class="' + p + '-ring dash-wheel" cx="640" cy="400" r="150" stroke-dasharray="942.5"/><path d="M490 400 H580 M700 400 H790 M640 460 V550" class="dash-stroke" stroke-width="22"/>') +
    c(11, '<circle cx="640" cy="400" r="58" style="fill:var(--main)"/>') +
    c(6, '<line x1="380" y1="480" x2="380" y2="580" class="dash-stroke" stroke-width="16" stroke-linecap="round"/><circle cx="380" cy="470" r="30" class="sk"/>') +
    c(7, '<rect x="358" y="606" width="44" height="104" rx="20" class="sk"/>') +
    c(8, '<rect x="505" y="600" width="70" height="86" rx="14" class="sk"/>') +
    c(9, '<rect x="605" y="600" width="70" height="86" rx="14" class="sk"/>') +
    c(10, '<rect x="725" y="592" width="50" height="112" rx="14" class="sk"/>') +
    b(1, 560, 70) + b(2, 150, 200) + b(3, -20, 130) + b(3, 920, 130) + b(4, 470, 280) + b(5, 900, 400) + b(6, 310, 470) + b(7, 300, 655) + b(8, 540, 556) + b(9, 640, 556) + b(10, 750, 556) + b(11, 700, 470);
};
SG.parts = function (root, p) { const c = [], b = []; for (let n = 1; n <= 11; n++) { c[n] = root.querySelector('.' + p + '-c' + n); b[n] = [...root.querySelectorAll('.' + p + '-b' + n)]; } return { c: c, b: b, base: root.querySelector('.' + p + '-base'), ring: root.querySelector('.' + p + '-ring') }; };
SG.setB = function (P, n, s) { P.b[n].forEach(function (el) { el.setAttribute('transform', 'scale(' + Math.max(0, s).toFixed(3) + ')'); }); };
SG.badges = function (P, t, pops) { for (let n = 1; n <= 11; n++) { let s = 0; pops.forEach(function (q) { if (q[0] === n) s = SG.back(t, q[1], q[1] + 0.5) * (q[2] || 1); }); SG.setB(P, n, s); } };
SG.dashShow = function (P, t, keep, d0) { const e = SG.ease(t, -0.3, 0.3), dim = SG.ease(t, d0, d0 + 0.6); P.base.style.opacity = e; for (let n = 1; n <= 11; n++) P.c[n].style.opacity = (keep.indexOf(n) >= 0 ? e : e * (1 - 0.85 * dim)).toFixed(3); };
SG.place = function (g, t, x, y, s) { const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2); g.setAttribute('transform', 'translate(' + x + ' ' + (y - t * 1.3).toFixed(1) + ') scale(' + (s * br).toFixed(4) + ')'); };
SG.trap = function (kit, id, o) {
  const ico = function (no) {
    return '<svg width="96" height="96" viewBox="-50 -50 100 100" style="flex:none;overflow:visible">' + (no ?
      '<circle r="42" class="sw"/><circle class="' + id + '-ring" r="42" pathLength="1" stroke-dasharray="1" fill="none" stroke-width="9" style="stroke:var(--sign-red)"/><path class="' + id + '-mark" d="M-20 -20 L20 20 M20 -20 L-20 20" pathLength="1" stroke-dasharray="1" fill="none" stroke-width="10" stroke-linecap="round" style="stroke:var(--sign-red)"/>' :
      '<circle class="' + id + '-ring" r="42" style="fill:var(--main)"/><path class="' + id + '-mark" d="M-20 2 L-6 16 L22 -14" pathLength="1" stroke-dasharray="1" fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" style="stroke:#FFFFFF"/>') + '</svg>';
  };
  const row = function (cls, no, label, text) {
    return '<div class="' + id + '-' + cls + '" style="display:flex;gap:30px;align-items:flex-start">' + ico(no) +
      '<div style="display:flex;flex-direction:column;gap:10px"><div class="tag' + (no ? ' no' : '') + '">' + label + '</div><p class="sub ' + id + '-' + cls + 't" style="margin:0">' + text + '</p></div></div>';
  };
  kit.stage.append(kit.h('<div class="ground"><div class="words" style="left:120px;top:60px;width:1680px;gap:30px">' +
    '<div class="' + id + '-tags" style="display:flex;gap:16px">' + (o.v ? '<div class="tag" style="background:var(--second)">' + o.v + '</div>' : '') + '<div class="tag">Trap and remember</div></div>' +
    '<h2 class="line ' + id + '-q" style="font-size:84px">' + o.q + '</h2>' +
    row('trap', true, 'Trap', o.trap) + row('ok', false, 'Remember', o.simple) +
    '<div class="' + id + '-hook" style="align-self:flex-start;margin-left:126px;padding:14px 30px;border-radius:18px;background:var(--accent);color:var(--second);transform-origin:left center;font:700 52px var(--display, var(--sans, system-ui, sans-serif))">' + o.hook + '</div>' +
    '</div></div>'));
  const q = function (s) { return kit.stage.querySelector('.' + id + s); };
  return { Fx: kit.TextFx, tags: q('-tags').style, q: q('-q'), trap: q('-trap').style, trapT: q('-trapt').style, ok: q('-ok').style, hook: q('-hook').style,
    rings: [...kit.stage.querySelectorAll('.' + id + '-ring')], marks: [...kit.stage.querySelectorAll('.' + id + '-mark')] };
};
SG.trapRender = function (S, t) {
  SG.inR(S.tags, t, 0.0, 0.8);
  S.Fx.fadeFromRight(S.q, t, 0.3, { dur: 0.9, stagger: 0.12 });
  SG.inR(S.trap, t, 2.0, 3.0);
  S.rings[0].setAttribute('stroke-dashoffset', (1 - SG.ease(t, 5.4, 6.0)).toFixed(3));
  S.marks[0].setAttribute('stroke-dashoffset', (1 - SG.ease(t, 6.0, 6.5)).toFixed(3));
  S.trapT.opacity = (1 - 0.45 * SG.ease(t, 6.2, 6.8)).toFixed(3);
  SG.inR(S.ok, t, 6.8, 7.8);
  S.rings[1].setAttribute('transform', 'scale(' + SG.back(t, 7.0, 7.6).toFixed(3) + ')');
  S.marks[1].setAttribute('stroke-dashoffset', (1 - SG.ease(t, 7.4, 8.0)).toFixed(3));
  const h = SG.ease(t, 9.0, 10.0), hs = SG.back(t, 9.0, 9.8);
  S.hook.opacity = h;
  S.hook.transform = 'translateX(' + (26 * (1 - h)).toFixed(1) + 'px) scale(' + (0.85 + 0.15 * hs).toFixed(4) + ')';
};

},
 mods: {
  "title": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('title', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="title-wheel">' +
      '<circle class="shadow" cx="14" cy="22" r="252"/>' +
      '<circle class="title-ring" r="230" fill="none" stroke-width="44" stroke-linecap="round" style="stroke:var(--second)" stroke-dasharray="1445.1"/>' +
      '<g class="title-spokes"><path d="M-208 0 H-80 M80 0 H208 M0 80 V208" fill="none" stroke-width="36" stroke-linecap="round" style="stroke:var(--second)"/></g>' +
      '<circle class="title-hub" r="86" style="fill:var(--main)"/>' +
      SG.badge(4, 196, -196, 'title-b', 62) +
      '</g></svg>' +
      '<div class="words" style="left:150px;top:260px;width:980px">' +
      '<div class="kicker title-kick">Session 1 · Learners Coach</div>' +
      '<h1 class="line" style="font-size:120px">The test and vehicle controls</h1>' +
      '<p class="sub title-sub">66 questions in three parts, then every control by its number</p>' +
      '</div></div>'));
    this.wheel = kit.stage.querySelector('.title-wheel');
    this.ring = kit.stage.querySelector('.title-ring');
    this.spokes = kit.stage.querySelector('.title-spokes');
    this.hub = kit.stage.querySelector('.title-hub');
    this.badge = kit.stage.querySelector('.title-b');
    this.kick = kit.stage.querySelector('.title-kick').style;
    this.sub = kit.stage.querySelector('.title-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.kick.opacity = eo(seg(t, -0.6, -0.1));
    TextFx.fadeFromRight(this.line, t, -0.5);
    SG.inR(this.sub, t, 0.6, 1.2);
    this.ring.setAttribute('stroke-dashoffset', (1445.1 * (1 - eio(seg(t, -0.4, 1.0)))).toFixed(1));
    const sp = eo(seg(t, 0.5, 1.1));
    this.spokes.style.opacity = sp;
    this.spokes.setAttribute('transform', 'scale(' + lerp(0.6, 1, sp).toFixed(3) + ')');
    this.hub.setAttribute('transform', 'scale(' + Math.max(0, eob(seg(t, 0.8, 1.3), 1.7)).toFixed(3) + ')');
    this.badge.setAttribute('transform', 'scale(' + Math.max(0, eob(seg(t, 1.4, 1.9), 1.8)).toFixed(3) + ')');
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.wheel.setAttribute('transform', 'translate(1450 ' + (560 - t * 1.5).toFixed(1) + ') scale(' + br.toFixed(4) + ') rotate(' + (SG.wob(t, 1) * 0.6).toFixed(2) + ')');
  },
});

},
  "format": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('format', {
  init(kit) {
    const card = function (i, n, label, pass) {
      return '<div class="card format-c" style="left:' + (150 + i * 570) + 'px;top:250px;width:480px;height:440px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;text-align:center;padding:0 30px;box-sizing:border-box">' +
        '<div style="font:700 150px var(--display, var(--sans, system-ui, sans-serif));line-height:1;color:var(--main)">' + n + '</div>' +
        '<p class="sub" style="margin:0;color:var(--second)">' + label + '</p>' +
        '<div class="tag format-t" style="align-self:center">' + pass + '</div></div>';
    };
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:0;top:80px;width:1920px;text-align:center"><h2 class="line format-h">66 questions, three parts</h2></div>' +
      card(0, '30', 'Rules of the road', 'Pass 22') + card(1, '28', 'Signs, signals and markings', 'Pass 23') + card(2, '8', 'Vehicle controls', 'Pass 6') +
      '<div class="words format-drop" style="left:1290px;top:715px;width:480px;text-align:center"><p class="sub" style="margin:0">Only 8 questions: you can drop just 2</p></div>' +
      '<div class="words format-foot" style="left:0;top:900px;width:1920px;align-items:center"><p class="kicker">Allow 60 minutes. Pass every part on its own.</p></div>' +
      '</div>'));
    this.cards = [...kit.stage.querySelectorAll('.format-c')];
    this.tags = [...kit.stage.querySelectorAll('.format-t')];
    this.h = kit.stage.querySelector('.format-h');
    this.drop = kit.stage.querySelector('.format-drop').style;
    this.foot = kit.stage.querySelector('.format-foot').style;
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, 0.0);
    for (let i = 0; i < 3; i++) {
      const a = 0.4 + i * 0.6, p = eob(seg(t, a, a + 0.6), 1.6), o = eo(seg(t, a, a + 0.4));
      this.cards[i].style.opacity = o;
      this.cards[i].style.transform = 'translateY(' + lerp(70, 0, p).toFixed(1) + 'px) translateY(' + (-t * 1.2).toFixed(1) + 'px)';
      const s = eob(seg(t, 2.4 + i * 0.35, 2.9 + i * 0.35), 1.8);
      this.tags[i].style.transform = 'scale(' + Math.max(0, s).toFixed(3) + ')';
    }
    const hl = eio(seg(t, 5.4, 6.0));
    this.cards[2].style.borderColor = 'color-mix(in srgb, var(--accent) ' + (hl * 100).toFixed(0) + '%, color-mix(in srgb, var(--main) 35%, var(--ground)))';
    this.cards[2].style.borderWidth = (3 + hl * 5).toFixed(1) + 'px';
    SG.inR(this.drop, t, 5.7, 6.3);
    const f = eo(seg(t, 3.8, 4.5));
    this.foot.opacity = f;
    this.foot.transform = 'translateY(' + lerp(16, 0, f).toFixed(1) + 'px)';
  },
});

},
  "apply": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('apply', {
  init(kit) {
    let bars = '';
    for (let i = 0; i < 5; i++) bars += '<rect class="apply-bar" x="-150" y="' + (-40 + i * 52) + '" width="' + (i % 2 ? 220 : 300) + '" height="18" rx="9" style="fill:color-mix(in srgb, var(--second) 18%, var(--ground))"/>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="apply-form">' +
      '<rect class="shadow" x="-196" y="-262" width="400" height="540" rx="26"/>' +
      '<rect class="sw" x="-210" y="-280" width="400" height="540" rx="26"/>' +
      '<rect class="apply-edge" x="-210" y="-280" width="400" height="540" rx="26" pathLength="1" stroke-dasharray="1" fill="none" stroke-width="6" style="stroke:var(--main)"/>' +
      '<rect class="apply-head" x="-210" y="-280" width="400" height="140" rx="26" style="fill:var(--main)"/>' +
      '<text class="apply-ll1" x="-10" y="-180" text-anchor="middle" style="font:700 84px var(--display, var(--sans, system-ui, sans-serif)); fill:#FFFFFF">LL1</text>' +
      bars +
      '<g transform="translate(200 250)"><g class="apply-b"><circle r="96" class="badge-disc"/><text y="14" text-anchor="middle" class="badge-num" style="font-size:72px">24</text><text y="56" text-anchor="middle" class="badge-num" style="font-size:26px">months</text></g></g>' +
      '</g></svg>' +
      '<div class="words" style="left:120px;top:220px;width:860px">' +
      '<div class="tag apply-tag">Getting your learner’s licence</div>' +
      '<h2 class="line">Apply at a DLTC</h2>' +
      '<p class="sub apply-s1">Apply at any driving licence testing centre (DLTC), on form LL1.</p>' +
      '<p class="sub apply-s2">The learner’s licence is valid for 24 months.</p>' +
      '</div></div>'));
    const q = function (s) { return kit.stage.querySelector(s); };
    this.form = q('.apply-form'); this.edge = q('.apply-edge'); this.head = q('.apply-head');
    this.ll1 = q('.apply-ll1').style; this.b = q('.apply-b');
    this.bars = [...kit.stage.querySelectorAll('.apply-bar')];
    this.tag = q('.apply-tag').style; this.s1 = q('.apply-s1').style; this.s2 = q('.apply-s2').style;
    this.line = q('.line');
  },
  render(t) {
    const s = eob(seg(t, 0.0, 1.0), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.form.setAttribute('transform', 'translate(1440 ' + (560 - t * 1.3).toFixed(1) + ') scale(' + (lerp(0.7, 1, Math.max(0, s)) * br).toFixed(4) + ')');
    this.form.style.opacity = eo(seg(t, 0.0, 0.5));
    this.edge.setAttribute('stroke-dashoffset', (1 - eio(seg(t, 0.3, 1.3))).toFixed(3));
    this.head.setAttribute('transform', 'translate(0 -280) scale(1 ' + eo(seg(t, 0.8, 1.6)).toFixed(3) + ') translate(0 280)');
    this.ll1.opacity = eo(seg(t, 1.6, 2.4));
    for (let i = 0; i < 5; i++) {
      const p = eo(seg(t, 1.4 + i * 0.25, 2.2 + i * 0.25));
      this.bars[i].style.opacity = p;
      this.bars[i].setAttribute('transform', 'translate(' + lerp(60, 0, p).toFixed(1) + ' 0)');
    }
    this.b.setAttribute('transform', 'scale(' + Math.max(0, eob(seg(t, 4.8, 5.8), 1.7)).toFixed(3) + ')');
    SG.inR(this.tag, t, 0.2, 1.0);
    TextFx.fadeFromRight(this.line, t, 0.5, { dur: 0.9 });
    SG.inR(this.s1, t, 1.8, 2.8);
    SG.inR(this.s2, t, 4.8, 5.8);
  },
});

},
  "ages": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('ages', {
  init(kit) {
    const card = function (i, n, label) {
      return '<div class="card ages-c" style="left:' + (150 + i * 570) + 'px;top:270px;width:480px;height:520px;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;gap:24px;text-align:center;padding:50px 34px 0;box-sizing:border-box">' +
        '<svg width="220" height="220" viewBox="-110 -110 220 220" style="overflow:visible"><circle class="ages-ring" r="96" pathLength="1" stroke-dasharray="1" fill="none" stroke-width="14" style="stroke:var(--accent)"/>' +
        '<text class="ages-n" y="34" text-anchor="middle" style="font:700 110px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--main)">' + n + '</text></svg>' +
        '<p class="sub ages-l" style="margin:0;color:var(--second)">' + label + '</p></div>';
    };
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:0;top:80px;width:1920px;text-align:center"><h2 class="line ages-h">Minimum age</h2></div>' +
      card(0, '16', 'Motorcycle of 125cc or less, without a sidecar') + card(1, '17', 'Light motor vehicle up to 3 500 kg') + card(2, '18', 'Heavier vehicles') +
      '</div>'));
    const all = function (s) { return [...kit.stage.querySelectorAll(s)]; };
    this.cards = all('.ages-c'); this.rings = all('.ages-ring'); this.nums = all('.ages-n'); this.labels = all('.ages-l');
    this.h = kit.stage.querySelector('.ages-h');
  },
  render(t) {
    TextFx.fadeFromRight(this.h, t, 0.0, { dur: 0.9 });
    for (let i = 0; i < 3; i++) {
      const a = 0.8 + i * 2.4, o = eo(seg(t, a, a + 0.6)), p = eob(seg(t, a, a + 1.0), 1.6);
      this.cards[i].style.opacity = o;
      this.cards[i].style.transform = 'translateY(' + lerp(70, 0, p).toFixed(1) + 'px) translateY(' + (-t * 1.2).toFixed(1) + 'px)';
      this.rings[i].setAttribute('stroke-dashoffset', (1 - eio(seg(t, a + 0.3, a + 1.2))).toFixed(3));
      const n = eob(seg(t, a + 0.4, a + 1.1), 1.8);
      this.nums[i].setAttribute('transform', 'scale(' + Math.max(0, n).toFixed(3) + ')');
      SG.inR(this.labels[i].style, t, a + 0.6, a + 1.4);
    }
  },
});

},
  "diagram": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('diagram', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="diagram-dash">' + SG.dash('diagram') + '</g></svg>' +
      '<div class="words" style="left:120px;top:220px;width:640px">' +
      '<div class="tag diagram-tag">Vehicle controls</div>' +
      '<h2 class="line">Learn the picture</h2>' +
      '<p class="sub diagram-sub">The test shows a numbered diagram. You answer with numbers, for example 6 and 8.</p>' +
      '<p class="kicker diagram-hook">Numbers, not just names</p>' +
      '</div></div>'));
    this.P = SG.parts(kit.stage, 'diagram');
    this.dash = kit.stage.querySelector('.diagram-dash');
    this.tag = kit.stage.querySelector('.diagram-tag').style;
    this.sub = kit.stage.querySelector('.diagram-sub').style;
    this.hook = kit.stage.querySelector('.diagram-hook').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const P = this.P;
    SG.place(this.dash, t, 860, 200, 0.95);
    const b = eo(seg(t, -0.2, 0.4));
    P.base.style.opacity = b;
    P.base.setAttribute('transform', 'translate(0 ' + lerp(40, 0, b).toFixed(1) + ')');
    const order = [1, 3, 2, 4, 11, 5, 6, 7, 8, 9, 10];
    order.forEach(function (n, k) { P.c[n].style.opacity = eo(seg(t, 0.3 + k * 0.12, 0.6 + k * 0.12)); });
    P.ring.setAttribute('stroke-dashoffset', (942.5 * (1 - eio(seg(t, 0.6, 1.4)))).toFixed(1));
    const pops = [];
    for (let n = 1; n <= 11; n++) {
      const pulse = (n === 6 || n === 8) ? 1 + 0.25 * Math.sin(Math.PI * seg(t, 5.6, 6.6)) : 1;
      pops.push([n, 1.8 + (n - 1) * 0.2, pulse]);
    }
    SG.badges(P, t, pops);
    SG.inR(this.tag, t, 0.4, 0.9);
    TextFx.fadeFromRight(this.line, t, 0.6);
    SG.inR(this.sub, t, 1.6, 2.2);
    SG.inR(this.hook, t, 4.6, 5.2);
  },
});

},
  "trapnum": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapnum', {
  init(kit) {
    this.S = SG.trap(kit, 'trapnum', {
      v: '',
      q: 'How do the numbered diagram questions work?',
      trap: 'Knowing the names of the controls but not which number belongs to which.',
      simple: 'The real test shows a picture with numbers only. The answers are lists of numbers, so learn the diagram for your licence code until you can name every number.',
      hook: 'Learn the picture, not just the words.'
    });
  },
  render(t) {
    SG.trapRender(this.S, t);
  },
});

},
  "look": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('look', {
  init(kit) {
    const ring = function (x, y, r) { return '<circle class="look-r" cx="' + x + '" cy="' + y + '" r="' + r + '" pathLength="1" stroke-dasharray="1" fill="none" stroke-width="10" stroke-linecap="round" style="stroke:var(--accent)"/>'; };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="look-dash">' + SG.dash('look') +
      ring(450, 83, 96) + ring(-20, 201, 66) + ring(920, 201, 66) + '</g></svg>' +
      '<div class="words" style="left:120px;top:240px;width:640px">' +
      '<div class="tag look-tag">Car licence · Mirrors</div>' +
      '<h2 class="line">Mirrors: 1 and 3</h2>' +
      '<p class="sub look-sub">1 is the rear-view mirror, 3 the exterior mirrors. Use them to check that it is safe to move.</p>' +
      '</div></div>'));
    this.P = SG.parts(kit.stage, 'look');
    this.dash = kit.stage.querySelector('.look-dash');
    this.rings = [...kit.stage.querySelectorAll('.look-r')];
    this.tag = kit.stage.querySelector('.look-tag').style;
    this.sub = kit.stage.querySelector('.look-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const P = this.P;
    SG.place(this.dash, t, 860, 200, 0.95);
    SG.dashShow(P, t, [1, 3], 0.4);
    P.ring.setAttribute('stroke-dashoffset', '0');
    SG.badges(P, t, [[1, 1.0], [3, 1.25]]);
    for (let i = 0; i < 3; i++) {
      const a = 1.2 + i * 0.2;
      this.rings[i].setAttribute('stroke-dashoffset', (1 - eio(seg(t, a, a + 0.7))).toFixed(3));
      const br = 1 + 0.04 * Math.sin(Math.PI * seg(t, 4.2 + i * 0.3, 5.4 + i * 0.3));
      const c = i === 0 ? [450, 83] : (i === 1 ? [-20, 201] : [920, 201]);
      this.rings[i].setAttribute('transform', 'translate(' + c[0] + ' ' + c[1] + ') scale(' + br.toFixed(4) + ') translate(' + (-c[0]) + ' ' + (-c[1]) + ')');
    }
    SG.inR(this.tag, t, 0.3, 0.8);
    TextFx.fadeFromRight(this.line, t, 0.5);
    SG.inR(this.sub, t, 1.6, 2.2);
  },
});

},
  "steer": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('steer', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="steer-dash">' + SG.dash('steer') + '</g></svg>' +
      '<div class="words" style="left:120px;top:220px;width:640px">' +
      '<div class="tag steer-tag">Car licence · Steer and signal</div>' +
      '<h2 class="line">4 steers, 5 signals</h2>' +
      '<p class="sub steer-s1">4 Steering wheel: turn or change direction.</p>' +
      '<p class="sub steer-s2">5 Indicator: show that you intend to turn or change direction.</p>' +
      '</div></div>'));
    this.P = SG.parts(kit.stage, 'steer');
    this.dash = kit.stage.querySelector('.steer-dash');
    this.tag = kit.stage.querySelector('.steer-tag').style;
    this.s1 = kit.stage.querySelector('.steer-s1').style;
    this.s2 = kit.stage.querySelector('.steer-s2').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const P = this.P;
    SG.place(this.dash, t, 860, 200, 0.95);
    SG.dashShow(P, t, [4, 5, 11], 0.3);
    P.ring.setAttribute('stroke-dashoffset', (942.5 * (1 - eio(seg(t, 0.2, 1.2)))).toFixed(1));
    const ang = 30 * Math.sin(Math.PI * seg(t, 2.6, 4.4)) - 30 * Math.sin(Math.PI * seg(t, 4.8, 6.6));
    const rot = 'rotate(' + ang.toFixed(2) + ' 640 400)';
    P.c[4].setAttribute('transform', rot);
    P.c[11].setAttribute('transform', rot);
    const flick = -12 * eo(seg(t, 4.2, 4.5)) * (1 - eo(seg(t, 6.6, 7.0)));
    P.c[5].setAttribute('transform', 'rotate(' + flick.toFixed(2) + ' 770 380)');
    const p4 = 1 + 0.2 * Math.sin(Math.PI * seg(t, 2.6, 3.4));
    const p5 = 1 + 0.2 * Math.sin(Math.PI * seg(t, 4.2, 5.0));
    SG.badges(P, t, [[4, 0.9, p4], [5, 1.2, p5]]);
    SG.inR(this.tag, t, 0.3, 0.8);
    TextFx.fadeFromRight(this.line, t, 0.5);
    SG.inR(this.s1, t, 1.6, 2.2);
    SG.inR(this.s2, t, 3.6, 4.2);
  },
});

},
  "gear": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('gear', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="gear-dash">' + SG.dash('gear') +
      '<path class="gear-link" d="M540 522 C540 470 420 470 342 470" pathLength="1" stroke-dasharray="1" fill="none" stroke-width="8" stroke-linecap="round" style="stroke:var(--accent)"/>' +
      '</g></svg>' +
      '<div class="words" style="left:120px;top:200px;width:640px">' +
      '<div class="tag gear-tag">Car licence · Select a gear</div>' +
      '<h2 class="line">Gear: 6 and 8</h2>' +
      '<p class="sub gear-sub">Press the clutch (8) to disengage the engine, then select the gear with the gear lever (6). Both, every time.</p>' +
      '<p class="kicker gear-hook">Clutch in, then shift</p>' +
      '</div></div>'));
    this.P = SG.parts(kit.stage, 'gear');
    this.dash = kit.stage.querySelector('.gear-dash');
    this.link = kit.stage.querySelector('.gear-link');
    this.tag = kit.stage.querySelector('.gear-tag').style;
    this.sub = kit.stage.querySelector('.gear-sub').style;
    this.hook = kit.stage.querySelector('.gear-hook').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const P = this.P;
    SG.place(this.dash, t, 860, 200, 0.95);
    SG.dashShow(P, t, [6, 8], 0.3);
    P.ring.setAttribute('stroke-dashoffset', '0');
    const press = eio(seg(t, 2.8, 3.3)) * (1 - eio(seg(t, 5.6, 6.1)));
    P.c[8].setAttribute('transform', 'translate(0 ' + (22 * press).toFixed(1) + ')');
    const gx = -36 * eio(seg(t, 3.6, 4.1)), gy = 50 * eio(seg(t, 4.3, 4.9));
    P.c[6].setAttribute('transform', 'translate(' + gx.toFixed(1) + ' ' + gy.toFixed(1) + ')');
    const p8 = 1 + 0.2 * Math.sin(Math.PI * seg(t, 2.8, 3.5));
    const p6 = 1 + 0.2 * Math.sin(Math.PI * seg(t, 4.0, 4.7));
    SG.badges(P, t, [[8, 1.0, p8], [6, 1.3, p6]]);
    this.link.setAttribute('stroke-dashoffset', (1 - eio(seg(t, 1.8, 2.4))).toFixed(3));
    SG.inR(this.tag, t, 0.3, 0.8);
    TextFx.fadeFromRight(this.line, t, 0.5);
    SG.inR(this.sub, t, 1.6, 2.2);
    SG.inR(this.hook, t, 6.2, 6.8);
  },
});

},
  "trapgear": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapgear', {
  init(kit) {
    this.S = SG.trap(kit, 'trapgear', {
      v: 'Car licence',
      q: 'Which controls do you use to select a gear?',
      trap: 'Picking just the gear lever. The answer list usually includes a ‘gear lever only’ option to catch you.',
      simple: 'You always need the clutch to disengage the engine, then the gear lever to pick the gear. Both, every time.',
      hook: 'Clutch in, then shift.'
    });
  },
  render(t) {
    SG.trapRender(this.S, t);
  },
});

},
  "trapclutch": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapclutch', {
  init(kit) {
    this.S = SG.trap(kit, 'trapclutch', {
      v: 'Car licence',
      q: 'What does the clutch actually do?',
      trap: 'Thinking the clutch slows the car or picks the gear by itself.',
      simple: 'Pressing the clutch disconnects the engine from the wheels so you can change gear smoothly. The gear lever does the choosing.',
      hook: 'Clutch cuts the link, lever picks the gear.'
    });
  },
  render(t) {
    SG.trapRender(this.S, t);
  },
});

},
  "brakes": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('brakes', {
  init(kit) {
    const plate = function (cls) { return '<circle class="shadow" cx="12" cy="18" r="200"/><circle class="sw" r="200"/><circle class="' + cls + '" r="186" pathLength="1" stroke-dasharray="1" fill="none" stroke-width="10" style="stroke:var(--main)"/>'; };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="brakes-a">' + plate('brakes-ra') +
      '<rect x="-120" y="50" width="240" height="56" rx="22" class="sk"/>' +
      '<g class="brakes-lever"><rect x="-96" y="-4" width="230" height="52" rx="26" style="fill:var(--main)"/><circle cx="108" cy="22" r="14" fill="#FFFFFF"/></g>' +
      SG.badge(7, 120, -120, 'brakes-b7', 46) + '</g>' +
      '<g class="brakes-b">' + plate('brakes-rb') +
      '<line x1="0" y1="-150" x2="0" y2="0" stroke-width="30" stroke-linecap="round" style="stroke:var(--second)"/>' +
      '<g class="brakes-pedal"><rect x="-90" y="-20" width="180" height="110" rx="24" class="sk"/></g>' +
      SG.badge(9, 130, -120, 'brakes-b9', 46) + '</g>' +
      '<line class="brakes-mid" x1="960" y1="270" x2="960" y2="740" pathLength="1" stroke-dasharray="1" stroke-width="4" stroke-linecap="round" style="stroke:var(--main);opacity:.25"/>' +
      '</svg>' +
      '<div class="words" style="left:0;top:50px;width:1920px;text-align:center"><div class="tag" style="align-self:center">Car licence</div><h2 class="line brakes-h">Parked or moving?</h2></div>' +
      '<div class="words brakes-la" style="left:210px;top:740px;width:700px;align-items:center;text-align:center">' +
      '<div class="tag" style="align-self:center">7 Parking brake</div><p class="sub">Keeps the parked car stationary</p></div>' +
      '<div class="words brakes-lb" style="left:1010px;top:740px;width:700px;align-items:center;text-align:center">' +
      '<div class="tag" style="align-self:center">9 Foot brake</div><p class="sub">Slows or stops you while driving, even suddenly</p></div>' +
      '<div class="words brakes-foot" style="left:0;top:980px;width:1920px;align-items:center"><p class="kicker">Parked? Parking brake.</p></div>' +
      '</div>'));
    const q = function (s) { return kit.stage.querySelector(s); };
    this.a = q('.brakes-a'); this.b = q('.brakes-b');
    this.ra = q('.brakes-ra'); this.rb = q('.brakes-rb');
    this.lever = q('.brakes-lever'); this.pedal = q('.brakes-pedal');
    this.b7 = q('.brakes-b7'); this.b9 = q('.brakes-b9');
    this.mid = q('.brakes-mid'); this.h = q('.brakes-h');
    this.la = q('.brakes-la').style; this.lb = q('.brakes-lb').style; this.foot = q('.brakes-foot').style;
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, 0.0);
    this.mid.setAttribute('stroke-dashoffset', (1 - eio(seg(t, 0.2, 1.0))).toFixed(3));
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    const sa = eob(seg(t, 0.2, 0.8), 1.6), sb = eob(seg(t, 1.6, 2.2), 1.6);
    this.a.setAttribute('transform', 'translate(560 ' + (500 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, sa) * br).toFixed(4) + ')');
    this.b.setAttribute('transform', 'translate(1360 ' + (500 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, sb) * br).toFixed(4) + ')');
    this.ra.setAttribute('stroke-dashoffset', (1 - eo(seg(t, 0.5, 1.1))).toFixed(3));
    this.rb.setAttribute('stroke-dashoffset', (1 - eo(seg(t, 1.9, 2.5))).toFixed(3));
    this.lever.setAttribute('transform', 'rotate(' + (-26 * eio(seg(t, 1.2, 1.8))).toFixed(2) + ' -70 22)');
    const press = eio(seg(t, 3.2, 3.7)) * (1 - eio(seg(t, 4.8, 5.3)));
    this.pedal.setAttribute('transform', 'translate(0 ' + (24 * press).toFixed(1) + ')');
    this.b7.setAttribute('transform', 'scale(' + Math.max(0, eob(seg(t, 1.5, 2.0), 1.8)).toFixed(3) + ')');
    this.b9.setAttribute('transform', 'scale(' + Math.max(0, eob(seg(t, 2.8, 3.3), 1.8)).toFixed(3) + ')');
    const la = eo(seg(t, 3.8, 4.4)), lb = eo(seg(t, 4.5, 5.1)), f = eo(seg(t, 5.8, 6.5));
    this.la.opacity = la; this.la.transform = 'translateY(' + lerp(24, 0, la) + 'px)';
    this.lb.opacity = lb; this.lb.transform = 'translateY(' + lerp(24, 0, lb) + 'px)';
    this.foot.opacity = f; this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});

},
  "trapparked": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapparked', {
  init(kit) {
    this.S = SG.trap(kit, 'trapparked', {
      v: 'Car licence',
      q: 'Which controls do you use to keep a parked car stationary?',
      trap: 'Choosing the foot brake because it also stops the car.',
      simple: 'The foot brake slows and stops you while driving. Once parked, the parking brake holds the car still.',
      hook: 'Parked? Parking brake.'
    });
  },
  render(t) {
    SG.trapRender(this.S, t);
  },
});

},
  "extras": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('extras', {
  init(kit) {
    const X = [390, 960, 1530];
    let cards = '', words = '';
    const info = [['10 Accelerator', 'Increase or decrease speed'], ['2 Windscreen wiper', 'Know its number too'], ['11 Hooter', 'Give a warning signal']];
    for (let i = 0; i < 3; i++) {
      cards += '<div class="card extras-c" style="left:' + (X[i] - 240) + 'px;top:230px;width:480px;height:600px"></div>';
      words += '<div class="words extras-w" style="left:' + (X[i] - 220) + 'px;top:600px;width:440px;align-items:center;text-align:center;gap:12px"><div class="tag" style="align-self:center">' + info[i][0] + '</div><p class="sub">' + info[i][1] + '</p></div>';
    }
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:0;top:30px;width:1920px;text-align:center;gap:14px"><div class="tag" style="align-self:center">Car licence</div><h2 class="line extras-h">Three more numbers</h2></div>' + cards +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="extras-i"><path class="extras-arc" d="M-120 40 A120 120 0 0 1 120 40" pathLength="1" stroke-dasharray="1" fill="none" stroke-width="22" stroke-linecap="round" style="stroke:var(--main)"/><g class="extras-needle"><line x1="0" y1="40" x2="0" y2="-70" stroke-width="12" stroke-linecap="round" style="stroke:var(--second)"/></g><circle cy="40" r="18" class="sk"/>' + SG.badge(10, 140, -90, 'extras-b', 40) + '</g>' +
      '<g class="extras-i"><path d="M-150 60 A150 150 0 0 1 150 60" fill="none" stroke-width="6" class="edge"/><g class="extras-blade"><line x1="0" y1="60" x2="0" y2="-80" stroke-width="14" stroke-linecap="round" style="stroke:var(--second)"/></g><circle cy="60" r="16" class="sk"/>' + SG.badge(2, 140, -90, 'extras-b', 40) + '</g>' +
      '<g class="extras-i"><circle cx="-40" r="64" style="fill:var(--main)"/><path class="extras-snd" d="M44 -40 A60 60 0 0 1 44 40" pathLength="1" stroke-dasharray="1" fill="none" stroke-width="12" stroke-linecap="round" style="stroke:var(--accent)"/><path class="extras-snd" d="M78 -70 A100 100 0 0 1 78 70" pathLength="1" stroke-dasharray="1" fill="none" stroke-width="12" stroke-linecap="round" style="stroke:var(--accent)"/>' + SG.badge(11, 140, -90, 'extras-b', 40) + '</g>' +
      '</svg>' + words + '</div>'));
    const all = function (s) { return [...kit.stage.querySelectorAll(s)]; };
    this.X = X;
    this.cards = all('.extras-c'); this.icons = all('.extras-i'); this.badges = all('.extras-b'); this.words = all('.extras-w');
    this.snd = all('.extras-snd');
    this.arc = kit.stage.querySelector('.extras-arc'); this.needle = kit.stage.querySelector('.extras-needle'); this.blade = kit.stage.querySelector('.extras-blade');
    this.h = kit.stage.querySelector('.extras-h');
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, 0.0);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    for (let i = 0; i < 3; i++) {
      const a = 0.2 + i * 0.6, o = eo(seg(t, a, a + 0.4)), p = eob(seg(t, a, a + 0.6), 1.6);
      this.cards[i].style.opacity = o;
      this.cards[i].style.transform = 'translateY(' + lerp(70, 0, p).toFixed(1) + 'px)';
      const s = eob(seg(t, a + 0.2, a + 0.8), 1.6);
      this.icons[i].setAttribute('transform', 'translate(' + this.X[i] + ' ' + (430 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
      this.badges[i].setAttribute('transform', 'scale(' + Math.max(0, eob(seg(t, a + 0.4, a + 0.9), 1.8)).toFixed(3) + ')');
      const w = eo(seg(t, 2.6 + i * 0.5, 3.2 + i * 0.5));
      this.words[i].style.opacity = w;
      this.words[i].style.transform = 'translateX(' + lerp(26, 0, w).toFixed(1) + 'px)';
    }
    this.arc.setAttribute('stroke-dashoffset', (1 - eio(seg(t, 0.5, 1.2))).toFixed(3));
    const nd = -70 + 140 * eio(seg(t, 4.2, 5.4)) - 50 * eio(seg(t, 6.0, 7.0));
    this.needle.setAttribute('transform', 'rotate(' + nd.toFixed(2) + ' 0 40)');
    const sw = -55 * Math.cos(Math.PI * Math.min(1, Math.max(0, (t - 1.2) / 2.4)) * 2);
    this.blade.setAttribute('transform', 'rotate(' + sw.toFixed(2) + ' 0 60)');
    for (let k = 0; k < 2; k++) this.snd[k].setAttribute('stroke-dashoffset', (1 - eio(seg(t, 2.0 + k * 0.3, 2.5 + k * 0.3))).toFixed(3));
  },
});

},
  "sharp": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('sharp', {
  init(kit) {
    const N = [1, 3, 4, 6, 8, 9, 10];
    const L = ['Mirror', 'Mirrors', 'Steering', 'Gear lever', 'Clutch', 'Foot brake', 'Accelerator'];
    let row = '';
    for (let i = 0; i < 7; i++) {
      row += '<g transform="translate(' + (170 + i * 178) + ' 640)">' + SG.badge(N[i], 0, 0, 'sharp-b', 60) +
        '<text class="sharp-l" y="108" text-anchor="middle" style="font:600 30px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)">' + L[i] + '</text></g>';
    }
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="sharp-row">' + row +
      '<g transform="translate(1600 640)">' + SG.badge(5, 0, 0, 'sharp-b5', 60) +
      '<circle class="sharp-ring" r="80" pathLength="1" stroke-dasharray="1" fill="none" stroke-width="16" style="stroke:var(--sign-red)"/>' +
      '<line class="sharp-slash" x1="-56" y1="-56" x2="56" y2="56" pathLength="1" stroke-dasharray="1" stroke-width="16" stroke-linecap="round" style="stroke:var(--sign-red)"/>' +
      '<text class="sharp-no" y="128" text-anchor="middle" style="font:700 30px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--sign-red)">No indicator</text></g>' +
      '</g></svg>' +
      '<div class="words" style="left:120px;top:90px;width:1600px">' +
      '<div class="tag sharp-tag">Car licence · Official answer</div>' +
      '<h2 class="line">Sharp turn: 1, 3, 4, 6, 8, 9 and 10</h2>' +
      '<p class="sub sharp-sub">Mirrors, steering wheel, gear lever, clutch, foot brake and accelerator. The indicator (5) is not in the list.</p>' +
      '<p class="sub sharp-alt" style="color:var(--main)">One official table also gives 1, 4, 6, 8, 9 and 10.</p></div>' +
      '<div class="words sharp-foot" style="left:0;top:930px;width:1920px;align-items:center"><p class="kicker">Mirrors, steer, gear, clutch, brake, gas. No indicator.</p></div>' +
      '</div>'));
    const all = function (s) { return [...kit.stage.querySelectorAll(s)]; };
    this.b = all('.sharp-b'); this.l = all('.sharp-l');
    this.b5 = kit.stage.querySelector('.sharp-b5');
    this.ring = kit.stage.querySelector('.sharp-ring'); this.slash = kit.stage.querySelector('.sharp-slash');
    this.no = kit.stage.querySelector('.sharp-no').style;
    this.row = kit.stage.querySelector('.sharp-row');
    this.tag = kit.stage.querySelector('.sharp-tag').style;
    this.sub = kit.stage.querySelector('.sharp-sub').style;
    this.foot = kit.stage.querySelector('.sharp-foot').style;
    this.alt = kit.stage.querySelector('.sharp-alt').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    SG.inR(this.tag, t, 0.0, 0.5);
    TextFx.fadeFromRight(this.line, t, 0.2);
    SG.inR(this.sub, t, 1.2, 1.8);
    this.row.setAttribute('transform', 'translate(0 ' + (-t * 1.2).toFixed(1) + ')');
    for (let i = 0; i < 7; i++) {
      const a = 1.6 + i * 0.3;
      const br = 1 + 0.012 * Math.sin((t + i * 0.4) * 2 * Math.PI / 3.2);
      this.b[i].setAttribute('transform', 'scale(' + (Math.max(0, eob(seg(t, a, a + 0.5), 1.8)) * br).toFixed(4) + ')');
      this.l[i].style.opacity = eo(seg(t, a + 0.2, a + 0.6));
    }
    this.b5.setAttribute('transform', 'scale(' + Math.max(0, eob(seg(t, 4.4, 4.9), 1.8)).toFixed(3) + ')');
    this.ring.setAttribute('stroke-dashoffset', (1 - eo(seg(t, 4.8, 5.3))).toFixed(3));
    this.slash.setAttribute('stroke-dashoffset', (1 - eo(seg(t, 5.3, 5.6))).toFixed(3));
    this.no.opacity = eo(seg(t, 5.6, 6.1));
    const f = eo(seg(t, 6.4, 7.1));
    this.foot.opacity = f;
    this.foot.transform = 'translateY(' + lerp(16, 0, f).toFixed(1) + 'px)';
    SG.inR(this.alt, t, 8.0, 8.7);
  },
});

},
  "trapsharp": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapsharp', {
  init(kit) {
    this.S = SG.trap(kit, 'trapsharp', {
      v: 'Car licence',
      q: 'Which controls do you use to negotiate a sharp turn?',
      trap: 'Choosing a short answer like ‘steering wheel and accelerator’, or adding the indicator.',
      simple: 'The official answer is 1, 3, 4, 6, 8, 9 and 10: mirrors (1, 3), steering wheel (4), gear lever (6), clutch (8), foot brake (9) and accelerator (10). Note that the indicator (5) is not in the official list.',
      hook: 'Mirrors, steer, gear, clutch, brake, gas. No indicator.'
    });
  },
  render(t) {
    SG.trapRender(this.S, t);
  },
});

},
  "motoparts": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('motoparts', {
  init(kit) {
    const ink = 'style="stroke:var(--second)"';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="motoparts-art">' +
      '<ellipse class="motoparts-tank" cx="1400" cy="640" rx="170" ry="90" style="fill:color-mix(in srgb, var(--main) 70%, var(--ground))"/>' +
      '<g class="motoparts-faint" style="opacity:.35"><line x1="1100" y1="410" x2="1240" y2="450" stroke-width="14" stroke-linecap="round" ' + ink + '/><line x1="1700" y1="410" x2="1560" y2="450" stroke-width="14" stroke-linecap="round" ' + ink + '/>' +
      '<circle cx="1180" cy="840" r="20" class="sk"/><line x1="1180" y1="840" x2="1060" y2="800" stroke-width="16" stroke-linecap="round" ' + ink + '/><circle cx="1620" cy="840" r="20" class="sk"/><line x1="1620" y1="840" x2="1740" y2="810" stroke-width="16" stroke-linecap="round" ' + ink + '/></g>' +
      '<g class="motoparts-mir"><line x1="1110" y1="370" x2="1060" y2="262" stroke-width="10" ' + ink + '/><ellipse cx="1050" cy="236" rx="52" ry="32" class="sk"/><line x1="1690" y1="370" x2="1740" y2="262" stroke-width="10" ' + ink + '/><ellipse cx="1750" cy="236" rx="52" ry="32" class="sk"/></g>' +
      '<path class="motoparts-bar" d="M1060 380 Q1400 330 1740 380" pathLength="1" stroke-dasharray="1" fill="none" stroke-width="26" stroke-linecap="round" ' + ink + '/>' +
      '<rect x="1030" y="360" width="90" height="44" rx="20" class="sk"/><rect x="1680" y="360" width="90" height="44" rx="20" class="sk"/>' +
      '<rect x="1128" y="398" width="44" height="30" rx="8" style="fill:var(--main)"/>' +
      '<circle cx="1400" cy="440" r="60" style="fill:var(--main)"/>' +
      SG.badge(3, 990, 170, 'motoparts-b3', 38) + SG.badge(3, 1810, 170, 'motoparts-b3', 38) + SG.badge(6, 1180, 300, 'motoparts-b6', 38) +
      SG.badge(8, 1400, 290, 'motoparts-b8', 38) + SG.badge(5, 1810, 450, 'motoparts-b5', 38) + SG.badge(9, 1620, 640, 'motoparts-b9', 38) +
      '</g></svg>' +
      '<div class="words" style="left:110px;top:90px;width:820px">' +
      '<div class="tag motoparts-tag">Motorcycle licence</div>' +
      '<h2 class="line">Bike numbers</h2>' +
      '<p class="sub motoparts-r">3 Mirrors: check that it is safe to move. 6 Indicator switch: show you intend to turn.</p>' +
      '<p class="sub motoparts-r">8 Handlebars: turn or change direction.</p>' +
      '<p class="sub motoparts-r">5 Throttle (accelerator): increase speed.</p>' +
      '<p class="sub motoparts-r">9 is the fuel tank. The official diagram numbers only 1 to 9.</p>' +
      '</div></div>'));
    const q = function (s) { return kit.stage.querySelector(s); };
    const all = function (s) { return [...kit.stage.querySelectorAll(s)]; };
    this.art = q('.motoparts-art'); this.bar = q('.motoparts-bar'); this.mir = q('.motoparts-mir'); this.tank = q('.motoparts-tank');
    this.rows = all('.motoparts-r');
    this.B = { 3: all('.motoparts-b3'), 6: all('.motoparts-b6'), 8: all('.motoparts-b8'), 5: all('.motoparts-b5'), 9: all('.motoparts-b9') };
    this.tag = q('.motoparts-tag').style; this.line = q('.line');
  },
  render(t) {
    this.art.setAttribute('transform', 'translate(0 ' + (-t * 1.3).toFixed(1) + ')');
    this.art.style.opacity = eo(seg(t, -0.3, 0.4));
    this.bar.setAttribute('stroke-dashoffset', (1 - eio(seg(t, 0.0, 1.0))).toFixed(3));
    const m = eo(seg(t, 0.6, 1.4));
    this.mir.style.opacity = m;
    this.mir.setAttribute('transform', 'translate(0 ' + lerp(40, 0, m).toFixed(1) + ')');
    const k = eob(seg(t, 0.9, 1.8), 1.6);
    this.tank.setAttribute('transform', 'translate(1400 640) scale(' + Math.max(0, k).toFixed(3) + ') translate(-1400 -640)');
    const at = { 3: 2.0, 6: 2.4, 8: 4.4, 5: 6.8, 9: 9.2 };
    const B = this.B;
    Object.keys(B).forEach(function (n) {
      const a = at[n];
      const s = Math.max(0, eob(seg(t, a, a + 0.8), 1.8)) * (1 + 0.2 * Math.sin(Math.PI * seg(t, a + 0.8, a + 1.8)));
      B[n].forEach(function (el) { el.setAttribute('transform', 'scale(' + s.toFixed(4) + ')'); });
    });
    SG.inR(this.tag, t, 0.2, 1.0);
    TextFx.fadeFromRight(this.line, t, 0.5, { dur: 0.9 });
    const rt = [2.0, 4.4, 6.8, 9.2];
    for (let r = 0; r < 4; r++) SG.inR(this.rows[r].style, t, rt[r], rt[r] + 1.0);
  },
});

},
  "moto": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('moto', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="moto-art">' +
      '<rect class="moto-eng" x="1280" y="690" width="240" height="170" rx="40" style="fill:color-mix(in srgb, var(--second) 22%, var(--ground))"/>' +
      '<path class="moto-bar" d="M1060 380 Q1400 330 1740 380" pathLength="1" stroke-dasharray="1" fill="none" stroke-width="26" stroke-linecap="round" style="stroke:var(--second)"/>' +
      '<g class="moto-p"><rect x="1030" y="360" width="90" height="44" rx="20" class="sk"/><rect x="1680" y="360" width="90" height="44" rx="20" class="sk"/><circle cx="1400" cy="430" r="70" style="fill:var(--main)"/></g>' +
      '<g class="moto-p"><line x1="1100" y1="410" x2="1240" y2="450" stroke-width="14" stroke-linecap="round" style="stroke:var(--second)"/><line x1="1700" y1="410" x2="1560" y2="450" stroke-width="14" stroke-linecap="round" style="stroke:var(--second)"/></g>' +
      '<g class="moto-p"><circle cx="1180" cy="800" r="20" class="sk"/><line x1="1180" y1="800" x2="1060" y2="760" stroke-width="16" stroke-linecap="round" style="stroke:var(--second)"/><circle cx="1620" cy="800" r="20" class="sk"/><line x1="1620" y1="800" x2="1740" y2="770" stroke-width="16" stroke-linecap="round" style="stroke:var(--second)"/><rect x="1720" y="745" width="60" height="34" rx="12" class="sk"/></g>' +
      SG.badge(2, 1170, 500, 'moto-b', 40) + SG.badge(4, 1630, 500, 'moto-b', 40) + SG.badge(1, 1040, 690, 'moto-b', 40) + SG.badge(7, 1780, 690, 'moto-b', 40) +
      '</g></svg>' +
      '<div class="words" style="left:110px;top:130px;width:840px">' +
      '<div class="tag moto-tag">Motorcycle licence</div>' +
      '<h2 class="line">On a motorcycle</h2>' +
      '<p class="sub moto-r">No parking brake: keep it stationary with the rear brake pedal, 7.</p>' +
      '<p class="sub moto-r">Sudden stop: both brakes, 4 and 7.</p>' +
      '<p class="sub moto-r">Select a gear: clutch lever 2 and foot gear lever 1.</p>' +
      '</div></div>'));
    const all = function (s) { return [...kit.stage.querySelectorAll(s)]; };
    this.art = kit.stage.querySelector('.moto-art');
    this.bar = kit.stage.querySelector('.moto-bar');
    this.eng = kit.stage.querySelector('.moto-eng').style;
    this.parts = all('.moto-p'); this.b = all('.moto-b'); this.rows = all('.moto-r');
    this.tag = kit.stage.querySelector('.moto-tag').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.art.setAttribute('transform', 'translate(0 ' + (-t * 1.3).toFixed(1) + ')');
    this.eng.opacity = eo(seg(t, -0.3, 0.3));
    this.bar.setAttribute('stroke-dashoffset', (1 - eio(seg(t, 0.0, 0.8))).toFixed(3));
    for (let i = 0; i < 3; i++) {
      const p = eo(seg(t, 0.5 + i * 0.25, 0.9 + i * 0.25));
      this.parts[i].style.opacity = p;
      this.parts[i].setAttribute('transform', 'translate(0 ' + lerp(30, 0, p).toFixed(1) + ')');
    }
    const ph = [[3.0, [7]], [4.8, [4, 7]], [6.6, [2, 1]]];
    const ids = [2, 4, 1, 7];
    for (let k = 0; k < 4; k++) {
      let pulse = 1;
      ph.forEach(function (q) { if (q[1].indexOf(ids[k]) >= 0) pulse += 0.22 * Math.sin(Math.PI * seg(t, q[0], q[0] + 1.0)); });
      const a = 1.2 + k * 0.2;
      const br = 1 + 0.012 * Math.sin((t + k * 0.5) * 2 * Math.PI / 3.2);
      this.b[k].setAttribute('transform', 'scale(' + (Math.max(0, eob(seg(t, a, a + 0.5), 1.8)) * pulse * br).toFixed(4) + ')');
    }
    SG.inR(this.tag, t, 0.2, 0.7);
    TextFx.fadeFromRight(this.line, t, 0.4);
    for (let r = 0; r < 3; r++) SG.inR(this.rows[r].style, t, ph[r][0], ph[r][0] + 0.6);
  },
});

},
  "trapmstill": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapmstill', {
  init(kit) {
    this.S = SG.trap(kit, 'trapmstill', {
      v: 'Motorcycle licence',
      q: 'On a motorcycle, which control keeps it stationary?',
      trap: 'Looking for a parking brake. Motorcycles do not have one.',
      simple: 'Use the rear brake pedal (7) to hold the motorcycle still.',
      hook: 'No handbrake on a bike: foot on the rear brake.'
    });
  },
  render(t) {
    SG.trapRender(this.S, t);
  },
});

},
  "trapmstop": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapmstop', {
  init(kit) {
    this.S = SG.trap(kit, 'trapmstop', {
      v: 'Motorcycle licence',
      q: 'On a motorcycle, which controls stop it suddenly?',
      trap: 'Choosing only the front brake or only the rear brake.',
      simple: 'An emergency stop uses both the front brake lever (4) and the rear brake pedal (7).',
      hook: 'Sudden stop = both brakes: 4 and 7.'
    });
  },
  render(t) {
    SG.trapRender(this.S, t);
  },
});

},
  "trapmgear": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapmgear', {
  init(kit) {
    this.S = SG.trap(kit, 'trapmgear', {
      v: 'Motorcycle licence',
      q: 'Which numbers select a gear on a motorcycle?',
      trap: 'Choosing just the foot gear lever.',
      simple: 'Pull the clutch lever (2) and move the gear lever (1). The answer is 2 and 1.',
      hook: 'Hand clutch, foot gear.'
    });
  },
  render(t) {
    SG.trapRender(this.S, t);
  },
});

},
  "motosharp": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('motosharp', {
  init(kit) {
    const R = [['Sharp turn', [1, 2, 3, 4, 5, 7, 8], 400], ['Just before stopping', [2, 4, 7], 620], ['To control speed', [4, 5, 7], 840]];
    let svg = '';
    R.forEach(function (r, i) {
      svg += '<g class="motosharp-row"><text x="140" y="' + (r[2] + 16) + '" style="font:700 50px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)">' + r[0] + '</text>' +
        '<line class="motosharp-ln" x1="140" y1="' + (r[2] + 76) + '" x2="1780" y2="' + (r[2] + 76) + '" pathLength="1" stroke-dasharray="1" stroke-width="4" style="stroke:var(--main);opacity:.25"/>';
      r[1].forEach(function (n, j) { svg += SG.badge(n, 780 + j * 160, r[2], 'motosharp-b' + i, 54); });
      svg += '</g>';
    });
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:0;top:60px;width:1920px;text-align:center;gap:14px"><div class="tag motosharp-tag" style="align-self:center">Motorcycle licence</div><h2 class="line motosharp-h">Official answers on a bike</h2></div>' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="motosharp-all">' + svg + '</g></svg>' +
      '</div>'));
    const all = function (s) { return [...kit.stage.querySelectorAll(s)]; };
    this.rows = all('.motosharp-row'); this.lns = all('.motosharp-ln');
    this.b = [0, 1, 2].map(function (i) { return all('.motosharp-b' + i); });
    this.all = kit.stage.querySelector('.motosharp-all');
    this.tag = kit.stage.querySelector('.motosharp-tag').style;
    this.h = kit.stage.querySelector('.motosharp-h');
  },
  render(t) {
    SG.inR(this.tag, t, 0.0, 0.8);
    TextFx.fadeFromRight(this.h, t, 0.2, { dur: 0.9 });
    this.all.setAttribute('transform', 'translate(0 ' + (-t * 1.2).toFixed(1) + ')');
    const at = [1.2, 4.6, 8.0];
    for (let i = 0; i < 3; i++) {
      const a = at[i];
      const e = eo(seg(t, a, a + 0.9));
      this.rows[i].style.opacity = e;
      this.rows[i].setAttribute('transform', 'translate(' + (26 * (1 - e)).toFixed(1) + ' 0)');
      this.lns[i].setAttribute('stroke-dashoffset', (1 - eio(seg(t, a, a + 1.2))).toFixed(3));
      for (let j = 0; j < this.b[i].length; j++) {
        const st = a + 0.3 + j * 0.2;
        const br = 1 + 0.012 * Math.sin((t + j * 0.4) * 2 * Math.PI / 3.2);
        this.b[i][j].setAttribute('transform', 'scale(' + (Math.max(0, eob(seg(t, st, st + 0.6), 1.8)) * br).toFixed(4) + ')');
      }
    }
  },
});

},
  "end": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('end', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="end-s"><circle class="shadow" cx="10" cy="14" r="110"/>' + SG.badge(6, 0, 0, 'end-x', 110) + '</g>' +
      '<g class="end-s"><circle class="shadow" cx="10" cy="14" r="110"/>' + SG.badge(8, 0, 0, 'end-x', 110) + '</g>' +
      '<g class="end-s"><circle class="shadow" cx="10" cy="14" r="110"/>' + SG.badge(7, 0, 0, 'end-x', 110) + '</g>' +
      '</svg>' +
      '<div class="words" style="left:180px;top:300px;width:900px">' +
      '<div class="kicker end-k">Session 1 · Learners Coach</div>' +
      '<div class="bar end-bar" style="transform-origin:left center"></div>' +
      '<h2 class="line end-h">Learn the numbers, not just the names.</h2>' +
      '<p class="sub end-sub">Gear: 6 and 8. Parked: 7. Next: the mini test.</p></div>' +
      '</div>'));
    this.s = [...kit.stage.querySelectorAll('.end-s')];
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
    const pos = [[1400, 300], [1640, 560], [1360, 790]];
    for (let i = 0; i < 3; i++) {
      const st = 0.6 + i * 0.35;
      const s = eob(seg(t, st, st + 0.6), 1.6);
      const br = 1 + 0.012 * Math.sin((tt + i * 0.9) * 2 * Math.PI / 3.2);
      const y = pos[i][1] + lerp(-40, 0, eo(seg(t, st, st + 0.6))) - tt * 1.2;
      this.s[i].setAttribute('transform', 'translate(' + pos[i][0] + ' ' + y.toFixed(1) + ') rotate(' + lerp(-14 + i * 10, 0, eo(seg(t, st, st + 0.8))).toFixed(2) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    }
  },
});

},
 },
 score: function (kit) {
kit.score(function (S, T) {
  const BEATS = 408, BPM = BEATS * 60 / (T.end - T.format);
  S.tempo(BPM, { t0: T.format });
  S.program('pad', 'pad', { rev: 0.6, gain: -4 });
  S.program('mallet', 'marimba', { rev: 0.3, pan: -0.15 });
  S.program('keys', 'ep', { rev: 0.35, pan: 0.15 });
  S.program('bass', 'bass', { gain: -3 });
  S.program('bell', 'glock', { rev: 0.5, gain: -6 });
  // Title: near silent, a pad and one bell note
  S.chord('pad', ['D3', 'A3', 'F#4'], { t: 0, dur: T.format + 0.4, vel: 30 });
  S.note('bell', 'A5', { t: 1.3, dur: 2, vel: 40 });
  S.fx('pop', 1.8, { vel: 40 });
  // Progression, one chord per 8 beats, from the second scene to the end card
  const prog = [['D3', 'A3', 'F#4'], ['B2', 'F#3', 'D4'], ['G2', 'D3', 'B3'], ['A2', 'E3', 'C#4']];
  const roots = ['D2', 'B1', 'G1', 'A1'];
  for (let i = 0; i < BEATS / 8; i++) {
    const c = prog[i % 4];
    S.chord('pad', c, { beat: i * 8, beats: 8, vel: 34 });
    if (i >= 2) { S.note('bass', roots[i % 4], { beat: i * 8, beats: 3, vel: 62 }); S.note('bass', roots[i % 4], { beat: i * 8 + 4, beats: 2, vel: 52 }); }
    if (i >= 4 && i % 2 === 0) S.chord('keys', c.map(function (p) { return p.replace(/\d/, function (d) { return String(+d + 1); }); }), { beat: i * 8, beats: 6, vel: 40 });
  }
  // Calm marimba ostinato across the whole film (4 beats per repeat)
  S.pattern('mallet', 'x.x.X..x', { from: 0, repeat: BEATS / 4, pitch: ['D5', 'A4', 'F#5', 'A4', 'E5'], vel: 48 });
  // Light pulse in blocks; it drops to pad and mallet under the trap scenes
  [['apply', 'trapnum'], ['look', 'trapgear'], ['brakes', 'trapparked'], ['extras', 'trapsharp'], ['motoparts', 'trapmstill'], ['motosharp', 'end']].forEach(function (k) {
    const a = Math.ceil(S.toBeat(T[k[0]]) / 4) * 4, b = Math.floor(S.toBeat(T[k[1]]) / 4) * 4;
    if (b > a) S.drums({ shaker: 'oxoxoxox', sidestick: '....x...', kick: 'x.......' }, { from: a, repeat: (b - a) / 4, vel: 44 });
  });
  // Pops as cards, controls and badges build (slowed scenes run at 1.3 times their old timing)
  [['format', 0.52], ['format', 1.3], ['format', 2.08], ['apply', 4.8], ['ages', 1.2], ['ages', 3.6], ['ages', 6.0],
   ['diagram', 2.34], ['diagram', 3.64], ['diagram', 4.94], ['look', 1.3], ['look', 1.63], ['steer', 1.17], ['steer', 1.56],
   ['gear', 1.3], ['gear', 1.69], ['brakes', 0.26], ['brakes', 1.95], ['brakes', 3.64], ['extras', 0.78], ['extras', 1.56], ['extras', 2.34],
   ['sharp', 2.08], ['sharp', 2.86], ['sharp', 3.64], ['sharp', 4.42], ['sharp', 5.72], ['motoparts', 2.0], ['motoparts', 4.4], ['motoparts', 6.8], ['motoparts', 9.2],
   ['moto', 1.56], ['moto', 2.08], ['motosharp', 1.5], ['motosharp', 4.9], ['motosharp', 8.3]].forEach(function (p) { S.fx('pop', T[p[0]] + p[1], { vel: 54 }); });
  // Trap scenes: a soft thud as the trap is crossed out, a ding on the answer, a pop on the hook
  ['trapnum', 'trapgear', 'trapclutch', 'trapparked', 'trapsharp', 'trapmstill', 'trapmstop', 'trapmgear'].forEach(function (id) {
    S.fx('thud', T[id] + 6.0, { vel: 36 });
    S.fx('ding', T[id] + 7.4, { vel: 42 });
    S.fx('pop', T[id] + 9.0, { vel: 50 });
  });
  S.fx('whoosh', T.steer + 3.38, { dur: 2.6, vel: 28 });
  S.fx('click', T.gear + 3.64, { vel: 44 });
  S.fx('click', T.gear + 5.59, { vel: 44 });
  S.fx('click', T.brakes + 4.16, { vel: 44 });
  // Stop-time, then the hit on the end card
  S.fx('revswell', T.end, { dur: 1.4, vel: 60 });
  S.run('mallet', ['D5', 'E5', 'F#5', 'A5', 'B5', 'D6'], { t: T.end - 0.6, step: 0.1, vel: 50, cresc: 8 });
  S.chord('keys', ['D4', 'F#4', 'A4', 'D5'], { t: T.end, dur: T.END - T.end, vel: 72 });
  S.chord('pad', ['D3', 'A3', 'D4', 'F#4'], { t: T.end, dur: T.END - T.end, vel: 48 });
  S.note('bass', 'D2', { t: T.end, dur: 3, vel: 84 });
  S.drum('kick', { t: T.end, vel: 96 });
  S.drum('crash', { t: T.end, vel: 60 });
  S.fx('pop', T.end + 0.78, { vel: 48 }); S.fx('pop', T.end + 1.24, { vel: 48 }); S.fx('pop', T.end + 1.69, { vel: 48 });
  S.note('bell', 'F#5', { t: T.end + 2.8, dur: 3, vel: 40 });
  S.master({ gain: -6, fadeOut: 2.5 });
});

}
};