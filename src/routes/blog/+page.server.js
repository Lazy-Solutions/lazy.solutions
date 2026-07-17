import { getPosts } from '$lib/blog';

const perPage = 10;

export function load() {
	return {
		posts: getPosts().slice(0, perPage),
		page: 1,
		totalPages: Math.ceil(getPosts().length / perPage)
	};
}