<script lang="ts">
  import { colors } from '@ui/constants/colors';

  export let score = 0;
  export let timer = 0;
</script>

<div
  class="score"
  style="--color-primary: {colors.turquoise[400]};
        --color-white: {colors.white[400]}"
>
  <ul class="list">
    <li class="row">
      <span>Score:</span>
      <span>{score}</span>
    </li>
    <li class="row">
      <span>Timer:</span>
      <span>{timer}</span>
    </li>
  </ul>
</div>

<style>
  .score {
    max-width: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 2rem;
    background: var(--color-primary);
  }

  .list {
    min-width: 12.5rem;
    display: flex;
    padding: 0;
    align-items: center;
    justify-content: space-between;
  }

  .row {
    min-width: 5rem;
    display: flex;
    justify-content: space-between;
  }

  span {
    color: var(--color-white);
  }
</style>
