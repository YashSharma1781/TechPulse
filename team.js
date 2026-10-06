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
    const dr = /^(Dr\.?)\s+(.*)$/i.exec(a.name);
    const nameHTML = dr ? `<em>${esc(dr[1])}</em> ${esc(dr[2])}` : esc(a.name);
    $('#coordMount').innerHTML = `
      <article class="coord-card t-rise" data-open="coord">
        <div class="coord-media">
          <span class="coord-block"></span>
          <div class="coord-photo">${avatar(a, null, '#C8352B', 'coord-avatar')}</div>
          <svg class="coord-stamp" viewBox="0 0 120 120" aria-hidden="true">
            <circle cx="60" cy="60" r="59" fill="#121212"/>
            <defs><path id="stampPath" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"/></defs>
            <g class="stamp-ring"><text font-family="Space Grotesk, sans-serif" font-size="9.5" font-weight="700" fill="#EFEAE0"><textPath href="#stampPath" textLength="274" lengthAdjust="spacing">ACADEMIC COORDINATOR &#8226; TECHPULSE &#8226; </textPath></text></g>
            <image href="logo.png" x="38" y="42" width="44" height="34"/>
          </svg>
        </div>
        <div class="coord-info">
          <span class="coord-label">Academic Coordinator</span>
          <h3 class="coord-name">${nameHTML}</h3>
          <div class="coord-rule"></div>
          <p class="coord-role">TechPulse &middot; CCE, CGC University</p>
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

  // ---------- Pulse members: every department, every face, no clicking needed ----------
  const netEl = $('#netNodes');
  let fillEl, pulseEl;

  function pmCard(p, d, key, k, isHead) {
    return `<button class="pm-card t-rise${isHead ? ' head' : ''}" style="--c:${d.color};--d:${(Math.min(k, 6) * 0.06).toFixed(2)}s" data-open="${key}" aria-label="${esc(p.name)}, ${isHead ? 'department head' : 'member'}">
      <span class="pm-photo">${avatar(p, d)}${isHead ? '<span class="pm-badge">&#9733; Head</span>' : ''}</span>
      <span class="pm-info"><span class="pm-name">${esc(p.name)}</span><span class="pm-role">${isHead ? 'Department Head' : 'Member'}</span></span>
    </button>`;
  }

  function renderDepartments() {
    $('#deptList').innerHTML = DEPTS.map((d) => `
      <section class="dept-block" id="dept-${d.id}" data-i="${d.idx}" style="--c:${d.color}">
        <header class="dept-top t-rise">
          <span class="dept-no">${pad(d.idx + 1)}</span>
          <div>
            <h4 class="dept-title">${esc(d.name)}</h4>
            <p class="dept-line">${esc(d.tagline || '')}</p>
          </div>
          <span class="dept-people">${pad(d.members.length + 1)} people</span>
        </header>
        <div class="pm-grid">
          ${pmCard(d.head, d, `head:${d.idx}`, 0, true)}
          ${d.members.map((m, k) => pmCard(m, d, `mem:${d.idx}:${k}`, k + 1, false)).join('')}
        </div>
      </section>`).join('');
  }

  // The pulse line doubles as a sticky "jump to" bar and follows the department you are reading
  function renderNetwork() {
    netEl.style.setProperty('--n', DEPTS.length);
    netEl.style.gridTemplateColumns = `repeat(${DEPTS.length}, 1fr)`;
    netEl.innerHTML = '<span class="net-fill"></span><span class="net-pulse"></span>' + DEPTS.map((d) => `
      <button class="net-node" data-i="${d.idx}" style="--c:${d.color}" aria-label="Jump to ${esc(d.name)}">
        <span class="node-dot">${esc(d.icon)}</span>
        <span class="node-label">${esc(d.short || d.name)}</span>
      </button>`).join('');
    fillEl = $('.net-fill', netEl);
    pulseEl = $('.net-pulse', netEl);

    netEl.addEventListener('click', (e) => {
      const b = e.target.closest('.net-node');
      if (!b) return;
      const block = document.getElementById('dept-' + DEPTS[+b.dataset.i].id);
      if (block) block.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function setActive(i) {
    const d = DEPTS[i], n = DEPTS.length;
    const nodes = [...netEl.querySelectorAll('.net-node')];
    nodes.forEach((b, k) => b.classList.toggle('active', k === i));
    fillEl.style.width = `calc(100% * ${i} / ${n})`;
    fillEl.style.background = `linear-gradient(90deg, #6CC47F, ${d.color})`;
    pulseEl.style.left = `calc(100% * ${i + 0.5} / ${n})`;
    pulseEl.style.setProperty('--pc', d.color);
    const cur = $('#netCurrent');
    if (cur) { cur.textContent = d.name; cur.style.color = d.color; }
    const wrap = netEl.parentElement;
    if (wrap.scrollWidth > wrap.clientWidth + 2) {
      const nd = nodes[i];
      wrap.scrollTo({ left: nd.offsetLeft - wrap.clientWidth / 2 + nd.offsetWidth / 2, behavior: 'smooth' });
    }
  }

  function initSpy() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) setActive(+en.target.dataset.i); });
    }, { rootMargin: '-35% 0px -55% 0px' });
    document.querySelectorAll('.dept-block').forEach((b) => io.observe(b));
    setActive(0);
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

    const SEL = '.core-card, .coord-card';
    section.addEventListener('pointermove', (e) => {
      const card = e.target.closest(SEL);
      if (!card) return;
      const r = card.getBoundingClientRect();
      const px = e.clientX - r.left, py = e.clientY - r.top;
      card.style.setProperty('--mx', px + 'px');
      card.style.setProperty('--my', py + 'px');
      if (card.matches('.core-card')) {
        const t = 9;
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
    renderDepartments();
    initInteractions(section);
    initReveal();
    initSpy();
    initConstellation(section);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();