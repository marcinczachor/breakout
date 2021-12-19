export const detectCollision = (ball: any, paddle: any): boolean =>
  ball.x >= paddle.x &&
  ball.x <= paddle.x + paddle.width &&
  paddle.y - ball.y <= ball.radius &&
  ball.y + ball.dy > ball.y;
