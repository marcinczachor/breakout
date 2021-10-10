<script lang="ts">
	import { Route, Router } from 'svelte-routing';

	import Theme from 'components/theme/Theme.svelte';
	import Gameboard from 'pages/gameboard/Gameboard.svelte';
	import Homepage from 'pages/homepage/Homepage.svelte';
</script>

<Theme>
	<Router basepath="/">
		<Route path="/" component={Homepage} />
		<Route path="/board" component={Gameboard} />
	</Router>
</Theme>
