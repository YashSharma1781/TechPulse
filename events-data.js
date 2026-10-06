/* ----------------------------------------------------
   TECHPULSE EVENTS  -  edit this file to update every event page
   ----------------------------------------------------
   Each event here appears (1) as a row in the Events list on the home
   page and (2) as its own landing page:  event.html?e=<slug>

   WHAT YOU CAN ADD TO EACH EVENT  (every part is optional - a section
   only shows on the page if you fill it in):

     overview   [ 'paragraph', 'paragraph' ]        the write-up
     stats      [ { value: '210+', label: 'Attendees' } ]
     highlights [ 'text', 'text' ]
     agenda     [ { when: 'Day 1', what: 'Opening' } ]
     gallery    [ 'images/events/my-event/1.jpg',
                  { src: 'images/events/my-event/2.jpg', caption: 'Winners' } ]
     videos     [ { youtube: 'VIDEO_ID_OR_FULL_URL', title: 'Aftermovie' },
                  { vimeo:   '123456789',            title: 'Recap' },
                  { src: 'videos/my-event.mp4', poster: 'images/events/my-event/cover.jpg', title: 'Highlights' } ]
     speakers   [ { name: 'Name', role: 'Role', photo: 'images/events/my-event/name.jpg' } ]
     results    [ { place: '1st', name: 'Team name', detail: 'Project' } ]
     links      [ { label: 'Certificates', url: 'https://...' } ]

   WHERE TO PUT FILES (create the folders next to index.html):
     images/events/<slug>/...      photos
     videos/...                    video files (mp4). Big videos are better on YouTube.

   `image` is the photo used on the home-page list and as the page banner.
   Use `cover` if you want a different, wider banner for the event page.
---------------------------------------------------- */

// SAMPLE photos so the gallery layout is visible - replace with your own.
const SAMPLE_PHOTOS = [
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80'
];
const samplePhotos = (start) => [0, 1, 2, 3, 4].map(i => SAMPLE_PHOTOS[(start + i) % SAMPLE_PHOTOS.length]);

const EVENTS = [
  {
    id: 'event-1',
    slug: 'hackpulse-1',
    title: 'HackPulse 1.0 - Flagship Hackathon',
    date: 'Nov 14-15, 2025',
    category: 'Hackathon',
    venue: 'CCE Main Auditorium, CGC Uni',
    attendees: 210,
    description: 'A 24-hour national hackathon bringing together 50+ student developer teams to build real-world solutions in AI, Cloud, and Sustainability.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    cover: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2000&q=80',
    overview: [
      'HackPulse 1.0 was the flagship hackathon of TechPulse: 24 hours, 50+ student teams, and one open challenge to build real-world solutions in AI, Cloud and Sustainability.',
      'Teams were guided by mentors from the industry throughout the overnight sprint and presented working demos to a panel on the final day.'
    ],
    stats: [
      { value: '210+', label: 'Attendees' },
      { value: '50+', label: 'Teams' },
      { value: '24h', label: 'Non-stop coding' },
      { value: '\u20B950,000', label: 'Prize pool' }
    ],
    highlights: ['50+ Participating Teams', '\u20B950,000 Cash Prize Pool', 'Mentors from Top Tech', 'Overnight Coding Sprint'],
    agenda: [
      { when: 'Day 1', what: 'Opening & Challenge Release' },
      { when: 'Day 2', what: 'Final Demos & Awards' }
    ],
    gallery: samplePhotos(0),
    videos: [],
    speakers: [],
    results: [],
    links: []
  },
  {
    id: 'event-2',
    slug: 'cybershield-25',
    title: "CyberShield '25 - Ethical Hacking Workshop",
    date: 'Dec 02, 2025',
    category: 'Workshop',
    venue: 'CCE Computer Lab 4, Block 3',
    attendees: 140,
    description: 'Hands-on masterclass on web application security, Kali Linux fundamentals, penetration testing, and CTF challenges.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    cover: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80',
    overview: [
      "CyberShield '25 was a hands-on masterclass in web application security. Participants worked through Kali Linux fundamentals and penetration-testing basics in a live lab.",
      'The day ended with a custom CTF where every flag had to be earned.'
    ],
    stats: [
      { value: '140+', label: 'Attendees' },
      { value: '3', label: 'Sessions' }
    ],
    highlights: ['Live Vulnerability Exploitation', 'Custom CTF Flag Challenge', 'Burp Suite & Nmap Hands-on', 'Certificates of Excellence'],
    agenda: [
      { when: 'Session 1', what: 'Network Recon' },
      { when: 'Session 2', what: 'Web App Security' },
      { when: 'Session 3', what: 'Live CTF' }
    ],
    gallery: samplePhotos(1),
    videos: [],
    speakers: [],
    results: [],
    links: []
  },
  {
    id: 'event-3',
    slug: 'devclash-v2',
    title: 'DevClash v2 - Speed Coding Battle',
    date: 'Jan 18, 2026',
    category: 'Coding',
    venue: 'CCE Online Arena & Seminar Hall',
    attendees: 165,
    description: 'High-intensity competitive programming showdown evaluating data structures, algorithmic efficiency, and fast problem solving.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    cover: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=2000&q=80',
    overview: [
      'DevClash v2 was a speed-coding showdown testing data structures, algorithmic efficiency and fast problem solving across three rounds of rising difficulty.',
      'Scores were tracked on an automated, real-time leaderboard.'
    ],
    stats: [
      { value: '165+', label: 'Contestants' },
      { value: '3', label: 'Rounds' }
    ],
    highlights: ['Automated Real-Time Leaderboard', '3 Difficulty Rounds', 'Swag Bags & Vouchers', '165+ Contestants'],
    agenda: [
      { when: 'Round 1', what: 'Speed Warmup' },
      { when: 'Round 2', what: 'Algorithmic Duel' },
      { when: 'Round 3', what: 'Grand Finals' }
    ],
    gallery: samplePhotos(2),
    videos: [],
    speakers: [],
    results: [],
    links: []
  },
  {
    id: 'event-4',
    slug: 'ai-horizon-summit',
    title: 'AI Horizon Summit - GenAI & LLMs',
    date: 'Feb 10, 2026',
    category: 'Seminar',
    venue: 'CGC Central Convention Center',
    attendees: 280,
    description: 'Symposium featuring AI researchers and engineers exploring fine-tuning Large Language Models, RAG pipelines, and AI ethics.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    cover: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=2000&q=80',
    overview: [
      'The AI Horizon Summit brought researchers and engineers together to explore fine-tuning large language models, RAG pipelines and the ethics of AI.',
      'The day combined a keynote, a career panel and a hands-on workshop on building RAG apps.'
    ],
    stats: [
      { value: '280+', label: 'Attendees' },
      { value: '3', label: 'Sessions' }
    ],
    highlights: ['Keynote by AI Industry Pioneers', 'Live Demo of RAG Agents', 'Interactive Q&A Session', 'Networking Lunch'],
    agenda: [
      { when: 'Keynote', what: 'LLM Frontier' },
      { when: 'Panel', what: 'AI Careers' },
      { when: 'Workshop', what: 'Building RAG Apps' }
    ],
    gallery: samplePhotos(3),
    videos: [],
    speakers: [],
    results: [],
    links: []
  },
  {
    id: 'event-5',
    slug: 'web3-unlocked',
    title: 'Web3 Unlocked - DApp Bootcamp',
    date: 'Mar 05, 2026',
    category: 'Workshop',
    venue: 'CCE Innovation Lab',
    attendees: 110,
    description: 'Practical guide to smart contract development using Solidity, Hardhat, Ethers.js, and deploying decentralized apps on Polygon testnet.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80',
    cover: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=2000&q=80',
    overview: [
      'Web3 Unlocked was a practical bootcamp on smart-contract development with Solidity, Hardhat and Ethers.js, ending with decentralized apps deployed to the Polygon testnet.',
      'Every participant left with a working DApp and a developer kit to keep building.'
    ],
    stats: [
      { value: '110+', label: 'Attendees' },
      { value: '100+', label: 'Contracts deployed' }
    ],
    highlights: ['Deployed 100+ Smart Contracts', 'NFT Minting Live Demo', 'Web3 Developer Kits', 'Faucet Setup'],
    agenda: [
      { when: 'Part 1', what: 'Blockchain Basics' },
      { when: 'Part 2', what: 'Solidity Contracts' },
      { when: 'Part 3', what: 'DApp Frontend' }
    ],
    gallery: samplePhotos(4),
    videos: [],
    speakers: [],
    results: [],
    links: []
  }
];


/* ----------------------------------------------------
   UPCOMING EVENT  -  shown in the "Upcoming" section of the home page
   Change these values for the next event. Dates use IST (+05:30).
---------------------------------------------------- */
const UPCOMING = {
  festival: 'Saviskar',
  category: 'Technical',
  title: 'Bug Hunt',
  subtitle: 'Coding Contest',

  start: '2026-10-28T00:00:00+05:30',   // countdown runs to this moment
  end:   '2026-10-29T23:59:59+05:30',   // after this the section says the event has ended
  days:  ['28', '29'],
  month: 'October',
  year:  '2026',

  venue:  'Block 2 & Block 3',
  campus: 'CGC University, Mohali',

  // Not a TechPulse event - TechPulse is coordinating registrations
  eventUrl:    'https://saviskar.co.in/events/technical/bug-hunt-coding-contest',
  registerUrl: 'https://saviskar.co.in/register?event=a3604f0f-80b0-4a94-a280-e4dd5e67847c'
};