import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, squooshImageService } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import tasks from './src/utils/tasks';
<<<<<<< HEAD
import cloudflare from '@astrojs/cloudflare';

import {
  readingTimeRemarkPlugin,
  responsiveTablesRehypePlugin,
  externalAnchorPlugin,
} from './src/utils/frontmatter.mjs';
=======

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter.mjs';
>>>>>>> 287eb8155f7834ff478a15c6474ec2100cdd13f5

import { ANALYTICS, SITE } from './src/utils/config.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const whenExternalScripts = (items = []) =>
  ANALYTICS.vendors.googleAnalytics.id && ANALYTICS.vendors.googleAnalytics.partytown
    ? Array.isArray(items)
      ? items.map((item) => item())
      : [items()]
    : [];

export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',
<<<<<<< HEAD
  // adapter: cloudflare(),

  output: 'static',
  // output: 'hybrid',
=======

  output: 'static',
>>>>>>> 287eb8155f7834ff478a15c6474ec2100cdd13f5

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    tasks(),
  ],

  image: {
    service: squooshImageService(),
  },

  markdown: {
<<<<<<< HEAD
    remarkPlugins: [readingTimeRemarkPlugin, externalAnchorPlugin],
=======
    remarkPlugins: [readingTimeRemarkPlugin],
>>>>>>> 287eb8155f7834ff478a15c6474ec2100cdd13f5
    rehypePlugins: [responsiveTablesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
