import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Boxing',
      links: [
        {
          text: 'Boxers',
          href: getPermalink('/boxers'),
        },
        {
          text: 'Divisions',
          href: getPermalink('/weight-classes'),
        },
        {
          text: 'Fights',
          href: getPermalink('/fights'),
        },
        {
          text: 'Schedule',
          href: getPermalink('/schedule'),
        },
        {
          text: 'Tickets',
          href: getPermalink('/tickets'),
        },
      ],
    },
    {
      text: 'Videos',
      links: [
        {
          text: 'YouTube',
          href: getPermalink('/boxers'),
        },
        {
          text: 'Full Fights',
          href: getPermalink('/weight-classes'),
        },
      ],
    },
    {
      text: 'Content',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Categories',
          href: getPermalink('blog', 'category'),
        },
        {
          text: 'Glossary',
          href: getPermalink('/glossary'),
        },
      ],
    },
    {
      text: 'Shop',
      links: [
        {
          text: 'Shop',
          href: getPermalink('/shop'),
        },
        {
          text: 'Categories',
          href: getPermalink('/shop/best'),
        },

      ],
    },
   
  ],
  actions: [{ text: 'Subscribe', href: '/subscribe', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'Website', href: 'https://boxingundefeated.com' },
        { text: 'About', href: '/about' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Newsletter', href: '/subscribe' },
        { text: 'Forum', href: '/#' },
        { text: 'Community', href: '/#' },
      ],
    },
    {
      title: 'Links',
      links: [
        { text: 'Substack', href: 'https://boxingundefeated.substack.com/', target: '_blank' },
        { text: 'Hashnode', href: 'https://boxingundefeated.hashnode.dev/', target: '_blank' },
      ],
    },
    {
      title: 'Boring Stuff',
      links: [
        { text: 'Privacy Policy', href: '/privacy' },
        { text: 'Terms & Conditions', href: '/terms' },
        { text: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
        { text: 'DMCA', href: '/dmca' },
        { text: 'Archive', href: '/archive' },
        { text: 'Tags', href: '/tags' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Free Stuff', href: 'https://stuff.boxingundefeated.com' },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://serp.ly/@boxingundefeated/twitter', target: '_blank' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://serp.ly/@boxingundefeated/instagram', target: '_blank' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/boxundefeated', target: '_blank' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://serp.ly/@boxingundefeated/youtube', target: '_blank' },
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://linkedin.com/company/boxingundefeated', target: '_blank' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://tiktok.com/@boxundefeated', target: '_blank' },
    { ariaLabel: 'Medium', icon: 'tabler:brand-medium', href: 'https://medium.com/boxing-undefeated', target: '_blank' },
  ],
  // footNote: `
  //   <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
  //   Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  // `,
};
