/* ----------------------------------------------------
   TECHPULSE EVENT PAGE  -  builds event.html?e=<slug> from events-data.js
---------------------------------------------------- */
(function () {
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pad = (n) => String(n).padStart(2, '0');
  const initials = (name) => {
    const w = String(name).replace(/[^A-Za-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean);
    return ((w[0] || '?')[0] + (w[1] ? w[1][0] : '')).toUpperCase();
  };

  const root = document.getElementById('eventRoot');
  const events = (typeof EVENTS !== 'undefined') ? EVENTS : [];
  const slug = new URLSearchParams(location.search).get('e');
  const idx = events.findIndex((e) => e.slug === slug || e.id === slug);

  /* ---------- not found ---------- */
  if (idx < 0) {
    document.title = 'Event not found | Techpulse';
    root.innerHTML = `
      <section class="evp-hero"><div class="container">
        <div class="evp-crumbs"><a href="index.html#events">&larr; All events</a><span>404</span></div>
        <h1 class="evp-title">Event not<br>found.</h1>
        <p class="evp-lede">That link doesn't match any event. Pick one below.</p>
        <div class="evp-links">${events.map((e) => `<a class="btn" href="event.html?e=${encodeURIComponent(e.slug || e.id)}">${esc(e.title.split(' - ')[0])}</a>`).join('')}</div>
      </div></section>`;
    initChrome();
    return;
  }

  const ev = events[idx];
  const [main, ...rest] = ev.title.split(' - ');
  const sub = rest.join(' - ');
  document.title = `${main} | Techpulse`;

  /* ---------- helpers for media ---------- */
  const youtubeId = (v) => {
    const m = String(v).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([A-Za-z0-9_-]{11})/);
    return m ? m[1] : (/^[A-Za-z0-9_-]{11}$/.test(v) ? v : '');
  };

  function videoHTML(v) {
    let inner = '';
    if (v.youtube) {
      const id = youtubeId(v.youtube);
      inner = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?rel=0" title="${esc(v.title || 'Video')}" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
    } else if (v.vimeo) {
      inner = `<iframe src="https://player.vimeo.com/video/${esc(v.vimeo)}" title="${esc(v.title || 'Video')}" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    } else if (v.src) {
      inner = `<video controls preload="metadata" playsinline ${v.poster ? `poster="${esc(v.poster)}"` : ''}><source src="${esc(v.src)}">Your browser can't play this video.</video>`;
    }
    return `<figure class="evp-video"><div class="evp-video-frame">${inner}</div>${v.title ? `<figcaption>${esc(v.title)}</figcaption>` : ''}</figure>`;
  }

  const gallery = (ev.gallery || []).map((g) => (typeof g === 'string' ? { src: g, caption: '' } : g));

  /* ---------- sections (only the ones that have content) ---------- */
  const sections = [];

  if ((ev.overview && ev.overview.length) || (ev.stats && ev.stats.length)) {
    sections.push({ id: 'overview', label: 'Overview', html: `
      ${(ev.overview || []).map((p) => `<p>${esc(p)}</p>`).join('')}
      ${ev.stats && ev.stats.length ? `<dl class="evp-stats">${ev.stats.map((s) => `<div><dt>${esc(s.label)}</dt><dd>${esc(s.value)}</dd></div>`).join('')}</dl>` : ''}` , cls: 'evp-overview' });
  }
  if (ev.highlights && ev.highlights.length) {
    sections.push({ id: 'highlights', label: 'Highlights', html: `<ul class="evp-hl">${ev.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>` });
  }
  if (ev.agenda && ev.agenda.length) {
    sections.push({ id: 'agenda', label: 'Agenda', html: `<ol class="evp-ag">${ev.agenda.map((a) => `<li><span>${esc(a.when)}</span><b>${esc(a.what)}</b></li>`).join('')}</ol>` });
  }
  if (ev.speakers && ev.speakers.length) {
    sections.push({ id: 'speakers', label: 'Speakers & guests', html: `<div class="evp-people">${ev.speakers.map((s) => `
      <div class="evp-person">
        <span class="avatar" data-initials="${esc(initials(s.name))}" style="--c:#D63A2F;--ini:34px">${s.photo ? `<img src="${esc(s.photo)}" alt="${esc(s.name)}" loading="lazy" onerror="this.remove()">` : ''}</span>
        <b>${esc(s.name)}</b><span>${esc(s.role || '')}</span>
      </div>`).join('')}</div>` });
  }
  if (ev.results && ev.results.length) {
    sections.push({ id: 'results', label: 'Results', html: `<ol class="evp-results">${ev.results.map((r) => `<li><span>${esc(r.place)}</span><div><b>${esc(r.name)}</b>${r.detail ? `<em>${esc(r.detail)}</em>` : ''}</div></li>`).join('')}</ol>` });
  }
  if (gallery.length) {
    sections.push({ id: 'gallery', label: 'Gallery', html: `<div class="evp-gallery">${gallery.map((g, i) => `
      <figure class="evp-shot">
        <button type="button" data-i="${i}" aria-label="Open photo ${i + 1}"><img src="${esc(g.src)}" alt="${esc(g.caption || main + ' photo ' + (i + 1))}" loading="lazy" decoding="async"></button>
        ${g.caption ? `<figcaption>${esc(g.caption)}</figcaption>` : ''}
      </figure>`).join('')}</div>` });
  }
  if (ev.videos && ev.videos.length) {
    sections.push({ id: 'videos', label: 'Videos', html: `<div class="evp-videos">${ev.videos.map(videoHTML).join('')}</div>` });
  }
  if (ev.links && ev.links.length) {
    sections.push({ id: 'links', label: 'Links', html: `<div class="evp-links">${ev.links.map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} &nearr;</a>`).join('')}</div>` });
  }

  /* ---------- prev / next ---------- */
  const prev = events[idx - 1], next = events[idx + 1];
  const pn = (e, dir) => e ? `<a class="evp-pn ${dir}" href="event.html?e=${encodeURIComponent(e.slug || e.id)}"><small>${dir === 'prev' ? '&larr; Previous event' : 'Next event &rarr;'}</small><b>${esc(e.title.split(' - ')[0])}</b></a>` : '<span></span>';

  /* ---------- page ---------- */
  root.innerHTML = `
    <section class="evp-hero">
      <div class="container">
        <div class="evp-crumbs">
          <a href="index.html#events">&larr; All events</a>
          <span>No. ${pad(idx + 1)} / ${pad(events.length)}</span>
        </div>
        <span class="evp-cat">${esc(ev.category)}</span>
        <h1 class="evp-title">${esc(main)}</h1>
        ${sub ? `<p class="evp-sub">${esc(sub)}</p>` : ''}
        <dl class="evp-meta">
          <div><dt>Date</dt><dd>${esc(ev.date)}</dd></div>
          <div><dt>Venue</dt><dd>${esc(ev.venue)}</dd></div>
          <div><dt>Type</dt><dd>${esc(ev.category)}</dd></div>
          <div><dt>Attended</dt><dd>${esc(ev.attendees)}+</dd></div>
        </dl>
        <figure class="evp-cover"><img src="${esc(ev.cover || ev.image)}" alt="${esc(main)}"></figure>
      </div>
    </section>

    <div class="container evp-body">
      <nav class="evp-index" aria-label="On this page">
        ${sections.map((s, i) => `<a href="#${s.id}" data-sec="${s.id}"><i>${pad(i + 1)}</i>${esc(s.label)}</a>`).join('')}
      </nav>
      <div class="evp-content">
        ${sections.map((s, i) => `
          <section class="evp-section ${s.cls || ''}" id="${s.id}">
            <header class="evp-h"><i>${pad(i + 1)}</i><h2>${esc(s.label)}</h2></header>
            ${s.html}
          </section>`).join('')}
        <nav class="evp-pns" aria-label="More events">${pn(prev, 'prev')}${pn(next, 'next')}</nav>
      </div>
    </div>`;

  /* ---------- reveal on scroll + side-index highlight ---------- */
  const secEls = [...root.querySelectorAll('.evp-section')];
  if ('IntersectionObserver' in window) {
    const revealIO = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); revealIO.unobserve(e.target); } });
    }, { threshold: 0.08 });
    secEls.forEach((s) => revealIO.observe(s));

    const links = [...root.querySelectorAll('.evp-index a')];
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) links.forEach((a) => a.classList.toggle('active', a.dataset.sec === e.target.id));
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    secEls.forEach((s) => spy.observe(s));
  } else {
    secEls.forEach((s) => s.classList.add('in'));
  }

  /* ---------- photo viewer ---------- */
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCap = document.getElementById('lbCap');
  const lbCount = document.getElementById('lbCount');
  let cur = 0;

  function show(i) {
    cur = (i + gallery.length) % gallery.length;
    lbImg.src = gallery[cur].src;
    lbImg.alt = gallery[cur].caption || '';
    lbCap.textContent = gallery[cur].caption || '';
    lbCount.textContent = `${pad(cur + 1)} / ${pad(gallery.length)}`;
  }
  function openLB(i) {
    show(i);
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('lb-open');
  }
  function closeLB() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('lb-open');
  }

  root.addEventListener('click', (e) => {
    const b = e.target.closest('.evp-shot button');
    if (b) openLB(+b.dataset.i);
  });
  document.getElementById('lbClose').addEventListener('click', closeLB);
  document.getElementById('lbPrev').addEventListener('click', () => show(cur - 1));
  document.getElementById('lbNext').addEventListener('click', () => show(cur + 1));
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLB(); });
  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLB();
    if (e.key === 'ArrowLeft') show(cur - 1);
    if (e.key === 'ArrowRight') show(cur + 1);
  });
  let sx = 0;
  lb.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) show(cur + (dx < 0 ? 1 : -1));
  });

  initChrome();

  /* ---------- navbar + mobile menu (same behaviour as the home page) ---------- */
  function initChrome() {
    const nav = document.getElementById('navbar');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('navToggle');
    function setMenu(open) {
      menu.classList.toggle('open', open);
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      menu.setAttribute('aria-hidden', String(!open));
      document.documentElement.classList.toggle('menu-open', open);
    }
    btn.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
    menu.querySelectorAll('.mm-link').forEach((a) => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });
    window.addEventListener('resize', () => { if (window.innerWidth > 960) setMenu(false); });
  }
})();