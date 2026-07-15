<script>
    export let id;
    let loaded = false; 
</script>

{#if loaded}
<iframe
    width="100%"
    src="https://www.youtube.com/embed/K0wFdUaBmbw?rel=0&amp;modestbranding=1"
    title="Advanced Scene Manager 3 Overview"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
></iframe>
{:else}
<button class="youtube-preview" aria-label="Play video" on:click={() => loaded = true}>
    <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt="Video preview">
</button>
{/if}