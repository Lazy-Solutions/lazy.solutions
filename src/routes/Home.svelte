<script>
  const publisherUrl =
    'https://af.unity.com/sr/camref:1100ljPVc/destination:https://assetstore.unity.com/publishers/48996';
  const asmUrl =
    'https://af.unity.com/sr/camref:1100ljPVc/destination:https://assetstore.unity.com/packages/tools/utilities/advanced-scene-manager-3-330926';
  const flowEditorUrl =
    'https://af.unity.com/sr/camref:1100ljPVc/destination:https://assetstore.unity.com/packages/tools/visual-scripting/flow-editor-for-advanced-scene-manager-374938';

  const assets = [
    {
      status: 'Released',
      title: 'Flow Editor',
      body:
        'A visual node-based editor for Advanced Scene Manager, designed to help you map and manage complex scene flows with ease.',
      href: flowEditorUrl
    },
    {
      status: 'Under Development',
      title: 'Scene Data Components',
      body: 'Powerful data persistence for your scenes.',
      href: publisherUrl
    },
    {
      status: 'Undecided',
      title: 'Future Project',
      body:
        'Stay tuned for more professional Unity assets and production workflow tools designed to improve your production pipeline.',
      href: publisherUrl
    }
  ];

  const team = [
    {
      name: 'Patric Keisala',
      role: 'Studio Manager, Founder',
      image: '/media/images/portrait/patric.webp',
      alt: 'Portrait of Patric Keisala'
    },
    {
      name: 'Andreas Ingeholm',
      role: 'Programmer',
      image: '/media/images/portrait/andreas.webp',
      alt: 'Portrait of Andreas Ingeholm'
    }
  ];
</script>

<header class="hero">
  <div class="LogoWrapper" aria-hidden="true">
    <img class="header-background" src="/media/images/bg.webp" alt="" />
  </div>

  <section class="hero-content" aria-labelledby="hero-title">
    <p class="eyebrow">Professional Unity assets from Sweden</p>
    <h1 id="hero-title">Professional Unity Scene Manager Tools for Production.</h1>
    <p class="hero-copy">
      Lazy Solutions develops focused Unity assets that reduce setup time, improve project structure, and support
      teams building maintainable productions.
    </p>
    <div class="hero-actions">
      <a class="button primary" href="#Projects">View Featured Asset</a>
      <a class="button secondary" target="_blank" rel="noopener noreferrer" href={publisherUrl}>Asset Store</a>
    </div>
  </section>
</header>

<main>
  <section id="Store" class="store-strip" aria-label="Store links">
    <p>Browse all published tools on the Unity Asset Store</p>
    <a class="store-button" target="_blank" rel="noopener noreferrer" href={publisherUrl}>Publisher Page</a>
  </section>

  <section id="Projects" class="projects-section" aria-labelledby="projects-title">
    <div class="project-heading">
      <div>
        <p class="section-kicker">Featured Asset</p>
        <h2 id="projects-title">Advanced Scene Manager 3</h2>
      </div>
      <p class="section-lead">
        A professional workflow asset for Unity teams that need structured scene loading, grouping, and project
        navigation.
      </p>
    </div>

    <div class="project-card">
      <div class="project-visual" style="background-image: url('/media/images/asm_feature.webp');">
        <span>Workflow Tool</span>
      </div>
      <div class="project-content">
        <p class="eyebrow">Scene workflow management</p>
        <h3>Keep complex Unity projects organized.</h3>
        <p>
          Advanced Scene Manager helps teams define reliable scene structures, reduce manual setup, and maintain
          consistent workflows across production.
        </p>
        <div class="project-actions">
          <a class="button primary" href="/advanced-scene-manager/">Product Page</a>
          <a class="button tertiary" target="_blank" rel="noopener noreferrer" href={asmUrl}>Unity Asset Store</a>
          <a class="button secondary" href="/showcase/advanced-scene-manager/">Showcase</a>
        </div>
      </div>
    </div>
  </section>

  <section id="Assets" class="assets-section" aria-labelledby="assets-title">
    <div class="assets-header">
      <p class="section-kicker">Other Assets</p>
      <h2 id="assets-title">Additional workflow tools</h2>
      <p>
        Explore our upcoming tools and specialized assets designed to complement our existing solutions and further
        streamline your production pipeline.
      </p>
    </div>

    <div class="asset-grid">
      {#each assets as asset}
        <article class="asset-card">
          <span class="asset-status">{asset.status}</span>
          <h3>{asset.title}</h3>
          <p>{asset.body}</p>
          <a class="button secondary" target="_blank" rel="noopener noreferrer" href={asset.href}>Unity Asset Store</a>
        </article>
      {/each}
    </div>
  </section>

  <section id="Team" class="team-section" aria-labelledby="team-title">
    <div class="team-header">
      <p class="section-kicker">Team</p>
      <h2 id="team-title">The team behind the assets</h2>
      <p>
        We are an independent Swedish studio focused on Unity assets, editor tooling, and practical workflow
        improvements for production teams.
      </p>
    </div>

    <div class="team">
      {#each team as member}
        <article class="staff">
          <div class="portrait">
            <img src={member.image} alt={member.alt} />
          </div>
          <h3>{member.name}</h3>
          <h4>{member.role}</h4>
          <p>Sweden</p>
        </article>
      {/each}
    </div>
  </section>
</main>
