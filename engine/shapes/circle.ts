import type { Circle, CreateCircleOptionsParams } from '@engine/types/shapes';

export const setCircleParms = ({ x, y, radius }: Circle): Circle => ({
  x,
  y,
  radius,
});

export const createCircle = (
  context: CanvasRenderingContext2D,
  options: CreateCircleOptionsParams
): void => {
  const {
    x,
    y,
    radius,
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
