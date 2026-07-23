<script>
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import {
    faDiscord,
    faYoutube,
    faXTwitter,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";
</script>

<footer id="navbar-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <p>Professional Unity assets and production tools from Sweden.</p>
    </div>

    <div class="footer-links">
      <h2>Social</h2>

      <nav class="social-media" aria-label="Social links">
        <a target="_blank"
          rel="noopener noreferrer"
          href="https://discord.com/invite/ayE4EHB6bQ"
          aria-label="Discord">
          <FontAwesomeIcon icon={faDiscord} />
        </a>

        <a target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/@lazysolutions"
          aria-label="YouTube">
          <FontAwesomeIcon icon={faYoutube} />
        </a>

        <a target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/Lazy_Solutions"
          aria-label="X">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        <a target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/lazysolutions"
          aria-label="X">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </nav>
    </div>

    <div class="footer-meta">
      <p>This site contains Unity Asset Store affiliate links.</p>
      <p>&copy; 2018 - 2026 Patric Keisala. All rights reserved.</p>
    </div>
  </div>
</footer>
