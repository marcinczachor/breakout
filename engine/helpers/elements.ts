import { Ball, Board, Brick, Paddle } from '@engine/types/elements';

export const initBall = ({ x, dx, y, dy, radius }: Ball): Ball => ({
  x,
  dx,
  y,
  dy,
  radius,
});

export const initBoard = ({ height, width }: Board): Board => ({
  height,
  width,
});

export const initBrick = ({ x, y, width, height }: Brick): Brick => ({
  x,
  y,
  width,
  height,
});

export const initPaddle = ({ x, dx, y, height, width }: Paddle): Paddle => ({
  x,
  dx,
  y,
  height,
  width,
});
