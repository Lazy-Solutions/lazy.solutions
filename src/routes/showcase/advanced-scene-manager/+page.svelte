<script>
  import ShowcaseAsm from '../../ShowcaseAsm.svelte';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'url': 'https://lazy.solutions/showcase/advanced-scene-manager/',
    'name': 'Advanced Scene Manager Showcase | Unity Project Examples',
    'description': 'Explore example Unity projects and showcase cases built with Advanced Scene Manager.',
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://lazy.solutions/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Showcase',
          'item': 'https://lazy.solutions/showcase/advanced-scene-manager/'
        }
      ]
    }
  };
</script>

<svelte:head>
  <title>Advanced Scene Manager Showcase | Unity Project Examples</title>
  <meta
    name="description"
    content="See example Unity projects and showcase cases built with Advanced Scene Manager for structured scene loading and production workflows."
  />
  <meta name="keywords" content="Unity Scene Manager, Advanced Scene Manager showcase, Unity scene loading examples, Unity workflow examples" />
  <meta name="author" content="Patric Keisala" />
  <link rel="canonical" href="https://lazy.solutions/showcase/advanced-scene-manager/" />
  <meta property="og:title" content="Advanced Scene Manager Showcase | Unity Project Examples" />
  <meta
    property="og:description"
    content="Explore example Unity projects and showcase cases built with Advanced Scene Manager."
  />
  <meta property="og:image" content="https://lazy.solutions/media/images/asm_feature.webp" />
  <meta property="og:url" content="https://lazy.solutions/showcase/advanced-scene-manager/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Advanced Scene Manager Showcase | Unity Project Examples" />
  <meta
    name="twitter:description"
    content="Explore example Unity projects and showcase cases built with Advanced Scene Manager."
  />
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<ShowcaseAsm />
