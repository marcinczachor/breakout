import qs from './helper';

const bricks = (function () {
  'use strict';

  const board = qs('.board');
  let wallOfBricks = Array(5)
    .fill()
    .map((cell) => Array(3).fill(null));

  class Brick {
    constructor() {
      this.x = 0;
      this.y = 0;
      this.width = 228;
      this.height = 45;
      this.offsetLeft = 40;
      this.offsetTop = 40;
      this.status = 1;
    }
  }

  class BrickWall {
    static fillWall() {
      return wallOfBricks.map((array) => array.map((cell) => new Brick()));
    }

    constructor(ball, paddle, settings, context) {
      this.ball = ball;
      this.paddle = paddle;
      this.settings = settings;
      this.context = context;
      this.padding = 15;
      this.columns = 5;
      this.rows = 3;
      this.wall = BrickWall.fillWall();
    }

    //Draw wall of bricks set in this.wall property
    drawBricks() {
      const width = this.wall[0][0].width;
      const height = this.wall[0][0].height;
      const offsetLeft = this.wall[0][0].offsetLeft;
      const offsetTop = this.wall[0][0].offsetTop;
      let stX, stY;

      this.wall.map((array, i) =>
        array.map((cell, j) => {
          if (this.wall[i][j].status === 1) {
            stX = i * (width + this.padding) + offsetLeft;
            stY = j * (height + this.padding) + offsetTop;

            this.wall[i][j].x = stX;
            this.wall[i][j].y = stY;

            this.context.fillStyle = 'rgb(92, 100, 174)';
            this.context.beginPath();
            this.context.fillRect(stX, stY, width, height);
            this.context.closePath();
          }
        })
      );
    }

    //Set win condition for the game
    winCondition() {
      const { level, score } = this.settings;

      if (level >= 3 && score === 450) {
        alert('CONGRATULATIONS! YOU FINISHED THE GAME!');
        document.location.reload();
      } else {
        alert('CONGRATULATIONS! YOU FINISHED LEVEL: ' + level);
        this.settings.level++;
        this.settings.lives++;
      }
    }

    //Set new level for the game
    setNewLevel() {
      const { level, score } = this.settings;

      if (level * 150 === score) {
        this.ball.x = board.width / 2;
        this.ball.y = board.height - 35;
        this.paddle.x = (board.width - 150) / 2;
        this.paddle.y = board.height - 20;

        this.ball.dX = this.ball.dX < 0 ? -this.ball.dX : this.ball.dX;
        this.ball.dY =
          this.ball.dY < 0 ? -this.ball.dY + 2.5 : this.ball.dY + 2.5;

        this.winCondition();
        this.wall = BrickWall.fillWall();
      }
    }

    //Detect collision with each brick so that wall can be redraw
    detectColision() {
      const width = this.wall[0][0].width;
      const height = this.wall[0][0].height;
      let brick;

      this.drawBricks();

      this.wall.map((array, i) =>
        array.map((cell, j) => {
          if (this.wall[i][j].status === 1) {
            brick = this.wall[i][j];

            if (
              this.ball.x > brick.x &&
              this.ball.x < brick.x + width &&
              this.ball.y > brick.y &&
              this.ball.y < brick.y + height
            ) {
              this.ball.dY = -this.ball.dY;
              brick.status = 0;
              this.settings.score += 10;
              this.setNewLevel();
            }
          }
        })
      );
    }
  }

  return {
    class: BrickWall,
  };
})();

export default bricks;
