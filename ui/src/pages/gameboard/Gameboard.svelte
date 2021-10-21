<script lang="ts">
  import Board from './board/Board.svelte';
  import Score from './score/Score.svelte';
</script>

<div class="gameboard">
  <Score />
  <Board />
</div>

<style>
  .gameboard {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
  }
</style>
