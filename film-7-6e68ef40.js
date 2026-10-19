(window.K53F = window.K53F || {})[7] = {
 title: "Session 7: Road surface markings",
 scenes: [{"id": "title", "name": "Road surface markings", "dur": 7}, {"id": "stopyield", "name": "Stop or yield line", "dur": 13}, {"id": "crossing", "name": "Pedestrian crossings", "dur": 11}, {"id": "overtake", "name": "No-overtaking line", "dur": 13}, {"id": "trapovertake", "name": "Trap: crossing a solid line", "dur": 12}, {"id": "sides", "name": "Your side, your line", "dur": 12}, {"id": "trapsides", "name": "Trap: who may cross", "dur": 12}, {"id": "double", "name": "Double line", "dur": 10}, {"id": "edges", "name": "Edge lines", "dur": 13}, {"id": "lanes", "name": "Lane or dividing line", "dur": 12}, {"id": "island", "name": "Painted island", "dur": 10}, {"id": "kerb", "name": "Red or yellow line", "dur": 16}, {"id": "trapkerb", "name": "Trap: red or yellow", "dur": 12}, {"id": "box", "name": "Yellow box junction", "dur": 13}, {"id": "trapbox", "name": "Trap: waiting in the box", "dur": 12}, {"id": "circle", "name": "Mini-circle", "dur": 11}, {"id": "buslane", "name": "Special lanes", "dur": 10}, {"id": "bays", "name": "Bay letters", "dur": 13}, {"id": "trapbays", "name": "Trap: D or CD", "dur": 12}, {"id": "end", "name": "Remember", "dur": 11}],
 css: "#stage { --ground:#F3F5F7; --main:#1F5F8B; --second:#18212B; --accent:#F5C400; --sign-red:#C8102E; --sign-blue:#0A4D94; color:var(--second); font-family:var(--sans, system-ui, sans-serif) }\n.ground { position:absolute; inset:0; background:var(--ground); background-image:linear-gradient(color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px), linear-gradient(90deg, color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px); background-size:80px 80px; background-position:-1px -1px }\n.words { position:absolute; margin:0; display:flex; flex-direction:column; gap:24px } .words > * { margin:0 }\n.line { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:96px; line-height:1.02; font-weight:700; letter-spacing:-0.01em } .sub { font-size:40px; line-height:1.3; color:color-mix(in srgb, var(--second) 78%, var(--ground)) }\n.kicker { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:30px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:var(--main); display:flex; align-items:center; gap:16px }\n.kicker::before { content:''; width:44px; height:8px; border-radius:4px; background:var(--accent) }\n.bar { height:10px; width:160px; border-radius:5px; background:var(--accent) }\n.art { position:absolute; inset:0; width:100%; height:100%; overflow:visible }\n.sr { fill:var(--sign-red) } .sb { fill:var(--sign-blue) } .sw { fill:#FFFFFF } .sk { fill:var(--second) }\n.edge { fill:none; stroke:color-mix(in srgb, var(--second) 18%, transparent); stroke-width:3 }\n.shadow { fill:rgba(0,0,0,.12) }\n.card { position:absolute; background:#FFFFFF; border:3px solid color-mix(in srgb, var(--main) 35%, var(--ground)); border-radius:28px; box-shadow:0 18px 40px -18px rgba(0,0,0,.25) }\n.tag { display:inline-flex; align-self:flex-start; padding:10px 22px; border-radius:999px; background:var(--main); color:#FFFFFF; font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:34px; font-weight:700 }\n.tag.no { background:var(--sign-red) }\n.road { fill:color-mix(in srgb, var(--second) 82%, var(--ground)) } .lane { stroke:#FFFFFF; stroke-width:8; stroke-dasharray:40 34; fill:none } .lane.solid { stroke-dasharray:none; stroke:var(--accent) }\n.pv { fill:color-mix(in srgb, var(--second) 22%, var(--ground)) } .paint { fill:#FFFFFF } .ypaint { fill:var(--accent) } .rpaint { fill:var(--sign-red) }\n.wl { fill:none; stroke:#FFFFFF; stroke-width:12 } .yl { fill:none; stroke:var(--accent); stroke-width:12 } .rl { fill:none; stroke:var(--sign-red); stroke-width:12 }\n.car { fill:var(--main) } .car2 { fill:var(--second) } .car3 { fill:var(--accent) } .glass { fill:#FFFFFF; opacity:.85 }\n.tag.y { background:var(--accent); color:var(--second) }\n.lbl { font:700 32px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--main) }",
 shared: function (kit) {
window.SG = {
  oct(cx, cy, r) { const p = []; for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + i * Math.PI / 4; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } return p.join(' '); },
  octWedge(cx, cy, r, i) { const a1 = Math.PI / 8 + i * Math.PI / 4, a2 = a1 + Math.PI / 4; return cx + ',' + cy + ' ' + (cx + r * Math.cos(a1)).toFixed(1) + ',' + (cy + r * Math.sin(a1)).toFixed(1) + ' ' + (cx + r * Math.cos(a2)).toFixed(1) + ',' + (cy + r * Math.sin(a2)).toFixed(1); },
  arrowUp(cx, cy, s) { return 'M' + cx + ' ' + (cy + s) + ' V' + (cy - s * 0.35) + ' M' + (cx - s * 0.55) + ' ' + (cy + s * 0.15) + ' L' + cx + ' ' + (cy - s) + ' L' + (cx + s * 0.55) + ' ' + (cy + s * 0.15); },
  wob(t, seed) { return Math.sin(t * 2.1 + seed) * 0.8 + Math.sin(t * 1.3 + seed * 2) * 0.5; },
  p(t, a, b) { return Math.min(1, Math.max(0, (t - a) / (b - a))); },
  car(cls) { return '<rect x="-60" y="-32" width="120" height="64" rx="18" class="' + (cls || 'car') + '"/><rect x="8" y="-24" width="30" height="48" rx="7" class="glass"/>'; },
  dashes(x1, y1, x2, y2, len, gap, th, cls) { let m = ''; const v = x1 === x2, L = v ? y2 - y1 : x2 - x1; for (let d = 0; d + len <= L + 0.5; d += len + gap) { m += v ? '<rect class="' + cls + '" x="' + (x1 - th / 2) + '" y="' + (y1 + d) + '" width="' + th + '" height="' + len + '" data-l="' + len + '" data-v="1"/>' : '<rect class="' + cls + '" x="' + (x1 + d) + '" y="' + (y1 - th / 2) + '" width="' + len + '" height="' + th + '" data-l="' + len + '"/>'; } return m; },
  reveal(els, t, t0, step, dur) { for (let i = 0; i < els.length; i++) { const q = SG.p(t, t0 + i * step, t0 + i * step + dur), e = 1 - Math.pow(1 - q, 3), l = (+els[i].getAttribute('data-l') * e).toFixed(1); els[i].setAttribute(els[i].getAttribute('data-v') ? 'height' : 'width', l); } },
  trapInit(kit, id, d) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:120px;top:80px;width:1680px"><div class="kicker ' + id + '-k">Trap and remember</div><h2 class="line ' + id + '-q" style="font-size:80px">' + d.q + '</h2></div>' +
      '<div class="card ' + id + '-a" style="left:120px;top:350px;width:1680px;box-sizing:border-box;padding:26px 36px;display:flex;gap:28px;align-items:center"><div class="tag no" style="flex:none">Trap</div>' +
      '<p class="sub ' + id + '-at" style="margin:0;position:relative">' + d.trap + '<span class="' + id + '-x" style="position:absolute;left:0;right:0;top:50%;height:6px;margin-top:-3px;border-radius:3px;background:var(--sign-red);transform-origin:left center"></span></p></div>' +
      '<div class="card ' + id + '-b" style="left:120px;top:540px;width:1680px;box-sizing:border-box;padding:26px 36px;display:flex;gap:28px;align-items:center"><div class="tag" style="flex:none">Remember</div><p class="sub" style="margin:0;color:var(--second)">' + d.simple + '</p></div>' +
      '<div class="tag y ' + id + '-h" style="position:absolute;left:120px;top:800px;max-width:1680px;box-sizing:border-box;font-size:48px;line-height:1.25;padding:18px 36px;border-radius:40px">' + d.hook + '</div>' +
      '</div>'));
    const q = function (c) { return kit.stage.querySelector('.' + id + '-' + c); };
    return { kit: kit, k: q('k').style, q: q('q'), a: q('a').style, at: q('at').style, x: q('x').style, b: q('b').style, h: q('h').style };
  },
  trapRender(o, t) {
    const k = o.kit, seg = k.seg, eo = k.eo, eio = k.eio, lerp = k.lerp;
    o.k.opacity = eo(seg(t, -0.6, 0.2));
    k.TextFx.fadeFromRight(o.q, t, 0.0, { stagger: 0.12, dur: 0.9 });
    const a = eo(seg(t, 1.8, 2.8));
    o.a.opacity = a; o.a.transform = 'translateX(' + lerp(30, 0, a) + 'px)';
    o.x.transform = 'scaleX(' + eio(seg(t, 4.0, 4.8)).toFixed(4) + ')';
    o.at.opacity = (1 - 0.45 * eo(seg(t, 4.0, 4.8))).toFixed(3);
    const b = eo(seg(t, 5.0, 6.0));
    o.b.opacity = b; o.b.transform = 'translateX(' + lerp(30, 0, b) + 'px)';
    const h = Math.max(0, Math.min(1, k.eob(seg(t, 7.8, 8.8), 1.6)));
    o.h.opacity = eo(seg(t, 7.8, 8.6)); o.h.transform = 'scale(' + lerp(0.92, 1, h).toFixed(4) + ')';
    o.h.transformOrigin = 'left center';
  }
};

},
 mods: {
  "title": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('title', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="title-map">' +
      '<rect class="pv" x="1130" y="-40" width="70" height="1160"/><rect class="pv" x="1640" y="-40" width="70" height="1160"/>' +
      '<rect class="road" x="1200" y="-40" width="440" height="1160"/>' +
      '<line class="rl title-red" x1="1216" y1="-40" x2="1216" y2="1120" stroke-dasharray="1160"/>' +
      '<line class="yl title-yel" x1="1624" y1="-40" x2="1624" y2="1120" stroke-dasharray="1160"/>' +
      SG.dashes(1420, -20, 1420, 1100, 70, 50, 12, 'paint title-d') +
      '<rect class="paint title-stop" x="1226" y="300" width="190" height="22"/>' +
      '<g class="title-car">' + SG.car('car') + '</g>' +
      '</g></svg>' +
      '<div class="words" style="left:150px;top:290px;width:900px">' +
      '<div class="kicker title-kick">Session 7 · Learners Coach</div>' +
      '<h1 class="line title-h" style="font-size:132px">Road surface markings</h1>' +
      '<p class="sub title-sub">Lines on the road are signs painted flat.</p>' +
      '</div></div>'));
    this.map = kit.stage.querySelector('.title-map');
    this.red = kit.stage.querySelector('.title-red');
    this.yel = kit.stage.querySelector('.title-yel');
    this.d = [...kit.stage.querySelectorAll('.title-d')];
    this.stop = kit.stage.querySelector('.title-stop');
    this.car = kit.stage.querySelector('.title-car');
    this.kick = kit.stage.querySelector('.title-kick').style;
    this.sub = kit.stage.querySelector('.title-sub').style;
    this.h = kit.stage.querySelector('.title-h');
  },
  render(t) {
    t = t / 1.3;
    this.kick.opacity = eo(seg(t, -0.6, -0.1));
    TextFx.fadeFromRight(this.h, t, -0.5);
    const s = eo(seg(t, 0.6, 1.2));
    this.sub.opacity = s;
    this.sub.transform = 'translateX(' + lerp(26, 0, s) + 'px)';
    this.map.setAttribute('transform', 'translate(0 ' + (-t * 1.4).toFixed(1) + ')');
    this.map.style.opacity = eo(seg(t, -0.4, 0.3));
    this.red.setAttribute('stroke-dashoffset', (1160 * (1 - eio(seg(t, 0.2, 1.6)))).toFixed(1));
    this.yel.setAttribute('stroke-dashoffset', (1160 * (1 - eio(seg(t, 0.4, 1.8)))).toFixed(1));
    SG.reveal(this.d, t, -0.2, 0.08, 0.3);
    const b = eob(seg(t, 1.6, 2.1), 1.7);
    this.stop.setAttribute('width', (190 * Math.max(0, b)).toFixed(1));
    const y = lerp(1180, 386, eo(seg(t, 2.0, 3.6)));
    const dip = Math.sin(Math.PI * seg(t, 3.5, 3.9)) * 4;
    this.car.setAttribute('transform', 'translate(1320 ' + (y - dip).toFixed(1) + ') rotate(-90)');
  },
});

},
  "stopyield": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('stopyield', {
  init(kit) {
    const road = function (cx, n) { return '<clipPath id="stopyield-c' + n + '"><rect x="' + (cx - 150) + '" y="220" width="300" height="540"/></clipPath><rect class="road stopyield-r' + n + '" x="' + (cx - 150) + '" y="220" width="300" height="540" rx="6"/>'; };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' + road(560, 1) + road(1360, 2) +
      '<rect class="paint stopyield-bar" x="410" y="380" width="300" height="24"/>' +
      SG.dashes(1218, 392, 1510, 392, 34, 18, 24, 'paint stopyield-d') +
      '<polygon class="paint stopyield-tri" points="1300,470 1420,470 1360,580"/>' +
      '<g clip-path="url(#stopyield-c1)"><g class="stopyield-car1">' + SG.car('car') + '</g></g>' +
      '<g clip-path="url(#stopyield-c2)"><g class="stopyield-car2">' + SG.car('car') + '</g></g>' +
      '</svg>' +
      '<div class="words" style="left:0;top:70px;width:1920px;text-align:center"><h2 class="line stopyield-h">Stop line or yield line?</h2></div>' +
      '<div class="words stopyield-la" style="left:260px;top:790px;width:600px;text-align:center;align-items:center">' +
      '<div class="tag no">Solid stop line</div><p class="sub">Stop completely before it.</p></div>' +
      '<div class="words stopyield-lb" style="left:1060px;top:790px;width:600px;text-align:center;align-items:center">' +
      '<div class="tag">Broken, with a triangle</div><p class="sub">Slow down and give way.</p></div>' +
      '<div class="words stopyield-foot" style="left:0;top:980px;width:1920px;align-items:center"><p class="kicker">Yield lines are also used at railway crossings</p></div>' +
      '</div>'));
    this.r1 = kit.stage.querySelector('.stopyield-r1').style;
    this.r2 = kit.stage.querySelector('.stopyield-r2').style;
    this.bar = kit.stage.querySelector('.stopyield-bar');
    this.d = [...kit.stage.querySelectorAll('.stopyield-d')];
    this.tri = kit.stage.querySelector('.stopyield-tri');
    this.c1 = kit.stage.querySelector('.stopyield-car1');
    this.c2 = kit.stage.querySelector('.stopyield-car2');
    this.h = kit.stage.querySelector('.stopyield-h');
    this.la = kit.stage.querySelector('.stopyield-la').style;
    this.lb = kit.stage.querySelector('.stopyield-lb').style;
    this.foot = kit.stage.querySelector('.stopyield-foot').style;
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, 0.0);
    this.r1.opacity = eo(seg(t, -0.3, 0.4));
    this.r2.opacity = eo(seg(t, 0.2, 0.9));
    const b = eob(seg(t, 0.6, 1.1), 1.7);
    this.bar.setAttribute('width', (300 * Math.max(0, b)).toFixed(1));
    SG.reveal(this.d, t, 1.3, 0.07, 0.25);
    const tr = eob(seg(t, 1.9, 2.4), 1.8), br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.tri.setAttribute('transform', 'translate(1360 510) scale(' + (Math.max(0, tr) * br).toFixed(4) + ') translate(-1360 -510)');
    const la = eo(seg(t, 2.6, 3.2)), lb = eo(seg(t, 3.0, 3.6));
    this.la.opacity = la; this.la.transform = 'translateX(' + lerp(26, 0, la) + 'px)';
    this.lb.opacity = lb; this.lb.transform = 'translateX(' + lerp(26, 0, lb) + 'px)';
    const y1 = lerp(860, 474, eo(seg(t, 3.6, 5.4)));
    const dip = Math.sin(Math.PI * seg(t, 5.3, 5.7)) * 4;
    this.c1.setAttribute('transform', 'translate(520 ' + (y1 - dip).toFixed(1) + ') rotate(-90)');
    let y2 = lerp(860, 520, eo(seg(t, 4.0, 6.2)));
    y2 -= lerp(0, 520, ei(seg(t, 6.9, 8.6)));
    this.c2.setAttribute('transform', 'translate(1320 ' + y2.toFixed(1) + ') rotate(-90)');
    const f = eo(seg(t, 7.2, 7.8));
    this.foot.opacity = f; this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});

},
  "crossing": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('crossing', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="crossing-map">' +
      '<rect class="pv" x="1020" y="-40" width="60" height="1160"/><rect class="pv" x="1700" y="-40" width="60" height="1160"/>' +
      '<rect class="road" x="1080" y="-40" width="620" height="1160"/>' +
      SG.dashes(1390, -20, 1390, 380, 70, 50, 10, 'paint crossing-d') + SG.dashes(1390, 620, 1390, 1100, 70, 50, 10, 'paint crossing-d') +
      SG.dashes(1092, 500, 1690, 500, 40, 36, 150, 'paint crossing-z') +
      '<g class="crossing-car">' + SG.car('car') + '</g>' +
      '<g class="crossing-man"><circle cy="-34" r="16" class="sk"/><rect x="-18" y="-16" width="36" height="48" rx="16" class="sk"/></g>' +
      '</g></svg>' +
      '<div class="words" style="left:120px;top:150px;width:860px">' +
      '<div class="tag crossing-tag">Pedestrian and block (zebra) crossings</div>' +
      '<h2 class="line crossing-h">Give way to people on foot</h2>' +
      '<p class="sub crossing-sub">Give way to pedestrians on the crossing, or about to enter it on your side, from either side.</p>' +
      '</div></div>'));
    const q = function (c) { return kit.stage.querySelector(c); };
    this.map = q('.crossing-map'); this.d = [...kit.stage.querySelectorAll('.crossing-d')]; this.z = [...kit.stage.querySelectorAll('.crossing-z')];
    this.car = q('.crossing-car'); this.man = q('.crossing-man');
    this.tag = q('.crossing-tag').style; this.h = q('.crossing-h'); this.sub = q('.crossing-sub').style;
  },
  render(t) {
    this.map.style.opacity = eo(seg(t, -0.4, 0.4));
    this.map.setAttribute('transform', 'translate(0 ' + (-t * 1.3).toFixed(1) + ')');
    SG.reveal(this.d, t, -0.2, 0.08, 0.4);
    SG.reveal(this.z, t, 0.4, 0.1, 0.4);
    const g = eo(seg(t, 1.2, 2.2));
    this.tag.opacity = g; this.tag.transform = 'translateX(' + lerp(26, 0, g) + 'px)';
    TextFx.fadeFromRight(this.h, t, 1.6, { stagger: 0.12, dur: 0.9 });
    const s = eo(seg(t, 2.8, 3.8));
    this.sub.opacity = s; this.sub.transform = 'translateX(' + lerp(26, 0, s) + 'px)';
    const y = lerp(1180, 660, eo(seg(t, 2.4, 4.4))) - lerp(0, 900, ei(seg(t, 9.0, 11.0)));
    const dip = Math.sin(Math.PI * seg(t, 4.3, 4.7)) * 4;
    this.car.setAttribute('transform', 'translate(1235 ' + (y - dip).toFixed(1) + ') rotate(-90)');
    const w = seg(t, 3.6, 8.8);
    const bob = Math.abs(Math.sin(t * Math.PI * 2.2)) * 4 * (w > 0 && w < 1 ? 1 : 0);
    this.man.setAttribute('transform', 'translate(' + lerp(1050, 1730, eio(w)).toFixed(1) + ' ' + (500 - bob).toFixed(1) + ')');
    this.man.style.opacity = eo(seg(t, 3.0, 3.8));
  },
});

},
  "overtake": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('overtake', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="overtake-map">' +
      '<rect class="pv" x="0" y="600" width="1920" height="40"/><rect class="pv" x="0" y="1000" width="1920" height="40"/>' +
      '<rect class="road" x="0" y="640" width="1920" height="360"/>' +
      '<line class="wl overtake-solid" x1="0" y1="806" x2="1920" y2="806" stroke-dasharray="1920"/>' +
      SG.dashes(10, 836, 1910, 836, 80, 50, 12, 'paint overtake-d') +
      '<g class="overtake-stat"><g transform="translate(1260 730)">' + SG.car('car2') + '</g>' +
      '<text class="lbl" x="1260" y="680" text-anchor="middle">Not moving</text></g>' +
      '<g class="overtake-car">' + SG.car('car') + '</g>' +
      '</g></svg>' +
      '<div class="words" style="left:120px;top:100px;width:1640px">' +
      '<div class="tag no overtake-tag">Solid line on your side</div>' +
      '<h2 class="line overtake-h">No-overtaking line</h2>' +
      '<p class="sub overtake-sub">Do not let any part of the vehicle cross it.</p>' +
      '<p class="sub overtake-sub2">Except to reach property on the other side, or to get past something that is not moving.</p>' +
      '</div></div>'));
    this.map = kit.stage.querySelector('.overtake-map');
    this.solid = kit.stage.querySelector('.overtake-solid');
    this.d = [...kit.stage.querySelectorAll('.overtake-d')];
    this.stat = kit.stage.querySelector('.overtake-stat').style;
    this.car = kit.stage.querySelector('.overtake-car');
    this.tag = kit.stage.querySelector('.overtake-tag').style;
    this.h = kit.stage.querySelector('.overtake-h');
    this.sub = kit.stage.querySelector('.overtake-sub').style;
    this.sub2 = kit.stage.querySelector('.overtake-sub2').style;
  },
  render(t) {
    t = t / 1.3;
    this.map.style.opacity = eo(seg(t, -0.3, 0.4));
    this.map.setAttribute('transform', 'translate(0 ' + (-t * 1.3).toFixed(1) + ')');
    this.solid.setAttribute('stroke-dashoffset', (1920 * (1 - eio(seg(t, 0.3, 2.0)))).toFixed(1));
    SG.reveal(this.d, t, 0.5, 0.08, 0.3);
    this.tag.opacity = eo(seg(t, 0.8, 1.2));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.8, 1.3))) + 'px)';
    TextFx.fadeFromRight(this.h, t, 1.0);
    const s = eo(seg(t, 1.8, 2.4));
    this.sub.opacity = s; this.sub.transform = 'translateX(' + lerp(26, 0, s) + 'px)';
    const st = eob(seg(t, 2.2, 2.7), 1.7);
    this.stat.opacity = Math.min(1, Math.max(0, st) * 1.5);
    this.stat.transform = 'translateY(' + lerp(-30, 0, Math.min(1, Math.max(0, st))) + 'px)';
    let x = lerp(-150, 1040, eo(seg(t, 2.6, 4.4)));
    const pass = seg(t, 5.4, 7.6);
    x += lerp(0, 440, eio(pass)) + lerp(0, 900, ei(seg(t, 7.6, 9.4)));
    const y = 730 + Math.sin(Math.PI * eio(pass)) * 175;
    const ang = Math.cos(Math.PI * eio(pass)) * Math.sin(Math.PI * pass) * 22;
    this.car.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ') rotate(' + ang.toFixed(2) + ')');
    const s2 = eo(seg(t, 4.4, 5.0));
    this.sub2.opacity = s2; this.sub2.transform = 'translateX(' + lerp(26, 0, s2) + 'px)';
  },
});

},
  "trapovertake": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapovertake', {
  init(kit) {
    this.o = SG.trapInit(kit, 'trapovertake', {
      q: 'When may you cross a solid no-overtaking line on your side?',
      trap: 'Saying ‘never’ (that is the double line) or ‘to overtake a slow vehicle’.',
      simple: 'Only to reach property on the other side or to get past something that is not moving.',
      hook: 'Property or parked obstacle, never to pass a moving car.'
    });
  },
  render(t) {
    SG.trapRender(this.o, t);
  },
});

},
  "sides": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('sides', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="sides-map">' +
      '<rect class="pv" x="0" y="600" width="1920" height="40"/><rect class="pv" x="0" y="1000" width="1920" height="40"/>' +
      '<rect class="road" x="0" y="640" width="1920" height="360"/>' +
      '<line class="wl sides-solid" x1="0" y1="806" x2="1920" y2="806" stroke-dasharray="1920"/>' +
      SG.dashes(10, 836, 1910, 836, 80, 50, 12, 'paint sides-d') +
      '<g class="sides-slow">' + SG.car('car2') + '</g>' +
      '<g class="sides-fast">' + SG.car('car3') + '<text class="lbl" x="0" y="-52" text-anchor="middle" transform="rotate(180)">Them</text></g>' +
      '<g class="sides-you">' + SG.car('car') + '<text class="lbl" x="0" y="-52" text-anchor="middle">You</text></g>' +
      '<g class="sides-no"><circle r="30" class="sr"/><rect x="-18" y="-6" width="36" height="12" rx="3" class="sw"/></g>' +
      '<g class="sides-ok"><circle r="30" style="fill:var(--accent)"/><path d="M-14 0 L-4 11 L15 -11" fill="none" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--second)"/></g>' +
      '</g></svg>' +
      '<div class="words" style="left:120px;top:100px;width:1600px">' +
      '<div class="tag sides-tag">Two lines, two rules</div>' +
      '<h2 class="line sides-h">Your side, your line.</h2>' +
      '<p class="sub sides-sub">Solid on your side: you may not cross. Broken on their side: they may cross when it is safe.</p>' +
      '</div></div>'));
    this.map = kit.stage.querySelector('.sides-map');
    this.solid = kit.stage.querySelector('.sides-solid');
    this.d = [...kit.stage.querySelectorAll('.sides-d')];
    this.slow = kit.stage.querySelector('.sides-slow');
    this.fast = kit.stage.querySelector('.sides-fast');
    this.you = kit.stage.querySelector('.sides-you');
    this.no = kit.stage.querySelector('.sides-no');
    this.ok = kit.stage.querySelector('.sides-ok');
    this.tag = kit.stage.querySelector('.sides-tag').style;
    this.h = kit.stage.querySelector('.sides-h');
    this.sub = kit.stage.querySelector('.sides-sub').style;
  },
  render(t) {
    t = t / 1.3;
    this.map.style.opacity = eo(seg(t, -0.3, 0.3));
    this.map.setAttribute('transform', 'translate(0 ' + (-t * 1.3).toFixed(1) + ')');
    this.solid.setAttribute('stroke-dashoffset', (1920 * (1 - eio(seg(t, 0.2, 1.6)))).toFixed(1));
    SG.reveal(this.d, t, 0.4, 0.07, 0.3);
    this.tag.opacity = eo(seg(t, 0.6, 1.0));
    TextFx.fadeFromRight(this.h, t, 0.8);
    const s = eo(seg(t, 1.6, 2.2));
    this.sub.opacity = s; this.sub.transform = 'translateX(' + lerp(26, 0, s) + 'px)';
    const yx = 140 + 60 * t;
    this.you.setAttribute('transform', 'translate(' + yx.toFixed(1) + ' 730)');
    this.slow.setAttribute('transform', 'translate(' + (1750 - 40 * t).toFixed(1) + ' 912) rotate(180)');
    const p = seg(t, 3.8, 6.2), e = eio(p);
    const fy = 912 - Math.sin(Math.PI * e) * 182;
    const fa = Math.cos(Math.PI * e) * Math.sin(Math.PI * p) * 20;
    const fx = 2400 - 170 * t;
    this.fast.setAttribute('transform', 'translate(' + fx.toFixed(1) + ' ' + fy.toFixed(1) + ') rotate(' + (180 + fa).toFixed(2) + ')');
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    const n = Math.max(0, eob(seg(t, 2.6, 3.0), 1.8)), k = Math.max(0, eob(seg(t, 6.3, 6.7), 1.8));
    this.no.setAttribute('transform', 'translate(' + (yx + 100).toFixed(1) + ' 680) scale(' + (n * br).toFixed(4) + ')');
    this.ok.setAttribute('transform', 'translate(' + (fx - 100).toFixed(1) + ' 970) scale(' + (k * br).toFixed(4) + ')');
  },
});

},
  "trapsides": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapsides', {
  init(kit) {
    this.o = SG.trapInit(kit, 'trapsides', {
      q: 'Solid line on your side, broken line on the other side. Who may cross?',
      trap: 'Thinking both drivers follow the same rule.',
      simple: 'Each driver obeys the line on their own side. You (solid) may not cross. The other driver (broken) may cross when it is safe.',
      hook: 'Your side, your line.'
    });
  },
  render(t) {
    SG.trapRender(this.o, t);
  },
});

},
  "double": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('double', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="double-map">' +
      '<rect class="pv" x="0" y="600" width="1920" height="40"/><rect class="pv" x="0" y="1000" width="1920" height="40"/>' +
      '<rect class="road" x="0" y="640" width="1920" height="360"/>' +
      '<line class="wl double-l1" x1="0" y1="806" x2="1920" y2="806" stroke-dasharray="1920"/>' +
      '<line class="wl double-l2" x1="1920" y1="836" x2="0" y2="836" stroke-dasharray="1920"/>' +
      '<path class="double-ghost" d="M1000 730 C 1140 730, 1200 912, 1360 912" fill="none" stroke-width="10" stroke-linecap="round" pathLength="1" stroke-dasharray="1" style="stroke:var(--main);opacity:.55"/>' +
      '<g class="double-x"><circle r="44" class="sr"/><path d="M-18 -18 L18 18 M18 -18 L-18 18" fill="none" stroke-width="10" stroke-linecap="round" style="stroke:#FFFFFF"/></g>' +
      '<g class="double-car">' + SG.car('car') + '</g>' +
      '</g></svg>' +
      '<div class="words" style="left:120px;top:100px;width:1600px">' +
      '<div class="tag no double-tag">Never cross</div>' +
      '<h2 class="line double-h">No-crossing double line</h2>' +
      '<p class="sub double-sub">Two solid lines: never cross them. The same goes for a channelising line between lanes going the same way.</p>' +
      '</div></div>'));
    this.map = kit.stage.querySelector('.double-map');
    this.l1 = kit.stage.querySelector('.double-l1');
    this.l2 = kit.stage.querySelector('.double-l2');
    this.ghost = kit.stage.querySelector('.double-ghost');
    this.x = kit.stage.querySelector('.double-x');
    this.car = kit.stage.querySelector('.double-car');
    this.tag = kit.stage.querySelector('.double-tag').style;
    this.h = kit.stage.querySelector('.double-h');
    this.sub = kit.stage.querySelector('.double-sub').style;
  },
  render(t) {
    t = t / 1.3;
    this.map.style.opacity = eo(seg(t, -0.3, 0.3));
    this.map.setAttribute('transform', 'translate(0 ' + (-t * 1.4).toFixed(1) + ')');
    this.l1.setAttribute('stroke-dashoffset', (1920 * (1 - eio(seg(t, 0.2, 1.5)))).toFixed(1));
    this.l2.setAttribute('stroke-dashoffset', (1920 * (1 - eio(seg(t, 0.4, 1.7)))).toFixed(1));
    this.tag.opacity = eo(seg(t, 0.6, 1.0));
    TextFx.fadeFromRight(this.h, t, 0.8);
    const s = eo(seg(t, 1.6, 2.2));
    this.sub.opacity = s; this.sub.transform = 'translateX(' + lerp(26, 0, s) + 'px)';
    const cx = lerp(-150, 880, eo(seg(t, 1.8, 3.4))) + lerp(0, 1300, ei(seg(t, 5.0, 6.8)));
    this.car.setAttribute('transform', 'translate(' + cx.toFixed(1) + ' 730)');
    const g = eio(seg(t, 3.4, 4.3));
    this.ghost.setAttribute('stroke-dashoffset', (1 - g).toFixed(3));
    this.ghost.style.opacity = (0.55 * (1 - eo(seg(t, 5.0, 5.4)))).toFixed(3);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    const k = Math.max(0, eob(seg(t, 4.2, 4.7), 1.9)) * (1 - eo(seg(t, 5.0, 5.4)));
    this.x.setAttribute('transform', 'translate(1180 821) scale(' + (k * br).toFixed(4) + ')');
  },
});

},
  "edges": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('edges', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="edges-map">' +
      '<rect class="road" x="980" y="-40" width="660" height="1160" opacity=".8"/><rect class="road" x="1100" y="-40" width="500" height="1160"/>' +
      '<rect class="pv" x="1640" y="-40" width="90" height="1160"/>' +
      '<line class="yl edges-y" x1="1100" y1="-40" x2="1100" y2="1120" stroke-dasharray="1160"/>' +
      '<line class="wl edges-w" x1="1600" y1="-40" x2="1600" y2="1120" stroke-dasharray="1160"/>' +
      SG.dashes(1350, -20, 1350, 1100, 70, 50, 10, 'paint edges-d') +
      '<path class="edges-u" d="M1475 380 C 1475 200, 1700 200, 1700 380" fill="none" stroke-width="10" stroke-linecap="round" pathLength="1" stroke-dasharray="1" style="stroke:var(--main);opacity:.55"/>' +
      '<g class="edges-x"><circle r="40" class="sr"/><path d="M-16 -16 L16 16 M16 -16 L-16 16" fill="none" stroke-width="9" stroke-linecap="round" style="stroke:#FFFFFF"/></g>' +
      '<g class="edges-slow">' + SG.car('car2') + '</g><g class="edges-fast">' + SG.car('car') + '</g>' +
      '</g></svg>' +
      '<div class="words" style="left:120px;top:90px;width:820px">' +
      '<div class="tag edges-tag">Edge lines</div>' +
      '<h2 class="line edges-h">Yellow left, white right</h2>' +
      '<p class="sub edges-s1">Yellow left edge line: do not drive left of it, except when allowed to let another vehicle overtake.</p>' +
      '<p class="sub edges-s2">White right edge line: do not drive or cross to the right of it. No U-turns over it on a freeway.</p>' +
      '</div></div>'));
    const q = function (c) { return kit.stage.querySelector(c); };
    this.map = q('.edges-map'); this.yl = q('.edges-y'); this.wl = q('.edges-w'); this.d = [...kit.stage.querySelectorAll('.edges-d')];
    this.u = q('.edges-u'); this.x = q('.edges-x'); this.slow = q('.edges-slow'); this.fast = q('.edges-fast');
    this.tag = q('.edges-tag').style; this.h = q('.edges-h'); this.s1 = q('.edges-s1').style; this.s2 = q('.edges-s2').style;
  },
  render(t) {
    this.map.style.opacity = eo(seg(t, -0.4, 0.4));
    this.map.setAttribute('transform', 'translate(0 ' + (-t * 1.2).toFixed(1) + ')');
    this.yl.setAttribute('stroke-dashoffset', (1160 * (1 - eio(seg(t, 0.2, 1.6)))).toFixed(1));
    this.wl.setAttribute('stroke-dashoffset', (1160 * (1 - eio(seg(t, 0.6, 2.0)))).toFixed(1));
    SG.reveal(this.d, t, 0.0, 0.06, 0.4);
    const g = eo(seg(t, 1.0, 2.0));
    this.tag.opacity = g; this.tag.transform = 'translateX(' + lerp(26, 0, g) + 'px)';
    TextFx.fadeFromRight(this.h, t, 1.4, { stagger: 0.12, dur: 0.9 });
    const a = eo(seg(t, 2.6, 3.6)), b = eo(seg(t, 7.0, 8.0));
    this.s1.opacity = a; this.s1.transform = 'translateX(' + lerp(26, 0, a) + 'px)';
    this.s2.opacity = b; this.s2.transform = 'translateX(' + lerp(26, 0, b) + 'px)';
    const off = eio(seg(t, 3.4, 4.6)) - eio(seg(t, 7.2, 8.4));
    const sy = 700 - 22 * t;
    this.slow.setAttribute('transform', 'translate(' + lerp(1225, 1040, off).toFixed(1) + ' ' + sy.toFixed(1) + ') rotate(-90)');
    const fy = 1400 - 180 * Math.max(0, t - 2);
    this.fast.setAttribute('transform', 'translate(1225 ' + fy.toFixed(1) + ') rotate(-90)');
    const u = eio(seg(t, 9.0, 10.0));
    this.u.setAttribute('stroke-dashoffset', (1 - u).toFixed(3));
    const k = Math.max(0, eob(seg(t, 10.0, 10.5), 1.8)), br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.x.setAttribute('transform', 'translate(1600 245) scale(' + (k * br).toFixed(4) + ')');
  },
});

},
  "lanes": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const LN = [[0, 300, 150, 285, 0], [0, 900, 105, 395, 0], [1, 200, 130, 655, 0], [1, 400, 140, 765, 180]];
kit.scene('lanes', {
  init(kit) {
    let cars = '';
    LN.forEach(function (c) { cars += '<g clip-path="url(#lanes-c' + c[0] + ')"><g class="lanes-car">' + SG.car(c[0] ? (c[4] ? 'car3' : 'car') : 'car') + '</g></g>'; });
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<clipPath id="lanes-c0"><rect x="100" y="230" width="1080" height="220"/></clipPath><clipPath id="lanes-c1"><rect x="100" y="600" width="1080" height="220"/></clipPath>' +
      '<rect class="road lanes-ra" x="100" y="230" width="1080" height="220" rx="6"/><rect class="road lanes-rb" x="100" y="600" width="1080" height="220" rx="6"/>' +
      SG.dashes(120, 340, 1160, 340, 40, 40, 8, 'paint lanes-da') +
      SG.dashes(120, 710, 1160, 710, 140, 60, 12, 'paint lanes-db') + cars +
      '</svg>' +
      '<div class="words" style="left:0;top:60px;width:1920px;text-align:center"><h2 class="line lanes-h">Short dashes or long dashes?</h2></div>' +
      '<div class="words lanes-la" style="left:1250px;top:240px;width:600px"><div class="tag">Lane line</div><p class="sub">Short, thin dashes. Traffic on both sides goes your way.</p></div>' +
      '<div class="words lanes-lb" style="left:1250px;top:610px;width:600px"><div class="tag no">Dividing line</div><p class="sub">Longer dashes. Traffic on the other side comes towards you.</p></div>' +
      '</div>'));
    this.ra = kit.stage.querySelector('.lanes-ra').style;
    this.rb = kit.stage.querySelector('.lanes-rb').style;
    this.da = [...kit.stage.querySelectorAll('.lanes-da')];
    this.db = [...kit.stage.querySelectorAll('.lanes-db')];
    this.cars = [...kit.stage.querySelectorAll('.lanes-car')];
    this.h = kit.stage.querySelector('.lanes-h');
    this.la = kit.stage.querySelector('.lanes-la').style;
    this.lb = kit.stage.querySelector('.lanes-lb').style;
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, 0.0);
    this.ra.opacity = eo(seg(t, -0.3, 0.4));
    this.rb.opacity = eo(seg(t, 0.2, 0.9));
    SG.reveal(this.da, t, 0.4, 0.05, 0.2);
    SG.reveal(this.db, t, 3.6, 0.12, 0.35);
    const la = eo(seg(t, 1.4, 2.0)), lb = eo(seg(t, 4.6, 5.2));
    this.la.opacity = la; this.la.transform = 'translateX(' + lerp(26, 0, la) + 'px)';
    this.lb.opacity = lb; this.lb.transform = 'translateX(' + lerp(26, 0, lb) + 'px)';
    for (let i = 0; i < 4; i++) {
      const c = LN[i], vis = eo(seg(t, c[0] ? 3.8 : 0.8, c[0] ? 4.4 : 1.4));
      let x = ((c[1] + c[2] * t) % 1480) - 100;
      if (c[4]) x = 1280 - x;
      this.cars[i].setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + c[3] + ') rotate(' + c[4] + ')');
      this.cars[i].style.opacity = vis;
    }
  },
});

},
  "island": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('island', {
  init(kit) {
    const pts = '760,790 1000,730 1500,730 1740,790 1500,850 1000,850';
    let hat = '';
    for (let x = 760; x <= 1720; x += 52) hat += '<line class="wl island-h" x1="' + x + '" y1="870" x2="' + (x + 90) + '" y2="710" stroke-width="9" stroke-dasharray="183.6"/>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="island-map">' +
      '<rect class="pv" x="0" y="560" width="1920" height="40"/><rect class="pv" x="0" y="980" width="1920" height="40"/>' +
      '<rect class="road" x="0" y="600" width="1920" height="380"/>' +
      '<clipPath id="island-clip"><polygon points="' + pts + '"/></clipPath>' +
      '<g clip-path="url(#island-clip)">' + hat + '</g>' +
      '<polygon class="island-o" points="' + pts + '" fill="none" stroke-width="10" stroke-linejoin="round" pathLength="1" stroke-dasharray="1" style="stroke:#FFFFFF"/>' +
      '<path class="island-g" d="M500 665 C 760 665, 900 790, 1100 790" fill="none" stroke-width="10" stroke-linecap="round" pathLength="1" stroke-dasharray="1" style="stroke:var(--main);opacity:.55"/>' +
      '<g class="island-x"><circle r="44" class="sr"/><path d="M-18 -18 L18 18 M18 -18 L-18 18" fill="none" stroke-width="10" stroke-linecap="round" style="stroke:#FFFFFF"/></g>' +
      '<g class="island-car">' + SG.car('car') + '</g><g class="island-car2">' + SG.car('car3') + '</g>' +
      '</g></svg>' +
      '<div class="words" style="left:120px;top:110px;width:1600px">' +
      '<div class="tag no island-tag">Painted island</div>' +
      '<h2 class="line island-t">Do not drive or stop on it</h2>' +
      '</div></div>'));
    const q = function (c) { return kit.stage.querySelector(c); };
    this.map = q('.island-map'); this.h = [...kit.stage.querySelectorAll('.island-h')]; this.o = q('.island-o');
    this.g = q('.island-g'); this.x = q('.island-x'); this.car = q('.island-car'); this.car2 = q('.island-car2');
    this.tag = q('.island-tag').style; this.t = q('.island-t');
  },
  render(t) {
    this.map.style.opacity = eo(seg(t, -0.4, 0.4));
    this.map.setAttribute('transform', 'translate(0 ' + (-t * 1.3).toFixed(1) + ')');
    this.o.setAttribute('stroke-dashoffset', (1 - eio(seg(t, 0.2, 1.4))).toFixed(3));
    for (let i = 0; i < this.h.length; i++) this.h[i].setAttribute('stroke-dashoffset', (183.6 * (1 - eo(seg(t, 1.0 + i * 0.06, 1.5 + i * 0.06)))).toFixed(1));
    const g = eo(seg(t, 1.2, 2.2));
    this.tag.opacity = g; this.tag.transform = 'translateX(' + lerp(26, 0, g) + 'px)';
    TextFx.fadeFromRight(this.t, t, 1.6, { stagger: 0.12, dur: 0.9 });
    const cx = lerp(-150, 380, eo(seg(t, 2.6, 4.2))) + lerp(0, 1800, ei(seg(t, 7.2, 9.6)));
    this.car.setAttribute('transform', 'translate(' + cx.toFixed(1) + ' 665)');
    this.car2.setAttribute('transform', 'translate(' + (2100 - 230 * Math.max(0, t - 3)).toFixed(1) + ' 915) rotate(180)');
    const gg = eio(seg(t, 4.4, 5.4));
    this.g.setAttribute('stroke-dashoffset', (1 - gg).toFixed(3));
    this.g.style.opacity = (0.55 * (1 - eo(seg(t, 7.0, 7.5)))).toFixed(3);
    const k = Math.max(0, eob(seg(t, 5.4, 5.9), 1.9)) * (1 - eo(seg(t, 7.0, 7.5)));
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.x.setAttribute('transform', 'translate(1100 790) scale(' + (k * br).toFixed(4) + ')');
  },
});

},
  "kerb": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('kerb', {
  init(kit) {
    const panel = function (cx, n, ln, pt) {
      return '<g class="kerb-p' + n + '"><clipPath id="kerb-c' + n + '"><rect x="' + (cx - 190) + '" y="200" width="340" height="560"/></clipPath>' +
        '<rect class="pv" x="' + (cx - 190) + '" y="200" width="80" height="560"/><rect class="road" x="' + (cx - 110) + '" y="200" width="260" height="560"/>' +
        '<line class="' + ln + ' kerb-s' + n + '" x1="' + (cx - 98) + '" y1="210" x2="' + (cx - 98) + '" y2="470" stroke-dasharray="260"/>' +
        SG.dashes(cx - 98, 500, cx - 98, 760, 40, 30, 12, pt + ' kerb-d' + n) +
        '<text class="lbl kerb-t' + n + '" x="' + (cx + 170) + '" y="350">Always</text>' +
        '<text class="lbl kerb-t' + n + '" x="' + (cx + 170) + '" y="640">Times on sign</text></g>';
    };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' + panel(560, 1, 'rl', 'rpaint') + panel(1360, 2, 'yl', 'ypaint') +
      '<g clip-path="url(#kerb-c1)"><g class="kerb-car1">' + SG.car('car') + '</g></g>' +
      '<g clip-path="url(#kerb-c2)"><g class="kerb-man"><circle cy="-34" r="15" class="sk"/><rect x="-17" y="-16" width="34" height="46" rx="15" class="sk"/></g><g class="kerb-car2">' + SG.car('car') + '</g></g>' +
      '</svg>' +
      '<div class="words" style="left:0;top:60px;width:1920px;text-align:center"><h2 class="line kerb-h">Red line or yellow line?</h2></div>' +
      '<div class="words kerb-la" style="left:240px;top:790px;width:640px;text-align:center;align-items:center"><div class="tag no">Red: no stopping</div><p class="sub">You cannot even stop.</p></div>' +
      '<div class="words kerb-lb" style="left:1040px;top:790px;width:640px;text-align:center;align-items:center"><div class="tag y">Yellow: no parking</div><p class="sub">You may stop briefly to drop someone off.</p></div>' +
      '<div class="words kerb-foot" style="left:0;top:990px;width:1920px;align-items:center"><p class="kicker">Solid: always. Broken: only at the times on the sign</p></div>' +
      '</div>'));
    const q = function (s) { return kit.stage.querySelector(s); };
    this.p1 = q('.kerb-p1').style; this.p2 = q('.kerb-p2').style;
    this.s1 = q('.kerb-s1'); this.s2 = q('.kerb-s2');
    this.d1 = [...kit.stage.querySelectorAll('.kerb-d1')]; this.d2 = [...kit.stage.querySelectorAll('.kerb-d2')];
    this.t = [...kit.stage.querySelectorAll('.kerb-t1, .kerb-t2')];
    this.c1 = q('.kerb-car1'); this.c2 = q('.kerb-car2'); this.man = q('.kerb-man');
    this.h = q('.kerb-h'); this.la = q('.kerb-la').style; this.lb = q('.kerb-lb').style; this.foot = q('.kerb-foot').style;
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, 0.0);
    this.p1.opacity = eo(seg(t, -0.3, 0.4)); this.p2.opacity = eo(seg(t, 0.2, 0.9));
    this.s1.setAttribute('stroke-dashoffset', (260 * (1 - eio(seg(t, 0.5, 1.3)))).toFixed(1));
    this.s2.setAttribute('stroke-dashoffset', (260 * (1 - eio(seg(t, 1.6, 2.4)))).toFixed(1));
    SG.reveal(this.d1, t, 1.0, 0.1, 0.25); SG.reveal(this.d2, t, 2.1, 0.1, 0.25);
    for (let i = 0; i < this.t.length; i++) { const k = eo(seg(t, 2.4 + i * 0.15, 2.9 + i * 0.15)); this.t[i].style.opacity = k; }
    const la = eo(seg(t, 2.8, 3.4)), lb = eo(seg(t, 3.2, 3.8));
    this.la.opacity = la; this.la.transform = 'translateX(' + lerp(26, 0, la) + 'px)';
    this.lb.opacity = lb; this.lb.transform = 'translateX(' + lerp(26, 0, lb) + 'px)';
    const y1 = lerp(860, -100, seg(t, 3.6, 8.6));
    this.c1.setAttribute('transform', 'translate(530 ' + y1.toFixed(1) + ') rotate(-90)');
    const pull = eo(seg(t, 3.8, 5.6));
    const y2 = lerp(860, 580, pull) - lerp(0, 700, ei(seg(t, 8.0, 10.0)));
    const x2 = lerp(1330, 1310, eio(seg(t, 4.6, 5.6))) + lerp(0, 20, eio(seg(t, 8.0, 8.8)));
    this.c2.setAttribute('transform', 'translate(' + x2.toFixed(1) + ' ' + y2.toFixed(1) + ') rotate(-90)');
    const m = eo(seg(t, 5.9, 6.7));
    this.man.setAttribute('transform', 'translate(' + lerp(1270, 1210, m).toFixed(1) + ' 590)');
    this.man.style.opacity = m;
    const f = eo(seg(t, 8.6, 9.2));
    this.foot.opacity = f; this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});

},
  "trapkerb": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapkerb', {
  init(kit) {
    this.o = SG.trapInit(kit, 'trapkerb', {
      q: 'Red line or yellow line: which one lets me stop?',
      trap: 'Mixing up ‘no stopping’ with ‘no parking’.',
      simple: 'Red = no stopping at all. Yellow = no parking, but you may stop briefly (e.g. to drop someone off).',
      hook: 'Red is stricter: you cannot even stop. Solid = always, broken = only at the times shown.'
    });
  },
  render(t) {
    SG.trapRender(this.o, t);
  },
});

},
  "box": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('box', {
  init(kit) {
    let q = '';
    for (let i = 0; i < 3; i++) q += '<g class="box-q">' + SG.car('car2') + '</g>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="box-map">' +
      '<rect class="road" x="980" y="430" width="960" height="220"/><rect class="road" x="1290" y="-40" width="220" height="1160"/>' +
      SG.dashes(1000, 540, 1280, 540, 60, 40, 8, 'paint box-d') + SG.dashes(1530, 540, 1930, 540, 60, 40, 8, 'paint box-d') +
      SG.dashes(1400, -40, 1400, 420, 60, 40, 8, 'paint box-d') + SG.dashes(1400, 660, 1400, 1120, 60, 40, 8, 'paint box-d') +
      '<rect class="yl box-sq" x="1296" y="436" width="208" height="208" stroke-dasharray="832"/>' +
      '<line class="yl box-x1" x1="1296" y1="436" x2="1504" y2="644" stroke-dasharray="294.2"/>' +
      '<line class="yl box-x2" x1="1504" y1="436" x2="1296" y2="644" stroke-dasharray="294.2"/>' +
      q + '<g class="box-car">' + SG.car('car') + '</g>' +
      '<g class="box-wait"><circle r="34" style="fill:var(--accent)" stroke="#FFFFFF" stroke-width="5"/><rect x="-13" y="-14" width="9" height="28" rx="3" class="sk"/><rect x="4" y="-14" width="9" height="28" rx="3" class="sk"/></g>' +
      '</g></svg>' +
      '<div class="words" style="left:120px;top:150px;width:820px">' +
      '<div class="tag y box-tag">Yellow box junction</div>' +
      '<h2 class="line box-h">Do not stop in the box</h2>' +
      '<p class="sub box-sub">Enter only if your exit is clear. The one exception: coming in from the side to turn left or right.</p>' +
      '</div></div>'));
    const s = function (c) { return kit.stage.querySelector(c); };
    this.map = s('.box-map'); this.d = [...kit.stage.querySelectorAll('.box-d')];
    this.sq = s('.box-sq'); this.x1 = s('.box-x1'); this.x2 = s('.box-x2');
    this.q = [...kit.stage.querySelectorAll('.box-q')]; this.car = s('.box-car'); this.wait = s('.box-wait');
    this.tag = s('.box-tag').style; this.h = s('.box-h'); this.sub = s('.box-sub').style;
  },
  render(t) {
    t = t / 1.3;
    const z = lerp(1, 1.04, eio(seg(t, 0, 10)));
    this.map.setAttribute('transform', 'translate(1400 540) scale(' + z.toFixed(4) + ') translate(-1400 ' + (-540 - t * 1.2).toFixed(1) + ')');
    this.map.style.opacity = eo(seg(t, -0.4, 0.3));
    SG.reveal(this.d, t, -0.2, 0.03, 0.2);
    this.sq.setAttribute('stroke-dashoffset', (832 * (1 - eio(seg(t, 0.3, 1.3)))).toFixed(1));
    this.x1.setAttribute('stroke-dashoffset', (294.2 * (1 - eo(seg(t, 1.2, 1.6)))).toFixed(1));
    this.x2.setAttribute('stroke-dashoffset', (294.2 * (1 - eo(seg(t, 1.5, 1.9)))).toFixed(1));
    this.tag.opacity = eo(seg(t, 1.4, 1.8));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.4, 1.9))) + 'px)';
    TextFx.fadeFromRight(this.h, t, 1.6);
    const sb = eo(seg(t, 2.4, 3.0));
    this.sub.opacity = sb; this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
    const go = ei(seg(t, 6.4, 8.2)) * 640;
    for (let i = 0; i < 3; i++) this.q[i].setAttribute('transform', 'translate(' + (1590 + i * 140 + go).toFixed(1) + ' 485)');
    const x = lerp(1040, 1196, eo(seg(t, 2.8, 4.6))) + lerp(0, 1000, ei(seg(t, 7.0, 9.6)));
    const dip = Math.sin(Math.PI * seg(t, 4.5, 4.9)) * 4;
    this.car.setAttribute('transform', 'translate(' + (x + dip).toFixed(1) + ' 485)');
    this.car.style.opacity = eo(seg(t, 2.6, 3.1));
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    const w = Math.max(0, eob(seg(t, 4.8, 5.2), 1.8)) * (1 - eo(seg(t, 6.6, 7.0)));
    this.wait.setAttribute('transform', 'translate(' + x.toFixed(1) + ' 410) scale(' + (w * br).toFixed(4) + ')');
  },
});

},
  "trapbox": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapbox', {
  init(kit) {
    this.o = SG.trapInit(kit, 'trapbox', {
      q: 'Can you wait on a yellow box junction?',
      trap: 'Stopping in the box while the car in front clears.',
      simple: 'No. Only enter if your exit is clear. The one exception is entering from the side to turn.',
      hook: 'Never park in the box.'
    });
  },
  render(t) {
    SG.trapRender(this.o, t);
  },
});

},
  "circle": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
const CX = 1400, CY = 540, CR = 105;
const onRing = function (deg) { const a = deg * Math.PI / 180; return 'translate(' + (CX + CR * Math.cos(a)).toFixed(1) + ' ' + (CY + CR * Math.sin(a)).toFixed(1) + ') rotate(' + (deg + 90).toFixed(1) + ')'; };
kit.scene('circle', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="circle-map">' +
      '<rect class="road" x="980" y="430" width="960" height="220"/><rect class="road" x="1290" y="-40" width="220" height="1160"/>' +
      SG.dashes(1296, 668, 1398, 668, 16, 12, 12, 'paint circle-d') + SG.dashes(1402, 412, 1504, 412, 16, 12, 12, 'paint circle-d') +
      SG.dashes(1272, 436, 1272, 538, 16, 12, 12, 'paint circle-d') + SG.dashes(1528, 542, 1528, 644, 16, 12, 12, 'paint circle-d') +
      '<circle class="paint circle-disc" cx="' + CX + '" cy="' + CY + '" r="48"/>' +
      '<circle class="circle-ring" cx="' + CX + '" cy="' + CY + '" r="' + CR + '" fill="none" stroke-width="5" stroke-dasharray="14 14" style="stroke:#FFFFFF;opacity:.45"/>' +
      '<g class="circle-them">' + SG.car('car3') + '</g><g class="circle-you">' + SG.car('car') + '</g>' +
      '</g></svg>' +
      '<div class="words" style="left:120px;top:150px;width:840px">' +
      '<div class="tag circle-tag">Mini-circle</div>' +
      '<h2 class="line circle-h">Go round clockwise</h2>' +
      '<p class="sub circle-sub">Give way to any vehicle that will cross a yield line before you.</p>' +
      '</div></div>'));
    const q = function (c) { return kit.stage.querySelector(c); };
    this.map = q('.circle-map'); this.d = [...kit.stage.querySelectorAll('.circle-d')];
    this.disc = q('.circle-disc'); this.ring = q('.circle-ring').style; this.them = q('.circle-them'); this.you = q('.circle-you');
    this.tag = q('.circle-tag').style; this.h = q('.circle-h'); this.sub = q('.circle-sub').style;
  },
  render(t) {
    this.map.style.opacity = eo(seg(t, -0.4, 0.4));
    const z = lerp(1, 1.04, eio(seg(t, 0, 11)));
    this.map.setAttribute('transform', 'translate(1400 540) scale(' + z.toFixed(4) + ') translate(-1400 ' + (-540 - t * 1.2).toFixed(1) + ')');
    const s = Math.max(0, eob(seg(t, 0.2, 0.9), 1.7)), br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.disc.setAttribute('r', (48 * s * br).toFixed(1));
    SG.reveal(this.d, t, 0.6, 0.05, 0.3);
    this.ring.opacity = (0.45 * eo(seg(t, 1.0, 1.8))).toFixed(3);
    const g = eo(seg(t, 1.0, 2.0));
    this.tag.opacity = g; this.tag.transform = 'translateX(' + lerp(26, 0, g) + 'px)';
    TextFx.fadeFromRight(this.h, t, 1.4, { stagger: 0.12, dur: 0.9 });
    const sb = eo(seg(t, 2.6, 3.6));
    this.sub.opacity = sb; this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
    if (t < 4.0) this.them.setAttribute('transform', 'translate(' + lerp(2000, 1489, eo(seg(t, 2.0, 4.0))).toFixed(1) + ' 595) rotate(' + lerp(180, 121.6, eio(seg(t, 3.5, 4.0))).toFixed(1) + ')');
    else if (t < 5.6) this.them.setAttribute('transform', onRing(lerp(31.6, 148.4, seg(t, 4.0, 5.6))));
    else this.them.setAttribute('transform', 'translate(' + lerp(1311, 1020, seg(t, 5.6, 6.8)).toFixed(1) + ' 595) rotate(' + lerp(238.4, 180, eio(seg(t, 5.6, 6.0))).toFixed(1) + ')');
    this.them.style.opacity = 1 - eo(seg(t, 6.4, 6.9));
    if (t < 6.0) {
      const y = lerp(1000, 730, eo(seg(t, 1.4, 3.4))) - lerp(0, 100, eio(seg(t, 5.6, 6.0)));
      this.you.setAttribute('transform', 'translate(1345 ' + y.toFixed(1) + ') rotate(' + lerp(-90, -148.4, eio(seg(t, 5.6, 6.0))).toFixed(1) + ')');
    } else if (t < 7.8) this.you.setAttribute('transform', onRing(lerp(121.6, 238.4, seg(t, 6.0, 7.8))));
    else this.you.setAttribute('transform', 'translate(1345 ' + lerp(450, -120, ei(seg(t, 7.8, 9.8))).toFixed(1) + ') rotate(' + lerp(-31.6, -90, eio(seg(t, 7.8, 8.2))).toFixed(1) + ')');
  },
});

},
  "buslane": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('buslane', {
  init(kit) {
    const word = function (x, w, fs) { return '<text class="buslane-w" x="' + x + '" y="520" text-anchor="middle" style="font:700 ' + fs + 'px var(--display, var(--sans, system-ui, sans-serif)); fill:#FFFFFF; letter-spacing:4px">' + w + '</text>'; };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="buslane-map">' +
      '<rect class="pv" x="960" y="-40" width="40" height="1160"/><rect class="pv" x="1840" y="-40" width="40" height="1160"/>' +
      '<rect class="road" x="1000" y="-40" width="840" height="1160"/>' +
      '<line class="wl buslane-l1" x1="1280" y1="-40" x2="1280" y2="1120" stroke-dasharray="1160"/><line class="wl buslane-l2" x1="1560" y1="-40" x2="1560" y2="1120" stroke-dasharray="1160"/>' +
      word(1140, 'BUS', 84) + word(1420, 'TRAM', 72) +
      '<g transform="translate(1700 490)"><g class="buslane-w" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" style="stroke:#FFFFFF"><circle cx="-36" cy="0" r="28"/><circle cx="36" cy="0" r="28"/><path d="M-36 0 L-8 -34 L22 -34 L36 0 M-8 -34 L4 0 L22 -34"/></g></g>' +
      '<g class="buslane-bus"><rect x="-44" y="-120" width="88" height="240" rx="18" class="car3"/><rect x="-34" y="-110" width="68" height="34" rx="8" class="glass"/></g>' +
      '<g class="buslane-ghost" opacity=".5"><g transform="translate(1700 800) rotate(-90)">' + SG.car('car') + '</g></g>' +
      '<g class="buslane-x"><circle r="40" class="sr"/><path d="M-16 -16 L16 16 M16 -16 L-16 16" fill="none" stroke-width="9" stroke-linecap="round" style="stroke:#FFFFFF"/></g>' +
      '</g></svg>' +
      '<div class="words" style="left:120px;top:150px;width:800px">' +
      '<div class="tag no buslane-tag">Special lanes</div>' +
      '<h2 class="line buslane-h">Keep out of marked lanes</h2>' +
      '<p class="sub buslane-sub">Lanes marked BUS, TRAM, bicycle and so on: no other vehicle may drive, stop or park in them.</p>' +
      '</div></div>'));
    const q = function (c) { return kit.stage.querySelector(c); };
    this.map = q('.buslane-map'); this.l1 = q('.buslane-l1'); this.l2 = q('.buslane-l2');
    this.w = [...kit.stage.querySelectorAll('.buslane-w')]; this.bus = q('.buslane-bus'); this.ghost = q('.buslane-ghost').style; this.x = q('.buslane-x');
    this.tag = q('.buslane-tag').style; this.h = q('.buslane-h'); this.sub = q('.buslane-sub').style;
  },
  render(t) {
    this.map.style.opacity = eo(seg(t, -0.4, 0.4));
    this.map.setAttribute('transform', 'translate(0 ' + (-t * 1.3).toFixed(1) + ')');
    this.l1.setAttribute('stroke-dashoffset', (1160 * (1 - eio(seg(t, 0.2, 1.4)))).toFixed(1));
    this.l2.setAttribute('stroke-dashoffset', (1160 * (1 - eio(seg(t, 0.4, 1.6)))).toFixed(1));
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    for (let i = 0; i < this.w.length; i++) {
      const s = Math.max(0, eob(seg(t, 1.0 + i * 0.4, 1.8 + i * 0.4), 1.7));
      this.w[i].style.opacity = Math.min(1, s * 1.4);
      this.w[i].style.transform = 'scale(' + lerp(0.6, 1, Math.min(1, s)).toFixed(3) + ')';
      this.w[i].style.transformBox = 'fill-box'; this.w[i].style.transformOrigin = 'center';
    }
    const g = eo(seg(t, 1.2, 2.2));
    this.tag.opacity = g; this.tag.transform = 'translateX(' + lerp(26, 0, g) + 'px)';
    TextFx.fadeFromRight(this.h, t, 1.6, { stagger: 0.12, dur: 0.9 });
    const sb = eo(seg(t, 2.8, 3.8));
    this.sub.opacity = sb; this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
    this.bus.setAttribute('transform', 'translate(1140 ' + lerp(1300, -300, seg(t, 3.0, 9.6)).toFixed(1) + ')');
    this.ghost.opacity = (0.5 * eo(seg(t, 4.6, 5.4))).toFixed(3);
    const k = Math.max(0, eob(seg(t, 5.6, 6.1), 1.8));
    this.x.setAttribute('transform', 'translate(1770 730) scale(' + (k * br).toFixed(4) + ')');
  },
});

},
  "bays": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const BY = [['A', 'Ambulance'], ['B', 'Bus'], ['T', 'Taxi'], ['F', 'Fire-fighting'], ['CD', 'Diplomatic'], ['MB', 'Minibus'], ['D', 'Defence force'], ['P', 'Police'], ['R', 'Rickshaw'], ['L', 'Loading zone'], ['SOS', 'Emergency telephone']];
kit.scene('bays', {
  init(kit) {
    let m = '';
    this.pos = [];
    for (let i = 0; i < BY.length; i++) {
      const r = i < 6 ? 0 : 1, c = r ? i - 6 : i, x = (r ? 350 : 225) + c * 250 + 110, y = r ? 640 : 330;
      this.pos.push([x, y]);
      const fs = BY[i][0].length > 1 ? (BY[i][0].length > 2 ? 64 : 80) : 96;
      m += '<g class="bays-b"><rect class="road" x="-110" y="-120" width="220" height="240" rx="8"/>' +
        '<rect class="paint" x="-110" y="-120" width="8" height="240"/><rect class="paint" x="102" y="-120" width="8" height="240"/><rect class="paint" x="-110" y="-120" width="220" height="8"/>' +
        (BY[i][0] === 'D' || BY[i][0] === 'CD' ? '<rect class="bays-hi" x="-122" y="-132" width="244" height="264" rx="14" fill="none" stroke-width="8" style="stroke:var(--accent)"/>' : '') +
        '<text class="bays-l" y="' + (fs * 0.36).toFixed(0) + '" text-anchor="middle" style="font:700 ' + fs + 'px var(--display, var(--sans, system-ui, sans-serif)); fill:#FFFFFF">' + BY[i][0] + '</text>' +
        '<text class="bays-m" y="84" text-anchor="middle" style="font:600 24px var(--display, var(--sans, system-ui, sans-serif)); fill:#FFFFFF">' + BY[i][1] + '</text></g>';
    }
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="bays-g">' + m + '</g></svg>' +
      '<div class="words" style="left:0;top:50px;width:1920px;text-align:center"><h2 class="line bays-h">Letters in parking bays</h2></div>' +
      '<div class="words bays-foot" style="left:0;top:830px;width:1920px;text-align:center;align-items:center">' +
      '<p class="sub">Trap: D is defence force. CD is diplomatic.</p><p class="kicker">A wheelchair bay is only for vehicles carrying disabled persons</p></div>' +
      '</div>'));
    this.g = kit.stage.querySelector('.bays-g');
    this.b = [...kit.stage.querySelectorAll('.bays-b')];
    this.l = [...kit.stage.querySelectorAll('.bays-l')];
    this.m = [...kit.stage.querySelectorAll('.bays-m')];
    this.hi = [...kit.stage.querySelectorAll('.bays-hi')];
    this.h = kit.stage.querySelector('.bays-h');
    this.foot = kit.stage.querySelector('.bays-foot').style;
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, 0.0);
    this.g.setAttribute('transform', 'translate(0 ' + (-t * 1.3).toFixed(1) + ')');
    for (let i = 0; i < this.b.length; i++) {
      const st = 0.1 + i * 0.22, s = Math.max(0, eob(seg(t, st, st + 0.5), 1.7));
      this.b[i].setAttribute('transform', 'translate(' + this.pos[i][0] + ' ' + this.pos[i][1] + ') scale(' + s.toFixed(4) + ')');
      const k = eob(seg(t, st + 0.35, st + 0.75), 1.8);
      this.l[i].style.opacity = Math.min(1, Math.max(0, k) * 1.5);
      this.l[i].setAttribute('transform', 'scale(' + lerp(1.5, 1, Math.min(1, Math.max(0, k))).toFixed(3) + ')');
      this.m[i].style.opacity = eo(seg(t, st + 0.6, st + 1.0));
    }
    const br = 1 + 0.02 * Math.sin(t * 2 * Math.PI / 1.6);
    for (let j = 0; j < this.hi.length; j++) {
      this.hi[j].style.opacity = eo(seg(t, 6.0, 6.5));
      this.hi[j].setAttribute('transform', 'scale(' + br.toFixed(4) + ')');
    }
    const f = eo(seg(t, 5.6, 6.2));
    this.foot.opacity = f; this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});

},
  "trapbays": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapbays', {
  init(kit) {
    this.o = SG.trapInit(kit, 'trapbays', {
      q: 'What does ‘D’ in a parking bay mean, and what is ‘CD’?',
      trap: 'Thinking D is for diplomats.',
      simple: 'D = defence force. CD = diplomatic vehicles.',
      hook: 'CD = Corps Diplomatique.'
    });
  },
  render(t) {
    SG.trapRender(this.o, t);
  },
});

},
  "end": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('end', {
  init(kit) {
    const tile = function (n, inner) { return '<g class="end-s' + n + '"><rect class="shadow" x="-100" y="-100" width="220" height="220" rx="28" transform="translate(10 14)"/><rect class="road" x="-110" y="-110" width="220" height="220" rx="28"/>' + inner + '</g>'; };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      tile(1, '<rect class="rpaint" x="-84" y="-110" width="14" height="220"/><rect class="ypaint" x="70" y="-110" width="14" height="220"/>') +
      tile(2, '<rect x="-62" y="-62" width="124" height="124" fill="none" stroke-width="10" style="stroke:var(--accent)"/><path d="M-62 -62 L62 62 M62 -62 L-62 62" fill="none" stroke-width="10" style="stroke:var(--accent)"/>') +
      tile(3, '<rect class="paint" x="-110" y="-16" width="220" height="10"/><rect class="paint" x="-100" y="10" width="50" height="10"/><rect class="paint" x="-20" y="10" width="50" height="10"/><rect class="paint" x="60" y="10" width="40" height="10"/>') +
      '</svg>' +
      '<div class="words" style="left:180px;top:300px;width:960px">' +
      '<div class="kicker end-k">Session 7 · Learners Coach</div>' +
      '<div class="bar end-bar" style="transform-origin:left center"></div>' +
      '<h2 class="line end-h">Red stops you stopping.</h2>' +
      '<p class="sub end-sub">Yellow stops you parking. Your side, your line.</p></div>' +
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
    const pos = [[1440, 300], [1660, 560], [1400, 800]];
    const tt = Math.min(t, 5);
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
  const BPM = 332 * 60 / (T.end - T.stopyield), B = 60 / BPM;
  S.tempo(BPM, { t0: T.stopyield });
  S.program('pad', 'pad', { rev: 0.6, gain: -4 });
  S.program('mallet', 'marimba', { rev: 0.3, pan: -0.15 });
  S.program('keys', 'ep', { rev: 0.35, pan: 0.15 });
  S.program('bass', 'bass', { gain: -3 });
  S.program('bell', 'glock', { rev: 0.5, gain: -6 });
  // Title: near silent, a pad and one bell note
  S.chord('pad', ['D3', 'A3', 'F#4'], { t: 0, dur: T.stopyield + 0.4, vel: 30 });
  S.note('bell', 'A5', { t: 1.3, dur: 2.6, vel: 40 });
  S.fx('pop', 1.8, { vel: 40 });
  // Trap scenes: the groove drops to pad and mallet so the words can be read
  const traps = ['trapovertake', 'trapsides', 'trapkerb', 'trapbox', 'trapbays'];
  const calm = function (b) { const t = S.beat(b); return traps.some(function (id) { return t >= T[id] - 0.2 && t < T[id] + 12; }); };
  // Progression, one chord per 8 beats, 41 chords to beat 328
  const prog = [['D3', 'A3', 'F#4'], ['B2', 'F#3', 'D4'], ['G2', 'D3', 'B3'], ['A2', 'E3', 'C#4']];
  const roots = ['D2', 'B1', 'G1', 'A1'];
  for (let i = 0; i < 41; i++) {
    const c = prog[i % 4], q = calm(i * 8) || calm(i * 8 + 4);
    S.chord('pad', c, { beat: i * 8, beats: 8, vel: q ? 38 : 34 });
    if (i >= 2 && !q) { S.note('bass', roots[i % 4], { beat: i * 8, beats: 3, vel: 64 }); S.note('bass', roots[i % 4], { beat: i * 8 + 4, beats: 2, vel: 54 }); }
    if (i >= 4 && i % 2 === 0 && !q) S.chord('keys', c.map(function (p) { return p.replace(/\d/, function (d) { return String(+d + 1); }); }), { beat: i * 8, beats: 6, vel: 40 });
  }
  // Calm marimba ostinato over the whole film, 82 bars of 4 beats to beat 328
  S.pattern('mallet', 'x.x.X..x', { from: 0, repeat: 82, pitch: ['D5', 'A4', 'F#5', 'A4', 'E5'], vel: 48 });
  // Light pulse, one 4-beat bar at a time, resting under the trap scenes
  for (let b = 16; b < 328; b += 4) if (!calm(b) && !calm(b + 3.9)) S.drums({ shaker: 'oxoxoxox', sidestick: '....x...', kick: 'x.......' }, { from: b, repeat: 1, vel: 46 });
  // Pops as each marking builds
  [['stopyield', 0.78], ['stopyield', 2.47], ['crossing', 0.4], ['overtake', 2.86], ['sides', 3.38], ['sides', 8.19], ['double', 5.46], ['edges', 10.0], ['lanes', 0.52], ['island', 1.0], ['island', 5.4], ['kerb', 0.65], ['kerb', 2.08], ['box', 0.39], ['box', 1.56], ['circle', 0.2], ['buslane', 1.0], ['buslane', 1.4], ['buslane', 1.8], ['buslane', 5.6], ['bays', 0.13], ['bays', 0.7], ['bays', 1.27], ['bays', 1.85], ['bays', 2.42], ['bays', 2.99]].forEach(function (p) { S.fx('pop', T[p[0]] + p[1], { vel: 56 }); });
  traps.forEach(function (id) {
    S.fx('pop', T[id] + 1.8, { vel: 44 }); S.fx('click', T[id] + 4.0, { vel: 44 });
    S.fx('pop', T[id] + 5.0, { vel: 44 }); S.fx('ding', T[id] + 7.9, { vel: 46 });
  });
  S.fx('whoosh', T.overtake + 7.0, { dur: 2.6, vel: 30 });
  S.fx('whoosh', T.sides + 4.94, { dur: 3.1, vel: 28 });
  S.fx('whoosh', T.edges + 5.0, { dur: 2.4, vel: 26 });
  S.fx('click', T.kerb + 7.67, { vel: 44 });
  S.fx('ding', T.box + 9.1, { vel: 50 });
  // Stop-time, then the hit on the end card
  S.fx('revswell', T.end, { dur: 1.4, vel: 60 });
  S.run('mallet', ['D5', 'E5', 'F#5', 'A5', 'B5', 'D6'], { t: T.end - 0.6, step: 0.1, vel: 50, cresc: 8 });
  S.chord('keys', ['D4', 'F#4', 'A4', 'D5'], { t: T.end, dur: T.END - T.end, vel: 72 });
  S.chord('pad', ['D3', 'A3', 'D4', 'F#4'], { t: T.end, dur: T.END - T.end, vel: 48 });
  S.note('bass', 'D2', { t: T.end, dur: 3, vel: 84 });
  S.drum('kick', { t: T.end, vel: 96 });
  S.drum('crash', { t: T.end, vel: 60 });
  S.fx('pop', T.end + 0.9, { vel: 48 }); S.fx('pop', T.end + 1.35, { vel: 48 }); S.fx('pop', T.end + 1.8, { vel: 48 });
  S.note('bell', 'F#5', { t: T.end + 2.9, dur: 3, vel: 40 });
  S.master({ gain: -6, fadeOut: 2.0 });
});

}
};