export type Announcement = {
  label: string;
  title: string;
  description: string;
  href: string;
  date: string;
  isNew?: boolean;
};

export type ContentPillar = {
  tag: string;
  icon: string;
  title: string;
  description: string;
  chips: string[];
  href?: string;
};

export type Series = {
  number: string;
  name: string;
  emoji: string;
  description: string;
  href?: string;
};

export type Playlist = {
  label: string;
  href: string;
  special?: boolean;
};

export type MethodStep = {
  step: string;
  question: string;
  description: string;
};

// ─── Channel ─────────────────────────────────────────────────────────────────

export const CHANNEL_URL = 'https://youtube.com/@mzantsicoder';

// ─── Hero ────────────────────────────────────────────────────────────────────

export const heroTagline =
  'Making coding simple, practical, relatable, and make you go "ah-ha".';

export const heroBody =
  "This is the community hub — announcements, challenges, event invites, and resources that live beyond any single video. Whether you just found the channel or you've been here from the start, this is where things are organised.";

// ─── Latest Announcement (update this as the channel grows) ──────────────────

export const latestAnnouncement: Announcement = {
  label: 'Announcement',
  title: 'Community hub is live 🎉',
  description:
    'The Mzantsi Coder website is officially live. Find challenges, resources, and upcoming events in the docs section.',
  href: '/docs/announcements',
  date: 'April 2025',
  isNew: true,
};

// ─── Content Pillars ─────────────────────────────────────────────────────────

export const contentPillars: ContentPillar[] = [
  {
    tag: 'Coding Tutorials',
    icon: '💻',
    title: 'Build apps grounded in Mzantsi',
    description:
      'SA app clones, improved local UX, wishlist builds, and concept projects. Beginner editions with or without mini projects.',
    chips: ['SA clones', 'improved designs', 'concept projects', 'requested builds'],
    href: CHANNEL_URL,
  },
  {
    tag: 'Tech Discussions',
    icon: '📡',
    title: 'The industry, honestly',
    description:
      'Tech news, collabs, career guidance, and mentorship for self-taught devs navigating the SA job market.',
    chips: ['news & updates', 'career advice', 'collaborations'],
    href: CHANNEL_URL,
  },
  {
    tag: 'Competitions',
    icon: '🏆',
    title: 'Level up under pressure',
    description:
      'CSS battles, hackathons, project reactions. The fastest way to sharpen your skills.',
    chips: ['CSS battles', 'hackathons', 'project reactions'],
    href: '/docs/announcements',
  },
  {
    tag: 'Challenges',
    icon: '🧪',
    title: 'Try it yourself',
    description:
      'Tasks and challenges linked to channel episodes. Practise at your own pace — each challenge links to a GitHub repo with the full brief in the README.',
    chips: [],
    href: '/docs/challenges',
  },
];

// ─── Method ──────────────────────────────────────────────────────────────────

export const methodSteps: MethodStep[] = [
  {
    step: '01',
    question: 'What?',
    description: 'Define the concept. No jargon until the foundation is solid.',
  },
  {
    step: '02',
    question: 'Why?',
    description: 'Context and relevance. Why does this matter when building in Mzantsi?',
  },
  {
    step: '03',
    question: 'How?',
    description:
      'Build something real — a project with genuine purpose, not a contrived example.',
  },
];

// ─── Series ──────────────────────────────────────────────────────────────────

export const series: Series[] = [
  {
    number: '01',
    name: 'Chat and Brewers',
    emoji: '☕',
    description:
      'Honest conversations about tech and what it actually takes — over a cup of something warm.',
    href: CHANNEL_URL,
  },
  {
    number: '02',
    name: 'Career Building',
    emoji: '🧱',
    description:
      'Practical steps for self-taught developers trying to break in, level up, and stay relevant.',
    href: CHANNEL_URL,
  },
];

// ─── Playlists ───────────────────────────────────────────────────────────────

export const playlists: Playlist[] = [
  { label: 'JavaScript / TypeScript', href: CHANNEL_URL },
  { label: 'Python', href: CHANNEL_URL },
  { label: 'HTML & CSS', href: CHANNEL_URL },
  { label: 'SQL', href: CHANNEL_URL },
  { label: 'Java', href: CHANNEL_URL },
  { label: 'C#', href: CHANNEL_URL },
  { label: 'Web Technologies', href: CHANNEL_URL },
  { label: 'Frontend', href: CHANNEL_URL },
  { label: 'Backend', href: CHANNEL_URL },
  { label: 'Fullstack', href: CHANNEL_URL },
  { label: 'Open Source', href: CHANNEL_URL },
  { label: 'Announcements', href: '/docs/announcements', special: true },
  { label: 'isiXhosa Dubbed 🌍', href: CHANNEL_URL, special: true },
  { label: 'Career Building', href: CHANNEL_URL, special: true },
];