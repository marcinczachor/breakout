<script lang="ts">
  import H1 from './H1/H1.svelte';
  import H2 from './H2/H2.svelte';
  import H3 from './H3/H3.svelte';
  import P from './P/P.svelte';
  import Span from './Span/Span.svelte';

  export let component: 'h1' | 'h2' | 'h3' | 'p' | 'span' = 'span';

  type TypographyComponent =
    | typeof H1
    | typeof H2
    | typeof H3
    | typeof P
    | typeof Span;

  const variants: Record<typeof component, TypographyComponent> = {
    h1: H1,
    h2: H2,
    h3: H3,
    p: P,
    span: Span,
  } as const;

  const variant = variants[component];
</script>

<svelte:component this={variant}>
  <slot />
</svelte:component>
