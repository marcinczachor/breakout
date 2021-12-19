import { colors } from '@ui/src/constants/colors';
import {
  detectHorizontalCollision,
  detectVerticalCollision,
} from './collisions/board';
import { detectCollision } from './collisions/paddle';
import { clearCanvas } from './helpers/board';
import { createCircle } from './shapes/circle';
import { createRectangle } from './shapes/rectangle';

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
    frame = requestAnimationFrame(draw);

    clearCanvas(context);

    const isHorizontalCollisionDetected = detectHorizontalCollision({
      x,
      dx,
      ballRadius: 15,
      boardWidth: context.canvas.width,
    });

    const isVerticalCollisionDetected = detectVerticalCollision({
      y,
      dy,
      ballRadius: 15,
      boardHeight: context.canvas.height,
    });

    const isPaddleCollisionDetected = detectCollision(
      { x, y, dy, radius: 15 },
      {
        x: context.canvas.width / 2 - 75,
        y: context.canvas.height - 25,
        width: 150,
      }
    );

    createCircle(context, { x, y, radius: 15, fill: colors.black[400] });
    createRectangle(context, {
      x: context.canvas.width / 2 - 75,
      y: context.canvas.height - 25,
      width: 150,
      height: 15,
      fill: colors.waxFlower[600],
    });

    if (isHorizontalCollisionDetected) {
      dx = -dx;
    }

    if (isVerticalCollisionDetected || isPaddleCollisionDetected) {
      dy = -dy;
    }

    x += dx;
    y += dy;
  };

  draw();

  return frame;
};
