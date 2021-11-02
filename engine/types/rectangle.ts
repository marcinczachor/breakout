export interface Rectangle {
  x: number;
  y: number;
  height: number;
  width: number;
}

export interface CreateRectangleOptionsParams extends Rectangle {
  fill: string;
}
