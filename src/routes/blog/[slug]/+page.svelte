<script>
	import { marked } from "marked";

	marked.use({
		renderer: {
			link({ href, title, tokens }) {
				const text = this.parser.parseInline(tokens);
				const external = href.startsWith('http');

				return `<a href="${href}"${title ? ` title="${title}"` : ''}${external ? ' target="_blank" rel="noopener noreferrer"' : ''}>${text}</a>`;
			}
		}
	});

	let { data } = $props();
	const html = $derived(marked(data.content));

	const schema = $derived({
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: data.metadata.title,
		description: data.metadata.description,
		image: data.metadata.image
			? `https://lazy.solutions${data.metadata.image}`
			: "https://lazy.solutions/media/images/asm_feature.webp",
		datePublished: data.metadata.date,
		author: {
			"@type": "Person",
			name: "Patric Keisala",
		},
		publisher: {
			"@type": "Organization",
			name: "Lazy Solutions",
			logo: {
				"@type": "ImageObject",
				url: "https://lazy.solutions/media/images/asm_feature.webp",
			},
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": `https://lazy.solutions/blog/${data.slug}`,
		},
	});
</script>

<svelte:head>
	<title>{data.metadata.title} | Lazy Solutions</title>
	<meta name="description" content={data.metadata.description} />
	<meta name="author" content="Patric Keisala" />
	<link rel="canonical" href={`https://lazy.solutions/blog/${data.slug}`} />

	<meta
		property="og:title"
		content={`${data.metadata.title} | Lazy Solutions`}
	/>
	<meta property="og:description" content={data.metadata.description} />
	<meta
		property="og:image"
		content={data.metadata.image
			? `https://lazy.solutions${data.metadata.image}`
			: "https://lazy.solutions/media/images/asm_feature.webp"}
	/>
	<meta
		property="og:url"
		content={`https://lazy.solutions/blog/${data.slug}`}
	/>
	<meta property="og:type" content="article" />
	<meta property="article:published_time" content={data.metadata.date} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content={`${data.metadata.title} | Lazy Solutions`}
	/>
	<meta name="twitter:description" content={data.metadata.description} />
	<meta
		name="twitter:image"
		content={data.metadata.image
			? `https://lazy.solutions${data.metadata.image}`
			: "https://lazy.solutions/media/images/asm_feature.webp"}
	/>

	{@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<article class="blog-article">
	<header class="article-header">
		<time datetime={data.metadata.date}>{data.metadata.date}</time>
		<h1>{data.metadata.title}</h1>
	</header>
	<div class="article-content">
		{@html html}
	</div>
</article>
