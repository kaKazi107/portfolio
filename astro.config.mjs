// @ts-check
import { defineConfig } from 'astro/config';

// The public address of the site. Until the custom domain goes live, this is the
// temporary Cloudflare Pages address. To launch on the real domain, set SITE_URL
// (or change the default below) and set LAUNCHED in src/data/site.ts to true.
const SITE_URL = process.env.SITE_URL ?? 'https://kaziwalid.pages.dev';

export default defineConfig({
  site: SITE_URL,
  devToolbar: { enabled: false },
});
