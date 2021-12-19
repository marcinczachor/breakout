import { detectBoardCollisions } from '@engine/collisions/board';
import { detectPaddleCollisions } from '@engine/collisions/paddle';
import { clearCanvas } from '@engine/helpers/board';
import { createCircle } from '@engine/shapes/circle';
import { createRectangle } from '@engine/shapes/rectangle';
import { Ball, Board, Paddle } from '@engine/types/elements';
import { colors } from '@ui/src/constants/colors';

export const init = (
  context: CanvasRenderingContext2D | null
): number | undefined => {
  if (!context) {
    return;
  }

  let frame: number | undefined;

  let dx = 5;
  let dy = -5;

  let x = context.canvas.width / 2;
  let y = 300;

  const draw = () => {
    const BALL_PARAMS: Ball = {
      x,
      dx,
      y,
      dy,
      radius: 15,
    };

    const BOARD_PARAMS: Board = {
      height: context.canvas.height,
      width: context.canvas.width,
    };

    const PADDLE_PARAMS: Paddle = {
      x: context.canvas.width / 2 - 75,
      y: context.canvas.height - 25,
      dx: 10,
      height: 15,
      width: 150,
    };

    frame = requestAnimationFrame(draw);

    clearCanvas(context);

    const { isHorizontalCollisionDetected, isVerticalCollisionDetected } =
      detectBoardCollisions({
        ballParams: BALL_PARAMS,
        boardParams: BOARD_PARAMS,
      });

    const { isBallCollisionDetected } = detectPaddleCollisions({
      ballParams: BALL_PARAMS,
      boardParams: BOARD_PARAMS,
      paddleParams: PADDLE_PARAMS,
    });

    createCircle(context, { ...BALL_PARAMS, fill: colors.black[400] });
    createRectangle(context, {
      ...PADDLE_PARAMS,
      fill: colors.waxFlower[600],
    });

    if (isHorizontalCollisionDetected) {
      dx = -dx;
    }

    if (isVerticalCollisionDetected || isBallCollisionDetected) {
      dy = -dy;
    }

    x += dx;
    y += dy;
  };

  draw();

  return frame;
};
