<script lang="ts">
  import { Link } from 'svelte-routing';

  import Typography from 'components/typography/Typography.svelte';

  import { colors } from 'constants/colors';
  import type { Color } from 'types/styles';

  export let to: string;
  export let color: Color = 'primary';
</script>

<div
  class="wrapper"
  style="--color-black: {colors.black[400]};
        --color-primary: {colors.turquoise[400]};
        --color-primary-500: {colors.turquoise[500]};
        --color-primary-600: {colors.turquoise[600]};
        --color-white: {colors.white[400]}"
>
  <Link class="link {color}" {to}>
    <Typography component="span">
      <slot />
    </Typography>
  </Link>
</div>

<style>
  .wrapper {
    max-width: 12rem;
    width: 100%;
    display: flex;
  }

  .wrapper :global(.link) {
    width: 100%;
    height: 3rem;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.75rem;
    text-decoration: none;
    outline: none;
    transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  }

  .wrapper :global(.primary) {
    background: var(--color-primary);
    color: var(--color-white);
    box-shadow: 0 0.125rem 0.625rem var(--color-primary);
  }

  .wrapper :global(.primary:hover) {
    background: var(--color-primary-500);
    box-shadow: 0 0.125rem 0.625rem var(--color-primary-500);
  }

  .wrapper :global(.primary:active) {
    background: var(--color-primary-600);
    box-shadow: 0 0.125rem 0.625rem var(--color-primary-600);
  }

  .wrapper :global(.primary:focus) {
    background: var(--color-primary-600);
    box-shadow: 0 0.125rem 0.625rem var(--color-primary-600);
  }
</style>
