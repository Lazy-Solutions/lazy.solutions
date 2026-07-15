<script>
  import Support from '../Support.svelte';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'url': 'https://lazy.solutions/support',
    'name': 'Support | Lazy Solutions Indie Game Studio',
    'description': 'Support and help for Lazy Solutions Indie Game Studio assets and tools.',
    'publisher': {
      '@type': 'Organization',
      'name': 'Lazy Solutions',
      'url': 'https://lazy.solutions'
    },
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://lazy.solutions'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Support',
          'item': 'https://lazy.solutions/support'
        }
      ]
    }
  };
</script>

<svelte:head>
  <title>Support | Lazy Solutions Indie Game Studio</title>
  <meta name="description" content="Support and help for Lazy Solutions Indie Game Studio assets and tools." />
  <meta name="keywords" content="Lazy Solutions support, Unity asset support, Advanced Scene Manager support" />
  <meta name="author" content="Patric Keisala" />
  <link rel="canonical" href="https://lazy.solutions/support" />
  <meta property="og:title" content="Support | Lazy Solutions Indie Game Studio" />
  <meta property="og:description" content="Support and help for Lazy Solutions Indie Game Studio assets and tools." />
  <meta property="og:image" content="https://lazy.solutions/media/images/asm_feature.webp" />
  <meta property="og:url" content="https://lazy.solutions/support" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Support | Lazy Solutions Indie Game Studio" />
  <meta name="twitter:description" content="Support and help for Lazy Solutions Indie Game Studio assets and tools." />
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<Support />
