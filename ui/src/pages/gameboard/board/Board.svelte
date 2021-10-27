<script lang="ts">
  import { onMount } from 'svelte';

  import { colors } from 'constants/colors';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const context = canvas?.getContext('2d');

    console.log({ canvas, context });
  });
</script>

<canvas
  bind:this={canvas}
  class="board"
  style="--color-primary: {colors.turquoise[400]};
        --color-white: {colors.white[400]}"
  width="1200"
  height="580"
/>

<style>
  .board {
    max-width: 100%;
    width: 100%;
    background: var(--color-white);
    border: 1px solid var(--color-primary);
  }
</style>
