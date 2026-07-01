<script>
  const projects = [
    {
      title: 'Seneca 7: A Cyberpunk Odyssey',
      href: 'https://store.steampowered.com/app/1901860/Seneca_7_A_Cyberpunk_Odyssey/',
      image: '/media/images/showcase/Seneca7_CoverPhoto_1920x1080.jpg',
      alt: 'Seneca 7',
      copyright: '"Seneca 7: A Cyberpunk Odyssey" © The Seneca Project 2022-2023',
      description:
        'Build a new life in a cozy cyberpunk adventure RPG! Polluted air having you gasping for breath? Drowning in endless debt? Online dating getting you nowhere? Leave your worries behind and reboot your life on Seneca 7, where dreams come true!*',
      note: '(Restrictions may apply. Results may vary.*)',
      quote:
        'ASM has a lot of great features built-in, including loading screens, pause screens, and profiles. Creating scene collections that have persistent objects with the ability to toggle the opening and closing of collections from a single Scene Helper asset made organizing and optimizing our project that much easier!'
    },
    {
      title: "Paladin's Oath",
      href: 'https://store.steampowered.com/app/1671590/Paladins_Oath/',
      image: '/media/images/showcase/paladinsoath.png',
      alt: "Paladin's Oath",
      copyright: '"Paladin\'s Oath" © Fire Biscuit Gaming',
      description:
        'Complex Strategy Fantasy card game RPG inspired by board games like Mage Knight or Gloomhaven. Combines elements of RPG, light deck-building, puzzle and strategy.',
      note: '',
      quote: 'It allowed me to setup simple workflows to work on composite scenes as well as very quickly setup the entire flow of scenes for my game.'
    }
  ];
</script>

<main class="showcase-page">
  <header class="showcase-header">
    <div class="header-content">
      <p class="section-kicker">Showcase</p>
      <h1>Projects using Unity Scene Manager</h1>
      <p>
        Discover how top developers use the Advanced Scene Manager to handle their
        <strong>Unity Scene Manager load scene</strong> tasks and project organization.
      </p>
    </div>
    <div class="header-cta">
      <p>Submit your project</p>
      <a href="mailto:nuwn@hotmail.com">nuwn@hotmail.com</a>
    </div>
  </header>

  <section class="showcase-grid" aria-label="Advanced Scene Manager project showcase">
    {#each projects as project}
      <article class="showcase-card">
        <a target="_blank" rel="noopener noreferrer" href={project.href}>
          <img class="card-visual" src={project.image} alt={project.alt} />
          <div class="card-content">
            <h2>{project.title}</h2>
            <p class="copyright">{project.copyright}</p>
            <p class="description">
              {project.description}
              {#if project.note}
                <b>{project.note}</b>
              {/if}
              <span>Click to find out more!</span>
            </p>
            <blockquote>{project.quote}</blockquote>
          </div>
        </a>
      </article>
    {/each}
  </section>
</main>
