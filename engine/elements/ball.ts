import type { Ball, CreateBallParams } from 'types/ball';

const setBallParms = ({ x = 0, y = 0, radius = 15 } = {}): Ball => ({
  x,
  y,
  radius,
});

export const createBall = (
  context: CanvasRenderingContext2D,
  options: CreateBallParams
): void => {
  const { x, y, radius } = setBallParms();

  const {
    fill,
    endAngle = 2 * Math.PI,
    startAngle = 0,
    isCounterClockwise = false,
  } = options;

  context.fillStyle = fill;

  context.beginPath();
  context.arc(x, y, radius, startAngle, endAngle, isCounterClockwise);
  context.closePath();
  context.fill();
};