import { detectBoardCollisions } from '@engine/collisions/board';
import { detectPaddleCollisions } from '@engine/collisions/paddle';
import { clearCanvas } from '@engine/helpers/board';
import { initBall, initBoard, initPaddle } from '@engine/helpers/elements';
import { createCircle } from '@engine/shapes/circle';
import {
  BALL_INIT_PARAMS,
  BRICKS_INIT_PARAMS,
  PADDLE_INIT_PARAMS,
} from '@engine/constants/elements';
import { createRectangle } from '@engine/shapes/rectangle';
import { colors } from '@ui/src/constants/colors';
import { detectBrickCollisions } from './collisions/brick';

export const init = (
  context: CanvasRenderingContext2D | null
): number | undefined => {
  if (!context) {
    return;
  }

  const radius = BALL_INIT_PARAMS.RADIUS;

  let frame: number | undefined;

  let dx = BALL_INIT_PARAMS.DX;
  let dy = BALL_INIT_PARAMS.DY;
  let x = BALL_INIT_PARAMS.X;
  let y = BALL_INIT_PARAMS.Y;

  let bricks = BRICKS_INIT_PARAMS;

  const draw = () => {
    const BALL_PARAMS = initBall({ x, dx, y, dy, radius });

    const BOARD_PARAMS = initBoard({
      height: context.canvas.height,
      width: context.canvas.width,
    });

    const PADDLE_PARAMS = initPaddle({
      x: PADDLE_INIT_PARAMS.X,
      dx: PADDLE_INIT_PARAMS.DX,
      y: PADDLE_INIT_PARAMS.Y,
      height: PADDLE_INIT_PARAMS.HEIGHT,
      width: PADDLE_INIT_PARAMS.WIDTH,
    });

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
      fill: colors.turquoise[600],
    });

    bricks = bricks.map((levels) =>
      levels
        .filter(({ isActive }) => isActive)
        .map((level) => {
          const { isBallCollisionDetected } = detectBrickCollisions({
            ballParams: BALL_PARAMS,
            brickParams: level,
          });

          createRectangle(context, {
            ...level,
            fill: colors.waxFlower[600],
          });

          if (isBallCollisionDetected) {
            dy = -dy;

            return {
              ...level,
              isActive: false,
            };
          }

          return {
            ...level,
          };
        })
    );

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
