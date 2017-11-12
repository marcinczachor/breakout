import qs from './helper';

const settings = (function () {
    'use strict';

    class Settings {
        constructor() {
            this.level = 1;
            this.score = 0;
            this.lives = 3;
            this.timer = 0;
            this.gameLevel = qs('.game-level');
            this.playerScore = qs('.player-score');
            this.playerLives = qs('.player-lives');
            this.setTimer = qs('.game-timer');
        }

        //Fill basic settings of the game
        fillStats() {
            this.gameLevel.innerHTML = this.level;
            this.playerScore.innerHTML = this.score;
            this.playerLives.innerHTML = this.lives;
        }

        //Increment seconds on the cloak        
        changeTime() {
            this.setTimer.innerHTML = this.timer + ' [s]';
            this.timer++;
            setTimeout(() => {
                this.changeTime();
            }, 1000);
        }
    }

    return {
        class: Settings
    };

})();

export default settings;