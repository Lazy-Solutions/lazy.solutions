<script>
  const publisherUrl =
    'https://af.unity.com/sr/camref:1100ljPVc/pubref:website/destination:https://assetstore.unity.com/publishers/48996';

  let navOpen = false;
  const homeHref = '/';

  function toggleMenu() {
    navOpen = !navOpen;
    document.body.classList.toggle('no-scroll', navOpen);
  }

  function closeMenu() {
    navOpen = false;
    document.body.classList.remove('no-scroll');
  }
</script>

<nav id="navigation" class:nav-open={navOpen} aria-label="Primary navigation">
  <a class="brand-mark" href={homeHref} aria-label="Lazy Solutions home" on:click={closeMenu}>
    <img class="lazy_icon" src="/media/images/logo.svg" alt="Lazy Solutions Homepage" height="35" width="42" />
    <span class="brand-name">Lazy Solutions</span>
  </a>

  <button class="menu-toggle" aria-label="Toggle menu" aria-expanded={navOpen} on:click={toggleMenu}>
    <i class="fas fa-bars"></i>
  </button>

  <div class="nav-links">
    <a href="/#Projects" on:click={closeMenu}>Projects</a>
    <a href="/#About" on:click={closeMenu}>About Us</a>
    <a href="/#navbar-footer" on:click={closeMenu}>Social</a>
    <a target="_blank" rel="noopener noreferrer" href={publisherUrl} on:click={closeMenu}>Asset Store</a>
    <a href="/support" on:click={closeMenu}>Support</a>
  </div>
</nav>
