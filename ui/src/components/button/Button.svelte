<script lang="ts">
  import Typography from '@ui/components/typography/Typography.svelte';

  import { colors } from '@ui/constants/colors';
  import type { Color } from '@ui/types/styles';

  export let color: Color = 'primary';
</script>

<button
  class="button {color}"
  style="--color-black: {colors.black[400]};
        --color-primary: {colors.turquoise[400]};
        --color-primary-500: {colors.turquoise[500]};
        --color-primary-600: {colors.turquoise[600]};
        --color-secondary: {colors.waxFlower[400]};
        --color-secondary-500: {colors.waxFlower[500]};
        --color-secondary-600: {colors.waxFlower[600]};
        --color-white: {colors.white[400]}"
  on:click
>
  <Typography component="span">
    <slot />
  </Typography>
</button>

<style>
  .button {
    max-width: 12rem;
    width: 100%;
    height: 3rem;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0.75rem;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  }

  .primary {
    background: var(--color-primary);
    color: var(--color-white);
    box-shadow: 0 0.125rem 0.625rem var(--color-primary);
  }

  .primary:hover {
    background: var(--color-primary-500);
    box-shadow: 0 0.125rem 0.625rem var(--color-primary-500);
  }

  .primary:active {
    background: var(--color-primary-600);
    box-shadow: 0 0.125rem 0.625rem var(--color-primary-600);
  }

  .primary:focus {
    background: var(--color-primary-600);
    box-shadow: 0 0.125rem 0.625rem var(--color-primary-600);
  }

  .secondary {
    background: var(--color-secondary);
    color: var(--color-black);
    box-shadow: 0 0.125rem 0.625rem var(--color-secondary);
  }

  .secondary:hover {
    background: var(--color-secondary-500);
    box-shadow: 0 0.125rem 0.625rem var(--color-secondary-500);
  }

  .secondary:active {
    background: var(--color-secondary-600);
    box-shadow: 0 0.125rem 0.625rem var(--color-secondary-600);
  }

  .secondary:focus {
    background: var(--color-secondary-600);
    box-shadow: 0 0.125rem 0.625rem var(--color-secondary-600);
  }
</style>
