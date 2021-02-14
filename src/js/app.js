import qs from './helper';
import settings from './timer';
import bricks from './bricks';
import ball from './ball';
import paddle from './paddle';
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
          if (this.modal.className.match(/modal/)) {
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
