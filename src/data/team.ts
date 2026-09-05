import { LINKS } from './schema';
export interface Founder { name: string; role: string; initials: string; photo?: string; linkedin: string; bio: string; short: string }

export const team: Founder[] = [
  {
    name: 'Mitch Boraski',
    role: 'Co-founder',
    initials: 'MB',
    photo: '/assets/img/mitch-boraski.webp',
    linkedin: LINKS.mitchLinkedin,
    bio: "Mitch came to AI as an operator, not a technologist. A decade leading one of North Carolina's top luxury real estate practices (top 1.5% of eXp Realty's 90,000+ agents worldwide) put him on the other side of hundreds of HOA transactions: governing document reviews, board disputes, ARC battles, and the gaps between what's recorded and what's enforced. He built Deepvine to implement AI the way an owner evaluates it: ROI, risk, and enterprise value, not subscription features. His thesis: rented AI is an expense that disappears. Owned AI is an asset that appreciates.",
    short: 'Co-founder of Deepvine.AI. Deepvine.AI installs private AI knowledge systems for law firms, RIAs, CPA firms, and other knowledge-driven businesses: connected to your systems, backfilled with your history, deployed in your environment, and owned by you.',
  },
  {
    name: 'Adam Kerr',
    role: 'Co-founder',
    initials: 'AK',
    photo: '/assets/img/adam-kerr.webp',
    linkedin: LINKS.adamLinkedin,
    bio: 'Adam architects the private stack your documents run on. Your scoping call is with a founder, not a sales team.',
    short: 'Technical co-founder of Deepvine.AI. Adam architects the private stack that client documents run on.',
  },
];
