// Single source of truth for the site's content.
// To add a project: add an entry to `projects`. To log a milestone: add to `changelog`.

import scrapLog from '../assets/work/scrapbook-log.jpg';
import scrapCalendar from '../assets/work/scrapbook-calendar.jpg';
import scrapFilter from '../assets/work/scrapbook-filter.jpg';
import scrapInsights from '../assets/work/scrapbook-insights.jpg';
import lunarTitle from '../assets/work/lunar-title.jpg';

export const site = {
  name: 'Kazi Walid Hasan',
  first: 'Kazi Walid',
  last: 'Hasan',
  short: 'Walid',
  version: '3.1', // = current university semester
  updated: 'Nov 2026',
  // false = pre-launch: search engines are asked not to index the site.
  // Flip to true when the site moves to its final domain.
  launched: false,
  location: 'Dhaka, Bangladesh',
  university: 'Pabna University of Science and Technology',
  universityShort: 'PUST',
  degree: 'B.Sc. in Computer Science and Engineering',
  status: 'Open to SWE internships & ML research',
  intro:
    "Third-year CS student at PUST. I build mobile and web apps, ship things at hackathons, and I'm starting out in ML research.",
  description:
    'Kazi Walid Hasan is a third-year Computer Science and Engineering student at PUST who builds mobile and web apps, competes in hackathons, and is starting out in ML research.',
  email: 'kaziwalid107@gmail.com',
  github: 'https://github.com/kaKazi107',
  githubHandle: 'kaKazi107',
  linkedin: 'https://www.linkedin.com/in/kaziwalidhasan',
  linkedinHandle: 'kaziwalidhasan',
};

export const ticker = [
  'Building Scrapbook',
  '4th place: July National Hackathon 2026',
  'Finalist: PSTU IT Carnival 2026',
  'NASA Space Apps Challenge 2026',
  'Getting into ML research',
  'Open to internships',
];

export type Section = { heading: string; body?: string[]; list?: string[] };

export type Project = {
  slug: string;
  title: string;
  year: string;
  kind: string; // e.g. "Android app"
  team: string; // "Solo" | "Team of 3"
  status?: string;
  event?: string;
  result?: string;
  oneLiner: string;
  role: string;
  stack: string[];
  links: { label: string; href: string }[];
  visual: 'phones' | 'browser' | 'mesh';
  images?: { src: ImageMetadata; alt: string }[];
  sections: Section[];
};

export const projects: Project[] = [
  {
    slug: 'scrapbook',
    title: 'Scrapbook',
    year: '2026',
    kind: 'Android app',
    team: 'Solo',
    status: 'In progress',
    oneLiner:
      'A local-first diary for the movies, shows, music, food and places that make up your days, laid out on a visual calendar.',
    role: 'Everything: design, app, data model, sync.',
    stack: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Supabase'],
    links: [{ label: 'GitHub', href: 'https://github.com/kaKazi107/Scrapbook' }],
    visual: 'phones',
    images: [
      { src: scrapCalendar, alt: 'Scrapbook calendar view for November 2026 with posters on logged days' },
      { src: scrapLog, alt: 'Log Activity screen with Dune: Part Two auto-filled from iTunes' },
      { src: scrapInsights, alt: 'Explore and Insights screen with rating stats and category breakdown' },
      { src: scrapFilter, alt: 'Calendar filtered to movies only' },
    ],
    sections: [
      {
        heading: 'What it does',
        body: [
          'You log what you watched, listened to, ate or visited, and each day on the calendar shows the poster or photo of what you did. Several memories on one day show a +N badge, and you choose which one becomes the day’s cover.',
        ],
        list: [
          'Month calendar and a timeline feed, with filters for movies, TV, music, food and places',
          'Quick log and edit with rating, notes, photos and category-specific details',
          'One-tap auto-fill of titles, posters and credits from iTunes, TVMaze and OpenStreetMap',
          'Search, rating filters and a stats overview on the Explore tab',
          'Light and dark mode',
        ],
      },
      {
        heading: 'How it’s built',
        body: [
          'It’s local-first: entries live in SQLite and photos in the app’s own storage, so everything works offline and signing in is optional.',
          'When you do sign in, entries and photos sync both ways through Supabase (Postgres, Auth and Storage with row-level security). Deletes are kept as tombstones and records carry stable timestamps, so something deleted on one device doesn’t come back from another on the next sync.',
          'Auto-fill goes through one search layer that routes each category to the right API and applies a timeout, so a slow service never blocks logging.',
        ],
      },
      {
        heading: 'What’s next',
        list: [
          'A server-side search proxy so API keys stay off the device',
          'Backup and export (JSON + photos)',
          'Monthly recap cards, a map view and a watchlist',
        ],
      },
    ],
  },
  {
    slug: 'lunar-life',
    title: 'Lunar Life',
    year: '2026',
    kind: 'Browser game',
    team: 'Team of 3',
    event: 'NASA Space Apps Challenge 2026',
    oneLiner:
      'A story game that puts kids aged 7–12 in command of a Mars mission, where every hazard comes from real NASA data.',
    role: 'Main story and the decision design; coded Part 2: the dust storm and its decisions.',
    stack: ['React', 'TypeScript', 'Vite', 'SVG', 'Web Audio', 'Vitest'],
    links: [
      { label: 'Play it live', href: 'https://nasa-hack-26.pages.dev' },
      { label: 'GitHub', href: 'https://github.com/BinaryBandits-Hackathon/lunar-lifeline' },
    ],
    visual: 'browser',
    images: [{ src: lunarTitle, alt: 'Lunar Life title screen with Mars on the left and mission settings on the right' }],
    sections: [
      {
        heading: 'The idea',
        body: [
          'Space science feels distant to kids. In Lunar Life they don’t memorise facts. They use them to keep a crew alive across 14 sols on Mars and 12 hard choices, and every choice costs fuel, time or crew health.',
        ],
        list: [
          'Solar storms come from NASA’s DONKI space-weather database, with real dates and speeds',
          'All 4,096 possible paths are tested: only about 41% get home, and every decision can change the ending',
          'Full Bangla version, read-aloud, reduce-motion and keyboard play',
          'No accounts, ads or tracking. It works offline once loaded',
        ],
      },
      {
        heading: 'My part',
        body: [
          'I worked on the main story and the decision design, then coded Part 2, “Surviving Mars”: the dust-storm chapter and the decisions inside it.',
        ],
      },
      {
        heading: 'How three people built one story',
        body: [
          'The game was split into three parts with one owner each. A shared contract set how each part reports choices back, and the core files (scoring and story shell) were frozen, so nobody could break someone else’s part. Every pull request had to pass type checks, the test suite and a build before merging.',
        ],
      },
    ],
  },
  {
    slug: 'songket',
    title: 'Songket',
    year: '2026',
    kind: 'Android app',
    team: 'Team',
    event: 'July National Hackathon 2026',
    result: '4th place',
    oneLiner:
      'An offline messenger that hops messages phone to phone over Bluetooth mesh, with no internet, servers or accounts.',
    role: 'Reworked the main UI and frontend; planned how we demoed and pitched it.',
    stack: ['Kotlin', 'Jetpack Compose', 'Bluetooth LE', 'BouncyCastle'],
    links: [{ label: 'GitHub', href: 'https://github.com/BinaryBandits-Hackathon/songket' }],
    visual: 'mesh',
    sections: [
      {
        heading: 'What it is',
        body: [
          'Nearby phones find each other over Bluetooth Low Energy and pass messages along, hop by hop, until they reach the recipient. Private messages are end-to-end encrypted (X25519 + AES-256-GCM), and messages for people who are offline are stored and forwarded later.',
        ],
      },
      {
        heading: 'Where it came from',
        body: [
          'Songket started from Echo, a teammate’s Android client built on the open-source Bitchat project. During the hackathon our team rebranded it and added one-to-one messages that work independently of the mesh, a new visual theme and an onboarding flow.',
        ],
      },
      {
        heading: 'My part',
        body: [
          'I reworked the main UI and frontend, and planned how we presented and demoed it to the judges. We finished 4th.',
        ],
      },
    ],
  },
];

export type LogEntry = { date: string; title: string; note: string; tag?: string; href?: string };

export const changelog: LogEntry[] = [
  {
    date: 'Nov 2026',
    title: 'Started Scrapbook',
    note: 'My first solo app with real sync: React Native, SQLite and Supabase. Still building.',
    tag: 'Building',
    href: '/work/scrapbook',
  },
  {
    date: 'Nov 2026',
    title: 'NASA Space Apps Challenge 2026',
    note: 'Lunar Life, a Mars-mission game for kids. I worked on the story and decision design and coded Part 2.',
    tag: 'Galactic Problem Solver',
    href: '/work/lunar-life',
  },
  {
    date: 'Aug 2026',
    title: 'PSTU IT Carnival 2026 Hackathon',
    note: 'A fintech project that simulates a banking system. Held at Patuakhali Science and Technology University.',
    tag: 'Finalist',
  },
  {
    date: 'Jul 2026',
    title: 'July National Hackathon 2026',
    note: 'Songket, an offline Bluetooth-mesh messenger. I reworked the UI and planned our pitch.',
    tag: '4th place',
    href: '/work/songket',
  },
  {
    date: 'Oct 2024',
    title: 'Started B.Sc. in CSE at PUST',
    note: 'Pabna University of Science and Technology. Version 1.1.',
  },
];

export const now = [
  { label: 'Building', text: 'Scrapbook: multi-photo entries and cloud sync.' },
  { label: 'Learning', text: 'Getting into machine learning research.' },
  { label: 'Looking for', text: 'SWE internships and ML research opportunities.' },
];

export const education = [
  {
    school: 'Pabna University of Science and Technology',
    detail: 'B.Sc. in Computer Science and Engineering',
    when: 'Oct 2024 – Oct 2028 (expected)',
    note: 'Currently in semester 3.1',
  },
  { school: 'Varendra College, Rajshahi', detail: 'Higher Secondary Certificate (HSC), Science', when: '2021 – 2023' },
  { school: 'Govt. Laboratory High School, Rajshahi', detail: 'Secondary School Certificate (SSC), Science', when: '2021' },
];

export const skills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'Kotlin', 'Dart', 'C', 'C++', 'Java'] },
  { group: 'Mobile', items: ['React Native', 'Expo', 'Flutter', 'Jetpack Compose'] },
  { group: 'Web', items: ['React', 'Vite', 'Next.js'] },
  { group: 'Data', items: ['SQLite', 'PostgreSQL', 'Supabase'] },
  { group: 'Tools', items: ['Git & GitHub', 'Android Studio', 'VS Code'] },
];

export const spoken = [
  'Bangla (native)',
  'English (professional)',
  'Hindi (professional)',
  'Urdu (elementary)',
];
