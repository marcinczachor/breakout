export interface Circle {
  x: number;
  y: number;
  radius: number;
}

export interface CreateCircleOptionsParams extends Circle {
  fill: string;
  endAngle?: number;
  startAngle?: number;
  isCounterClockwise?: boolean;
}

export interface Rectangle {
  x: number;
  y: number;
  height: number;
  width: number;
}

export interface CreateRectangleOptionsParams extends Rectangle {
  fill: string;
}
