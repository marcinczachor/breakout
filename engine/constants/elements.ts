const BRICKS_ARRAY = Array(8).fill(null);

export const BALL_RADIUS = 15;
export const BALL_X = 600;
export const BALL_DX = 5;
export const BALL_Y = 300;
export const BALL_DY = -5;

export const BRICK_HEIGHT = 25;
export const BRICK_WIDTH = 144;
export const BRICK_X = 6;
export const BRICK_Y = 10;
export const BRICK_VERTICAL_OFFSET = 10;
export const BRICK_HORIZONTAL_OFFSET = 5;

export const PADDLE_HEIGHT = 15;
export const PADDLE_WIDTH = 150;
export const PADDLE_X = 525;
export const PADDLE_DX = 10;
export const PADDLE_Y = 555;

export const TOP_LEVEL_BRICK_Y = BRICK_Y;
export const MIDDLE_LEVEL_BRICK_Y =
  TOP_LEVEL_BRICK_Y + BRICK_HEIGHT + BRICK_VERTICAL_OFFSET;
export const BOTTOM_LEVEL_BRICK_Y =
  MIDDLE_LEVEL_BRICK_Y + BRICK_HEIGHT + BRICK_VERTICAL_OFFSET;

export const BALL_INIT_PARAMS = {
  X: BALL_X,
  DX: BALL_DX,
  Y: BALL_Y,
  DY: BALL_DY,
  RADIUS: BALL_RADIUS,
};

export const BRICKS_INIT_PARAMS = [
  [
    ...BRICKS_ARRAY.map((_, i) => ({
      id: i + 1,
      x: BRICK_X + i * (BRICK_WIDTH + BRICK_HORIZONTAL_OFFSET),
      y: TOP_LEVEL_BRICK_Y,
      height: BRICK_HEIGHT,
      width: BRICK_WIDTH,
      isActive: true,
    })),
  ],
  [
    ...BRICKS_ARRAY.map((_, i) => ({
      id: i + 9,
      x: BRICK_X + i * (BRICK_WIDTH + BRICK_HORIZONTAL_OFFSET),
      y: MIDDLE_LEVEL_BRICK_Y,
      height: BRICK_HEIGHT,
      width: BRICK_WIDTH,
      isActive: true,
    })),
  ],
  [
    ...BRICKS_ARRAY.map((_, i) => ({
      id: i + 17,
      x: BRICK_X + i * (BRICK_WIDTH + BRICK_HORIZONTAL_OFFSET),
      y: BOTTOM_LEVEL_BRICK_Y,
      height: BRICK_HEIGHT,
      width: BRICK_WIDTH,
      isActive: true,
    })),
  ],
];

export const PADDLE_INIT_PARAMS = {
  X: PADDLE_X,
  DX: PADDLE_DX,
  Y: PADDLE_Y,
  HEIGHT: PADDLE_HEIGHT,
  WIDTH: PADDLE_WIDTH,
};
