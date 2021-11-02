import {
  CreateRectangleOptionsParams,
  Rectangle,
} from '@engine/types/rectangle';

export const setRectangleParms = ({
  x = 0,
  y = 0,
  height = 50,
  width = 230,
} = {}): Rectangle => ({
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
