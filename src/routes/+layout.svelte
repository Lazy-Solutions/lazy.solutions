<script>
  import { page } from '$app/stores';
  import Navigation from '../components/Navigation.svelte';
  import Footer from '../components/Footer.svelte';
  import '../app.css';

  import { config } from "@fortawesome/fontawesome-svg-core";
  config.autoAddCss = false;
  config.keepOriginalSource = false;
	config.showMissingIcons = false;
  
  $: pathname = $page.url.pathname;
</script>

<Navigation />
<slot />
<Footer />
