<script>
	import BlogPagination from './BlogPagination.svelte';

	let { data } = $props();

    let highlightedPost = $derived(data.posts.length > 0 ? data.posts[0] : null);
    let regularPosts = $derived(data.posts.length > 0 ? data.posts.slice(1) : []);

    function seoColor(text, min, max) {
        const length = text.length;

        if (length < min) return 'red';
        if (length > max) return 'orange';
        return null;
    }
</script>

<section class="blog-section">
	<div class="blog-container">
        <h1>Featured</h1>
        {#if highlightedPost}
            <article class="blog-highlight">
                <a href={`/blog/${highlightedPost.slug}`} class="blog-highlight-link">
                    <div class="blog-highlight-image">
                        <img src={highlightedPost.image} alt={highlightedPost.title} />
                    </div>
                    <div class="blog-highlight-content">
                        <time datetime={highlightedPost.formattedDate}>{highlightedPost.formattedDate}</time>
                        <h2 style:color={seoColor(highlightedPost.title, 30, 60)?? undefined}>
                            {highlightedPost.title}
                        </h2>
                        <p style:color={seoColor(highlightedPost.description, 120, 160)?? undefined}>
                            {highlightedPost.description}
                        </p>
                    </div>
                </a>
            </article>
        {/if}
		<div class="blog-list-classic">
            {#if regularPosts.length > 0}
                <h3>Read More</h3>
            {/if}
			{#each regularPosts as post}
				<article class="blog-post-classic">
					<a href={`/blog/${post.slug}`} class="blog-post-link-classic">
                        <time datetime={post.formattedDate}>{post.formattedDate}</time>
                        <h3 style:color={seoColor(post.title, 30, 60)?? undefined}>
                            {post.title}
                        </h3>
                        <p style:color={seoColor(post.description, 120, 160)?? undefined}>
                            {post.description}
                        </p>
					</a>
				</article>
			{/each}
		</div>

		<BlogPagination page={data.page} totalPages={data.totalPages} />
	</div>
</section>