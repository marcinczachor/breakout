<script>
  import { colors } from '@ui/constants/colors';
</script>

<main class="main" style="--color-background: {colors.gray[400]}">
  <div class="content">
    <slot />
  </div>
</main>

<style>
  @import 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap';

  :global(*) {
    font-family: 'Roboto', sans-serif;
  }

  :global(*, *::after, *::before) {
    box-sizing: border-box;
  }

  :global(body) {
    height: 100vh;
    margin: 0;
    font-size: 1rem;
  }

  .main {
    min-height: 100%;
    display: flex;
    padding: 2rem 1rem;
    align-items: center;
    justify-content: center;
    background: var(--color-background);
  }

  .content {
    max-width: 80rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }
</style>
