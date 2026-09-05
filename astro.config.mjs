import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { execSync } from 'node:child_process';
import fs from 'node:fs';

// lastmod per route: blog posts from frontmatter, everything else from the last git commit that touched its source.
const TODAY = new Date().toISOString().slice(0, 10);
function gitDate(...files) {
  try { const d = execSync(`git log -1 --format=%cI -- ${files.map((f) => JSON.stringify(f)).join(' ')}`, { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); return d ? d.slice(0, 10) : TODAY; }
  catch { return TODAY; }
}
const lastmod = {
  '/': gitDate('src/pages/index.astro', 'src/components'),
  '/about/': gitDate('src/pages/about.astro'),
  '/audit/': gitDate('src/pages/audit.astro'),
  '/how-it-works/': gitDate('src/pages/how-it-works.astro'),
  '/blog/': gitDate('src/pages/blog/index.astro', 'src/content/blog'),
};
for (const f of fs.readdirSync('./src/data/verticals')) lastmod[`/${f.replace(/\.json$/, '')}/`] = gitDate(`src/data/verticals/${f}`, 'src/pages/[vertical].astro');
for (const f of fs.readdirSync('./src/data/legal')) lastmod[`/${f.replace(/\.json$/, '')}/`] = gitDate(`src/data/legal/${f}`);
for (const f of fs.readdirSync('./src/content/blog').filter((f) => f.endsWith('.md'))) {
  const src = fs.readFileSync(`./src/content/blog/${f}`, 'utf8');
  const m = src.match(/^updated:\s*"?([^"\n]+)"?/m) || src.match(/^date:\s*"?([^"\n]+)"?/m);
  lastmod[`/blog/${f.replace(/\.md$/, '')}/`] = m ? m[1].slice(0, 10) : TODAY;
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.deepvine.ai',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'never' },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/404/'),
      serialize(item) {
        const path = new URL(item.url).pathname;
        item.lastmod = lastmod[path] || TODAY;
        return item;
      },
    }),
  ],
  devToolbar: { enabled: false },
});
