import { CreateRectangleOptionsParams, Rectangle } from '@engine/types/shapes';

export const setRectangleParms = ({
  x,
  y,
  height,
  width,
}: Rectangle): Rectangle => ({
  x,
  y,
  height,
  width,
});

export const createRectangle = (
  context: CanvasRenderingContext2D | null,
  options: CreateRectangleOptionsParams
): void => {
  if (!context) {
    return;
  }

  const { x, y, height, width, fill } = options;

  context.fillStyle = fill;

  context.beginPath();
  context.fillRect(x, y, width, height);
  context.closePath();
  context.fill();
};
