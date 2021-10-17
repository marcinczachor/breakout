<script lang="ts">
  import { Route, Router } from 'svelte-routing';

  import Container from 'components/container/Container.svelte';
  import Gameboard from 'pages/gameboard/Gameboard.svelte';
  import Homepage from 'pages/homepage/Homepage.svelte';

  import { routes } from 'constants/routes';
</script>

<Container>
  <Router basepath={routes.homepage}>
    <Route path={routes.homepage} component={Homepage} />
    <Route path={routes.board} component={Gameboard} />
  </Router>
</Container>
