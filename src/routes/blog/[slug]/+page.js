import { error } from '@sveltejs/kit';
import { parseMarkdown } from '$lib/markdown';

const posts = import.meta.glob('$blog/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

export function load({ params }) {
	const entry = Object.entries(posts).find(([path]) =>
		path.endsWith(`/${params.slug}.md`)
	);

	if (!entry) {
		throw error(404, 'Post not found');
	}

	return {
		slug: params.slug,
		...parseMarkdown(entry[1])
	};
}