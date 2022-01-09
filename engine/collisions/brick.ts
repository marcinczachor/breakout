import { Ball, Brick } from '@engine/types/elements';

interface DetectBallCollisionParams {
  ballParams: Ball;
  brickParams: Brick;
}

interface DetectBallCollisionsReturnType {
  isBallCollisionDetected: boolean;
}

const detectBallCollision = ({
  ballParams,
  brickParams,
}: DetectBallCollisionParams): boolean =>
  ballParams.x > brickParams.x &&
  ballParams.x < brickParams.x + brickParams.width &&
  ballParams.y - ballParams.radius > brickParams.y &&
  ballParams.y - ballParams.radius < brickParams.y + brickParams.height;

export const detectBrickCollisions = ({
  ballParams,
  brickParams,
}: DetectBallCollisionParams): DetectBallCollisionsReturnType => {
  const isBallCollisionDetected = detectBallCollision({
    ballParams,
    brickParams,
  });

  return {
    isBallCollisionDetected,
  };
};
