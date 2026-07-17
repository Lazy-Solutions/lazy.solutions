<script>
    import BlogList from "$components/blog/BlogList.svelte";

    let { data } = $props();

    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        'url': 'https://lazy.solutions/blog',
        'name': 'Lazy Solutions Blog',
        'description': 'Latest updates, tutorials, and insights about Unity assets and game development.',
        'publisher': {
            '@type': 'Organization',
            'name': 'Lazy Solutions',
            'url': 'https://lazy.solutions'
        }
    };
</script>

<svelte:head>
  <title>Blog | Lazy Solutions</title>
  <meta
    name="description"
    content="Latest updates, tutorials, and insights about Unity assets, workflow automation, and game development."
  />
  <meta
    name="keywords"
    content="Unity blog, Unity tutorials, game development updates, Lazy Solutions blog"
  />
  <meta name="author" content="Patric Keisala" />
  <link rel="canonical" href="https://lazy.solutions/blog" />
  <meta property="og:title" content="Blog | Lazy Solutions" />
  <meta
    property="og:description"
    content="Latest updates, tutorials, and insights about Unity assets, workflow automation, and game development."
  />
  <meta property="og:image" content="https://lazy.solutions/media/images/asm_feature.webp" />
  <meta property="og:url" content="https://lazy.solutions/blog" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Blog | Lazy Solutions" />
  <meta
    name="twitter:description"
    content="Latest updates, tutorials, and insights about Unity assets, workflow automation, and game development."
  />
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<BlogList {data} />
