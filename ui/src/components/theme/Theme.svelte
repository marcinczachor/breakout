<style>
	@import "https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap";

  :global(:root) {
    --color-background: hsl(52, 50%, 90%);
    --color-primary: hsl(190, 100%, 55%);
    --color-secondary: hsl(37, 79%, 75%);
    --color-tertiary: hsl(13, 68%, 60%);
    --color-text: hsl(234, 20%, 30%);
  }

	:global(*) {
		font-family: 'Roboto', sans-serif;
    color: var(--color-text);
	}

	:global(*, *::after, *::before) {
		box-sizing: border-box;
	}

  :global(body) {
    height: 100vh;
    margin: 0;
    font-size: 16px;
  }

  .content {
    min-height: 100%;
    padding: 2rem 1.5rem;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background: var(--color-background);
  }
</style>

<main class="content">
  <slot />
</main>
