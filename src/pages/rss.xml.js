import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: 'ClearEye Consulting Blog',
		description: 'Insights on software development, business strategy, and technology.',
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			// Compute RSS link from post `slug`
			// This target the `src/pages/blog/[...slug].astro` route
			link: `/blog/${post.slug}/`,
		})),
	});
}
