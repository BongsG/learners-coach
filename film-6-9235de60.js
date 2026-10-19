(window.K53F = window.K53F || {})[6] = {
 title: "Session 6: Information and guidance signs",
 scenes: [{"id": "title", "name": "Information and guidance signs", "dur": 7}, {"id": "countdown", "name": "Exit countdown", "dur": 14}, {"id": "deadend", "name": "Dead end", "dur": 10}, {"id": "priority", "name": "Priority road", "dur": 10}, {"id": "plates", "name": "Supplementary plates", "dur": 15}, {"id": "colours", "name": "Board colours", "dur": 15}, {"id": "town", "name": "Town directions", "dur": 11}, {"id": "diagram", "name": "Diagrammatic signs", "dur": 12}, {"id": "routes", "name": "Route numbers", "dur": 12}, {"id": "quiz", "name": "Trap: two bars", "dur": 16}, {"id": "quizblue", "name": "Trap: freeway colour", "dur": 16}, {"id": "end", "name": "Remember", "dur": 11}],
 css: "#stage { --ground:#F3F5F7; --main:#1F5F8B; --second:#18212B; --accent:#F5C400; --sign-red:#C8102E; --sign-blue:#0A4D94; color:var(--second); font-family:var(--sans, system-ui, sans-serif) }\n.ground { position:absolute; inset:0; background:var(--ground); background-image:linear-gradient(color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px), linear-gradient(90deg, color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px); background-size:80px 80px; background-position:-1px -1px }\n.words { position:absolute; margin:0; display:flex; flex-direction:column; gap:24px } .words > * { margin:0 }\n.line { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:96px; line-height:1.02; font-weight:700; letter-spacing:-0.01em } .sub { font-size:40px; line-height:1.3; color:color-mix(in srgb, var(--second) 78%, var(--ground)) }\n.kicker { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:30px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:var(--main); display:flex; align-items:center; gap:16px }\n.kicker::before { content:''; width:44px; height:8px; border-radius:4px; background:var(--accent) }\n.bar { height:10px; width:160px; border-radius:5px; background:var(--accent) }\n.art { position:absolute; inset:0; width:100%; height:100%; overflow:visible }\n.sr { fill:var(--sign-red) } .sb { fill:var(--sign-blue) } .sw { fill:#FFFFFF } .sk { fill:var(--second) }\n.edge { fill:none; stroke:color-mix(in srgb, var(--second) 18%, transparent); stroke-width:3 }\n.shadow { fill:rgba(0,0,0,.12) }\n.card { position:absolute; background:#FFFFFF; border:3px solid color-mix(in srgb, var(--main) 35%, var(--ground)); border-radius:28px; box-shadow:0 18px 40px -18px rgba(0,0,0,.25) }\n.tag { display:inline-flex; align-self:flex-start; padding:10px 22px; border-radius:999px; background:var(--main); color:#FFFFFF; font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:34px; font-weight:700 }\n.tag.no { background:var(--sign-red) }\n.road { fill:color-mix(in srgb, var(--second) 82%, var(--ground)) } .lane { stroke:#FFFFFF; stroke-width:8; stroke-dasharray:40 34; fill:none } .lane.solid { stroke-dasharray:none; stroke:var(--accent) }.gb-green { fill:#1E7B3C } .gb-brown { fill:#7A4A23 }\n.tag.blue { background:var(--sign-blue) } .tag.green { background:#1E7B3C } .tag.brown { background:#7A4A23 } .tag.ink { background:var(--second) }\n.ink { fill:none; stroke-linecap:round; stroke-linejoin:round }\n.hook { display:inline-flex; align-self:flex-start; padding:14px 28px; border-radius:18px; background:var(--accent); color:var(--second); font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:46px; font-weight:700; line-height:1.15 }\n.trap { display:flex; align-items:center; gap:20px; font-size:40px; line-height:1.3 }\n.trap-x { position:relative; color:color-mix(in srgb, var(--second) 70%, var(--ground)) }\n.trap-line { position:absolute; left:-8px; right:-8px; top:50%; height:6px; margin-top:-3px; border-radius:3px; background:var(--sign-red); transform-origin:left center }\n",
 shared: function (kit) {
window.SG = {
  oct(cx, cy, r) { const p = []; for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + i * Math.PI / 4; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } return p.join(' '); },
  octWedge(cx, cy, r, i) { const a1 = Math.PI / 8 + i * Math.PI / 4, a2 = a1 + Math.PI / 4; return cx + ',' + cy + ' ' + (cx + r * Math.cos(a1)).toFixed(1) + ',' + (cy + r * Math.sin(a1)).toFixed(1) + ' ' + (cx + r * Math.cos(a2)).toFixed(1) + ',' + (cy + r * Math.sin(a2)).toFixed(1); },
  arrowUp(cx, cy, s) { return 'M' + cx + ' ' + (cy + s) + ' V' + (cy - s * 0.35) + ' M' + (cx - s * 0.55) + ' ' + (cy + s * 0.15) + ' L' + cx + ' ' + (cy - s) + ' L' + (cx + s * 0.55) + ' ' + (cy + s * 0.15); },
  wob(t, seed) { return Math.sin(t * 2.1 + seed) * 0.8 + Math.sin(t * 1.3 + seed * 2) * 0.5; },
  rect(x, y, w, h, r, a) { return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="' + r + '" ' + (a || '') + '/>'; },
  per(w, h) { return 2 * (w + h - 72); },
  board(w, h, fill, rim, stroke) { const p = SG.per(w, h); return SG.rect(-w / 2 + 12, -h / 2 + 18, w, h, 26, 'class="shadow"') + SG.rect(-w / 2, -h / 2, w, h, 26, fill) + SG.rect(-w / 2 + 18, -h / 2 + 18, w - 36, h - 36, 14, 'class="' + rim + '" fill="none" stroke-width="8" style="stroke:' + (stroke || '#FFFFFF') + '" stroke-dasharray="' + p + '" stroke-dashoffset="' + p + '"'); },
  arrowR(x, y, s) { return 'M' + (x - s) + ' ' + y + ' H' + (x + s * 0.35) + ' M' + (x + s * 0.15) + ' ' + (y - s * 0.55) + ' L' + (x + s) + ' ' + y + ' L' + (x + s * 0.15) + ' ' + (y + s * 0.55); },
  slant(y, cls) { return '<g class="' + cls + '"><rect x="-100" y="-26" width="200" height="52" rx="8" class="sw" transform="translate(0 ' + y + ') rotate(-24)"/></g>'; },
  mini(fill, cls) { return '<g class="' + cls + '">' + SG.board(300, 190, fill, cls + '-rim') + SG.rect(-110, -50, 160, 22, 11, 'class="sw"') + SG.rect(-110, -6, 110, 22, 11, 'class="sw"') + '<path d="' + SG.arrowR(80, 40, 34) + '" fill="none" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" style="stroke:#FFFFFF"/></g>'; }
};

},
 mods: {
  "title": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('title', {
  init(kit) {
    const fills = ['class="sb"', 'class="gb-green"', 'class="gb-brown"'];
    let boards = '';
    for (let i = 0; i < 3; i++) boards += '<g class="title-b">' + SG.board(460, 280, fills[i], 'title-rim') + SG.rect(-170, -70, 250, 30, 15, 'class="sw"') + SG.rect(-170, -14, 180, 30, 15, 'class="sw"') + '<path d="' + SG.arrowR(120, 70, 50) + '" fill="none" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" style="stroke:#FFFFFF"/></g>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' + boards + '</svg>' +
      '<div class="words" style="left:150px;top:250px;width:960px">' +
      '<div class="kicker title-kick">Session 6 · Learners Coach</div>' +
      '<h1 class="line title-h" style="font-size:116px">Information and guidance signs</h1>' +
      '<p class="sub title-sub">Board colours, exit countdowns, route numbers and plates</p>' +
      '</div></div>'));
    this.b = [...kit.stage.querySelectorAll('.title-b')];
    this.rims = [...kit.stage.querySelectorAll('.title-rim')];
    this.kick = kit.stage.querySelector('.title-kick').style;
    this.h = kit.stage.querySelector('.title-h');
    this.sub = kit.stage.querySelector('.title-sub').style;
    this.per = SG.per(460, 280);
  },
  render(t) {
    t = t / 1.3;
    this.kick.opacity = eo(seg(t, -0.6, -0.1));
    TextFx.fadeFromRight(this.h, t, -0.5);
    const sb = eo(seg(t, 0.6, 1.2));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
    const pos = [[1450, 290, -3], [1510, 560, 2], [1430, 830, -2]];
    for (let i = 0; i < 3; i++) {
      const st = -0.5 + i * 0.35;
      const p = eob(seg(t, st, st + 0.8), 1.6);
      const br = 1 + 0.012 * Math.sin((t + i * 0.9) * 2 * Math.PI / 3.2);
      this.b[i].setAttribute('transform', 'translate(' + (pos[i][0] + lerp(560, 0, p)).toFixed(1) + ' ' + (pos[i][1] - t * 1.4).toFixed(1) + ') rotate(' + lerp(12, pos[i][2], p).toFixed(2) + ') scale(' + br.toFixed(4) + ')');
      this.b[i].style.opacity = Math.min(1, p * 2);
      this.rims[i].setAttribute('stroke-dashoffset', (this.per * (1 - eo(seg(t, 0.4 + i * 0.35, 1.1 + i * 0.35)))).toFixed(1));
    }
  },
});

},
  "countdown": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('countdown', {
  init(kit) {
    const F = 'var(--display, var(--sans, system-ui, sans-serif))';
    const num = function (s) { return '<text class="countdown-n" x="0" y="380" text-anchor="middle" style="font:700 84px ' + F + '; fill:var(--main)">' + s + '</text>'; };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="countdown-sign">' + SG.board(300, 540, 'class="sb"', 'countdown-rim') +
      SG.slant(-150, 'countdown-b') + SG.slant(0, 'countdown-b') + SG.slant(150, 'countdown-b') +
      num('300 m') + num('200 m') + num('100 m') + '</g>' +
      '</svg>' +
      '<div class="words" style="left:1000px;top:200px;width:820px">' +
      '<div class="tag blue countdown-tag">Information sign</div>' +
      '<h2 class="line countdown-h">Exit countdown</h2>' +
      '<p class="sub countdown-sub">Each white bar is 100 m to the freeway exit. 3 bars = 300 m.</p>' +
      '</div></div>'));
    this.sign = kit.stage.querySelector('.countdown-sign');
    this.rim = kit.stage.querySelector('.countdown-rim');
    this.bars = [...kit.stage.querySelectorAll('.countdown-b')];
    this.n = [...kit.stage.querySelectorAll('.countdown-n')];
    this.tag = kit.stage.querySelector('.countdown-tag').style;
    this.h = kit.stage.querySelector('.countdown-h');
    this.sub = kit.stage.querySelector('.countdown-sub').style;
    this.per = SG.per(300, 540);
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(480 ' + (420 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    this.rim.setAttribute('stroke-dashoffset', (this.per * (1 - eo(seg(t, 0.4, 1.1)))).toFixed(1));
    const outs = [5.0, 7.4, 99];
    for (let i = 0; i < 3; i++) {
      const p = eob(seg(t, 0.8 + i * 0.25, 1.3 + i * 0.25), 1.7);
      const q = eo(seg(t, outs[i], outs[i] + 0.45));
      this.bars[i].style.opacity = Math.min(1, Math.max(0, p) * 2) * (1 - q);
      this.bars[i].setAttribute('transform', 'translate(' + (lerp(180, 0, p) + lerp(0, -140, q)).toFixed(1) + ' 0)');
    }
    const v = [eo(seg(t, 1.9, 2.4)) * (1 - eo(seg(t, 5.0, 5.4))), eo(seg(t, 5.3, 5.7)) * (1 - eo(seg(t, 7.4, 7.8))), eo(seg(t, 7.7, 8.1))];
    for (let i = 0; i < 3; i++) { this.n[i].style.opacity = v[i]; this.n[i].setAttribute('transform', 'translate(0 ' + lerp(18, 0, v[i]).toFixed(1) + ')'); }
    this.tag.opacity = eo(seg(t, 0.6, 1.0));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.6, 1.1))) + 'px)';
    TextFx.fadeFromRight(this.h, t, 0.8);
    const sb = eo(seg(t, 1.6, 2.2));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
  },
});

},
  "deadend": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('deadend', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="deadend-sign">' + SG.board(400, 400, 'class="sw"', 'deadend-rim', 'var(--second)') +
      SG.rect(-200, -200, 400, 400, 26, 'class="edge"') +
      '<g class="deadend-stem">' + SG.rect(-34, -70, 68, 220, 6, 'class="sk"') + '</g>' +
      '<g class="deadend-bar">' + SG.rect(-130, -140, 260, 70, 8, 'class="sr"') + '</g></g>' +
      '<g class="deadend-road"><rect class="road" x="0" y="880" width="1560" height="200"/>' +
      '<line class="lane" x1="0" y1="980" x2="1480" y2="980"/>' + SG.rect(1540, 860, 44, 240, 8, 'class="sr"') +
      '<g class="deadend-car"><rect x="-150" y="-46" width="150" height="76" rx="22" style="fill:var(--main)"/><rect x="-110" y="-36" width="58" height="30" rx="8" fill="#FFFFFF" opacity=".85"/><circle cx="-118" cy="32" r="16" class="sk"/><circle cx="-34" cy="32" r="16" class="sk"/></g></g>' +
      '</svg>' +
      '<div class="words" style="left:1000px;top:190px;width:820px">' +
      '<div class="tag no deadend-tag">Information sign</div>' +
      '<h2 class="line deadend-h">Dead end</h2>' +
      '<p class="sub deadend-sub">A red bar on the sign means no through road.</p>' +
      '</div></div>'));
    this.sign = kit.stage.querySelector('.deadend-sign');
    this.rim = kit.stage.querySelector('.deadend-rim');
    this.stem = kit.stage.querySelector('.deadend-stem');
    this.bar = kit.stage.querySelector('.deadend-bar');
    this.road = kit.stage.querySelector('.deadend-road').style;
    this.car = kit.stage.querySelector('.deadend-car');
    this.tag = kit.stage.querySelector('.deadend-tag').style;
    this.h = kit.stage.querySelector('.deadend-h');
    this.sub = kit.stage.querySelector('.deadend-sub').style;
    this.per = SG.per(400, 400);
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(520 ' + (440 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    this.rim.setAttribute('stroke-dashoffset', (this.per * (1 - eo(seg(t, 0.4, 1.1)))).toFixed(1));
    const p = eo(seg(t, 0.8, 1.4));
    this.stem.setAttribute('transform', 'translate(0 150) scale(1 ' + p.toFixed(4) + ') translate(0 -150)');
    const q = eob(seg(t, 1.4, 1.9), 1.8);
    this.bar.setAttribute('transform', 'translate(0 ' + lerp(-240, 0, q).toFixed(1) + ')');
    this.bar.style.opacity = Math.min(1, Math.max(0, q) * 2);
    this.tag.opacity = eo(seg(t, 1.6, 2.0));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.6, 2.1))) + 'px)';
    TextFx.fadeFromRight(this.h, t, 1.8);
    const sb = eo(seg(t, 2.5, 3.1));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
    const r = eo(seg(t, 3.6, 4.2));
    this.road.opacity = r;
    this.road.transform = 'translateY(' + lerp(60, 0, r) + 'px)';
    const x = lerp(-200, 1490, eo(seg(t, 4.2, 6.0)));
    const dip = Math.sin(Math.PI * seg(t, 5.9, 6.3)) * 4;
    this.car.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + (950 + dip).toFixed(1) + ')');
  },
});

},
  "priority": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('priority', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="priority-sign">' + SG.board(420, 420, 'class="sb"', 'priority-rim') +
      '<g class="priority-side">' + SG.rect(-168, -24, 140, 48, 6, 'class="sw"') + '</g>' +
      '<g class="priority-main">' + SG.rect(-40, -168, 80, 336, 8, 'class="sw"') + '</g></g>' +
      '</svg>' +
      '<div class="words" style="left:150px;top:220px;width:820px">' +
      '<div class="tag blue priority-tag">Information sign</div>' +
      '<h2 class="line priority-h">Priority road</h2>' +
      '<p class="sub priority-sub">The road you are on has priority at the junction ahead.</p>' +
      '</div></div>'));
    this.sign = kit.stage.querySelector('.priority-sign');
    this.rim = kit.stage.querySelector('.priority-rim');
    this.main = kit.stage.querySelector('.priority-main');
    this.side = kit.stage.querySelector('.priority-side');
    this.tag = kit.stage.querySelector('.priority-tag').style;
    this.h = kit.stage.querySelector('.priority-h');
    this.sub = kit.stage.querySelector('.priority-sub').style;
    this.per = SG.per(420, 420);
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(1400 ' + (500 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    this.rim.setAttribute('stroke-dashoffset', (this.per * (1 - eo(seg(t, 0.4, 1.1)))).toFixed(1));
    const m = eo(seg(t, 0.8, 1.5));
    this.main.setAttribute('transform', 'translate(0 168) scale(1 ' + m.toFixed(4) + ') translate(0 -168)');
    const d = eob(seg(t, 1.5, 2.0), 1.7);
    this.side.setAttribute('transform', 'translate(' + lerp(-90, 0, d).toFixed(1) + ' 0)');
    this.side.style.opacity = Math.min(1, Math.max(0, d) * 2);
    this.tag.opacity = eo(seg(t, 1.6, 2.0));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.6, 2.1))) + 'px)';
    TextFx.fadeFromRight(this.h, t, 1.8);
    const sb = eo(seg(t, 2.6, 3.2));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
  },
});

},
  "plates": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('plates', {
  init(kit) {
    const F = 'var(--display, var(--sans, system-ui, sans-serif))';
    const words = ['Goods vehicles', 'Recommended speed', 'For the next 5 km', '200 m ahead'];
    let txt = '';
    for (let i = 0; i < 4; i++) txt += '<text class="plates-t" x="0" y="272" text-anchor="middle" style="font:700 50px ' + F + '; fill:var(--second)">' + words[i] + '</text>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="plates-g">' + SG.rect(-14, 0, 28, 760, 6, 'class="sk"') +
      '<g class="plates-sign"><circle class="shadow" cx="12" cy="18" r="150"/><circle class="sw" r="150"/>' +
      '<circle class="plates-ring" r="124" fill="none" stroke-width="40" style="stroke:var(--sign-red)" stroke-dasharray="779.1"/></g>' +
      '<g class="plates-plate">' + SG.rect(-268, 198, 560, 150, 18, 'class="shadow"') + SG.rect(-280, 180, 560, 150, 18, 'class="sw" stroke-width="8" style="stroke:var(--second)"') + txt + '</g></g>' +
      '</svg>' +
      '<div class="words" style="left:150px;top:220px;width:760px">' +
      '<div class="tag ink plates-tag">Supplementary plate</div>' +
      '<h2 class="line plates-h">Plates add detail</h2>' +
      '<p class="sub plates-sub">A plate under a sign tells you more about it.</p>' +
      '</div></div>'));
    this.g = kit.stage.querySelector('.plates-g');
    this.sign = kit.stage.querySelector('.plates-sign');
    this.ring = kit.stage.querySelector('.plates-ring');
    this.plate = kit.stage.querySelector('.plates-plate');
    this.t = [...kit.stage.querySelectorAll('.plates-t')];
    this.tag = kit.stage.querySelector('.plates-tag').style;
    this.h = kit.stage.querySelector('.plates-h');
    this.sub = kit.stage.querySelector('.plates-sub').style;
  },
  render(t) {
    t = t / 1.3;
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.g.setAttribute('transform', 'translate(1380 ' + (330 - t * 1.2).toFixed(1) + ')');
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    this.sign.setAttribute('transform', 'scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    this.ring.setAttribute('stroke-dashoffset', (779.1 * (1 - eo(seg(t, 0.3, 1.0)))).toFixed(1));
    const p = eob(seg(t, 1.0, 1.5), 1.7);
    this.plate.setAttribute('transform', 'translate(0 ' + lerp(-70, 0, p).toFixed(1) + ')');
    this.plate.style.opacity = Math.min(1, Math.max(0, p) * 2);
    const st = [1.5, 3.8, 6.1, 8.4, 99];
    for (let i = 0; i < 4; i++) {
      const a = eo(seg(t, st[i], st[i] + 0.35)) * (1 - eo(seg(t, st[i + 1] - 0.3, st[i + 1])));
      this.t[i].style.opacity = a;
      this.t[i].setAttribute('transform', 'translate(' + lerp(30, 0, eo(seg(t, st[i], st[i] + 0.35))).toFixed(1) + ' 0)');
    }
    this.tag.opacity = eo(seg(t, 0.4, 0.8));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.4, 0.9))) + 'px)';
    TextFx.fadeFromRight(this.h, t, 0.6);
    const sb = eo(seg(t, 1.4, 2.0));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
  },
});

},
  "colours": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('colours', {
  init(kit) {
    const fills = ['class="sb"', 'class="gb-green"', 'class="gb-brown"'];
    let boards = '';
    for (let i = 0; i < 3; i++) boards += '<g class="colours-b">' + SG.board(440, 280, fills[i], 'colours-rim') + SG.rect(-160, -70, 230, 30, 15, 'class="sw"') + SG.rect(-160, -14, 160, 30, 15, 'class="sw"') + '<path d="' + SG.arrowR(110, 70, 48) + '" fill="none" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" style="stroke:#FFFFFF"/></g>';
    const lab = function (x, cls, tag, sub) { return '<div class="words colours-l" style="left:' + (x - 300) + 'px;top:670px;width:600px;text-align:center"><div class="tag ' + cls + '" style="align-self:center">' + tag + '</div><p class="sub" style="margin-top:6px">' + sub + '</p></div>'; };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' + boards + '</svg>' +
      '<div class="words" style="left:0;top:80px;width:1920px;text-align:center">' +
      '<h2 class="line colours-h">The board colour tells you the road</h2></div>' +
      lab(400, 'blue', 'Blue', 'Freeways') + lab(960, 'green', 'Green', 'Other roads') + lab(1520, 'brown', 'Brown', 'Tourism') +
      '<div class="words colours-foot" style="left:0;top:930px;width:1920px;text-align:center">' +
      '<p class="kicker" style="justify-content:center">Freeways are blue, not green</p></div>' +
      '</div>'));
    this.b = [...kit.stage.querySelectorAll('.colours-b')];
    this.rims = [...kit.stage.querySelectorAll('.colours-rim')];
    this.l = [...kit.stage.querySelectorAll('.colours-l')];
    this.h = kit.stage.querySelector('.colours-h');
    this.foot = kit.stage.querySelector('.colours-foot').style;
    this.per = SG.per(440, 280);
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, 0.0);
    const xs = [400, 960, 1520];
    for (let i = 0; i < 3; i++) {
      const st = 0.3 + i * 1.3;
      const s = eob(seg(t, st, st + 0.6), 1.6);
      const br = 1 + 0.012 * Math.sin((t + i * 0.9) * 2 * Math.PI / 3.2);
      this.b[i].setAttribute('transform', 'translate(' + xs[i] + ' ' + (470 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
      this.rims[i].setAttribute('stroke-dashoffset', (this.per * (1 - eo(seg(t, st + 0.4, st + 1.0)))).toFixed(1));
      const l = eo(seg(t, st + 0.6, st + 1.2));
      this.l[i].style.opacity = l;
      this.l[i].style.transform = 'translateY(' + lerp(24, 0, l) + 'px)';
    }
    const f = eo(seg(t, 5.4, 6.1));
    this.foot.opacity = f;
    this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});

},
  "town": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('town', {
  init(kit) {
    const ws = [380, 300, 340];
    let bars = '';
    for (let i = 0; i < 3; i++) bars += '<g class="town-bar">' + SG.rect(-250, -100 + i * 70, ws[i], 34, 17, 'class="sk"') + '</g>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="town-sign">' + SG.board(640, 360, 'class="sw"', 'town-rim', 'var(--second)') +
      SG.rect(-320, -180, 640, 360, 26, 'class="edge"') + bars +
      '<path class="town-arrow" d="' + SG.arrowR(210, -10, 52) + '" fill="none" stroke-width="24" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--second)"/></g>' +
      '</svg>' +
      '<div class="words" style="left:1000px;top:230px;width:820px">' +
      '<div class="tag ink town-tag">Guidance sign</div>' +
      '<h2 class="line town-h">White and black</h2>' +
      '<p class="sub town-sub">A white board with black: local directions in a town or city.</p>' +
      '</div></div>'));
    this.sign = kit.stage.querySelector('.town-sign');
    this.rim = kit.stage.querySelector('.town-rim');
    this.bars = [...kit.stage.querySelectorAll('.town-bar')];
    this.arrow = kit.stage.querySelector('.town-arrow');
    this.tag = kit.stage.querySelector('.town-tag').style;
    this.h = kit.stage.querySelector('.town-h');
    this.sub = kit.stage.querySelector('.town-sub').style;
    this.per = SG.per(640, 360);
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(520 ' + (470 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    this.rim.setAttribute('stroke-dashoffset', (this.per * (1 - eo(seg(t, 0.4, 1.1)))).toFixed(1));
    for (let i = 0; i < 3; i++) {
      const p = eo(seg(t, 0.8 + i * 0.2, 1.3 + i * 0.2));
      this.bars[i].setAttribute('transform', 'translate(-250 0) scale(' + p.toFixed(4) + ' 1) translate(250 0)');
    }
    const a = eob(seg(t, 1.5, 2.0), 1.7);
    this.arrow.setAttribute('transform', 'translate(' + lerp(-50, 0, a).toFixed(1) + ' 0)');
    this.arrow.style.opacity = Math.min(1, Math.max(0, a) * 2);
    this.tag.opacity = eo(seg(t, 1.6, 2.0));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 1.6, 2.1))) + 'px)';
    TextFx.fadeFromRight(this.h, t, 1.8);
    const sb = eo(seg(t, 2.6, 3.2));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
  },
});

},
  "diagram": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('diagram', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="diagram-sign">' + SG.board(560, 640, 'class="sw"', 'diagram-rim', 'var(--second)') +
      SG.rect(-280, -320, 560, 640, 26, 'class="edge"') +
      '<path class="ink diagram-k" d="M-60 260 V-150" stroke-width="40" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" style="stroke:var(--second)"/>' +
      '<polygon class="sk diagram-kh" points="-112,-150 -60,-240 -8,-150"/>' +
      '<path class="ink diagram-r" d="M-60 120 C-60 20 140 20 140 -130" stroke-width="40" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" style="stroke:var(--sign-red)"/>' +
      '<polygon class="sr diagram-rh" points="88,-130 140,-220 192,-130"/></g>' +
      '</svg>' +
      '<div class="words" style="left:150px;top:220px;width:820px">' +
      '<div class="tag ink diagram-tag">Diagrammatic sign</div>' +
      '<h2 class="line diagram-h">Lane guidance</h2>' +
      '<p class="sub diagram-sub">A white board with red and black draws the lanes ahead as a diagram.</p>' +
      '</div></div>'));
    this.sign = kit.stage.querySelector('.diagram-sign');
    this.rim = kit.stage.querySelector('.diagram-rim');
    this.k = kit.stage.querySelector('.diagram-k');
    this.kh = kit.stage.querySelector('.diagram-kh');
    this.r = kit.stage.querySelector('.diagram-r');
    this.rh = kit.stage.querySelector('.diagram-rh');
    this.tag = kit.stage.querySelector('.diagram-tag').style;
    this.h = kit.stage.querySelector('.diagram-h');
    this.sub = kit.stage.querySelector('.diagram-sub').style;
    this.per = SG.per(560, 640);
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(1400 ' + (520 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    this.rim.setAttribute('stroke-dashoffset', (this.per * (1 - eo(seg(t, 0.4, 1.1)))).toFixed(1));
    this.k.setAttribute('stroke-dashoffset', (1 - eio(seg(t, 0.8, 1.6))).toFixed(4));
    const kh = eob(seg(t, 1.5, 1.9), 1.8);
    this.kh.setAttribute('transform', 'translate(-60 -195) scale(' + Math.max(0, kh).toFixed(4) + ') translate(60 195)');
    this.r.setAttribute('stroke-dashoffset', (1 - eio(seg(t, 1.8, 2.7))).toFixed(4));
    const rh = eob(seg(t, 2.6, 3.0), 1.8);
    this.rh.setAttribute('transform', 'translate(140 -175) scale(' + Math.max(0, rh).toFixed(4) + ') translate(-140 175)');
    this.tag.opacity = eo(seg(t, 2.4, 2.8));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 2.4, 2.9))) + 'px)';
    TextFx.fadeFromRight(this.h, t, 2.6);
    const sb = eo(seg(t, 3.4, 4.0));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
  },
});

},
  "routes": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('routes', {
  init(kit) {
    const F = 'var(--display, var(--sans, system-ui, sans-serif))';
    const L = ['N', 'R', 'M'];
    let m = '';
    for (let i = 0; i < 3; i++) m += '<g class="routes-m">' + SG.rect(-138, -92, 300, 220, 30, 'class="shadow"') + SG.rect(-150, -110, 300, 220, 30, 'class="sw"') +
      SG.rect(-150, -110, 300, 220, 30, 'class="routes-e" fill="none" stroke-width="12" style="stroke:var(--second)" stroke-dasharray="989" stroke-dashoffset="989"') +
      '<text class="routes-t" x="0" y="54" text-anchor="middle" style="font:700 150px ' + F + '; fill:var(--second)">' + L[i] + '</text></g>';
    const lab = function (x, sub) { return '<div class="words routes-l" style="left:' + (x - 300) + 'px;top:650px;width:600px;text-align:center"><div class="tag" style="align-self:center">' + sub + '</div></div>'; };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' + m + '</svg>' +
      '<div class="words" style="left:0;top:90px;width:1920px;text-align:center">' +
      '<h2 class="line routes-h">Route numbers</h2></div>' +
      lab(480, 'National') + lab(960, 'Regional') + lab(1440, 'Metropolitan') +
      '<div class="words routes-foot" style="left:0;top:820px;width:1920px;text-align:center">' +
      '<p class="sub">N = national, R = regional, M = metropolitan</p></div>' +
      '</div>'));
    this.m = [...kit.stage.querySelectorAll('.routes-m')];
    this.e = [...kit.stage.querySelectorAll('.routes-e')];
    this.t = [...kit.stage.querySelectorAll('.routes-t')];
    this.l = [...kit.stage.querySelectorAll('.routes-l')];
    this.h = kit.stage.querySelector('.routes-h');
    this.foot = kit.stage.querySelector('.routes-foot').style;
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, 0.0);
    const xs = [480, 960, 1440];
    for (let i = 0; i < 3; i++) {
      const st = 0.4 + i * 0.6;
      const s = eob(seg(t, st, st + 0.6), 1.6);
      const br = 1 + 0.012 * Math.sin((t + i * 0.9) * 2 * Math.PI / 3.2);
      this.m[i].setAttribute('transform', 'translate(' + xs[i] + ' ' + (440 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
      this.e[i].setAttribute('stroke-dashoffset', (989 * (1 - eo(seg(t, st + 0.3, st + 1.0)))).toFixed(1));
      const lt = eob(seg(t, st + 0.6, st + 1.0), 1.8);
      this.t[i].style.opacity = Math.min(1, Math.max(0, lt) * 1.5);
      this.t[i].setAttribute('transform', 'scale(' + lerp(0.5, 1, lt).toFixed(4) + ')');
      const l = eo(seg(t, st + 1.0, st + 1.6));
      this.l[i].style.opacity = l;
      this.l[i].style.transform = 'translateY(' + lerp(24, 0, l) + 'px)';
    }
    const f = eo(seg(t, 4.4, 5.1));
    this.foot.opacity = f;
    this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});

},
  "quiz": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('quiz', {
  init(kit) {
    const F = 'var(--display, var(--sans, system-ui, sans-serif))';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="quiz-sign">' + SG.board(300, 540, 'class="sb"', 'quiz-rim') +
      SG.slant(-75, 'quiz-b') + SG.slant(75, 'quiz-b') +
      '<text class="quiz-n" x="0" y="380" text-anchor="middle" style="font:700 84px ' + F + '; fill:var(--main)">200 m</text></g>' +
      '</svg>' +
      '<div class="words" style="left:900px;top:110px;width:920px">' +
      '<div class="tag quiz-tag">Tricky one</div>' +
      '<h2 class="line quiz-h" style="font-size:80px">Two white bars. How far is the exit?</h2>' +
      '<div class="trap quiz-trap"><span class="tag no">Trap</span><span class="trap-x">Guessing 2 km or 20 m<i class="trap-line quiz-strike"></i></span></div>' +
      '<p class="sub quiz-simple">Each bar is 100 m, so two bars means 200 m.</p>' +
      '<div class="hook quiz-hook">Bars × 100 = metres to the exit.</div>' +
      '</div></div>'));
    this.sign = kit.stage.querySelector('.quiz-sign');
    this.rim = kit.stage.querySelector('.quiz-rim');
    this.bars = [...kit.stage.querySelectorAll('.quiz-b')];
    this.n = kit.stage.querySelector('.quiz-n');
    this.tag = kit.stage.querySelector('.quiz-tag').style;
    this.h = kit.stage.querySelector('.quiz-h');
    this.trap = kit.stage.querySelector('.quiz-trap').style;
    this.strike = kit.stage.querySelector('.quiz-strike').style;
    this.simple = kit.stage.querySelector('.quiz-simple').style;
    this.hook = kit.stage.querySelector('.quiz-hook').style;
    this.per = SG.per(300, 540);
  },
  render(t) {
    const s = eob(seg(t, 0.0, 0.9), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(460 ' + (440 - t * 1.2).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    this.rim.setAttribute('stroke-dashoffset', (this.per * (1 - eo(seg(t, 0.5, 1.5)))).toFixed(1));
    for (let i = 0; i < 2; i++) {
      const p = eob(seg(t, 1.0 + i * 0.3, 1.8 + i * 0.3), 1.7);
      this.bars[i].style.opacity = Math.min(1, Math.max(0, p) * 2);
      this.bars[i].setAttribute('transform', 'translate(' + lerp(180, 0, p).toFixed(1) + ' 0)');
    }
    const n = eob(seg(t, 8.6, 9.6), 1.8);
    this.n.style.opacity = Math.min(1, Math.max(0, n) * 1.5);
    this.n.setAttribute('transform', 'translate(0 ' + lerp(24, 0, Math.min(1, Math.max(0, n))).toFixed(1) + ')');
    this.tag.opacity = eo(seg(t, 0.4, 1.2));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.4, 1.2))) + 'px)';
    TextFx.fadeFromRight(this.h, t, 0.8, { dur: 0.8 });
    const tr = eo(seg(t, 4.2, 5.2));
    this.trap.opacity = tr;
    this.trap.transform = 'translateX(' + lerp(26, 0, tr) + 'px)';
    this.strike.transform = 'scaleX(' + eio(seg(t, 5.8, 6.6)).toFixed(4) + ')';
    const sm = eo(seg(t, 8.4, 9.4));
    this.simple.opacity = sm;
    this.simple.transform = 'translateX(' + lerp(26, 0, sm) + 'px)';
    const hk = eob(seg(t, 11.8, 12.8), 1.6);
    this.hook.opacity = Math.min(1, Math.max(0, hk) * 1.5);
    this.hook.transform = 'translateX(' + lerp(30, 0, Math.min(1, Math.max(0, hk))).toFixed(1) + 'px) scale(' + lerp(0.9, 1, hk).toFixed(4) + ')';
    this.hook.transformOrigin = 'left center';
  },
});

},
  "quizblue": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('quizblue', {
  init(kit) {
    const b = function (fill, cls) { return '<g class="' + cls + '">' + SG.board(440, 280, fill, cls + '-rim') + SG.rect(-160, -70, 230, 30, 15, 'class="sw"') + SG.rect(-160, -14, 160, 30, 15, 'class="sw"') + '<path d="' + SG.arrowR(110, 70, 48) + '" fill="none" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" style="stroke:#FFFFFF"/>'; };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      b('class="gb-green"', 'quizblue-g') +
      '<path class="ink quizblue-x" d="M-170 -110 L170 110" stroke-width="30" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" style="stroke:var(--sign-red)"/>' +
      '<path class="ink quizblue-x" d="M170 -110 L-170 110" stroke-width="30" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" style="stroke:var(--sign-red)"/></g>' +
      b('class="sb"', 'quizblue-b') + '</g>' +
      '</svg>' +
      '<div class="words" style="left:900px;top:110px;width:920px">' +
      '<div class="tag quizblue-tag">Tricky one</div>' +
      '<h2 class="line quizblue-h" style="font-size:80px">What colour are freeway guidance signs?</h2>' +
      '<div class="trap quizblue-trap"><span class="tag no">Trap</span><span class="trap-x">Choosing green, which is for other roads<i class="trap-line quizblue-strike"></i></span></div>' +
      '<p class="sub quizblue-simple">Freeways are blue, other roads are green, tourism is brown.</p>' +
      '<div class="hook quizblue-hook">Blue for the big fast roads.</div>' +
      '</div></div>'));
    this.g = kit.stage.querySelector('.quizblue-g');
    this.b = kit.stage.querySelector('.quizblue-b');
    this.rg = kit.stage.querySelector('.quizblue-g-rim');
    this.rb = kit.stage.querySelector('.quizblue-b-rim');
    this.x = [...kit.stage.querySelectorAll('.quizblue-x')];
    this.tag = kit.stage.querySelector('.quizblue-tag').style;
    this.h = kit.stage.querySelector('.quizblue-h');
    this.trap = kit.stage.querySelector('.quizblue-trap').style;
    this.strike = kit.stage.querySelector('.quizblue-strike').style;
    this.simple = kit.stage.querySelector('.quizblue-simple').style;
    this.hook = kit.stage.querySelector('.quizblue-hook').style;
    this.per = SG.per(440, 280);
  },
  render(t) {
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    const sg = eob(seg(t, 0.0, 0.9), 1.6);
    this.g.setAttribute('transform', 'translate(460 ' + (320 - t * 1.2).toFixed(1) + ') scale(' + (Math.max(0, sg) * br).toFixed(4) + ')');
    this.rg.setAttribute('stroke-dashoffset', (this.per * (1 - eo(seg(t, 0.5, 1.5)))).toFixed(1));
    this.x[0].setAttribute('stroke-dashoffset', (1 - eio(seg(t, 5.8, 6.3))).toFixed(4));
    this.x[1].setAttribute('stroke-dashoffset', (1 - eio(seg(t, 6.2, 6.7))).toFixed(4));
    const sb = eob(seg(t, 8.4, 9.3), 1.6);
    this.b.setAttribute('transform', 'translate(460 ' + (740 - t * 1.2).toFixed(1) + ') scale(' + (Math.max(0, sb) * br).toFixed(4) + ')');
    this.rb.setAttribute('stroke-dashoffset', (this.per * (1 - eo(seg(t, 8.9, 9.9)))).toFixed(1));
    this.tag.opacity = eo(seg(t, 0.4, 1.2));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.4, 1.2))) + 'px)';
    TextFx.fadeFromRight(this.h, t, 0.8, { dur: 0.8 });
    const tr = eo(seg(t, 4.2, 5.2));
    this.trap.opacity = tr;
    this.trap.transform = 'translateX(' + lerp(26, 0, tr) + 'px)';
    this.strike.transform = 'scaleX(' + eio(seg(t, 5.8, 6.6)).toFixed(4) + ')';
    const sm = eo(seg(t, 8.4, 9.4));
    this.simple.opacity = sm;
    this.simple.transform = 'translateX(' + lerp(26, 0, sm) + 'px)';
    const hk = eob(seg(t, 11.8, 12.8), 1.6);
    this.hook.opacity = Math.min(1, Math.max(0, hk) * 1.5);
    this.hook.transform = 'translateX(' + lerp(30, 0, Math.min(1, Math.max(0, hk))).toFixed(1) + 'px) scale(' + lerp(0.9, 1, hk).toFixed(4) + ')';
    this.hook.transformOrigin = 'left center';
  },
});

},
  "end": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('end', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      SG.mini('class="sb"', 'end-s') + SG.mini('class="gb-green"', 'end-s') + SG.mini('class="gb-brown"', 'end-s') +
      '</svg>' +
      '<div class="words" style="left:180px;top:280px;width:900px">' +
      '<div class="kicker end-k">Session 6 · Learners Coach</div>' +
      '<div class="bar end-bar" style="transform-origin:left center"></div>' +
      '<h2 class="line end-h">Read the board colour first.</h2>' +
      '<p class="sub end-sub">Blue freeways, green other roads, brown tourism. Next: the mini test.</p></div>' +
      '</div>'));
    this.s = [...kit.stage.querySelectorAll('.end-s')];
    this.rims = [...kit.stage.querySelectorAll('.end-s-rim')];
    this.k = kit.stage.querySelector('.end-k').style;
    this.bar = kit.stage.querySelector('.end-bar').style;
    this.h = kit.stage.querySelector('.end-h');
    this.sub = kit.stage.querySelector('.end-sub').style;
    this.per = SG.per(300, 190);
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
    const tt = Math.min(t, 4.6);
    const pos = [[1440, 290], [1620, 550], [1400, 800]];
    for (let i = 0; i < 3; i++) {
      const st = 0.6 + i * 0.35;
      const s = eob(seg(t, st, st + 0.6), 1.6);
      const br = 1 + 0.012 * Math.sin((tt + i * 0.9) * 2 * Math.PI / 3.2);
      const y = pos[i][1] + lerp(-40, 0, eo(seg(t, st, st + 0.6))) - tt * 1.2;
      this.s[i].setAttribute('transform', 'translate(' + pos[i][0] + ' ' + y.toFixed(1) + ') rotate(' + lerp(-14 + i * 10, 0, eo(seg(t, st, st + 0.8))).toFixed(2) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
      this.rims[i].setAttribute('stroke-dashoffset', (this.per * (1 - eo(seg(t, st + 0.3, st + 1.0)))).toFixed(1));
    }
  },
});

},
 },
 score: function (kit) {
kit.score(function (S, T) {
  const BPM = 196 * 60 / (T.end - T.countdown), B = 60 / BPM;
  S.tempo(BPM, { t0: T.countdown });
  S.program('pad', 'pad', { rev: 0.6, gain: -4 });
  S.program('mallet', 'marimba', { rev: 0.3, pan: -0.15 });
  S.program('keys', 'ep', { rev: 0.35, pan: 0.15 });
  S.program('bass', 'bass', { gain: -3 });
  S.program('bell', 'glock', { rev: 0.5, gain: -6 });
  // Title: near silent, a pad and one bell note
  S.chord('pad', ['D3', 'A3', 'F#4'], { t: 0, dur: T.countdown + 0.4, vel: 30 });
  S.note('bell', 'A5', { t: 1.0, dur: 2, vel: 40 });
  S.fx('pop', 1.4, { vel: 40 });
  // Progression, one chord per 8 beats
  const prog = [['D3', 'A3', 'F#4'], ['B2', 'F#3', 'D4'], ['G2', 'D3', 'B3'], ['A2', 'E3', 'C#4']];
  const roots = ['D2', 'B1', 'G1', 'A1'];
  const rest = function (b) { return (b >= 64 && b < 80) || (b >= 128 && b < 144); };
  for (let i = 0; i < 24; i++) {
    const c = prog[i % 4];
    S.chord('pad', c, { beat: i * 8, beats: 8, vel: 34 });
    if (i >= 2 && !rest(i * 8)) { S.note('bass', roots[i % 4], { beat: i * 8, beats: 3, vel: 64 }); S.note('bass', roots[i % 4], { beat: i * 8 + 4, beats: 2, vel: 54 }); }
    if (i >= 4 && i % 2 === 0 && !rest(i * 8)) S.chord('keys', c.map(function (p) { return p.replace(/\d/, function (d) { return String(+d + 1); }); }), { beat: i * 8, beats: 6, vel: 40 });
  }
  // Calm marimba ostinato over the signs
  S.pattern('mallet', 'x.x.X..x', { from: 0, repeat: 48, pitch: ['D5', 'A4', 'F#5', 'A4', 'E5'], vel: 50 });
  // Light pulse once the action starts; it drops out twice so only pad and mallet remain
  [16, 80, 144].forEach(function (f) { S.drums({ shaker: 'oxoxoxox', sidestick: '....x...', kick: 'x.......' }, { from: f, repeat: 12, vel: 46 }); });
  // Pops as each sign builds
  [['countdown', 0.3], ['countdown', 1.04], ['countdown', 1.37], ['countdown', 1.69], ['deadend', 0.3], ['deadend', 1.82], ['priority', 0.3], ['plates', 0.3], ['plates', 1.3], ['colours', 0.5], ['colours', 2.2], ['colours', 3.9], ['town', 0.3], ['diagram', 0.3], ['routes', 0.55], ['routes', 1.3], ['routes', 2.1], ['quiz', 0.3], ['quiz', 1.2], ['quiz', 1.5], ['quizblue', 0.3], ['quizblue', 8.5]].forEach(function (p) { S.fx('pop', T[p[0]] + p[1], { vel: 56 }); });
  S.fx('click', T.countdown + 6.5, { vel: 44 }); S.fx('click', T.countdown + 9.62, { vel: 44 });
  S.fx('whoosh', T.deadend + 5.46, { dur: 2.3, vel: 30 });
  S.fx('click', T.quiz + 5.8, { vel: 44 }); S.fx('ding', T.quiz + 8.6, { vel: 50 }); S.fx('sparkle', T.quiz + 11.9, { vel: 44 });
  S.fx('click', T.quizblue + 5.8, { vel: 44 }); S.fx('ding', T.quizblue + 8.6, { vel: 50 }); S.fx('sparkle', T.quizblue + 11.9, { vel: 44 });
  // Stop-time, then the hit on the end card
  S.fx('revswell', T.end, { dur: 1.4, vel: 60 });
  S.run('mallet', ['D5', 'E5', 'F#5', 'A5', 'B5', 'D6'], { t: T.end - 0.6, step: 0.1, vel: 50, cresc: 8 });
  S.chord('keys', ['D4', 'F#4', 'A4', 'D5'], { t: T.end, dur: T.END - T.end, vel: 72 });
  S.chord('pad', ['D3', 'A3', 'D4', 'F#4'], { t: T.end, dur: T.END - T.end, vel: 48 });
  S.note('bass', 'D2', { t: T.end, dur: 3, vel: 84 });
  S.drum('kick', { t: T.end, vel: 96 });
  S.drum('crash', { t: T.end, vel: 60 });
  S.fx('pop', T.end + 0.7, { vel: 48 }); S.fx('pop', T.end + 1.05, { vel: 48 }); S.fx('pop', T.end + 1.4, { vel: 48 });
  S.note('bell', 'F#5', { t: T.end + 2.2, dur: 3, vel: 40 });
  S.master({ gain: -6, fadeOut: 2.0 });
});
}
};