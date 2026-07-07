<script>
  import Asm from '../Asm.svelte';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        'name': 'Advanced Scene Manager 3',
        'url': 'https://lazy.solutions/advanced-scene-manager/',
        'description': 'Advanced Scene Manager 3 is a professional Unity scene management asset for additive scene loading, loading screens, and multi-scene workflows.',
        'applicationCategory': 'DeveloperApplication',
        'operatingSystem': 'Unity',
        'publisher': {
          '@type': 'Organization',
          'name': 'Lazy Solutions',
          'url': 'https://lazy.solutions/'
        },
        'softwareVersion': '3'
      },
      {
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
            'name': 'Advanced Scene Manager',
            'item': 'https://lazy.solutions/advanced-scene-manager/'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What is a Unity scene manager?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Advanced Scene Manager 3 is a Unity scene manager that helps you define how scenes relate, load, and persist together instead of managing each scene file individually.'
            }
          },
          {
            '@type': 'Question',
            'name': 'When should I use ASM instead of Unity Scene Manager?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Use ASM when scene changes become expensive and the project needs a place to define scene relationships, collections, persistence, and lifecycle structure rather than scattered loading code.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I load a scene in Unity with ASM3?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Use ASM3 SceneCollection.Open() or Scene.Open() to load scenes in Unity, while ASM3 manages transition order, persistence, and cleanup instead of manual SceneManager calls.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How do I load a scene additively in Unity with ASM3?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'ASM3 supports Unity additive scene loading through SceneCollection.Open() and Scene.Open() with persistence settings, making additive loading simpler and more reliable than manual SceneManager calls.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Can ASM3 replace SceneManager.LoadScene in Unity?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Yes. ASM3 replaces raw SceneManager.LoadScene plumbing with a managed scene workflow using Open methods, additive loading, and persistence controls.'
            }
          }
        ]
      }
    ]
  };
</script>

<svelte:head>
  <title>Advanced Scene Manager 3 | Unity Scene Manager & Load Scene Workflow</title>
  <meta
    name="description"
    content="Advanced Scene Manager 3 is a Unity scene manager for additive scene loading, unity load scene workflows, loading screens, and reliable multi-scene workflows."
  />
  <meta
    name="keywords"
    content="Advanced Scene Manager, SceneManager Unity, Unity scene management, Unity scene manager, unity load scene, additive scene loading, Unity asset, multi-scene workflows"
  />
  <meta name="author" content="Patric Keisala" />
  <link rel="canonical" href="https://lazy.solutions/advanced-scene-manager/" />
  <meta name="google-site-verification" content="UOtRF1dl2NLgyJQr4NMBxI7m5Az1jrhrCb3ya5N2MNg" />
  <meta property="og:title" content="Advanced Scene Manager 3 | Unity Scene Manager & Load Scene Workflow" />
  <meta
    property="og:description"
    content="A Unity scene manager that makes additive scene loading, custom loading screens, and multi-scene workflows more reliable."
  />
  <meta property="og:image" content="https://lazy.solutions/media/images/asm_feature.webp" />
  <meta property="og:url" content="https://lazy.solutions/advanced-scene-manager/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Advanced Scene Manager 3 | Unity Scene Manager & Load Scene Workflow" />
  <meta name="twitter:description" content="A Unity scene manager that makes additive scene loading, loading screens, and multi-scene workflows more reliable." />
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>

<Asm />
