<script>
  import { page } from '$app/stores';
  import Navigation from '../components/Navigation.svelte';
  import Footer from '../components/Footer.svelte';
  import '../app.css';

  $: pathname = $page.url.pathname;
</script>

<Navigation currentPath={pathname} />
<slot />
<Footer />
