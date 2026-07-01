<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://kit.fontawesome.com/f15145c18c.js';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
  });
</script>
