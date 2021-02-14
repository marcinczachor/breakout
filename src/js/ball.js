import qs from './helper';

const ball = (function () {
  'use strict';

  const board = qs('.board');

  class Ball {
    constructor(paddle, settings, context) {
      this.paddle = paddle;
      this.settings = settings;
      this.context = context;
      this.radius = 15;
      this.x = board.width / 2;
      this.y = board.height - 35;
      this.dX = 5;
      this.dY = -5;
    }

    //Draw a ball at initial position
    drawBall() {
      this.context.fillStyle = 'rgb(255, 0, 0)';
      this.context.beginPath();
      this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      this.context.closePath();
      this.context.fill();
    }

    //Checking if ball collide with paddle so it can be moved towards wall of bricks
    paddleCollision() {
      if (
        this.x >= this.paddle.x &&
        this.x <= this.paddle.x + this.paddle.width
      ) {
        if (
          this.paddle.y - this.y <= this.radius &&
          this.y + this.dY > this.y
        ) {
          this.dY = -this.dY;
        }
      }
    }

    //Detecting collision with walls on the left and right
    horizontalCollision() {
      if (
        this.x + this.dX > board.width - this.radius ||
        this.x + this.dX < 0 + this.radius
      ) {
        this.dX = -this.dX;
      }
    }

    //Detecting collision with walls on top and bottom
    verticalCollision() {
      if (this.y + this.dY < 0 + this.radius) {
        this.dY = -this.dY;
      } else if (
        this.y + this.dY > board.height - this.radius &&
        !(
          this.x >= this.paddle.x && this.x <= this.paddle.x + this.paddle.width
        )
      ) {
        this.settings.lives--;
        if (!this.settings.lives) {
          alert('Game Over!');
          document.location.reload();
        } else {
          this.x = board.width / 2;
          this.y = board.height - 35;
          this.paddle.x = (board.width - 150) / 2;
          this.paddle.y = board.height - 20;
        }
      }
    }

    //Redraw ball every time its coordinates change
    moveBall() {
      this.context.clearRect(0, 0, board.width, board.height);
      this.drawBall();

      //Check collisions with borders of the board and paddle
      this.horizontalCollision();
      this.verticalCollision();
      this.paddleCollision();

      this.x += this.dX;
      this.y += this.dY;
    }
  }

  return {
    class: Ball,
  };
})();

export default ball;
