export interface Ball {
  x: number;
  y: number;
  radius: number;
}

export interface CreateBallParams {
  fill: string;
  endAngle?: number;
  startAngle?: number;
  isCounterClockwise?: boolean;
}
