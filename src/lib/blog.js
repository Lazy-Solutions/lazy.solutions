import matter from 'gray-matter';

const posts = import.meta.glob('$blog/*.md', {
	eager: true,
	query: '?raw',
	import: 'default'
});

export function getPosts() {
	return Object.entries(posts)
		.map(([path, content]) => {
			const slug = path.split('/').pop().replace('.md', '');

			const { data } = matter(content);

			if (!data.published) return null;

			return {
				slug,
				title: data.title ?? slug,
				date: data.date,
				formattedDate: new Date(data.date).toLocaleDateString('en-UK', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				}),
				description: data.description ?? '',
				image: `/media/blog/${data.image}`,
			};
		})
		.filter(Boolean)
		.sort((a, b) => new Date(b.date) - new Date(a.date));
}