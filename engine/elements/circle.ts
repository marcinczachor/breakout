import type { Circle, CreateCircleOptionsParams } from '@engine/types/circle';

export const setCircleParms = ({ x = 0, y = 0, radius = 15 } = {}): Circle => ({
  x,
  y,
  radius,
});

export const createCircle = (
  context: CanvasRenderingContext2D | null,
  options: CreateCircleOptionsParams
): void => {
  if (!context) {
    return;
  }

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
