/* ----------------------------------------------------
   TECHPULSE | Official Tech Club Website
   CGC University - CCE Department
   3D Techpulse Desktop Robot Engine (Pure White Theme)
---------------------------------------------------- */

const INITIAL_DATA = {
  events: [
    {
      id: "event-1",
      title: "HackPulse 1.0 - Flagship Hackathon",
      date: "Nov 14-15, 2025",
      category: "Hackathon",
      venue: "CCE Main Auditorium, CGC Uni",
      attendees: 210,
      description: "A 24-hour national hackathon bringing together 50+ student developer teams to build real-world solutions in AI, Cloud, and Sustainability.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      highlights: ["50+ Participating Teams", "₹50,000 Cash Prize Pool", "Mentors from Top Tech", "Overnight Coding Sprint"],
      agenda: "Day 1: Opening & Challenge Release\nDay 2: Final Demos & Awards"
    },
    {
      id: "event-2",
      title: "CyberShield '25 - Ethical Hacking Workshop",
      date: "Dec 02, 2025",
      category: "Workshop",
      venue: "CCE Computer Lab 4, Block 3",
      attendees: 140,
      description: "Hands-on masterclass on web application security, Kali Linux fundamentals, penetration testing, and CTF challenges.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      highlights: ["Live Vulnerability Exploitation", "Custom CTF Flag Challenge", "Burp Suite & Nmap Hands-on", "Certificates of Excellence"],
      agenda: "Session 1: Network Recon\nSession 2: Web App Security\nSession 3: Live CTF"
    },
    {
      id: "event-3",
      title: "DevClash v2 - Speed Coding Battle",
      date: "Jan 18, 2026",
      category: "Coding",
      venue: "CCE Online Arena & Seminar Hall",
      attendees: 165,
      description: "High-intensity competitive programming showdown evaluating data structures, algorithmic efficiency, and fast problem solving.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      highlights: ["Automated Real-Time Leaderboard", "3 Difficulty Rounds", "Swag Bags & Vouchers", "165+ Contestants"],
      agenda: "Round 1: Speed Warmup\nRound 2: Algorithmic Duel\nRound 3: Grand Finals"
    },
    {
      id: "event-4",
      title: "AI Horizon Summit - GenAI & LLMs",
      date: "Feb 10, 2026",
      category: "Seminar",
      venue: "CGC Central Convention Center",
      attendees: 280,
      description: "Symposium featuring AI researchers and engineers exploring fine-tuning Large Language Models, RAG pipelines, and AI ethics.",
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
      highlights: ["Keynote by AI Industry Pioneers", "Live Demo of RAG Agents", "Interactive Q&A Session", "Networking Lunch"],
      agenda: "Keynote: LLM Frontier\nPanel: AI Careers\nWorkshop: Building RAG Apps"
    },
    {
      id: "event-5",
      title: "Web3 Unlocked - DApp Bootcamp",
      date: "Mar 05, 2026",
      category: "Workshop",
      venue: "CCE Innovation Lab",
      attendees: 110,
      description: "Practical guide to smart contract development using Solidity, Hardhat, Ethers.js, and deploying decentralized apps on Polygon testnet.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
      highlights: ["Deployed 100+ Smart Contracts", "NFT Minting Live Demo", "Web3 Developer Kits", "Faucet Setup"],
      agenda: "Part 1: Blockchain Basics\nPart 2: Solidity Contracts\nPart 3: DApp Frontend"
    }
  ],
  upcoming: {
    title: "CloudForge '26: AWS & DevOps Architecture",
    date: "2026-11-15T09:30:00",
    venue: "CCE Seminar Hall, Block 3, CGC University",
    seatsLeft: 34,
    totalSeats: 150,
    speaker: "Senior Cloud Architect & CCE Tech Mentors",
    description: "Master Docker containers, Kubernetes orchestration, AWS EC2/S3 deployment pipelines, and CI/CD automation in this immersive hands-on day workshop."
  },
  members: [
    {
      id: "mem-1",
      name: "Arav Sharma",
      role: "President",
      dept: "CCE Dept (Final Year)",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      bio: "Leads club vision, strategic department alignment, and industry partnerships."
    },
    {
      id: "mem-2",
      name: "Ananya Verma",
      role: "Vice President",
      dept: "CCE Dept (Pre-Final Year)",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
      bio: "Oversees event execution, student mentoring, and logistics management."
    },
    {
      id: "mem-3",
      name: "Rohan Mehta",
      role: "Secretary",
      dept: "CCE Dept (Pre-Final Year)",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Manages club communications, official university documentation, and outreach."
    },
    {
      id: "mem-4",
      name: "Devansh Gupta",
      role: "Tech Lead",
      dept: "CCE Dept (Pre-Final Year)",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      bio: "Architects open-source projects, competitive coding platforms, and technical workshops."
    },
    {
      id: "mem-5",
      name: "Ishita Kapoor",
      role: "Event Lead",
      dept: "CCE Dept (Pre-Final Year)",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      bio: "Coordinates venue arrangements, sponsor relations, and volunteer teams."
    },
    {
      id: "mem-6",
      name: "Kabir Malhotra",
      role: "Creative Lead",
      dept: "CCE Dept (2nd Year)",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
      bio: "Directs brand identity, UI/UX designs, motion graphics, and social media."
    }
  ]
};

// Events live in events-data.js (shared with the event pages) - never use a stale browser copy
function eventsFromDataFile(fallback) {
  if (typeof EVENTS === 'undefined') return fallback;
  return EVENTS.map(e => ({
    ...e,
    agenda: Array.isArray(e.agenda) ? e.agenda.map(a => `${a.when}: ${a.what}`).join('\n') : (e.agenda || '')
  }));
}

function loadSavedData() {
  let data;
  try {
    const raw = localStorage.getItem('techpulse_data');
    data = raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(INITIAL_DATA));
  } catch (err) {
    data = JSON.parse(JSON.stringify(INITIAL_DATA));
  }
  data.events = eventsFromDataFile(data.events);
  if (typeof UPCOMING !== 'undefined') data.upcoming = { ...UPCOMING, date: UPCOMING.start };
  return data;
}

let AppState = {
  isAdmin: false,
  data: loadSavedData(),
  activeFilter: 'All'
};

document.addEventListener('DOMContentLoaded', () => {
  // Each step runs on its own: if one fails, the rest of the page still works.
  const run = (fn) => {
    try { fn(); } catch (err) { console.error('[Techpulse] ' + (fn.name || 'init') + ' failed:', err); }
  };

  run(initPreloader);
  run(initNavbar);
  run(initJourney);
  run(initMobileMenu);
  run(measureHeroLayout);

  let lastW = window.innerWidth, lastH = window.innerHeight;
  window.addEventListener('resize', () => {
    const w = window.innerWidth, h = window.innerHeight;
    if (Math.abs(w - lastW) < 2 && Math.abs(h - lastH) < 150) return;
    lastW = w; lastH = h;
    run(measureHeroLayout);
  });
  window.addEventListener('orientationchange', () => setTimeout(() => run(measureHeroLayout), 250));
  window.addEventListener('load', () => run(measureHeroLayout));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => run(measureHeroLayout));

  run(initAbout);
  run(initEventRows);
  run(initSectionTransitions);
  run(initTechpulseRobot);
  run(initFilterTabs);
  run(renderEvents);
  run(renderUpcoming);
  run(initCountdown);
  run(initFaqAccordion);
  run(initScrollReveals);
  run(initStatCounters);
  run(initAdminToggle);
  run(initFabDrawer);
  run(initFormListeners);
});

// Preloader
function initPreloader() {
  const p = document.getElementById('preloader');
  const fill = document.getElementById('preloaderFill');
  let val = 0;
  const interval = setInterval(() => {
    val += Math.floor(Math.random() * 25) + 15;
    if (val >= 100) {
      val = 100;
      clearInterval(interval);
      setTimeout(() => { if (p) p.classList.add('hidden'); }, 300);
    }
    if (fill) fill.style.width = `${val}%`;
  }, 100);
}

// ----------------------------------------------------
// LIVE 3D TECHPULSE ROBOT (Three.js) + TALKING SCREEN
// ----------------------------------------------------
let robotScene, robotCamera, robotRenderer, robotRig;
let robotBaseGroup, robotHeadGroup, screenCanvas, screenCtx, screenTexture;
let targetHeadRotY = 0, targetHeadRotX = 0, mouseNX = 0, mouseNY = 0;

// Rounded box (Three r128 has no built-in RoundedBoxGeometry)
function roundedBoxGeo(w, h, d, r, bevel) {
  const ww = w - 2 * bevel, hh = h - 2 * bevel, rr = Math.max(r - bevel, 0.01);
  const x = -ww / 2, y = -hh / 2;
  const s = new THREE.Shape();
  s.moveTo(x + rr, y);
  s.lineTo(x + ww - rr, y);
  s.quadraticCurveTo(x + ww, y, x + ww, y + rr);
  s.lineTo(x + ww, y + hh - rr);
  s.quadraticCurveTo(x + ww, y + hh, x + ww - rr, y + hh);
  s.lineTo(x + rr, y + hh);
  s.quadraticCurveTo(x, y + hh, x, y + hh - rr);
  s.lineTo(x, y + rr);
  s.quadraticCurveTo(x, y, x + rr, y);
  const depth = d - 2 * bevel;
  const g = new THREE.ExtrudeGeometry(s, {
    depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel,
    bevelSegments: 5, curveSegments: 10
  });
  g.translate(0, 0, -depth / 2);
  return g;
}

// Rounded rectangle path helper
function drawRoundedRect(ctx, x, y, w, h, r) {
  const rad = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rad, y);
  ctx.lineTo(x + w - rad, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + rad);
  ctx.lineTo(x + w, y + h - rad);
  ctx.quadraticCurveTo(x + w, y + h, x + w - rad, y + h);
  ctx.lineTo(x + rad, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - rad);
  ctx.lineTo(x, y + rad);
  ctx.quadraticCurveTo(x, y, x + rad, y);
  ctx.closePath();
}

// ---- Talking screen: eyes, then info, in a loop ----
const SCREEN_SEQUENCE = [
  { type: 'eyes', duration: 5 },
  { type: 'text', lines: ['Hey! Welcome', 'to Techpulse'], arrow: false },
  { type: 'text', lines: ['I am TechPulse robot.', 'Scroll to get more info'], arrow: true }
];
const TYPE_SPEED = 20;   // characters per second
const HOLD_TIME = 2.6;   // seconds each message stays after typing

function createScreenTexture() {
  screenCanvas = document.createElement('canvas');
  screenCanvas.width = 1024;
  screenCanvas.height = 600;
  screenCtx = screenCanvas.getContext('2d');
  screenTexture = new THREE.CanvasTexture(screenCanvas);
  screenTexture.anisotropy = 4;
  updateScreen(0);
  return screenTexture;
}

function updateScreen(time) {
  if (!screenCtx) return;
  const ctx = screenCtx;
  const W = 1024, H = 600;
  ctx.clearRect(0, 0, W, H);
  ctx.globalAlpha = 1;

  // Dark glass panel
  ctx.fillStyle = '#05070B';
  drawRoundedRect(ctx, 0, 0, W, H, 90);
  ctx.fill();

  // Status row
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#ED3327';
  ctx.shadowColor = 'rgba(237, 51, 39, 0.9)';
  ctx.shadowBlur = 16;
  ctx.beginPath();
  ctx.arc(96, 86, 11, 0, Math.PI * 2);
  ctx.fill();
  ctx.shadowBlur = 0;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
  ctx.font = '600 30px "Space Grotesk", sans-serif';
  ctx.fillText('TECHPULSE AI', 128, 86);

  // Which step of the loop are we on?
  const durations = SCREEN_SEQUENCE.map(s =>
    s.type === 'eyes' ? s.duration : s.lines.join('').length / TYPE_SPEED + HOLD_TIME);
  const total = durations.reduce((a, b) => a + b, 0);
  let local = time % total;
  let idx = 0;
  while (local >= durations[idx]) { local -= durations[idx]; idx++; }
  const step = SCREEN_SEQUENCE[idx];

  // Soft fade in/out between steps
  ctx.globalAlpha = Math.max(0, Math.min(1, local / 0.3, (durations[idx] - local) / 0.25));

  if (step.type === 'eyes') {
    // Blinking red eyes that look toward the cursor
    const cycle = time % 3.4;
    const blink = cycle < 0.16 ? Math.sin((cycle / 0.16) * Math.PI) : 0;
    const eyeH = 132 * (1 - 0.93 * blink);
    const dx = mouseNX * 50;
    const dy = mouseNY * 22;

    ctx.fillStyle = '#ED3327';
    ctx.shadowColor = 'rgba(237, 51, 39, 0.95)';
    ctx.shadowBlur = 34;
    drawRoundedRect(ctx, 512 - 170 - 70 + dx, 335 + dy - eyeH / 2, 140, eyeH, 42);
    ctx.fill();
    drawRoundedRect(ctx, 512 + 170 - 70 + dx, 335 + dy - eyeH / 2, 140, eyeH, 42);
    ctx.fill();
    ctx.shadowBlur = 0;
  } else {
    // Typewriter text
    const total = step.lines.join('').length;
    const typed = Math.min(total, Math.floor(local * TYPE_SPEED));
    const typing = typed < total;

    const fontSize = step.lines.some(l => l.length > 16) ? 60 : 84;
    ctx.font = `700 ${fontSize}px "Space Grotesk", sans-serif`;
    ctx.textAlign = 'left';
    const lineH = fontSize * 1.28;
    const blockH = lineH * step.lines.length;
    let y = H / 2 + 24 - blockH / 2 + lineH / 2;
    let remaining = typed;
    let cursorX = 0, cursorY = y;

    step.lines.forEach((line, li) => {
      const before = remaining;
      const shown = line.slice(0, Math.max(0, Math.min(line.length, remaining)));
      remaining -= line.length;
      const x = (W - ctx.measureText(line).width) / 2;
      ctx.fillStyle = (li === 1 && !step.arrow) ? '#ED3327' : '#F4F5F7';
      ctx.fillText(shown, x, y);
      if (before > 0 || li === 0) {
        cursorX = x + ctx.measureText(shown).width;
        cursorY = y;
      }
      y += lineH;
    });

    if (typing || Math.floor(time * 2) % 2 === 0) {
      ctx.fillStyle = '#ED3327';
      ctx.fillRect(cursorX + 8, cursorY - fontSize * 0.42, 12, fontSize * 0.84);
    }

    if (step.arrow && !typing) {
      const bob = Math.sin(time * 5) * 8;
      ctx.strokeStyle = '#ED3327';
      ctx.lineWidth = 9;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.beginPath();
      ctx.moveTo(W - 150, H - 120 + bob);
      ctx.lineTo(W - 120, H - 90 + bob);
      ctx.lineTo(W - 90, H - 120 + bob);
      ctx.stroke();
    }
  }

  ctx.globalAlpha = 1;
  screenTexture.needsUpdate = true;
}

function makeGlowTexture(stops) {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  stops.forEach(([p, col]) => grad.addColorStop(p, col));
  g.fillStyle = grad;
  g.fillRect(0, 0, 256, 256);
  return new THREE.CanvasTexture(c);
}

// Portrait phones / tablets: measure the hero text and put the robot in the space below it
const HERO_LAYOUT = { y: -1.2, zFit: 0 };

function measureHeroLayout() {
  const copy = document.getElementById('heroCopy');
  const canvas = document.getElementById('robotViewport');
  if (!copy || !canvas) return;
  const vw = window.innerWidth, vh = window.innerHeight;
  if (vw / vh >= 1.15) { HERO_LAYOUT.y = 0; HERO_LAYOUT.zFit = 0; return; }

  const FOV = 38, tanHalf = Math.tan((FOV * Math.PI / 180) / 2);
  const stage = canvas.getBoundingClientRect();
  const copyBottom = copy.getBoundingClientRect().bottom - stage.top;
  const top = Math.min(copyBottom + 14, vh * 0.62);           // keep the robot at least ~38% of the screen
  const bottom = vh - 54;                                      // room for the scroll hint
  const availH = Math.max(bottom - top, vh * 0.3);

  // camera distance so the robot (~4.3 world units tall) fits the free band
  HERO_LAYOUT.zFit = 4.3 / (2 * tanHalf * (availH / vh));
  // shift the robot so its centre sits in the middle of that band
  const z = Math.max(8.2, HERO_LAYOUT.zFit);
  const unitsPerPx = (2 * z * tanHalf) / vh;
  const bandCentre = top + availH / 2;
  HERO_LAYOUT.y = -((bandCentre - vh / 2) * unitsPerPx) + 0.05;
}

function initTechpulseRobot() {
  const container = document.getElementById('robotViewport');
  if (!container || typeof THREE === 'undefined') return;

  const getSize = () => ({ w: container.clientWidth || 480, h: container.clientHeight || 520 });
  const init = getSize();
  const FOV = 38;

  // 1. Scene, camera, transparent renderer (page background shows through)
  robotScene = new THREE.Scene();
  robotCamera = new THREE.PerspectiveCamera(FOV, init.w / init.h, 0.1, 100);
  robotCamera.position.set(0, 1.3, 8.2);
  robotCamera.lookAt(0, -0.15, 0);

  robotRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  robotRenderer.setClearColor(0x000000, 0);
  robotRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  robotRenderer.setSize(init.w, init.h);
  container.appendChild(robotRenderer.domElement);

  // 2. Robot
  robotRig = new THREE.Group();
  robotScene.add(robotRig);
  robotBaseGroup = new THREE.Group();
  robotRig.add(robotBaseGroup);

  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x1B1E25, roughness: 0.42, metalness: 0.3 });
  const headMat = new THREE.MeshStandardMaterial({ color: 0x20232B, roughness: 0.38, metalness: 0.3 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x2A2E38, roughness: 0.35, metalness: 0.5 });

  // Body
  const body = new THREE.Mesh(roundedBoxGeo(2.5, 1.8, 1.6, 0.34, 0.09), bodyMat);
  body.position.y = -0.9;
  robotBaseGroup.add(body);

  // Neck
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.44, 0.5, 32), darkMat);
  neck.position.y = 0.12;
  robotBaseGroup.add(neck);

  // Head (swivels on the neck)
  robotHeadGroup = new THREE.Group();
  robotHeadGroup.position.y = 0.4;
  robotBaseGroup.add(robotHeadGroup);

  const headFrame = new THREE.Mesh(roundedBoxGeo(2.7, 1.65, 1.2, 0.34, 0.09), headMat);
  headFrame.position.y = 0.82;
  robotHeadGroup.add(headFrame);

  const cap = new THREE.Mesh(roundedBoxGeo(2.85, 0.22, 1.35, 0.1, 0.05), headMat);
  cap.position.set(0, 1.74, 0.05);
  robotHeadGroup.add(cap);

  // Side camera lens
  const lensHolder = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.3, 32), new THREE.MeshStandardMaterial({ color: 0x15181F, metalness: 0.5, roughness: 0.25 }));
  lensHolder.rotation.z = Math.PI / 2;
  lensHolder.position.set(-1.45, 0.82, 0);
  robotHeadGroup.add(lensHolder);

  const lensGlass = new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.29, 0.32, 32), new THREE.MeshStandardMaterial({ color: 0x2B3A5C, metalness: 0.4, roughness: 0.08 }));
  lensGlass.rotation.z = Math.PI / 2;
  lensGlass.position.set(-1.5, 0.82, 0);
  robotHeadGroup.add(lensGlass);

  // Screen face (live canvas texture)
  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(2.35, 1.38),
    new THREE.MeshBasicMaterial({ map: createScreenTexture(), transparent: true })
  );
  screen.position.set(0, 0.82, 0.62);
  robotHeadGroup.add(screen);

  // 3. Lights
  robotScene.add(new THREE.AmbientLight(0xFFFFFF, 1.15));
  const key = new THREE.DirectionalLight(0xFFFFFF, 1.8);
  key.position.set(4, 6, 5);
  robotScene.add(key);
  const fill = new THREE.DirectionalLight(0xE5E7EB, 0.8);
  fill.position.set(-4, 3, -3);
  robotScene.add(fill);
  const rim = new THREE.DirectionalLight(0xFFFFFF, 1.2);
  rim.position.set(0, 4, -6);
  robotScene.add(rim);

  // Golden light under the robot (energy being absorbed)
  const goldLight = new THREE.PointLight(0xFFB300, 0.6, 8);
  goldLight.position.set(0, -1.7, 1.2);
  robotRig.add(goldLight);

  // 4. Dim golden glow on the floor
  const FLOOR_Y = -2.15;
  const padTex = makeGlowTexture([
    [0, 'rgba(255, 214, 64, 0.95)'], [0.35, 'rgba(255, 180, 0, 0.5)'],
    [0.7, 'rgba(255, 170, 0, 0.14)'], [1, 'rgba(255, 170, 0, 0)']
  ]);
  const coreTex = makeGlowTexture([
    [0, 'rgba(255, 250, 215, 1)'], [0.4, 'rgba(255, 215, 70, 0.7)'], [1, 'rgba(255, 190, 0, 0)']
  ]);
  const padMat = new THREE.MeshBasicMaterial({ map: padTex, transparent: true, depthWrite: false });
  const pad = new THREE.Mesh(new THREE.PlaneGeometry(6.2, 6.2), padMat);
  pad.rotation.x = -Math.PI / 2;
  pad.position.y = FLOOR_Y;
  pad.renderOrder = -2;
  robotRig.add(pad);

  const coreMat = new THREE.MeshBasicMaterial({ map: coreTex, transparent: true, depthWrite: false });
  const core = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 2.8), coreMat);
  core.rotation.x = -Math.PI / 2;
  core.position.y = FLOOR_Y + 0.01;
  core.renderOrder = -1;
  robotRig.add(core);

  // 6. Cursor tracking (head + eyes follow the mouse, anywhere on the page)
  window.addEventListener('pointermove', (e) => {
    mouseNX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseNY = (e.clientY / window.innerHeight) * 2 - 1;
    targetHeadRotY = mouseNX * 0.75;
    targetHeadRotX = mouseNY * 0.4;
  });

  // 7. Resize (window + container, so it is never stuck at 0px)
  function resizeRobot() {
    const w = container.clientWidth, h = container.clientHeight;
    if (!w || !h) return;
    robotRenderer.setSize(w, h);
    robotCamera.aspect = w / h;
    robotCamera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resizeRobot);
  if (window.ResizeObserver) new ResizeObserver(resizeRobot).observe(container);

  // 8. Render loop
  const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
  const P1 = new THREE.Vector3(), P2 = new THREE.Vector3(0, 1.22, 0.9);
  const L1 = new THREE.Vector3(0, 1.2, 0.5), L2 = new THREE.Vector3(0, 1.22, 0);
  const clock = new THREE.Clock();
  function animateRobot() {
    requestAnimationFrame(animateRobot);
    const t = clock.getElapsedTime();

    // Journey progress (0 hero -> 1 inside). Cursor tracking fades out as we get close.
    const e1 = JOURNEY.e1, e2 = JOURNEY.e2;
    const track = 1 - e1;

    robotHeadGroup.rotation.y += (targetHeadRotY * track - robotHeadGroup.rotation.y) * 0.08;
    robotHeadGroup.rotation.x += (targetHeadRotX * track - robotHeadGroup.rotation.x) * 0.08;
    robotBaseGroup.rotation.y += (targetHeadRotY * 0.22 * track - robotBaseGroup.rotation.y) * 0.05;

    // Levitation (calms down as the camera gets close)
    robotBaseGroup.position.y = Math.sin(t * 1.8) * 0.11 * (1 - 0.6 * e1) * (1 - e2);

    // Camera path: hero -> close-up of the head -> through the screen
    const aspect = robotCamera.aspect;
    const tanHalf = Math.tan((FOV * Math.PI / 180) / 2);
    const fit = (width) => width / (2 * tanHalf * aspect);
    const wide = aspect >= 1.15;
    const zStart = wide ? Math.max(8.2, fit(7.2)) : Math.max(8.2, fit(4.6), HERO_LAYOUT.zFit);
    const zClose = wide ? 4.2 : Math.max(4.2, fit(3.7) + 0.6);
    const heroX = wide ? 0.24 * (2 * zStart * tanHalf * aspect) : 0;
    const heroY = wide ? 0 : HERO_LAYOUT.y;

    robotRig.position.set(heroX * (1 - e1), heroY * (1 - e1), 0);
    camPos.set(0, 1.3, zStart).lerp(P1.set(0, 1.3, zClose), e1).lerp(P2, e2);
    camLook.set(0, -0.15, 0).lerp(L1, e1).lerp(L2, e2);
    robotCamera.position.copy(camPos);
    robotCamera.lookAt(camLook);

    // Energy pulse
    const pulse = 0.5 + 0.5 * Math.sin(t * 2.6);
    padMat.opacity = 0.32 + 0.1 * pulse;
    coreMat.opacity = 0.22 + 0.1 * (1 - pulse);
    pad.scale.setScalar(0.98 + 0.04 * pulse);
    goldLight.intensity = 0.45 + 0.25 * pulse;

    // Only draw while the stage is on screen
    const rect = container.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      updateScreen(t);
      robotRenderer.render(robotScene, robotCamera);
    }
  }
  animateRobot();
}

// ----------------------------------------------------
// SCROLL JOURNEY: hero -> close-up -> inside the robot
// ----------------------------------------------------
const JOURNEY = { target: 0, p: 0, e1: 0, e2: 0 };

function smoothstep(a, b, x) {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
}

function initJourney() {
  const journey = document.getElementById('journey');
  const copy = document.getElementById('heroCopy');
  const overlay = document.getElementById('enterOverlay');
  const label = document.getElementById('enterLabel');
  const hint = document.getElementById('scrollHint');
  const hintText = document.getElementById('scrollHintText');
  if (!journey) return;

  function readScroll() {
    const range = journey.offsetHeight - window.innerHeight;
    const scrolled = -journey.getBoundingClientRect().top;
    JOURNEY.target = range > 0 ? Math.min(1, Math.max(0, scrolled / range)) : 1;
  }
  window.addEventListener('scroll', readScroll, { passive: true });
  window.addEventListener('resize', readScroll);
  readScroll();
  JOURNEY.p = JOURNEY.target;

  function tick() {
    requestAnimationFrame(tick);

    JOURNEY.p += (JOURNEY.target - JOURNEY.p) * 0.09;
    if (Math.abs(JOURNEY.target - JOURNEY.p) < 0.0004) JOURNEY.p = JOURNEY.target;
    const p = JOURNEY.p;

    // Stage 1: close-up   Stage 2: step inside
    JOURNEY.e1 = smoothstep(0.0, 0.38, p);
    JOURNEY.e2 = smoothstep(0.52, 0.9, p);

    // Hero copy fades and slides away on the first scroll
    const copyFade = 1 - smoothstep(0, 0.16, p);
    copy.style.opacity = copyFade.toFixed(3);
    copy.style.transform = `translate3d(${(-70 * (1 - copyFade)).toFixed(1)}px, 0, 0)`;
    copy.style.pointerEvents = copyFade < 0.15 ? 'none' : 'auto';

    // Dark interior fades in once the screen fills the view
    const ov = smoothstep(0.55, 0.95, JOURNEY.e2);
    overlay.style.opacity = ov.toFixed(3);
    label.style.opacity = smoothstep(0.85, 1, JOURNEY.e2).toFixed(3);

    // Scroll hint
    hintText.textContent = p < 0.12 ? 'Scroll to get closer' : 'Scroll again to enter the robot';
    hint.style.opacity = (1 - smoothstep(0.55, 0.7, p)).toFixed(3);

    // Switch the whole page to the dark "inside" theme once covered
    const stageLeaving = journey.getBoundingClientRect().bottom <= window.innerHeight + 1;
    document.documentElement.classList.toggle('inside', ov > 0.5 || stageLeaving);
  }
  tick();
}

// ----------------------------------------------------
// ABOUT SECTION: split-text heading, rise-ins, spotlight + tilt
// ----------------------------------------------------
function splitTextNode(node, counter) {
  if (node.nodeType === 3) {
    const frag = document.createDocumentFragment();
    node.textContent.split(/(\s+)/).forEach(part => {
      if (!part) return;
      if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
      const word = document.createElement('span');
      word.className = 'word';
      [...part].forEach(ch => {
        const c = document.createElement('span');
        c.className = 'char';
        c.textContent = ch;
        c.style.setProperty('--i', counter.n++);
        word.appendChild(c);
      });
      frag.appendChild(word);
    });
    node.replaceWith(frag);
  } else if (node.nodeType === 1) {
    [...node.childNodes].forEach(n => splitTextNode(n, counter));
  }
}

function initAbout() {
  document.querySelectorAll('[data-split]').forEach(el => {
    el.setAttribute('aria-label', el.textContent.trim());
    splitTextNode(el, { n: 0 });
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add(entry.target.classList.contains('split') ? 'revealed' : 'in');
      io.unobserve(entry.target);
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.split, .rise').forEach(el => io.observe(el));

  // Cursor spotlight on the mission card
  const mission = document.getElementById('missionCard');
  if (mission) {
    mission.addEventListener('pointermove', (e) => {
      const r = mission.getBoundingClientRect();
      mission.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      mission.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  }

  // 3D tilt on pillar cards
  document.querySelectorAll('.pillar-card').forEach(card => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty('--ry', (x * 7).toFixed(2) + 'deg');
      card.style.setProperty('--rx', (-y * 7).toFixed(2) + 'deg');
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
}

// Scroll reveals (single shared observer)
let revealObserver = null;
function initScrollReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll('.reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed), .zoom-in:not(.revealed)')
    .forEach(el => revealObserver.observe(el));
}

// Animated stat counters
function initStatCounters() {
  const stats = document.querySelectorAll('.stat-val');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        if (!target) return;
        let start = 0;
        const duration = 1500;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) {
            el.innerText = (target % 1 === 0 ? target : target.toFixed(1)) + suffix;
            clearInterval(timer);
          } else {
            el.innerText = (target % 1 === 0 ? Math.floor(start) : start.toFixed(1)) + suffix;
          }
        }, 16);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  stats.forEach(s => observer.observe(s));
}

// Filter tabs: listeners attached ONCE (not on every render)
function initFilterTabs() {
  const filterBtns = document.querySelectorAll('.tab-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      AppState.activeFilter = btn.getAttribute('data-filter');
      renderEvents();
    });
  });
}

// Render events as a printed-programme list
function renderEvents() {
  const container = document.getElementById('eventsGrid');
  if (!container) return;

  const all = AppState.data.events;
  const events = all.filter(e =>
    AppState.activeFilter === 'All' || e.category.toLowerCase() === AppState.activeFilter.toLowerCase()
  );

  container.innerHTML = events.map(evt => {
    const no = String(all.indexOf(evt) + 1).padStart(2, '0');
    const [main, ...rest] = evt.title.split(' - ');
    const sub = rest.join(' - ');
    return `
    <a class="ev-row reveal" href="event.html?e=${encodeURIComponent(evt.slug || evt.id)}" data-id="${evt.id}" data-img="${evt.image}" aria-label="${evt.title} - open event page">
      <span class="ev-no">${no}</span>
      <span class="ev-date">${evt.date}</span>
      <div class="ev-main">
        <h3 class="ev-name">${main}</h3>
        ${sub ? `<span class="ev-sub">${sub}</span>` : ''}
        <p class="ev-desc">${evt.description}</p>
      </div>
      <div class="ev-meta">
        <span class="ev-venue">${evt.venue}</span>
        <span class="ev-cat">${evt.category}</span>
      </div>
      <span class="ev-go">${evt.attendees}+ attended <i>&nearr;</i></span>
      <img class="ev-thumb" src="${evt.image}" alt="" loading="lazy" />
    </a>`;
  }).join('');

  initScrollReveals();
}

// Hover-photo for the events list (rows are real links to event.html)
function initEventRows() {
  const list = document.getElementById('eventsGrid');
  if (!list) return;

  if (!window.matchMedia('(hover: hover)').matches) return;

  const preview = document.createElement('div');
  preview.className = 'ev-preview';
  preview.innerHTML = '<img alt="">';
  document.body.appendChild(preview);
  const img = preview.firstElementChild;

  let tx = 0, ty = 0, x = 0, y = 0, s = 0.85, ts = 0.85, on = false, raf = null;
  function loop() {
    x += (tx - x) * 0.16;
    y += (ty - y) * 0.16;
    s += (ts - s) * 0.18;
    preview.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) rotate(-4deg) scale(${s.toFixed(3)})`;
    raf = (on || Math.abs(ts - s) > 0.002) ? requestAnimationFrame(loop) : null;
  }

  list.addEventListener('mouseover', (e) => {
    const row = e.target.closest('.ev-row');
    if (!row) return;
    if (img.getAttribute('src') !== row.dataset.img) img.src = row.dataset.img;
    if (!on) { tx = x = e.clientX + 190; ty = y = e.clientY - 10; }
    on = true;
    ts = 1;
    preview.classList.add('show');
    if (!raf) raf = requestAnimationFrame(loop);
  });
  list.addEventListener('mousemove', (e) => { tx = e.clientX + 190; ty = e.clientY - 10; });
  list.addEventListener('mouseleave', () => {
    on = false;
    ts = 0.85;
    preview.classList.remove('show');
  });
}

// ----------------------------------------------------
// SECTION TRANSITIONS: scroll-linked heartbeat + popping circle
// ----------------------------------------------------
function initSectionTransitions() {
  const clamp01 = (v) => Math.min(1, Math.max(0, v));
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);
  const items = [...document.querySelectorAll('.sx')].map(el => {
    const path = el.querySelector('.sx-ecg path');
    return { el, path, dot: el.querySelector('.sx-dot'), len: path.getTotalLength() };
  });
  if (!items.length) return;

  function update() {
    const vh = window.innerHeight;
    items.forEach(it => {
      const r = it.el.getBoundingClientRect();
      if (r.bottom < -60 || r.top > vh + 60) return;
      const range = Math.max(1, r.height - vh);
      const p = clamp01(-r.top / range);

      // 1) the heartbeat line draws across (first ~45% of the scroll)
      const draw = clamp01(p / 0.45);
      it.path.style.strokeDashoffset = ((1 - draw) * 100).toFixed(2);
      const pt = it.path.getPointAtLength(it.len * draw);
      it.dot.style.left = (pt.x / 1600 * 100).toFixed(2) + '%';
      it.dot.style.top = (pt.y / 240 * 100).toFixed(2) + '%';
      it.dot.style.opacity = (draw > 0.01 && draw < 0.98) ? 1 : 0;

      // 2) from the spike, a circle pops open and becomes the next section
      const iris = easeOut(clamp01((p - 0.2) / 0.5));
      it.el.style.setProperty('--iris', iris.toFixed(4));
    });
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { update(); ticking = false; });
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
}

// Render upcoming event
function renderUpcoming() {
  const container = document.getElementById('upcomingContainer');
  if (!container) return;
  const up = AppState.data.upcoming;
  if (!up || !up.registerUrl) return;

  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const [d1, d2] = up.days;
  const whenText = `${d1} \u2013 ${d2} ${up.month} ${up.year}`;

  container.innerHTML = `
    <article class="up-poster reveal">
      <div class="up-bar">
        <span>${esc(up.festival)}<i></i>${esc(up.category)} event</span>
        <span>${esc(up.campus)}</span>
      </div>

      <div class="up-dates" role="img" aria-label="${esc(whenText)}">
        <span class="up-d1">${esc(d1)}</span>
        <span class="up-dash"></span>
        <span class="up-d2">${esc(d2)}</span>
        <span class="up-month">${esc(up.month)}<br>${esc(up.year)}</span>
      </div>

      <div class="up-grid">
        <div class="up-info">
          <h3 class="up-title">${esc(up.title)}<em>${esc(up.subtitle)}</em></h3>
          <dl class="up-facts">
            <div><dt>When</dt><dd>${esc(whenText)}</dd></div>
            <div><dt>Where</dt><dd>${esc(up.venue)}<span>${esc(up.campus)}</span></dd></div>
            <div><dt>Track</dt><dd>${esc(up.category)}</dd></div>
            <div><dt>Registration</dt><dd>Coordinated by TechPulse<span>Hosted on the official Saviskar portal</span></dd></div>
          </dl>
        </div>

        <div class="up-act">
          <a class="up-cta" id="upRegister" href="${esc(up.registerUrl)}" target="_blank" rel="noopener" aria-label="Register for ${esc(up.title)} ${esc(up.subtitle)} on the Saviskar website (opens in a new tab)">
            <svg viewBox="0 0 160 160" aria-hidden="true">
              <circle class="up-cta-bg" cx="80" cy="80" r="78" />
              <defs><path id="upRingPath" d="M80,80 m-57,0 a57,57 0 1,1 114,0 a57,57 0 1,1 -114,0" /></defs>
              <g class="up-ring"><text><textPath href="#upRingPath" textLength="352" lengthAdjust="spacing">REGISTER NOW &#183; REGISTER NOW &#183; REGISTER NOW &#183; </textPath></text></g>
              <path class="up-arrow" d="M62,98 L98,62 M68,62 H98 V92" />
            </svg>
          </a>
          <a class="up-link" href="${esc(up.eventUrl)}" target="_blank" rel="noopener">Read the event details &nearr;</a>

          <div class="up-count" id="upCount">
            <span class="up-count-label" id="upLabel">Starts in</span>
            <div class="up-count-nums">
              <span><b id="cd-days">00</b><small>days</small></span>
              <span><b id="cd-hours">00</b><small>hrs</small></span>
              <span><b id="cd-mins">00</b><small>min</small></span>
              <span><b id="cd-secs">00</b><small>sec</small></span>
            </div>
          </div>
        </div>
      </div>
    </article>
  `;

  initScrollReveals();
  updateCountdown();
}

// Countdown to the start; switches to "Happening now" and then "ended"
function updateCountdown() {
  const up = AppState.data.upcoming;
  if (!up) return;
  const now = Date.now();
  const start = new Date(up.start || up.date).getTime();
  const end = new Date(up.end || up.start || up.date).getTime();

  const box = document.getElementById('upCount');
  const label = document.getElementById('upLabel');

  if (now >= start) {
    const live = now <= end;
    if (box) { box.classList.toggle('live', live); box.classList.toggle('done', !live); }
    if (label) label.textContent = live ? 'Happening now' : 'This event has ended';
    return;
  }
  if (box) box.classList.remove('live', 'done');
  if (label) label.textContent = 'Starts in';

  const diff = start - now;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = String(v).padStart(2, '0'); };
  set('cd-days', d); set('cd-hours', h); set('cd-mins', m); set('cd-secs', s);
}

function initCountdown() {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

// ----------------------------------------------------
// MOBILE MENU
// ----------------------------------------------------
function closeMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('navToggle');
  if (!menu || !btn) return;
  menu.classList.remove('open');
  btn.classList.remove('open');
  btn.setAttribute('aria-expanded', 'false');
  btn.setAttribute('aria-label', 'Open menu');
  menu.setAttribute('aria-hidden', 'true');
  document.documentElement.classList.remove('menu-open');
}

function initMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  const btn = document.getElementById('navToggle');
  if (!menu || !btn) return;

  btn.addEventListener('click', () => {
    const open = !menu.classList.contains('open');
    menu.classList.toggle('open', open);
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.setAttribute('aria-hidden', String(!open));
    document.documentElement.classList.toggle('menu-open', open);
  });

  menu.querySelectorAll('.mm-link').forEach(a => a.addEventListener('click', closeMobileMenu));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMobileMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 960) closeMobileMenu(); });
}

// Navbar scroll state
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll);
  onScroll();
}

// FAQ accordion
function initFaqAccordion() {
  const cards = document.querySelectorAll('.faq-box');
  cards.forEach(c => {
    const title = c.querySelector('.faq-question');
    title.addEventListener('click', () => {
      const active = c.classList.contains('active');
      cards.forEach(item => item.classList.remove('active'));
      if (!active) c.classList.add('active');
    });
  });
}

// FAB & quick drawer
function initFabDrawer() {
  const fab = document.getElementById('fabBtn');
  const drawer = document.getElementById('quickDrawer');
  if (fab && drawer) {
    fab.addEventListener('click', () => {
      drawer.classList.toggle('active');
    });
  }
}

// Admin toggle
function initAdminToggle() {
  const btn = document.getElementById('adminToggleBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      AppState.isAdmin = !AppState.isAdmin;
      btn.classList.toggle('active', AppState.isAdmin);
      btn.innerHTML = AppState.isAdmin ? 'Admin Mode ON' : 'Admin Mode';
      showToast(AppState.isAdmin ? "Admin Edit Mode Enabled" : "Admin Mode Disabled");
      renderEvents();
      renderUpcoming();
    });
  }
}

function saveData() {
  try {
    localStorage.setItem('techpulse_data', JSON.stringify(AppState.data));
  } catch (err) {
    console.warn('Could not save to localStorage:', err);
  }
  renderEvents();
  renderUpcoming();
}

function openModal(contentHtml) {
  const backdrop = document.getElementById('modalBackdrop');
  const body = document.getElementById('modalBody');
  body.innerHTML = contentHtml;
  backdrop.classList.add('active');
}

function closeModal() {
  document.getElementById('modalBackdrop').classList.remove('active');
}

// Confetti burst
function triggerConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ['#ED3327', '#080808', '#1A56DB', '#707070'];

  for (let i = 0; i < 70; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.7) * 14,
      size: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 8
    });
  }

  let duration = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.rotation += p.rSpeed;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    });

    duration++;
    if (duration < 110) requestAnimationFrame(animate);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  animate();
}

// Event detail modal
function openEventModal(id) {
  const evt = AppState.data.events.find(e => e.id === id);
  if (!evt) return;

  const content = `
    <div>
      <span class="eyebrow" style="margin-bottom: 12px;">${evt.category}</span>
      <h2 style="font-size: 1.8rem; margin-bottom: 12px;">${evt.title}</h2>
      <div style="font-family: var(--font-mono); font-size: 12px; color: var(--text-muted); margin-bottom: 18px;">
        ${evt.date} • ${evt.venue} • ${evt.attendees}+ Attendees
      </div>
      <img src="${evt.image}" alt="${evt.title}" style="width: 100%; height: 260px; object-fit: cover; border-radius: var(--radius-sm); margin-bottom: 20px;" />

      <h4 style="margin-bottom: 8px;">Case Study Overview</h4>
      <p style="color: var(--text-secondary); margin-bottom: 18px;">${evt.description}</p>

      <h4 style="margin-bottom: 10px;">Highlights</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 6px; margin-bottom: 20px;">
        ${evt.highlights.map(h => `<li style="font-size: 14px; color: var(--text-secondary);">&bull; ${h}</li>`).join('')}
      </ul>

      <h4 style="margin-bottom: 8px;">Agenda</h4>
      <pre style="background: var(--bg-primary); padding: 14px; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 12px; color: var(--text-primary); white-space: pre-wrap;">${evt.agenda}</pre>
    </div>
  `;
  openModal(content);
}

// Edit event modal
function openEditEventModal(id) {
  const evt = AppState.data.events.find(e => e.id === id);
  if (!evt) return;

  const content = `
    <h2>Edit Event Details</h2>
    <form id="editEventForm" style="margin-top: 18px;">
      <div class="form-field">
        <label class="field-label">Event Title</label>
        <input type="text" class="field-input" id="evTitle" value="${evt.title}" required />
      </div>
      <div class="form-field">
        <label class="field-label">Category</label>
        <select class="field-select" id="evCat">
          <option value="Hackathon" ${evt.category==='Hackathon'?'selected':''}>Hackathon</option>
          <option value="Workshop" ${evt.category==='Workshop'?'selected':''}>Workshop</option>
          <option value="Coding" ${evt.category==='Coding'?'selected':''}>Coding</option>
          <option value="Seminar" ${evt.category==='Seminar'?'selected':''}>Seminar</option>
        </select>
      </div>
      <div class="form-field">
        <label class="field-label">Date</label>
        <input type="text" class="field-input" id="evDate" value="${evt.date}" required />
      </div>
      <div class="form-field">
        <label class="field-label">Venue</label>
        <input type="text" class="field-input" id="evVenue" value="${evt.venue}" required />
      </div>
      <div class="form-field">
        <label class="field-label">Cover Image URL</label>
        <input type="text" class="field-input" id="evImg" value="${evt.image}" required />
      </div>
      <div class="form-field">
        <label class="field-label">Description</label>
        <textarea class="field-textarea" id="evDesc" rows="3" required>${evt.description}</textarea>
      </div>
      <button type="submit" class="btn" style="width: 100%;">Save Event</button>
    </form>
  `;
  openModal(content);

  document.getElementById('editEventForm').addEventListener('submit', (e) => {
    e.preventDefault();
    evt.title = document.getElementById('evTitle').value;
    evt.category = document.getElementById('evCat').value;
    evt.date = document.getElementById('evDate').value;
    evt.venue = document.getElementById('evVenue').value;
    evt.image = document.getElementById('evImg').value;
    evt.description = document.getElementById('evDesc').value;

    saveData();
    closeModal();
    showToast("Event saved");
  });
}

// Edit upcoming event modal (was referenced by the Admin button but missing)
function openEditUpcomingModal() {
  const up = AppState.data.upcoming;

  const content = `
    <h2>Edit Upcoming Event</h2>
    <form id="editUpcomingForm" style="margin-top: 18px;">
      <div class="form-field">
        <label class="field-label">Title</label>
        <input type="text" class="field-input" id="upTitle" value="${up.title}" required />
      </div>
      <div class="form-field">
        <label class="field-label">Date & Time</label>
        <input type="datetime-local" class="field-input" id="upDate" value="${up.date.slice(0, 16)}" required />
      </div>
      <div class="form-field">
        <label class="field-label">Venue</label>
        <input type="text" class="field-input" id="upVenue" value="${up.venue}" required />
      </div>
      <div class="form-field">
        <label class="field-label">Speaker</label>
        <input type="text" class="field-input" id="upSpeaker" value="${up.speaker}" required />
      </div>
      <div class="form-field">
        <label class="field-label">Seats Left</label>
        <input type="number" min="0" class="field-input" id="upSeats" value="${up.seatsLeft}" required />
      </div>
      <div class="form-field">
        <label class="field-label">Total Seats</label>
        <input type="number" min="1" class="field-input" id="upTotal" value="${up.totalSeats}" required />
      </div>
      <div class="form-field">
        <label class="field-label">Description</label>
        <textarea class="field-textarea" id="upDesc" rows="3" required>${up.description}</textarea>
      </div>
      <button type="submit" class="btn" style="width: 100%;">Save Upcoming Event</button>
    </form>
  `;
  openModal(content);

  document.getElementById('editUpcomingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    up.title = document.getElementById('upTitle').value;
    up.date = document.getElementById('upDate').value;
    up.venue = document.getElementById('upVenue').value;
    up.speaker = document.getElementById('upSpeaker').value;
    up.seatsLeft = parseInt(document.getElementById('upSeats').value, 10) || 0;
    up.totalSeats = parseInt(document.getElementById('upTotal').value, 10) || 1;
    up.description = document.getElementById('upDesc').value;

    saveData();
    closeModal();
    showToast("Upcoming event saved");
  });
}

// Edit member modal
function openEditMemberModal(id) {
  const m = AppState.data.members.find(mem => mem.id === id);
  if (!m) return;

  const content = `
    <h2>Edit Member Info</h2>
    <form id="editMemberForm" style="margin-top: 18px;">
      <div class="form-field">
        <label class="field-label">Full Name</label>
        <input type="text" class="field-input" id="memName" value="${m.name}" required />
      </div>
      <div class="form-field">
        <label class="field-label">Role</label>
        <input type="text" class="field-input" id="memRole" value="${m.role}" required />
      </div>
      <div class="form-field">
        <label class="field-label">Department / Year</label>
        <input type="text" class="field-input" id="memDept" value="${m.dept}" required />
      </div>
      <div class="form-field">
        <label class="field-label">Avatar Image URL</label>
        <input type="text" class="field-input" id="memImg" value="${m.image}" required />
      </div>
      <div class="form-field">
        <label class="field-label">Bio</label>
        <textarea class="field-textarea" id="memBio" rows="3" required>${m.bio}</textarea>
      </div>
      <button type="submit" class="btn" style="width: 100%;">Save Member</button>
    </form>
  `;
  openModal(content);

  document.getElementById('editMemberForm').addEventListener('submit', (e) => {
    e.preventDefault();
    m.name = document.getElementById('memName').value;
    m.role = document.getElementById('memRole').value;
    m.dept = document.getElementById('memDept').value;
    m.image = document.getElementById('memImg').value;
    m.bio = document.getElementById('memBio').value;

    saveData();
    closeModal();
    showToast("Member saved");
  });
}

// RSVP modal
function openRsvpModal() {
  const up = AppState.data.upcoming;
  const content = `
    <h2>Reserve Pass</h2>
    <p style="color: var(--text-secondary); margin-bottom: 18px;">Event: <strong>${up.title}</strong></p>
    <form id="rsvpForm">
      <div class="form-field">
        <label class="field-label">Full Name</label>
        <input type="text" class="field-input" placeholder="e.g. Rahul Sharma" required />
      </div>
      <div class="form-field">
        <label class="field-label">Roll Number</label>
        <input type="text" class="field-input" placeholder="e.g. 23CCE104" required />
      </div>
      <div class="form-field">
        <label class="field-label">University Email</label>
        <input type="email" class="field-input" placeholder="student@cgc.edu.in" required />
      </div>
      <button type="submit" class="btn btn-red" style="width: 100%;">Confirm Pass</button>
    </form>
  `;
  openModal(content);

  document.getElementById('rsvpForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (up.seatsLeft > 0) up.seatsLeft -= 1;
    saveData();
    closeModal();
    triggerConfetti();
    showToast("Pass Reserved");
  });
}

// Join club modal
function openJoinModal() {
  const content = `
    <h2>Join Techpulse</h2>
    <p style="color: var(--text-secondary); margin-bottom: 18px;">CCE Department • CGC University</p>
    <form id="joinForm">
      <div class="form-field">
        <label class="field-label">Full Name</label>
        <input type="text" class="field-input" placeholder="Your Name" required />
      </div>
      <div class="form-field">
        <label class="field-label">Department & Semester</label>
        <input type="text" class="field-input" placeholder="e.g. CCE - 4th Sem" required />
      </div>
      <div class="form-field">
        <label class="field-label">Domain of Interest</label>
        <select class="field-select" required>
          <option value="Web Development">Web & App Development</option>
          <option value="AI & ML">AI / ML & Data Science</option>
          <option value="Cybersecurity">Cybersecurity & Ethical Hacking</option>
          <option value="Events & PR">Event Operations & PR</option>
        </select>
      </div>
      <button type="submit" class="btn btn-red" style="width: 100%;">Submit Application</button>
    </form>
  `;
  openModal(content);

  document.getElementById('joinForm').addEventListener('submit', (e) => {
    e.preventDefault();
    closeModal();
    triggerConfetti();
    showToast("Application Submitted");
  });
}

function initFormListeners() {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      contactForm.reset();
      triggerConfetti();
      showToast("Message Sent to CCE Team");
    });
  }

  // Close modal when clicking the dark backdrop or pressing Escape
  const backdrop = document.getElementById('modalBackdrop');
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function showToast(msg) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const t = document.createElement('div');
  t.className = 'toast-msg';
  t.innerText = msg;
  container.appendChild(t);
  setTimeout(() => t.remove(), 3500);
}

function resetToDefaults() {
  if (confirm("Reset all custom edits back to defaults?")) {
    AppState.data = JSON.parse(JSON.stringify(INITIAL_DATA));
    saveData();
    showToast("Restored original data");
  }
}