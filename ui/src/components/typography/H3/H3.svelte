<script lang="ts">
  export let text: string;
</script>

<style>
  .text {
    margin: 0 0 0.625rem;
    font-size: clamp(1.25rem, 10vw, 2rem);
  }
</style>

<h3 class="text">{text}</h3>
