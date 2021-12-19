export const detectHorizontalCollision = ({
  x,
  dx,
  ballRadius,
  boardWidth,
}: {
  [k: string]: any;
}): boolean => x + dx > boardWidth - ballRadius || x + dx < 0 + ballRadius;

export const detectVerticalCollision = ({
  y,
  dy,
  ballRadius,
  boardHeight,
}: {
  [k: string]: any;
}): boolean => y + dy < 0 + ballRadius || y + dy > boardHeight - ballRadius;
