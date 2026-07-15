<script>
  import YouTube from "../components/YouTube.svelte";

  const assetStoreUrl =
    "https://af.unity.com/sr/camref:1100ljPVc/pubref:website/destination:https://assetstore.unity.com/packages/tools/utilities/advanced-scene-manager-3-330926";
  const trialUrl =
    "https://github.com/Lazy-Solutions/AdvancedSceneManager/tree/main/trial";

  const features = [
    [
      "Additive Scene Management",
      "Build complete environments from multiple Unity scenes without custom loading infrastructure.",
    ],
    [
      "Loading Screens",
      "Keep Loading Screens connected to scene transitions and lifecycle events.",
    ],
    [
      "Scene Collections",
      "Define groups of scenes that belong together and manage them as complete setups."
    ],
    [
      "Scene Lifecycle Handling",
      "Coordinate scene changes with predictable events and cleanup.",
    ],
    [
      "Editor Tools",
      "Manage scene setups directly from the Unity Editor instead of manually handling scene combinations and loading states.",
    ],
    [
      "Persistent Scenes",
      "Keep shared systems and selected Unity scenes active across transitions."
    ]
  ];
</script>

<main class="asm-page">
  <header class="asm-product-header">
    <div>
      <img
        src="/media/images/web_asm_icon.webp"
        alt="Advanced Scene Manager 3 icon"
        fetchpriority="high"
        width="660"
        height="200"
      />
    </div>
  </header>

  <section class="asm-section asm-hero-section">
    <h1>The complete Unity Scene Manager for growing projects</h1>
    <p class="subtitle">
      Organize scenes, build additive scene workflows, and manage scene changes 
      through one complete Unity Scene Manager designed for growing projects.
    </p>
    <p class="hero-note">
      Replace scattered loading scripts, bootstrap scenes, and custom scene
      logic with one structured workflow for managing Unity scenes.
    </p>
    <div class="asm-cta-buttons">
      <a
        href={assetStoreUrl}
        class="buy-btn"
        target="_blank"
        rel="noopener noreferrer">Get It on the Asset Store</a
      >
      <a
        href={trialUrl}
        class="trial-btn"
        target="_blank"
        rel="noopener noreferrer">Try Free Trial</a
      >
    </div>
  </section>

  <section class="asm-section">
    <h2>Advanced scene management for growing Unity projects</h2>
    <p>
      As projects grow, scene handling expands far beyond <code>LoadSceneAsync()</code>. 
      Multiple scenes need to load together, shared systems need to remain
      active, Loading Screens and transitions become part of the player
      experience, and different project configurations appear for development,
      testing, and production.
    </p>
    <p>
        <strong>Advanced Scene Manager is a Unity Scene Manager</strong> designed for projects
        that need more structure than Unity's built-in scene loading provides.
        It builds on Unity's scene functionality by providing a structured way
        to organize scenes, manage additive scene workflows, control startup
        behavior, and handle scene changes consistently across your entire
        project. 
    </p>
  </section>

  <section class="asm-section">
    <h2>Organize your scenes</h2>
    <p>
      As Unity projects grow, scenes can become too large and difficult to
      maintain. Separating gameplay, UI, lighting, audio, managers, and world
      systems into dedicated scenes creates a more flexible project structure,
      but managing how those scenes are combined becomes increasingly complex.
    </p>
    <p>
      <strong>Advanced Scene Manager helps you organize these relationships using
        Scene Collections and Profiles</strong>
      , giving you a clear way to define which scenes belong together and how
      they should be combined. Instead of hiding scene rules inside custom
      loading code, your scene structure becomes visible, configurable, and
      easier to maintain.
    </p>
  </section>

  <section class="asm-section">
    <h2>Built around additive scene management</h2>
    <p>
      As Unity projects grow, building everything inside a single scene becomes
      difficult to manage.
      <strong>Additive scene management</strong> allows you to separate gameplay,
      systems, and content into independent scenes while combining them into complete
      experiences when needed.
    </p>
    <p>
      Advanced Scene Manager provides the structure around this approach, making
      it easier to organize additive scenes, keep shared systems loaded, and
      create consistent scene setups without building your own additive scene
      framework.
    </p>
  </section>

  <section class="asm-section">
    <h2>Stop building your own scene framework</h2>
    <p>
      Many Unity projects eventually create their own scene management layer. It
      starts with a loading helper, a bootstrap scene, persistent managers,
      additive loading utilities, and transition systems built around the
      project's specific needs.
    </p>
    <p>
      Over time, these solutions become a framework that requires its own
      design, documentation, maintenance, and debugging. 
      <strong>Advanced Scene Manager gives you a dedicated Unity Scene Manager system</strong> for projects 
      where scene handling has grown beyond simple loading, 
      saving you the time and effort of designing, maintaining, and debugging your own solution.
    </p>
  </section>

  <section class="asm-section">
    <div class="review-stars" aria-label="Five star review">
      {#each Array(5) as _}
        <img src="/media/images/star.webp" alt="Review star" />
      {/each}
    </div>
    <blockquote class="review-quote">
      “I find myself importing this asset as a standard for my workflow now. It just saves me so much time and pain. ASM does pretty much what I'd want to build myself anyway in a way that makes sense.”
      <span class="review-quote-attribution">Lucideus, Unity Asset Store review</span>
    </blockquote>
  </section>

  <section class="asm-section">
    <h2>See Advanced Scene Manager 3 in Action</h2>
    <YouTube id="K0wFdUaBmbw" />
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
    <h2>How do I load a scene in Unity with ASM3?</h2>
    <p>
      ASM3 makes scene loading part of your scene structure instead of scattering SceneManager calls throughout your project.
      For example:
    </p>
    <pre><code>
public class SceneLoader : MonoBehaviour
&#123;
    [SerializeField] private SceneCollection gameplayCollection;
    [SerializeField] private Scene mainMenuScene;

    public void OpenGameplay()
    &#123;
        gameplayCollection.Open();
    &#125;

    public void OpenMainMenu()
    &#123;
        mainMenuScene.Open();
    &#125;
&#125;
</code></pre>
    <p>
      <a href="https://github.com/Lazy-Solutions/AdvancedSceneManager" target="_blank" rel="noopener noreferrer">
        Read the ASM documentation for scene collection and scene open
        workflows.
      </a>
    </p>
  </section>

  

  <section class="asm-section">
    <h2>Ready to simplify your Unity scene management?</h2>
    <p class="asm-cta-intro">
      <a href={trialUrl} target="_blank" rel="noopener noreferrer">Try the free trial</a>
      first, then grab the full version on the Unity Asset Store.
    </p>

    <div class="asm-cta-buttons asm-cta-buttons-final">
      <a
        href={assetStoreUrl}
        class="buy-btn"
        target="_blank"
        rel="noopener noreferrer">Buy on Unity Asset Store</a
      >
    </div>
    <p class="support asm-cta-support">
      Questions? Join our
      <a
        href="https://discord.com/invite/ayE4EHB6bQ"
        target="_blank"
        rel="noopener noreferrer">Discord community</a
      >
      for support and updates.
    </p>
  </section>
</main>
