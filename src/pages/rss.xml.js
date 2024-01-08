import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('post');
  const feedItems = posts.map((post) => ({
    title: post.data.title,
    link: `/${post.slug}/`, // Adjust the URL path as necessary for your site
    pubDate: post.data.publishDate,
    // include other properties as necessary
  }));

  return rss({
    title: 'Boxing Undefeated | Post Feed',
    description: 'Latest posts from Boxing Undefeated',
    site: context.site,
    items: feedItems,
  });
}
