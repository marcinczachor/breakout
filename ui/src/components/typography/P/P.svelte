<script lang="ts">
  export let text: string;
</script>

<style>
  .text {
    margin: 0 0 0.5rem;
    font-size: clamp(0.75rem, 10vw, 1rem);
  }
</style>

<p class="text">{text}</p>
