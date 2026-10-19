(window.K53F = window.K53F || {})[10] = {
 title: "Session 10: Freeways, towing, loads and duties",
 scenes: [{"id": "title", "name": "Freeways, towing, loads", "dur": 7}, {"id": "fwrules", "name": "Freeway rules", "dur": 16}, {"id": "freeway", "name": "Learners on a freeway", "dur": 12}, {"id": "duties", "name": "Hooter and duties", "dur": 16}, {"id": "duties2", "name": "More duties", "dur": 16}, {"id": "belts", "name": "Buckle up", "dur": 16}, {"id": "tow", "name": "Towing gap", "dur": 13}, {"id": "rope", "name": "30 km/h on a rope", "dur": 10}, {"id": "loads", "name": "Load limits", "dur": 13}, {"id": "loadmore", "name": "Towing and load extras", "dur": 18}, {"id": "moto", "name": "Motorcycle rules", "dur": 18}, {"id": "roadside", "name": "Animals, tyres and more", "dur": 18}, {"id": "triangle", "name": "Warning triangle", "dur": 11}, {"id": "emergency", "name": "Emergency lights", "dur": 12}, {"id": "disc", "name": "Licence disc", "dur": 10}, {"id": "accident", "name": "Report an accident", "dur": 11}, {"id": "aftermath", "name": "Accident duties", "dur": 11}, {"id": "alcohol", "name": "Alcohol limits", "dur": 12}, {"id": "traps1", "name": "Spot the trap 1", "dur": 16}, {"id": "traps2", "name": "Spot the trap 2", "dur": 16}, {"id": "end", "name": "Remember", "dur": 11}],
 css: "#stage { --ground:#F3F5F7; --main:#1F5F8B; --second:#18212B; --accent:#F5C400; --sign-red:#C8102E; --sign-blue:#0A4D94; color:var(--second); font-family:var(--sans, system-ui, sans-serif) }\n.ground { position:absolute; inset:0; background:var(--ground); background-image:linear-gradient(color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px), linear-gradient(90deg, color-mix(in srgb, var(--second) 5%, transparent) 2px, transparent 2px); background-size:80px 80px; background-position:-1px -1px }\n.words { position:absolute; margin:0; display:flex; flex-direction:column; gap:24px } .words > * { margin:0 }\n.line { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:96px; line-height:1.02; font-weight:700; letter-spacing:-0.01em } .sub { font-size:40px; line-height:1.3; color:color-mix(in srgb, var(--second) 78%, var(--ground)) }\n.kicker { font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:30px; font-weight:600; letter-spacing:.14em; text-transform:uppercase; color:var(--main); display:flex; align-items:center; gap:16px }\n.kicker::before { content:''; width:44px; height:8px; border-radius:4px; background:var(--accent) }\n.bar { height:10px; width:160px; border-radius:5px; background:var(--accent) }\n.art { position:absolute; inset:0; width:100%; height:100%; overflow:visible }\n.sr { fill:var(--sign-red) } .sb { fill:var(--sign-blue) } .sw { fill:#FFFFFF } .sk { fill:var(--second) }\n.edge { fill:none; stroke:color-mix(in srgb, var(--second) 18%, transparent); stroke-width:3 }\n.shadow { fill:rgba(0,0,0,.12) }\n.card { position:absolute; background:#FFFFFF; border:3px solid color-mix(in srgb, var(--main) 35%, var(--ground)); border-radius:28px; box-shadow:0 18px 40px -18px rgba(0,0,0,.25) }\n.tag { display:inline-flex; align-self:flex-start; padding:10px 22px; border-radius:999px; background:var(--main); color:#FFFFFF; font-family:var(--display, var(--sans, system-ui, sans-serif)); font-size:34px; font-weight:700 }\n.tag.no { background:var(--sign-red) }\n.road { fill:color-mix(in srgb, var(--second) 82%, var(--ground)) } .lane { stroke:#FFFFFF; stroke-width:8; stroke-dasharray:40 34; fill:none } .lane.solid { stroke-dasharray:none; stroke:var(--accent) }\n.sy { fill:var(--accent) } .lg { fill:#1E8A4C } .tag.go { background:#1E8A4C } .tag.blue { background:var(--sign-blue) }\n.meas { fill:none; stroke:var(--main); stroke-width:6; stroke-linecap:round; stroke-linejoin:round } .mtxt { font:700 52px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--main) }\n",
 shared: function (kit) {
window.SG = {
  oct(cx, cy, r) { const p = []; for (let i = 0; i < 8; i++) { const a = Math.PI / 8 + i * Math.PI / 4; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } return p.join(' '); },
  octWedge(cx, cy, r, i) { const a1 = Math.PI / 8 + i * Math.PI / 4, a2 = a1 + Math.PI / 4; return cx + ',' + cy + ' ' + (cx + r * Math.cos(a1)).toFixed(1) + ',' + (cy + r * Math.sin(a1)).toFixed(1) + ' ' + (cx + r * Math.cos(a2)).toFixed(1) + ',' + (cy + r * Math.sin(a2)).toFixed(1); },
  arrowUp(cx, cy, s) { return 'M' + cx + ' ' + (cy + s) + ' V' + (cy - s * 0.35) + ' M' + (cx - s * 0.55) + ' ' + (cy + s * 0.15) + ' L' + cx + ' ' + (cy - s) + ' L' + (cx + s * 0.55) + ' ' + (cy + s * 0.15); },
  wob(t, seed) { return Math.sin(t * 2.1 + seed) * 0.8 + Math.sin(t * 1.3 + seed * 2) * 0.5; },
  tri(cx, cy, r) { const p = []; for (let i = 0; i < 3; i++) { const a = -Math.PI / 2 + i * 2 * Math.PI / 3; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } return p.join(' '); },
  car(fill, w) {
    const h = w * 0.28, f = 'style="fill:' + fill + '"';
    return '<rect x="' + (-w * 0.3).toFixed(1) + '" y="' + (-h * 1.25).toFixed(1) + '" width="' + (w * 0.52).toFixed(1) + '" height="' + (h * 0.95).toFixed(1) + '" rx="' + (h * 0.35).toFixed(1) + '" ' + f + '/>' +
      '<rect x="' + (-w * 0.26).toFixed(1) + '" y="' + (-h * 1.1).toFixed(1) + '" width="' + (w * 0.44).toFixed(1) + '" height="' + (h * 0.55).toFixed(1) + '" rx="' + (h * 0.2).toFixed(1) + '" fill="#FFFFFF" opacity=".85"/>' +
      '<rect x="' + (-w / 2).toFixed(1) + '" y="' + (-h / 2).toFixed(1) + '" width="' + w + '" height="' + h.toFixed(1) + '" rx="' + (h * 0.4).toFixed(1) + '" ' + f + '/>' +
      '<circle class="sk" cx="' + (-w * 0.3).toFixed(1) + '" cy="' + (h / 2).toFixed(1) + '" r="' + (w * 0.085).toFixed(1) + '"/><circle class="sk" cx="' + (w * 0.3).toFixed(1) + '" cy="' + (h / 2).toFixed(1) + '" r="' + (w * 0.085).toFixed(1) + '"/>' +
      '<circle class="sw" cx="' + (-w * 0.3).toFixed(1) + '" cy="' + (h / 2).toFixed(1) + '" r="' + (w * 0.03).toFixed(1) + '"/><circle class="sw" cx="' + (w * 0.3).toFixed(1) + '" cy="' + (h / 2).toFixed(1) + '" r="' + (w * 0.03).toFixed(1) + '"/>';
  },
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
      '<div style="position:absolute;left:150px;top:' + (o.top || 300) + 'px;width:1620px;display:flex;flex-direction:column;gap:' + (o.gap || 22) + 'px">' + rows + '</div></div>'));
    const tag = kit.stage.querySelector('.' + id + '-tag').style;
    const h = kit.stage.querySelector('.' + id + '-h');
    const row = [...kit.stage.querySelectorAll('.' + id + '-row')].map(function (e) { return e.style; });
    const m = [...kit.stage.querySelectorAll('.' + id + '-mk')];
    const t0 = o.t0 || 1.0, step = o.step || 2.3;
    return {
      render(t) {
        const tg = kit.eo(kit.seg(t, 0, 0.8));
        tag.opacity = tg;
        tag.transform = 'translateX(' + kit.lerp(26, 0, tg) + 'px)';
        kit.TextFx.fadeFromRight(h, t, 0.1);
        for (let i = 0; i < row.length; i++) {
          const a = t0 + i * step;
          const p = kit.eo(kit.seg(t, a, a + 1.0));
          row[i].opacity = p;
          row[i].transform = 'translateX(' + kit.lerp(40, 0, p).toFixed(1) + 'px)';
          const s = kit.eob(kit.seg(t, a, a + 0.7), 1.8);
          m[i].setAttribute('transform', 'scale(' + Math.max(0, s).toFixed(4) + ')');
        }
      }
    };
  },
  traps(kit, id, items) {
    let cards = '';
    items.forEach(function (it, i) {
      cards += '<div class="card ' + id + '-c" style="left:150px;top:' + (262 + i * 250) + 'px;width:1620px;height:230px">' +
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
      '<h2 class="line ' + id + '-h">Spot the trap</h2></div>' + cards + '</div>'));
    const q = function (c) { return [...kit.stage.querySelectorAll('.' + id + '-' + c)]; };
    const tag = kit.stage.querySelector('.' + id + '-tag').style, h = kit.stage.querySelector('.' + id + '-h');
    const c = q('c').map(function (e) { return e.style; }), x = q('x'), trap = q('trap').map(function (e) { return e.style; });
    const r = q('r').map(function (e) { return e.style; }), hook = q('hook').map(function (e) { return e.style; });
    return {
      render(t) {
        const tg = kit.eo(kit.seg(t, 0, 0.8));
        tag.opacity = tg;
        tag.transform = 'translateX(' + kit.lerp(26, 0, tg) + 'px)';
        kit.TextFx.fadeFromRight(h, t, 0.1);
        for (let i = 0; i < c.length; i++) {
          const a = 1.0 + i * 4.0;
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
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="title-sign">' +
      '<polygon class="shadow" points="' + SG.tri(14, 22, 270) + '" stroke-width="40" stroke-linejoin="round" style="stroke:rgba(0,0,0,.12)"/>' +
      '<polygon class="sr title-outer" points="' + SG.tri(0, 0, 270) + '" stroke-width="40" stroke-linejoin="round" style="stroke:var(--sign-red)"/>' +
      '<polygon class="sw title-inner" points="' + SG.tri(0, 0, 150) + '"/>' +
      '<polygon class="title-ring" points="' + SG.tri(0, 0, 222) + '" fill="none" stroke-width="10" stroke-linejoin="round" style="stroke:#FFFFFF" stroke-dasharray="1154"/>' +
      '</g></svg>' +
      '<div class="words" style="left:150px;top:230px;width:900px">' +
      '<div class="kicker title-kick">Session 10 · Learners Coach</div>' +
      '<h1 class="line" style="font-size:120px">Freeways, towing, loads and duties</h1>' +
      '<p class="sub title-sub">A checklist of rules and numbers: expect a question on each one</p>' +
      '</div></div>'));
    this.sign = kit.stage.querySelector('.title-sign');
    this.outer = kit.stage.querySelector('.title-outer');
    this.inner = kit.stage.querySelector('.title-inner');
    this.ring = kit.stage.querySelector('.title-ring');
    this.kick = kit.stage.querySelector('.title-kick').style;
    this.sub = kit.stage.querySelector('.title-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.kick.opacity = eo(seg(t, -0.6, -0.1));
    TextFx.fadeFromRight(this.line, t, -0.5);
    this.sub.opacity = eo(seg(t, 0.7, 1.3));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.7, 1.3))) + 'px)';
    const o = eob(seg(t, -0.5, 0.2), 1.7);
    this.outer.setAttribute('transform', 'scale(' + Math.max(0, o).toFixed(4) + ')');
    const i = eob(seg(t, 0.3, 0.8), 1.8);
    this.inner.setAttribute('transform', 'scale(' + Math.max(0, i).toFixed(4) + ')');
    this.ring.setAttribute('stroke-dashoffset', (1154 * (1 - eo(seg(t, 0.6, 1.6)))).toFixed(1));
    const breathe = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(1460 ' + (600 - t * 1.5).toFixed(1) + ') scale(' + breathe.toFixed(4) + ') rotate(' + (SG.wob(t, 1) * 0.6).toFixed(2) + ')');
  },
});

},
  "fwrules": function (kit) {
const { seg, eo, eob, lerp, TextFx } = kit;
// List scene: each rule slides in one at a time and stays on screen.
const FWRULES_O = {"tag": "Freeway", "title": "Freeway rules", "rows": [["no", "Not allowed: animal-drawn vehicles, bicycles, tractors (unless doing road work) and other small, slow vehicles."], ["no", "Pedestrians and animals only inside a vehicle, or in an area marked for stopping or parking."], ["no", "No stopping, except when an officer or a sign tells you to, or in an area marked for stopping (emergencies)."], ["no", "No hand signals, except in an emergency."], ["ok", "Keep left and overtake on the right. Let vehicles from an on-ramp merge in front of you."]]};
kit.scene('fwrules', {
  init(kit) {
    this.L = SG.list(kit, 'fwrules', FWRULES_O);
  },
  render(t) {
    this.L.render(t);
  },
});

},
  "freeway": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('freeway', {
  init(kit) {
    const T = 'text-anchor="middle" style="font:700 44px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--main)"';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<rect class="road" x="0" y="800" width="1920" height="280"/>' +
      '<line class="lane freeway-lane" x1="0" y1="940" x2="1920" y2="940"/>' +
      '<g class="freeway-car">' +
      '<rect x="-170" y="-170" width="330" height="130" rx="40" style="fill:var(--main)"/>' +
      '<rect x="-150" y="-150" width="290" height="95" rx="24" fill="#FFFFFF" opacity=".9"/>' +
      '<g class="freeway-p1"><circle cx="-70" cy="-112" r="24" class="sk"/><rect x="-98" y="-84" width="56" height="30" rx="14" class="sk"/></g>' +
      '<g class="freeway-p2"><circle cx="70" cy="-112" r="24" class="sk"/><rect x="42" y="-84" width="56" height="30" rx="14" class="sk"/></g>' +
      '<rect x="-260" y="-60" width="520" height="120" rx="40" style="fill:var(--main)"/>' +
      '<circle cx="-160" cy="60" r="44" class="sk"/><circle cx="160" cy="60" r="44" class="sk"/>' +
      '<circle cx="-160" cy="60" r="16" class="sw"/><circle cx="160" cy="60" r="16" class="sw"/>' +
      '<path class="meas freeway-l1" d="M-70 -150 L-170 -250" stroke-dasharray="142"/>' +
      '<path class="meas freeway-l2" d="M70 -150 L170 -250" stroke-dasharray="142"/>' +
      '<text class="freeway-t1" x="-200" y="-272" ' + T + '>Learner</text>' +
      '<text class="freeway-t2" x="200" y="-272" ' + T + '>Licensed driver</text>' +
      '<text class="freeway-plus" x="0" y="-262" text-anchor="middle" style="font:700 80px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--accent)">+</text>' +
      '</g></svg>' +
      '<div class="words" style="left:150px;top:130px;width:860px">' +
      '<div class="tag freeway-tag">Freeway</div>' +
      '<h2 class="line">Learners on a freeway</h2>' +
      '<p class="sub freeway-sub">Allowed, but only with a licensed driver in the vehicle.</p>' +
      '</div></div>'));
    this.lane = kit.stage.querySelector('.freeway-lane');
    this.car = kit.stage.querySelector('.freeway-car');
    this.p = [kit.stage.querySelector('.freeway-p1'), kit.stage.querySelector('.freeway-p2')];
    this.l = [kit.stage.querySelector('.freeway-l1'), kit.stage.querySelector('.freeway-l2')];
    this.tx = [kit.stage.querySelector('.freeway-t1').style, kit.stage.querySelector('.freeway-t2').style];
    this.plus = kit.stage.querySelector('.freeway-plus').style;
    this.tag = kit.stage.querySelector('.freeway-tag').style;
    this.sub = kit.stage.querySelector('.freeway-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.lane.setAttribute('stroke-dashoffset', ((t * 260) % 74).toFixed(1));
    const c = eo(seg(t, 0.0, 1.4));
    const bob = Math.sin(t * 2 * Math.PI / 3.2) * 3;
    this.car.setAttribute('transform', 'translate(' + lerp(2300, 1380, c).toFixed(1) + ' ' + (740 + bob - t * 1.2).toFixed(1) + ')');
    for (let i = 0; i < 2; i++) {
      const s = eob(seg(t, 1.4 + i * 1.6, 1.9 + i * 1.6), 1.8);
      this.p[i].style.opacity = Math.min(1, Math.max(0, s) * 1.5);
      this.p[i].setAttribute('transform', 'translate(0 ' + lerp(30, 0, Math.min(1, Math.max(0, s))).toFixed(1) + ')');
      this.l[i].setAttribute('stroke-dashoffset', (142 * (1 - eo(seg(t, 1.8 + i * 1.6, 2.3 + i * 1.6)))).toFixed(1));
      const a = eo(seg(t, 2.1 + i * 1.6, 2.6 + i * 1.6));
      this.tx[i].opacity = a;
      this.tx[i].transform = 'translateY(' + lerp(16, 0, a) + 'px)';
    }
    const pl = eob(seg(t, 5.0, 5.5), 1.9);
    this.plus.opacity = Math.min(1, Math.max(0, pl) * 1.5);
    this.tag.opacity = eo(seg(t, 0.6, 1.0));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.6, 1.1))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 0.8);
    this.sub.opacity = eo(seg(t, 2.0, 2.6));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 2.0, 2.6))) + 'px)';
  },
});

},
  "duties": function (kit) {
const { seg, eo, eob, lerp, TextFx } = kit;
// List scene: each rule slides in one at a time and stays on screen.
const DUTIES_O = {"tag": "General duties", "title": "Hooter and duties", "rows": [["ok", "Use the hooter only when needed for safety. It must be audible from 90 m."], ["no", "Tune-playing sirens are not allowed on private vehicles."], ["ok", "You may flash your headlights to show the vehicle ahead (not in the left lane) that you want to overtake."], ["no", "Do not reverse further than needed, follow too closely, or let someone else steer."], ["no", "Do not leave the vehicle unattended without the parking brake on, or with the engine running."]]};
kit.scene('duties', {
  init(kit) {
    this.L = SG.list(kit, 'duties', DUTIES_O);
  },
  render(t) {
    this.L.render(t);
  },
});

},
  "duties2": function (kit) {
const { seg, eo, eob, lerp, TextFx } = kit;
// List scene: each rule slides in one at a time and stays on screen.
const DUTIES2_O = {"tag": "General duties", "title": "More duties", "rows": [["no", "Do not let body parts stick out of the vehicle, except for hand signals."], ["no", "Do not run the engine while refuelling."], ["no", "Do not let passengers get on or off while the vehicle is moving."], ["no", "No phone unless it is hands-free. Never hold a cellphone in your hand, or with any part of your body, while driving."], ["ok", "Indicators must be visible at 30 m in daylight."]]};
kit.scene('duties2', {
  init(kit) {
    this.L = SG.list(kit, 'duties2', DUTIES2_O);
  },
  render(t) {
    this.L.render(t);
  },
});

},
  "belts": function (kit) {
const { seg, eo, eob, lerp, TextFx } = kit;
// List scene: each rule slides in one at a time and stays on screen.
const BELTS_O = {"tag": "Seatbelts", "title": "Buckle up", "rows": [["ok", "Seatbelts are compulsory in a moving vehicle."], ["n", "A child is aged 3 to 14, unless taller than 1.5 m. Over 14 counts as an adult."], ["ok", "Rear-seat passengers must wear seatbelts if they are fitted."], ["n", "Seatbelts are not compulsory while reversing, or moving in or out of a parking bay."], ["no", "No passengers may ride in a caravan."]]};
kit.scene('belts', {
  init(kit) {
    this.L = SG.list(kit, 'belts', BELTS_O);
  },
  render(t) {
    this.L.render(t);
  },
});

},
  "tow": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('tow', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="tow-road"><rect class="road" x="0" y="820" width="1920" height="260"/>' +
      '<line class="lane" x1="0" y1="980" x2="1920" y2="980"/></g>' +
      '<g class="tow-cars">' +
      '<g transform="translate(520 760)">' + SG.car('color-mix(in srgb, var(--second) 55%, var(--ground))', 360) + '</g>' +
      '<g transform="translate(1260 760)">' + SG.car('var(--main)', 360) + '</g>' +
      '<path class="tow-rope" d="M700 770 Q890 812 1080 770" fill="none" stroke-width="9" stroke-linecap="round" style="stroke:var(--second)" stroke-dasharray="420"/>' +
      '<g class="tow-flag"><line x1="890" y1="790" x2="890" y2="830" stroke-width="5" style="stroke:var(--second)"/><rect x="890" y="790" width="64" height="48" rx="4" class="sr"/></g>' +
      '</g>' +
      '<path class="meas tow-brk" d="M700 668 V646 H1080 V668" stroke-dasharray="430"/>' +
      '<text class="mtxt tow-35" x="890" y="624" text-anchor="middle">3.5 m max</text>' +
      '<text class="tow-18" x="890" y="1060" text-anchor="middle" style="font:700 40px var(--display, var(--sans, system-ui, sans-serif)); fill:#FFFFFF">Gap over 1.8 m: red flag</text>' +
      '</svg>' +
      '<div class="words" style="left:150px;top:110px;width:1620px">' +
      '<div class="tag tow-tag">Towing</div>' +
      '<h2 class="line">No more than 3.5 m apart</h2>' +
      '<p class="sub tow-sub">If the gap is over 1.8 m, the rope needs a clearly visible red flag.</p>' +
      '</div></div>'));
    this.road = kit.stage.querySelector('.tow-road').style;
    this.cars = kit.stage.querySelector('.tow-cars');
    this.rope = kit.stage.querySelector('.tow-rope');
    this.flag = kit.stage.querySelector('.tow-flag');
    this.brk = kit.stage.querySelector('.tow-brk');
    this.t35 = kit.stage.querySelector('.tow-35').style;
    this.t18 = kit.stage.querySelector('.tow-18').style;
    this.tag = kit.stage.querySelector('.tow-tag').style;
    this.sub = kit.stage.querySelector('.tow-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const r = eo(seg(t, 0.0, 0.5));
    this.road.opacity = 0.35 + 0.65 * r;
    const c = eo(seg(t, 0.0, 1.4));
    this.cars.setAttribute('transform', 'translate(' + lerp(-1500, 0, c).toFixed(1) + ' 0)');
    this.rope.setAttribute('stroke-dashoffset', (420 * (1 - eo(seg(t, 1.5, 2.2)))).toFixed(1));
    this.tag.opacity = eo(seg(t, 0.8, 1.2));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.8, 1.3))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 1.0);
    this.brk.setAttribute('stroke-dashoffset', (430 * (1 - eio(seg(t, 2.6, 3.6)))).toFixed(1));
    const n = eob(seg(t, 3.5, 4.0), 1.8);
    this.t35.opacity = Math.min(1, Math.max(0, n) * 1.4);
    this.t35.transform = 'translateY(' + lerp(20, 0, Math.min(1, Math.max(0, n))) + 'px)';
    this.sub.opacity = eo(seg(t, 5.0, 5.6));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 5.0, 5.6))) + 'px)';
    const f = eob(seg(t, 5.8, 6.3), 1.9);
    const wave = Math.sin(t * 2 * Math.PI / 1.6) * 4;
    this.flag.setAttribute('transform', 'translate(890 790) scale(' + Math.max(0, f).toFixed(4) + ') rotate(' + (wave * Math.min(1, Math.max(0, f))).toFixed(2) + ') translate(-890 -790)');
    const g = eo(seg(t, 6.4, 7.0));
    this.t18.opacity = g;
    this.t18.transform = 'translateY(' + lerp(16, 0, g) + 'px)';
  },
});

},
  "rope": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('rope', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="rope-dial"><circle class="shadow" cx="14" cy="20" r="260"/><circle class="sw" r="260"/><circle class="edge" r="260"/>' +
      '<path class="rope-track" d="M-134.4 134.4 A190 190 0 1 1 134.4 134.4" fill="none" stroke-width="22" stroke-linecap="round" style="stroke:color-mix(in srgb, var(--second) 18%, var(--ground))" stroke-dasharray="896"/>' +
      '<path class="rope-over" d="M-175.5 -72.7 A190 190 0 1 1 134.4 134.4" fill="none" stroke-width="22" stroke-linecap="round" style="stroke:var(--sign-red)" stroke-dasharray="672"/>' +
      '<line class="rope-mark" x1="-138.6" y1="-57.4" x2="-212.5" y2="-88" stroke-width="10" stroke-linecap="round" style="stroke:var(--main)"/>' +
      '<g class="rope-needle"><line x1="0" y1="0" x2="0" y2="-160" stroke-width="14" stroke-linecap="round" style="stroke:var(--second)"/></g>' +
      '<circle r="22" class="sk"/>' +
      '<text class="rope-num" x="0" y="140" text-anchor="middle" style="font:700 110px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)">30</text>' +
      '<text class="rope-unit" x="0" y="190" text-anchor="middle" style="font:600 38px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--main)">km/h max</text>' +
      '</g></svg>' +
      '<div class="words" style="left:1000px;top:200px;width:800px">' +
      '<div class="tag no rope-tag">Rope or chain</div>' +
      '<h2 class="line">30 km/h on a rope</h2>' +
      '<p class="sub rope-sub">Towing with a rope or chain: 30 km/h at most. A tow-bar or draw-bar allows more.</p>' +
      '</div></div>'));
    this.dial = kit.stage.querySelector('.rope-dial');
    this.track = kit.stage.querySelector('.rope-track');
    this.over = kit.stage.querySelector('.rope-over');
    this.mark = kit.stage.querySelector('.rope-mark').style;
    this.needle = kit.stage.querySelector('.rope-needle');
    this.num = kit.stage.querySelector('.rope-num').style;
    this.unit = kit.stage.querySelector('.rope-unit').style;
    this.tag = kit.stage.querySelector('.rope-tag').style;
    this.sub = kit.stage.querySelector('.rope-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.dial.setAttribute('transform', 'translate(520 ' + (540 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    this.track.setAttribute('stroke-dashoffset', (896 * (1 - eo(seg(t, 0.4, 1.3)))).toFixed(1));
    this.over.setAttribute('stroke-dashoffset', (672 * (1 - eo(seg(t, 3.0, 3.8)))).toFixed(1));
    this.mark.opacity = eo(seg(t, 1.2, 1.5));
    const n = eio(seg(t, 1.3, 2.4));
    const sw = Math.sin(Math.PI * seg(t, 2.2, 2.8)) * 3;
    this.needle.setAttribute('transform', 'rotate(' + (lerp(-135, -67.5, n) + sw).toFixed(2) + ')');
    const k = eob(seg(t, 2.3, 2.8), 1.8);
    this.num.opacity = Math.min(1, Math.max(0, k) * 1.4);
    this.num.transform = 'scale(' + lerp(0.6, 1, Math.min(1, Math.max(0, k))) + ')';
    this.unit.opacity = eo(seg(t, 2.7, 3.1));
    this.tag.opacity = eo(seg(t, 0.8, 1.2));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.8, 1.3))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 1.0);
    this.sub.opacity = eo(seg(t, 2.2, 2.8));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 2.2, 2.8))) + 'px)';
  },
});

},
  "loads": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('loads', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<rect class="road" x="0" y="938" width="1920" height="142"/>' +
      '<g class="loads-truck">' +
      '<rect x="760" y="620" width="600" height="260" rx="18" style="fill:color-mix(in srgb, var(--main) 30%, var(--ground))"/>' +
      '<rect x="1380" y="680" width="140" height="200" rx="26" style="fill:var(--main)"/>' +
      '<rect x="1430" y="700" width="70" height="70" rx="12" fill="#FFFFFF" opacity=".85"/>' +
      '<rect x="760" y="866" width="760" height="24" rx="8" class="sk"/>' +
      '<circle cx="860" cy="898" r="40" class="sk"/><circle cx="1240" cy="898" r="40" class="sk"/><circle cx="1450" cy="898" r="40" class="sk"/>' +
      '<circle cx="860" cy="898" r="14" class="sw"/><circle cx="1240" cy="898" r="14" class="sw"/><circle cx="1450" cy="898" r="14" class="sw"/>' +
      '</g>' +
      '<rect class="sy loads-plank" x="560" y="584" width="1000" height="32" rx="6"/>' +
      '<path class="meas loads-b1" d="M560 566 V546 H760 V566" stroke-dasharray="250"/>' +
      '<text class="mtxt loads-t1" x="660" y="522" text-anchor="middle">1.8 m</text>' +
      '<path class="meas loads-b2" d="M1520 566 V546 H1560 V566" stroke-dasharray="90"/>' +
      '<text class="mtxt loads-t2" x="1560" y="522" text-anchor="middle">300 mm</text>' +
      '<path class="meas loads-b3" d="M1620 938 H1640 V584 H1620" stroke-dasharray="400"/>' +
      '<text class="mtxt loads-t3" x="1664" y="780" text-anchor="start">4.3 m</text>' +
      '</svg>' +
      '<div class="words" style="left:150px;top:100px;width:1640px">' +
      '<div class="tag loads-tag">Loads</div>' +
      '<h2 class="line">Short in front, long behind</h2>' +
      '<p class="sub loads-sub">No more than 300 mm in front or 1.8 m behind. Height 4.3 m (goods vehicles), width 2.5 m.</p>' +
      '</div></div>'));
    this.truck = kit.stage.querySelector('.loads-truck');
    this.plank = kit.stage.querySelector('.loads-plank');
    this.b = [1, 2, 3].map(function (i) { return kit.stage.querySelector('.loads-b' + i); });
    this.bl = [250, 90, 400];
    this.tx = [1, 2, 3].map(function (i) { return kit.stage.querySelector('.loads-t' + i).style; });
    this.tag = kit.stage.querySelector('.loads-tag').style;
    this.sub = kit.stage.querySelector('.loads-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.7), 1.6);
    const br = 1 + 0.008 * Math.sin(t * 2 * Math.PI / 3.2);
    this.truck.setAttribute('transform', 'translate(1140 938) scale(' + (Math.max(0, s) * br).toFixed(4) + ') translate(-1140 -938)');
    const p = eob(seg(t, 0.9, 1.6), 1.5);
    this.plank.setAttribute('transform', 'translate(' + lerp(-1400, 0, p).toFixed(1) + ' ' + (Math.sin(t * 2 * Math.PI / 3.2) * 2).toFixed(1) + ')');
    this.tag.opacity = eo(seg(t, 0.6, 1.0));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.6, 1.1))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 0.8);
    this.sub.opacity = eo(seg(t, 2.0, 2.6));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 2.0, 2.6))) + 'px)';
    for (let i = 0; i < 3; i++) {
      const a = 3.0 + i * 1.3;
      this.b[i].setAttribute('stroke-dashoffset', (this.bl[i] * (1 - eio(seg(t, a, a + 0.6)))).toFixed(1));
      const n = eob(seg(t, a + 0.5, a + 1.0), 1.8);
      this.tx[i].opacity = Math.min(1, Math.max(0, n) * 1.4);
      this.tx[i].transform = 'translateY(' + lerp(20, 0, Math.min(1, Math.max(0, n))) + 'px)';
    }
  },
});

},
  "loadmore": function (kit) {
const { seg, eo, eob, lerp, TextFx } = kit;
// List scene: each rule slides in one at a time and stays on screen.
const LOADMORE_O = {"tag": "Towing and loads", "title": "Towing and load extras", "size": 36, "gap": 16, "rows": [["ok", "A licensed driver must control the towed vehicle, unless a proper towing device is used."], ["n", "People may ride in the towed vehicle only if you go no faster than 30 km/h."], ["n", "Width: 2.5 m, or 2.6 m for goods vehicles of 12 000 kg or more."], ["n", "A load sticking out 150 mm or more to the side: by day, red flags (300 mm square) on each corner."], ["n", "At night: white reflectors in front, red at the rear, yellow on the sides."], ["no", "Goods on a car roof: no higher than half the car’s height (bicycles excluded)."]]};
kit.scene('loadmore', {
  init(kit) {
    this.L = SG.list(kit, 'loadmore', LOADMORE_O);
  },
  render(t) {
    this.L.render(t);
  },
});

},
  "moto": function (kit) {
const { seg, eo, eob, lerp, TextFx } = kit;
// List scene: each rule slides in one at a time and stays on screen.
const MOTO_O = {"tag": "Motorcycle (Code 1)", "cls": "blue", "title": "Motorcycle rules", "size": 36, "gap": 16, "rows": [["ok", "Rider and passenger must wear a protective helmet. Headlight on at all times, day and night."], ["no", "No passenger if the engine is 50cc or less. No more than two people. A Code 1 learner may not carry a passenger."], ["ok", "Both keep their feet on the footrests and sit astride. Keep at least one hand on the handlebars."], ["n", "Ride in single file. Only one motorcycle at a time may overtake a vehicle in the same lane. A motorcycle may not tow anything."], ["n", "Loads: at most 600 mm beyond the front axle, 900 mm beyond the rear axle, 450 mm beyond the side of the wheels. Nothing in front of the rider."], ["no", "Motorcycles of 50cc or less are not allowed on freeways. No retreaded tyres on motorcycles."]]};
kit.scene('moto', {
  init(kit) {
    this.L = SG.list(kit, 'moto', MOTO_O);
  },
  render(t) {
    this.L.render(t);
  },
});

},
  "roadside": function (kit) {
const { seg, eo, eob, lerp, TextFx } = kit;
// List scene: each rule slides in one at a time and stays on screen.
const ROADSIDE_O = {"tag": "On the road", "title": "Animals, tyres and more", "size": 36, "gap": 16, "rows": [["n", "Animals on the road: warnings at least 150 m ahead and behind."], ["n", "A red light from sunset to sunrise, a 300 mm red flag by day. Fewer than 10 animals: one light or flag."], ["ok", "Heavy vehicles, goods vehicles, minibuses and buses must carry a warning triangle (the official manual exempts motor cars, ambulances and motorcycles)."], ["ok", "Tyre tread at least 1 mm deep across the whole tyre. No deep cuts or visible cords."], ["n", "Abandoned: left over 24 hours on a non-urban road, or over 7 days on an urban road."], ["n", "Also abandoned: no or false number plates, or left in a no-stopping or no-parking area."]]};
kit.scene('roadside', {
  init(kit) {
    this.L = SG.list(kit, 'roadside', ROADSIDE_O);
  },
  render(t) {
    this.L.render(t);
  },
});

},
  "triangle": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('triangle', {
  init(kit) {
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<rect class="road" x="0" y="800" width="1920" height="280"/>' +
      '<line class="lane" x1="0" y1="960" x2="1920" y2="960"/>' +
      '<g class="triangle-car" transform="translate(1520 760)">' + SG.car('var(--main)', 320) +
      '<circle class="triangle-haz" cx="-150" cy="-10" r="12" style="fill:var(--accent)"/></g>' +
      '<g class="triangle-sign">' +
      '<polygon class="sw" points="' + SG.tri(0, 0, 96) + '"/>' +
      '<polygon class="triangle-ring" points="' + SG.tri(0, 0, 96) + '" fill="none" stroke-width="26" stroke-linejoin="round" style="stroke:var(--sign-red)" stroke-dasharray="500"/>' +
      '</g>' +
      '<path class="meas triangle-brk" d="M600 640 V618 H1360 V640" stroke-dasharray="810"/>' +
      '<text class="mtxt triangle-45" x="980" y="596" text-anchor="middle">at least 45 m</text>' +
      '<path class="triangle-dir" d="M140 1030 H400 M370 1012 L400 1030 L370 1048" fill="none" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" style="stroke:#FFFFFF" stroke-dasharray="320"/>' +
      '</svg>' +
      '<div class="words" style="left:150px;top:110px;width:1640px">' +
      '<div class="tag no triangle-tag">Warning triangle</div>' +
      '<h2 class="line">At least 45 m behind</h2>' +
      '<p class="sub triangle-sub">Any vehicle stopped on the roadway: reflective side facing approaching traffic.</p>' +
      '</div></div>'));
    this.car = kit.stage.querySelector('.triangle-car').style;
    this.haz = kit.stage.querySelector('.triangle-haz').style;
    this.sign = kit.stage.querySelector('.triangle-sign');
    this.ring = kit.stage.querySelector('.triangle-ring');
    this.brk = kit.stage.querySelector('.triangle-brk');
    this.t45 = kit.stage.querySelector('.triangle-45').style;
    this.dir = kit.stage.querySelector('.triangle-dir');
    this.tag = kit.stage.querySelector('.triangle-tag').style;
    this.sub = kit.stage.querySelector('.triangle-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    this.car.opacity = eo(seg(t, 0.0, 0.4));
    this.haz.opacity = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * 2 * Math.PI / 1.2));
    const x = lerp(1360, 600, eio(seg(t, 0.4, 1.8)));
    const s = eob(seg(t, 0.4, 0.9), 1.7);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.sign.setAttribute('transform', 'translate(' + x.toFixed(1) + ' ' + (757 - t * 1.2).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    this.ring.setAttribute('stroke-dashoffset', (500 * (1 - eo(seg(t, 1.6, 2.4)))).toFixed(1));
    this.tag.opacity = eo(seg(t, 0.8, 1.2));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.8, 1.3))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 1.0);
    this.brk.setAttribute('stroke-dashoffset', (810 * (1 - eio(seg(t, 2.6, 3.8)))).toFixed(1));
    const n = eob(seg(t, 3.7, 4.2), 1.8);
    this.t45.opacity = Math.min(1, Math.max(0, n) * 1.4);
    this.t45.transform = 'translateY(' + lerp(20, 0, Math.min(1, Math.max(0, n))) + 'px)';
    this.sub.opacity = eo(seg(t, 4.6, 5.2));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 4.6, 5.2))) + 'px)';
    this.dir.setAttribute('stroke-dashoffset', (320 * (1 - eo(seg(t, 5.2, 6.0)))).toFixed(1));
  },
});

},
  "emergency": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('emergency', {
  init(kit) {
    const lamp = function (i, cls) {
      return '<g class="emergency-l' + i + '"><circle class="' + cls + ' emergency-g' + i + '" r="170" opacity=".18"/>' +
        '<circle class="shadow" cx="10" cy="16" r="125"/><circle class="sw" r="125"/>' +
        '<circle class="' + cls + '" r="104"/>' +
        '<circle class="emergency-r' + i + '" r="114" fill="none" stroke-width="8" style="stroke:color-mix(in srgb, var(--second) 25%, transparent)" stroke-dasharray="716.3"/>' +
        '<ellipse cx="-34" cy="-40" rx="30" ry="18" fill="#FFFFFF" opacity=".35"/></g>';
    };
    const lab = function (i, x, tag, cls, txt) {
      return '<div class="words emergency-w' + i + '" style="left:' + x + 'px;top:660px;width:480px;align-items:center;text-align:center">' +
        '<div class="tag ' + cls + '" style="align-self:center">' + tag + '</div><p class="sub">' + txt + '</p></div>';
    };
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' + lamp(0, 'sr') + lamp(1, 'sb') + lamp(2, 'lg') + '</svg>' +
      '<div class="words" style="left:0;top:80px;width:1920px;text-align:center">' +
      '<h2 class="line emergency-h">Give way at once</h2></div>' +
      lab(0, 220, 'Red light', 'no', 'Fire-fighting, rescue, ambulance') +
      lab(1, 720, 'Blue light', 'blue', 'Traffic officer') +
      lab(2, 1220, 'Green light', 'go', 'Civil protection') +
      '<div class="words emergency-foot" style="left:0;top:970px;width:1920px;text-align:center">' +
      '<p class="kicker" style="justify-content:center">Siren and warning lights: immediate right of way</p></div>' +
      '</div>'));
    this.l = [0, 1, 2].map(function (i) { return kit.stage.querySelector('.emergency-l' + i); });
    this.halo = [0, 1, 2].map(function (i) { return kit.stage.querySelector('.emergency-g' + i); });
    this.ring = [0, 1, 2].map(function (i) { return kit.stage.querySelector('.emergency-r' + i); });
    this.w = [0, 1, 2].map(function (i) { return kit.stage.querySelector('.emergency-w' + i).style; });
    this.h = kit.stage.querySelector('.emergency-h');
    this.foot = kit.stage.querySelector('.emergency-foot').style;
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, 0.0);
    for (let i = 0; i < 3; i++) {
      const a = 0.3 + i * 1.2;
      const s = eob(seg(t, a, a + 0.6), 1.7);
      const br = 1 + 0.012 * Math.sin((t + i * 0.9) * 2 * Math.PI / 3.2);
      this.l[i].setAttribute('transform', 'translate(' + (460 + i * 500) + ' ' + (440 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
      this.ring[i].setAttribute('stroke-dashoffset', (716.3 * (1 - eo(seg(t, a + 0.3, a + 1.0)))).toFixed(1));
      const glow = eo(seg(t, a + 0.6, a + 1.2));
      this.halo[i].setAttribute('opacity', (glow * (0.14 + 0.1 * Math.sin((t - a) * 2 * Math.PI / 1.6))).toFixed(3));
      const w = eo(seg(t, a + 0.7, a + 1.3));
      this.w[i].opacity = w;
      this.w[i].transform = 'translateY(' + lerp(24, 0, w) + 'px)';
    }
    const f = eo(seg(t, 4.8, 5.5));
    this.foot.opacity = f;
    this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});

},
  "disc": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('disc', {
  init(kit) {
    let months = '';
    for (let i = 0; i < 12; i++) {
      const a = i * Math.PI / 6;
      months += '<circle class="disc-m" cx="' + (178 * Math.sin(a)).toFixed(1) + '" cy="' + (-178 * Math.cos(a)).toFixed(1) + '" r="13" style="fill:var(--main)"/>';
    }
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="disc-disc"><circle class="shadow" cx="14" cy="20" r="240"/><circle class="sw" r="240"/>' +
      '<circle class="disc-ring" r="222" fill="none" stroke-width="14" transform="rotate(-90)" style="stroke:var(--main)" stroke-dasharray="1394.9"/>' +
      '<circle class="disc-grace" r="262" fill="none" stroke-width="22" stroke-linecap="round" transform="rotate(-90)" style="stroke:var(--accent)" stroke-dasharray="0 1646.2"/>' +
      months +
      '<text class="disc-num" x="0" y="30" text-anchor="middle" style="font:700 140px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)">12</text>' +
      '<text class="disc-unit" x="0" y="86" text-anchor="middle" style="font:600 40px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--main)">months</text>' +
      '<text class="disc-plus" x="0" y="-292" text-anchor="middle" style="font:700 48px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)">+ 21 days grace</text>' +
      '</g></svg>' +
      '<div class="words" style="left:960px;top:200px;width:840px">' +
      '<div class="tag disc-tag">Licence disc</div>' +
      '<h2 class="line">12 months plus 21 days</h2>' +
      '<p class="sub disc-sub">Valid for 12 months, with a 21-day period of grace after expiry. Report a permanent change of address within 14 days.</p>' +
      '</div></div>'));
    this.disc = kit.stage.querySelector('.disc-disc');
    this.ring = kit.stage.querySelector('.disc-ring');
    this.grace = kit.stage.querySelector('.disc-grace');
    this.m = [...kit.stage.querySelectorAll('.disc-m')];
    this.num = kit.stage.querySelector('.disc-num').style;
    this.unit = kit.stage.querySelector('.disc-unit').style;
    this.plus = kit.stage.querySelector('.disc-plus').style;
    this.tag = kit.stage.querySelector('.disc-tag').style;
    this.sub = kit.stage.querySelector('.disc-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.disc.setAttribute('transform', 'translate(500 ' + (560 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    this.ring.setAttribute('stroke-dashoffset', (1394.9 * (1 - eio(seg(t, 0.4, 2.0)))).toFixed(1));
    for (let i = 0; i < 12; i++) {
      const p = eob(seg(t, 0.5 + i * 0.12, 0.9 + i * 0.12), 1.9);
      this.m[i].setAttribute('r', (13 * Math.max(0, p)).toFixed(2));
    }
    const g = 1646.2 * (21 / 365) * eo(seg(t, 3.0, 3.8));
    this.grace.setAttribute('stroke-dasharray', g.toFixed(1) + ' 1646.2');
    this.grace.style.opacity = g > 0.5 ? 1 : 0;
    const pl = eo(seg(t, 3.6, 4.1));
    this.plus.opacity = pl;
    this.plus.transform = 'translateY(' + lerp(16, 0, pl) + 'px)';
    const k = eob(seg(t, 1.0, 1.5), 1.8);
    this.num.opacity = Math.min(1, Math.max(0, k) * 1.4);
    this.num.transform = 'scale(' + lerp(0.6, 1, Math.min(1, Math.max(0, k))) + ')';
    this.unit.opacity = eo(seg(t, 1.4, 1.8));
    this.tag.opacity = eo(seg(t, 0.8, 1.2));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.8, 1.3))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 1.0);
    this.sub.opacity = eo(seg(t, 2.2, 2.8));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 2.2, 2.8))) + 'px)';
  },
});

},
  "accident": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('accident', {
  init(kit) {
    let ticks = '';
    for (let i = 0; i < 24; i++) {
      const a = i * Math.PI / 12, r1 = i % 6 === 0 ? 150 : 166, r2 = 186;
      ticks += '<line x1="' + (r1 * Math.sin(a)).toFixed(1) + '" y1="' + (-r1 * Math.cos(a)).toFixed(1) + '" x2="' + (r2 * Math.sin(a)).toFixed(1) + '" y2="' + (-r2 * Math.cos(a)).toFixed(1) + '" stroke-width="' + (i % 6 === 0 ? 8 : 4) + '" stroke-linecap="round" style="stroke:color-mix(in srgb, var(--second) 45%, var(--ground))"/>';
    }
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="accident-clock"><circle class="shadow" cx="14" cy="20" r="250"/><circle class="sw" r="250"/><circle class="edge" r="250"/>' +
      '<g class="accident-ticks">' + ticks + '</g>' +
      '<circle class="accident-ring" r="218" fill="none" stroke-width="26" stroke-linecap="round" transform="rotate(-90)" style="stroke:var(--main)" stroke-dasharray="1369.7"/>' +
      '<text class="accident-num" x="0" y="40" text-anchor="middle" style="font:700 150px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--second)">24</text>' +
      '<text class="accident-unit" x="0" y="96" text-anchor="middle" style="font:600 40px var(--display, var(--sans, system-ui, sans-serif)); fill:var(--main)">hours</text>' +
      '</g></svg>' +
      '<div class="words" style="left:960px;top:170px;width:840px">' +
      '<div class="tag no accident-tag">After an accident</div>' +
      '<h2 class="line">Report within 24 hours</h2>' +
      '<p class="sub accident-sub">Stop, check for injuries, help the injured and give your details. Then report it to the police.</p>' +
      '</div></div>'));
    this.clock = kit.stage.querySelector('.accident-clock');
    this.ticks = kit.stage.querySelector('.accident-ticks').style;
    this.ring = kit.stage.querySelector('.accident-ring');
    this.num = kit.stage.querySelector('.accident-num').style;
    this.unit = kit.stage.querySelector('.accident-unit').style;
    this.tag = kit.stage.querySelector('.accident-tag').style;
    this.sub = kit.stage.querySelector('.accident-sub').style;
    this.line = kit.stage.querySelector('.line');
  },
  render(t) {
    t = t / 1.3;
    const s = eob(seg(t, 0.0, 0.6), 1.6);
    const br = 1 + 0.012 * Math.sin(t * 2 * Math.PI / 3.2);
    this.clock.setAttribute('transform', 'translate(500 ' + (540 - t * 1.3).toFixed(1) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    this.ticks.opacity = eo(seg(t, 0.4, 0.9));
    this.ring.setAttribute('stroke-dashoffset', (1369.7 * (1 - eio(seg(t, 0.8, 3.2)))).toFixed(1));
    const k = eob(seg(t, 1.0, 1.5), 1.8);
    this.num.opacity = Math.min(1, Math.max(0, k) * 1.4);
    this.num.transform = 'scale(' + lerp(0.6, 1, Math.min(1, Math.max(0, k))) + ')';
    this.unit.opacity = eo(seg(t, 1.4, 1.8));
    this.tag.opacity = eo(seg(t, 0.8, 1.2));
    this.tag.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 0.8, 1.3))) + 'px)';
    TextFx.fadeFromRight(this.line, t, 1.0);
    this.sub.opacity = eo(seg(t, 2.4, 3.0));
    this.sub.transform = 'translateX(' + lerp(26, 0, eo(seg(t, 2.4, 3.0))) + 'px)';
  },
});

},
  "aftermath": function (kit) {
const { seg, eo, eob, lerp, TextFx } = kit;
// List scene: each rule slides in one at a time and stays on screen.
const AFTERMATH_O = {"tag": "After an accident", "cls": "no", "title": "Accident duties", "rows": [["ok", "Stop, check for injuries and help the injured. Give your name and address, the owner’s address and the registration number."], ["no", "If someone is killed: call emergency services. Do not move the vehicles without a traffic officer’s permission (unless they cause danger), and only after their positions are marked."], ["no", "Do not drink alcohol or take drugs after an accident until you have reported it, unless a doctor tells you to."]]};
kit.scene('aftermath', {
  init(kit) {
    this.L = SG.list(kit, 'aftermath', AFTERMATH_O);
  },
  render(t) {
    this.L.render(t);
  },
});

},
  "alcohol": function (kit) {
const { seg, eo, eio, eob, lerp, TextFx } = kit;
kit.scene('alcohol', {
  init(kit) {
    const card = function (i, x, tag, cls, num, fill) {
      return '<div class="card alcohol-c' + i + '" style="left:' + x + 'px;top:260px;width:660px;height:580px">' +
        '<div class="words" style="left:60px;top:56px;width:540px">' +
        '<div class="tag ' + cls + '">' + tag + '</div>' +
        '<div class="line alcohol-n' + i + '" style="font-size:150px">' + num + '</div>' +
        '<p class="sub">per 100 ml of blood</p>' +
        '<div style="height:28px;width:540px;border-radius:14px;margin-top:20px;background:color-mix(in srgb, var(--second) 10%, var(--ground))">' +
        '<div class="alcohol-b' + i + '" style="height:28px;width:540px;border-radius:14px;transform-origin:left center;background:' + fill + '"></div></div>' +
        '</div></div>';
    };
    kit.stage.append(kit.h('<div class="ground">' +
      '<div class="words" style="left:0;top:80px;width:1920px;text-align:center">' +
      '<h2 class="line alcohol-h">Alcohol limits</h2></div>' +
      card(0, 260, 'Ordinary driver', '', '0.05 g', 'var(--main)') +
      card(1, 1000, 'Professional driver', 'no', '0.02 g', 'var(--sign-red)') +
      '<div class="words alcohol-foot" style="left:0;top:930px;width:1920px;text-align:center">' +
      '<p class="kicker" style="justify-content:center">Pros get the smaller number</p></div>' +
      '</div>'));
    this.c = [0, 1].map(function (i) { return kit.stage.querySelector('.alcohol-c' + i).style; });
    this.n = [0, 1].map(function (i) { return kit.stage.querySelector('.alcohol-n' + i); });
    this.b = [0, 1].map(function (i) { return kit.stage.querySelector('.alcohol-b' + i).style; });
    this.h = kit.stage.querySelector('.alcohol-h');
    this.foot = kit.stage.querySelector('.alcohol-foot').style;
  },
  render(t) {
    t = t / 1.3;
    TextFx.fadeFromRight(this.h, t, 0.0);
    const full = [1, 0.4];
    for (let i = 0; i < 2; i++) {
      const a = 0.4 + i * 1.6;
      const s = eob(seg(t, a, a + 0.6), 1.6);
      const y = lerp(60, 0, Math.min(1, Math.max(0, s))) - t * 1.2;
      this.c[i].opacity = Math.min(1, Math.max(0, s) * 1.6);
      this.c[i].transform = 'translateY(' + y.toFixed(1) + 'px) scale(' + (0.92 + 0.08 * Math.min(1, Math.max(0, s))).toFixed(4) + ')';
      TextFx.fadeFromRight(this.n[i], t, a + 0.4);
      this.b[i].transform = 'scaleX(' + (full[i] * eio(seg(t, a + 0.9, a + 1.9))).toFixed(4) + ')';
    }
    const f = eo(seg(t, 5.2, 5.9));
    this.foot.opacity = f;
    this.foot.transform = 'translateY(' + lerp(16, 0, f) + 'px)';
  },
});

},
  "traps1": function (kit) {
const { seg, eo, eob, lerp, TextFx } = kit;
// Trap or remember: the trap is crossed out, the simple answer slides in, then the hook in yellow.
const TRAPS1_I = [["Towing numbers: 3.5 m, 1.8 m and 30 km/h?", "Swapping the gap limit and the flag distance.", "The gap may be at most 3.5 m. If the gap is over 1.8 m you need a red flag on the tow rope. Without a solid bar you may not go over 30 km/h.", "Max 3.5, flag past 1.8, 30 on a rope."], ["How soon must you report an accident?", "Choosing ‘immediately’ or ‘7 days’.", "Report it to the police within 24 hours.", "One day to report."], ["How far behind your car does the warning triangle go?", "Choosing 15 m or 150 m.", "At least 45 m behind the vehicle.", "Triangle 45, same as dipped beam."]];
kit.scene('traps1', {
  init(kit) {
    this.T = SG.traps(kit, 'traps1', TRAPS1_I);
  },
  render(t) {
    this.T.render(t);
  },
});

},
  "traps2": function (kit) {
const { seg, eo, eob, lerp, TextFx } = kit;
// Trap or remember: the trap is crossed out, the simple answer slides in, then the hook in yellow.
const TRAPS2_I = [["How far may a load stick out?", "Mixing front, rear and side figures.", "300 mm in front, 1.8 m behind, 4.3 m high, 2.5 m wide.", "Short at the front, long at the back."], ["What is the legal alcohol limit?", "Mixing the normal and professional limits.", "0.05 g per 100 ml of blood for ordinary drivers; 0.02 g for professional drivers.", "Pros get the smaller number."], ["May a learner drive on a freeway?", "Choosing ‘never’.", "Yes, but only with a licensed driver in the vehicle.", "Learner plus licensed = freeway OK."]];
kit.scene('traps2', {
  init(kit) {
    this.T = SG.traps(kit, 'traps2', TRAPS2_I);
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
    const F = 'var(--display, var(--sans, system-ui, sans-serif))';
    kit.stage.append(kit.h('<div class="ground">' +
      '<svg class="art" viewBox="0 0 1920 1080">' +
      '<g class="end-s1"><polygon class="shadow" points="' + SG.tri(10, 14, 120) + '"/><polygon class="sw" points="' + SG.tri(0, 0, 120) + '"/>' +
      '<polygon points="' + SG.tri(0, 0, 104) + '" fill="none" stroke-width="22" stroke-linejoin="round" style="stroke:var(--sign-red)"/>' +
      '<text y="34" text-anchor="middle" style="font:700 44px ' + F + '; fill:var(--second)">45 m</text></g>' +
      '<g class="end-s2"><circle class="shadow" cx="10" cy="14" r="110"/><circle class="sw" r="110"/>' +
      '<circle r="92" fill="none" stroke-width="16" style="stroke:var(--main)"/>' +
      '<text y="18" text-anchor="middle" style="font:700 64px ' + F + '; fill:var(--second)">24 h</text></g>' +
      '<g class="end-s3"><circle class="shadow" cx="10" cy="14" r="110"/><circle class="sw" r="110"/>' +
      '<path d="M-60.1 -60.1 A85 85 0 1 1 -84.9 4" fill="none" stroke-width="16" stroke-linecap="round" style="stroke:var(--sign-red)"/>' +
      '<text y="20" text-anchor="middle" style="font:700 60px ' + F + '; fill:var(--second)">30</text></g>' +
      '</svg>' +
      '<div class="words" style="left:180px;top:300px;width:960px">' +
      '<div class="kicker end-k">Session 10 · Learners Coach</div>' +
      '<div class="bar end-bar" style="transform-origin:left center"></div>' +
      '<h2 class="line end-h">Learn the numbers.</h2>' +
      '<p class="sub end-sub">3.5 m tow gap, 45 m triangle, 24 hours to report. Next: the mini test.</p></div>' +
      '</div>'));
    this.s = [1, 2, 3].map(function (i) { return kit.stage.querySelector('.end-s' + i); });
    this.k = kit.stage.querySelector('.end-k').style;
    this.bar = kit.stage.querySelector('.end-bar').style;
    this.h = kit.stage.querySelector('.end-h');
    this.sub = kit.stage.querySelector('.end-sub').style;
  },
  render(t) {
    t = t / 1.3;
    const tc = Math.min(t, 5);
    const k = eo(seg(tc, 0.0, 0.5));
    this.k.opacity = k;
    this.k.transform = 'translateY(' + lerp(14, 0, k) + 'px)';
    this.bar.transform = 'scaleX(' + eio(seg(tc, 0.2, 0.9)).toFixed(4) + ')';
    TextFx.fadeFromRight(this.h, tc, 0.4);
    const sb = eo(seg(tc, 1.4, 2.0));
    this.sub.opacity = sb;
    this.sub.transform = 'translateX(' + lerp(26, 0, sb) + 'px)';
    const pos = [[1420, 300], [1640, 570], [1380, 800]];
    for (let i = 0; i < 3; i++) {
      const st = 0.6 + i * 0.35;
      const s = eob(seg(tc, st, st + 0.6), 1.6);
      const fade = eio(seg(tc, 3.2, 5.0));
      const br = 1 + 0.012 * Math.sin((tc + i * 0.9) * 2 * Math.PI / 3.2) * (1 - fade);
      const y = pos[i][1] + lerp(-40, 0, eo(seg(tc, st, st + 0.6))) - tc * 1.2;
      this.s[i].setAttribute('transform', 'translate(' + pos[i][0] + ' ' + y.toFixed(1) + ') rotate(' + lerp(-14 + i * 10, 0, eo(seg(tc, st, st + 0.8))).toFixed(2) + ') scale(' + (Math.max(0, s) * br).toFixed(4) + ')');
    }
  },
});

},
 },
 score: function (kit) {
kit.score(function (S, T) {
  // 388 beats from the second scene to the end card: 48 chords of 8 beats, then 4 beats of stop-time
  const BPM = 388 * 60 / (T.end - T.fwrules), B = 60 / BPM;
  S.tempo(BPM, { t0: T.fwrules });
  S.program('pad', 'pad', { rev: 0.6, gain: -4 });
  S.program('mallet', 'marimba', { rev: 0.3, pan: -0.15 });
  S.program('keys', 'ep', { rev: 0.35, pan: 0.15 });
  S.program('bass', 'bass', { gain: -3 });
  S.program('bell', 'glock', { rev: 0.5, gain: -6 });
  // Title: near silent, a pad and one bell note
  S.chord('pad', ['D3', 'A3', 'F#4'], { t: 0, dur: T.fwrules + 0.4, vel: 30 });
  S.note('bell', 'A5', { t: 1.3, dur: 2.5, vel: 40 });
  S.fx('pop', 0.4, { vel: 40 });
  // Progression, one chord per 8 beats; every fourth 32-beat block drops to pad and mallet only
  const prog = [['D3', 'A3', 'F#4'], ['B2', 'F#3', 'D4'], ['G2', 'D3', 'B3'], ['A2', 'E3', 'C#4']];
  const roots = ['D2', 'B1', 'G1', 'A1'];
  const drop = function (beat) { return Math.floor(beat / 32) % 4 === 2; };
  for (let i = 0; i < 48; i++) {
    const c = prog[i % 4], b = i * 8;
    S.chord('pad', c, { beat: b, beats: 8, vel: 34 });
    if (drop(b)) continue;
    if (i >= 2) { S.note('bass', roots[i % 4], { beat: b, beats: 3, vel: 64 }); S.note('bass', roots[i % 4], { beat: b + 4, beats: 2, vel: 54 }); }
    if (i >= 4 && i % 2 === 0) S.chord('keys', c.map(function (p) { return p.replace(/\d/, function (d) { return String(+d + 1); }); }), { beat: b, beats: 6, vel: 40 });
  }
  // Calm marimba ostinato under the whole checklist (96 x 4 beats = 384)
  S.pattern('mallet', 'x.x.X..x', { from: 0, repeat: 96, pitch: ['D5', 'A4', 'F#5', 'A4', 'E5'], vel: 50 });
  // Light pulse in 32-beat blocks from beat 16, resting in the drop blocks, ending by beat 384
  for (let b = 16; b < 384; b = (b === 16 ? 32 : b + 32)) {
    if (drop(b)) continue;
    const reps = b === 16 ? 4 : Math.min(8, (384 - b) / 4);
    S.drums({ shaker: 'oxoxoxox', sidestick: '....x...', kick: 'x.......' }, { from: b, repeat: reps, vel: 46 });
  }
  // Pops as each sign, number, rule or card builds
  const pops = [['freeway', 1.8], ['freeway', 4.0], ['freeway', 6.6], ['tow', 4.7], ['tow', 7.7], ['rope', 0.3], ['rope', 3.1],
    ['loads', 0.3], ['loads', 4.7], ['loads', 6.4], ['loads', 8.1], ['triangle', 0.7], ['triangle', 5.2],
    ['emergency', 0.5], ['emergency', 2.1], ['emergency', 3.6], ['disc', 0.3], ['disc', 1.4], ['accident', 0.3], ['accident', 1.4],
    ['alcohol', 0.7], ['alcohol', 2.7]];
  const lists = [['fwrules', 5], ['duties', 5], ['duties2', 5], ['belts', 5], ['loadmore', 6], ['moto', 6], ['roadside', 6], ['aftermath', 3]];
  lists.forEach(function (l) { for (let i = 0; i < l[1]; i++) pops.push([l[0], 1.05 + i * 2.3]); });
  pops.forEach(function (p) { S.fx('pop', T[p[0]] + p[1], { vel: 52 }); });
  ['traps1', 'traps2'].forEach(function (id) {
    for (let i = 0; i < 3; i++) {
      const a = T[id] + 1.0 + i * 4.0;
      S.fx('click', a + 1.6, { vel: 42 });
      S.fx('ding', a + 2.9, { vel: 44 });
    }
  });
  S.fx('whoosh', T.freeway, { dur: 1.8, vel: 30 });
  S.fx('whoosh', T.tow, { dur: 1.8, vel: 30 });
  S.fx('whoosh', T.triangle + 0.6, { dur: 1.6, vel: 26 });
  S.fx('ding', T.rope + 3.2, { vel: 50 });
  S.fx('ding', T.triangle + 5.2, { vel: 46 });
  S.fx('roll', T.accident + 1.0, { dur: 3.1, vel: 34 });
  S.fx('click', T.alcohol + 1.8, { vel: 40 });
  S.fx('click', T.alcohol + 3.9, { vel: 40 });
  S.fx('chime', T.disc + 4.0, { vel: 44 });
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