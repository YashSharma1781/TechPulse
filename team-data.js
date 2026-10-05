/* ----------------------------------------------------
   TECHPULSE TEAM DATA  (edit this file to update the team section)

   PHOTOS
   Put photos in the  images/team/  folder. If a photo is missing, a
   coloured initials badge is shown instead, so nothing breaks.

   Default photo file names (jpg):
     Academic coordinator ..... images/team/osho-sharma.jpg
     President ................ images/team/yash-verma.jpg
     Vice President ........... images/team/parth-gartan.jpg
     Secretary ................ images/team/yash-sharma.jpg
     Department head .......... images/team/<department id>-head.jpg
     Department member #1 ..... images/team/<department id>-01.jpg
     Department member #2 ..... images/team/<department id>-02.jpg   ...and so on

   To use a different file name, write the person as an object:
     { name: 'Riya Singh', photo: 'images/team/riya.jpg',
       linkedin: 'https://linkedin.com/in/...', instagram: 'https://instagram.com/...' }
   ---------------------------------------------------- */

// Quick placeholders: Member 01 ... Member NN  (replace with real names below)
const placeholders = (n) => Array.from({ length: n }, (_, i) => 'Member ' + String(i + 1).padStart(2, '0'));

const TEAM = {
  academicCoordinator: { name: 'Dr. Osho Sharma', role: 'Academic Coordinator', photo: 'images/team/osho-sharma.jpg' },

  core: [
    { name: 'Yash Verma',   role: 'President',      photo: 'images/team/yash-verma.jpg' },
    { name: 'Parth Gartan', role: 'Vice President', photo: 'images/team/parth-gartan.jpg' },
    { name: 'Yash Sharma',  role: 'Secretary',      photo: 'images/team/yash-sharma.jpg' }
  ],

  departments: [
    {
      id: 'technical', name: 'Technical', icon: '</>', color: '#6CC47F',
      tagline: 'We build, break and ship.',
      head: 'Department Head',                 // <- replace with the head's name
      members: placeholders(6)                 // <- or: ['Name 1', 'Name 2', ...]
    },
    {
      id: 'social-media', name: 'Social Media & Marketing', short: 'Social & Marketing', icon: '#', color: '#9890C8',
      tagline: 'Giving TechPulse its voice online.',
      head: 'Department Head',
      members: placeholders(6)
    },
    {
      id: 'design', name: 'Design', icon: '✦', color: '#FF7A59',
      tagline: 'Where every idea gets its look.',
      head: 'Department Head',
      members: placeholders(6)
    },
    {
      id: 'photo-video', name: 'Photography & Videography', short: 'Photo & Video', icon: '◎', color: '#5BC0EB',
      tagline: 'Every moment, framed.',
      head: 'Department Head',
      members: placeholders(6)
    },
    {
      id: 'pr-outreach', name: 'PR & Outreach', icon: '↗', color: '#F5C542',
      tagline: 'Connecting TechPulse with the world.',
      head: 'Department Head',
      members: placeholders(6)
    },
    {
      id: 'logistics', name: 'Logistics', icon: '⬡', color: '#E56BA8',
      tagline: 'Making every event run smoothly.',
      head: 'Department Head',
      members: placeholders(6)
    }
  ]
};