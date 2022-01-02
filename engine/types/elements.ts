export interface Ball {
  x: number;
  dx: number;
  y: number;
  dy: number;
  radius: number;
}

export interface Board {
  height: number;
  width: number;
}

export interface Brick {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Paddle {
  x: number;
  dx: number;
  y: number;
  width: number;
  height: number;
}
