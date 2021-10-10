<script lang="ts">
  export let text: string;
</script>

<style>
  .text {
    margin: 0 0 0.75rem;
    font-size: clamp(1.5rem, 10vw, 2.25rem);
  }
</style>

<h2 class="text">{text}</h2>
