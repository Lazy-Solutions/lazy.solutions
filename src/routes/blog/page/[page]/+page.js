import { getPosts } from '$lib/blog';


const perPage = 10;

export function entries() {
	const totalPages = Math.ceil(getPosts().length / perPage);

	return Array.from({ length: totalPages }, (_, index) => ({
		page: String(index + 1)
	}));
}

export function load({ params }) {
	const page = Number(params.page);
	const posts = getPosts();

	return {
		posts: posts.slice(
			(page - 1) * perPage,
			page * perPage
		),
		page,
		totalPages: Math.ceil(posts.length / perPage)
	};
}