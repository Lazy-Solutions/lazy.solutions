<script>
  const assetStoreUrl =
    'https://af.unity.com/sr/camref:1100ljPVc/destination:https://assetstore.unity.com/packages/tools/utilities/advanced-scene-manager-3-330926';
  const trialUrl = 'https://github.com/Lazy-Solutions/AdvancedSceneManager/tree/main/trial';

  const features = [
    ['Additive Scene Loading', 'Load and unload scenes cleanly without the usual headaches.'],
    ['Custom Loading Screens', 'Built-in support for smooth loading screens with progress handling.'],
    ['Scene Collections', 'Organize your scenes into groups and load them together easily.'],
    ['Rich Loading Events', 'Callbacks for every stage of the loading process.'],
    ['Editor Visualization', 'Helpful tools to see and manage your scene flow in the editor.'],
    ['Persistent Objects', 'Better handling of DontDestroyOnLoad and cross-scene references.']
  ];
</script>

<main class="asm-page">
  <header class="asm-product-header">
    <div>
      <img src="/media/images/web_asm_icon.webp" alt="Advanced Scene Manager 3 icon" />
    </div>
  </header>

  <section class="asm-section asm-hero-section">
    <h1>Advanced Scene Manager 3 <br /> A Better Unity Scene Manager for Additive Loading</h1>
    <p class="subtitle">
      Simplify additive scene loading, custom loading screens, and multi-scene workflows with a professional
      <strong>Unity scene manager</strong> tool built for real game development.
    </p>
    <div class="asm-cta-buttons">
      <a href={assetStoreUrl} class="buy-btn" target="_blank" rel="noopener noreferrer">Get It on the Asset Store</a>
      <a href={trialUrl} class="trial-btn" target="_blank" rel="noopener noreferrer">Try Free Trial</a>
    </div>
  </section>

  <section class="asm-section">
    <h2>What is the best Unity scene manager for complex projects?</h2>
    <p>
      Advanced Scene Manager 3 (ASM3) is a complete <strong>Unity scene manager</strong> replacement that makes
      <strong>scene management in Unity</strong> more reliable for production teams and solo developers alike.
    </p>
    <p>
      Whether you need to <strong>load scenes additively</strong>, build polished custom loading screens, or manage
      complex multi-scene setups, ASM3 gives you a more structured approach than the built-in Unity SceneManager.
    </p>
  </section>

  <section class="asm-section">
    <h2>See Advanced Scene Manager 3 in Action</h2>
    <iframe
      width="100%"
      src="https://www.youtube.com/embed/K0wFdUaBmbw?rel=0&amp;modestbranding=1"
      title="Advanced Scene Manager 3 Overview"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </section>

  <section class="asm-section">
    <h2>Key Features</h2>
    <div class="asm-features-grid">
      {#each features as feature}
        <div class="asm-feature-item">
          <h3>{feature[0]}</h3>
          <p>{feature[1]}</p>
        </div>
      {/each}
    </div>
  </section>

  <section class="asm-section">
    <div class="review-stars" aria-label="Five star review">
      {#each Array(5) as _}
        <img src="/media/images/star.webp" alt="" />
      {/each}
    </div>
    <p>
      Since 2021, Advanced Scene Manager has helped thousands of Unity developers build more stable and organized
      multi-scene games. Known for its ease of use and excellent support.
    </p>
  </section>

  <section class="asm-section">
    <h2>Ready to simplify your Unity scene management?</h2>
    <p>
      <a href={trialUrl} target="_blank" rel="noopener noreferrer">Try the free trial</a> first, then grab the full
      version on the Unity Asset Store.
    </p>

    <div class="asm-cta-buttons">
      <a href={assetStoreUrl} class="buy-btn" target="_blank" rel="noopener noreferrer">Buy on Unity Asset Store</a>
    </div>
    <p class="support">
      Questions? Join our
      <a href="https://discord.com/invite/ayE4EHB6bQ" target="_blank" rel="noopener noreferrer">Discord community</a>
      for support and updates.
    </p>
  </section>
</main>
