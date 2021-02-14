'use strict';

//Function that retreive DOM element by querySelector method
function qs(element, context) {
	return context !== undefined
		? context.querySelector(element)
		: document.querySelector(element);
}

const settings = (function () {
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
		class: Settings,
	};
})();

const bricks = (function () {
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

const ball = (function () {
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

const paddle = (function () {
	const board = qs('.board');

	class Paddle {
		constructor(context) {
			this.context = context;
			this.x = (board.width - 150) / 2;
			this.y = board.height - 20;
			this.width = 150;
			this.height = 15;
		}

		//Draw a paddle at initial position
		drawPaddle() {
			this.context.fillStyle = 'rgb(0, 191, 255)';
			this.context.beginPath();
			this.context.fillRect(this.x, this.y, this.width, this.height);
			this.context.closePath();
		}

		//Move paddle to the left/right on key down
		movePaddle(leftkeyDown, rightkeyDown) {
			this.drawPaddle();

			if (leftkeyDown && this.x > 0) {
				this.x -= 10;
			} else if (rightkeyDown && this.x < board.width - this.width) {
				this.x += 10;
			}
		}
	}

	return {
		class: Paddle,
	};
})();

// import '../css/styles.css';

const c = {};

const d = { ...c };

console.log(d);

const app = (function () {
	//Variables
	const board = qs('.board');
	const context = board.getContext('2d');
	let leftkeyDown = false;
	let rightkeyDown = false;

	//Instance of classes
	const gameSettings = new settings.class();
	const gamePaddle = new paddle.class(context);
	const gameBall = new ball.class(gamePaddle, gameSettings, context);
	const gameWall = new bricks.class(
		gameBall,
		gamePaddle,
		gameSettings,
		context
	);

	class App {
		constructor() {
			this.startGame = qs('.start-game');
			this.modal = qs('.modal');
			this.container = qs('.game');
		}

		//Handler on key up
		onKeyUp(event) {
			document.addEventListener(
				'keyup',
				(event) => {
					if (event.keyCode == 37) {
						leftkeyDown = false;
					} else if (event.keyCode == 39) {
						rightkeyDown = false;
					}
				},
				false
			);
		}

		//Handler on key down
		onKeyDown(event) {
			document.addEventListener(
				'keydown',
				(event) => {
					if (event.keyCode == 37) {
						leftkeyDown = true;
					} else if (event.keyCode == 39) {
						rightkeyDown = true;
					}
				},
				false
			);
		}

		//Redraw canvas for current state of the app
		redraw() {
			gameBall.moveBall();
			gamePaddle.movePaddle(leftkeyDown, rightkeyDown);
			gameWall.detectColision();
			gameSettings.fillStats();
			requestAnimationFrame(() => this.redraw());
		}

		//Handler on start game button click
		onClick() {
			this.startGame.addEventListener(
				'click',
				() => {
					if (this.modal.className.match(/\modal/)) {
						this.modal.classList.add('modal-hide');
						this.container.classList.add('container-show');

						gameSettings.changeTime();
						this.redraw();
					} else {
						this.modal.classList.remove('modal-hide');
						this.container.classList.remove('container-show');
					}
				},
				false
			);
		}

		//Initialize hanlders for paddle movement and start button click
		init() {
			this.onKeyUp();
			this.onKeyDown();
			this.onClick();
		}
	}

	return new App();
})();

//Start the App
app.init();
