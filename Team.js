/* ----------------------------------------------------
   TECHPULSE | Leadership + Pulse Members renderer
   Data lives in team-data.js
---------------------------------------------------- */
(function () {
  if (typeof TEAM === 'undefined') return;

  const $ = (s, r = document) => r.querySelector(s);
  const pad = (n) => String(n).padStart(2, '0');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const PLACEHOLDER = /^(Member \d+|Department Head)$/i;
  const CORE_COLORS = ['#6CC47F', '#9890C8', '#ED3327'];

  function norm(p, photo) {
    const o = typeof p === 'string' ? { name: p } : { ...p };
    o.photo = o.photo || photo;
    return o;
  }

  const DEPTS = TEAM.departments.map((d, i) => ({
    ...d,
    idx: i,
    head: norm(d.head || 'Department Head', `images/team/${d.id}-head.jpg`),
    members: (d.members || []).map((m, k) => norm(m, `images/team/${d.id}-${pad(k + 1)}.jpg`))
  }));

  function initials(o, d) {
    if (PLACEHOLDER.test(o.name)) return d ? d.icon : '·';
    return o.name.replace(/^Dr\.?\s+/i, '').split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();
  }

  // Photo with an automatic initials fallback (img removes itself if the file is missing)
  function avatar(o, d, color, cls) {
    const c = color || (d && d.color) || '#6CC47F';
    return `<span class="avatar ${cls || ''}" style="--c:${c}" data-initials="${esc(initials(o, d))}">` +
      `<img src="${esc(o.photo)}" alt="${esc(o.name)}" loading="lazy" onerror="this.remove()"></span>`;
  }

  // ---------- Leadership ----------
  function renderLeadership() {
    const a = TEAM.academicCoordinator;
    $('#coordMount').innerHTML = `
      <article class="coord-card t-rise" style="--c:#9890C8" data-open="coord">
        <div class="coord-photo">
          <span class="orbit o1"></span>
          <span class="orbit o2"><i></i></span>
          ${avatar(a, null, '#9890C8', 'coord-avatar')}
        </div>
        <div class="coord-info">
          <span class="chip">&#9733; Academic Coordinator</span>
          <h3 class="coord-name">${esc(a.name)}</h3>
          <p class="coord-role">Guiding TechPulse &middot; CCE, CGC University</p>
          <svg class="coord-ecg" viewBox="0 0 420 60" preserveAspectRatio="none" aria-hidden="true">
            <defs><linearGradient id="coordGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stop-color="#6CC47F"/><stop offset="0.6" stop-color="#9890C8"/><stop offset="1" stop-color="#ED3327"/>
            </linearGradient></defs>
            <path class="ecg-t" d="M0,30 H120 l12,-8 l10,8 H180 l8,6 l12,-34 l14,58 l10,-30 H300 l14,-10 l14,10 H420" pathLength="100" vector-effect="non-scaling-stroke"/>
            <path class="ecg-p" d="M0,30 H120 l12,-8 l10,8 H180 l8,6 l12,-34 l14,58 l10,-30 H300 l14,-10 l14,10 H420" pathLength="100" vector-effect="non-scaling-stroke"/>
          </svg>
          <span class="tap-hint">Tap to view</span>
        </div>
      </article>`;

    $('#coreMount').innerHTML = TEAM.core.map((p, i) => `
      <article class="core-card t-rise" style="--c:${CORE_COLORS[i % 3]};--d:${(i * 0.12).toFixed(2)}s" data-role="${esc(p.role.toUpperCase())}" data-open="core:${i}">
        <span class="core-index">${pad(i + 1)}</span>
        <div class="core-frame">${avatar(p, null, CORE_COLORS[i % 3], 'core-avatar')}<span class="core-glare"></span></div>
        <h4 class="core-name">${esc(p.name)}</h4>
        <span class="chip">${esc(p.role)}</span>
      </article>`).join('');
  }

  // ---------- Pulse members ----------
  function mCard(p, d, key, k, role, compact) {
    return `<button class="m-card${compact ? ' compact' : ''}" style="--c:${d.color};--k:${k}" data-open="${key}">
      <span class="m-ring">${avatar(p, d)}</span>
      <span class="m-text"><span class="m-name">${esc(p.name)}</span><span class="m-role">${esc(role)}</span></span>
    </button>`;
  }

  const netEl = $('#netNodes'), panelEl = $('#deptPanel'), allEl = $('#allView');
  let fillEl, pulseEl, active = 0;

  function renderNetwork() {
    netEl.style.setProperty('--n', DEPTS.length);
    netEl.style.gridTemplateColumns = `repeat(${DEPTS.length}, 1fr)`;
    netEl.innerHTML = '<span class="net-fill"></span><span class="net-pulse"></span>' + DEPTS.map((d) => `
      <button class="net-node" data-i="${d.idx}" style="--c:${d.color}" aria-label="${esc(d.name)}">
        <span class="node-dot">${esc(d.icon)}</span>
        <span class="node-label">${esc(d.short || d.name)}</span>
        <span class="node-count">${pad(d.members.length + 1)} people</span>
      </button>`).join('');
    fillEl = $('.net-fill', netEl);
    pulseEl = $('.net-pulse', netEl);
    netEl.addEventListener('click', (e) => {
      const b = e.target.closest('.net-node');
      if (b) setActive(+b.dataset.i, true);
    });
  }

  function renderPanel(d) {
    panelEl.innerHTML = `
      <div class="dept-panel" style="--c:${d.color}">
        <aside class="dept-intro">
          <span class="dept-num">${pad(d.idx + 1)}</span>
          <h4 class="dept-name">${esc(d.name)}</h4>
          <p class="dept-tag">${esc(d.tagline || '')}</p>
          <div class="dept-stats"><span><b>${pad(d.members.length)}</b>members</span><span><b>01</b>head</span></div>
          <button class="head-card" data-open="head:${d.idx}">
            ${avatar(d.head, d)}
            <span class="head-meta"><span class="head-badge">&#9733; Department Head</span><span class="head-name">${esc(d.head.name)}</span></span>
          </button>
        </aside>
        <div class="member-grid">
          ${d.members.map((m, k) => mCard(m, d, `mem:${d.idx}:${k}`, k, 'Member')).join('')}
        </div>
      </div>`;
  }

  function setActive(i, fromClick) {
    active = i;
    const d = DEPTS[i], n = DEPTS.length;
    netEl.querySelectorAll('.net-node').forEach((b, k) => b.classList.toggle('active', k === i));
    fillEl.style.width = `calc(100% * ${i} / ${n})`;
    fillEl.style.background = `linear-gradient(90deg, #6CC47F, ${d.color})`;
    pulseEl.style.left = `calc(100% * ${i + 0.5} / ${n})`;
    pulseEl.style.setProperty('--pc', d.color);
    renderPanel(d);
    if (fromClick) netEl.querySelectorAll('.net-node')[i].scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }

  function renderAll() {
    allEl.innerHTML = DEPTS.map((d) => `
      <div class="all-dept" style="--c:${d.color}">
        <div class="all-head">
          <span class="dept-num sm">${pad(d.idx + 1)}</span>
          <h4 class="all-name">${esc(d.name)}</h4>
          <span class="all-line"></span>
          <span class="all-count">${pad(d.members.length + 1)} people</span>
        </div>
        <div class="all-grid">
          ${mCard(d.head, d, `head:${d.idx}`, 0, '★ Department Head', true)}
          ${d.members.map((m, k) => mCard(m, d, `mem:${d.idx}:${k}`, k + 1, 'Member', true)).join('')}
        </div>
      </div>`).join('');
  }

  // ---------- View toggle ----------
  function initToggle() {
    const tog = $('#viewToggle'), thumb = $('.view-thumb', tog);
    const btns = [...tog.querySelectorAll('button')];
    function place(b) {
      thumb.style.width = b.offsetWidth + 'px';
      thumb.style.transform = `translateX(${b.offsetLeft - 5}px)`;
    }
    function set(view) {
      btns.forEach((b) => b.classList.toggle('active', b.dataset.view === view));
      $('#deptView').hidden = view !== 'dept';
      allEl.hidden = view !== 'all';
      place(btns.find((b) => b.dataset.view === view));
    }
    btns.forEach((b) => b.addEventListener('click', () => set(b.dataset.view)));
    window.addEventListener('resize', () => place(btns.find((b) => b.classList.contains('active'))));
    requestAnimationFrame(() => place(btns[0]));
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => place(btns.find((b) => b.classList.contains('active'))));
  }

  // ---------- Person modal ----------
  function personFrom(key) {
    const [t, a, b] = key.split(':');
    if (t === 'coord') return { p: TEAM.academicCoordinator, role: 'Academic Coordinator', color: '#9890C8', d: null };
    if (t === 'core') { const p = TEAM.core[+a]; return { p, role: p.role, color: CORE_COLORS[+a % 3], d: null }; }
    const d = DEPTS[+a];
    if (t === 'head') return { p: d.head, role: 'Department Head', color: d.color, d };
    return { p: d.members[+b], role: 'Member', color: d.color, d };
  }

  function openPerson(key) {
    const { p, role, color, d } = personFrom(key);
    const links = [['linkedin', 'LinkedIn'], ['instagram', 'Instagram'], ['github', 'GitHub'], ['email', 'Email']]
      .filter(([k]) => p[k])
      .map(([k, label]) => `<a href="${k === 'email' ? 'mailto:' : ''}${esc(p[k])}" target="_blank" rel="noopener">${label} &nearr;</a>`)
      .join('');
    if (typeof openModal === 'function') {
      openModal(`
        <div class="p-modal" style="--c:${color}">
          <div class="p-photo">${avatar(p, d, color)}</div>
          <span class="chip" style="--c:${color}">${esc(role)}</span>
          <h2 class="p-name">${esc(p.name)}</h2>
          ${d ? `<p class="p-dept">${esc(d.name)} &middot; TechPulse</p>` : '<p class="p-dept">TechPulse &middot; CCE, CGC University</p>'}
          ${links ? `<div class="p-links">${links}</div>` : ''}
        </div>`);
    }
  }

  // ---------- Hover effects + clicks (event delegation) ----------
  function initInteractions(section) {
    section.addEventListener('click', (e) => {
      const el = e.target.closest('[data-open]');
      if (el) openPerson(el.dataset.open);
    });

    const SEL = '.core-card, .coord-card, .m-card, .head-card';
    section.addEventListener('pointermove', (e) => {
      const card = e.target.closest(SEL);
      if (!card) return;
      const r = card.getBoundingClientRect();
      const px = e.clientX - r.left, py = e.clientY - r.top;
      card.style.setProperty('--mx', px + 'px');
      card.style.setProperty('--my', py + 'px');
      if (card.matches('.core-card, .m-card')) {
        const t = card.matches('.core-card') ? 9 : 6;
        card.style.setProperty('--ry', ((px / r.width - 0.5) * t).toFixed(2) + 'deg');
        card.style.setProperty('--rx', (-(py / r.height - 0.5) * t).toFixed(2) + 'deg');
        card.style.setProperty('--gx', px + 'px');
        card.style.setProperty('--gy', py + 'px');
      }
    });
    section.addEventListener('pointerout', (e) => {
      const card = e.target.closest(SEL);
      if (card && !card.contains(e.relatedTarget)) {
        card.style.setProperty('--rx', '0deg');
        card.style.setProperty('--ry', '0deg');
      }
    });
  }

  // ---------- Reveal on scroll ----------
  function initReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('#team .t-rise').forEach((el) => io.observe(el));
  }

  // ---------- Constellation background (circuit nodes, like the logo) ----------
  function initConstellation(section) {
    const canvas = $('#teamCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, nodes = [], visible = false;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(80, (W * H) / 22000));
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.25, vy: (Math.random() - 0.5) * 0.25,
        c: Math.random() < 0.5 ? '108,196,127' : '152,144,200'
      }));
    }
    resize();
    window.addEventListener('resize', resize);
    new IntersectionObserver((en) => { visible = en[0].isIntersecting; }).observe(section);

    function frame() {
      requestAnimationFrame(frame);
      if (!visible) return;
      ctx.clearRect(0, 0, W, H);
      for (const a of nodes) {
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > W) a.vx *= -1;
        if (a.y < 0 || a.y > H) a.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y, dist = Math.hypot(dx, dy);
          if (dist < 150) {
            ctx.strokeStyle = `rgba(${a.c}, ${(1 - dist / 150) * 0.16})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      for (const a of nodes) {
        ctx.fillStyle = `rgba(${a.c}, 0.4)`;
        ctx.beginPath(); ctx.arc(a.x, a.y, 2, 0, Math.PI * 2); ctx.fill();
      }
    }
    frame();
  }

  function init() {
    const section = $('#team');
    if (!section) return;
    renderLeadership();
    renderNetwork();
    setActive(0, false);
    renderAll();
    initToggle();
    initInteractions(section);
    initReveal();
    initConstellation(section);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();