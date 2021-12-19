<script lang="ts">
  import { Route, Router } from 'svelte-routing';

  import Container from '@ui/components/container/Container.svelte';
  import Gameboard from '@ui/pages/gameboard/Gameboard.svelte';
  import Homepage from '@ui/pages/homepage/Homepage.svelte';

  import { routes } from '@ui/constants/routes';
</script>

<Container>
  <Router basepath={routes.homepage}>
    <Route path={routes.homepage} component={Homepage} />
    <Route path={routes.board} component={Gameboard} />
  </Router>
</Container>
