/**
 * Central entity graph for Deepvine.AI.
 * Every page composes its JSON-LD from these builders so the Organization,
 * founders and WebSite are identical everywhere and cross-linked by @id.
 */
export const SITE = 'https://www.deepvine.ai';
export const BRAND = 'Deepvine.AI';
export const CALENDLY = 'https://calendly.com/deepvine_ai/30min';
export const CALENDLY_AUDIT = 'https://calendly.com/deepvine_ai/book-your-audit?month=2026-08';

export const LINKS = {
  linkedin: 'https://www.linkedin.com/company/deepvine-ai/',
  youtube: 'https://www.youtube.com/@DeepvineAITeam',
  mitchLinkedin: 'https://www.linkedin.com/in/mitch-boraski-ab3aa49/',
  adamLinkedin: 'https://www.linkedin.com/in/kerradam/',
};

export const ORG_ID = `${SITE}/#organization`;
export const WEBSITE_ID = `${SITE}/#website`;
export const LOGO_ID = `${SITE}/#logo`;
export const MITCH_ID = `${SITE}/#mitch-boraski`;
export const ADAM_ID = `${SITE}/#adam-kerr`;
export const DEFAULT_OG = `${SITE}/og/home.jpg`;

const DESCRIPTION =
  'Deepvine.AI builds private AI memory for professional firms: connected to the systems a firm already uses, backfilled with years of history, updated daily, and answerable in Slack with source-backed citations. It runs in the client\'s own environment, works with any AI model, and the data is never used to train shared models.';

export const organization = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: BRAND,
  alternateName: ['Deepvine AI', 'Deepvine'],
  legalName: 'Local Labs LLC',
  url: `${SITE}/`,
  logo: { '@type': 'ImageObject', '@id': LOGO_ID, url: `${SITE}/web-app-manifest-512x512.png`, width: 512, height: 512, caption: BRAND },
  image: { '@id': LOGO_ID },
  description: DESCRIPTION,
  slogan: 'Own the memory. Swap the models.',
  email: 'info@deepvine.ai',
  foundingDate: '2025',
  founder: [{ '@id': MITCH_ID }, { '@id': ADAM_ID }],
  address: { '@type': 'PostalAddress', addressLocality: 'Charlotte', addressRegion: 'NC', addressCountry: 'US' },
  areaServed: { '@type': 'Country', name: 'United States' },
  sameAs: [LINKS.linkedin, LINKS.youtube],
  contactPoint: [{ '@type': 'ContactPoint', contactType: 'sales', email: 'info@deepvine.ai', url: CALENDLY, areaServed: 'US', availableLanguage: 'English' }],
  knowsAbout: [
    'private AI deployment', 'on-premises artificial intelligence', 'AI knowledge management',
    'retrieval-augmented generation', 'institutional knowledge preservation', 'company memory',
    'law firm AI compliance', 'RIA data governance', 'CPA firm data security', 'community association governing documents',
  ],
};

export const mitch = {
  '@type': 'Person',
  '@id': MITCH_ID,
  name: 'Mitch Boraski',
  jobTitle: 'Co-Founder',
  worksFor: { '@id': ORG_ID },
  url: `${SITE}/about/`,
  image: `${SITE}/assets/img/mitch-boraski.webp`,
  sameAs: [LINKS.mitchLinkedin],
  description: 'Co-founder of Deepvine.AI. A decade leading one of North Carolina\'s top luxury real estate practices before building Deepvine to implement AI the way an owner evaluates it: ROI, risk, and enterprise value.',
  knowsAbout: ['private AI deployment', 'real estate brokerage operations', 'community association governance', 'institutional knowledge'],
};

export const adam = {
  '@type': 'Person',
  '@id': ADAM_ID,
  name: 'Adam Kerr',
  alternateName: 'Adam Erwin Kerr',
  jobTitle: 'Co-Founder',
  worksFor: { '@id': ORG_ID },
  url: `${SITE}/about/`,
  image: `${SITE}/assets/img/adam-kerr.webp`,
  sameAs: [LINKS.adamLinkedin],
  description: 'Technical co-founder of Deepvine.AI. Adam architects the private stack that client documents run on.',
  knowsAbout: ['private AI infrastructure', 'retrieval-augmented generation', 'data security'],
};

export const persons = [mitch, adam];

export const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: `${SITE}/`,
  name: BRAND,
  description: 'Private AI memory your firm owns.',
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-US',
};

export const demoVideo = {
  '@type': 'VideoObject',
  '@id': `${SITE}/#demo-video`,
  name: 'Deepvine.AI overview: private AI your business owns',
  description: 'A two-minute overview of how Deepvine.AI turns a firm\'s legacy memory and company knowledge into one private AI stack that the team can question in Slack, with no data sharing and full control.',
  thumbnailUrl: [`${SITE}/assets/img/video-poster.jpg`],
  uploadDate: '2026-07-19T11:12:24-07:00',
  duration: 'PT2M8S',
  contentUrl: 'https://www.youtube.com/watch?v=yxoZuAn6HUE',
  embedUrl: 'https://www.youtube-nocookie.com/embed/yxoZuAn6HUE',
  publisher: { '@id': ORG_ID },
  inLanguage: 'en-US',
};

export interface Crumb { name: string; path: string }
export interface FaqItem { q: string; a: string }
export interface PageOpts {
  path: string; name: string; description: string;
  type?: 'WebPage' | 'AboutPage' | 'CollectionPage' | 'ContactPage' | 'ItemPage';
  image?: string; datePublished?: string; dateModified?: string; hasBreadcrumb?: boolean;
}

export const url = (path: string) => `${SITE}${path}`;

export function webPage(o: PageOpts) {
  const u = url(o.path);
  return {
    '@type': o.type || 'WebPage',
    '@id': `${u}#webpage`,
    url: u,
    name: o.name,
    description: o.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US',
    ...(o.hasBreadcrumb !== false && o.path !== '/' ? { breadcrumb: { '@id': `${u}#breadcrumb` } } : {}),
    ...(o.image ? { primaryImageOfPage: { '@type': 'ImageObject', url: o.image, width: 1200, height: 630 } } : {}),
    ...(o.datePublished ? { datePublished: o.datePublished } : {}),
    ...(o.dateModified ? { dateModified: o.dateModified } : {}),
  };
}

export function breadcrumb(path: string, crumbs: Crumb[]) {
  const all: Crumb[] = [{ name: 'Home', path: '/' }, ...crumbs];
  return {
    '@type': 'BreadcrumbList',
    '@id': `${url(path)}#breadcrumb`,
    itemListElement: all.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: url(c.path) })),
  };
}

export function faqPage(path: string, items: FaqItem[]) {
  if (!items?.length) return null;
  return {
    '@type': 'FAQPage',
    '@id': `${url(path)}#faq`,
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

/** Pull Service nodes out of legacy JSON-LD strings and re-link them to the shared Organization. */
export function legacyServices(raw: string[] | undefined, path: string) {
  const out: any[] = [];
  for (const s of raw || []) {
    let d: any; try { d = JSON.parse(s); } catch { continue; }
    const nodes = d['@graph'] ? d['@graph'] : [d];
    for (const n of nodes) {
      if (n['@type'] !== 'Service') continue;
      const { '@context': _ctx, ...svc } = n;
      out.push({ ...svc, '@id': svc['@id'] || `${url(path)}#service`, url: svc.url || url(path), provider: { '@id': ORG_ID }, brand: { '@id': ORG_ID } });
    }
  }
  return out;
}

export function graph(nodes: (object | null | undefined | false)[]) {
  return { '@context': 'https://schema.org', '@graph': nodes.filter(Boolean) };
}
