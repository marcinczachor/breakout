import { Ball, Board } from '@engine/types/elements';

interface DetectCollisionParams {
  ballParams: Ball;
  boardParams: Board;
}

interface DetectBoardCollisionsReturnType {
  isHorizontalCollisionDetected: boolean;
  isVerticalCollisionDetected: boolean;
}

const detectHorizontalCollision = ({
  ballParams,
  boardParams,
}: DetectCollisionParams): boolean =>
  ballParams.x + ballParams.dx > boardParams.width - ballParams.radius ||
  ballParams.x + ballParams.dx < 0 + ballParams.radius;

const detectVerticalCollision = ({
  ballParams,
  boardParams,
}: DetectCollisionParams): boolean =>
  ballParams.y + ballParams.dy < 0 + ballParams.radius ||
  ballParams.y + ballParams.dy > boardParams.height - ballParams.radius;

export const detectBoardCollisions = ({
  ballParams,
  boardParams,
}: DetectCollisionParams): DetectBoardCollisionsReturnType => {
  const isHorizontalCollisionDetected = detectHorizontalCollision({
    ballParams,
    boardParams,
  });
  const isVerticalCollisionDetected = detectVerticalCollision({
    ballParams,
    boardParams,
  });

  return {
    isHorizontalCollisionDetected,
    isVerticalCollisionDetected,
  };
};
