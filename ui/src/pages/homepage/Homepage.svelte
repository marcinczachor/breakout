<script lang="ts">
  import Link from 'components/link/Link.svelte';
  import Typography from 'components/typography/Typography.svelte';
</script>

<section class="section">
  <Typography component="h1">Welcome to Breakout!</Typography>
  <article class="article">
    <Typography component="h2">Description</Typography>
    <Typography component="p">
      The game consist of ball, paddle and wall of bricks. A player has 3
      attempts to accomplish the current level. If a player aquires 150 points,
      the next level is set and ball starts to move faster. Also a player gains
      one additional life. The game finishes when a player reaches max level,
      which is currently set to 3 or loose all his available lives.
    </Typography>
    <Typography component="h2">Controls</Typography>
    <Typography component="p">
      Move paddle to the left by clicking &#8678(left arrow). Move paddle to the
      right by clicking &#8680(right arrow).
    </Typography>
  </article>
  <Link to="/board">Enter the game</Link>
</section>

<style>
  .section {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  .article {
    max-width: 50%;
  }
</style>
