<script>
  import Home from './Home.svelte';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        'url': 'https://lazy.solutions/',
        'name': 'Lazy Solutions',
        'description': 'Professional Unity assets for scene management, workflow automation, and production-ready project structure.',
        'publisher': {
          '@type': 'Organization',
          'name': 'Lazy Solutions',
          'url': 'https://lazy.solutions/'
        }
      },
      {
        '@type': 'Organization',
        'name': 'Lazy Solutions',
        'url': 'https://lazy.solutions/',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://lazy.solutions/media/images/asm_feature.webp'
        }
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://lazy.solutions/'
          }
        ]
      }
    ]
  };
</script>

<svelte:head>
  <title>Lazy Solutions | Unity Assets and Production Tools</title>
  <meta
    name="description"
    content="Lazy Solutions creates professional Unity assets and production tools for scene management, workflow automation, and maintainable game development pipelines."
  />
  <meta
    name="keywords"
    content="Unity assets, Unity tools, Unity development, scene management, workflow tools, production tools, Lazy Solutions"
  />
  <meta name="author" content="Patric Keisala" />
  <link rel="canonical" href="https://lazy.solutions/" />
  <meta property="og:title" content="Lazy Solutions | Unity Assets and Production Tools" />
  <meta
    property="og:description"
    content="Professional Unity assets for scene management, workflow automation, and production-ready project structure."
  />
  <meta property="og:image" content="https://lazy.solutions/media/images/asm_feature.webp" />
  <meta property="og:url" content="https://lazy.solutions/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Lazy Solutions | Unity Assets and Production Tools" />
  <meta
    name="twitter:description"
    content="Professional Unity assets for scene management, workflow automation, and production-ready project structure."
  />
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<Home />
