<script>
	let { page, totalPages } = $props();
</script>

<nav class="blog-pagination">
	{#if page > 1}
		<a href={page === 2 ? '/blog' : `/blog/page/${page - 1}`}>
			Previous
		</a>
	{:else}
		<button disabled>
			Previous
		</button>
	{/if}

	{#if page < totalPages}
		<a href={`/blog/page/${page + 1}`}>
			Next
		</a>
	{:else}
		<button disabled>
			Next
		</button>
	{/if}
</nav>