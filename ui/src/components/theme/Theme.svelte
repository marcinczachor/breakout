<style>
	@import "https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap";

	:global(*) {
		font-family: 'Roboto', sans-serif;
	}

	:global(*, *::after, *::before) {
		box-sizing: border-box;
	}
</style>

<main>
  <slot />
</main>
