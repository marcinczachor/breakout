import qs from './helper';

const paddle = (function () {
	'use strict';

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

export default paddle;
