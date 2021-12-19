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
