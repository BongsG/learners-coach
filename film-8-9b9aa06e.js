(window.K53F = window.K53F || {})[8] = {
 title: "Session 8: Speed, overtaking and lanes",
 scenes: [{"id": "title", "name": "Speed, overtaking and lanes", "dur": 7}, {"id": "disc", "name": "Licence disc", "dur": 8}, {"id": "gap", "name": "2-second gap", "dur": 13}, {"id": "mirrors", "name": "Mirrors and blind spots", "dur": 12}, {"id": "limits", "name": "General speed limits", "dur": 16}, {"id": "heavy", "name": "Vehicle limits", "dur": 12}, {"id": "divide", "name": "Divided roads", "dur": 12}, {"id": "nopass", "name": "Never overtake here", "dur": 12}, {"id": "left", "name": "Passing on the left", "dur": 13}, {"id": "freeway", "name": "Do not hog the right lane", "dur": 10}, {"id": "noshoulder", "name": "Stay off the shoulder", "dur": 10}, {"id": "shoulder", "name": "Yellow-line shoulder", "dur": 13}, {"id": "buslane", "name": "Public transport lanes", "dur": 11}, {"id": "circles", "name": "Who goes first", "dur": 11}, {"id": "trap1", "name": "Trap 1", "dur": 13}, {"id": "trap2", "name": "Trap 2", "dur": 13}, {"id": "trap3", "name": "Trap 3", "dur": 13}, {"id": "trap4", "name": "Trap 4", "dur": 13}, {"id": "trap5", "name": "Trap 5", "dur": 13}, {"id": "end", "name": "Remember", "dur": 11}],
 css: "#stage { --ground:#F3F5F7; --main:#1F5F8B; --second:#18212B; --accent:#F5C400; --sign-red:#C8102E; --sign-blue:#0A4D94; color:var(--second); font-family:var(--sans, system-ui, sans-serif) }\n.ground { position:absolute; inset:0; background:var(--ground); background-image:linear-gradient(color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px), linear-gradient(90deg, color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px); background-size:80px 80px; background-position:-1px -1px }\n.words { position:absolute; margin:0; display:flex; flex-direction:column; gap:24px } .words > * { margin:0 }\n.line { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:96px; line-height:1.02; font-weight:700; letter-spacing:-0.01em } .sub { font-size:40px; line-height:1.3; color:color-mix(in srgb, var(--second) 78%, var(--ground)) }\n.kicker { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:30px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:var(--main); display:flex; align-items:center; gap:16px }\n.kicker::before { content:''; width:44px; height:8px; border-radius:4px; background:var(--accent) }\n.bar { height:10px; width:160px; border-radius:5px; background:var(--accent) }\n.art { position:absolute; inset:0; width:100%; height:100%; overflow:visible }\n.sr { fill:var(--sign-red) } .sb { fill:var(--sign-blue) } .sw { fill:#FFFFFF } .sk { fill:var(--second) }\n.edge { fill:none; stroke:color-mix(in srgb, var(--second) 18%, transparent); stroke-width:3 }\n.shadow { fill:rgba(0,0,0,.12) }\n.card { position:absolute; background:#FFFFFF; border:3px solid color-mix(in srgb, var(--main) 35%, var(--ground)); border-radius:28px; box-shadow:0 18px 40px -18px rgba(0,0,0,.25) }\n.tag { display:inline-flex; align-self:flex-start; padding:10px 22px; border-radius:999px; background:var(--main); color:#FFFFFF; font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:34px; font-weight:700 }\n.tag.no { background:var(--sign-red) }\n.road { fill:color-mix(in srgb, var(--second) 82%, var(--ground)) } .lane { stroke:#FFFFFF; stroke-width:8; stroke-dasharray:40 34; fill:none } .lane.solid { stroke-dasharray:none; stroke:var(--accent) }\n.shoulder { fill:color-mix(in srgb, var(--second) 22%, var(--ground)) } .edgeline { fill:none; stroke:var(--accent); stroke-width:8 } .wline { fill:none; stroke:#FFFFFF; stroke-width:8 }\n.island { fill:color-mix(in srgb, var(--main) 28%, var(--ground)) } .mark { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-weight:700; fill:var(--main) }\n.minicard { padding:22px 24px; display:flex; flex-direction:column; gap:10px } .minicard p { margin:0; font-size:32px; line-height:1.2; font-weight:600 }\n",
 shared: function (kit) {
window.SG = {
  oct(cx, cy, r) { const p = []; for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + i * Math.PI / 4; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } return p.join(' '); },
  octWedge(cx, cy, r, i) { const a1 = Math.PI / 8 + i * Math.PI / 4, a2 = a1 + Math.PI / 4; return cx + ',' + cy + ' ' + (cx + r * Math.cos(a1)).toFixed(1) + ',' + (cy + r * Math.sin(a1)).toFixed(1) + ' ' + (cx + r * Math.cos(a2)).toFixed(1) + ',' + (cy + r * Math.sin(a2)).toFixed(1); },
  arrowUp(cx, cy, s) { return 'M' + cx + ' ' + (cy + s) + ' V' + (cy - s * 0.35) + ' M' + (cx - s * 0.55) + ' ' + (cy + s * 0.15) + ' L' + cx + ' ' + (cy - s) + ' L' + (cx + s * 0.55) + ' ' + (cy + s * 0.15); },
  wob(t, seed) { return Math.sin(t * 2.1 + seed) * 0.8 + Math.sin(t * 1.3 + seed * 2) * 0.5; },
  limit(n, r, k) {
    const f = (String(n).length > 2 ? 0.66 : 0.86) * r, rr = r * 0.84;
    return '<circle class="shadow" cx="' + (r * 0.06).toFixed(1) + '" cy="' + (r * 0.09).toFixed(1) + '" r="' + r + '"/>' +
      '<circle class="sw" r="' + r + '"/>' +
      '<circle class="' + k + '-ring" r="' + rr.toFixed(1) + '" fill="none" stroke-width="' + (r * 0.2).toFixed(1) + '" style="stroke:var(--sign-red)" stroke-dasharray="' + (2 * Math.PI * rr).toFixed(1) + '"/>' +
      '<text class="' + k + '-num" y="' + (f * 0.35).toFixed(1) + '" text-anchor="middle" style="font:700 ' + f.toFixed(0) + 'px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)">' + n + '</text>';
  },
  ringLen(r) { return 2 * Math.PI * r * 0.84; },
  car(fill) { return '<rect x="-62" y="-30" width="124" height="60" rx="18" style="fill:' + fill + '"/><rect x="12" y="-23" width="28" height="46" rx="7" fill="#FFFFFF" opacity=".85"/><rect x="-44" y="-23" width="22" height="46" rx="6" fill="#FFFFFF" opacity=".5"/>'; }
};

},
 mods: {
  "title": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('title', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="title-sign">' + SG.limit(60, 250, 'title') + '</g>' +
      '</svg>' +
      '<div class="words" style="left:150px;top:290px;width:960px">' +
      '<div class="kicker title-kick">Session 8 · Learners Coach</div>' +
      '<h1 class="line" style="font-size:118px">Speed, overtaking and lanes</h1>' +
      '<p class="sub title-sub">How fast you may go, and when you may pass</p>' +
      '</div></div>'));
    this.sign = kit.stage.querySelector('.title-sign');
    this.ring = kit.stage.querySelector('.title-ring');
    this.num = kit.stage.querySelector('.title-num').style;
    this.kick = kit.stage.querySelector('.title-kick').style;
    this.sub = kit.stage.querySelector('.title-sub').style;
    this.line = kit.stage.querySelector('.line');
    this.len = SG.ringLen(250);
  },
  render(t) {
    t = t / 1.3;
    this.kick.opacity = eo(seg(t, -0.6, -0.1));
    TextFx.fadeFromRight(this.line, t, -0.5);
    this.sub.opacity = eo(seg(t, 0.6, 1.2));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.6, 1.2))) + 'px)';
    const s = eob(seg(t, -0.4, 0.3), 1.7);
    this.ring.setAttribute('stroke-dashoffset', (this.len * (1 - eo(seg(t, 0.0, 0.9)))).toFixed(1));
    const n = eob(seg(t, 0.8, 1.3), 1.8);
    this.num.opacity = Math.min(1, Math.max(0, n) * 1.5);
    this.num.transform = 'scale(' + lerp(0.5, 1, Math.max(0, n)) + ')';
    const breathe = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(1460 ' + (540 - t * 1.5).toFixed(1) + ') scale(' + (Math.max(0, s) * breathe).toFixed(4) + ') rotate(' + (SG.wob(t, 1) * 0.6).toFixed(2) + ')');
  },
});

},
  "disc": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('disc', {
  init(kit) {
    const L = 2 * Math.PI * 92;
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="disc-glass"><path d="M1090 330 L1750 330 L1830 830 L1010 830 Z" stroke-width="34" stroke-linejoin="round" style="fill:color-mix(in srgb, var(--main) 14%, var(--ground));stroke:var(--second)"/>' +
      '<path d="M1140 380 L1300 380" stroke-width="10" stroke-linecap="round" style="stroke:#FFFFFF;opacity:.7"/></g>' +
      '<g class="disc-d"><circle class="shadow" cx="6" cy="10" r="100"/><circle class="sw disc-in" r="100"/>' +
      '<circle class="disc-ring" r="92" fill="none" stroke-width="12" style="stroke:var(--main)" stroke-dasharray="' + L.toFixed(1) + '"/>' +
      '<g class="disc-txt"><text y="6" text-anchor="middle" class="mark" style="font-size:64px">12</text>' +
      '<text y="48" text-anchor="middle" class="mark" style="font-size:28px;fill:var(--second)">MONTHS</text></g></g>' +
      '</svg>' +
      '<div class="words" style="left:150px;top:280px;width:780px">' +
      '<div class="tag disc-tag">Basics</div>' +
      '<h2 class="line">Licence disc</h2>' +
      '<p class="sub disc-sub">Every vehicle needs a clearly visible, valid licence disc.</p>' +
      '<p class="sub disc-sub2" style="color:var(--main);font-weight:700">Valid for 12 months from issue.</p>' +
      '</div></div>'));
    this.glass = kit.stage.querySelector('.disc-glass');
    this.d = kit.stage.querySelector('.disc-d');
    this.ring = kit.stage.querySelector('.disc-ring');
    this.txt = kit.stage.querySelector('.disc-txt').style;
    this.tag = kit.stage.querySelector('.disc-tag').style;
    this.sub = kit.stage.querySelector('.disc-sub').style;
    this.sub2 = kit.stage.querySelector('.disc-sub2').style;
    this.line = kit.stage.querySelector('.line');
    this.L = L;
  },
  render(t) {
    this.tag.opacity = eo(seg(t, -0.3, 0.3));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, -0.3, 0.5))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 0.3);
    this.sub.opacity = eo(seg(t, 1.4, 2.4));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.4, 2.4))) + 'px)';
    this.sub2.opacity = eo(seg(t, 3.6, 4.6));
    this.sub2.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 3.6, 4.6))) + 'px)';
    const g = eo(seg(t, -0.4, 0.8));
    this.glass.style.opacity = g;
    this.glass.setAttribute('transform', 'translate(' + lerp(60, 0, g).toFixed(1) + ' ' + (-t * 1.3).toFixed(1) + ')');
    const s = eob(seg(t, 1.0, 2.0), 1.7);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.d.setAttribute('transform', 'translate(1200 ' + (700 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    this.ring.setAttribute('stroke-dashoffset', (this.L * (1 - eo(seg(t, 1.6, 2.6)))).toFixed(1));
    const n = eob(seg(t, 3.6, 4.4), 1.8);
    this.txt.opacity = Math.min(1, Math.max(0, n) * 1.5);
    this.txt.transform = 'scale(' + lerp(0.5, 1, Math.max(0, n)) + ')';
  },
});

},
  "gap": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('gap', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="gap-road"><rect class="shoulder" x="0" y="600" width="1920" height="60"/><rect class="road" x="0" y="660" width="1920" height="260"/>' +
      '<line class="edgeline" x1="0" y1="676" x2="1920" y2="676"/><line class="edgeline" x1="0" y1="904" x2="1920" y2="904"/>' +
      '<line class="lane" x1="0" y1="790" x2="1920" y2="790"/>' +
      '<rect x="988" y="560" width="24" height="100" rx="8" style="fill:var(--accent);stroke:var(--second);stroke-width:3"/></g>' +
      '<g class="gap-lead">' + SG.car('var(--second)') + '</g>' +
      '<g class="gap-you">' + SG.car('var(--main)') + '</g>' +
      '<g class="gap-n"><circle r="34" style="fill:var(--accent)" stroke="#FFFFFF" stroke-width="5"/><text y="13" text-anchor="middle" class="mark" style="font-size:38px;fill:var(--second)">1</text></g>' +
      '<g class="gap-n"><circle r="34" style="fill:var(--accent)" stroke="#FFFFFF" stroke-width="5"/><text y="13" text-anchor="middle" class="mark" style="font-size:38px;fill:var(--second)">2</text></g>' +
      '<g class="gap-brk"><path d="M0 -20 V20 M0 0 H176 M176 -20 V20" fill="none" stroke-width="8" stroke-linecap="round" style="stroke:var(--accent)" stroke-dasharray="256"/>' +
      '<text class="mark gap-lab" x="88" y="-46" text-anchor="middle" style="font-size:44px;paint-order:stroke;stroke:#FFFFFF;stroke-width:10">2 seconds</text></g>' +
      '</svg>' +
      '<div class="words" style="left:150px;top:100px;width:1400px">' +
      '<div class="tag gap-tag">Basics</div>' +
      '<h2 class="line">Keep a 2-second gap</h2>' +
      '<p class="sub gap-sub">At least 2 seconds in a car or on a motorcycle, 3 in a heavy vehicle. Increase it in rain, on slippery surfaces, in poor visibility, with a heavy load or when someone follows too closely.</p>' +
      '</div></div>'));
    this.lead = kit.stage.querySelector('.gap-lead');
    this.you = kit.stage.querySelector('.gap-you');
    this.n = [...kit.stage.querySelectorAll('.gap-n')];
    this.brk = kit.stage.querySelector('.gap-brk');
    this.brkP = this.brk.querySelector('path');
    this.lab = kit.stage.querySelector('.gap-lab').style;
    this.tag = kit.stage.querySelector('.gap-tag').style;
    this.sub = kit.stage.querySelector('.gap-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.tag.opacity = eo(seg(t, 0.2, 0.6));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.2, 0.7))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 0.4);
    this.sub.opacity = eo(seg(t, 1.3, 1.9));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.3, 1.9))) + 'px)';
    const xl = 938 + 150 * (t - 4), xy = xl - 300;
    this.lead.setAttribute('transform', 'translate(' + xl.toFixed(1) + ' 733)');
    this.you.setAttribute('transform', 'translate(' + xy.toFixed(1) + ' 733)');
    for (let i = 0; i < 2; i++) {
      const p = eob(seg(t, 5 + i, 5.4 + i), 1.8);
      this.n[i].setAttribute('transform', 'translate(' + (960 + i * 80) + ' ' + (522 - t * 1.2).toFixed(1) + ') scale(' + Math.max(0, p).toFixed(3) + ')');
    }
    this.brk.setAttribute('transform', 'translate(' + (xy + 62).toFixed(1) + ' 733)');
    this.brk.style.opacity = eo(seg(t, 6.1, 6.3));
    this.brkP.setAttribute('stroke-dashoffset', (256 * (1 - eio(seg(t, 6.1, 6.8)))).toFixed(1));
    const l = eob(seg(t, 6.6, 7.1), 1.8);
    this.lab.opacity = Math.min(1, Math.max(0, l) * 1.4);
  },
});

},
  "mirrors": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('mirrors', {
  init(kit) {
    const icons = [
      '<g transform="translate(210 75)"><rect x="-120" y="-50" width="240" height="100" rx="40" class="sk"/><rect x="-104" y="-36" width="208" height="72" rx="30" style="fill:color-mix(in srgb, var(--main) 35%, var(--ground))"/>' +
      '<rect x="-8" y="-80" width="16" height="32" rx="6" class="sk"/></g>',
      '<g transform="translate(210 75)"><circle r="66" class="sw" style="stroke:var(--second);stroke-opacity:.2;stroke-width:3"/>' +
      '<circle class="mirrors-ring" r="58" fill="none" stroke-width="12" style="stroke:var(--accent)" stroke-dasharray="364.4"/>' +
      '<text y="11" text-anchor="middle" class="mark" style="font-size:30px">5 to 8 s</text></g>',
      '<g transform="translate(210 80)"><circle cy="-6" r="44" style="fill:var(--main)"/><rect x="-60" y="34" width="120" height="50" rx="24" style="fill:var(--main)"/>' +
      '<path d="M-90 -40 A100 100 0 0 0 -90 40" fill="none" stroke-width="10" stroke-linecap="round" style="stroke:var(--accent)"/>' +
      '<path d="M-104 26 L-90 42 L-72 30" fill="none" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--accent)"/></g>'
    ];
    const labs = ['Adjust your mirrors only while stationary.', 'Glance in all mirrors every 5 to 8 seconds, and before you change direction.', 'Before changing direction, turn your head to check the blind spots.'];
    let cards = '';
    for (let i = 0; i < 3; i++) {
      cards += '<div class="card minicard mirrors-c" style="left:' + (150 + i * 545) + 'px;top:430px;width:452px;min-height:360px">' +
        '<svg viewBox="0 0 420 150" width="420" height="150" style="overflow:visible">' + icons[i] + '</svg><p>' + labs[i] + '</p></div>';
    }
    kit.stage.append(kit.h('<div class="ground">' + cards +
      '<div class="words" style="left:150px;top:130px;width:1600px">' +
      '<div class="tag mirrors-tag">Basics</div>' +
      '<h2 class="line">Mirrors and blind spots</h2>' +
      '</div></div>'));
    this.c = [...kit.stage.querySelectorAll('.mirrors-c')];
    this.ring = kit.stage.querySelector('.mirrors-ring');
    this.tag = kit.stage.querySelector('.mirrors-tag').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    this.tag.opacity = eo(seg(t, -0.3, 0.3));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, -0.3, 0.5))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 0.3);
    for (let i = 0; i < 3; i++) {
      const st = 1.6 + i * 1.9;
      const p = eob(seg(t, st, st + 1.0), 1.6);
      const br = 1 + 0.012 * Math.sin((t + i * 0.7) * 2 * Math.PI / 3.2);
      this.c[i].style.opacity = Math.min(1, Math.max(0, p) * 1.5);
      this.c[i].style.transform = 'translate(' + lerp(60, 0, Math.min(1, Math.max(0, p))).toFixed(1) + 'px ' + (-t * 1.3).toFixed(1) + 'px) scale(' + (lerp(0.85, 1, Math.max(0, p)) * br).toFixed(4) + ')';
    }
    this.ring.setAttribute('stroke-dashoffset', (364.4 * (1 - eio(seg(t, 3.9, 5.2)))).toFixed(1));
  },
});

},
  "limits": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const LM = [{ n: 60, x: 460, tag: 'Urban areas' }, { n: 100, x: 960, tag: 'Outside urban areas' }, { n: 120, x: 1460, tag: 'Freeways' }];
kit.scene('limits', {
  init(kit) {
    let signs = '', labs = '';
    LM.forEach(function (s) {
      signs += '<g class="limits-s">' + SG.limit(s.n, 170, 'limits') + '</g>';
      labs += '<div class="words limits-l" style="left:' + (s.x - 260) + 'px;top:700px;width:520px;text-align:center;align-items:center">' +
        '<div class="tag" style="align-self:center">' + s.tag + '</div><p class="sub">' + s.n + ' km/h</p></div>';
    });
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' + signs + '</svg>' +
      '<div class="words" style="left:0;top:70px;width:1920px;text-align:center">' +
      '<h2 class="line limits-h">General speed limits</h2></div>' + labs +
      '<div class="words limits-foot" style="left:0;top:950px;width:1920px">' +
      '<p class="kicker" style="justify-content:center">A road sign always overrides these</p></div>' +
      '</div>'));
    this.s = [...kit.stage.querySelectorAll('.limits-s')];
    this.r = [...kit.stage.querySelectorAll('.limits-ring')];
    this.n = [...kit.stage.querySelectorAll('.limits-num')];
    this.l = [...kit.stage.querySelectorAll('.limits-l')];
    this.h = kit.stage.querySelector('.limits-h');
    this.foot = kit.stage.querySelector('.limits-foot').style;
    this.len = SG.ringLen(170);
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, -0.3);
    for (let i = 0; i < 3; i++) {
      const st = 0.3 + i * 1.3;
      const s = eob(seg(t, st, st + 0.6), 1.6);
      const br = 1 + 0.012 * Math.sin((t + i * 0.8) * 2 * Math.PI / 3.2);
      this.s[i].setAttribute('transform', 'translate(' + LM[i].x + ' ' + (450 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
      this.r[i].setAttribute('stroke-dashoffset', (this.len * (1 - eo(seg(t, st + 0.3, st + 0.9)))).toFixed(1));
      const n = eob(seg(t, st + 0.8, st + 1.2), 1.8);
      this.n[i].style.opacity = Math.min(1, Math.max(0, n) * 1.5);
      this.n[i].style.transform = 'scale(' + lerp(0.5, 1, Math.max(0, n)) + ')';
      const l = eo(seg(t, st + 1.0, st + 1.6));
      this.l[i].style.opacity = l;
      this.l[i].style.transform = 'translateY(' + lerp(24, 0, l) + 'px)';
    }
    const f = eo(seg(t, 5.6, 6.3));
    this.foot.opacity = f;
    this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});

},
  "heavy": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('heavy', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="heavy-sign">' + SG.limit(80, 200, 'heavy') + '</g>' +
      '<g class="heavy-road"><rect class="shoulder" x="0" y="800" width="1920" height="40"/><rect class="road" x="0" y="840" width="1920" height="240"/>' +
      '<line class="edgeline" x1="0" y1="856" x2="1920" y2="856"/><line class="lane" x1="0" y1="964" x2="1920" y2="964"/>' +
      '<g class="heavy-truck"><rect x="-220" y="-38" width="250" height="76" rx="10" style="fill:var(--main)"/>' +
      '<rect x="38" y="-34" width="80" height="68" rx="16" class="sk"/><rect x="86" y="-26" width="22" height="52" rx="6" fill="#FFFFFF" opacity=".85"/></g></g>' +
      '</svg>' +
      '<div class="words" style="left:150px;top:140px;width:880px">' +
      '<div class="tag heavy-tag">Vehicle limits</div>' +
      '<h2 class="line">80 for heavy goods</h2>' +
      '<p class="sub heavy-sub">Goods vehicles over 9 000 kg outside urban areas, and a breakdown vehicle that is towing.</p>' +
      '<p class="sub heavy-bus" style="color:var(--main);font-weight:700">Buses and minibuses: 100 km/h.</p>' +
      '</div></div>'));
    this.sign = kit.stage.querySelector('.heavy-sign');
    this.ring = kit.stage.querySelector('.heavy-ring');
    this.num = kit.stage.querySelector('.heavy-num').style;
    this.truck = kit.stage.querySelector('.heavy-truck');
    this.tag = kit.stage.querySelector('.heavy-tag').style;
    this.sub = kit.stage.querySelector('.heavy-sub').style;
    this.bus = kit.stage.querySelector('.heavy-bus').style;
    this.line = kit.stage.querySelector('.line');
    this.len = SG.ringLen(200);
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(1440 ' + (420 - t * 1.4).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    this.ring.setAttribute('stroke-dashoffset', (this.len * (1 - eo(seg(t, 0.3, 1.0)))).toFixed(1));
    const n = eob(seg(t, 0.9, 1.3), 1.8);
    this.num.opacity = Math.min(1, Math.max(0, n) * 1.5);
    this.num.transform = 'scale(' + lerp(0.5, 1, Math.max(0, n)) + ')';
    this.tag.opacity = eo(seg(t, 1.0, 1.4));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.0, 1.5))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 1.2);
    this.sub.opacity = eo(seg(t, 2.0, 2.6));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 2.0, 2.6))) + 'px)';
    this.bus.opacity = eo(seg(t, 4.2, 4.8));
    this.bus.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 4.2, 4.8))) + 'px)';
    this.truck.setAttribute('transform', 'translate(' + (-140 + 150 * t).toFixed(1) + ' 910)');
  },
});

},
  "divide": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('divide', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="divide-road"><rect class="road" x="0" y="600" width="1920" height="360"/>' +
      '<line class="edgeline" x1="0" y1="618" x2="1920" y2="618"/><line class="edgeline" x1="0" y1="942" x2="1920" y2="942"/>' +
      '<line class="divide-solid" x1="0" y1="780" x2="1000" y2="780" stroke-width="10" style="stroke:#FFFFFF" stroke-dasharray="1000"/>' +
      '<line class="lane divide-brk" x1="1000" y1="780" x2="1920" y2="780"/>' +
      '<text class="mark divide-ls" x="500" y="575" text-anchor="middle" style="font-size:44px">Solid line: never cross</text>' +
      '<text class="mark divide-lb" x="1460" y="575" text-anchor="middle" style="font-size:44px">Broken line: overtake or U-turn</text></g>' +
      '<g class="divide-slow">' + SG.car('var(--second)') + '</g>' +
      '<g class="divide-you">' + SG.car('var(--main)') + '</g>' +
      '</svg>' +
      '<div class="words" style="left:150px;top:100px;width:1500px">' +
      '<div class="tag divide-tag">Divided roads</div>' +
      '<h2 class="line">Keep left of the division</h2>' +
      '<p class="sub divide-sub">Cross it only at an opening made for it. Never drive across a solid dividing line.</p>' +
      '</div></div>'));
    this.slow = kit.stage.querySelector('.divide-slow');
    this.you = kit.stage.querySelector('.divide-you');
    this.solid = kit.stage.querySelector('.divide-solid');
    this.brk = kit.stage.querySelector('.divide-brk').style;
    this.ls = kit.stage.querySelector('.divide-ls').style;
    this.lb = kit.stage.querySelector('.divide-lb').style;
    this.tag = kit.stage.querySelector('.divide-tag').style;
    this.sub = kit.stage.querySelector('.divide-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.tag.opacity = eo(seg(t, -0.3, 0.2));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, -0.3, 0.3))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 0.2);
    this.sub.opacity = eo(seg(t, 1.1, 1.7));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.1, 1.7))) + 'px)';
    this.solid.setAttribute('stroke-dashoffset', (1000 * (1 - eio(seg(t, 0.4, 1.8)))).toFixed(1));
    this.brk.opacity = eo(seg(t, 1.6, 2.2));
    const a = eob(seg(t, 2.2, 2.7), 1.6), b = eob(seg(t, 4.6, 5.1), 1.6);
    this.ls.opacity = Math.min(1, Math.max(0, a) * 1.4);
    this.ls.transform = 'translateY(' + lerp(20, 0, Math.min(1, Math.max(0, a))) + 'px)';
    this.lb.opacity = Math.min(1, Math.max(0, b) * 1.4);
    this.lb.transform = 'translateY(' + lerp(20, 0, Math.min(1, Math.max(0, b))) + 'px)';
    this.slow.setAttribute('transform', 'translate(' + (766 + 90 * t).toFixed(1) + ' 699)');
    const x = lerp(-120, 2100, seg(t, 2.6, 9.0));
    const out = eio(seg(t, 5.9, 6.5)) - eio(seg(t, 7.8, 8.4));
    const rot = 12 * (Math.sin(Math.PI * seg(t, 5.9, 6.5)) - Math.sin(Math.PI * seg(t, 7.8, 8.4)));
    this.you.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + (699 + 162 * out).toFixed(1) + ') rotate(' + rot.toFixed(2) + ')');
  },
});

},
  "nopass": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('nopass', {
  init(kit) {
    const mini = function (x, fill) { return '<g transform="translate(' + x + ' 0) scale(0.55)">' + SG.car(fill) + '</g>'; };
    const icons = [
      '<g transform="translate(176 75)"><circle r="68" class="sw" style="stroke:var(--second);stroke-opacity:.2;stroke-width:3"/><circle r="56" fill="none" stroke-width="16" style="stroke:var(--sign-red)"/>' +
      '<rect x="-34" y="-14" width="28" height="30" rx="7" class="sk"/><rect x="6" y="-14" width="28" height="30" rx="7" class="sr"/></g>',
      '<rect class="road" x="0" y="35" width="352" height="80"/><g style="fill:#FFFFFF"><rect x="210" y="40" width="12" height="70"/><rect x="232" y="40" width="12" height="70"/><rect x="254" y="40" width="12" height="70"/><rect x="276" y="40" width="12" height="70"/></g>' +
      '<g transform="translate(0 75)">' + mini(160, 'var(--second)') + mini(70, 'var(--main)') + '</g>',
      '<rect class="shoulder" x="0" y="20" width="352" height="40"/><rect class="road" x="0" y="60" width="352" height="80"/><line class="edgeline" x1="0" y1="66" x2="352" y2="66"/>' +
      '<g transform="translate(0 40)">' + mini(180, 'var(--main)') + '</g>',
      '<path d="M0 130 C120 130 140 30 352 30" fill="none" stroke-width="56" style="stroke:color-mix(in srgb, var(--second) 82%, var(--ground))"/>' +
      '<path d="M0 130 C120 130 140 30 352 30" fill="none" stroke-width="4" stroke-dasharray="16 14" style="stroke:#FFFFFF"/>'
    ];
    const labs = ['Where a sign or marking forbids it', 'Past a vehicle stopped at a pedestrian crossing', 'On the shoulder', 'On a blind rise or curve'];
    let cards = '';
    for (let i = 0; i < 4; i++) {
      cards += '<div class="card minicard nopass-c" style="left:' + (940 + (i % 2) * 460) + 'px;top:' + (160 + Math.floor(i / 2) * 390) + 'px;width:380px">' +
        '<svg viewBox="0 0 352 150" width="352" height="150" style="overflow:visible">' + icons[i] + '</svg><p>' + labs[i] + '</p></div>';
    }
    kit.stage.append(kit.h('<div class="ground">' + cards +
      '<div class="words" style="left:150px;top:300px;width:720px">' +
      '<div class="tag no nopass-tag">Overtaking</div>' +
      '<h2 class="line">Never overtake here</h2>' +
      '<p class="sub nopass-sub">Four places where passing is never allowed.</p>' +
      '</div></div>'));
    this.c = [...kit.stage.querySelectorAll('.nopass-c')];
    this.tag = kit.stage.querySelector('.nopass-tag').style;
    this.sub = kit.stage.querySelector('.nopass-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.tag.opacity = eo(seg(t, -0.3, 0.2));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, -0.3, 0.3))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 0.2);
    this.sub.opacity = eo(seg(t, 1.0, 1.6));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.0, 1.6))) + 'px)';
    for (let i = 0; i < 4; i++) {
      const st = 1.6 + i * 1.1;
      const p = eob(seg(t, st, st + 0.6), 1.6);
      const br = 1 + 0.012 * Math.sin((t + i * 0.7) * 2 * Math.PI / 3.2);
      this.c[i].style.opacity = Math.min(1, Math.max(0, p) * 1.5);
      this.c[i].style.transform = 'translate(' + lerp(60, 0, Math.min(1, Math.max(0, p))).toFixed(1) + 'px ' + (-t * 1.3).toFixed(1) + 'px) scale(' + (lerp(0.85, 1, Math.max(0, p)) * br).toFixed(4) + ')';
    }
  },
});

},
  "left": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('left', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="left-road"><rect class="road" x="0" y="540" width="1920" height="420"/><rect class="road" x="1220" y="940" width="160" height="160"/>' +
      '<line class="edgeline left-edge" x1="0" y1="560" x2="1920" y2="560"/><line class="edgeline" x1="0" y1="940" x2="1210" y2="940"/><line class="edgeline" x1="1390" y1="940" x2="1920" y2="940"/>' +
      '<line class="lane" x1="0" y1="750" x2="1920" y2="750"/></g>' +
      '<g class="left-turn"><g class="left-tb">' + SG.car('var(--second)') + '<circle class="left-ind" cx="56" cy="26" r="9" style="fill:var(--accent)"/></g></g>' +
      '<g class="left-you">' + SG.car('var(--main)') + '</g>' +
      '</svg>' +
      '<div class="words" style="left:150px;top:90px;width:1620px">' +
      '<div class="tag left-tag">Overtaking</div>' +
      '<h2 class="line">Passing on the left</h2>' +
      '<p class="sub left-sub">Only if safe and: the car ahead is turning right, it is a one-way road, there are two or more lanes your way, or a traffic officer tells you to. Never cross the yellow edge line.</p>' +
      '</div></div>'));
    this.turn = kit.stage.querySelector('.left-turn');
    this.tb = kit.stage.querySelector('.left-tb');
    this.ind = kit.stage.querySelector('.left-ind').style;
    this.you = kit.stage.querySelector('.left-you');
    this.edge = kit.stage.querySelector('.left-edge').style;
    this.tag = kit.stage.querySelector('.left-tag').style;
    this.sub = kit.stage.querySelector('.left-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.tag.opacity = eo(seg(t, -0.3, 0.2));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, -0.3, 0.3))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 0.2);
    this.sub.opacity = eo(seg(t, 1.1, 1.7));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.1, 1.7))) + 'px)';
    const bx = lerp(560, 1300, eo(seg(t, 0, 3.4)));
    const by = 655 + 50 * eio(seg(t, 0.8, 2.0)) + 460 * ei(seg(t, 7.2, 9.2));
    this.turn.setAttribute('transform', 'translate(' + bx.toFixed(1) + ' ' + by.toFixed(1) + ')');
    this.tb.setAttribute('transform', 'rotate(' + (90 * eio(seg(t, 7.0, 7.9))).toFixed(2) + ')');
    this.ind.opacity = (t > 0.6 && t < 7.9 && Math.floor(t * 3) % 2 === 0) ? 1 : 0.15;
    const x = lerp(-150, 2100, seg(t, 2.0, 8.6));
    const y = 655 - 40 * eio(seg(t, 4.4, 5.0)) + 40 * eio(seg(t, 7.2, 7.8));
    this.you.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ')');
    this.edge.strokeWidth = 8 + 6 * Math.sin(Math.PI * seg(t, 5.2, 7.2));
  },
});

},
  "freeway": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('freeway', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="freeway-road"><rect class="road" x="0" y="560" width="1920" height="340"/>' +
      '<line class="edgeline" x1="0" y1="578" x2="1920" y2="578"/><line class="wline" x1="0" y1="882" x2="1920" y2="882"/>' +
      '<line class="lane" x1="0" y1="730" x2="1920" y2="730"/>' +
      '<text class="mark freeway-lr" x="1700" y="950" text-anchor="middle" style="font-size:36px">Right lane</text></g>' +
      '<g class="freeway-fast">' + SG.car('var(--second)') + '</g>' +
      '<g class="freeway-you">' + SG.car('var(--main)') + '</g>' +
      '</svg>' +
      '<div class="words" style="left:150px;top:100px;width:1600px">' +
      '<div class="tag freeway-tag">Freeways</div>' +
      '<h2 class="line">Do not hog the right lane</h2>' +
      '<p class="sub freeway-sub">When being overtaken, move safely left and do not speed up.</p>' +
      '</div></div>'));
    this.fast = kit.stage.querySelector('.freeway-fast');
    this.you = kit.stage.querySelector('.freeway-you');
    this.lr = kit.stage.querySelector('.freeway-lr').style;
    this.tag = kit.stage.querySelector('.freeway-tag').style;
    this.sub = kit.stage.querySelector('.freeway-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    this.tag.opacity = eo(seg(t, -0.3, 0.3));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, -0.3, 0.5))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 0.3);
    this.sub.opacity = eo(seg(t, 1.6, 2.6));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.6, 2.6))) + 'px)';
    this.lr.opacity = eo(seg(t, 0.8, 1.6)) * (1 - eo(seg(t, 6.5, 7.3)));
    const x = 600 + 50 * t;
    const m = eio(seg(t, 3.6, 4.8));
    const rot = -10 * Math.sin(Math.PI * seg(t, 3.6, 4.8));
    this.you.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + lerp(806, 654, m).toFixed(1) + ') rotate(' + rot.toFixed(2) + ')');
    this.fast.setAttribute('transform', 'translate(' + lerp(-200, 2100, seg(t, 3.2, 9.6)).toFixed(1) + ' 806)');
  },
});

},
  "noshoulder": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('noshoulder', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="noshoulder-road"><rect class="shoulder" x="0" y="480" width="1920" height="80"/><rect class="shoulder" x="0" y="860" width="1920" height="80"/>' +
      '<rect class="road" x="0" y="560" width="1920" height="300"/>' +
      '<line class="edgeline" x1="0" y1="568" x2="1920" y2="568"/><line class="wline" x1="0" y1="852" x2="1920" y2="852"/>' +
      '<line class="lane" x1="0" y1="710" x2="1920" y2="710"/></g>' +
      '<rect class="noshoulder-a" x="8" y="484" width="1904" height="72" rx="10" fill="none" stroke-width="8" style="stroke:var(--sign-red)" stroke-dasharray="3952"/>' +
      '<rect class="noshoulder-b" x="8" y="864" width="1904" height="72" rx="10" fill="none" stroke-width="8" style="stroke:var(--sign-red)" stroke-dasharray="3952"/>' +
      '<text class="mark noshoulder-la" x="1400" y="533" text-anchor="middle" style="font-size:36px;fill:var(--sign-red)">Left of the yellow line</text>' +
      '<text class="mark noshoulder-lb" x="1400" y="913" text-anchor="middle" style="font-size:36px;fill:var(--sign-red)">Right of the white line</text>' +
      '<g class="noshoulder-car">' + SG.car('var(--main)') + '</g>' +
      '</svg>' +
      '<div class="words" style="left:150px;top:90px;width:1600px">' +
      '<div class="tag noshoulder-tag">Shoulders</div>' +
      '<h2 class="line">Stay off the shoulder</h2>' +
      '<p class="sub noshoulder-sub">Do not drive left of the yellow line or right of the white line.</p>' +
      '</div></div>'));
    this.a = kit.stage.querySelector('.noshoulder-a');
    this.b = kit.stage.querySelector('.noshoulder-b');
    this.la = kit.stage.querySelector('.noshoulder-la').style;
    this.lb = kit.stage.querySelector('.noshoulder-lb').style;
    this.car = kit.stage.querySelector('.noshoulder-car');
    this.tag = kit.stage.querySelector('.noshoulder-tag').style;
    this.sub = kit.stage.querySelector('.noshoulder-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    this.tag.opacity = eo(seg(t, -0.3, 0.3));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, -0.3, 0.5))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 0.3);
    this.sub.opacity = eo(seg(t, 1.4, 2.4));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.4, 2.4))) + 'px)';
    this.a.setAttribute('stroke-dashoffset', (3952 * (1 - eio(seg(t, 2.4, 3.6)))).toFixed(1));
    this.b.setAttribute('stroke-dashoffset', (3952 * (1 - eio(seg(t, 4.2, 5.4)))).toFixed(1));
    const a = eob(seg(t, 3.2, 4.0), 1.6), b = eob(seg(t, 5.0, 5.8), 1.6);
    this.la.opacity = Math.min(1, Math.max(0, a) * 1.4);
    this.la.transform = 'translateY(' + lerp(16, 0, Math.min(1, Math.max(0, a))) + 'px)';
    this.lb.opacity = Math.min(1, Math.max(0, b) * 1.4);
    this.lb.transform = 'translateY(' + lerp(16, 0, Math.min(1, Math.max(0, b))) + 'px)';
    this.car.setAttribute('transform', 'translate(' + (200 + 110 * t).toFixed(1) + ' 638)');
  },
});

},
  "shoulder": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('shoulder', {
  init(kit) {
    const tags = ['Single-lane road', 'Sunrise to sunset', 'Safe', 'See 150 m ahead'];
    let row = '';
    tags.forEach(function (s) { row += '<div class="tag shoulder-t">' + s + '</div>'; });
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="shoulder-road"><rect class="shoulder" x="0" y="500" width="1920" height="90"/><rect class="road" x="0" y="590" width="1920" height="320"/>' +
      '<line class="edgeline" x1="0" y1="590" x2="1920" y2="590"/><line class="edgeline" x1="0" y1="900" x2="1920" y2="900"/>' +
      '<line class="lane" x1="0" y1="745" x2="1920" y2="745"/>' +
      '<text class="mark shoulder-sl" x="1700" y="560" text-anchor="middle" style="font-size:36px">Shoulder</text></g>' +
      '<g class="shoulder-dim"><path d="M0 -18 V18 M0 0 H600 M600 -18 V18" fill="none" stroke-width="6" stroke-linecap="round" style="stroke:var(--accent)" stroke-dasharray="672"/>' +
      '<text class="mark shoulder-150" x="300" y="-22" text-anchor="middle" style="font-size:40px;paint-order:stroke;stroke:#FFFFFF;stroke-width:10">150 m</text></g>' +
      '<g class="shoulder-fast">' + SG.car('var(--second)') + '</g>' +
      '<g class="shoulder-you">' + SG.car('var(--main)') + '</g>' +
      '</svg>' +
      '<div class="words" style="left:150px;top:80px;width:1620px">' +
      '<div class="tag shoulder-tag">Yellow-line shoulder</div>' +
      '<h2 class="line">Only to let someone pass</h2>' +
      '<div class="shoulder-row" style="display:flex;gap:18px;flex-wrap:wrap">' + row + '</div>' +
      '</div>' +
      '<div class="words shoulder-foot" style="left:150px;top:950px;width:1620px">' +
      '<p class="sub" style="color:var(--second);font-weight:700">Being overtaken: move safely left and do not speed up.</p></div>' +
      '</div>'));
    this.t = [...kit.stage.querySelectorAll('.shoulder-t')];
    this.you = kit.stage.querySelector('.shoulder-you');
    this.fast = kit.stage.querySelector('.shoulder-fast');
    this.dim = kit.stage.querySelector('.shoulder-dim');
    this.dimP = this.dim.querySelector('path');
    this.sl = kit.stage.querySelector('.shoulder-sl').style;
    this.tag = kit.stage.querySelector('.shoulder-tag').style;
    this.foot = kit.stage.querySelector('.shoulder-foot').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.tag.opacity = eo(seg(t, -0.3, 0.2));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, -0.3, 0.3))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 0.2);
    this.sl.opacity = eo(seg(t, 0.8, 1.3));
    for (let i = 0; i < 4; i++) {
      const p = eob(seg(t, 1.4 + i * 0.5, 1.9 + i * 0.5), 1.8);
      this.t[i].style.opacity = Math.min(1, Math.max(0, p) * 1.5);
      this.t[i].style.transform = 'translateX(' + lerp(26, 0, Math.min(1, Math.max(0, p))).toFixed(1) + 'px) scale(' + lerp(0.8, 1, Math.max(0, p)).toFixed(3) + ')';
    }
    const x = 500 + 60 * t;
    const off = eio(seg(t, 3.2, 4.0)) - eio(seg(t, 6.6, 7.4));
    const rot = -10 * (Math.sin(Math.PI * seg(t, 3.2, 4.0)) - Math.sin(Math.PI * seg(t, 6.6, 7.4)));
    const y = 668 - 123 * off;
    this.you.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ') rotate(' + rot.toFixed(2) + ')');
    this.fast.setAttribute('transform', 'translate(' + lerp(-200, 2100, seg(t, 2.6, 9.6)).toFixed(1) + ' 668)');
    this.dim.setAttribute('transform', 'translate(' + (x + 80).toFixed(1) + ' ' + y.toFixed(1) + ')');
    this.dim.style.opacity = eo(seg(t, 4.0, 4.2)) * (1 - eo(seg(t, 6.2, 6.6)));
    this.dimP.setAttribute('stroke-dashoffset', (672 * (1 - eio(seg(t, 4.0, 4.8)))).toFixed(1));
    const f = eo(seg(t, 7.4, 8.0));
    this.foot.opacity = f;
    this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});

},
  "buslane": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('buslane', {
  init(kit) {
    const clock = function (h, m) {
      const ah = (h % 12 + m / 60) * 30 * Math.PI / 180, am = m * 6 * Math.PI / 180;
      return '<circle class="sw" r="70" style="stroke:var(--second);stroke-opacity:.2;stroke-width:3"/>' +
        '<circle class="buslane-ring" r="62" fill="none" stroke-width="10" style="stroke:var(--main)" stroke-dasharray="389.6"/>' +
        '<g class="buslane-hands"><line x1="0" y1="0" x2="' + (34 * Math.sin(ah)).toFixed(1) + '" y2="' + (-34 * Math.cos(ah)).toFixed(1) + '" stroke-width="10" stroke-linecap="round" style="stroke:var(--second)"/>' +
        '<line x1="0" y1="0" x2="' + (50 * Math.sin(am)).toFixed(1) + '" y2="' + (-50 * Math.cos(am)).toFixed(1) + '" stroke-width="7" stroke-linecap="round" style="stroke:var(--second)"/></g>';
    };
    const card = function (i, h, m, txt) {
      return '<div class="card buslane-c" style="left:' + (150 + i * 690) + 'px;top:460px;width:640px;height:200px">' +
        '<svg viewBox="0 0 200 200" width="200" height="200" style="position:absolute;left:10px;top:0;overflow:visible"><g transform="translate(100 100)">' + clock(h, m) + '</g></svg>' +
        '<div class="line" style="position:absolute;left:220px;top:52px;font-size:64px;white-space:nowrap">' + txt + '</div></div>';
    };
    kit.stage.append(kit.h('<div class="ground">' + card(0, 6, 0, '06:00 to 09:00') + card(1, 16, 0, '16:00 to 18:30') +
      '<div class="words" style="left:150px;top:110px;width:1600px">' +
      '<div class="tag no buslane-tag">Lanes</div>' +
      '<h2 class="line buslane-h">Public transport lanes</h2>' +
      '<p class="sub buslane-sub">Do not use a dedicated public transport lane at these times:</p></div>' +
      '<div class="words buslane-foot" style="left:150px;top:760px;width:1600px">' +
      '<p class="kicker">Monday to Friday, except public holidays</p></div>' +
      '</div>'));
    this.c = [...kit.stage.querySelectorAll('.buslane-c')];
    this.r = [...kit.stage.querySelectorAll('.buslane-ring')];
    this.hd = [...kit.stage.querySelectorAll('.buslane-hands')];
    this.tag = kit.stage.querySelector('.buslane-tag').style;
    this.h = kit.stage.querySelector('.buslane-h');
    this.sub = kit.stage.querySelector('.buslane-sub').style;
    this.foot = kit.stage.querySelector('.buslane-foot').style;
  },
  render(t) {
    this.tag.opacity = eo(seg(t, -0.3, 0.3));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, -0.3, 0.5))) + 'px)';
    TextFx.fadeFromRight(this.h, t, 0.3);
    this.sub.opacity = eo(seg(t, 1.4, 2.4));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.4, 2.4))) + 'px)';
    for (let i = 0; i < 2; i++) {
      const st = 2.4 + i * 1.8;
      const p = eob(seg(t, st, st + 1.0), 1.6);
      const br = 1 + 0.012 * Math.sin((t + i * 0.9) * 2 * Math.PI / 3.2);
      this.c[i].style.opacity = Math.min(1, Math.max(0, p) * 1.5);
      this.c[i].style.transform = 'translate(' + lerp(60, 0, Math.min(1, Math.max(0, p))).toFixed(1) + 'px ' + (-t * 1.3).toFixed(1) + 'px) scale(' + (lerp(0.85, 1, Math.max(0, p)) * br).toFixed(4) + ')';
      this.r[i].setAttribute('stroke-dashoffset', (389.6 * (1 - eo(seg(t, st + 0.4, st + 1.3)))).toFixed(1));
      this.hd[i].style.opacity = eo(seg(t, st + 1.0, st + 1.5));
    }
    const f = eo(seg(t, 6.2, 7.2));
    this.foot.opacity = f;
    this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});

},
  "circles": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('circles', {
  init(kit) {
    const arms = function (w, L) { return '<rect class="road" x="' + (-w / 2) + '" y="' + (-L) + '" width="' + w + '" height="' + (2 * L) + '"/><rect class="road" x="' + (-L) + '" y="' + (-w / 2) + '" width="' + (2 * L) + '" height="' + w + '"/>'; };
    let yl = '';
    [0, 90, 180, 270].forEach(function (a) { yl += '<line x1="-88" y1="104" x2="-12" y2="104" stroke-width="7" stroke-dasharray="12 9" style="stroke:#FFFFFF" transform="rotate(' + a + ')"/>'; });
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="circles-a">' + arms(130, 250) + '<circle class="road" r="210"/><circle class="island" r="105"/>' +
      '<g class="circles-ca"><g transform="rotate(90) scale(0.62)">' + SG.car('var(--main)') + '</g></g></g>' +
      '<g class="circles-b">' + arms(200, 250) + '<circle class="sw" r="42"/>' + yl +
      '<g class="circles-cb"><g transform="rotate(90) scale(0.62)">' + SG.car('var(--second)') + '</g></g></g>' +
      '</svg>' +
      '<div class="words" style="left:0;top:50px;width:1920px;text-align:center">' +
      '<h2 class="line circles-h">Who goes first?</h2></div>' +
      '<div class="words circles-la" style="left:240px;top:770px;width:640px;text-align:center;align-items:center">' +
      '<div class="tag" style="align-self:center">Roundabout</div><p class="sub">Give way to all traffic from the right</p></div>' +
      '<div class="words circles-lb" style="left:1040px;top:770px;width:640px;text-align:center;align-items:center">' +
      '<div class="tag" style="align-self:center">Mini-circle</div><p class="sub">First across the yield line goes first. Drive clockwise, not over the centre.</p></div>' +
      '</div>'));
    this.a = kit.stage.querySelector('.circles-a');
    this.b = kit.stage.querySelector('.circles-b');
    this.ca = kit.stage.querySelector('.circles-ca');
    this.cb = kit.stage.querySelector('.circles-cb');
    this.h = kit.stage.querySelector('.circles-h');
    this.la = kit.stage.querySelector('.circles-la').style;
    this.lb = kit.stage.querySelector('.circles-lb').style;
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, -0.3);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    const sa = eob(seg(t, -0.2, 0.5), 1.6), sb = eob(seg(t, 1.0, 1.7), 1.6);
    this.a.setAttribute('transform', 'translate(560 ' + (470 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, sa) * 0.98 * br).toFixed(4) + ')');
    this.b.setAttribute('transform', 'translate(1360 ' + (470 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, sb) * 0.98 * br).toFixed(4) + ')');
    const qa = -60 + 42 * Math.max(0, t - 0.8), qb = 120 + 42 * Math.max(0, t - 2.0);
    const pa = qa * Math.PI / 180, pb = qb * Math.PI / 180;
    this.ca.setAttribute('transform', 'translate(' + (158 * Math.cos(pa)).toFixed(1) + ' ' + (158 * Math.sin(pa)).toFixed(1) + ') rotate(' + qa.toFixed(1) + ')');
    this.cb.setAttribute('transform', 'translate(' + (100 * Math.cos(pb)).toFixed(1) + ' ' + (100 * Math.sin(pb)).toFixed(1) + ') rotate(' + qb.toFixed(1) + ')');
    this.ca.style.opacity = eo(seg(t, 0.4, 0.8));
    this.cb.style.opacity = eo(seg(t, 1.6, 2.0));
    const la = eo(seg(t, 2.4, 3.0)), lb = eo(seg(t, 3.4, 4.0));
    this.la.opacity = la; this.la.transform = 'translateY(' + lerp(24, 0, la) + 'px)';
    this.lb.opacity = lb; this.lb.transform = 'translateY(' + lerp(24, 0, lb) + 'px)';
  },
});

},
  "trap1": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trap1', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:150px;top:90px;width:1620px">' +
      '<div class="tag trap1-tag">Trap 1 of 5</div>' +
      '<h2 class="line trap1-q" style="font-size:76px">When may you drive on the yellow-line shoulder?</h2></div>' +
      '<div class="card trap1-trap" style="left:150px;top:400px;width:620px;padding:30px 34px">' +
      '<div class="tag no">Trap</div><p class="sub" style="margin:18px 0 0">Answers that list only one or two of the conditions.</p>' +
      '<div class="trap1-x" style="position:absolute;left:24px;right:24px;top:58%;height:10px;border-radius:5px;background:var(--sign-red);transform-origin:left center"></div></div>' +
      '<div class="card trap1-rem" style="left:860px;top:400px;width:840px;padding:30px 34px">' +
      '<div class="tag">Remember</div><p class="sub" style="margin:18px 0 0;color:var(--second)">Only to let someone overtake, and ALL of these must be true: single-lane road, daylight (sunrise to sunset), no danger to anyone, and you can see at least 150 m ahead.</p></div>' +
      '<div class="trap1-hook" style="position:absolute;left:150px;top:900px;padding:18px 34px;border-radius:20px;background:var(--accent);font:700 54px var(--display, var(--sans, system-ui, sans-serif));color:var(--second)">Single, sunlight, safe, see 150.</div>' +
      '</div>'));
    this.tag = kit.stage.querySelector('.trap1-tag').style;
    this.q = kit.stage.querySelector('.trap1-q');
    this.trap = kit.stage.querySelector('.trap1-trap').style;
    this.x = kit.stage.querySelector('.trap1-x').style;
    this.rem = kit.stage.querySelector('.trap1-rem').style;
    this.hook = kit.stage.querySelector('.trap1-hook').style;
  },
  render(t) {
    this.tag.opacity = eo(seg(t, -0.3, 0.3));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, -0.3, 0.5))) + 'px)';
    TextFx.fadeFromRight(this.q, t, 0.2, { stagger: 0.08 });
    const dy = -t * 1.2;
    const a = eob(seg(t, 1.6, 2.6), 1.6);
    this.trap.opacity = Math.min(1, Math.max(0, a) * 1.5) * (1 - 0.45 * eo(seg(t, 4.8, 5.6)));
    this.trap.transform = 'translate(' + lerp(60, 0, Math.min(1, Math.max(0, a))).toFixed(1) + 'px ' + dy.toFixed(1) + 'px) scale(' + lerp(0.9, 1, Math.max(0, a)).toFixed(4) + ')';
    this.x.transform = 'rotate(-6deg) scaleX(' + eio(seg(t, 4.4, 5.2)).toFixed(4) + ')';
    const r = eob(seg(t, 5.6, 6.6), 1.6);
    this.rem.opacity = Math.min(1, Math.max(0, r) * 1.5);
    this.rem.transform = 'translate(' + lerp(60, 0, Math.min(1, Math.max(0, r))).toFixed(1) + 'px ' + dy.toFixed(1) + 'px) scale(' + (lerp(0.9, 1, Math.max(0, r)) * (1 + 0.008 * Math.sin(t * 2 * Math.PI / 3.2))).toFixed(4) + ')';
    const h = eob(seg(t, 8.8, 9.8), 1.7);
    this.hook.opacity = Math.min(1, Math.max(0, h) * 1.5);
    this.hook.transform = 'translateX(' + lerp(40, 0, Math.min(1, Math.max(0, h))).toFixed(1) + 'px) scale(' + lerp(0.8, 1, Math.max(0, h)).toFixed(4) + ')';
  },
});

},
  "trap2": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trap2', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:150px;top:90px;width:1620px">' +
      '<div class="tag trap2-tag">Trap 2 of 5</div>' +
      '<h2 class="line trap2-q" style="font-size:76px">When may you overtake on the left?</h2></div>' +
      '<div class="card trap2-trap" style="left:150px;top:400px;width:620px;padding:30px 34px">' +
      '<div class="tag no">Trap</div><p class="sub" style="margin:18px 0 0">Choosing ‘whenever the right lane is busy’ or ‘by driving on the shoulder’.</p>' +
      '<div class="trap2-x" style="position:absolute;left:24px;right:24px;top:58%;height:10px;border-radius:5px;background:var(--sign-red);transform-origin:left center"></div></div>' +
      '<div class="card trap2-rem" style="left:860px;top:400px;width:840px;padding:30px 34px">' +
      '<div class="tag">Remember</div><p class="sub" style="margin:18px 0 0;color:var(--second)">Only if safe and: the car ahead is turning right, it is a one-way road, the road has two or more lanes your way, or a traffic officer tells you to.</p></div>' +
      '<div class="trap2-hook" style="position:absolute;left:150px;top:900px;padding:18px 34px;border-radius:20px;background:var(--accent);font:700 54px var(--display, var(--sans, system-ui, sans-serif));color:var(--second)">Turning right, one-way, two lanes, told to.</div>' +
      '</div>'));
    this.tag = kit.stage.querySelector('.trap2-tag').style;
    this.q = kit.stage.querySelector('.trap2-q');
    this.trap = kit.stage.querySelector('.trap2-trap').style;
    this.x = kit.stage.querySelector('.trap2-x').style;
    this.rem = kit.stage.querySelector('.trap2-rem').style;
    this.hook = kit.stage.querySelector('.trap2-hook').style;
  },
  render(t) {
    this.tag.opacity = eo(seg(t, -0.3, 0.3));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, -0.3, 0.5))) + 'px)';
    TextFx.fadeFromRight(this.q, t, 0.2, { stagger: 0.08 });
    const dy = -t * 1.2;
    const a = eob(seg(t, 1.6, 2.6), 1.6);
    this.trap.opacity = Math.min(1, Math.max(0, a) * 1.5) * (1 - 0.45 * eo(seg(t, 4.8, 5.6)));
    this.trap.transform = 'translate(' + lerp(60, 0, Math.min(1, Math.max(0, a))).toFixed(1) + 'px ' + dy.toFixed(1) + 'px) scale(' + lerp(0.9, 1, Math.max(0, a)).toFixed(4) + ')';
    this.x.transform = 'rotate(-6deg) scaleX(' + eio(seg(t, 4.4, 5.2)).toFixed(4) + ')';
    const r = eob(seg(t, 5.6, 6.6), 1.6);
    this.rem.opacity = Math.min(1, Math.max(0, r) * 1.5);
    this.rem.transform = 'translate(' + lerp(60, 0, Math.min(1, Math.max(0, r))).toFixed(1) + 'px ' + dy.toFixed(1) + 'px) scale(' + (lerp(0.9, 1, Math.max(0, r)) * (1 + 0.008 * Math.sin(t * 2 * Math.PI / 3.2))).toFixed(4) + ')';
    const h = eob(seg(t, 8.8, 9.8), 1.7);
    this.hook.opacity = Math.min(1, Math.max(0, h) * 1.5);
    this.hook.transform = 'translateX(' + lerp(40, 0, Math.min(1, Math.max(0, h))).toFixed(1) + 'px) scale(' + lerp(0.8, 1, Math.max(0, h)).toFixed(4) + ')';
  },
});

},
  "trap3": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trap3', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:150px;top:90px;width:1620px">' +
      '<div class="tag trap3-tag">Trap 3 of 5</div>' +
      '<h2 class="line trap3-q" style="font-size:76px">Which speed limit: 60, 80, 100 or 120?</h2></div>' +
      '<div class="card trap3-trap" style="left:150px;top:400px;width:620px;padding:30px 34px">' +
      '<div class="tag no">Trap</div><p class="sub" style="margin:18px 0 0">Mixing up which vehicle or road gets which number.</p>' +
      '<div class="trap3-x" style="position:absolute;left:24px;right:24px;top:58%;height:10px;border-radius:5px;background:var(--sign-red);transform-origin:left center"></div></div>' +
      '<div class="card trap3-rem" style="left:860px;top:400px;width:840px;padding:30px 34px">' +
      '<div class="tag">Remember</div><p class="sub" style="margin:18px 0 0;color:var(--second)">Town 60. Out of town 100. Freeway 120. Heavy goods (over 9 000 kg) out of town 80.</p></div>' +
      '<div class="trap3-hook" style="position:absolute;left:150px;top:900px;padding:18px 34px;border-radius:20px;background:var(--accent);font:700 54px var(--display, var(--sans, system-ui, sans-serif));color:var(--second)">60 town, 100 country, 120 freeway, heavy truck 80.</div>' +
      '</div>'));
    this.tag = kit.stage.querySelector('.trap3-tag').style;
    this.q = kit.stage.querySelector('.trap3-q');
    this.trap = kit.stage.querySelector('.trap3-trap').style;
    this.x = kit.stage.querySelector('.trap3-x').style;
    this.rem = kit.stage.querySelector('.trap3-rem').style;
    this.hook = kit.stage.querySelector('.trap3-hook').style;
  },
  render(t) {
    this.tag.opacity = eo(seg(t, -0.3, 0.3));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, -0.3, 0.5))) + 'px)';
    TextFx.fadeFromRight(this.q, t, 0.2, { stagger: 0.08 });
    const dy = -t * 1.2;
    const a = eob(seg(t, 1.6, 2.6), 1.6);
    this.trap.opacity = Math.min(1, Math.max(0, a) * 1.5) * (1 - 0.45 * eo(seg(t, 4.8, 5.6)));
    this.trap.transform = 'translate(' + lerp(60, 0, Math.min(1, Math.max(0, a))).toFixed(1) + 'px ' + dy.toFixed(1) + 'px) scale(' + lerp(0.9, 1, Math.max(0, a)).toFixed(4) + ')';
    this.x.transform = 'rotate(-6deg) scaleX(' + eio(seg(t, 4.4, 5.2)).toFixed(4) + ')';
    const r = eob(seg(t, 5.6, 6.6), 1.6);
    this.rem.opacity = Math.min(1, Math.max(0, r) * 1.5);
    this.rem.transform = 'translate(' + lerp(60, 0, Math.min(1, Math.max(0, r))).toFixed(1) + 'px ' + dy.toFixed(1) + 'px) scale(' + (lerp(0.9, 1, Math.max(0, r)) * (1 + 0.008 * Math.sin(t * 2 * Math.PI / 3.2))).toFixed(4) + ')';
    const h = eob(seg(t, 8.8, 9.8), 1.7);
    this.hook.opacity = Math.min(1, Math.max(0, h) * 1.5);
    this.hook.transform = 'translateX(' + lerp(40, 0, Math.min(1, Math.max(0, h))).toFixed(1) + 'px) scale(' + lerp(0.8, 1, Math.max(0, h)).toFixed(4) + ')';
  },
});

},
  "trap4": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trap4', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:150px;top:90px;width:1620px">' +
      '<div class="tag trap4-tag">Trap 4 of 5</div>' +
      '<h2 class="line trap4-q" style="font-size:76px">Someone is overtaking you. What should you do?</h2></div>' +
      '<div class="card trap4-trap" style="left:150px;top:400px;width:620px;padding:30px 34px">' +
      '<div class="tag no">Trap</div><p class="sub" style="margin:18px 0 0">Keeping your speed steady or accelerating to ‘help’.</p>' +
      '<div class="trap4-x" style="position:absolute;left:24px;right:24px;top:58%;height:10px;border-radius:5px;background:var(--sign-red);transform-origin:left center"></div></div>' +
      '<div class="card trap4-rem" style="left:860px;top:400px;width:840px;padding:30px 34px">' +
      '<div class="tag">Remember</div><p class="sub" style="margin:18px 0 0;color:var(--second)">Move safely to the left and do not accelerate until they have passed.</p></div>' +
      '<div class="trap4-hook" style="position:absolute;left:150px;top:900px;padding:18px 34px;border-radius:20px;background:var(--accent);font:700 54px var(--display, var(--sans, system-ui, sans-serif));color:var(--second)">Keep left, foot off.</div>' +
      '</div>'));
    this.tag = kit.stage.querySelector('.trap4-tag').style;
    this.q = kit.stage.querySelector('.trap4-q');
    this.trap = kit.stage.querySelector('.trap4-trap').style;
    this.x = kit.stage.querySelector('.trap4-x').style;
    this.rem = kit.stage.querySelector('.trap4-rem').style;
    this.hook = kit.stage.querySelector('.trap4-hook').style;
  },
  render(t) {
    this.tag.opacity = eo(seg(t, -0.3, 0.3));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, -0.3, 0.5))) + 'px)';
    TextFx.fadeFromRight(this.q, t, 0.2, { stagger: 0.08 });
    const dy = -t * 1.2;
    const a = eob(seg(t, 1.6, 2.6), 1.6);
    this.trap.opacity = Math.min(1, Math.max(0, a) * 1.5) * (1 - 0.45 * eo(seg(t, 4.8, 5.6)));
    this.trap.transform = 'translate(' + lerp(60, 0, Math.min(1, Math.max(0, a))).toFixed(1) + 'px ' + dy.toFixed(1) + 'px) scale(' + lerp(0.9, 1, Math.max(0, a)).toFixed(4) + ')';
    this.x.transform = 'rotate(-6deg) scaleX(' + eio(seg(t, 4.4, 5.2)).toFixed(4) + ')';
    const r = eob(seg(t, 5.6, 6.6), 1.6);
    this.rem.opacity = Math.min(1, Math.max(0, r) * 1.5);
    this.rem.transform = 'translate(' + lerp(60, 0, Math.min(1, Math.max(0, r))).toFixed(1) + 'px ' + dy.toFixed(1) + 'px) scale(' + (lerp(0.9, 1, Math.max(0, r)) * (1 + 0.008 * Math.sin(t * 2 * Math.PI / 3.2))).toFixed(4) + ')';
    const h = eob(seg(t, 8.8, 9.8), 1.7);
    this.hook.opacity = Math.min(1, Math.max(0, h) * 1.5);
    this.hook.transform = 'translateX(' + lerp(40, 0, Math.min(1, Math.max(0, h))).toFixed(1) + 'px) scale(' + lerp(0.8, 1, Math.max(0, h)).toFixed(4) + ')';
  },
});

},
  "trap5": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trap5', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:150px;top:90px;width:1620px">' +
      '<div class="tag trap5-tag">Trap 5 of 5</div>' +
      '<h2 class="line trap5-q" style="font-size:76px">Roundabout or mini-circle: who goes first?</h2></div>' +
      '<div class="card trap5-trap" style="left:150px;top:400px;width:620px;padding:30px 34px">' +
      '<div class="tag no">Trap</div><p class="sub" style="margin:18px 0 0">Using the same rule for both.</p>' +
      '<div class="trap5-x" style="position:absolute;left:24px;right:24px;top:58%;height:10px;border-radius:5px;background:var(--sign-red);transform-origin:left center"></div></div>' +
      '<div class="card trap5-rem" style="left:860px;top:400px;width:840px;padding:30px 34px">' +
      '<div class="tag">Remember</div><p class="sub" style="margin:18px 0 0;color:var(--second)">Roundabout: give way to traffic from your right. Mini-circle: whoever crossed the yield line first goes first.</p></div>' +
      '<div class="trap5-hook" style="position:absolute;left:150px;top:900px;padding:18px 34px;border-radius:20px;background:var(--accent);font:700 54px var(--display, var(--sans, system-ui, sans-serif));color:var(--second)">Round-about = right. Mini = first in.</div>' +
      '</div>'));
    this.tag = kit.stage.querySelector('.trap5-tag').style;
    this.q = kit.stage.querySelector('.trap5-q');
    this.trap = kit.stage.querySelector('.trap5-trap').style;
    this.x = kit.stage.querySelector('.trap5-x').style;
    this.rem = kit.stage.querySelector('.trap5-rem').style;
    this.hook = kit.stage.querySelector('.trap5-hook').style;
  },
  render(t) {
    this.tag.opacity = eo(seg(t, -0.3, 0.3));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, -0.3, 0.5))) + 'px)';
    TextFx.fadeFromRight(this.q, t, 0.2, { stagger: 0.08 });
    const dy = -t * 1.2;
    const a = eob(seg(t, 1.6, 2.6), 1.6);
    this.trap.opacity = Math.min(1, Math.max(0, a) * 1.5) * (1 - 0.45 * eo(seg(t, 4.8, 5.6)));
    this.trap.transform = 'translate(' + lerp(60, 0, Math.min(1, Math.max(0, a))).toFixed(1) + 'px ' + dy.toFixed(1) + 'px) scale(' + lerp(0.9, 1, Math.max(0, a)).toFixed(4) + ')';
    this.x.transform = 'rotate(-6deg) scaleX(' + eio(seg(t, 4.4, 5.2)).toFixed(4) + ')';
    const r = eob(seg(t, 5.6, 6.6), 1.6);
    this.rem.opacity = Math.min(1, Math.max(0, r) * 1.5);
    this.rem.transform = 'translate(' + lerp(60, 0, Math.min(1, Math.max(0, r))).toFixed(1) + 'px ' + dy.toFixed(1) + 'px) scale(' + (lerp(0.9, 1, Math.max(0, r)) * (1 + 0.008 * Math.sin(t * 2 * Math.PI / 3.2))).toFixed(4) + ')';
    const h = eob(seg(t, 8.8, 9.8), 1.7);
    this.hook.opacity = Math.min(1, Math.max(0, h) * 1.5);
    this.hook.transform = 'translateX(' + lerp(40, 0, Math.min(1, Math.max(0, h))).toFixed(1) + 'px) scale(' + lerp(0.8, 1, Math.max(0, h)).toFixed(4) + ')';
  },
});

},
  "end": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('end', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="end-s">' + SG.limit(60, 110, 'end') + '</g>' +
      '<g class="end-s">' + SG.limit(100, 110, 'end') + '</g>' +
      '<g class="end-s">' + SG.limit(120, 110, 'end') + '</g>' +
      '</svg>' +
      '<div class="words" style="left:180px;top:280px;width:960px">' +
      '<div class="kicker end-k">Session 8 · Learners Coach</div>' +
      '<div class="bar end-bar" style="transform-origin:left center"></div>' +
      '<h2 class="line end-h">60 town. 100 country. 120 freeway.</h2>' +
      '<p class="sub end-sub">Heavy truck 80. Keep left, foot off. Next: the mini test.</p></div>' +
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
    const pos = [[1420, 300], [1660, 560], [1380, 790]];
    const calm = 1 - eio(seg(t, 3.0, 4.8));
    const tt = Math.min(t, 4.8);
    for (let i = 0; i < 3; i++) {
      const st = 0.6 + i * 0.35;
      const s = eob(seg(t, st, st + 0.6), 1.6);
      const br = 1 + 0.012 * calm * Math.sin((t + i * 0.9) * 2 * Math.PI / 3.2);
      const y = pos[i][1] + lerp(-40, 0, eo(seg(t, st, st + 0.6))) - tt * 1.2;
      this.s[i].setAttribute('transform', 'translate(' + pos[i][0] + ' ' + y.toFixed(1) + ') rotate(' + lerp(-14 + i * 10, 0, eo(seg(t, st, st + 0.8))).toFixed(2) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    }
  },
});

},
 },
 score: function (kit) {
kit.score(function (S, T) {
  const BEATS = 328, BPM = BEATS * 60 / (T.end - T.disc);
  S.tempo(BPM, { t0: T.disc });
  S.program('pad', 'pad', { rev: 0.6, gain: -4 });
  S.program('mallet', 'marimba', { rev: 0.3, pan: -0.15 });
  S.program('keys', 'ep', { rev: 0.35, pan: 0.15 });
  S.program('bass', 'bass', { gain: -3 });
  S.program('bell', 'glock', { rev: 0.5, gain: -6 });
  // Title: near silent, a pad and one bell note
  S.chord('pad', ['D3', 'A3', 'F#4'], { t: 0, dur: T.disc + 0.4, vel: 30 });
  S.note('bell', 'A5', { t: 1.2, dur: 2, vel: 40 });
  S.fx('pop', 1.2, { vel: 40 });
  // Progression, one chord per 8 beats; the groove rests to pad and mallet twice
  const prog = [['D3', 'A3', 'F#4'], ['B2', 'F#3', 'D4'], ['G2', 'D3', 'B3'], ['A2', 'E3', 'C#4']];
  const roots = ['D2', 'B1', 'G1', 'A1'];
  const rest = function (i) { return (i >= 16 && i < 20) || (i >= 33 && i < 37); };
  for (let i = 0; i < 41; i++) {
    const c = prog[i % 4];
    S.chord('pad', c, { beat: i * 8, beats: 8, vel: 34 });
    if (i >= 2 && !rest(i)) { S.note('bass', roots[i % 4], { beat: i * 8, beats: 3, vel: 64 }); S.note('bass', roots[i % 4], { beat: i * 8 + 4, beats: 2, vel: 54 }); }
    if (i >= 4 && i % 2 === 0 && !rest(i)) S.chord('keys', c.map(function (p) { return p.replace(/\d/, function (d) { return String(+d + 1); }); }), { beat: i * 8, beats: 6, vel: 40 });
  }
  // Calm marimba ostinato over the signs, stopping 4 beats before the hit
  S.pattern('mallet', 'x.x.X..x', { from: 0, repeat: 81, pitch: ['D5', 'A4', 'F#5', 'A4', 'E5'], vel: 50 });
  // Light pulse in three stretches
  const kit3 = { shaker: 'oxoxoxox', sidestick: '....x...', kick: 'x.......' };
  S.drums(kit3, { from: 16, repeat: 28, vel: 46 });
  S.drums(kit3, { from: 160, repeat: 26, vel: 46 });
  S.drums(kit3, { from: 296, repeat: 7, vel: 46 });
  // Foley on the builds
  const pops = [['disc', 1.6], ['mirrors', 1.6], ['mirrors', 3.5], ['mirrors', 5.4], ['limits', 0.39], ['limits', 2.08], ['limits', 3.77], ['heavy', 0.13], ['divide', 2.86], ['divide', 5.98],
    ['nopass', 2.08], ['nopass', 3.51], ['nopass', 4.94], ['nopass', 6.37], ['noshoulder', 3.2], ['noshoulder', 5.0], ['shoulder', 1.82], ['shoulder', 2.47], ['shoulder', 3.12], ['shoulder', 3.77],
    ['buslane', 2.4], ['buslane', 4.2], ['circles', 0.0], ['circles', 1.3]];
  pops.forEach(function (p) { S.fx('pop', T[p[0]] + p[1], { vel: 56 }); });
  S.fx('click', T.gap + 6.5, { vel: 48 });
  S.fx('ding', T.gap + 7.8, { vel: 50 });
  S.fx('whoosh', T.divide + 7.5, { dur: 2.3, vel: 30 });
  S.fx('whoosh', T.left + 7.3, { dur: 2.1, vel: 30 });
  S.fx('whoosh', T.freeway + 5.2, { dur: 2.0, vel: 30 });
  S.fx('click', T.shoulder + 5.2, { vel: 44 });
  S.fx('whoosh', T.shoulder + 6.5, { dur: 2.3, vel: 30 });
  ['trap1', 'trap2', 'trap3', 'trap4', 'trap5'].forEach(function (k) {
    S.fx('pop', T[k] + 1.6, { vel: 46 });
    S.fx('click', T[k] + 4.4, { vel: 44 });
    S.fx('pop', T[k] + 5.6, { vel: 50 });
    S.fx('ding', T[k] + 8.8, { vel: 48 });
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
  S.note('bell', 'F#5', { t: T.end + 2.8, dur: 3, vel: 40 });
  S.master({ gain: -6, fadeOut: 2.0 });
});

}
};