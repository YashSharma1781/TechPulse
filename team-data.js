/* ----------------------------------------------------
   TECHPULSE TEAM  -  edit this file to change names, roles and photos
   ----------------------------------------------------
   PHOTOS (JPG / PNG / WEBP, portrait 4:5 works best, about 600 x 750 px)
   Leadership photos go in  images/team/
     osho-sharma.jpg   yash-verma.jpg   parth-gartan.jpg   yash-sharma.jpg

   Department photos go in  images/team/<department-id>/<name>.jpg
   where <name> is the person's name in lower case with dashes, e.g.
     images/team/technical/aryan-dev.jpg
     images/team/social-media/mandeep-kaur.jpg
   (the full list of file names is in images/team/README.txt)

   A person without a photo shows a coloured badge with their initials,
   so nothing breaks while you collect the photos.

   To use a different file for someone, write them as an object:
     { name: 'Aryan Dev', photo: 'images/team/my-aryan.png' }
---------------------------------------------------- */

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
      head: { name: 'Parth Gartan', photo: 'images/team/parth-gartan.jpg' },   // same photo as the Vice President card
      members: ['Aryan Dev', 'Arman', 'Jiyo']
    },
    {
      id: 'social-media', name: 'Social Media & Marketing', short: 'Social & Marketing', icon: '#', color: '#9890C8',
      tagline: 'Giving TechPulse its voice online.',
      head: {name:'Mandeep Kaur', photo: 'images/team/social-media/mandeep-kaur.jpg'}, 
      members: ['Shivam Yadav', 'Keshav Painyuli', 'Sakshi', 'Piyush Kumar Shaw', 'Aditya']
    },
    {
      id: 'design', name: 'Design & Creative', short: 'Design', icon: '\u2726', color: '#FF7A59',
      tagline: 'Where every idea gets its look.',
      head: 'Darshi',
      members: ['Vanshika', 'Pradeep Shakya']
    },
    {
      id: 'photo-video', name: 'Photography & Videography', short: 'Photo & Video', icon: '\u25CE', color: '#5BC0EB',
      tagline: 'Every moment, framed.',
      head: 'Goranshu',
      members: ['Lucky', 'Shivesh', 'Vivek']
    },
    {
      id: 'pr-outreach', name: 'PR & Outreach', icon: '\u2197', color: '#F5C542',
      tagline: 'Connecting TechPulse with the world.',
      head: 'Siya',
      members: ['Shiva', 'Roshan Kumar']
    },
    {
      id: 'logistics', name: 'Logistics & Hospitality', short: 'Logistics', icon: '\u2B21', color: '#E56BA8',
      tagline: 'Everything ready, everyone looked after.',
      head: 'Aman',
      members: ['Utkarsh', 'Pradeep', 'Dev']
    },
    {
      id: 'documentation', name: 'Documentation', icon: '\u00B6', color: '#4FD1C5',
      tagline: 'Keeping every detail on record.',
      head: 'Dronacharya',
      members: ['Vaibhav', 'Bhoumic Garg', 'Varun']
    },
    {
      id: 'event-planning', name: 'Event Planning', short: 'Events', icon: '\u25C8', color: '#C3E36B',
      tagline: 'From first idea to final applause.',
      head: 'Ritul Pruthi',
      members: ['Bhavishya Mamodiya', 'Atul Kumar Yadav', 'Alka', 'Shiva', 'Rohit Kumar']
    }
  ]
};