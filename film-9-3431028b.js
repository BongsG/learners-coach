(window.K53F = window.K53F || {})[9] = {
 title: "Session 9: Parking, stopping, lights and turning",
 scenes: [{"id": "title", "name": "Parking, stopping, lights and turning", "dur": 7}, {"id": "park", "name": "One-way road", "dur": 11}, {"id": "noparking", "name": "No parking", "dur": 15}, {"id": "noparklist1", "name": "Also no parking", "dur": 17}, {"id": "noparklist2", "name": "Not here either", "dur": 15}, {"id": "nostop", "name": "No stopping", "dur": 15}, {"id": "nostoplist", "name": "Where you may not stop", "dur": 17}, {"id": "ladder", "name": "The distance ladder", "dur": 13}, {"id": "muststop", "name": "You must stop", "dur": 10}, {"id": "lights", "name": "Headlights on", "dur": 12}, {"id": "lamps", "name": "Lamps on, lamps off", "dur": 10}, {"id": "beams", "name": "Main or dipped", "dur": 13}, {"id": "lamprules", "name": "Lamp rules", "dur": 15}, {"id": "signal", "name": "Signal, then turn", "dur": 10}, {"id": "turnright", "name": "Turning right", "dur": 15}, {"id": "traps1", "name": "Trap or remember 1", "dur": 13}, {"id": "traps2", "name": "Trap or remember 2", "dur": 16}, {"id": "end", "name": "Remember", "dur": 11}],
 css: "#stage { --ground:#F3F5F7; --main:#1F5F8B; --second:#18212B; --accent:#F5C400; --sign-red:#C8102E; --sign-blue:#0A4D94; color:var(--second); font-family:var(--sans, system-ui, sans-serif) }\n.ground { position:absolute; inset:0; background:var(--ground); background-image:linear-gradient(color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px), linear-gradient(90deg, color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px); background-size:80px 80px; background-position:-1px -1px }\n.words { position:absolute; margin:0; display:flex; flex-direction:column; gap:24px } .words > * { margin:0 }\n.line { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:96px; line-height:1.02; font-weight:700; letter-spacing:-0.01em } .sub { font-size:40px; line-height:1.3; color:color-mix(in srgb, var(--second) 78%, var(--ground)) }\n.kicker { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:30px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:var(--main); display:flex; align-items:center; gap:16px }\n.kicker::before { content:''; width:44px; height:8px; border-radius:4px; background:var(--accent) }\n.bar { height:10px; width:160px; border-radius:5px; background:var(--accent) }\n.art { position:absolute; inset:0; width:100%; height:100%; overflow:visible }\n.sr { fill:var(--sign-red) } .sb { fill:var(--sign-blue) } .sw { fill:#FFFFFF } .sk { fill:var(--second) }\n.edge { fill:none; stroke:color-mix(in srgb, var(--second) 18%, transparent); stroke-width:3 }\n.shadow { fill:rgba(0,0,0,.12) }\n.card { position:absolute; background:#FFFFFF; border:3px solid color-mix(in srgb, var(--main) 35%, var(--ground)); border-radius:28px; box-shadow:0 18px 40px -18px rgba(0,0,0,.25) }\n.tag { display:inline-flex; align-self:flex-start; padding:10px 22px; border-radius:999px; background:var(--main); color:#FFFFFF; font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:34px; font-weight:700 }\n.tag.no { background:var(--sign-red) }\n.road { fill:color-mix(in srgb, var(--second) 82%, var(--ground)) } .lane { stroke:#FFFFFF; stroke-width:8; stroke-dasharray:40 34; fill:none } .lane.solid { stroke-dasharray:none; stroke:var(--accent) }.kerb { fill:color-mix(in srgb, var(--second) 12%, var(--ground)) } .bayline { fill:none; stroke:#FFFFFF; stroke-width:8 }\n.dim { fill:none; stroke:var(--main); stroke-width:6; stroke-linecap:round; stroke-linejoin:round } .dim.no { stroke:var(--sign-red) } .dim.acc { stroke:var(--accent) }\n.dimt { font:700 52px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--main) } .dimt.no { fill:var(--sign-red) }\n.zone { fill:color-mix(in srgb, var(--sign-red) 38%, transparent); stroke:var(--sign-red); stroke-width:4; stroke-dasharray:14 10 } .beam { fill:color-mix(in srgb, var(--accent) 55%, transparent) }\n.water { fill:color-mix(in srgb, var(--sign-blue) 28%, var(--ground)) } .ind { fill:var(--accent) } .zebra { fill:#FFFFFF }\n",
 shared: function (kit) {
window.SG = {
  oct(cx, cy, r) { const p = []; for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + i * Math.PI / 4; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } return p.join(' '); },
  octWedge(cx, cy, r, i) { const a1 = Math.PI / 8 + i * Math.PI / 4, a2 = a1 + Math.PI / 4; return cx + ',' + cy + ' ' + (cx + r * Math.cos(a1)).toFixed(1) + ',' + (cy + r * Math.sin(a1)).toFixed(1) + ' ' + (cx + r * Math.cos(a2)).toFixed(1) + ',' + (cy + r * Math.sin(a2)).toFixed(1); },
  arrowUp(cx, cy, s) { return 'M' + cx + ' ' + (cy + s) + ' V' + (cy - s * 0.35) + ' M' + (cx - s * 0.55) + ' ' + (cy + s * 0.15) + ' L' + cx + ' ' + (cy - s) + ' L' + (cx + s * 0.55) + ' ' + (cy + s * 0.15); },
  wob(t, seed) { return Math.sin(t * 2.1 + seed) * 0.8 + Math.sin(t * 1.3 + seed * 2) * 0.5; },
  car(fill, ind) { let s = '<g><rect x="-50" y="-37" width="26" height="10" rx="4" class="sk"/><rect x="24" y="-37" width="26" height="10" rx="4" class="sk"/><rect x="-50" y="27" width="26" height="10" rx="4" class="sk"/><rect x="24" y="27" width="26" height="10" rx="4" class="sk"/>' + '<rect x="-62" y="-30" width="124" height="60" rx="16" style="fill:' + fill + '"/><rect x="8" y="-23" width="30" height="46" rx="7" fill="#FFFFFF" opacity=".85"/><rect x="-46" y="-21" width="18" height="42" rx="6" fill="#FFFFFF" opacity=".55"/>'; if (ind) s += '<rect class="ind ' + ind + '" x="50" y="20" width="14" height="12" rx="4"/><rect class="ind ' + ind + '" x="-64" y="20" width="14" height="12" rx="4"/>'; return s + '</g>'; },
  person() { return '<g><rect x="-22" y="-13" width="44" height="26" rx="13" class="sk"/><circle r="13" style="fill:var(--main)"/></g>'; },
  dim(cls, x1, y1, x2, y2, label, lx, ly, side, tone) { const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), nx = -dy / L * 18 * side, ny = dx / L * 18 * side, len = (L + 36).toFixed(1); const c = tone ? ' ' + tone : '', ct = tone === 'no' ? ' no' : ''; return '<g class="' + cls + '"><path class="dim' + c + '" d="M' + (x1 + nx) + ' ' + (y1 + ny) + ' L' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2 + ' L' + (x2 + nx) + ' ' + (y2 + ny) + '" stroke-dasharray="' + len + '" stroke-dashoffset="' + len + '"/><text class="dimt' + c + '" x="' + lx + '" y="' + ly + '" text-anchor="middle" opacity="0">' + label + '</text></g>'; },
  drawDim(g, p, q) { const path = g.firstChild, L = +path.getAttribute('stroke-dasharray'); path.setAttribute('stroke-dashoffset', (L * (1 - p)).toFixed(1)); g.lastChild.setAttribute('opacity', q.toFixed(3)); g.lastChild.style.transform = 'translateY(' + (16 * (1 - q)).toFixed(1) + 'px)'; },
  list(kit, id, o) {
    const mk = function (k, i) {
      const fill = k === 'no' ? 'var(--sign-red)' : k === 'ok' ? 'var(--sign-blue)' : 'var(--main)';
      let g;
      if (k === 'no') g = '<path d="M-10 -10 L10 10 M10 -10 L-10 10" fill="none" stroke-width="7" stroke-linecap="round" style="stroke:#FFFFFF"/>';
      else if (k === 'ok') g = '<path d="M-12 1 L-3 10 L13 -9" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" style="stroke:#FFFFFF"/>';
      else g = '<text y="11" text-anchor="middle" style="font:700 30px var(--display, var(--sans, system-ui, sans-serif)); fill:#FFFFFF">' + (i + 1) + '</text>';
      return '<svg width="60" height="60" viewBox="-30 -30 60 60" style="flex:none;overflow:visible"><g class="' + id + '-mk"><circle r="28" style="fill:' + fill + '"/>' + g + '</g></svg>';
    };
    let rows = '';
    o.rows.forEach(function (r, i) {
      rows += '<div class="' + id + '-row" style="display:flex;gap:26px;align-items:flex-start">' + mk(r[0], i) +
        '<p class="sub" style="margin:4px 0 0;font-size:' + (o.size || 38) + 'px;color:var(--second)">' + r[1] + '</p></div>';
    });
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:150px;top:70px;width:1620px">' +
      '<div class="tag ' + (o.cls || '') + ' ' + id + '-tag">' + o.tag + '</div>' +
      '<h2 class="line ' + id + '-h">' + o.title + '</h2></div>' +
      '<div class="' + id + '-list" style="position:absolute;left:150px;top:' + (o.top || 300) + 'px;width:1620px;display:flex;flex-direction:column;gap:' + (o.gap || 22) + 'px">' + rows + '</div></div>'));
    const tag = kit.stage.querySelector('.' + id + '-tag').style;
    const h = kit.stage.querySelector('.' + id + '-h');
    const list = kit.stage.querySelector('.' + id + '-list').style;
    const row = [...kit.stage.querySelectorAll('.' + id + '-row')].map(function (e) { return e.style; });
    const m = [...kit.stage.querySelectorAll('.' + id + '-mk')];
    const t0 = o.t0 || 1.0, step = o.step || 2.3;
    return {
      render(t) {
        const tg = kit.eo(kit.seg(t, -0.2, 0.6));
        tag.opacity = tg;
        tag.transform = 'translateX(' + kit.lerp(26, 0, tg) + 'px)';
        kit.TextFx.fadeFromRight(h, t, 0.1);
        list.transform = 'translateY(' + (-t * 1.2).toFixed(1) + 'px)';
        for (let i = 0; i < row.length; i++) {
          const a = t0 + i * step;
          const p = kit.eo(kit.seg(t, a, a + 1.0));
          row[i].opacity = p;
          row[i].transform = 'translateX(' + kit.lerp(40, 0, p).toFixed(1) + 'px)';
          const s = kit.eob(kit.seg(t, a, a + 0.7), 1.8) * (1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2 + i));
          m[i].setAttribute('transform', 'scale(' + Math.max(0, s).toFixed(4) + ')');
        }
      }
    };
  },
  traps(kit, id, items, o) {
    const ch = o.h || 230, gap = o.gap || 20, step = o.step || 4.0;
    let cards = '';
    items.forEach(function (it, i) {
      cards += '<div class="card ' + id + '-c" style="left:150px;top:' + (262 + i * (ch + gap)) + 'px;width:1620px;height:' + ch + 'px">' +
        '<div class="words" style="left:36px;top:22px;width:700px;gap:12px">' +
        '<div style="font:700 40px var(--display, var(--sans, system-ui, sans-serif));line-height:1.1;color:var(--second)">' + it[0] + '</div>' +
        '<div style="display:flex;gap:14px;align-items:center"><svg width="40" height="40" viewBox="-20 -20 40 40" style="flex:none;overflow:visible"><g class="' + id + '-x"><circle r="19" style="fill:var(--sign-red)"/><path d="M-7 -7 L7 7 M7 -7 L-7 7" fill="none" stroke-width="5" stroke-linecap="round" style="stroke:#FFFFFF"/></g></svg>' +
        '<p class="sub ' + id + '-trap" style="margin:0;font-size:32px;line-height:1.2;text-decoration-color:var(--sign-red);text-decoration-thickness:4px">Trap: ' + it[1] + '</p></div></div>' +
        '<div class="words ' + id + '-r" style="left:780px;top:22px;width:800px;gap:12px">' +
        '<p class="sub" style="margin:0;font-size:32px;line-height:1.25;color:var(--second)">' + it[2] + '</p>' +
        '<div class="tag ' + id + '-hook" style="background:var(--accent);color:var(--second);font-size:30px;padding:8px 20px">' + it[3] + '</div></div></div>';
    });
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:150px;top:50px;width:1620px">' +
      '<div class="tag no ' + id + '-tag">Trap or remember</div>' +
      '<h2 class="line ' + id + '-h">' + (o.title || 'Spot the trap') + '</h2></div>' + cards + '</div>'));
    const q = function (c) { return [...kit.stage.querySelectorAll('.' + id + '-' + c)]; };
    const tag = kit.stage.querySelector('.' + id + '-tag').style, h = kit.stage.querySelector('.' + id + '-h');
    const c = q('c').map(function (e) { return e.style; }), x = q('x'), trap = q('trap').map(function (e) { return e.style; });
    const r = q('r').map(function (e) { return e.style; }), hook = q('hook').map(function (e) { return e.style; });
    return {
      render(t) {
        const tg = kit.eo(kit.seg(t, -0.2, 0.6));
        tag.opacity = tg;
        tag.transform = 'translateX(' + kit.lerp(26, 0, tg) + 'px)';
        kit.TextFx.fadeFromRight(h, t, 0.1);
        for (let i = 0; i < c.length; i++) {
          const a = 1.0 + i * step;
          const p = kit.eo(kit.seg(t, a, a + 1.0));
          c[i].opacity = p;
          c[i].transform = 'translateY(' + kit.lerp(30, 0, p).toFixed(1) + 'px)';
          const s = kit.eob(kit.seg(t, a + 1.2, a + 1.8), 1.8);
          x[i].setAttribute('transform', 'scale(' + Math.max(0, s).toFixed(4) + ')');
          const struck = t >= a + 1.6;
          trap[i].textDecoration = struck ? 'line-through' : 'none';
          trap[i].opacity = struck ? 0.7 : 1;
          const rr = kit.eo(kit.seg(t, a + 1.8, a + 2.8));
          r[i].opacity = rr;
          r[i].transform = 'translateX(' + kit.lerp(26, 0, rr).toFixed(1) + 'px)';
          const hk = kit.eob(kit.seg(t, a + 2.8, a + 3.4), 1.8);
          hook[i].opacity = Math.min(1, Math.max(0, hk) * 1.5);
          hook[i].transform = 'scale(' + kit.lerp(0.7, 1, Math.min(1, Math.max(0, hk))).toFixed(4) + ')';
        }
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
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="title-map">' +
      '<rect class="road" x="1180" y="-40" width="420" height="1160"/>' +
      '<rect class="kerb" x="1600" y="-40" width="360" height="1160"/>' +
      '<line class="lane" x1="1390" y1="-40" x2="1390" y2="1120"/>' +
      '<path class="bayline title-bay" d="M1600 180 H1420 V700 H1600" stroke-dasharray="880" stroke-dashoffset="880"/><line class="bayline title-mid" x1="1420" y1="440" x2="1600" y2="440" stroke-dasharray="180" stroke-dashoffset="180"/>' +
      '<g class="title-car">' + SG.car('var(--main)') + '</g>' +
      '<g class="title-car2">' + SG.car('color-mix(in srgb, var(--main) 45%, var(--ground))') + '</g>' +
      '</g></svg>' +
      '<div class="words" style="left:150px;top:250px;width:960px">' +
      '<div class="kicker title-kick">Session 9 · Learners Coach</div>' +
      '<h1 class="line" style="font-size:112px">Parking, stopping, lights and turning</h1>' +
      '<p class="sub title-sub">The number-heavy part. Learn the distances as a ladder.</p>' +
      '</div></div>'));
    this.map = kit.stage.querySelector('.title-map');
    this.bay = kit.stage.querySelector('.title-bay');
    this.mid = kit.stage.querySelector('.title-mid');
    this.car = kit.stage.querySelector('.title-car');
    this.car2 = kit.stage.querySelector('.title-car2');
    this.kick = kit.stage.querySelector('.title-kick').style;
    this.sub = kit.stage.querySelector('.title-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.kick.opacity = eo(seg(t, -0.6, -0.1));
    TextFx.fadeFromRight(this.line, t, -0.5);
    const s = eo(seg(t, 0.8, 1.4));
    this.sub.opacity = s;
    this.sub.transform = 'translateX(' + lerp(26, 0, s) + 'px)';
    this.map.style.opacity = eo(seg(t, -0.6, 0.2));
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.map.setAttribute('transform', 'translate(1390 540) scale(' + br.toFixed(4) + ') translate(-1390 ' + (-540 - t * 1.4).toFixed(1) + ')');
    this.bay.setAttribute('stroke-dashoffset', (880 * (1 - eio(seg(t, 0.0, 1.2)))).toFixed(1));
    this.mid.setAttribute('stroke-dashoffset', (180 * (1 - eio(seg(t, 0.8, 1.3)))).toFixed(1));
    const p = eo(seg(t, 0.6, 2.6));
    const sw = eio(seg(t, 2.0, 2.9));
    const y = lerp(-170, 310, p);
    const x = lerp(1480, 1510, sw);
    const dip = -Math.sin(Math.PI * seg(t, 2.8, 3.2)) * 3;
    this.car.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + (y + dip).toFixed(1) + ') rotate(' + (90 - Math.sin(Math.PI * sw) * 8).toFixed(2) + ')');
    const c2 = eob(seg(t, 0.3, 0.9), 1.6);
    this.car2.setAttribute('transform', 'translate(1510 570) rotate(90) scale(' + Math.max(0, c2).toFixed(3) + ')');
  },
});

},
  "park": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('park', {
  init(kit) {
    let arrows = '';
    [260, 760, 1500].forEach(function (x) { arrows += '<path d="M' + (x - 70) + ' 700 H' + (x + 40) + ' M' + (x + 10) + ' 670 L' + (x + 50) + ' 700 L' + (x + 10) + ' 730" fill="none" stroke-width="14" stroke-linecap="round" stroke-linejoin="round" style="stroke:#FFFFFF;opacity:.8"/>'; });
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="park-map">' +
      '<rect class="kerb" x="0" y="470" width="1920" height="90"/><rect class="kerb" x="0" y="1000" width="1920" height="100"/>' +
      '<rect class="road" x="0" y="560" width="1920" height="440"/>' + arrows +
      '<g class="park-car"><g transform="scale(2.4)">' + SG.car('var(--main)') + '</g></g>' +
      '<line class="park-guide" x1="1140" y1="944" x2="1300" y2="944" stroke-width="4" stroke-dasharray="10 10" style="stroke:#FFFFFF"/>' +
      SG.dim('park-dim', 1300, 944, 1300, 1000, '450 mm', 1300, 1064, 1, 'acc') +
      '</g></svg>' +
      '<div class="words" style="left:120px;top:80px;width:1640px">' +
      '<div class="tag park-tag">Parking</div>' +
      '<h2 class="line">One-way road: right side is fine</h2>' +
      '<p class="sub park-sub">Park inside a marked bay, never on a sidewalk or verge. On a one-way road your right wheels may be no more than 450 mm into the roadway.</p>' +
      '</div></div>'));
    this.map = kit.stage.querySelector('.park-map');
    this.car = kit.stage.querySelector('.park-car');
    this.guide = kit.stage.querySelector('.park-guide').style;
    this.dim = kit.stage.querySelector('.park-dim');
    this.tag = kit.stage.querySelector('.park-tag').style;
    this.sub = kit.stage.querySelector('.park-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.tag.opacity = eo(seg(t, -0.2, 0.3));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, -0.2, 0.3))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 0.1);
    const s = eo(seg(t, 0.9, 1.5));
    this.sub.opacity = s;
    this.sub.transform = 'translateX(' + lerp(26, 0, s) + 'px)';
    this.map.style.opacity = eo(seg(t, -0.5, 0.3));
    this.map.setAttribute('transform', 'translate(0 ' + lerp(40, 0, eo(seg(t, -0.5, 0.5))).toFixed(1) + ')');
    const p = eo(seg(t, 0.5, 2.8));
    const sw = eio(seg(t, 2.2, 3.4));
    const x = lerp(-320, 1050, p);
    const y = lerp(720, 856, sw);
    const dip = Math.sin(Math.PI * seg(t, 3.3, 3.7)) * 3;
    this.car.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + (y + dip).toFixed(1) + ') rotate(' + (Math.sin(Math.PI * sw) * 6).toFixed(2) + ')');
    this.guide.opacity = eo(seg(t, 3.8, 4.2));
    SG.drawDim(this.dim, eio(seg(t, 4.0, 4.6)), Math.min(1, Math.max(0, eob(seg(t, 4.6, 5.1), 1.8))));
  },
});

},
  "noparking": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
const NP = [[408, 2.4], [712, 1.9], [1098, 1.4]];
kit.scene('noparking', {
  init(kit) {
    let cars = '', guides = '';
    NP.forEach(function () { cars += '<g class="noparking-car">' + SG.car('var(--main)') + '</g>'; });
    [470, 650, 1160, 1460].forEach(function (x) { guides += '<line x1="' + x + '" y1="526" x2="' + x + '" y2="606" stroke-width="4" stroke-dasharray="8 8" style="stroke:var(--main)"/>'; });
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="noparking-map">' +
      '<rect class="kerb" x="0" y="520" width="1460" height="80"/><rect class="kerb" x="1720" y="520" width="240" height="80"/>' +
      '<rect class="kerb" x="0" y="900" width="1920" height="180"/>' +
      '<rect class="road" x="0" y="600" width="1920" height="300"/><rect class="road" x="1460" y="440" width="260" height="170"/>' +
      '<line class="lane" x1="0" y1="750" x2="1920" y2="750"/>' +
      '<g class="noparking-hyd"><circle r="24" class="sr"/><circle r="10" class="sw"/></g>' + cars +
      '<g class="noparking-guides">' + guides + '</g>' +
      SG.dim('noparking-d1', 470, 506, 560, 506, '', 0, 0, 1, '') + SG.dim('noparking-d2', 560, 506, 650, 506, '1.5 m either side', 560, 474, 1, '') +
      SG.dim('noparking-d3', 1160, 506, 1460, 506, '5 m', 1310, 474, 1, '') +
      '<text class="noparking-lab" x="1590" y="430" text-anchor="middle" style="font:600 34px var(--sans, system-ui, sans-serif); fill:var(--main)">Intersection</text>' +
      '</g></svg>' +
      '<div class="words" style="left:120px;top:80px;width:1300px">' +
      '<div class="tag noparking-tag">No parking</div>' +
      '<h2 class="line">Keep your distance</h2>' +
      '<p class="sub noparking-sub">5 m from an intersection. 1.5 m from a fire hydrant, either side.</p>' +
      '</div></div>'));
    this.map = kit.stage.querySelector('.noparking-map');
    this.hyd = kit.stage.querySelector('.noparking-hyd');
    this.cars = [...kit.stage.querySelectorAll('.noparking-car')];
    this.guides = kit.stage.querySelector('.noparking-guides').style;
    this.d = [1, 2, 3].map(function (i) { return kit.stage.querySelector('.noparking-d' + i); });
    this.lab = kit.stage.querySelector('.noparking-lab').style;
    this.tag = kit.stage.querySelector('.noparking-tag').style;
    this.sub = kit.stage.querySelector('.noparking-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.tag.opacity = eo(seg(t, -0.2, 0.3));
    TextFx.fadeFromRight(this.line, t, 0.1);
    const s = eo(seg(t, 0.9, 1.5));
    this.sub.opacity = s;
    this.sub.transform = 'translateX(' + lerp(26, 0, s) + 'px)';
    this.map.style.opacity = eo(seg(t, -0.5, 0.3));
    const z = lerp(1, 1.03, eio(seg(t, 0, 11)));
    this.map.setAttribute('transform', 'translate(960 ' + (700 - t * 1.2).toFixed(1) + ') scale(' + z.toFixed(4) + ') translate(-960 -700)');
    this.lab.opacity = eo(seg(t, 0.4, 0.9));
    const h = eob(seg(t, 0.8, 1.3), 1.8);
    this.hyd.setAttribute('transform', 'translate(560 560) scale(' + Math.max(0, h).toFixed(3) + ')');
    for (let i = 0; i < 3; i++) {
      const p = eo(seg(t, NP[i][1], NP[i][1] + 1.4));
      const dip = Math.sin(Math.PI * seg(t, NP[i][1] + 1.3, NP[i][1] + 1.7)) * 3;
      this.cars[i].setAttribute('transform', 'translate(' + (lerp(-200, NP[i][0], p) + dip).toFixed(1) + ' 645)');
    }
    this.guides.opacity = 0.5 * eo(seg(t, 4.0, 4.4));
    SG.drawDim(this.d[0], eio(seg(t, 4.2, 4.8)), 0);
    SG.drawDim(this.d[1], eio(seg(t, 4.4, 5.0)), Math.min(1, Math.max(0, eob(seg(t, 5.0, 5.5), 1.8))));
    SG.drawDim(this.d[2], eio(seg(t, 6.0, 6.9)), Math.min(1, Math.max(0, eob(seg(t, 6.9, 7.4), 1.8))));
  },
});

},
  "noparklist1": function (kit) {
// List scene: each rule slides in one at a time and stays on screen.
const NOPARKLIST1_O = {"tag": "No parking", "cls": "no", "title": "Also no parking", "rows": [["no", "In any no-stopping area."], ["no", "In a bay reserved for another class of vehicle."], ["no", "Where you would hide a road sign."], ["no", "On a pavement."], ["no", "Across an entrance."], ["no", "Over a traffic light sensor."]]};
kit.scene('noparklist1', {
  init(kit) {
    this.L = SG.list(kit, 'noparklist1', NOPARKLIST1_O);
  },
  render(t) {
    this.L.render(t);
  },
});

},
  "noparklist2": function (kit) {
// List scene: each rule slides in one at a time and stays on screen.
const NOPARKLIST2_O = {"tag": "No parking", "cls": "no", "title": "And not here either", "rows": [["no", "More than 450 mm into the roadway."], ["no", "On an urban road narrower than 5.5 m, unless it is one-way."], ["no", "On a traffic island or in a pedestrian mall."], ["no", "Closer than 1 m to the road edge outside an urban area, unless you are in a marked bay."], ["no", "Illegally parked vehicles can be fined or impounded."]]};
kit.scene('noparklist2', {
  init(kit) {
    this.L = SG.list(kit, 'noparklist2', NOPARKLIST2_O);
  },
  render(t) {
    this.L.render(t);
  },
});

},
  "nostop": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('nostop', {
  init(kit) {
    let zebra = '';
    for (let y = 612; y < 900; y += 46) zebra += '<rect class="zebra" x="420" y="' + y + '" width="120" height="24" rx="3"/>';
    const lab = function (x, y, txt, col) { return '<text x="' + x + '" y="' + y + '" text-anchor="middle" style="font:600 34px var(--sans, system-ui, sans-serif); fill:var(' + col + ')">' + txt + '</text>'; };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="nostop-map">' +
      '<rect class="kerb" x="0" y="520" width="1300" height="80"/><rect class="kerb" x="0" y="900" width="1300" height="180"/>' +
      '<rect class="water" x="1300" y="440" width="660" height="160"/><rect class="water" x="1300" y="900" width="660" height="180"/>' +
      '<rect class="road" x="0" y="600" width="1960" height="300"/>' +
      '<rect class="sk" x="1300" y="586" width="660" height="14" rx="4"/><rect class="sk" x="1300" y="900" width="660" height="14" rx="4"/>' +
      '<line class="lane" x1="0" y1="750" x2="1960" y2="750"/>' + zebra +
      '<rect class="zone nostop-z1" x="24" y="604" width="396" height="292"/><rect class="zone nostop-z2" x="540" y="604" width="396" height="292"/>' +
      '<rect class="zone nostop-z3" x="1036" y="604" width="264" height="292"/>' +
      '<g class="nostop-ped">' + SG.person() + '</g>' +
      SG.dim('nostop-d1', 540, 940, 936, 940, '9 m', 738, 1012, -1, 'no') + SG.dim('nostop-d2', 1036, 940, 1300, 940, '6 m', 1168, 1012, -1, 'no') +
      lab(480, 1004, 'Crossing', '--main') + lab(1630, 1004, 'Bridge', '--sign-blue') +
      '</g></svg>' +
      '<div class="words" style="left:120px;top:80px;width:1150px">' +
      '<div class="tag no nostop-tag">No stopping</div>' +
      '<h2 class="line">Not even for a moment</h2>' +
      '<p class="sub nostop-sub">9 m from a pedestrian crossing. 6 m from a tunnel, subway, bridge or narrow road.</p>' +
      '</div></div>'));
    this.map = kit.stage.querySelector('.nostop-map');
    this.z = [1, 2, 3].map(function (i) { return kit.stage.querySelector('.nostop-z' + i).style; });
    this.d = [1, 2].map(function (i) { return kit.stage.querySelector('.nostop-d' + i); });
    this.ped = kit.stage.querySelector('.nostop-ped');
    this.zeb = [...kit.stage.querySelectorAll('.zebra')];
    this.tag = kit.stage.querySelector('.nostop-tag').style;
    this.sub = kit.stage.querySelector('.nostop-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.tag.opacity = eo(seg(t, -0.2, 0.3));
    TextFx.fadeFromRight(this.line, t, 0.1);
    const s = eo(seg(t, 0.9, 1.5));
    this.sub.opacity = s;
    this.sub.transform = 'translateX(' + lerp(26, 0, s) + 'px)';
    this.map.style.opacity = eo(seg(t, -0.5, 0.3));
    this.map.setAttribute('transform', 'translate(0 ' + (lerp(40, 0, eo(seg(t, -0.5, 0.5))) - t * 1.2).toFixed(1) + ')');
    for (let i = 0; i < this.zeb.length; i++) {
      const p = eo(seg(t, 0.6 + i * 0.1, 1.0 + i * 0.1));
      this.zeb[i].style.opacity = p;
      this.zeb[i].setAttribute('transform', 'translate(' + lerp(-40, 0, p).toFixed(1) + ' 0)');
    }
    const w = seg(t, 1.8, 6.2);
    this.ped.setAttribute('transform', 'translate(480 ' + lerp(560, 950, w).toFixed(1) + ') translate(' + (Math.sin(t * 7) * 2).toFixed(1) + ' 0)');
    this.ped.style.opacity = eo(seg(t, 1.6, 2.0)) * (1 - eo(seg(t, 6.0, 6.4)));
    const a = eo(seg(t, 3.4, 4.0)), b = eo(seg(t, 6.0, 6.6));
    this.z[0].opacity = a; this.z[1].opacity = a; this.z[2].opacity = b;
    SG.drawDim(this.d[0], eio(seg(t, 3.8, 4.6)), Math.min(1, Math.max(0, eob(seg(t, 4.6, 5.1), 1.8))));
    SG.drawDim(this.d[1], eio(seg(t, 6.3, 7.0)), Math.min(1, Math.max(0, eob(seg(t, 7.0, 7.5), 1.8))));
  },
});

},
  "nostoplist": function (kit) {
// List scene: each rule slides in one at a time and stays on screen.
const NOSTOPLIST_O = {"tag": "No stopping", "cls": "no", "title": "Where you may not stop", "size": 36, "step": 2.0, "gap": 18, "rows": [["info", "Do not stop on a road unless an officer or a sign tells you to, or to avoid an accident."], ["no", "In a tunnel, in a subway or on a bridge."], ["no", "On the right side of the road, facing oncoming traffic."], ["no", "Next to or opposite another vehicle where the road is 9 m wide."], ["no", "At a level crossing."], ["no", "On a painted island."], ["no", "On a freeway."]]};
kit.scene('nostoplist', {
  init(kit) {
    this.L = SG.list(kit, 'nostoplist', NOSTOPLIST_O);
  },
  render(t) {
    this.L.render(t);
  },
});

},
  "ladder": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
const LD = [[9, 'Pedestrian crossing', 1], [6, 'Tunnel, subway, bridge, narrow road', 1], [5, 'Intersection', 0], [1.5, 'Fire hydrant, either side', 0], [1, 'Road edge, outside town', 0]];
kit.scene('ladder', {
  init(kit) {
    let rows = '';
    LD.forEach(function (r, i) {
      const y = 290 + i * 116, w = r[0] * 90;
      rows += '<g class="ladder-row"><text x="320" y="' + (y + 22) + '" text-anchor="end" style="font:700 72px var(--display, var(--sans, system-ui, sans-serif)); fill:var(' + (r[2] ? '--sign-red' : '--main') + ')">' + r[0] + ' m</text>' +
        '<rect class="ladder-bar" x="350" y="' + (y - 30) + '" width="' + w + '" height="60" rx="14" style="fill:var(' + (r[2] ? '--sign-red' : '--main') + ')"/>' +
        '<text class="ladder-lab" x="1200" y="' + (y + 13) + '" style="font:600 38px var(--sans, system-ui, sans-serif); fill:var(--second)">' + r[1] + '</text></g>';
    });
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="ladder-all">' + rows + '</g></svg>' +
      '<div class="words" style="left:0;top:70px;width:1920px;text-align:center"><h2 class="line ladder-h">The distance ladder</h2></div>' +
      '<div class="words ladder-tags" style="left:0;top:850px;width:1920px;flex-direction:row;justify-content:center;gap:40px">' +
      '<div class="tag no">No stopping: 9 and 6</div><div class="tag">No parking: 5, 1.5 and 1</div></div>' +
      '<div class="words ladder-foot" style="left:0;top:960px;width:1920px;text-align:center"><p class="kicker" style="justify-content:center">Count down 9, 6, 5, 1.5, 1</p></div>' +
      '</div>'));
    this.all = kit.stage.querySelector('.ladder-all');
    this.rows = [...kit.stage.querySelectorAll('.ladder-row')];
    this.bars = [...kit.stage.querySelectorAll('.ladder-bar')];
    this.h = kit.stage.querySelector('.ladder-h');
    this.tags = kit.stage.querySelector('.ladder-tags').style;
    this.foot = kit.stage.querySelector('.ladder-foot').style;
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, -0.3);
    this.all.setAttribute('transform', 'translate(0 ' + (-t * 1.2).toFixed(1) + ')');
    for (let i = 0; i < 5; i++) {
      const st = 0.4 + i * 0.75;
      const r = eo(seg(t, st, st + 0.4));
      this.rows[i].style.opacity = r;
      this.rows[i].setAttribute('transform', 'translate(' + lerp(30, 0, r).toFixed(1) + ' 0)');
      const b = eob(seg(t, st + 0.1, st + 0.7), 1.6);
      this.bars[i].setAttribute('transform', 'translate(350 0) scale(' + Math.max(0, b).toFixed(4) + ' 1) translate(-350 0)');
    }
    const g = eo(seg(t, 4.6, 5.2));
    this.tags.opacity = g; this.tags.transform = 'translateY(' + lerp(24, 0, g) + 'px)';
    const f = eo(seg(t, 5.8, 6.5));
    this.foot.opacity = f; this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});

},
  "muststop": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('muststop', {
  init(kit) {
    let zebra = '';
    for (let y = 612; y < 900; y += 46) zebra += '<rect class="zebra muststop-zb" x="1200" y="' + y + '" width="120" height="24" rx="3"/>';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="muststop-map">' +
      '<rect class="kerb" x="0" y="520" width="1920" height="80"/><rect class="kerb" x="0" y="900" width="1920" height="180"/>' +
      '<rect class="road" x="0" y="600" width="1920" height="300"/>' +
      '<line class="lane" x1="0" y1="750" x2="1920" y2="750"/>' + zebra +
      '<rect class="muststop-line" x="1150" y="604" width="12" height="142" style="fill:#FFFFFF"/>' +
      '<g class="muststop-car">' + SG.car('var(--main)') + '</g>' +
      '<g class="muststop-ped">' + SG.person() + '</g>' +
      '<g class="muststop-badge"><circle r="40" style="fill:var(--accent)" stroke="#FFFFFF" stroke-width="5"/><rect x="-18" y="-18" width="36" height="36" rx="5" class="sk"/></g>' +
      '</g></svg>' +
      '<div class="words" style="left:120px;top:80px;width:1700px">' +
      '<div class="tag muststop-tag">Stopping</div>' +
      '<h2 class="line">You must stop</h2>' +
      '<p class="sub muststop-sub">When an officer, a sign, a traffic light or herded cattle tell you to. For pedestrians on a crossing on your side. If you are involved in an accident.</p>' +
      '</div></div>'));
    this.map = kit.stage.querySelector('.muststop-map');
    this.car = kit.stage.querySelector('.muststop-car');
    this.ped = kit.stage.querySelector('.muststop-ped');
    this.badge = kit.stage.querySelector('.muststop-badge');
    this.tag = kit.stage.querySelector('.muststop-tag').style;
    this.sub = kit.stage.querySelector('.muststop-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.tag.opacity = eo(seg(t, -0.2, 0.3));
    TextFx.fadeFromRight(this.line, t, 0.0);
    const s = eo(seg(t, 0.7, 1.3));
    this.sub.opacity = s;
    this.sub.transform = 'translateX(' + lerp(26, 0, s) + 'px)';
    this.map.style.opacity = eo(seg(t, -0.5, 0.3));
    this.map.setAttribute('transform', 'translate(0 ' + (lerp(40, 0, eo(seg(t, -0.5, 0.5))) - t * 1.3).toFixed(1) + ')');
    const p = eo(seg(t, 0.4, 2.4));
    const dip = Math.sin(Math.PI * seg(t, 2.3, 2.7)) * 3;
    this.car.setAttribute('transform', 'translate(' + (lerp(-200, 1084, p) + dip).toFixed(1) + ' 675)');
    const w = seg(t, 1.2, 6.6);
    this.ped.setAttribute('transform', 'translate(1260 ' + lerp(560, 930, w).toFixed(1) + ') translate(' + (Math.sin(t * 7) * 2).toFixed(1) + ' 0)');
    this.ped.style.opacity = eo(seg(t, 1.0, 1.4));
    const b = eob(seg(t, 2.5, 3.0), 1.8) * (1 - eo(seg(t, 6.2, 6.6)));
    this.badge.setAttribute('transform', 'translate(1084 590) scale(' + Math.max(0, b).toFixed(3) + ')');
  },
});

},
  "lights": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('lights', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="lights-map">' +
      '<rect class="kerb" x="0" y="520" width="1920" height="80"/><rect class="kerb" x="0" y="880" width="1920" height="200"/>' +
      '<rect class="road" x="0" y="600" width="1920" height="280"/>' +
      '<line class="lane" x1="0" y1="740" x2="1920" y2="740"/>' +
      '<polygon class="beam lights-beam" points="0,-24 0,24 1380,120 1380,-120"/>' +
      '<g class="lights-far"><g transform="translate(1700 812) rotate(180)">' + SG.car('var(--second)') + '</g>' +
      '<g transform="translate(1720 560)">' + SG.person() + '</g></g>' +
      '<g class="lights-car">' + SG.car('var(--main)') + '</g>' +
      SG.dim('lights-d', 322, 920, 1700, 920, '150 m', 1011, 994, -1, '') +
      '</g></svg>' +
      '<div class="words" style="left:120px;top:80px;width:1700px">' +
      '<div class="tag lights-tag">Lights</div>' +
      '<h2 class="line">Headlights on</h2>' +
      '<p class="sub lights-sub">From sunset to sunrise, and any time you cannot clearly see people or vehicles 150 m away.</p>' +
      '</div></div>'));
    this.map = kit.stage.querySelector('.lights-map');
    this.beam = kit.stage.querySelector('.lights-beam');
    this.far = kit.stage.querySelector('.lights-far').style;
    this.car = kit.stage.querySelector('.lights-car');
    this.d = kit.stage.querySelector('.lights-d');
    this.tag = kit.stage.querySelector('.lights-tag').style;
    this.sub = kit.stage.querySelector('.lights-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.tag.opacity = eo(seg(t, -0.2, 0.3));
    TextFx.fadeFromRight(this.line, t, 0.1);
    const s = eo(seg(t, 0.8, 1.4));
    this.sub.opacity = s;
    this.sub.transform = 'translateX(' + lerp(26, 0, s) + 'px)';
    this.map.style.opacity = eo(seg(t, -0.5, 0.3));
    this.map.setAttribute('transform', 'translate(0 ' + (lerp(40, 0, eo(seg(t, -0.5, 0.5))) - t * 1.2).toFixed(1) + ')');
    const c = eo(seg(t, 0.2, 1.4));
    const dip = Math.sin(Math.PI * seg(t, 1.3, 1.7)) * 3;
    this.car.setAttribute('transform', 'translate(' + (lerp(-200, 260, c) + dip).toFixed(1) + ' 670)');
    const b = eob(seg(t, 1.8, 2.8), 1.3);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.beam.setAttribute('transform', 'translate(322 670) scale(' + Math.max(0, b).toFixed(4) + ' ' + br.toFixed(4) + ')');
    this.beam.style.opacity = Math.min(1, Math.max(0, b) * 1.5);
    this.far.opacity = 0.25 + 0.75 * eo(seg(t, 2.6, 3.4));
    SG.drawDim(this.d, eio(seg(t, 3.6, 4.6)), Math.min(1, Math.max(0, eob(seg(t, 4.6, 5.1), 1.8))));
  },
});

},
  "lamps": function (kit) {
// List scene: each rule slides in one at a time and stays on screen.
const LAMPS_O = {"tag": "Lights", "title": "Lamps on, lamps off", "rows": [["info", "Headlights, rear lamps and number plate lamp: on from sunset to sunrise."], ["info", "Also on any time people or vehicles are not clearly visible at 150 m."], ["ok", "Parked? Lamps are not needed off the roadway, in a marked parking place, or within 12 m of a lit street lamp."]]};
kit.scene('lamps', {
  init(kit) {
    this.L = SG.list(kit, 'lamps', LAMPS_O);
  },
  render(t) {
    this.L.render(t);
  },
});

},
  "beams": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('beams', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="beams-all">' +
      '<rect class="road" x="0" y="310" width="1920" height="140"/><rect class="road" x="0" y="720" width="1920" height="140"/>' +
      '<polygon class="beam beams-b1" points="0,-22 0,22 1300,100 1300,-100"/>' +
      '<polygon class="beam beams-b2" points="0,-22 0,22 585,60 585,-60"/>' +
      '<g class="beams-c1">' + SG.car('var(--main)') + '</g><g class="beams-c2">' + SG.car('var(--main)') + '</g>' +
      SG.dim('beams-d1', 262, 520, 1562, 520, '100 m', 912, 592, -1, '') +
      SG.dim('beams-d2', 262, 912, 847, 912, '45 m', 554, 984, -1, '') +
      '</g></svg>' +
      '<div class="words" style="left:0;top:40px;width:1920px;text-align:center;align-items:center">' +
      '<h2 class="line beams-h">Main 100, dip 45</h2>' +
      '<p class="sub beams-s">Dip your lights for oncoming traffic or when following another vehicle.</p></div>' +
      '<div class="words beams-t1" style="left:140px;top:226px"><div class="tag">Main beam (bright)</div></div>' +
      '<div class="words beams-t2" style="left:140px;top:636px"><div class="tag">Dipped beam</div></div>' +
      '</div>'));
    this.all = kit.stage.querySelector('.beams-all');
    this.b = [1, 2].map(function (i) { return kit.stage.querySelector('.beams-b' + i); });
    this.c = [1, 2].map(function (i) { return kit.stage.querySelector('.beams-c' + i); });
    this.d = [1, 2].map(function (i) { return kit.stage.querySelector('.beams-d' + i); });
    this.t = [1, 2].map(function (i) { return kit.stage.querySelector('.beams-t' + i).style; });
    this.h = kit.stage.querySelector('.beams-h');
    this.s = kit.stage.querySelector('.beams-s').style;
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, -0.3);
    const sv = eo(seg(t, 0.5, 1.1));
    this.s.opacity = sv; this.s.transform = 'translateX(' + lerp(26, 0, sv) + 'px)';
    this.all.style.opacity = eo(seg(t, -0.5, 0.3));
    this.all.setAttribute('transform', 'translate(0 ' + (-t * 1.2).toFixed(1) + ')');
    const ys = [380, 790], st = [0.8, 4.4];
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    for (let i = 0; i < 2; i++) {
      const a = st[i];
      const c = eo(seg(t, a - 0.6, a + 0.4));
      this.c[i].setAttribute('transform', 'translate(' + lerp(-200, 200, c).toFixed(1) + ' ' + ys[i] + ')');
      const tg = eo(seg(t, a, a + 0.5));
      this.t[i].opacity = tg; this.t[i].transform = 'translateX(' + lerp(26, 0, tg) + 'px)';
      const b = eob(seg(t, a + 0.6, a + 1.6), 1.3);
      this.b[i].setAttribute('transform', 'translate(262 ' + ys[i] + ') scale(' + Math.max(0, b).toFixed(4) + ' ' + br.toFixed(4) + ')');
      this.b[i].style.opacity = Math.min(1, Math.max(0, b) * 1.5);
      SG.drawDim(this.d[i], eio(seg(t, a + 1.7, a + 2.6)), Math.min(1, Math.max(0, eob(seg(t, a + 2.6, a + 3.1), 1.8))));
    }
  },
});

},
  "lamprules": function (kit) {
// List scene: each rule slides in one at a time and stays on screen.
const LAMPRULES_O = {"tag": "Lights", "title": "Lamp rules", "rows": [["no", "Never drive with only your parking lamps on."], ["info", "Stop lamps must be visible at 30 m in sunlight."], ["info", "Your number plate must be readable at 20 m."], ["info", "Fog lamps only in snow, fog, mist, dust or smoke."], ["no", "Spot lamps that can be aimed in any direction are not allowed."]]};
kit.scene('lamprules', {
  init(kit) {
    this.L = SG.list(kit, 'lamprules', LAMPRULES_O);
  },
  render(t) {
    this.L.render(t);
  },
});

},
  "signal": function (kit) {
// List scene: each rule slides in one at a time and stays on screen.
const SIGNAL_O = {"tag": "Signalling and turning", "title": "Signal, then turn", "rows": [["info", "Always signal before you change direction, slow down or stop."], ["info", "Turning left: signal in good time, keep as far left as possible, then merge smoothly into the traffic."], ["info", "Turning right: also pass to the left of any traffic island or officer in the middle."]]};
kit.scene('signal', {
  init(kit) {
    this.L = SG.list(kit, 'signal', SIGNAL_O);
  },
  render(t) {
    this.L.render(t);
  },
});

},
  "turnright": function (kit) {
const { seg, eo, ei, eio, eob, lerp, TextFx } = kit;
kit.scene('turnright', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="turnright-map">' +
      '<rect class="road" x="760" y="450" width="1200" height="220"/>' +
      '<rect class="road" x="1190" y="-20" width="220" height="1120"/>' +
      '<line class="lane" x1="760" y1="560" x2="1180" y2="560"/><line class="lane" x1="1420" y1="560" x2="1960" y2="560"/>' +
      '<line class="lane" x1="1300" y1="0" x2="1300" y2="440"/><line class="lane" x1="1300" y1="680" x2="1300" y2="1080"/>' +
      '<path class="turnright-path" d="M1120 520 A235 235 0 0 1 1355 755 V1060" fill="none" stroke-width="6" stroke-linecap="round" style="stroke:var(--accent)" stroke-dasharray="680" stroke-dashoffset="680"/>' +
      '<g class="turnright-onc"><g transform="rotate(180)">' + SG.car('var(--second)') + '</g></g>' +
      '<g class="turnright-car">' + SG.car('var(--main)', 'turnright-ind') + '</g>' +
      '<g class="turnright-gw"><rect x="-104" y="-34" width="208" height="68" rx="34" style="fill:var(--accent)" stroke="#FFFFFF" stroke-width="5"/>' +
      '<text y="12" text-anchor="middle" style="font:700 36px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)">Give way</text></g>' +
      '</g></svg>' +
      '<div class="words" style="left:110px;top:130px;width:620px">' +
      '<div class="tag turnright-tag">Turning</div>' +
      '<h2 class="line">Right turn waits</h2>' +
      '<p class="sub turnright-sub">Signal in good time and keep as far right as you can on your side. Give way to oncoming traffic, then turn into the left side of the new road.</p>' +
      '</div></div>'));
    this.map = kit.stage.querySelector('.turnright-map');
    this.path = kit.stage.querySelector('.turnright-path');
    this.onc = kit.stage.querySelector('.turnright-onc');
    this.car = kit.stage.querySelector('.turnright-car');
    this.ind = [...kit.stage.querySelectorAll('.turnright-ind')];
    this.gw = kit.stage.querySelector('.turnright-gw');
    this.tag = kit.stage.querySelector('.turnright-tag').style;
    this.sub = kit.stage.querySelector('.turnright-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.tag.opacity = eo(seg(t, -0.2, 0.3));
    TextFx.fadeFromRight(this.line, t, 0.1);
    const s = eo(seg(t, 0.9, 1.5));
    this.sub.opacity = s;
    this.sub.transform = 'translateX(' + lerp(26, 0, s) + 'px)';
    this.map.style.opacity = eo(seg(t, -0.5, 0.3));
    const z = lerp(1, 1.04, eio(seg(t, 0, 11)));
    this.map.setAttribute('transform', 'translate(1300 560) scale(' + z.toFixed(4) + ') translate(-1300 ' + (-560 - t * 1.2).toFixed(1) + ')');
    let x, y, a = 0;
    const cin = eob(seg(t, 0.0, 0.6), 1.6);
    const drive = eo(seg(t, 0.6, 2.6));
    const turn = eio(seg(t, 5.8, 7.6));
    if (t < 5.8) { x = lerp(840, 1120, drive); y = 520; }
    else if (t < 7.6) { const th = -Math.PI / 2 + turn * Math.PI / 2; x = 1120 + 235 * Math.cos(th); y = 755 + 235 * Math.sin(th); a = turn * 90; }
    else { x = 1355; y = 755 + 480 * ei(seg(t, 7.6, 9.4)); a = 90; }
    this.car.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ') rotate(' + a.toFixed(2) + ') scale(' + Math.max(0, cin).toFixed(3) + ')');
    const on = t > 0.8 && t < 7.4 && Math.floor(t / 0.4) % 2 === 0 ? 1 : 0;
    for (let i = 0; i < this.ind.length; i++) this.ind[i].style.opacity = on;
    this.path.setAttribute('stroke-dashoffset', (680 * (1 - eio(seg(t, 1.4, 2.6)))).toFixed(1));
    this.path.style.opacity = 0.7 * (1 - eo(seg(t, 7.6, 8.4)));
    const o = seg(t, 2.6, 5.4);
    this.onc.setAttribute('transform', 'translate(' + lerp(2060, 700, o).toFixed(1) + ' 600)');
    this.onc.style.opacity = 1 - eo(seg(t, 5.0, 5.4));
    const g = eob(seg(t, 2.8, 3.3), 1.8) * (1 - eo(seg(t, 5.4, 5.8)));
    this.gw.setAttribute('transform', 'translate(1060 420) scale(' + Math.max(0, g).toFixed(3) + ')');
  },
});

},
  "traps1": function (kit) {
// Trap or remember: the trap is crossed out, the simple answer slides in, then the hook in yellow.
const TRAPS1_I = [["How far from an intersection, hydrant or pedestrian crossing?", "All the distances sound similar and the options swap them around.", "No stopping: 9 m from a pedestrian crossing, 6 m from a tunnel, subway, bridge or narrow road. No parking: 5 m from an intersection, 1.5 m from a fire hydrant, 1 m from the road edge out of town.", "Count down 9, 6, 5, 1.5, 1. The 9 and 6 are no-stopping, the rest no-parking."], ["When must your headlights be on?", "Choosing ‘only at night’.", "From sunset to sunrise AND any time you cannot clearly see people or vehicles 150 m away (rain, mist, dust).", "Dark, or can’t see 150."]];
kit.scene('traps1', {
  init(kit) {
    this.T = SG.traps(kit, 'traps1', TRAPS1_I, {"h": 360, "gap": 24, "step": 5.0});
  },
  render(t) {
    this.T.render(t);
  },
});

},
  "traps2": function (kit) {
// Trap or remember: the trap is crossed out, the simple answer slides in, then the hook in yellow.
const TRAPS2_I = [["How far must main and dipped beams reach?", "Swapping 100 m and 45 m.", "Bright main beam: 100 m. Dipped beam: 45 m.", "Main = 100, dip = 45 (dipped is the smaller number)."], ["When turning right, who gives way?", "Thinking you have priority because you signalled first.", "You give way to oncoming traffic before turning right.", "Right turn waits."], ["Parked on the right side of a one-way street: how close to the kerb?", "Choosing a metre-based figure.", "Your right wheels may be no more than 450 mm from the edge.", "Under half a metre: 450 mm."]];
kit.scene('traps2', {
  init(kit) {
    this.T = SG.traps(kit, 'traps2', TRAPS2_I, {"h": 230, "gap": 20, "step": 4.0});
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
    let bars = '';
    [[9, 1], [6, 1], [5, 0], [1.5, 0], [1, 0]].forEach(function (r, i) {
      const y = i * 110, col = r[1] ? '--sign-red' : '--main';
      bars += '<g class="end-row"><text x="-24" y="' + (y + 20) + '" text-anchor="end" style="font:700 58px var(--display, var(--sans, system-ui, sans-serif)); fill:var(' + col + ')">' + r[0] + '</text>' +
        '<rect class="end-b" x="0" y="' + (y - 26) + '" width="' + r[0] * 52 + '" height="52" rx="12" style="fill:var(' + col + ')"/></g>';
    });
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080"><g class="end-lad">' + bars + '</g></svg>' +
      '<div class="words" style="left:180px;top:280px;width:900px">' +
      '<div class="kicker end-k">Session 9 · Learners Coach</div>' +
      '<div class="bar end-bar" style="transform-origin:left center"></div>' +
      '<h2 class="line end-h">Count down 9, 6, 5, 1.5, 1.</h2>' +
      '<p class="sub end-sub">Main 100, dip 45. Lights on when it is dark or you cannot see 150 m. Right turn waits.</p></div>' +
      '</div>'));
    this.lad = kit.stage.querySelector('.end-lad');
    this.rows = [...kit.stage.querySelectorAll('.end-row')];
    this.bars = [...kit.stage.querySelectorAll('.end-b')];
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
    const tc = Math.min(t, 4.5);
    const br = 1 + 0.012 * Math.sin(tc * 2 * Math.PI / 3.2);
    this.lad.setAttribute('transform', 'translate(1300 ' + (330 - tc * 1.2).toFixed(1) + ') scale(' + br.toFixed(4) + ')');
    for (let i = 0; i < 5; i++) {
      const st = 0.6 + i * 0.3;
      const r = eo(seg(t, st, st + 0.4));
      this.rows[i].style.opacity = r;
      const b = eob(seg(t, st, st + 0.6), 1.6);
      this.bars[i].setAttribute('transform', 'scale(' + Math.max(0, b).toFixed(4) + ' 1)');
    }
  },
});

},
 },
 score: function (kit) {
kit.score(function (S, T) {
  // 300 beats from the second scene to the end card: 37 chords of 8 beats, then 4 beats of stop-time
  const BPM = 300 * 60 / (T.end - T.park), B = 60 / BPM;
  S.tempo(BPM, { t0: T.park });
  S.program('pad', 'pad', { rev: 0.6, gain: -4 });
  S.program('mallet', 'marimba', { rev: 0.3, pan: -0.15 });
  S.program('keys', 'ep', { rev: 0.35, pan: 0.15 });
  S.program('bass', 'bass', { gain: -3 });
  S.program('bell', 'glock', { rev: 0.5, gain: -6 });
  // Existing scenes play 1.3 times slower: their cue times scale with them
  const at = function (id, x) { return T[id] + x * 1.3; };
  // Title: near silent, a pad and one bell note
  S.chord('pad', ['D3', 'A3', 'F#4'], { t: 0, dur: T.park + 0.4, vel: 30 });
  S.note('bell', 'A5', { t: 1.3, dur: 2.5, vel: 40 });
  S.fx('pop', at('title', 0.3), { vel: 40 });
  S.fx('pop', at('title', 3.0), { vel: 44 });
  // Progression, one chord per 8 beats; every fourth 32-beat block drops to pad and mallet only
  const prog = [['D3', 'A3', 'F#4'], ['B2', 'F#3', 'D4'], ['G2', 'D3', 'B3'], ['A2', 'E3', 'C#4']];
  const roots = ['D2', 'B1', 'G1', 'A1'];
  const drop = function (beat) { return Math.floor(beat / 32) % 4 === 2; };
  for (let i = 0; i < 37; i++) {
    const c = prog[i % 4], b = i * 8;
    S.chord('pad', c, { beat: b, beats: 8, vel: 34 });
    if (drop(b)) continue;
    if (i >= 2) { S.note('bass', roots[i % 4], { beat: b, beats: 3, vel: 64 }); S.note('bass', roots[i % 4], { beat: b + 4, beats: 2, vel: 54 }); }
    if (i >= 4 && i % 2 === 0) S.chord('keys', c.map(function (p) { return p.replace(/\d/, function (d) { return String(+d + 1); }); }), { beat: b, beats: 6, vel: 40 });
  }
  // Calm marimba ostinato under the whole film (74 x 4 beats = 296)
  S.pattern('mallet', 'x.x.X..x', { from: 0, repeat: 74, pitch: ['D5', 'A4', 'F#5', 'A4', 'E5'], vel: 50 });
  // Light pulse in 32-beat blocks from beat 16, resting in the drop blocks, ending by beat 296
  for (let b = 16; b < 296; b = (b === 16 ? 32 : b + 32)) {
    if (drop(b)) continue;
    const reps = b === 16 ? 4 : Math.min(8, (296 - b) / 4);
    S.drums({ shaker: 'oxoxoxox', sidestick: '....x...', kick: 'x.......' }, { from: b, repeat: reps, vel: 46 });
  }
  // Pops as each mark, sign or bar builds (original cue times, slowed)
  [['park', 3.4], ['noparking', 0.8], ['nostop', 0.6], ['nostop', 3.4], ['ladder', 0.5], ['ladder', 1.25], ['ladder', 2.0], ['ladder', 2.75], ['ladder', 3.5], ['muststop', 2.5], ['lights', 1.8], ['beams', 1.4], ['beams', 5.0], ['turnright', 0.0], ['turnright', 2.8]].forEach(function (p) { S.fx('pop', at(p[0], p[1]), { vel: 56 }); });
  // Soft dings as each measured gap gets its number
  [['park', 4.6], ['noparking', 5.0], ['noparking', 6.9], ['nostop', 4.6], ['nostop', 7.0], ['lights', 4.6], ['beams', 3.4], ['beams', 7.0]].forEach(function (p) { S.fx('ding', at(p[0], p[1]), { vel: 40 }); });
  // Pops as each rule in a list slides in
  [['noparklist1', 6, 2.3], ['noparklist2', 5, 2.3], ['nostoplist', 7, 2.0], ['lamps', 3, 2.3], ['lamprules', 5, 2.3], ['signal', 3, 2.3]].forEach(function (l) {
    for (let i = 0; i < l[1]; i++) S.fx('pop', T[l[0]] + 1.05 + i * l[2], { vel: 52 });
  });
  // Traps: a click as the trap is struck out, a ding as the hook lands
  [['traps1', 2, 5.0], ['traps2', 3, 4.0]].forEach(function (l) {
    for (let i = 0; i < l[1]; i++) {
      const a = T[l[0]] + 1.0 + i * l[2];
      S.fx('click', a + 1.6, { vel: 42 });
      S.fx('ding', a + 2.9, { vel: 44 });
    }
  });
  // Indicator ticks while signalling (one per blink), an oncoming car passes
  for (let k = 1; k <= 9; k++) S.fx('tick', at('turnright', 0.8 * k), { vel: 28 });
  S.fx('whoosh', at('turnright', 3.0), { dur: 2.4, vel: 30 });
  S.fx('click', at('ladder', 4.6), { vel: 44 });
  // Stop-time, then the hit on the end card
  S.fx('revswell', T.end, { dur: 1.4, vel: 60 });
  S.run('mallet', ['D5', 'E5', 'F#5', 'A5', 'B5', 'D6'], { t: T.end - 0.6, step: 0.1, vel: 50, cresc: 8 });
  S.chord('keys', ['D4', 'F#4', 'A4', 'D5'], { t: T.end, dur: T.END - T.end, vel: 72 });
  S.chord('pad', ['D3', 'A3', 'D4', 'F#4'], { t: T.end, dur: T.END - T.end, vel: 48 });
  S.note('bass', 'D2', { t: T.end, dur: 3, vel: 84 });
  S.drum('kick', { t: T.end, vel: 96 });
  S.drum('crash', { t: T.end, vel: 60 });
  [0.6, 0.9, 1.2, 1.5, 1.8].forEach(function (d) { S.fx('pop', at('end', d), { vel: 48 }); });
  S.note('bell', 'F#5', { t: T.end + 3.1, dur: 3, vel: 40 });
  S.master({ gain: -6, fadeOut: 2.0 });
});

}
};