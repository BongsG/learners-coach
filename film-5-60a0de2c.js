(window.K53F = window.K53F || {})[5] = {
 title: "Session 5: Warning signs and hazard plates",
 scenes: [{"id": "title", "name": "Warning signs", "dur": 7}, {"id": "triangle", "name": "Danger ahead", "dur": 11}, {"id": "updown", "name": "Up or down", "dur": 13}, {"id": "trapup", "name": "Trap: up or down", "dur": 14}, {"id": "control", "name": "Control ahead", "dur": 11}, {"id": "hills", "name": "Hills and tunnels", "dur": 11}, {"id": "traphill", "name": "Trap: slow truck uphill", "dur": 14}, {"id": "surface", "name": "Road surface", "dur": 12}, {"id": "bends", "name": "Bend ahead", "dur": 11}, {"id": "traffic", "name": "Lanes and traffic", "dur": 12}, {"id": "junctions", "name": "Junction ahead", "dur": 12}, {"id": "hazards", "name": "Moving hazards", "dur": 12}, {"id": "yellow", "name": "Yellow background", "dur": 9}, {"id": "act", "name": "Spot, read, act", "dur": 11}, {"id": "plate", "name": "Danger plate", "dur": 12}, {"id": "trapplate", "name": "Trap: danger plate", "dur": 14}, {"id": "chevrons", "name": "Chevrons on a bend", "dur": 11}, {"id": "arrows", "name": "Arrow plates", "dur": 12}, {"id": "boom", "name": "Boom", "dur": 11}, {"id": "end", "name": "Remember", "dur": 11}],
 css: "#stage { --ground:#F3F5F7; --main:#1F5F8B; --second:#18212B; --accent:#F5C400; --sign-red:#C8102E; --sign-blue:#0A4D94; color:var(--second); font-family:var(--sans, system-ui, sans-serif) }\n.ground { position:absolute; inset:0; background:var(--ground); background-image:linear-gradient(color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px), linear-gradient(90deg, color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px); background-size:80px 80px; background-position:-1px -1px }\n.words { position:absolute; margin:0; display:flex; flex-direction:column; gap:24px } .words > * { margin:0 }\n.line { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:96px; line-height:1.02; font-weight:700; letter-spacing:-0.01em } .sub { font-size:40px; line-height:1.3; color:color-mix(in srgb, var(--second) 78%, var(--ground)) }\n.kicker { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:30px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:var(--main); display:flex; align-items:center; gap:16px }\n.kicker::before { content:''; width:44px; height:8px; border-radius:4px; background:var(--accent) }\n.bar { height:10px; width:160px; border-radius:5px; background:var(--accent) }\n.art { position:absolute; inset:0; width:100%; height:100%; overflow:visible }\n.sr { fill:var(--sign-red) } .sb { fill:var(--sign-blue) } .sw { fill:#FFFFFF } .sk { fill:var(--second) }\n.edge { fill:none; stroke:color-mix(in srgb, var(--second) 18%, transparent); stroke-width:3 }\n.shadow { fill:rgba(0,0,0,.12) }\n.card { position:absolute; background:#FFFFFF; border:3px solid color-mix(in srgb, var(--main) 35%, var(--ground)); border-radius:28px; box-shadow:0 18px 40px -18px rgba(0,0,0,.25) }\n.tag { display:inline-flex; align-self:flex-start; padding:10px 22px; border-radius:999px; background:var(--main); color:#FFFFFF; font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:34px; font-weight:700 }\n.tag.no { background:var(--sign-red) }\n.road { fill:color-mix(in srgb, var(--second) 82%, var(--ground)) } .lane { stroke:#FFFFFF; stroke-width:8; stroke-dasharray:40 34; fill:none } .lane.solid { stroke-dasharray:none; stroke:var(--accent) }.sym { fill:none; stroke:var(--second); stroke-linecap:round; stroke-linejoin:round }\n.post { fill:color-mix(in srgb, var(--second) 55%, var(--ground)) }\n.lamp-go { fill:color-mix(in srgb, var(--accent) 40%, var(--main)) }\n.roadline { fill:none; stroke:color-mix(in srgb, var(--second) 82%, var(--ground)) }\n",
 shared: function (kit) {
window.SG = {
  oct(cx, cy, r) { const p = []; for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + i * Math.PI / 4; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } return p.join(' '); },
  octWedge(cx, cy, r, i) { const a1 = Math.PI / 8 + i * Math.PI / 4, a2 = a1 + Math.PI / 4; return cx + ',' + cy + ' ' + (cx + r * Math.cos(a1)).toFixed(1) + ',' + (cy + r * Math.sin(a1)).toFixed(1) + ' ' + (cx + r * Math.cos(a2)).toFixed(1) + ',' + (cy + r * Math.sin(a2)).toFixed(1); },
  arrowUp(cx, cy, s) { return 'M' + cx + ' ' + (cy + s) + ' V' + (cy - s * 0.35) + ' M' + (cx - s * 0.55) + ' ' + (cy + s * 0.15) + ' L' + cx + ' ' + (cy - s) + ' L' + (cx + s * 0.55) + ' ' + (cy + s * 0.15); },
  wob(t, seed) { return Math.sin(t * 2.1 + seed) * 0.8 + Math.sin(t * 1.3 + seed * 2) * 0.5; },
  tri(cx, cy, r, down) { const k = down ? -1 : 1; return [[cx, cy - k * r], [cx + 0.866 * r, cy + k * r / 2], [cx - 0.866 * r, cy + k * r / 2]].map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' '); },
  triLen(r) { return 5.196 * r; },
  warn(id, r, sym, down) { return '<g class="' + id + '-sign"><polygon class="shadow" points="' + this.tri(12, 18, r * 1.06, down) + '"/><polygon class="sw ' + id + '-fill" points="' + this.tri(0, 0, r, down) + '"/><polygon class="' + id + '-ring" points="' + this.tri(0, 0, r * 0.9, down) + '" fill="none" stroke-width="' + (r * 0.15).toFixed(1) + '" stroke-linejoin="round" style="stroke:var(--sign-red)" stroke-dasharray="' + this.triLen(r * 0.9).toFixed(1) + '"/><g class="' + id + '-sym">' + (sym || '') + '</g></g>'; },
  cross(s) { return '<path class="sym" stroke-width="' + (s * 0.28).toFixed(1) + '" d="M0 ' + (-s) + ' V' + s + ' M' + (-s * 0.8) + ' 0 H' + (s * 0.8) + '"/>'; },
  chev(x, y, s) { return 'M' + (x - 0.45 * s) + ' ' + (y - s) + ' L' + (x + 0.45 * s) + ' ' + y + ' L' + (x - 0.45 * s) + ' ' + (y + s); },
  ez(t, a, b) { const x = Math.max(0, Math.min(1, (t - a) / (b - a))); return 1 - Math.pow(1 - x, 3); },
  card(id, x, y, w, h, icon, title, txt, k) {
    k = k || 1;
    return '<div class="card ' + id + '-c" style="left:' + x + 'px;top:' + y + 'px;width:' + w + 'px;height:' + h + 'px;padding:20px 28px;box-sizing:border-box;display:flex;gap:24px;align-items:center">' +
      '<svg width="' + Math.round(170 * k) + '" height="' + Math.round(140 * k) + '" viewBox="-118 -112 236 194" style="flex:none;overflow:visible">' + this.warn(id + '-i', 100, icon) + '</svg>' +
      '<div><div style="font-family:var(--display, var(--sans, system-ui, sans-serif));font-size:' + Math.round(50 * k) + 'px;font-weight:700;line-height:1.05">' + title + '</div>' +
      (txt ? '<p class="sub" style="margin:8px 0 0;font-size:' + Math.round(34 * k) + 'px">' + txt + '</p>' : '') + '</div></div>';
  },
  cardIn(el, t, t0) { const p = this.ez(t, t0, t0 + 1.0); el.style.opacity = p; el.style.transform = 'translateY(' + ((1 - p) * 40).toFixed(1) + 'px)'; },
  trap(id, q, trap, simple, hook) {
    const disp = 'font-family:var(--display, var(--sans, system-ui, sans-serif));font-weight:700';
    return '<div class="ground">' +
      '<div class="words" style="left:150px;top:90px;width:1620px"><div class="kicker ' + id + '-k">Tricky one</div><h2 class="line ' + id + '-q" style="font-size:68px">' + q + '</h2></div>' +
      '<div class="card ' + id + '-a" style="left:150px;top:400px;width:780px;height:370px;padding:36px 40px;box-sizing:border-box"><div class="tag no">Trap</div>' +
      '<div style="position:relative;margin-top:20px"><p class="sub ' + id + '-tt" style="margin:0">' + trap + '</p>' +
      '<div class="' + id + '-x" style="position:absolute;left:-8px;right:-8px;top:50%;height:8px;margin-top:-4px;border-radius:4px;background:var(--sign-red);transform-origin:left center"></div></div></div>' +
      '<div class="card ' + id + '-b" style="left:990px;top:400px;width:780px;height:370px;padding:36px 40px;box-sizing:border-box"><div class="tag">Remember</div>' +
      '<p class="sub" style="margin:20px 0 0;color:var(--second)">' + simple + '</p></div>' +
      '<div class="' + id + '-h" style="position:absolute;left:0;top:830px;width:1920px;display:flex;justify-content:center">' +
      '<div style="padding:22px 48px;border-radius:999px;background:var(--accent);color:var(--second);' + disp + ';font-size:56px">' + hook + '</div></div></div>';
  },
  trapGet(stage, id) { const q = function (c) { return stage.querySelector('.' + id + '-' + c); }; return { k: q('k').style, q: q('q'), a: q('a'), tt: q('tt').style, x: q('x').style, b: q('b'), h: q('h').style }; },
  trapRender(o, t) {
    o.k.opacity = this.ez(t, -0.2, 0.6);
    this.cardIn(o.a, t, 2.0);
    const x = this.ez(t, 6.0, 6.8);
    o.x.transform = 'scaleX(' + x.toFixed(4) + ')';
    o.tt.opacity = 1 - 0.45 * x;
    this.cardIn(o.b, t, 6.6);
    const h = this.ez(t, 10.0, 11.0);
    o.h.opacity = h;
    o.h.transform = 'translateY(' + ((1 - h) * 30).toFixed(1) + 'px) scale(' + (0.9 + 0.1 * h).toFixed(4) + ')';
  }
};

},
 mods: {
  "title": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('title', {
  init(kit) {
    const r = 260, v = [[0, -r * 0.9], [r * 0.779, r * 0.45], [-r * 0.779, r * 0.45]];
    let sides = '';
    this.n = [];
    for (let i = 0; i < 3; i++) {
      const a = v[i], b = v[(i + 1) % 3], mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, l = Math.hypot(mx, my);
      this.n.push([mx / l, my / l]);
      sides += '<line class="title-side" x1="' + a[0].toFixed(1) + '" y1="' + a[1].toFixed(1) + '" x2="' + b[0].toFixed(1) + '" y2="' + b[1].toFixed(1) + '" stroke-width="40" stroke-linecap="round" style="stroke:var(--sign-red)"/>';
    }
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="title-sign"><polygon class="shadow" points="' + SG.tri(12, 18, r * 1.06) + '"/>' +
      '<polygon class="sw title-fill" points="' + SG.tri(0, 0, r) + '"/>' + sides +
      '<g class="title-sym">' + SG.cross(r * 0.28) + '</g></g></svg>' +
      '<div class="words" style="left:150px;top:280px;width:900px">' +
      '<div class="kicker title-kick">Session 5 · Learners Coach</div>' +
      '<h1 class="line" style="font-size:120px">Warning signs and hazard plates</h1>' +
      '<p class="sub title-sub">Spot the triangle, read the symbol, get ready</p>' +
      '</div></div>'));
    this.sign = kit.stage.querySelector('.title-sign');
    this.fill = kit.stage.querySelector('.title-fill');
    this.sides = [...kit.stage.querySelectorAll('.title-side')];
    this.sym = kit.stage.querySelector('.title-sym');
    this.kick = kit.stage.querySelector('.title-kick').style;
    this.sub = kit.stage.querySelector('.title-sub').style;
    this.line = kit.stage.querySelector('.line');
    this.r = r;
  },
  render(t) {
    t = t / 1.3;
    this.kick.opacity = eo(seg(t, -0.6, -0.1));
    TextFx.fadeFromRight(this.line, t, -0.5);
    const sb = eo(seg(t, 0.6, 1.2));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
    const f = eob(seg(t, -0.6, 0.0), 1.6);
    this.fill.setAttribute('transform', 'scale(' + Math.max(0, f).toFixed(4) + ')');
    for (let i = 0; i < 3; i++) {
      const p = eob(seg(t, -0.4 + i * 0.22, 0.3 + i * 0.22), 1.6);
      const d = lerp(280, 0, p);
      this.sides[i].setAttribute('transform', 'translate(' + (this.n[i][0] * d).toFixed(1) + ' ' + (this.n[i][1] * d).toFixed(1) + ')');
      this.sides[i].style.opacity = Math.min(1, Math.max(0, p) * 2);
    }
    const s = eob(seg(t, 1.0, 1.5), 1.7);
    this.sym.style.opacity = Math.min(1, Math.max(0, s) * 1.5);
    this.sym.setAttribute('transform', 'translate(0 ' + (this.r * 0.06).toFixed(1) + ') scale(' + lerp(0.5, 1, s).toFixed(4) + ')');
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(1420 ' + (580 - t * 1.4).toFixed(1) + ') scale(' + br.toFixed(4) + ')');
  },
});

},
  "triangle": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('triangle', {
  init(kit) {
    const r = 270;
    this.len = SG.triLen(r * 0.9);
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="triangle-all"><g class="triangle-post"><rect class="post" x="-13" y="100" width="26" height="560" rx="6"/></g>' +
      SG.warn('triangle', r, '') + '</g></svg>' +
      '<div class="words" style="left:980px;top:250px;width:820px">' +
      '<div class="tag triangle-tag">Warning sign</div>' +
      '<h2 class="line">Danger ahead</h2>' +
      '<p class="sub triangle-sub">A red border and a triangle pointing up: something is ahead.</p>' +
      '<p class="sub triangle-sub2">It warns you before you reach the danger.</p>' +
      '</div></div>'));
    this.all = kit.stage.querySelector('.triangle-all');
    this.post = kit.stage.querySelector('.triangle-post');
    this.fill = kit.stage.querySelector('.triangle-fill');
    this.ring = kit.stage.querySelector('.triangle-ring');
    this.tag = kit.stage.querySelector('.triangle-tag').style;
    this.sub = kit.stage.querySelector('.triangle-sub').style;
    this.sub2 = kit.stage.querySelector('.triangle-sub2').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.all.setAttribute('transform', 'translate(500 ' + (470 - t * 1.4).toFixed(1) + ')');
    const p = eo(seg(t, 0.0, 0.6));
    this.post.setAttribute('transform', 'translate(0 ' + lerp(420, 0, p).toFixed(1) + ')');
    const f = eob(seg(t, 0.3, 0.9), 1.7);
    this.fill.setAttribute('transform', 'scale(' + (Math.max(0, f) * br).toFixed(4) + ')');
    this.ring.setAttribute('transform', 'scale(' + br.toFixed(4) + ')');
    this.ring.setAttribute('stroke-dashoffset', (this.len * (1 - eio(seg(t, 0.7, 1.8)))).toFixed(1));
    const tg = eo(seg(t, 1.7, 2.2));
    this.tag.opacity = tg;
    this.tag.transform = 'translateX(' + lerp(26, 0, tg) + 'px)';
    TextFx.fadeFromRight(this.line, t, 1.9);
    const sb = eo(seg(t, 2.7, 3.3));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
    const s2 = eo(seg(t, 4.4, 5.0));
    this.sub2.opacity = s2;
    this.sub2.transform = 'translateX(' + lerp(26, 0, s2) + 'px)';
  },
});

},
  "updown": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('updown', {
  init(kit) {
    this.len = SG.triLen(200 * 0.9);
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      SG.warn('updown-a', 200, SG.cross(56)) + SG.warn('updown-b', 200, '', true) +
      '<line class="updown-mid" x1="960" y1="260" x2="960" y2="740" stroke-width="4" stroke-linecap="round" style="stroke:var(--main);opacity:.25" stroke-dasharray="480"/>' +
      '</svg>' +
      '<div class="words" style="left:0;top:80px;width:1920px;text-align:center">' +
      '<h2 class="line updown-h">Up or down?</h2></div>' +
      '<div class="words updown-la" style="left:260px;top:770px;width:600px;text-align:center">' +
      '<div class="tag" style="align-self:center">Point up</div><p class="sub" style="margin-top:14px">Warning: something is ahead</p></div>' +
      '<div class="words updown-lb" style="left:1060px;top:770px;width:600px;text-align:center">' +
      '<div class="tag no" style="align-self:center">Point down</div><p class="sub" style="margin-top:14px">Yield: give way now</p></div>' +
      '<div class="words updown-foot" style="left:0;top:965px;width:1920px;align-items:center">' +
      '<p class="kicker">Up = look up ahead. Down = give way.</p></div>' +
      '</div>'));
    this.a = kit.stage.querySelector('.updown-a-sign');
    this.b = kit.stage.querySelector('.updown-b-sign');
    this.ringA = kit.stage.querySelector('.updown-a-ring');
    this.ringB = kit.stage.querySelector('.updown-b-ring');
    this.sym = kit.stage.querySelector('.updown-a-sym');
    this.mid = kit.stage.querySelector('.updown-mid');
    this.h = kit.stage.querySelector('.updown-h');
    this.la = kit.stage.querySelector('.updown-la').style;
    this.lb = kit.stage.querySelector('.updown-lb').style;
    this.foot = kit.stage.querySelector('.updown-foot').style;
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, -0.2);
    this.mid.setAttribute('stroke-dashoffset', (480 * (1 - eio(seg(t, 0.2, 1.0)))).toFixed(1));
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    const sa = eob(seg(t, 0.0, 0.6), 1.6);
    const sb = eob(seg(t, 1.8, 2.4), 1.6);
    const lean = eio(seg(t, 7.0, 8.2));
    this.a.setAttribute('transform', 'translate(' + (560 - lean * 20).toFixed(1) + ' ' + (540 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, sa) * br).toFixed(4) + ')');
    this.b.setAttribute('transform', 'translate(' + (1360 + lean * 20).toFixed(1) + ' ' + (460 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, sb) * br).toFixed(4) + ')');
    this.ringA.setAttribute('stroke-dashoffset', (this.len * (1 - eo(seg(t, 0.4, 1.3)))).toFixed(1));
    this.ringB.setAttribute('stroke-dashoffset', (this.len * (1 - eo(seg(t, 2.1, 3.0)))).toFixed(1));
    const sy = eob(seg(t, 1.2, 1.6), 1.7);
    this.sym.style.opacity = Math.min(1, Math.max(0, sy) * 1.5);
    this.sym.setAttribute('transform', 'translate(0 12) scale(' + lerp(0.5, 1, sy).toFixed(4) + ')');
    const la = eo(seg(t, 3.4, 4.0)), lb = eo(seg(t, 4.3, 4.9));
    this.la.opacity = la; this.la.transform = 'translateY(' + lerp(24, 0, la) + 'px)';
    this.lb.opacity = lb; this.lb.transform = 'translateY(' + lerp(24, 0, lb) + 'px)';
    const f = eo(seg(t, 5.8, 6.5));
    this.foot.opacity = f; this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});

},
  "trapup": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapup', {
  init(kit) {
    kit.stage.append(kit.h(SG.trap('trapup', 'Triangle pointing up or pointing down?', 'Mixing up warning signs with the yield sign because both are triangles.', 'Point up with a red border = warning, something is ahead. Point down = yield, give way now.', 'Up = look up ahead. Down = give way.')));
    this.o = SG.trapGet(kit.stage, 'trapup');
  },
  render(t) {
    TextFx.fadeFromRight(this.o.q, t, 0.0);
    SG.trapRender(this.o, t);
  },
});

},
  "control": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('control', {
  init(kit) {
    const r = 260;
    this.len = SG.triLen(r * 0.9);
    const sym = '<g class="control-box"><rect class="sk" x="-30" y="-62" width="60" height="150" rx="16"/></g>' +
      '<circle class="sr control-l" cx="0" cy="-27" r="18"/>' +
      '<circle class="control-l" cx="0" cy="13" r="18" style="fill:var(--accent)"/>' +
      '<circle class="lamp-go control-l" cx="0" cy="53" r="18"/>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' + SG.warn('control', r, sym) + '</svg>' +
      '<div class="words" style="left:1000px;top:170px;width:840px">' +
      '<div class="tag control-tag">Warning sign</div>' +
      '<h2 class="line">Control ahead</h2>' +
      '<p class="sub control-sub">Traffic lights, a stop or yield sign, a traffic officer, a scholar patrol, police activity or lights out of order.</p>' +
      '<p class="sub control-sub2">Slow down and get ready to stop or give way.</p>' +
      '</div></div>'));
    this.sign = kit.stage.querySelector('.control-sign');
    this.ring = kit.stage.querySelector('.control-ring');
    this.box = kit.stage.querySelector('.control-box');
    this.l = [...kit.stage.querySelectorAll('.control-l')];
    this.tag = kit.stage.querySelector('.control-tag').style;
    this.sub = kit.stage.querySelector('.control-sub').style;
    this.sub2 = kit.stage.querySelector('.control-sub2').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    this.sign.setAttribute('transform', 'translate(520 ' + (470 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    this.ring.setAttribute('stroke-dashoffset', (this.len * (1 - eo(seg(t, 0.3, 1.2)))).toFixed(1));
    const b = eo(seg(t, 0.8, 1.3));
    this.box.style.opacity = b;
    this.box.setAttribute('transform', 'translate(0 ' + lerp(60, 0, b).toFixed(1) + ')');
    for (let i = 0; i < 3; i++) {
      const p = eob(seg(t, 1.1 + i * 0.25, 1.5 + i * 0.25), 1.8);
      this.l[i].setAttribute('r', (18 * Math.max(0, p)).toFixed(2));
    }
    const tg = eo(seg(t, 1.6, 2.1));
    this.tag.opacity = tg;
    this.tag.transform = 'translateX(' + lerp(26, 0, tg) + 'px)';
    TextFx.fadeFromRight(this.line, t, 1.8);
    const sb = eo(seg(t, 2.6, 3.2));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
    const s2 = eo(seg(t, 4.2, 4.8));
    this.sub2.opacity = s2;
    this.sub2.transform = 'translateX(' + lerp(26, 0, s2) + 'px)';
  },
});

},
  "hills": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('hills', {
  init(kit) {
    const items = [
      ['<path class="sym" stroke-width="12" d="M-40 34 V0 A40 40 0 0 1 40 0 V34"/>', 'Tunnel ahead', 'Headlights on, no overtaking.'],
      ['<polygon class="sk" points="-46,-2 46,32 -46,32"/>', 'Steep downhill', 'Use a lower gear.'],
      ['<polygon class="sk" points="46,-2 -46,32 46,32"/>', 'Steep uphill', 'Do not cross a no-overtaking line to pass a slow vehicle.']
    ];
    let cards = '';
    for (let i = 0; i < 3; i++) cards += SG.card('hills', 150, 300 + i * 225, 1620, 200, items[i][0], items[i][1], items[i][2]);
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:150px;top:90px;width:1620px">' +
      '<div class="kicker hills-k">Road situations</div>' +
      '<h2 class="line hills-h">Hills and tunnels</h2></div>' + cards + '</div>'));
    this.c = [...kit.stage.querySelectorAll('.hills-c')];
    this.k = kit.stage.querySelector('.hills-k').style;
    this.h = kit.stage.querySelector('.hills-h');
    this.sg = [...kit.stage.querySelectorAll('.hills-i-sign')];
  },
  render(t) {
    this.k.opacity = eo(seg(t, -0.2, 0.6));
    TextFx.fadeFromRight(this.h, t, 0.0);
    for (let i = 0; i < 3; i++) {
      const t0 = 1.0 + i * 2.6;
      SG.cardIn(this.c[i], t, t0);
      const s = eob(seg(t, t0 + 0.3, t0 + 1.2), 1.6);
      const br = 1 + 0.012 * Math.sin((t + i) * 2 * Math.PI / 3.2);
      this.sg[i].setAttribute('transform', 'translate(0 ' + (-t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    }
  },
});

},
  "traphill": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('traphill', {
  init(kit) {
    kit.stage.append(kit.h(SG.trap('traphill', 'You see a ‘steep uphill’ warning and a slow truck ahead with a solid line on your side.', 'Thinking a slow vehicle on a hill is an excuse to cross the line.', 'A solid line on your side means no crossing it, even behind a slow truck on a climb.', 'Solid line beats slow truck.')));
    this.o = SG.trapGet(kit.stage, 'traphill');
  },
  render(t) {
    TextFx.fadeFromRight(this.o.q, t, 0.0);
    SG.trapRender(this.o, t);
  },
});

},
  "surface": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('surface', {
  init(kit) {
    const P = function (w, d) { return '<path class="sym" stroke-width="' + w + '" d="' + d + '"/>'; };
    const items = [
      [P(12, 'M-48 32 Q-26 0 -4 32 M4 32 Q26 0 48 32'), 'Speed humps', ''],
      [P(10, 'M-34 36 V14 L-14 -6 V-30 M34 36 V14 L14 -6 V-30'), 'Road narrows', ''],
      [P(10, 'M-14 38 C-34 18 6 2 -14 -22 M14 38 C-6 18 34 2 14 -22'), 'Slippery road', ''],
      ['<circle class="sk" cx="-20" cy="20" r="12"/><circle class="sk" cx="10" cy="30" r="10"/><circle class="sk" cx="20" cy="0" r="9"/><circle class="sk" cx="-4" cy="-14" r="8"/>', 'Falling rocks', ''],
      [P(8, 'M-44 18 q11 -12 22 0 t22 0 t22 0 t22 0 M-44 34 q11 -12 22 0 t22 0 t22 0 t22 0'), 'Drift', 'Test your brakes after.'],
      [P(8, 'M-20 40 V-14') + '<polygon class="sk" points="-20,-14 34,-4 34,8 -20,14"/>', 'Crosswinds', '']
    ];
    let cards = '';
    for (let i = 0; i < 6; i++) cards += SG.card('surface', 150 + (i % 3) * 550, 330 + Math.floor(i / 3) * 270, 520, 240, items[i][0], items[i][1], items[i][2], 0.8);
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:150px;top:90px;width:1620px">' +
      '<div class="kicker surface-k">Road situations</div>' +
      '<h2 class="line surface-h">The road surface and the weather</h2></div>' + cards + '</div>'));
    this.c = [...kit.stage.querySelectorAll('.surface-c')];
    this.k = kit.stage.querySelector('.surface-k').style;
    this.h = kit.stage.querySelector('.surface-h');
    this.sg = [...kit.stage.querySelectorAll('.surface-i-sign')];
  },
  render(t) {
    this.k.opacity = eo(seg(t, -0.2, 0.6));
    TextFx.fadeFromRight(this.h, t, 0.0);
    for (let i = 0; i < 6; i++) {
      const t0 = 1.2 + i * 1.3;
      SG.cardIn(this.c[i], t, t0);
      const s = eob(seg(t, t0 + 0.3, t0 + 1.2), 1.6);
      const br = 1 + 0.012 * Math.sin((t + i) * 2 * Math.PI / 3.2);
      this.sg[i].setAttribute('transform', 'translate(0 ' + (-t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    }
  },
});

},
  "bends": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('bends', {
  init(kit) {
    const r = 260, s = 73, w = (s * 0.24).toFixed(1);
    this.len = SG.triLen(r * 0.9);
    const P = function (d) { return '<g class="bends-s"><path class="sym" stroke-width="' + w + '" d="' + d + '"/></g>'; };
    const syms = P('M' + (-0.15 * s) + ' ' + s + ' C' + (-0.15 * s) + ' ' + (0.2 * s) + ' ' + (0.35 * s) + ' ' + (0.1 * s) + ' ' + (0.35 * s) + ' ' + (-0.75 * s) + ' M' + (0.05 * s) + ' ' + (-0.45 * s) + ' L' + (0.35 * s) + ' ' + (-0.8 * s) + ' L' + (0.65 * s) + ' ' + (-0.45 * s)) +
      P('M' + (-0.3 * s) + ' ' + s + ' V' + (-0.1 * s) + ' H' + (0.7 * s) + ' M' + (0.35 * s) + ' ' + (-0.45 * s) + ' L' + (0.75 * s) + ' ' + (-0.1 * s) + ' L' + (0.35 * s) + ' ' + (0.25 * s)) +
      P('M' + (-0.4 * s) + ' ' + s + ' V' + (-0.3 * s) + ' A' + (0.4 * s) + ' ' + (0.4 * s) + ' 0 0 1 ' + (0.4 * s) + ' ' + (-0.3 * s) + ' V' + (0.6 * s) + ' M' + (0.1 * s) + ' ' + (0.3 * s) + ' L' + (0.4 * s) + ' ' + (0.65 * s) + ' L' + (0.7 * s) + ' ' + (0.3 * s));
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' + SG.warn('bends', r, syms) + '</svg>' +
      '<div class="words" style="left:150px;top:250px;width:820px">' +
      '<div class="tag bends-tag">Gentle curve</div>' +
      '<h2 class="line">Bend ahead</h2>' +
      '<p class="sub bends-sub">Gentle curve, sharp bend, hairpin or winding road.</p>' +
      '</div></div>'));
    this.sign = kit.stage.querySelector('.bends-sign');
    this.ring = kit.stage.querySelector('.bends-ring');
    this.s = [...kit.stage.querySelectorAll('.bends-s')];
    this.tagEl = kit.stage.querySelector('.bends-tag');
    this.tag = this.tagEl.style;
    this.sub = kit.stage.querySelector('.bends-sub').style;
    this.line = kit.stage.querySelector('.line');
    this.names = ['Gentle curve', 'Sharp bend', 'Hairpin'];
    this.a = [0.9, 3.0, 5.1];
  },
  render(t) {
    t = t / 1.3;
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    const sc = eob(seg(t, 0.0, 0.6), 1.6);
    this.sign.setAttribute('transform', 'translate(1400 ' + (470 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, sc) * br).toFixed(4) + ')');
    this.ring.setAttribute('stroke-dashoffset', (this.len * (1 - eo(seg(t, 0.3, 1.2)))).toFixed(1));
    let idx = 0, vis = 0;
    for (let i = 0; i < 3; i++) {
      const a = this.a[i];
      const p = eob(seg(t, a, a + 0.45), 1.7);
      const q = i < 2 ? eo(seg(t, a + 1.8, a + 2.1)) : 0;
      const o = Math.min(1, Math.max(0, p) * 1.5) * (1 - q);
      this.s[i].style.opacity = o;
      this.s[i].setAttribute('transform', 'translate(0 16) scale(' + (lerp(0.5, 1, p) * lerp(1, 0.6, q)).toFixed(4) + ')');
      if (t >= a - 0.1) { idx = i; vis = o; }
    }
    if (this.tagEl.textContent !== this.names[idx]) this.tagEl.textContent = this.names[idx];
    this.tag.opacity = vis;
    this.tag.transform = 'translateX(' + lerp(26, 0, vis) + 'px)';
    TextFx.fadeFromRight(this.line, t, 0.7);
    const sb = eo(seg(t, 1.7, 2.3));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
  },
});

},
  "traffic": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('traffic', {
  init(kit) {
    const P = function (w, d, x) { return '<path class="sym" stroke-width="' + w + '" d="' + d + '"' + (x || '') + '/>'; };
    const items = [
      [P(10, 'M-16 34 V-24 M-30 -10 L-16 -26 L-2 -10 M16 -24 V34 M2 20 L16 36 L30 20'), 'Two-way traffic ahead', 'Keep left.'],
      [P(10, 'M-24 38 V-28 M24 38 V8 L-4 -24'), 'Right lane ends', ''],
      [P(14, 'M-6 38 V-30') + P(8, 'M2 8 H36', ' stroke-dasharray="8 10"'), 'Concealed driveway', ''],
      ['<circle class="sym" cx="0" cy="8" r="24" stroke-width="10"/>' + P(8, 'M12 -24 L24 -12 L8 -8'), 'Traffic circle ahead', '']
    ];
    let cards = '';
    for (let i = 0; i < 4; i++) cards += SG.card('traffic', 150 + (i % 2) * 830, 330 + Math.floor(i / 2) * 280, 790, 250, items[i][0], items[i][1], items[i][2]);
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:150px;top:90px;width:1620px">' +
      '<div class="kicker traffic-k">Bends and traffic</div>' +
      '<h2 class="line traffic-h">Lanes and traffic ahead</h2></div>' + cards + '</div>'));
    this.c = [...kit.stage.querySelectorAll('.traffic-c')];
    this.k = kit.stage.querySelector('.traffic-k').style;
    this.h = kit.stage.querySelector('.traffic-h');
    this.sg = [...kit.stage.querySelectorAll('.traffic-i-sign')];
  },
  render(t) {
    this.k.opacity = eo(seg(t, -0.2, 0.6));
    TextFx.fadeFromRight(this.h, t, 0.0);
    for (let i = 0; i < 4; i++) {
      const t0 = 1.2 + i * 1.9;
      SG.cardIn(this.c[i], t, t0);
      const s = eob(seg(t, t0 + 0.3, t0 + 1.2), 1.6);
      const br = 1 + 0.012 * Math.sin((t + i) * 2 * Math.PI / 3.2);
      this.sg[i].setAttribute('transform', 'translate(0 ' + (-t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    }
  },
});

},
  "junctions": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('junctions', {
  init(kit) {
    const r = 260, s = 73, w = (s * 0.28).toFixed(1);
    this.len = SG.triLen(r * 0.9);
    const syms = '<g class="junctions-s">' + SG.cross(s) + '</g>' +
      '<g class="junctions-s"><path class="sym" stroke-width="' + w + '" d="M0 ' + s + ' V' + (-0.6 * s) + ' M' + (-0.85 * s) + ' ' + (-0.6 * s) + ' H' + (0.85 * s) + '"/></g>' +
      '<g class="junctions-s"><path class="sym" stroke-width="' + w + '" d="M0 ' + s + ' V' + (0.1 * s) + ' L' + (-0.6 * s) + ' ' + (-0.8 * s) + ' M0 ' + (0.1 * s) + ' L' + (0.6 * s) + ' ' + (-0.8 * s) + '"/></g>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' + SG.warn('junctions', r, syms) + '</svg>' +
      '<div class="words" style="left:1000px;top:230px;width:820px">' +
      '<div class="tag junctions-tag">Crossroad</div>' +
      '<h2 class="line">Junction ahead</h2>' +
      '<p class="sub junctions-sub">Crossroad, T-junction, side road, staggered junctions or Y-junction.</p>' +
      '</div></div>'));
    this.sign = kit.stage.querySelector('.junctions-sign');
    this.ring = kit.stage.querySelector('.junctions-ring');
    this.s = [...kit.stage.querySelectorAll('.junctions-s')];
    this.tagEl = kit.stage.querySelector('.junctions-tag');
    this.tag = this.tagEl.style;
    this.sub = kit.stage.querySelector('.junctions-sub').style;
    this.line = kit.stage.querySelector('.line');
    this.names = ['Crossroad', 'T-junction', 'Y-junction'];
    this.a = [1.0, 3.3, 5.6];
  },
  render(t) {
    t = t / 1.3;
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    const sc = eob(seg(t, 0.0, 0.6), 1.6);
    this.sign.setAttribute('transform', 'translate(520 ' + (470 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, sc) * br).toFixed(4) + ')');
    this.ring.setAttribute('stroke-dashoffset', (this.len * (1 - eo(seg(t, 0.3, 1.2)))).toFixed(1));
    let idx = 0, vis = 0;
    for (let i = 0; i < 3; i++) {
      const a = this.a[i];
      const p = eob(seg(t, a, a + 0.45), 1.7);
      const q = i < 2 ? eo(seg(t, a + 2.0, a + 2.3)) : 0;
      const o = Math.min(1, Math.max(0, p) * 1.5) * (1 - q);
      this.s[i].style.opacity = o;
      this.s[i].setAttribute('transform', 'translate(0 16) scale(' + (lerp(0.5, 1, p) * lerp(1, 0.6, q)).toFixed(4) + ')');
      if (t >= a - 0.1) { idx = i; vis = o; }
    }
    if (this.tagEl.textContent !== this.names[idx]) this.tagEl.textContent = this.names[idx];
    this.tag.opacity = vis;
    this.tag.transform = 'translateX(' + lerp(26, 0, vis) + 'px)';
    TextFx.fadeFromRight(this.line, t, 0.8);
    const sb = eo(seg(t, 1.8, 2.4));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
  },
});

},
  "hazards": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('hazards', {
  init(kit) {
    const r = 170;
    this.len = SG.triLen(r * 0.9);
    const man = function (x, y, h) {
      return '<circle class="sk" cx="' + x + '" cy="' + (y - h * 0.85) + '" r="' + (h * 0.13) + '"/>' +
        '<path class="sym" stroke-width="' + (h * 0.2) + '" d="M' + x + ' ' + (y - h * 0.66) + ' L' + x + ' ' + (y - h * 0.34) + '"/>' +
        '<path class="sym" stroke-width="' + (h * 0.11) + '" d="M' + (x - h * 0.15) + ' ' + y + ' L' + x + ' ' + (y - h * 0.3) + ' L' + (x + h * 0.15) + ' ' + y + ' M' + x + ' ' + (y - h * 0.6) + ' L' + (x + h * 0.2) + ' ' + (y - h * 0.38) + '"/>';
    };
    const syms = [man(0, 52, 120), man(-22, 52, 100) + man(26, 52, 78),
      man(-26, 52, 100) + '<path class="sk" d="M8 54 Q36 6 64 54 Z"/><path class="sym" stroke-width="8" d="M-8 -12 L34 40"/>'];
    let art = '';
    for (let i = 0; i < 3; i++) art += SG.warn('hazards-' + i, r, syms[i]);
    const cap = function (i, x, txt) { return '<div class="words hazards-c" style="left:' + x + 'px;top:740px;width:440px;align-items:center"><div class="tag" style="align-self:center">' + txt + '</div></div>'; };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' + art + '</svg>' +
      '<div class="words" style="left:0;top:90px;width:1920px;text-align:center">' +
      '<h2 class="line hazards-h">Moving hazards</h2></div>' +
      cap(0, 200, 'Pedestrians') + cap(1, 740, 'Children') + cap(2, 1280, 'Road works') +
      '<div class="words hazards-foot" style="left:0;top:900px;width:1920px;align-items:center">' +
      '<p class="sub">Also cyclists, animals (cattle, wild animals, elephants and others) and an accident ahead.</p></div>' +
      '</div>'));
    this.sg = [0, 1, 2].map(function (i) { return kit.stage.querySelector('.hazards-' + i + '-sign'); });
    this.rg = [0, 1, 2].map(function (i) { return kit.stage.querySelector('.hazards-' + i + '-ring'); });
    this.sy = [0, 1, 2].map(function (i) { return kit.stage.querySelector('.hazards-' + i + '-sym'); });
    this.c = [...kit.stage.querySelectorAll('.hazards-c')];
    this.h = kit.stage.querySelector('.hazards-h');
    this.foot = kit.stage.querySelector('.hazards-foot').style;
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, -0.2);
    const xs = [420, 960, 1500];
    for (let i = 0; i < 3; i++) {
      const a = 0.0 + i * 0.6;
      const br = 1 + 0.012 * Math.sin((t + i * 0.9) * 2 * Math.PI / 3.2);
      const s = eob(seg(t, a, a + 0.6), 1.6);
      this.sg[i].setAttribute('transform', 'translate(' + xs[i] + ' ' + (480 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
      this.rg[i].setAttribute('stroke-dashoffset', (this.len * (1 - eo(seg(t, a + 0.3, a + 1.1)))).toFixed(1));
      const y = eob(seg(t, a + 0.9, a + 1.35), 1.7);
      this.sy[i].style.opacity = Math.min(1, Math.max(0, y) * 1.5);
      this.sy[i].setAttribute('transform', 'translate(0 ' + lerp(30, 0, y).toFixed(1) + ')');
      const c = eo(seg(t, 2.8 + i * 0.4, 3.4 + i * 0.4));
      this.c[i].style.opacity = c;
      this.c[i].style.transform = 'translateY(' + lerp(24, 0, c) + 'px)';
    }
    const f = eo(seg(t, 4.8, 5.5));
    this.foot.opacity = f;
    this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});

},
  "yellow": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('yellow', {
  init(kit) {
    this.len = SG.triLen(200 * 0.9);
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      SG.warn('yellow-a', 200, SG.cross(56)) + SG.warn('yellow-b', 200, SG.cross(56)) +
      '<line class="yellow-mid" x1="960" y1="260" x2="960" y2="740" stroke-width="4" stroke-linecap="round" style="stroke:var(--main);opacity:.25" stroke-dasharray="480"/>' +
      '</svg>' +
      '<div class="words" style="left:0;top:80px;width:1920px;text-align:center">' +
      '<h2 class="line yellow-h">Same sign, yellow background</h2></div>' +
      '<div class="words yellow-la" style="left:260px;top:770px;width:600px;align-items:center;text-align:center">' +
      '<div class="tag">Standard</div><p class="sub" style="margin-top:14px">The usual warning sign</p></div>' +
      '<div class="words yellow-lb" style="left:1010px;top:770px;width:700px;align-items:center;text-align:center">' +
      '<div class="tag">Yellow background</div><p class="sub" style="margin-top:14px">A high-visibility or temporary version</p></div>' +
      '</div>'));
    kit.stage.querySelector('.yellow-b-fill').style.fill = 'var(--accent)';
    this.a = kit.stage.querySelector('.yellow-a-sign');
    this.b = kit.stage.querySelector('.yellow-b-sign');
    this.ringA = kit.stage.querySelector('.yellow-a-ring');
    this.ringB = kit.stage.querySelector('.yellow-b-ring');
    this.symA = kit.stage.querySelector('.yellow-a-sym');
    this.symB = kit.stage.querySelector('.yellow-b-sym');
    this.mid = kit.stage.querySelector('.yellow-mid');
    this.h = kit.stage.querySelector('.yellow-h');
    this.la = kit.stage.querySelector('.yellow-la').style;
    this.lb = kit.stage.querySelector('.yellow-lb').style;
  },
  render(t) {
    TextFx.fadeFromRight(this.h, t, -0.2);
    this.mid.setAttribute('stroke-dashoffset', (480 * (1 - eio(seg(t, 0.2, 1.2)))).toFixed(1));
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    const sa = eob(seg(t, 0.0, 0.9), 1.6), sb = eob(seg(t, 2.6, 3.5), 1.6);
    this.a.setAttribute('transform', 'translate(560 ' + (540 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, sa) * br).toFixed(4) + ')');
    this.b.setAttribute('transform', 'translate(1360 ' + (540 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, sb) * br).toFixed(4) + ')');
    this.ringA.setAttribute('stroke-dashoffset', (this.len * (1 - eo(seg(t, 0.4, 1.5)))).toFixed(1));
    this.ringB.setAttribute('stroke-dashoffset', (this.len * (1 - eo(seg(t, 3.0, 4.1)))).toFixed(1));
    const ya = eob(seg(t, 1.2, 1.8), 1.7), yb = eob(seg(t, 3.8, 4.4), 1.7);
    this.symA.style.opacity = Math.min(1, Math.max(0, ya) * 1.5);
    this.symA.setAttribute('transform', 'translate(0 12) scale(' + lerp(0.5, 1, ya).toFixed(4) + ')');
    this.symB.style.opacity = Math.min(1, Math.max(0, yb) * 1.5);
    this.symB.setAttribute('transform', 'translate(0 12) scale(' + lerp(0.5, 1, yb).toFixed(4) + ')');
    const la = eo(seg(t, 1.6, 2.6)), lb = eo(seg(t, 4.2, 5.2));
    this.la.opacity = la; this.la.transform = 'translateY(' + lerp(24, 0, la) + 'px)';
    this.lb.opacity = lb; this.lb.transform = 'translateY(' + lerp(24, 0, lb) + 'px)';
  },
});

},
  "act": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('act', {
  init(kit) {
    const card = function (x, n, txt) {
      return '<div class="card act-c" style="left:' + x + 'px;top:290px;width:480px;height:270px;padding:36px 40px;box-sizing:border-box">' +
        '<div style="font-family:var(--display, var(--sans, system-ui, sans-serif));font-size:88px;font-weight:700;line-height:1;color:var(--main)">' + n + '</div>' +
        '<p class="sub" style="margin:16px 0 0;color:var(--second)">' + txt + '</p></div>';
    };
    const tags = ['Slow down', 'Change gear', 'Keep left', 'Get ready to stop'].map(function (s) { return '<div class="tag act-t" style="align-self:center">' + s + '</div>'; }).join('');
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:0;top:90px;width:1920px;text-align:center">' +
      '<h2 class="line act-h">Spot it, read it, act</h2></div>' +
      card(180, '1', 'Spot the red triangle pointing up') +
      card(720, '2', 'Read the symbol') +
      card(1260, '3', 'Decide what to do') +
      '<div class="act-row" style="position:absolute;left:0;top:680px;width:1920px;display:flex;justify-content:center;gap:28px">' + tags + '</div>' +
      '<div class="words act-foot" style="left:0;top:860px;width:1920px;align-items:center">' +
      '<p class="kicker">Act before you reach the danger</p></div>' +
      '</div>'));
    this.c = [...kit.stage.querySelectorAll('.act-c')];
    this.tg = [...kit.stage.querySelectorAll('.act-t')];
    this.h = kit.stage.querySelector('.act-h');
    this.foot = kit.stage.querySelector('.act-foot').style;
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, -0.3);
    for (let i = 0; i < 3; i++) {
      const p = eo(seg(t, 0.5 + i * 0.6, 1.1 + i * 0.6));
      const d = Math.sin((t + i) * 2 * Math.PI / 3.2) * 4;
      this.c[i].style.opacity = p;
      this.c[i].style.transform = 'translateY(' + (lerp(50, 0, p) + d - t * 1.2).toFixed(1) + 'px)';
    }
    for (let i = 0; i < 4; i++) {
      const p = eob(seg(t, 3.2 + i * 0.35, 3.7 + i * 0.35), 1.8);
      this.tg[i].style.opacity = Math.min(1, Math.max(0, p) * 1.5);
      this.tg[i].style.transform = 'scale(' + lerp(0.6, 1, p).toFixed(4) + ')';
    }
    const f = eo(seg(t, 5.2, 5.9));
    this.foot.opacity = f;
    this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});

},
  "plate": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('plate', {
  init(kit) {
    let ch = '';
    for (let i = 0; i < 3; i++) ch += '<path class="sym plate-ch" stroke-width="36" d="' + SG.chev(-120 + i * 120, 0, 90) + '"/>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="plate-sign"><rect class="shadow" x="-218" y="-118" width="460" height="260" rx="18"/>' +
      '<rect class="sw plate-bg" x="-230" y="-130" width="460" height="260" rx="18"/>' +
      '<rect class="edge" x="-230" y="-130" width="460" height="260" rx="18"/>' + ch + '</g>' +
      '<path class="plate-arr" d="M380 820 C620 820 860 700 860 470 L860 270" fill="none" stroke-width="16" stroke-linecap="round" style="stroke:var(--main)" pathLength="100" stroke-dasharray="100"/>' +
      '<path class="plate-head" d="M818 318 L860 266 L902 318" fill="none" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" style="stroke:var(--main)"/>' +
      '</svg>' +
      '<div class="words" style="left:1000px;top:230px;width:820px">' +
      '<div class="tag plate-tag">Hazard marker plate</div>' +
      '<h2 class="line">Follow the arrowhead</h2>' +
      '<p class="sub plate-sub">Pass the hazard on the side the arrowhead points to.</p>' +
      '</div></div>'));
    this.sign = kit.stage.querySelector('.plate-sign');
    this.bg = kit.stage.querySelector('.plate-bg');
    this.ch = [...kit.stage.querySelectorAll('.plate-ch')];
    this.arr = kit.stage.querySelector('.plate-arr');
    this.head = kit.stage.querySelector('.plate-head').style;
    this.tag = kit.stage.querySelector('.plate-tag').style;
    this.sub = kit.stage.querySelector('.plate-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    this.sign.setAttribute('transform', 'translate(560 ' + (450 - t * 1.3).toFixed(1) + ') scale(' + br.toFixed(4) + ')');
    this.bg.setAttribute('transform', 'scale(' + Math.max(0, s).toFixed(4) + ' 1)');
    for (let i = 0; i < 3; i++) {
      const p = eob(seg(t, 0.6 + i * 0.25, 1.1 + i * 0.25), 1.6);
      this.ch[i].style.opacity = Math.min(1, Math.max(0, p) * 2);
      this.ch[i].setAttribute('transform', 'translate(' + lerp(-160, 0, p).toFixed(1) + ' 0)');
    }
    const tg = eo(seg(t, 1.5, 2.0));
    this.tag.opacity = tg;
    this.tag.transform = 'translateX(' + lerp(26, 0, tg) + 'px)';
    TextFx.fadeFromRight(this.line, t, 1.7);
    const sb = eo(seg(t, 2.6, 3.2));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
    this.arr.setAttribute('stroke-dashoffset', (100 * (1 - eio(seg(t, 3.8, 5.3)))).toFixed(2));
    const h = eob(seg(t, 5.2, 5.6), 1.8);
    this.head.opacity = Math.min(1, Math.max(0, h) * 1.5);
    this.head.transform = 'translateY(' + lerp(20, 0, Math.min(1, Math.max(0, h))) + 'px)';
  },
});

},
  "trapplate": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('trapplate', {
  init(kit) {
    kit.stage.append(kit.h(SG.trap('trapplate', 'Which way do you pass a danger plate?', 'Passing on the side the stripes slope away from.', 'Pass on the side the arrowhead or chevron points to.', 'Follow the arrowhead.')));
    this.o = SG.trapGet(kit.stage, 'trapplate');
  },
  render(t) {
    TextFx.fadeFromRight(this.o.q, t, 0.0);
    SG.trapRender(this.o, t);
  },
});

},
  "chevrons": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('chevrons', {
  init(kit) {
    const d = 'M1250 1140 L1250 600 A200 200 0 0 1 1450 400 L1990 400';
    let boards = '';
    this.pos = [];
    for (let i = 0; i < 5; i++) {
      const a = Math.PI - i * Math.PI / 8;
      this.pos.push([1450 + 335 * Math.cos(a), 600 - 335 * Math.sin(a)]);
      boards += '<g class="chevrons-b"><rect class="shadow" x="-30" y="-38" width="72" height="92" rx="10"/><rect class="sw" x="-36" y="-46" width="72" height="92" rx="10"/><rect class="edge" x="-36" y="-46" width="72" height="92" rx="10"/>' +
        '<path class="sym" stroke-width="16" d="' + SG.chev(0, 0, 26) + '"/></g>';
    }
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<path class="roadline chevrons-road" d="' + d + '" stroke-width="170" pathLength="100" stroke-dasharray="100"/>' +
      '<path class="lane chevrons-lane" d="' + d + '"/>' + boards +
      '<g class="chevrons-car"><rect x="-30" y="-50" width="60" height="100" rx="18" style="fill:var(--main)"/><rect x="-20" y="-34" width="40" height="24" rx="6" fill="#FFFFFF" opacity=".85"/></g>' +
      '</svg>' +
      '<div class="words" style="left:150px;top:250px;width:820px">' +
      '<div class="tag chevrons-tag">Hazard marker</div>' +
      '<h2 class="line">Chevrons on a bend</h2>' +
      '<p class="sub chevrons-sub">Chevron boards mark the place and the direction of the sharp bend.</p>' +
      '</div></div>'));
    this.road = kit.stage.querySelector('.chevrons-road');
    this.lane = kit.stage.querySelector('.chevrons-lane').style;
    this.b = [...kit.stage.querySelectorAll('.chevrons-b')];
    this.car = kit.stage.querySelector('.chevrons-car');
    this.tag = kit.stage.querySelector('.chevrons-tag').style;
    this.sub = kit.stage.querySelector('.chevrons-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.road.setAttribute('stroke-dashoffset', (100 * (1 - eio(seg(t, 0.0, 1.2)))).toFixed(2));
    this.lane.opacity = eo(seg(t, 1.0, 1.5));
    for (let i = 0; i < 5; i++) {
      const p = eob(seg(t, 1.4 + i * 0.25, 1.9 + i * 0.25), 1.8);
      const br = 1 + 0.012 * Math.sin((t + i * 0.6) * 2 * Math.PI / 3.2);
      this.b[i].style.opacity = Math.min(1, Math.max(0, p) * 1.5);
      this.b[i].setAttribute('transform', 'translate(' + this.pos[i][0].toFixed(1) + ' ' + (this.pos[i][1] - t * 1.2).toFixed(1) + ') scale(' + (Math.max(0, p) * br).toFixed(4) + ')');
    }
    const dist = lerp(-80, 1420, eio(seg(t, 3.4, 7.8)));
    let x, y, a;
    if (dist < 540) { x = 1250; y = 1140 - dist; a = 0; }
    else if (dist < 854) { const f = (dist - 540) / 200; x = 1450 - 200 * Math.cos(f); y = 600 - 200 * Math.sin(f); a = f * 180 / Math.PI; }
    else { x = 1450 + (dist - 854); y = 400; a = 90; }
    this.car.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ') rotate(' + a.toFixed(2) + ')');
    const tg = eo(seg(t, 0.4, 0.9));
    this.tag.opacity = tg;
    this.tag.transform = 'translateX(' + lerp(26, 0, tg) + 'px)';
    TextFx.fadeFromRight(this.line, t, 0.6);
    const sb = eo(seg(t, 1.6, 2.2));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
  },
});

},
  "arrows": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('arrows', {
  init(kit) {
    const chv = function (x, dir) { return '<path class="sym arrows-ch" stroke-width="26" d="M' + (x - dir * 27) + ' -60 L' + (x + dir * 27) + ' 0 L' + (x - dir * 27) + ' 60"/>'; };
    const plate = function (id, dirs) {
      return '<g class="arrows-' + id + '"><rect class="shadow" x="-248" y="-98" width="520" height="220" rx="16"/><rect class="sw" x="-260" y="-110" width="520" height="220" rx="16"/><rect class="edge" x="-260" y="-110" width="520" height="220" rx="16"/>' +
        chv(-160, dirs[0]) + chv(-80, dirs[0]) + chv(80, dirs[1]) + chv(160, dirs[1]) + '</g>';
    };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' + plate('a', [-1, 1]) + plate('b', [1, -1]) +
      '<line class="arrows-mid" x1="960" y1="300" x2="960" y2="700" stroke-width="4" stroke-linecap="round" style="stroke:var(--main);opacity:.25" stroke-dasharray="400"/></svg>' +
      '<div class="words" style="left:0;top:80px;width:1920px;text-align:center">' +
      '<h2 class="line arrows-h">Arrow plates: where the road ends</h2></div>' +
      '<div class="words arrows-la" style="left:200px;top:660px;width:720px;align-items:center;text-align:center">' +
      '<div class="tag">Arrows point outward</div><p class="sub" style="margin-top:14px">The road ends at a T-junction: turn left or right.</p></div>' +
      '<div class="words arrows-lb" style="left:1000px;top:660px;width:720px;align-items:center;text-align:center">' +
      '<div class="tag no">Arrows point inward</div><p class="sub" style="margin-top:14px">The road ends here: turn back.</p></div>' +
      '</div>'));
    this.a = kit.stage.querySelector('.arrows-a');
    this.b = kit.stage.querySelector('.arrows-b');
    this.ch = [...kit.stage.querySelectorAll('.arrows-ch')];
    this.mid = kit.stage.querySelector('.arrows-mid');
    this.h = kit.stage.querySelector('.arrows-h');
    this.la = kit.stage.querySelector('.arrows-la').style;
    this.lb = kit.stage.querySelector('.arrows-lb').style;
  },
  render(t) {
    TextFx.fadeFromRight(this.h, t, -0.2);
    this.mid.setAttribute('stroke-dashoffset', (400 * (1 - eio(seg(t, 0.2, 1.2)))).toFixed(1));
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    const sa = eob(seg(t, 0.0, 0.9), 1.6), sb = eob(seg(t, 4.2, 5.1), 1.6);
    this.a.setAttribute('transform', 'translate(560 ' + (450 - t * 1.2).toFixed(1) + ') scale(' + (Math.max(0, sa) * br * 0.72).toFixed(4) + ')');
    this.b.setAttribute('transform', 'translate(1360 ' + (450 - t * 1.2).toFixed(1) + ') scale(' + (Math.max(0, sb) * br * 0.72).toFixed(4) + ')');
    for (let i = 0; i < 8; i++) {
      const t0 = (i < 4 ? 0.8 : 5.0) + (i % 4) * 0.2;
      const dir = [-1, -1, 1, 1, 1, 1, -1, -1][i];
      const p = eob(seg(t, t0, t0 + 0.8), 1.6);
      this.ch[i].style.opacity = Math.min(1, Math.max(0, p) * 2);
      this.ch[i].setAttribute('transform', 'translate(' + (dir * lerp(-60, 0, p)).toFixed(1) + ' 0)');
    }
    const la = eo(seg(t, 2.0, 3.0)), lb = eo(seg(t, 6.2, 7.2));
    this.la.opacity = la; this.la.transform = 'translateY(' + lerp(24, 0, la) + 'px)';
    this.lb.opacity = lb; this.lb.transform = 'translateY(' + lerp(24, 0, lb) + 'px)';
  },
});

},
  "boom": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('boom', {
  init(kit) {
    let st = '';
    for (let i = 0; i < 10; i++) st += '<rect class="boom-st ' + (i % 2 ? 'sw' : 'sr') + '" x="' + (i * 70) + '" y="-22" width="70" height="44"/>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<rect class="road" x="0" y="900" width="1920" height="180"/><line class="lane" x1="0" y1="990" x2="1920" y2="990"/>' +
      '<g class="boom-post"><rect class="post" x="400" y="560" width="40" height="345" rx="8"/></g>' +
      '<g class="boom-arm">' + st + '<rect class="edge" x="0" y="-22" width="700" height="44" rx="4"/></g>' +
      '<g class="boom-car"><rect x="-150" y="-46" width="150" height="76" rx="22" style="fill:var(--main)"/><rect x="-110" y="-36" width="58" height="30" rx="8" fill="#FFFFFF" opacity=".85"/><circle cx="-118" cy="32" r="16" class="sk"/><circle cx="-34" cy="32" r="16" class="sk"/></g>' +
      '</svg>' +
      '<div class="words" style="left:1220px;top:170px;width:600px">' +
      '<div class="tag boom-tag">Hazard marker</div>' +
      '<h2 class="line">Red and white stripes</h2>' +
      '<p class="sub boom-sub">A boom: go only when it is raised.</p>' +
      '</div></div>'));
    this.post = kit.stage.querySelector('.boom-post');
    this.arm = kit.stage.querySelector('.boom-arm');
    this.st = [...kit.stage.querySelectorAll('.boom-st')];
    this.car = kit.stage.querySelector('.boom-car');
    this.tag = kit.stage.querySelector('.boom-tag').style;
    this.sub = kit.stage.querySelector('.boom-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    const p = eo(seg(t, 0.0, 0.8));
    this.post.setAttribute('transform', 'translate(0 ' + lerp(360, 0, p).toFixed(1) + ')');
    for (let i = 0; i < 10; i++) {
      const s = eo(seg(t, 0.6 + i * 0.14, 1.4 + i * 0.14));
      this.st[i].style.opacity = s;
      this.st[i].setAttribute('transform', 'translate(' + lerp(-80, 0, s).toFixed(1) + ' 0)');
    }
    const up = eio(seg(t, 6.0, 8.0));
    this.arm.setAttribute('transform', 'translate(430 ' + '600' + ') rotate(' + (-80 * up).toFixed(2) + ')');
    let x = lerp(-200, 330, eo(seg(t, 3.0, 4.6)));
    x += lerp(0, 1900, ei(seg(t, 8.2, 10.6)));
    this.car.setAttribute('transform', 'translate(' + x.toFixed(1) + ' 950)');
    const tg = eo(seg(t, 1.8, 2.6));
    this.tag.opacity = tg;
    this.tag.transform = 'translateX(' + lerp(26, 0, tg) + 'px)';
    TextFx.fadeFromRight(this.line, t, 2.0);
    const sb = eo(seg(t, 3.2, 4.2));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
  },
});

},
  "end": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('end', {
  init(kit) {
    let ch = '';
    for (let i = 0; i < 3; i++) ch += '<path class="sym" stroke-width="20" d="' + SG.chev(-70 + i * 70, 0, 48) + '"/>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="end-s1">' + SG.warn('end-a', 140, '<g transform="translate(0 8)">' + SG.cross(40) + '</g>') + '</g>' +
      '<g class="end-s2">' + SG.warn('end-b', 140, '', true) + '</g>' +
      '<g class="end-s3"><rect class="shadow" x="-122" y="-62" width="260" height="150" rx="14"/><rect class="sw" x="-130" y="-75" width="260" height="150" rx="14"/>' +
      '<rect class="edge" x="-130" y="-75" width="260" height="150" rx="14"/>' + ch + '</g>' +
      '</svg>' +
      '<div class="words" style="left:180px;top:300px;width:900px">' +
      '<div class="kicker end-k">Session 5 · Learners Coach</div>' +
      '<div class="bar end-bar" style="transform-origin:left center"></div>' +
      '<h2 class="line end-h">Point up: danger ahead.</h2>' +
      '<p class="sub end-sub">Read the symbol, slow down and get ready. On a plate, follow the arrowhead.</p></div>' +
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
    const tt = Math.min(t, 4.6);
    const pos = [[1400, 300], [1640, 580], [1380, 840]];
    for (let i = 0; i < 3; i++) {
      const st = 0.6 + i * 0.35;
      const s = eob(seg(t, st, st + 0.6), 1.6);
      const br = 1 + 0.012 * Math.sin((tt + i * 0.9) * 2 * Math.PI / 3.2) * (1 - seg(t, 3.8, 4.6));
      const y = pos[i][1] + lerp(-40, 0, eo(seg(t, st, st + 0.6))) - tt * 1.2;
      this.s[i].setAttribute('transform', 'translate(' + pos[i][0] + ' ' + y.toFixed(1) + ') rotate(' + lerp(-14 + i * 10, 0, eo(seg(t, st, st + 0.8))).toFixed(2) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    }
  },
});

},
 },
 score: function (kit) {
kit.score(function (S, T) {
  const NB = 320, BPM = NB * 60 / (T.end - T.triangle), B = 60 / BPM;
  S.tempo(BPM, { t0: T.triangle });
  S.program('pad', 'pad', { rev: 0.6, gain: -4 });
  S.program('mallet', 'marimba', { rev: 0.3, pan: -0.15 });
  S.program('keys', 'ep', { rev: 0.35, pan: 0.15 });
  S.program('bass', 'bass', { gain: -3 });
  S.program('bell', 'glock', { rev: 0.5, gain: -6 });
  // Title: near silent, a pad and one bell note
  S.chord('pad', ['D3', 'A3', 'F#4'], { t: 0, dur: T.triangle + 0.4, vel: 30 });
  S.note('bell', 'A5', { t: 1.3, dur: 2.5, vel: 40 });
  S.fx('pop', 1.3, { vel: 40 });
  // Progression, one chord per 8 beats; every eighth block of 8 chords the groove drops to pad and mallet
  const prog = [['D3', 'A3', 'F#4'], ['B2', 'F#3', 'D4'], ['G2', 'D3', 'B3'], ['A2', 'E3', 'C#4']];
  const roots = ['D2', 'B1', 'G1', 'A1'];
  for (let i = 0; i < NB / 8; i++) {
    const c = prog[i % 4];
    const drop = i % 8 >= 6 || i === NB / 8 - 1;
    S.chord('pad', c, { beat: i * 8, beats: 8, vel: 34 });
    if (i >= 2 && !drop) { S.note('bass', roots[i % 4], { beat: i * 8, beats: 3, vel: 64 }); S.note('bass', roots[i % 4], { beat: i * 8 + 4, beats: 2, vel: 54 }); }
    if (i >= 4 && i % 2 === 0 && !drop) S.chord('keys', c.map(function (p) { return p.replace(/\d/, function (d) { return String(+d + 1); }); }), { beat: i * 8, beats: 6, vel: 40 });
    if (i >= 2 && !drop) S.drums({ shaker: 'oxoxoxox', sidestick: '....x...', kick: 'x.......' }, { from: i * 8, repeat: 2, vel: 46 });
  }
  // Calm marimba ostinato over the signs, ending one bar before the hit
  S.pattern('mallet', 'x.x.X..x', { from: 0, repeat: NB / 4 - 1, pitch: ['D5', 'A4', 'F#5', 'A4', 'E5'], vel: 50 });
  // Pops as each sign or card builds
  const pops = [['triangle', 0.5], ['updown', 0.1], ['updown', 2.4], ['trapup', 2.0], ['trapup', 6.6], ['control', 0.1], ['control', 1.5], ['control', 1.8], ['control', 2.1],
    ['hills', 1.0], ['hills', 3.6], ['hills', 6.2], ['traphill', 2.0], ['traphill', 6.6],
    ['surface', 1.2], ['surface', 2.5], ['surface', 3.8], ['surface', 5.1], ['surface', 6.4], ['surface', 7.7],
    ['bends', 0.1], ['bends', 1.2], ['bends', 3.9], ['bends', 6.6], ['traffic', 1.2], ['traffic', 3.1], ['traffic', 5.0], ['traffic', 6.9],
    ['junctions', 0.1], ['junctions', 1.3], ['junctions', 4.3], ['junctions', 7.3], ['hazards', 0.1], ['hazards', 0.8], ['hazards', 1.6],
    ['yellow', 0.1], ['yellow', 2.6], ['plate', 0.1], ['plate', 6.8], ['trapplate', 2.0], ['trapplate', 6.6], ['arrows', 0.1], ['arrows', 4.2], ['boom', 0.6]];
  pops.forEach(function (p) { S.fx('pop', T[p[0]] + p[1], { vel: 54 }); });
  [0, 1, 2, 3].forEach(function (i) { S.fx('pop', T.act + (3.2 + i * 0.35) * 1.3, { vel: 46 }); });
  [0, 1, 2, 3, 4].forEach(function (i) { S.fx('click', T.chevrons + (1.4 + i * 0.25) * 1.3, { vel: 40 }); });
  [T.trapup, T.traphill, T.trapplate].forEach(function (t0) { S.fx('click', t0 + 6.0, { vel: 44 }); S.fx('chime', t0 + 10.2, { vel: 44 }); });
  S.fx('click', T.updown + 5.8 * 1.3, { vel: 44 });
  S.fx('whoosh', T.plate + 3.8 * 1.3, { dur: 1.9, vel: 30 });
  S.fx('ding', T.plate + 5.3 * 1.3, { vel: 50 });
  S.fx('whoosh', T.chevrons + 4.6 * 1.3, { dur: 2.6, vel: 30 });
  S.fx('roll', T.boom + 6.0, { dur: 2.0, vel: 36 });
  S.fx('whoosh', T.boom + 8.4, { dur: 2.0, vel: 30 });
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