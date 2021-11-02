<script lang="ts">
  import { onMount } from 'svelte';

  import { init } from '@engine/main';
  import { colors } from '@ui/constants/colors';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const context = canvas.getContext('2d');

    const frame = requestAnimationFrame(() => init(context));

    return () => {
      cancelAnimationFrame(frame);
    };
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
