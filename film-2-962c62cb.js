(window.K53F = window.K53F || {})[2] = {
 title: "Session 2: Regulatory signs 1",
 scenes: [{"id": "title", "name": "Regulatory signs", "dur": 7}, {"id": "stop", "name": "Stop", "dur": 13}, {"id": "fourway", "name": "4-way stop", "dur": 12}, {"id": "yield", "name": "Yield", "dur": 12}, {"id": "yieldped", "name": "Yield to pedestrians", "dur": 11}, {"id": "stopgo", "name": "Stop/Go sign", "dur": 12}, {"id": "leftturn", "name": "Except left turn", "dur": 10}, {"id": "ppz", "name": "Pedestrian priority zone", "dur": 14}, {"id": "noentry", "name": "No entry", "dur": 10}, {"id": "command", "name": "You must", "dur": 16}, {"id": "arrow", "name": "Arrow", "dur": 10}, {"id": "vehicles", "name": "Only for these users", "dur": 13}, {"id": "prohibit", "name": "You must not", "dur": 16}, {"id": "turns", "name": "No turning", "dur": 11}, {"id": "overtake", "name": "No overtaking", "dur": 11}, {"id": "noise", "name": "No excessive noise", "dur": 11}, {"id": "temp", "name": "Temporary signs", "dur": 11}, {"id": "compare", "name": "Must or must not", "dur": 13}, {"id": "trap1", "name": "Trap: three round signs", "dur": 13}, {"id": "trap2", "name": "Trap: 4-way stop", "dur": 11}, {"id": "trap3", "name": "Trap: yield", "dur": 11}, {"id": "end", "name": "Remember", "dur": 11}],
 css: "#stage { --ground:#F3F5F7; --main:#1F5F8B; --second:#18212B; --accent:#F5C400; --sign-red:#C8102E; --sign-blue:#0A4D94; color:var(--second); font-family:var(--sans, system-ui, sans-serif) }\n.ground { position:absolute; inset:0; background:var(--ground); background-image:linear-gradient(color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px), linear-gradient(90deg, color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px); background-size:80px 80px; background-position:-1px -1px }\n.words { position:absolute; margin:0; display:flex; flex-direction:column; gap:24px } .words > * { margin:0 }\n.line { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:96px; line-height:1.02; font-weight:700; letter-spacing:-0.01em } .sub { font-size:40px; line-height:1.3; color:color-mix(in srgb, var(--second) 78%, var(--ground)) }\n.kicker { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:30px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:var(--main); display:flex; align-items:center; gap:16px }\n.kicker::before { content:''; width:44px; height:8px; border-radius:4px; background:var(--accent) }\n.bar { height:10px; width:160px; border-radius:5px; background:var(--accent) }\n.art { position:absolute; inset:0; width:100%; height:100%; overflow:visible }\n.sr { fill:var(--sign-red) } .sb { fill:var(--sign-blue) } .sw { fill:#FFFFFF } .sk { fill:var(--second) }\n.edge { fill:none; stroke:color-mix(in srgb, var(--second) 18%, transparent); stroke-width:3 }\n.shadow { fill:rgba(0,0,0,.12) }\n.card { position:absolute; background:#FFFFFF; border:3px solid color-mix(in srgb, var(--main) 35%, var(--ground)); border-radius:28px; box-shadow:0 18px 40px -18px rgba(0,0,0,.25) }\n.tag { display:inline-flex; align-self:flex-start; padding:10px 22px; border-radius:999px; background:var(--main); color:#FFFFFF; font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:34px; font-weight:700 }\n.tag.no { background:var(--sign-red) }\n.road { fill:color-mix(in srgb, var(--second) 82%, var(--ground)) } .lane { stroke:#FFFFFF; stroke-width:8; stroke-dasharray:40 34; fill:none } .lane.solid { stroke-dasharray:none; stroke:var(--accent) }.sy { fill:var(--accent) } .trap-x { text-decoration:line-through; text-decoration-color:var(--sign-red); text-decoration-thickness:5px }\n",
 shared: function (kit) {
window.SG = {
  oct(cx, cy, r) { const p = []; for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + i * Math.PI / 4; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } return p.join(' '); },
  octWedge(cx, cy, r, i) { const a1 = Math.PI / 8 + i * Math.PI / 4, a2 = a1 + Math.PI / 4; return cx + ',' + cy + ' ' + (cx + r * Math.cos(a1)).toFixed(1) + ',' + (cy + r * Math.sin(a1)).toFixed(1) + ' ' + (cx + r * Math.cos(a2)).toFixed(1) + ',' + (cy + r * Math.sin(a2)).toFixed(1); },
  arrowUp(cx, cy, s) { return 'M' + cx + ' ' + (cy + s) + ' V' + (cy - s * 0.35) + ' M' + (cx - s * 0.55) + ' ' + (cy + s * 0.15) + ' L' + cx + ' ' + (cy - s) + ' L' + (cx + s * 0.55) + ' ' + (cy + s * 0.15); },
  wob(t, seed) { return Math.sin(t * 2.1 + seed) * 0.8 + Math.sin(t * 1.3 + seed * 2) * 0.5; },
  person(cls) { return '<circle class="' + cls + '" cy="-64" r="17"/><rect class="' + cls + '" x="-15" y="-44" width="30" height="54" rx="13"/><rect class="' + cls + '" x="-13" y="2" width="11" height="40" rx="5"/><rect class="' + cls + '" x="2" y="2" width="11" height="40" rx="5"/>'; },
  trap(kit, id, it) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:150px;top:90px;width:1620px">' +
      '<div class="tag no ' + id + '-tag">Trap or remember</div>' +
      '<h2 class="line ' + id + '-q" style="font-size:76px">' + it[0] + '</h2></div>' +
      '<div class="card ' + id + '-c" style="left:150px;top:' + (it[4] || 400) + 'px;width:1620px;padding:40px 48px;box-sizing:border-box">' +
      '<div class="' + id + '-tr" style="display:flex;gap:22px;align-items:center">' +
      '<svg width="64" height="64" viewBox="-32 -32 64 64" style="flex:none;overflow:visible"><g class="' + id + '-x"><circle r="30" style="fill:var(--sign-red)"/><path d="M-11 -11 L11 11 M11 -11 L-11 11" fill="none" stroke-width="7" stroke-linecap="round" style="stroke:#FFFFFF"/></g></svg>' +
      '<p class="sub ' + id + '-trap" style="margin:0">Trap: ' + it[1] + '</p></div>' +
      '<p class="sub ' + id + '-s" style="margin:30px 0 0;color:var(--second)">' + it[2] + '</p>' +
      '<div class="tag ' + id + '-hook" style="margin-top:30px;background:var(--accent);color:var(--second);font-size:42px;padding:12px 28px;transform-origin:left center">' + it[3] + '</div>' +
      '</div></div>'));
    const q = function (c) { return kit.stage.querySelector('.' + id + '-' + c); };
    const tag = q('tag').style, h = q('q'), c = q('c').style, tr = q('tr').style, x = q('x'), trap = q('trap'), s = q('s').style, hook = q('hook').style;
    return {
      render(t) {
        const { seg, eo, eob, lerp } = kit;
        const tg = eo(seg(t, 0, 0.8));
        tag.opacity = tg; tag.transform = 'translateX(' + lerp(26, 0, tg) + 'px)';
        kit.TextFx.fadeFromRight(h, t, 0.2);
        const cp = eo(seg(t, 1.2, 2.2));
        c.opacity = cp; c.transform = 'translateY(' + lerp(30, 0, cp).toFixed(1) + 'px)';
        const tp = eo(seg(t, 1.5, 2.5));
        tr.opacity = tp; tr.transform = 'translateX(' + lerp(26, 0, tp).toFixed(1) + 'px)';
        const xs = eob(seg(t, 3.6, 4.2), 1.8);
        x.setAttribute('transform', 'scale(' + Math.max(0, xs).toFixed(4) + ')');
        const struck = t >= 4.0;
        trap.className = 'sub ' + id + '-trap' + (struck ? ' trap-x' : '');
        trap.style.opacity = struck ? 0.75 : 1;
        const sp = eo(seg(t, 4.6, 5.6));
        s.opacity = sp; s.transform = 'translateX(' + lerp(26, 0, sp).toFixed(1) + 'px)';
        const hk = eob(seg(t, 6.2, 7.0), 1.7);
        hook.opacity = Math.min(1, Math.max(0, hk) * 1.5);
        hook.transform = 'scale(' + lerp(0.7, 1, Math.min(1, Math.max(0, hk))).toFixed(4) + ')';
      }
    };
  }
};

},
 mods: {
  "title": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('title', {
  init(kit) {
    const cx = 1420, cy = 540, r = 250;
    let wedges = '';
    for (let i = 0; i < 8; i++) wedges += '<polygon class="sr title-w" points="' + SG.oct(0, 0, r).split(' ').slice(0, 0).join('') + SG.octWedge(0, 0, r + 1, i) + '"/>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="title-sign" transform="translate(' + cx + ' ' + cy + ')">' +
      '<polygon class="shadow" points="' + SG.oct(14, 22, r + 14) + '"/>' +
      '<polygon class="sw" points="' + SG.oct(0, 0, r + 14) + '"/>' + wedges +
      '<polygon class="edge" points="' + SG.oct(0, 0, r + 14) + '"/>' +
      '<text class="title-stop" x="0" y="52" text-anchor="middle" fill="#FFFFFF" style="font:700 150px var(--display, var(--sans, system-ui, sans-serif)); letter-spacing:4px">STOP</text>' +
      '</g></svg>' +
      '<div class="words" style="left:150px;top:300px;width:880px">' +
      '<div class="kicker title-kick">Session 2 · Learners Coach</div>' +
      '<h1 class="line" style="font-size:132px">Regulatory signs</h1>' +
      '<p class="sub title-sub">Control, command and prohibition: the signs you must obey</p>' +
      '</div></div>'));
    this.w = [...kit.stage.querySelectorAll('.title-w')];
    this.sign = kit.stage.querySelector('.title-sign');
    this.stop = kit.stage.querySelector('.title-stop').style;
    this.kick = kit.stage.querySelector('.title-kick').style;
    this.sub = kit.stage.querySelector('.title-sub').style;
    this.line = kit.stage.querySelector('.line');
    this.cx = cx; this.cy = cy;
  },
  render(t) {
    t = t / 1.3;
    this.kick.opacity = eo(seg(t, -0.6, -0.1));
    TextFx.fadeFromRight(this.line, t, -0.5);
    this.sub.opacity = eo(seg(t, 0.6, 1.2));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.6, 1.2))) + 'px)';
    for (let i = 0; i < 8; i++) {
      const a = Math.PI / 8 + i * Math.PI / 4 + Math.PI / 8;
      const p = eob(seg(t, -0.6 + i * 0.12, 0.2 + i * 0.12), 1.5);
      const d = lerp(220, 0, p);
      this.w[i].setAttribute('transform', 'translate(' + (Math.cos(a) * d).toFixed(1) + ' ' + (Math.sin(a) * d).toFixed(1) + ') rotate(' + lerp(-18, 0, p).toFixed(2) + ')');
      this.w[i].style.opacity = Math.min(1, p * 2);
    }
    const s = eob(seg(t, 1.2, 1.7), 1.7);
    this.stop.opacity = Math.min(1, s * 1.5);
    this.stop.transform = 'scale(' + lerp(0.6, 1, s) + ')';
    const breathe = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(' + this.cx + ' ' + (this.cy - t * 2) + ') scale(' + breathe.toFixed(4) + ') rotate(' + (SG.wob(t, 1) * 0.6).toFixed(2) + ')');
  },
});
},
  "stop": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('stop', {
  init(kit) {
    const r = 210;
    let wedges = '';
    for (let i = 0; i < 8; i++) wedges += '<polygon class="sr stop-w" points="' + SG.octWedge(0, 0, r + 1, i) + '"/>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="stop-sign">' +
      '<polygon class="shadow" points="' + SG.oct(12, 20, r + 14) + '"/>' +
      '<polygon class="sw stop-rim" points="' + SG.oct(0, 0, r + 14) + '"/>' + wedges +
      '<text class="stop-txt" x="0" y="44" text-anchor="middle" fill="#FFFFFF" style="font:700 128px var(--display, var(--sans, system-ui, sans-serif)); letter-spacing:4px">STOP</text>' +
      '</g>' +
      '<g class="stop-road"><rect class="road" x="0" y="860" width="1920" height="220"/>' +
      '<line class="lane" x1="0" y1="970" x2="1920" y2="970"/>' +
      '<rect x="1290" y="860" width="18" height="110" fill="#FFFFFF"/>' +
      '<g class="stop-car"><rect x="-150" y="-46" width="150" height="76" rx="22" style="fill:var(--main)"/><rect x="-110" y="-36" width="58" height="30" rx="8" fill="#FFFFFF" opacity=".85"/><circle cx="-118" cy="32" r="16" class="sk"/><circle cx="-34" cy="32" r="16" class="sk"/></g></g>' +
      '</svg>' +
      '<div class="words" style="left:1000px;top:150px;width:800px">' +
      '<div class="tag stop-tag">Control sign</div>' +
      '<h2 class="line">Stop</h2>' +
      '<p class="sub stop-sub">Stop completely at the stop line, or in line with the sign. Go only when it is safe.</p>' +
      '</div></div>'));
    this.w = [...kit.stage.querySelectorAll('.stop-w')];
    this.sign = kit.stage.querySelector('.stop-sign');
    this.rim = kit.stage.querySelector('.stop-rim').style;
    this.txt = kit.stage.querySelector('.stop-txt').style;
    this.tag = kit.stage.querySelector('.stop-tag').style;
    this.sub = kit.stage.querySelector('.stop-sub').style;
    this.line = kit.stage.querySelector('.line');
    this.road = kit.stage.querySelector('.stop-road').style;
    this.car = kit.stage.querySelector('.stop-car');
  },
  render(t) {
    t = t / 1.3;
    for (let i = 0; i < 8; i++) {
      const p = eob(seg(t, 0.2 + i * 0.22, 0.75 + i * 0.22), 1.6);
      this.w[i].setAttribute('transform', 'translate(0 ' + lerp(-640, 0, p).toFixed(1) + ') rotate(' + lerp(30 - i * 7, 0, p).toFixed(2) + ')');
      this.w[i].style.opacity = p > 0 ? 1 : 0;
    }
    this.rim.opacity = eo(seg(t, 2.1, 2.5));
    const s = eob(seg(t, 2.4, 2.9), 1.8);
    this.txt.opacity = Math.min(1, s * 1.4);
    this.txt.transform = 'scale(' + lerp(0.5, 1, s) + ')';
    const breathe = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(520 ' + (440 - t * 1.5).toFixed(1) + ') scale(' + breathe.toFixed(4) + ')');
    this.tag.opacity = eo(seg(t, 2.8, 3.2));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 2.8, 3.3))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 3.0);
    this.sub.opacity = eo(seg(t, 3.7, 4.3));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 3.7, 4.3))) + 'px)';
    this.road.opacity = eo(seg(t, 5.0, 5.6));
    this.road.transform = 'translateY(' + lerp(60, 0, eo(seg(t, 5.0, 5.6))) + 'px)';
    let x = lerp(-200, 1280, eo(seg(t, 5.6, 7.4)));
    x += lerp(0, 900, ei(seg(t, 8.6, 9.9)));
    const dip = Math.sin(Math.PI * seg(t, 7.3, 7.7)) * 4;
    this.car.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + (930 + dip).toFixed(1) + ')');
  },
});
},
  "fourway": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
const FW = [
  { id: 1, ang: 180, sx: 2050, sy: 615, ex: 1490, ey: 615, ox: -2200, oy: 0, a0: 0.8, a1: 2.0 },
  { id: 2, ang: 90, sx: 1355, sy: -120, ex: 1355, ey: 380, ox: 0, oy: 1400, a0: 1.3, a1: 2.5 },
  { id: 3, ang: 0, sx: 600, sy: 505, ex: 1110, ey: 505, ox: 1300, oy: 0, a0: 1.8, a1: 3.0 },
  { id: 4, ang: 270, sx: 1245, sy: 1200, ex: 1245, ey: 740, ox: 0, oy: -1400, a0: 2.3, a1: 3.5 }
];
kit.scene('fourway', {
  init(kit) {
    let cars = '';
    FW.forEach(function (c) {
      cars += '<g class="fourway-car"><g class="fourway-body"><rect x="-60" y="-32" width="120" height="64" rx="18" style="fill:var(--main)"/><rect x="8" y="-24" width="30" height="48" rx="7" fill="#FFFFFF" opacity=".85"/></g>' +
        '<g class="fourway-badge"><circle r="34" style="fill:var(--accent)" stroke="#FFFFFF" stroke-width="5"/><text y="13" text-anchor="middle" style="font:700 38px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)">' + c.id + '</text></g></g>';
    });
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="fourway-map">' +
      '<rect class="road" x="700" y="450" width="1300" height="220"/>' +
      '<rect class="road" x="1190" y="-20" width="220" height="1120"/>' +
      '<rect class="road" x="1190" y="450" width="220" height="220"/>' +
      '<line class="lane" x1="700" y1="560" x2="1180" y2="560"/><line class="lane" x1="1420" y1="560" x2="2000" y2="560"/>' +
      '<line class="lane" x1="1300" y1="0" x2="1300" y2="440"/><line class="lane" x1="1300" y1="680" x2="1300" y2="1080"/>' +
      '<rect x="1416" y="562" width="10" height="108" fill="#FFFFFF"/><rect x="1302" y="434" width="108" height="10" fill="#FFFFFF"/>' +
      '<rect x="1174" y="450" width="10" height="108" fill="#FFFFFF"/><rect x="1190" y="676" width="108" height="10" fill="#FFFFFF"/>' +
      cars + '</g></svg>' +
      '<div class="words" style="left:120px;top:150px;width:560px">' +
      '<div class="tag">Control sign</div>' +
      '<h2 class="line">4-way stop</h2>' +
      '<p class="sub fourway-sub">Everyone stops. The first to stop is the first to go.</p>' +
      '</div></div>'));
    this.cars = [...kit.stage.querySelectorAll('.fourway-car')];
    this.badges = [...kit.stage.querySelectorAll('.fourway-badge')];
    this.map = kit.stage.querySelector('.fourway-map');
    this.sub = kit.stage.querySelector('.fourway-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.line, t, 0.2);
    this.sub.opacity = eo(seg(t, 0.9, 1.5));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.9, 1.5))) + 'px)';
    const z = lerp(1, 1.04, eio(seg(t, 0, 9)));
    this.map.setAttribute('transform', 'translate(1300 560) scale(' + z.toFixed(4) + ') translate(-1300 -560)');
    for (let k = 0; k < 4; k++) {
      const c = FW[k];
      const pin = eo(seg(t, c.a0, c.a1));
      const go0 = 4.4 + k * 1.05;
      const pout = ei(seg(t, go0, go0 + 1.1));
      const x = lerp(c.sx, c.ex, pin) + c.ox * pout;
      const y = lerp(c.sy, c.ey, pin) + c.oy * pout;
      const dip = Math.sin(Math.PI * seg(t, c.a1 - 0.05, c.a1 + 0.3)) * 3;
      this.cars[k].setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ')');
      this.cars[k].firstChild.setAttribute('transform', 'rotate(' + c.ang + ') translate(' + (-dip).toFixed(2) + ' 0)');
      const b = eob(seg(t, c.a1, c.a1 + 0.35), 1.8) * (1 - eo(seg(t, go0 - 0.2, go0 + 0.1)));
      this.badges[k].setAttribute('transform', 'translate(0 -70) scale(' + Math.max(0, b).toFixed(3) + ')');
    }
  },
});
},
  "yield": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('yield', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="yield-sign"><polygon class="shadow" points="-224,-150 256,-150 16,262"/>' +
      '<polygon class="sr yield-out" points="-240,-170 240,-170 0,246"/>' +
      '<polygon class="sw yield-in" points="-150,-118 150,-118 0,142"/></g>' +
      '<g class="yield-pair">' +
      '<g transform="translate(1110 840)"><polygon class="sr" points="-80,-58 80,-58 0,82"/><polygon class="sw" points="-50,-40 50,-40 0,46"/></g>' +
      '<g transform="translate(1520 840)"><polygon class="sr" points="0,-82 80,58 -80,58"/><polygon class="sw" points="0,-46 50,40 -50,40"/><rect x="-6" y="-22" width="12" height="36" rx="5" class="sk"/><circle cx="0" cy="26" r="7" class="sk"/></g>' +
      '</g></svg>' +
      '<div class="words" style="left:960px;top:140px;width:820px">' +
      '<div class="tag yield-tag">Control sign</div>' +
      '<h2 class="line">Yield</h2>' +
      '<p class="sub yield-sub">Give way to traffic and pedestrians. Stop only if you have to.</p></div>' +
      '<p class="sub yield-l1" style="position:absolute;left:1000px;top:950px;width:240px;text-align:center;font-size:30px;margin:0">Point down: give way</p>' +
      '<p class="sub yield-l2" style="position:absolute;left:1400px;top:950px;width:240px;text-align:center;font-size:30px;margin:0">Point up: danger ahead</p>' +
      '</div>'));
    this.sign = kit.stage.querySelector('.yield-sign');
    this.out = kit.stage.querySelector('.yield-out');
    this.inn = kit.stage.querySelector('.yield-in');
    this.pair = kit.stage.querySelector('.yield-pair').style;
    this.l1 = kit.stage.querySelector('.yield-l1').style;
    this.l2 = kit.stage.querySelector('.yield-l2').style;
    this.tag = kit.stage.querySelector('.yield-tag').style;
    this.sub = kit.stage.querySelector('.yield-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const po = eob(seg(t, 0.2, 1.0), 1.6);
    this.out.setAttribute('transform', 'scale(' + Math.max(0, po).toFixed(3) + ') rotate(' + lerp(-120, 0, eo(seg(t, 0.2, 1.0))).toFixed(1) + ')');
    const pi = eob(seg(t, 0.8, 1.4), 1.8);
    this.inn.setAttribute('transform', 'scale(' + Math.max(0, pi).toFixed(3) + ')');
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(500 ' + (470 - t * 1.5).toFixed(1) + ') scale(' + br.toFixed(4) + ')');
    this.tag.opacity = eo(seg(t, 1.3, 1.7));
    TextFx.fadeFromRight(this.line, t, 1.5);
    this.sub.opacity = eo(seg(t, 2.2, 2.8));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 2.2, 2.8))) + 'px)';
    const pp = eo(seg(t, 5.0, 5.6));
    this.pair.opacity = pp;
    this.pair.transform = 'translateY(' + lerp(40, 0, pp) + 'px)';
    this.l1.opacity = eo(seg(t, 5.4, 5.9));
    this.l2.opacity = eo(seg(t, 6.0, 6.5));
  },
});
},
  "yieldped": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('yieldped', {
  init(kit) {
    let zebra = '';
    for (let i = 0; i < 5; i++) zebra += '<rect x="1330" y="' + (872 + i * 42) + '" width="200" height="24" fill="#FFFFFF"/>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="yieldped-sign"><polygon class="shadow" points="-224,-150 256,-150 16,262"/>' +
      '<polygon class="sr yieldped-out" points="-240,-170 240,-170 0,246"/>' +
      '<polygon class="sw yieldped-in" points="-165,-126 165,-126 0,160"/>' +
      '<g class="yieldped-fig" transform="translate(0 -6) scale(1.05)">' + SG.person('sk') + '</g></g>' +
      '<g class="yieldped-road"><rect class="road" x="0" y="860" width="1920" height="220"/>' + zebra +
      '<g class="yieldped-car"><rect x="-150" y="-46" width="150" height="76" rx="22" style="fill:var(--main)"/><rect x="-50" y="-36" width="38" height="30" rx="8" fill="#FFFFFF" opacity=".85"/><circle cx="-118" cy="32" r="16" class="sk"/><circle cx="-34" cy="32" r="16" class="sk"/></g>' +
      '<g class="yieldped-walk">' + SG.person('sk') + '</g></g>' +
      '</svg>' +
      '<div class="words" style="left:960px;top:130px;width:840px">' +
      '<div class="tag yieldped-tag">Control sign</div>' +
      '<h2 class="line">Yield to pedestrians</h2>' +
      '<p class="sub yieldped-sub">Give way to anyone on the crossing, or about to step onto it, on your side of the road.</p></div></div>'));
    this.sign = kit.stage.querySelector('.yieldped-sign');
    this.out = kit.stage.querySelector('.yieldped-out');
    this.inn = kit.stage.querySelector('.yieldped-in');
    this.fig = kit.stage.querySelector('.yieldped-fig').style;
    this.road = kit.stage.querySelector('.yieldped-road').style;
    this.car = kit.stage.querySelector('.yieldped-car');
    this.walk = kit.stage.querySelector('.yieldped-walk');
    this.tag = kit.stage.querySelector('.yieldped-tag').style;
    this.sub = kit.stage.querySelector('.yieldped-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    const po = eob(seg(t, 0.0, 1.0), 1.6);
    this.out.setAttribute('transform', 'scale(' + Math.max(0, po).toFixed(3) + ') rotate(' + lerp(-120, 0, eo(seg(t, 0.0, 1.0))).toFixed(1) + ')');
    const pi = eob(seg(t, 0.7, 1.5), 1.8);
    this.inn.setAttribute('transform', 'scale(' + Math.max(0, pi).toFixed(3) + ')');
    const f = eo(seg(t, 1.3, 2.2));
    this.fig.opacity = f;
    this.fig.transform = 'translateY(' + lerp(20, 0, f) + 'px)';
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(480 ' + (430 - t * 1.4).toFixed(1) + ') scale(' + br.toFixed(4) + ')');
    this.tag.opacity = eo(seg(t, 1.2, 2.0));
    TextFx.fadeFromRight(this.line, t, 1.5, { dur: 0.8 });
    const sp = eo(seg(t, 2.6, 3.6));
    this.sub.opacity = sp;
    this.sub.transform = 'translateX(' + lerp(26, 0, sp) + 'px)';
    const r = eo(seg(t, 4.0, 5.0));
    this.road.opacity = r;
    this.road.transform = 'translateY(' + lerp(60, 0, r) + 'px)';
    const x = lerp(-200, 1290, eo(seg(t, 4.6, 6.8)));
    const dip = Math.sin(Math.PI * seg(t, 6.7, 7.1)) * 4;
    this.car.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + (930 + dip).toFixed(1) + ')');
    const wy = lerp(850, 1130, eio(seg(t, 5.6, 10.5)));
    const step = Math.sin(t * 6) * 3;
    this.walk.setAttribute('transform', 'translate(' + (1430 + step).toFixed(1) + ' ' + wy.toFixed(1) + ') scale(0.9)');
  },
});

},
  "stopgo": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('stopgo', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="stopgo-all">' +
      '<rect class="shadow" x="508" y="400" width="24" height="560" rx="8"/><rect class="sk stopgo-pole" x="500" y="390" width="24" height="560" rx="8"/>' +
      '<g transform="translate(400 900)" class="stopgo-man">' + SG.person('sk') + '</g>' +
      '<g class="stopgo-board">' +
      '<g class="stopgo-front"><polygon class="shadow" points="' + SG.oct(10, 16, 196) + '"/><polygon class="sw" points="' + SG.oct(0, 0, 196) + '"/><polygon class="sr" points="' + SG.oct(0, 0, 180) + '"/>' +
      '<text x="0" y="40" text-anchor="middle" fill="#FFFFFF" style="font:700 112px var(--display, var(--sans, system-ui, sans-serif)); letter-spacing:4px">STOP</text></g>' +
      '<g class="stopgo-back"><circle class="shadow" cx="10" cy="16" r="196"/><circle class="sw" r="196"/><circle r="180" fill="#1E8A45"/>' +
      '<text x="0" y="44" text-anchor="middle" fill="#FFFFFF" style="font:700 128px var(--display, var(--sans, system-ui, sans-serif)); letter-spacing:4px">GO</text></g>' +
      '</g></g></svg>' +
      '<div class="words" style="left:960px;top:150px;width:820px">' +
      '<div class="tag stopgo-tag">Control sign: road works</div>' +
      '<h2 class="line">Stop/Go sign</h2>' +
      '<p class="sub stopgo-sub">A hand-held sign at road works.</p>' +
      '<p class="sub stopgo-r1" style="color:var(--second)">When it says <b>STOP</b>: stop.</p>' +
      '<p class="sub stopgo-r2" style="color:var(--second)">When it says <b>GO</b>: go carefully.</p></div></div>'));
    this.all = kit.stage.querySelector('.stopgo-all');
    this.pole = kit.stage.querySelector('.stopgo-pole').style;
    this.man = kit.stage.querySelector('.stopgo-man').style;
    this.board = kit.stage.querySelector('.stopgo-board');
    this.front = kit.stage.querySelector('.stopgo-front').style;
    this.back = kit.stage.querySelector('.stopgo-back').style;
    this.tag = kit.stage.querySelector('.stopgo-tag').style;
    this.sub = kit.stage.querySelector('.stopgo-sub').style;
    this.r1 = kit.stage.querySelector('.stopgo-r1').style;
    this.r2 = kit.stage.querySelector('.stopgo-r2').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    const pl = eo(seg(t, 0.0, 0.9));
    this.pole.opacity = pl;
    this.pole.transform = 'translateY(' + lerp(80, 0, pl) + 'px)';
    this.man.opacity = eo(seg(t, 0.4, 1.2));
    const b = eob(seg(t, 0.5, 1.5), 1.6);
    const fl = eio(seg(t, 6.0, 7.2));
    const sx = Math.max(0.02, Math.abs(Math.cos(Math.PI * fl)));
    this.front.opacity = fl < 0.5 ? 1 : 0;
    this.back.opacity = fl >= 0.5 ? 1 : 0;
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.board.setAttribute('transform', 'translate(512 340) scale(' + (Math.max(0, b) * br * sx).toFixed(4) + ' ' + (Math.max(0, b) * br).toFixed(4) + ')');
    this.all.setAttribute('transform', 'translate(0 ' + (-t * 1.3).toFixed(1) + ')');
    this.tag.opacity = eo(seg(t, 1.2, 2.0));
    TextFx.fadeFromRight(this.line, t, 1.4, { dur: 0.8 });
    const s = eo(seg(t, 2.4, 3.4));
    this.sub.opacity = s;
    this.sub.transform = 'translateX(' + lerp(26, 0, s) + 'px)';
    const a = eo(seg(t, 3.6, 4.6));
    this.r1.opacity = a;
    this.r1.transform = 'translateX(' + lerp(26, 0, a) + 'px)';
    const c = eo(seg(t, 7.2, 8.2));
    this.r2.opacity = c;
    this.r2.transform = 'translateX(' + lerp(26, 0, c) + 'px)';
  },
});

},
  "leftturn": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('leftturn', {
  init(kit) {
    const r = 170;
    let wedges = '';
    for (let i = 0; i < 8; i++) wedges += '<polygon class="sr leftturn-w" points="' + SG.octWedge(0, 0, r + 1, i) + '"/>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="leftturn-sign">' +
      '<polygon class="shadow" points="' + SG.oct(10, 16, r + 12) + '"/>' +
      '<polygon class="sw leftturn-rim" points="' + SG.oct(0, 0, r + 12) + '"/>' + wedges +
      '<text class="leftturn-txt" x="0" y="36" text-anchor="middle" fill="#FFFFFF" style="font:700 104px var(--display, var(--sans, system-ui, sans-serif)); letter-spacing:4px">STOP</text>' +
      '<g class="leftturn-plate"><rect class="shadow" x="-196" y="226" width="400" height="170" rx="16"/><rect class="sw" x="-204" y="214" width="408" height="170" rx="16"/><rect class="edge" x="-204" y="214" width="408" height="170" rx="16"/>' +
      '<text x="-60" y="312" text-anchor="middle" style="font:700 52px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second); letter-spacing:2px">EXCEPT</text>' +
      '<path class="leftturn-arrow" d="M150 360 V280 Q150 252 122 252 H74" fill="none" stroke-width="18" stroke-linecap="round" stroke-dasharray="190" style="stroke:var(--second)"/>' +
      '<path class="leftturn-head" d="M84 226 L52 252 L84 278 Z" style="fill:var(--second)"/></g>' +
      '</g></svg>' +
      '<div class="words" style="left:960px;top:180px;width:820px">' +
      '<div class="tag leftturn-tag">Control sign with a plate</div>' +
      '<h2 class="line">Except left turn</h2>' +
      '<p class="sub leftturn-sub">A stop sign with this plate: you may turn left without stopping, if it is safe.</p></div></div>'));
    this.w = [...kit.stage.querySelectorAll('.leftturn-w')];
    this.sign = kit.stage.querySelector('.leftturn-sign');
    this.rim = kit.stage.querySelector('.leftturn-rim').style;
    this.txt = kit.stage.querySelector('.leftturn-txt').style;
    this.plate = kit.stage.querySelector('.leftturn-plate').style;
    this.arrow = kit.stage.querySelector('.leftturn-arrow');
    this.head = kit.stage.querySelector('.leftturn-head').style;
    this.tag = kit.stage.querySelector('.leftturn-tag').style;
    this.sub = kit.stage.querySelector('.leftturn-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    for (let i = 0; i < 8; i++) {
      const p = eob(seg(t, i * 0.12, 0.7 + i * 0.12), 1.6);
      this.w[i].setAttribute('transform', 'translate(0 ' + lerp(-560, 0, p).toFixed(1) + ') rotate(' + lerp(24 - i * 6, 0, p).toFixed(2) + ')');
      this.w[i].style.opacity = p > 0 ? 1 : 0;
    }
    this.rim.opacity = eo(seg(t, 1.3, 1.8));
    const s = eob(seg(t, 1.6, 2.2), 1.8);
    this.txt.opacity = Math.min(1, s * 1.4);
    this.txt.transform = 'scale(' + lerp(0.5, 1, s) + ')';
    const pl = eo(seg(t, 2.6, 3.6));
    this.plate.opacity = pl;
    this.plate.transform = 'translateY(' + lerp(60, 0, pl) + 'px)';
    this.arrow.setAttribute('stroke-dashoffset', (190 * (1 - eio(seg(t, 3.6, 4.6)))).toFixed(1));
    this.head.opacity = eo(seg(t, 4.4, 4.9));
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(520 ' + (360 - t * 1.4).toFixed(1) + ') scale(' + br.toFixed(4) + ')');
    this.tag.opacity = eo(seg(t, 1.8, 2.6));
    TextFx.fadeFromRight(this.line, t, 2.0, { dur: 0.8 });
    const sp = eo(seg(t, 3.2, 4.2));
    this.sub.opacity = sp;
    this.sub.transform = 'translateX(' + lerp(26, 0, sp) + 'px)';
  },
});

},
  "ppz": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
const PPZ_P = [[300, 380], [560, 360], [700, 700], [250, 780]];
const PPZ_C = ['Deliver', 'Collect', 'Do work', 'Deal with an emergency'];
kit.scene('ppz', {
  init(kit) {
    let ppl = '', chips = '';
    PPZ_P.forEach(function () { ppl += '<g class="ppz-p">' + SG.person('sk') + '</g>'; });
    PPZ_C.forEach(function (c) { chips += '<div class="tag ppz-chip" style="background:#FFFFFF;color:var(--second);border:3px solid color-mix(in srgb, var(--main) 35%, var(--ground))">' + c + '</div>'; });
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="ppz-zone"><rect class="shadow" x="134" y="294" width="700" height="600" rx="36"/>' +
      '<rect x="120" y="280" width="700" height="600" rx="36" style="fill:color-mix(in srgb, var(--accent) 22%, #FFFFFF); stroke:color-mix(in srgb, var(--second) 18%, transparent); stroke-width:3"/>' +
      '<rect x="120" y="280" width="700" height="600" rx="36" fill="none" stroke-width="10" stroke-dasharray="30 22" style="stroke:var(--main)"/></g>' +
      ppl +
      '<g class="ppz-car"><rect x="-75" y="-40" width="150" height="80" rx="22" style="fill:var(--main)"/><rect x="18" y="-30" width="34" height="60" rx="8" fill="#FFFFFF" opacity=".85"/>' +
      '<g class="ppz-badge" transform="translate(0 -92)"><rect x="-96" y="-32" width="192" height="64" rx="32" style="fill:var(--accent)"/><text y="13" text-anchor="middle" style="font:700 36px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)">15 km/h</text></g></g>' +
      '</svg>' +
      '<div class="words" style="left:960px;top:110px;width:840px">' +
      '<div class="tag ppz-tag">Control sign</div>' +
      '<h2 class="line">Pedestrian priority zone</h2>' +
      '<p class="sub ppz-sub">Vehicles may enter only to:</p>' +
      '<div style="display:flex;flex-wrap:wrap;gap:18px">' + chips + '</div>' +
      '<div class="tag ppz-max" style="background:var(--accent);color:var(--second);font-size:40px">No faster than 15 km/h</div></div></div>'));
    this.zone = kit.stage.querySelector('.ppz-zone');
    this.p = [...kit.stage.querySelectorAll('.ppz-p')];
    this.chips = [...kit.stage.querySelectorAll('.ppz-chip')].map(function (e) { return e.style; });
    this.car = kit.stage.querySelector('.ppz-car');
    this.badge = kit.stage.querySelector('.ppz-badge').style;
    this.tag = kit.stage.querySelector('.ppz-tag').style;
    this.sub = kit.stage.querySelector('.ppz-sub').style;
    this.max = kit.stage.querySelector('.ppz-max').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    const z = eob(seg(t, 0.0, 1.0), 1.5);
    const br = 1 + 0.008 * Math.sin(t * 2 * Math.PI / 3.2);
    this.zone.setAttribute('transform', 'translate(470 ' + (580 - t * 1.2).toFixed(1) + ') scale(' + (Math.max(0, z) * br).toFixed(4) + ') translate(-470 -580)');
    for (let i = 0; i < 4; i++) {
      const s = eob(seg(t, 0.8 + i * 0.3, 1.6 + i * 0.3), 1.7);
      const sway = Math.sin(t * 1.4 + i * 1.7) * 6;
      this.p[i].setAttribute('transform', 'translate(' + (PPZ_P[i][0] + sway).toFixed(1) + ' ' + (PPZ_P[i][1] - t * 1.2).toFixed(1) + ') scale(' + Math.max(0, s).toFixed(4) + ')');
    }
    this.tag.opacity = eo(seg(t, 1.2, 2.0));
    TextFx.fadeFromRight(this.line, t, 1.4, { dur: 0.8 });
    const sp = eo(seg(t, 2.8, 3.8));
    this.sub.opacity = sp;
    this.sub.transform = 'translateX(' + lerp(26, 0, sp) + 'px)';
    for (let i = 0; i < 4; i++) {
      const c = eo(seg(t, 4.2 + i * 1.1, 5.1 + i * 1.1));
      this.chips[i].opacity = c;
      this.chips[i].transform = 'translateX(' + lerp(30, 0, c) + 'px)';
    }
    const m = eob(seg(t, 9.0, 9.9), 1.6);
    this.max.opacity = Math.min(1, Math.max(0, m) * 1.4);
    this.max.transform = 'scale(' + lerp(0.7, 1, Math.min(1, Math.max(0, m))).toFixed(4) + ')';
    const cx = lerp(-160, 470, eo(seg(t, 8.6, 13.0)));
    this.car.setAttribute('transform', 'translate(' + cx.toFixed(1) + ' ' + (560 - t * 1.2).toFixed(1) + ')');
    const b = eob(seg(t, 9.2, 9.9), 1.7);
    this.badge.opacity = Math.min(1, Math.max(0, b) * 1.4);
  },
});

},
  "noentry": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('noentry', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="noentry-sign"><circle class="shadow" cx="14" cy="20" r="232"/><circle class="sw" r="232"/>' +
      '<circle class="sr noentry-disc" r="216"/>' +
      '<rect class="sw noentry-bar" x="-160" y="-38" width="320" height="76" rx="10"/></g>' +
      '<g class="noentry-road"><rect class="road" x="0" y="860" width="1920" height="220"/>' +
      '<line class="lane" x1="0" y1="970" x2="1920" y2="970"/>' +
      '<g transform="translate(1500 920)"><circle r="40" class="sr"/><rect x="-28" y="-9" width="56" height="18" rx="4" class="sw"/></g>' +
      '<g class="noentry-car"><rect x="-150" y="-46" width="150" height="76" rx="22" style="fill:var(--main)"/><rect x="-50" y="-36" width="38" height="30" rx="8" fill="#FFFFFF" opacity=".85"/><circle cx="-118" cy="32" r="16" class="sk"/><circle cx="-34" cy="32" r="16" class="sk"/></g></g>' +
      '</svg>' +
      '<div class="words" style="left:960px;top:200px;width:820px">' +
      '<div class="tag noentry-tag">Control sign</div>' +
      '<h2 class="line">No entry</h2>' +
      '<p class="sub noentry-sub">You may not enter this road.</p></div></div>'));
    this.sign = kit.stage.querySelector('.noentry-sign');
    this.disc = kit.stage.querySelector('.noentry-disc');
    this.bar = kit.stage.querySelector('.noentry-bar');
    this.road = kit.stage.querySelector('.noentry-road').style;
    this.car = kit.stage.querySelector('.noentry-car');
    this.tag = kit.stage.querySelector('.noentry-tag').style;
    this.sub = kit.stage.querySelector('.noentry-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const d = eob(seg(t, 0.1, 0.8), 1.7);
    this.disc.setAttribute('transform', 'scale(' + Math.max(0, d).toFixed(3) + ')');
    const b = eo(seg(t, 0.7, 1.2));
    this.bar.setAttribute('transform', 'translate(' + lerp(-420, 0, b).toFixed(1) + ' 0) scale(' + lerp(0.4, 1, b).toFixed(3) + ' 1)');
    this.bar.style.opacity = b > 0 ? 1 : 0;
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(520 ' + (420 - t * 1.5).toFixed(1) + ') scale(' + br.toFixed(4) + ')');
    this.tag.opacity = eo(seg(t, 1.1, 1.5));
    TextFx.fadeFromRight(this.line, t, 1.3);
    this.sub.opacity = eo(seg(t, 2.0, 2.6));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 2.0, 2.6))) + 'px)';
    this.road.opacity = eo(seg(t, 2.6, 3.1));
    let x = lerp(-200, 1400, eo(seg(t, 3.0, 4.4)));
    x -= lerp(0, 1700, ei(seg(t, 5.0, 6.6)));
    const kick = -Math.sin(Math.PI * seg(t, 4.3, 4.7)) * 10;
    this.car.setAttribute('transform', 'translate(' + (x + kick).toFixed(1) + ' 930)');
  },
});
},
  "command": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const CM_SUBS = ['Keep left: pass the obstruction on the side shown.', 'Roundabout: drive clockwise around it.', 'Headlights: switch your headlights on (dipped).'];
const CM_T = [0, 4.3, 8.1];
kit.scene('command', {
  init(kit) {
    const W = 'fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="command-sign"><circle class="shadow" cx="14" cy="20" r="240"/><circle class="sw command-rim" r="240"/>' +
      '<circle class="sb command-disc" r="222"/>' +
      '<g class="command-s0"><path d="M80 -80 L-70 70" ' + W + ' stroke-width="40"/><path d="M-70 -10 L-70 70 L10 70" ' + W + ' stroke-width="40"/></g>' +
      '<g class="command-s1"><circle r="100" ' + W + ' stroke-width="30" stroke-dasharray="150 59.4"/>' +
      '<path d="M0 -132 L44 -100 L0 -68 Z" fill="#FFFFFF" transform="rotate(25)"/><path d="M0 -132 L44 -100 L0 -68 Z" fill="#FFFFFF" transform="rotate(145)"/><path d="M0 -132 L44 -100 L0 -68 Z" fill="#FFFFFF" transform="rotate(265)"/></g>' +
      '<g class="command-s2"><path d="M-30 -90 A90 90 0 0 0 -30 90 Z" fill="#FFFFFF"/>' +
      '<path d="M10 -70 H120 M10 -24 H120 M10 24 H120 M10 70 H120" ' + W + ' stroke-width="22"/></g>' +
      '</g></svg>' +
      '<div class="words" style="left:960px;top:220px;width:820px">' +
      '<div class="tag command-tag">Command sign: blue disc</div>' +
      '<h2 class="line">You must</h2>' +
      '<p class="sub command-sub">Keep left: pass the obstruction on the side shown.</p></div></div>'));
    this.sign = kit.stage.querySelector('.command-sign');
    this.rim = kit.stage.querySelector('.command-rim');
    this.disc = kit.stage.querySelector('.command-disc');
    this.s = [0, 1, 2].map(function (i) { return kit.stage.querySelector('.command-s' + i); });
    this.tag = kit.stage.querySelector('.command-tag').style;
    this.subEl = kit.stage.querySelector('.command-sub');
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const r = eob(seg(t, 0.1, 0.7), 1.6);
    this.rim.setAttribute('transform', 'scale(' + Math.max(0, r).toFixed(3) + ')');
    const d = eob(seg(t, 0.4, 1.0), 1.6);
    this.disc.setAttribute('transform', 'scale(' + Math.max(0, d).toFixed(3) + ')');
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(520 ' + (470 - t * 1.2).toFixed(1) + ') scale(' + br.toFixed(4) + ')');
    for (let i = 0; i < 3; i++) {
      const a = i === 0 ? 1.0 : CM_T[i];
      const end = i === 2 ? 99 : CM_T[i + 1];
      const pin = eob(seg(t, a, a + 0.5), 1.7);
      const pout = eo(seg(t, end - 0.35, end));
      const sc = Math.max(0, pin) * (1 - pout);
      const spin = i === 1 ? -t * 40 : 0;
      this.s[i].setAttribute('transform', 'scale(' + sc.toFixed(3) + ') rotate(' + (lerp(-30, 0, eo(seg(t, a, a + 0.5))) + spin).toFixed(1) + ')');
      this.s[i].style.opacity = sc > 0.01 ? 1 : 0;
    }
    this.tag.opacity = eo(seg(t, 1.0, 1.4));
    TextFx.fadeFromRight(this.line, t, 1.2);
    let k = 0; if (t >= CM_T[2]) k = 2; else if (t >= CM_T[1]) k = 1;
    if (this.subEl.textContent !== CM_SUBS[k]) this.subEl.textContent = CM_SUBS[k];
    const near = Math.min(Math.abs(t - CM_T[1]), Math.abs(t - CM_T[2]));
    const op = Math.min(eo(seg(t, 1.9, 2.5)), Math.min(1, near / 0.3));
    this.subEl.style.opacity = op;
    this.subEl.style.transform = 'translateX(' + lerp(26, 0, op) + 'px)';
  },
});
},
  "arrow": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('arrow', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="arrow-sign"><circle class="shadow" cx="14" cy="20" r="240"/><circle class="sw arrow-rim" r="240"/>' +
      '<circle class="sb arrow-disc" r="222"/>' +
      '<g class="arrow-a"><path class="arrow-shaft" d="M0 130 V-60" fill="none" stroke-width="44" stroke-linecap="round" stroke="#FFFFFF" stroke-dasharray="190"/>' +
      '<path class="arrow-head" d="M-80 -30 L0 -130 L80 -30 Z" fill="#FFFFFF" stroke="#FFFFFF" stroke-width="10" stroke-linejoin="round"/></g>' +
      '</g></svg>' +
      '<div class="words" style="left:960px;top:240px;width:820px">' +
      '<div class="tag arrow-tag">Command sign: blue disc</div>' +
      '<h2 class="line">Arrow</h2>' +
      '<p class="sub arrow-sub">Drive only in the direction the arrow shows.</p></div></div>'));
    this.sign = kit.stage.querySelector('.arrow-sign');
    this.rim = kit.stage.querySelector('.arrow-rim');
    this.disc = kit.stage.querySelector('.arrow-disc');
    this.a = kit.stage.querySelector('.arrow-a');
    this.shaft = kit.stage.querySelector('.arrow-shaft');
    this.head = kit.stage.querySelector('.arrow-head');
    this.tag = kit.stage.querySelector('.arrow-tag').style;
    this.sub = kit.stage.querySelector('.arrow-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    const r = eob(seg(t, 0.0, 0.8), 1.6);
    this.rim.setAttribute('transform', 'scale(' + Math.max(0, r).toFixed(3) + ')');
    const d = eob(seg(t, 0.4, 1.2), 1.6);
    this.disc.setAttribute('transform', 'scale(' + Math.max(0, d).toFixed(3) + ')');
    this.shaft.setAttribute('stroke-dashoffset', (190 * (1 - eio(seg(t, 1.2, 2.2)))).toFixed(1));
    const h = eob(seg(t, 2.0, 2.7), 1.8);
    this.head.setAttribute('transform', 'translate(0 -80) scale(' + Math.max(0, h).toFixed(3) + ') translate(0 80)');
    const turn = eio(seg(t, 5.6, 6.8)) * -90 + eio(seg(t, 8.0, 9.2)) * 90;
    this.a.setAttribute('transform', 'rotate(' + turn.toFixed(2) + ')');
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(520 ' + (470 - t * 1.3).toFixed(1) + ') scale(' + br.toFixed(4) + ')');
    this.tag.opacity = eo(seg(t, 1.2, 2.0));
    TextFx.fadeFromRight(this.line, t, 1.4, { dur: 0.8 });
    const sp = eo(seg(t, 2.6, 3.6));
    this.sub.opacity = sp;
    this.sub.transform = 'translateX(' + lerp(26, 0, sp) + 'px)';
  },
});

},
  "vehicles": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const VH_L = ['Taxi', 'Bus', 'Goods vehicle', 'Pedestrians', 'Cyclists'];
const VH_X = [300, 630, 960, 1290, 1620];
kit.scene('vehicles', {
  init(kit) {
    const W = 'fill="#FFFFFF"', S = 'fill="none" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"';
    const sym = [
      '<rect x="-62" y="-22" width="124" height="44" rx="12" ' + W + '/><rect x="-40" y="-48" width="76" height="30" rx="10" ' + W + '/><text y="-56" text-anchor="middle" style="font:700 22px var(--display, var(--sans, system-ui, sans-serif)); fill:#FFFFFF">TAXI</text><circle cx="-34" cy="26" r="13" class="sb"/><circle cx="34" cy="26" r="13" class="sb"/>',
      '<rect x="-72" y="-44" width="144" height="76" rx="12" ' + W + '/><rect x="-60" y="-32" width="120" height="24" rx="5" class="sb"/><circle cx="-40" cy="34" r="13" class="sb"/><circle cx="40" cy="34" r="13" class="sb"/>',
      '<rect x="-74" y="-44" width="96" height="70" rx="6" ' + W + '/><path d="M28 -22 H52 L72 2 V26 H28 Z" ' + W + '/><circle cx="-46" cy="32" r="13" class="sb"/><circle cx="48" cy="32" r="13" class="sb"/>',
      '<g transform="translate(0 10) scale(1.1)">' + SG.person('sw') + '</g>',
      '<circle cx="-42" cy="30" r="30" ' + S + ' stroke-width="9"/><circle cx="46" cy="30" r="30" ' + S + ' stroke-width="9"/><path d="M-42 30 L-6 -12 L46 30 M-6 -12 L20 -14" ' + S + ' stroke-width="9"/><path d="M-8 -16 L-14 -50" ' + S + ' stroke-width="14"/><circle cx="-12" cy="-72" r="14" ' + W + '/>'
    ];
    let signs = '', labels = '';
    for (let i = 0; i < 5; i++) {
      signs += '<g class="vehicles-s"><circle class="shadow" cx="10" cy="14" r="128"/><circle class="sw" r="128"/><circle class="sb" r="116"/><g class="vehicles-y">' + sym[i] + '</g></g>';
      labels += '<p class="sub vehicles-l" style="position:absolute;left:' + (VH_X[i] - 160) + 'px;top:820px;width:320px;text-align:center;margin:0;color:var(--second)">' + VH_L[i] + '</p>';
    }
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' + signs + '</svg>' +
      '<div class="words" style="left:150px;top:80px;width:1620px">' +
      '<div class="tag vehicles-tag">Command sign: blue disc</div>' +
      '<h2 class="line">Only for these users</h2>' +
      '<p class="sub vehicles-sub">A vehicle or person symbol: that road or lane is only for those users.</p></div>' + labels + '</div>'));
    this.s = [...kit.stage.querySelectorAll('.vehicles-s')];
    this.y = [...kit.stage.querySelectorAll('.vehicles-y')];
    this.l = [...kit.stage.querySelectorAll('.vehicles-l')].map(function (e) { return e.style; });
    this.tag = kit.stage.querySelector('.vehicles-tag').style;
    this.sub = kit.stage.querySelector('.vehicles-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    this.tag.opacity = eo(seg(t, 0.0, 0.8));
    TextFx.fadeFromRight(this.line, t, 0.2, { dur: 0.8 });
    const sp = eo(seg(t, 1.2, 2.2));
    this.sub.opacity = sp;
    this.sub.transform = 'translateX(' + lerp(26, 0, sp) + 'px)';
    for (let i = 0; i < 5; i++) {
      const a = 2.6 + i * 1.3;
      const s = eob(seg(t, a, a + 0.9), 1.6);
      const br = 1 + 0.012 * Math.sin((t + i * 0.7) * 2 * Math.PI / 3.2);
      this.s[i].setAttribute('transform', 'translate(' + VH_X[i] + ' ' + (640 - t * 1.2).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
      const y = eob(seg(t, a + 0.5, a + 1.2), 1.8);
      this.y[i].setAttribute('transform', 'scale(' + Math.max(0, y).toFixed(4) + ')');
      const l = eo(seg(t, a + 0.7, a + 1.5));
      this.l[i].opacity = l;
      this.l[i].transform = 'translateY(' + lerp(20, 0, l).toFixed(1) + 'px)';
    }
  },
});

},
  "prohibit": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const PR_SUBS = ['No U-turn.', 'No parking: you may stop briefly to load or drop off.', 'No stopping at all, except in an emergency.'];
const PR_T = [0, 4.3, 8.1];
kit.scene('prohibit', {
  init(kit) {
    const K = 'fill="none" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--second)"';
    const C = 2 * Math.PI * 200;
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="prohibit-sign"><circle class="shadow" cx="14" cy="20" r="240"/><circle class="sw prohibit-face" r="240"/>' +
      '<circle class="prohibit-ring" r="200" fill="none" stroke-width="56" style="stroke:var(--sign-red)" stroke-dasharray="' + C.toFixed(1) + '" transform="rotate(-90)"/>' +
      '<g class="prohibit-s0"><path d="M-60 90 V-20 A60 60 0 0 1 60 -20 V60" ' + K + ' stroke-width="34"/><path d="M24 30 L60 72 L96 30" ' + K + ' stroke-width="34"/></g>' +
      '<g class="prohibit-s1"><text x="0" y="62" text-anchor="middle" style="font:700 200px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)">P</text></g>' +
      '<g class="prohibit-s2"><text x="0" y="62" text-anchor="middle" style="font:700 200px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)">S</text></g>' +
      '<line class="prohibit-slash" x1="-150" y1="-150" x2="150" y2="150" stroke-width="40" stroke-linecap="butt" style="stroke:var(--sign-red)" stroke-dasharray="424.3"/>' +
      '</g></svg>' +
      '<div class="words" style="left:960px;top:220px;width:840px">' +
      '<div class="tag no prohibit-tag">Prohibition sign: red ring and line</div>' +
      '<h2 class="line">You must not</h2>' +
      '<p class="sub prohibit-sub">No U-turn.</p></div></div>'));
    this.C = C;
    this.sign = kit.stage.querySelector('.prohibit-sign');
    this.face = kit.stage.querySelector('.prohibit-face');
    this.ring = kit.stage.querySelector('.prohibit-ring');
    this.slash = kit.stage.querySelector('.prohibit-slash');
    this.s = [0, 1, 2].map(function (i) { return kit.stage.querySelector('.prohibit-s' + i); });
    this.tag = kit.stage.querySelector('.prohibit-tag').style;
    this.subEl = kit.stage.querySelector('.prohibit-sub');
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const f = eob(seg(t, 0.1, 0.6), 1.6);
    this.face.setAttribute('transform', 'scale(' + Math.max(0, f).toFixed(3) + ')');
    this.ring.setAttribute('stroke-dashoffset', (this.C * (1 - eio(seg(t, 0.3, 1.1)))).toFixed(1));
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(520 ' + (470 - t * 1.2).toFixed(1) + ') scale(' + br.toFixed(4) + ')');
    let k = 0; if (t >= PR_T[2]) k = 2; else if (t >= PR_T[1]) k = 1;
    for (let i = 0; i < 3; i++) {
      const a = i === 0 ? 1.1 : PR_T[i];
      const end = i === 2 ? 99 : PR_T[i + 1];
      const sc = Math.max(0, eob(seg(t, a, a + 0.45), 1.7)) * (1 - eo(seg(t, end - 0.35, end)));
      this.s[i].setAttribute('transform', 'scale(' + sc.toFixed(3) + ')');
      this.s[i].style.opacity = sc > 0.01 ? 1 : 0;
    }
    const sa = (k === 0 ? 1.6 : PR_T[k] + 0.5);
    const send = k === 2 ? 99 : PR_T[k + 1];
    const draw = eo(seg(t, sa, sa + 0.35)) * (1 - eo(seg(t, send - 0.4, send - 0.1)));
    this.slash.setAttribute('stroke-dashoffset', (424.3 * (1 - draw)).toFixed(1));
    this.tag.opacity = eo(seg(t, 1.0, 1.4));
    TextFx.fadeFromRight(this.line, t, 1.2);
    if (this.subEl.textContent !== PR_SUBS[k]) this.subEl.textContent = PR_SUBS[k];
    const near = Math.min(Math.abs(t - PR_T[1]), Math.abs(t - PR_T[2]));
    const op = Math.min(eo(seg(t, 1.9, 2.5)), Math.min(1, near / 0.3));
    this.subEl.style.opacity = op;
    this.subEl.style.transform = 'translateX(' + lerp(26, 0, op) + 'px)';
  },
});
},
  "turns": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const TU_A = [0.4, 3.6];
kit.scene('turns', {
  init(kit) {
    const K = 'fill="none" stroke-width="34" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--second)"';
    const sign = function (flip) {
      return '<g class="turns-g"><circle class="shadow" cx="12" cy="18" r="190"/><circle class="sw turns-f" r="190"/>' +
        '<circle class="turns-ring" r="160" fill="none" stroke-width="44" style="stroke:var(--sign-red)" stroke-dasharray="1005.3" transform="rotate(-90)"/>' +
        '<g class="turns-a" transform="scale(' + flip + ' 1)"><path d="M40 100 V0 Q40 -40 0 -40 H-40" ' + K + '/><path d="M-30 -86 L-84 -40 L-30 6 Z" style="fill:var(--second)"/></g>' +
        '<line class="turns-slash" x1="-112" y1="-112" x2="112" y2="112" stroke-width="34" style="stroke:var(--sign-red)" stroke-dasharray="316.8"/></g>';
    };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' + sign(1) + sign(-1) + '</svg>' +
      '<div class="words" style="left:0;top:80px;width:1920px;text-align:center;align-items:center">' +
      '<div class="tag no turns-tag">Prohibition sign</div>' +
      '<h2 class="line">No turning</h2></div>' +
      '<div class="words turns-l" style="left:300px;top:800px;width:600px;text-align:center;align-items:center"><div class="tag no">No left turn</div></div>' +
      '<div class="words turns-l" style="left:1020px;top:800px;width:600px;text-align:center;align-items:center"><div class="tag no">No right turn</div></div>' +
      '<div class="words turns-foot" style="left:0;top:930px;width:1920px;text-align:center;align-items:center">' +
      '<p class="sub">The red ring and line: you must not turn that way.</p></div></div>'));
    this.g = [...kit.stage.querySelectorAll('.turns-g')];
    this.ring = [...kit.stage.querySelectorAll('.turns-ring')];
    this.a = [...kit.stage.querySelectorAll('.turns-a')].map(function (e) { return e.style; });
    this.slash = [...kit.stage.querySelectorAll('.turns-slash')];
    this.l = [...kit.stage.querySelectorAll('.turns-l')].map(function (e) { return e.style; });
    this.tag = kit.stage.querySelector('.turns-tag').style;
    this.foot = kit.stage.querySelector('.turns-foot').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    this.tag.opacity = eo(seg(t, 0.0, 0.8));
    TextFx.fadeFromRight(this.line, t, 0.2, { dur: 0.8 });
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    for (let i = 0; i < 2; i++) {
      const a = TU_A[i];
      const s = eob(seg(t, a, a + 0.9), 1.6);
      this.g[i].setAttribute('transform', 'translate(' + (i ? 1320 : 600) + ' ' + (540 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
      this.ring[i].setAttribute('stroke-dashoffset', (1005.3 * (1 - eio(seg(t, a + 0.3, a + 1.3)))).toFixed(1));
      this.a[i].opacity = eo(seg(t, a + 1.0, a + 1.6));
      this.slash[i].setAttribute('stroke-dashoffset', (316.8 * (1 - eo(seg(t, a + 1.6, a + 2.2)))).toFixed(1));
      const l = eo(seg(t, a + 2.0, a + 2.8));
      this.l[i].opacity = l;
      this.l[i].transform = 'translateY(' + lerp(24, 0, l).toFixed(1) + 'px)';
    }
    const f = eo(seg(t, 7.0, 8.0));
    this.foot.opacity = f;
    this.foot.transform = 'translateY(' + lerp(16, 0, f).toFixed(1) + 'px)';
  },
});

},
  "overtake": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('overtake', {
  init(kit) {
    const car = function (x, cls) { return '<g transform="translate(' + x + ' 10)"><rect x="-44" y="-34" width="88" height="58" rx="14" class="' + cls + '"/><rect x="-30" y="-60" width="60" height="34" rx="10" class="' + cls + '"/><circle cx="-26" cy="28" r="12" class="' + cls + '"/><circle cx="26" cy="28" r="12" class="' + cls + '"/></g>'; };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="overtake-sign"><circle class="shadow" cx="12" cy="18" r="200"/><circle class="sw" r="200"/>' +
      '<circle r="168" fill="none" stroke-width="46" style="stroke:var(--sign-red)"/>' +
      '<g class="overtake-cars">' + car(-58, 'sk') + car(58, 'sr') + '</g>' +
      '<line class="overtake-slash" x1="-118" y1="-118" x2="118" y2="118" stroke-width="34" style="stroke:var(--sign-red)" stroke-dasharray="333.7"/></g>' +
      '<g class="overtake-road"><rect class="road" x="0" y="800" width="1920" height="200"/>' +
      '<line class="lane solid overtake-solid" x1="200" y1="900" x2="1720" y2="900" stroke-dasharray="1520"/>' +
      '<line class="lane" x1="0" y1="900" x2="200" y2="900"/><line class="lane" x1="1720" y1="900" x2="1920" y2="900"/>' +
      '<path class="overtake-brk" d="M200 770 V750 H1720 V770" fill="none" stroke-width="8" stroke-linecap="round" style="stroke:var(--main)" stroke-dasharray="1560"/>' +
      '<text class="overtake-500" x="960" y="728" text-anchor="middle" style="font:700 56px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--main)">500 m</text></g>' +
      '</svg>' +
      '<div class="words" style="left:860px;top:140px;width:900px">' +
      '<div class="tag no overtake-tag">Prohibition sign</div>' +
      '<h2 class="line">No overtaking</h2>' +
      '<p class="sub overtake-sub">Do not overtake for the next 500 m.</p></div></div>'));
    this.sign = kit.stage.querySelector('.overtake-sign');
    this.cars = kit.stage.querySelector('.overtake-cars');
    this.slash = kit.stage.querySelector('.overtake-slash');
    this.road = kit.stage.querySelector('.overtake-road').style;
    this.solid = kit.stage.querySelector('.overtake-solid');
    this.brk = kit.stage.querySelector('.overtake-brk');
    this.t500 = kit.stage.querySelector('.overtake-500').style;
    this.tag = kit.stage.querySelector('.overtake-tag').style;
    this.sub = kit.stage.querySelector('.overtake-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(420 ' + (380 - t * 1.2).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    const c = eo(seg(t, 0.4, 0.9));
    this.cars.setAttribute('transform', 'translate(' + lerp(-60, 0, c).toFixed(1) + ' 0)');
    this.cars.style.opacity = c;
    this.slash.setAttribute('stroke-dashoffset', (333.7 * (1 - eo(seg(t, 1.0, 1.35)))).toFixed(1));
    this.tag.opacity = eo(seg(t, 0.8, 1.2));
    TextFx.fadeFromRight(this.line, t, 1.0);
    this.sub.opacity = eo(seg(t, 1.8, 2.4));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.8, 2.4))) + 'px)';
    this.road.opacity = eo(seg(t, 2.6, 3.1));
    this.solid.setAttribute('stroke-dashoffset', (1520 * (1 - eio(seg(t, 3.0, 5.0)))).toFixed(1));
    this.brk.setAttribute('stroke-dashoffset', (1560 * (1 - eio(seg(t, 3.2, 5.2)))).toFixed(1));
    const n = eob(seg(t, 5.0, 5.5), 1.8);
    this.t500.opacity = Math.min(1, Math.max(0, n) * 1.4);
    this.t500.transform = 'translateY(' + lerp(20, 0, Math.min(1, Math.max(0, n))) + 'px)';
  },
});
},
  "noise": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('noise', {
  init(kit) {
    const W = 'fill="none" stroke-width="14" stroke-linecap="round" style="stroke:var(--second)"';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="noise-sign"><circle class="shadow" cx="12" cy="18" r="200"/><circle class="sw" r="200"/>' +
      '<circle class="noise-ring" r="168" fill="none" stroke-width="46" style="stroke:var(--sign-red)" stroke-dasharray="1055.6" transform="rotate(-90)"/>' +
      '<g class="noise-horn"><rect x="-96" y="-22" width="44" height="44" rx="8" class="sk"/><path d="M-56 -16 L24 -62 V62 L-56 16 Z" class="sk"/></g>' +
      '<g class="noise-w1"><path d="M48 -34 Q66 0 48 34" ' + W + '/></g><g class="noise-w2"><path d="M76 -58 Q104 0 76 58" ' + W + '/></g>' +
      '<line class="noise-slash" x1="-118" y1="-118" x2="118" y2="118" stroke-width="34" style="stroke:var(--sign-red)" stroke-dasharray="333.7"/></g>' +
      '<g class="noise-road"><rect class="road" x="0" y="800" width="1920" height="200"/>' +
      '<line class="lane" x1="0" y1="900" x2="1920" y2="900"/>' +
      '<rect x="190" y="760" width="20" height="60" rx="6" class="sk"/>' +
      '<path class="noise-brk" d="M200 770 V750 H1640 V770" fill="none" stroke-width="8" stroke-linecap="round" style="stroke:var(--main)" stroke-dasharray="1480"/>' +
      '<text class="noise-100" x="920" y="728" text-anchor="middle" style="font:700 56px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--main)">100 m: no hooter</text></g>' +
      '</svg>' +
      '<div class="words" style="left:860px;top:140px;width:900px">' +
      '<div class="tag no noise-tag">Prohibition sign</div>' +
      '<h2 class="line">No excessive noise</h2>' +
      '<p class="sub noise-sub">Do not use your hooter for 100 m after the sign.</p></div></div>'));
    this.sign = kit.stage.querySelector('.noise-sign');
    this.ring = kit.stage.querySelector('.noise-ring');
    this.horn = kit.stage.querySelector('.noise-horn').style;
    this.w1 = kit.stage.querySelector('.noise-w1').style;
    this.w2 = kit.stage.querySelector('.noise-w2').style;
    this.slash = kit.stage.querySelector('.noise-slash');
    this.road = kit.stage.querySelector('.noise-road').style;
    this.brk = kit.stage.querySelector('.noise-brk');
    this.t100 = kit.stage.querySelector('.noise-100').style;
    this.tag = kit.stage.querySelector('.noise-tag').style;
    this.sub = kit.stage.querySelector('.noise-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    const s = eob(seg(t, 0.0, 0.8), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(420 ' + (380 - t * 1.2).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    this.ring.setAttribute('stroke-dashoffset', (1055.6 * (1 - eio(seg(t, 0.3, 1.3)))).toFixed(1));
    const h = eo(seg(t, 1.0, 1.7));
    this.horn.opacity = h;
    this.horn.transform = 'translateX(' + lerp(-30, 0, h) + 'px)';
    this.w1.opacity = eo(seg(t, 1.6, 2.1));
    this.w2.opacity = eo(seg(t, 1.9, 2.4));
    this.slash.setAttribute('stroke-dashoffset', (333.7 * (1 - eo(seg(t, 2.4, 3.0)))).toFixed(1));
    this.tag.opacity = eo(seg(t, 1.2, 2.0));
    TextFx.fadeFromRight(this.line, t, 1.4, { dur: 0.8 });
    const sp = eo(seg(t, 2.6, 3.6));
    this.sub.opacity = sp;
    this.sub.transform = 'translateX(' + lerp(26, 0, sp) + 'px)';
    this.road.opacity = eo(seg(t, 4.2, 5.0));
    this.brk.setAttribute('stroke-dashoffset', (1480 * (1 - eio(seg(t, 5.0, 7.0)))).toFixed(1));
    const n = eob(seg(t, 6.8, 7.5), 1.8);
    this.t100.opacity = Math.min(1, Math.max(0, n) * 1.4);
    this.t100.transform = 'translateY(' + lerp(20, 0, Math.min(1, Math.max(0, n))) + 'px)';
  },
});

},
  "temp": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const TM_A = [0.4, 3.4];
kit.scene('temp', {
  init(kit) {
    const car = function (x, cls) { return '<g transform="translate(' + x + ' 10)"><rect x="-42" y="-32" width="84" height="56" rx="14" class="' + cls + '"/><rect x="-28" y="-58" width="56" height="32" rx="10" class="' + cls + '"/><circle cx="-24" cy="26" r="12" class="' + cls + '"/><circle cx="24" cy="26" r="12" class="' + cls + '"/></g>'; };
    const sign = function (yellow) {
      return '<g class="temp-g"><circle class="shadow" cx="12" cy="18" r="190"/><circle class="sw" r="190"/>' +
        (yellow ? '<circle class="sy temp-y" r="150"/>' : '') +
        '<circle class="temp-ring" r="160" fill="none" stroke-width="44" style="stroke:var(--sign-red)" stroke-dasharray="1005.3" transform="rotate(-90)"/>' +
        '<g class="temp-c">' + car(-54, 'sk') + car(54, 'sr') + '</g>' +
        '<line class="temp-slash" x1="-112" y1="-112" x2="112" y2="112" stroke-width="32" style="stroke:var(--sign-red)" stroke-dasharray="316.8"/></g>';
    };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' + sign(false) + sign(true) + '</svg>' +
      '<div class="words" style="left:0;top:80px;width:1920px;text-align:center;align-items:center">' +
      '<div class="tag no temp-tag">Prohibition sign</div>' +
      '<h2 class="line">Temporary signs</h2></div>' +
      '<div class="words temp-l" style="left:300px;top:800px;width:600px;text-align:center;align-items:center"><div class="tag">Usual: white disc</div></div>' +
      '<div class="words temp-l" style="left:1020px;top:800px;width:600px;text-align:center;align-items:center"><div class="tag" style="background:var(--accent);color:var(--second)">Temporary: yellow disc</div></div>' +
      '<div class="words temp-foot" style="left:0;top:930px;width:1920px;text-align:center;align-items:center">' +
      '<p class="sub">A temporary prohibition sign has a yellow disc.</p></div></div>'));
    this.g = [...kit.stage.querySelectorAll('.temp-g')];
    this.ring = [...kit.stage.querySelectorAll('.temp-ring')];
    this.c = [...kit.stage.querySelectorAll('.temp-c')].map(function (e) { return e.style; });
    this.slash = [...kit.stage.querySelectorAll('.temp-slash')];
    this.y = kit.stage.querySelector('.temp-y');
    this.l = [...kit.stage.querySelectorAll('.temp-l')].map(function (e) { return e.style; });
    this.tag = kit.stage.querySelector('.temp-tag').style;
    this.foot = kit.stage.querySelector('.temp-foot').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    this.tag.opacity = eo(seg(t, 0.0, 0.8));
    TextFx.fadeFromRight(this.line, t, 0.2, { dur: 0.8 });
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    for (let i = 0; i < 2; i++) {
      const a = TM_A[i];
      const s = eob(seg(t, a, a + 0.9), 1.6);
      this.g[i].setAttribute('transform', 'translate(' + (i ? 1320 : 600) + ' ' + (540 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
      this.ring[i].setAttribute('stroke-dashoffset', (1005.3 * (1 - eio(seg(t, a + 0.3, a + 1.3)))).toFixed(1));
      this.c[i].opacity = eo(seg(t, a + 1.0, a + 1.6));
      this.slash[i].setAttribute('stroke-dashoffset', (316.8 * (1 - eo(seg(t, a + 1.6, a + 2.2)))).toFixed(1));
      const l = eo(seg(t, a + 2.0, a + 2.8));
      this.l[i].opacity = l;
      this.l[i].transform = 'translateY(' + lerp(24, 0, l).toFixed(1) + 'px)';
    }
    const y = eob(seg(t, 3.6, 4.6), 1.5);
    this.y.setAttribute('transform', 'scale(' + Math.max(0, y).toFixed(4) + ')');
    const f = eo(seg(t, 6.6, 7.6));
    this.foot.opacity = f;
    this.foot.transform = 'translateY(' + lerp(16, 0, f).toFixed(1) + 'px)';
  },
});

},
  "compare": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('compare', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="compare-a"><circle class="shadow" cx="12" cy="18" r="190"/><circle r="190" style="fill:var(--sign-blue)"/>' +
      '<circle class="compare-ring-a" r="176" fill="none" stroke-width="8" style="stroke:#ffffff" stroke-dasharray="1105.8"/>' +
      '<g class="compare-arrow"><path d="M40 -90 L-50 0 L40 90" fill="none" stroke-width="40" stroke-linecap="round" stroke-linejoin="round" style="stroke:#ffffff"/>' +
      '<line x1="-40" y1="0" x2="90" y2="0" stroke-width="40" stroke-linecap="round" style="stroke:#ffffff"/></g></g>' +
      '<g class="compare-b"><circle class="shadow" cx="12" cy="18" r="190"/><circle class="sw" r="190"/>' +
      '<circle class="compare-ring-b" r="160" fill="none" stroke-width="44" style="stroke:var(--sign-red)" stroke-dasharray="1005.3"/>' +
      '<g class="compare-p"><rect x="-52" y="-82" width="30" height="164" rx="6" class="sk"/><path d="M-22 -82 H18 A48 48 0 0 1 18 14 H-22" fill="none" stroke-width="30" class="edge" style="stroke:var(--ink)"/></g>' +
      '<line class="compare-slash" x1="-112" y1="-112" x2="112" y2="112" stroke-width="34" style="stroke:var(--sign-red)" stroke-dasharray="316.8"/></g>' +
      '<line class="compare-mid" x1="960" y1="250" x2="960" y2="760" stroke-width="4" stroke-linecap="round" style="stroke:var(--main);opacity:.25" stroke-dasharray="510"/>' +
      '</svg>' +
      '<div class="words" style="left:0;top:80px;width:1920px;text-align:center">' +
      '<h2 class="line compare-h">Must or must not?</h2></div>' +
      '<div class="words compare-la" style="left:260px;top:790px;width:600px;text-align:center">' +
      '<div class="tag">Blue disc</div><p class="sub" style="margin-top:14px">You must</p></div>' +
      '<div class="words compare-lb" style="left:1060px;top:790px;width:600px;text-align:center">' +
      '<div class="tag no">Red ring and line</div><p class="sub" style="margin-top:14px">You must not</p></div>' +
      '<div class="words compare-foot" style="left:0;top:960px;width:1920px;text-align:center">' +
      '<p class="kicker">The one-second test: read the colour first</p></div>' +
      '</div>'));
    this.a = kit.stage.querySelector('.compare-a');
    this.b = kit.stage.querySelector('.compare-b');
    this.ringA = kit.stage.querySelector('.compare-ring-a');
    this.arrow = kit.stage.querySelector('.compare-arrow').style;
    this.ringB = kit.stage.querySelector('.compare-ring-b');
    this.p = kit.stage.querySelector('.compare-p').style;
    this.slash = kit.stage.querySelector('.compare-slash');
    this.mid = kit.stage.querySelector('.compare-mid');
    this.h = kit.stage.querySelector('.compare-h');
    this.la = kit.stage.querySelector('.compare-la').style;
    this.lb = kit.stage.querySelector('.compare-lb').style;
    this.foot = kit.stage.querySelector('.compare-foot').style;
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, 0.0);
    this.mid.setAttribute('stroke-dashoffset', (510 * (1 - eio(seg(t, 0.2, 1.0)))).toFixed(1));
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    const sa = eob(seg(t, 0.3, 0.9), 1.6);
    const sb = eob(seg(t, 1.6, 2.2), 1.6);
    const lean = eio(seg(t, 6.2, 7.4));
    this.a.setAttribute('transform', 'translate(' + (560 + lean * -20).toFixed(1) + ' ' + (520 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, sa) * br).toFixed(4) + ')');
    this.b.setAttribute('transform', 'translate(' + (1360 + lean * 20).toFixed(1) + ' ' + (520 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, sb) * br).toFixed(4) + ')');
    this.ringA.setAttribute('stroke-dashoffset', (1105.8 * (1 - eo(seg(t, 0.7, 1.3)))).toFixed(1));
    const ar = eo(seg(t, 0.9, 1.4));
    this.arrow.opacity = ar;
    this.arrow.transform = 'translateX(' + lerp(40, 0, ar) + 'px)';
    this.ringB.setAttribute('stroke-dashoffset', (1005.3 * (1 - eo(seg(t, 2.0, 2.7)))).toFixed(1));
    this.p.opacity = eo(seg(t, 2.4, 2.8));
    this.slash.setAttribute('stroke-dashoffset', (316.8 * (1 - eo(seg(t, 2.9, 3.25)))).toFixed(1));
    const la = eo(seg(t, 3.6, 4.2)), lb = eo(seg(t, 4.4, 5.0));
    this.la.opacity = la; this.la.transform = 'translateY(' + lerp(24, 0, la) + 'px)';
    this.lb.opacity = lb; this.lb.transform = 'translateY(' + lerp(24, 0, lb) + 'px)';
    const f = eo(seg(t, 5.6, 6.3));
    this.foot.opacity = f; this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});
},
  "trap1": function (kit) {
const { seg, eo, eob, lerp, TextFx } = kit;
// Trap or remember: the trap is crossed out, the simple answer slides in, then the hook in yellow.
const TRAP1_I = ["Blue disc, red ring, red diagonal: how do I tell them apart?", "All three are round, so people mix up 'must', 'must not' and 'maximum'.", "Blue disc = you must do it. Red ring with a diagonal = you must not. Red ring with a number and no diagonal = do not go over that limit.", "Blue says do. Red ring says don't. Red ring plus number says not more than.", 400];
kit.scene('trap1', {
  init(kit) {
    this.T = SG.trap(kit, 'trap1', TRAP1_I);
  },
  render(t) {
    this.T.render(t);
  },
});

},
  "trap2": function (kit) {
const { seg, eo, eob, lerp, TextFx } = kit;
// Trap or remember: the trap is crossed out, the simple answer slides in, then the hook in yellow.
const TRAP2_I = ["Two cars arrive at a 4-way stop. Who goes first?", "Choosing 'the vehicle on the right' or 'the bigger vehicle'.", "Whoever came to a complete stop first moves off first.", "First to stop, first to go.", 400];
kit.scene('trap2', {
  init(kit) {
    this.T = SG.trap(kit, 'trap2', TRAP2_I);
  },
  render(t) {
    this.T.render(t);
  },
});

},
  "trap3": function (kit) {
const { seg, eo, eob, lerp, TextFx } = kit;
// Trap or remember: the trap is crossed out, the simple answer slides in, then the hook in yellow.
const TRAP3_I = ["Do I have to stop at a yield sign?", "Treating a yield sign exactly like a stop sign.", "No. Slow down and give way to cross-traffic and pedestrians. Stop only if someone is coming.", "Stop = always stop. Yield = stop only if needed.", 400];
kit.scene('trap3', {
  init(kit) {
    this.T = SG.trap(kit, 'trap3', TRAP3_I);
  },
  render(t) {
    this.T.render(t);
  },
});

},
  "end": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('end', {
  init(kit) {
    let pts = '';
    for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + i * Math.PI / 4; pts += (110 * Math.cos(a)).toFixed(1) + ',' + (110 * Math.sin(a)).toFixed(1) + ' '; }
    let pin = '';
    for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + i * Math.PI / 4; pin += (98 * Math.cos(a)).toFixed(1) + ',' + (98 * Math.sin(a)).toFixed(1) + ' '; }
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="end-s1"><polygon class="shadow" transform="translate(10 14)" points="' + pts + '"/><polygon class="sr" points="' + pts + '"/>' +
      '<polygon points="' + pin + '" fill="none" stroke-width="6" style="stroke:#ffffff"/>' +
      '<text y="16" text-anchor="middle" style="font:700 48px var(--display, var(--sans, system-ui, sans-serif)); fill:#ffffff; letter-spacing:2px">STOP</text></g>' +
      '<g class="end-s2"><circle class="shadow" cx="10" cy="14" r="110"/><circle r="110" style="fill:var(--sign-blue)"/>' +
      '<path d="M24 -52 L-28 0 L24 52" fill="none" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" style="stroke:#ffffff"/>' +
      '<line x1="-22" y1="0" x2="52" y2="0" stroke-width="24" stroke-linecap="round" style="stroke:#ffffff"/></g>' +
      '<g class="end-s3"><circle class="shadow" cx="10" cy="14" r="110"/><circle class="sw" r="110"/>' +
      '<circle r="92" fill="none" stroke-width="26" style="stroke:var(--sign-red)"/>' +
      '<line x1="-64" y1="-64" x2="64" y2="64" stroke-width="20" style="stroke:var(--sign-red)"/></g>' +
      '</svg>' +
      '<div class="words" style="left:180px;top:300px;width:900px">' +
      '<div class="kicker end-k">Session 2 · Learners Coach</div>' +
      '<div class="bar end-bar" style="transform-origin:left center"></div>' +
      '<h2 class="line end-h">Shape and colour first.</h2>' +
      '<p class="sub end-sub">Then read the picture. Next: the mini test.</p></div>' +
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
    const pos = [[1380, 300], [1620, 560], [1340, 780]];
    for (let i = 0; i < 3; i++) {
      const st = 0.6 + i * 0.35;
      const s = eob(seg(t, st, st + 0.6), 1.6);
      const br = 1 + 0.012 * Math.sin((t + i * 0.9) * 2 * Math.PI / 3.2);
      const y = pos[i][1] + lerp(-40, 0, eo(seg(t, st, st + 0.6))) - t * 1.2;
      this.s[i].setAttribute('transform', 'translate(' + pos[i][0] + ' ' + y.toFixed(1) + ') rotate(' + lerp(-14 + i * 10, 0, eo(seg(t, st, st + 0.8))).toFixed(2) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    }
  },
});
},
 },
 score: function (kit) {
kit.score(function (S, T) {
  const BEATS = 368, BPM = BEATS * 60 / (T.end - T.stop);
  S.tempo(BPM, { t0: T.stop });
  S.program('pad', 'pad', { rev: 0.6, gain: -4 });
  S.program('mallet', 'marimba', { rev: 0.3, pan: -0.15 });
  S.program('keys', 'ep', { rev: 0.35, pan: 0.15 });
  S.program('bass', 'bass', { gain: -3 });
  S.program('bell', 'glock', { rev: 0.5, gain: -6 });
  // Title: near silent, a pad and one bell note
  S.chord('pad', ['D3', 'A3', 'F#4'], { t: 0, dur: T.stop + 0.4, vel: 30 });
  S.note('bell', 'A5', { t: 1.3, dur: 2, vel: 40 });
  S.fx('pop', 1.8, { vel: 40 });
  // Progression, one chord per 8 beats, filling the grid exactly to T.end
  const prog = [['D3', 'A3', 'F#4'], ['B2', 'F#3', 'D4'], ['G2', 'D3', 'B3'], ['A2', 'E3', 'C#4']];
  const roots = ['D2', 'B1', 'G1', 'A1'];
  for (let i = 0; i < BEATS / 8; i++) {
    const c = prog[i % 4];
    S.chord('pad', c, { beat: i * 8, beats: 8, vel: 34 });
    const rest = i % 10 >= 8;
    if (i >= 2 && !rest) { S.note('bass', roots[i % 4], { beat: i * 8, beats: 3, vel: 64 }); S.note('bass', roots[i % 4], { beat: i * 8 + 4, beats: 2, vel: 54 }); }
    if (i >= 4 && i % 2 === 0 && !rest) S.chord('keys', c.map(function (p) { return p.replace(/\d/, function (d) { return String(+d + 1); }); }), { beat: i * 8, beats: 6, vel: 40 });
  }
  // Calm marimba ostinato over the signs (4 beats per repeat)
  S.pattern('mallet', 'x.x.X..x', { from: 0, repeat: BEATS / 4, pitch: ['D5', 'A4', 'F#5', 'A4', 'E5'], vel: 50 });
  // Light pulse in 64-beat spells, dropping to pad and mallet for 16 beats between
  for (let b = 16; b < BEATS; b += 80) {
    const len = Math.min(64, BEATS - b);
    S.drums({ shaker: 'oxoxoxox', sidestick: '....x...', kick: 'x.......' }, { from: b, repeat: len / 4, vel: 46 });
  }
  // Pops as each sign builds
  [['stop', 0.4], ['fourway', 0.5], ['yield', 0.4], ['yieldped', 0.1], ['yieldped', 1.4], ['stopgo', 0.6], ['leftturn', 0.1], ['leftturn', 1.7], ['leftturn', 2.7],
    ['ppz', 0.1], ['ppz', 4.3], ['ppz', 5.4], ['ppz', 6.5], ['ppz', 7.6], ['noentry', 0.4], ['command', 0.4], ['arrow', 0.1], ['arrow', 2.1],
    ['vehicles', 2.7], ['vehicles', 4.0], ['vehicles', 5.3], ['vehicles', 6.6], ['vehicles', 7.9], ['prohibit', 0.4], ['turns', 0.5], ['turns', 3.7],
    ['overtake', 0.4], ['noise', 0.1], ['temp', 0.5], ['temp', 3.5], ['temp', 3.8], ['compare', 0.65], ['compare', 2.35],
    ['trap1', 1.3], ['trap2', 1.3], ['trap3', 1.3]].forEach(function (p) { S.fx('pop', T[p[0]] + p[1], { vel: 56 }); });
  S.fx('whoosh', T.stopgo + 6.0, { dur: 1.2, vel: 30 });
  S.fx('ding', T.ppz + 9.1, { vel: 46 });
  S.fx('click', T.noise + 2.5, { vel: 44 });
  S.fx('whoosh', T.noise + 5.0, { dur: 2.0, vel: 30 });
  S.fx('ding', T.noise + 6.9, { vel: 50 });
  S.fx('whoosh', T.overtake + 3.9, { dur: 2.6, vel: 30 });
  S.fx('ding', T.overtake + 6.5, { vel: 50 });
  S.fx('click', T.compare + 3.8, { vel: 44 });
  ['trap1', 'trap2', 'trap3'].forEach(function (id) { S.fx('click', T[id] + 3.7, { vel: 44 }); S.fx('ding', T[id] + 6.3, { vel: 48 }); });
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