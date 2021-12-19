import { Ball, Board, Paddle } from '@engine/types/elements';

interface DetectBallCollisionParams {
  ballParams: Ball;
  paddleParams: Paddle;
}

interface DetectBoardCollisionParams {
  boardParams: Board;
  paddleParams: Paddle;
}

interface DetectPaddleCollisionsReturnType {
  isBallCollisionDetected: boolean;
  isBoardCollisionDetected: boolean;
}

const detectBallCollision = ({
  ballParams,
  paddleParams,
}: DetectBallCollisionParams): boolean =>
  ballParams.x >= paddleParams.x &&
  ballParams.x <= paddleParams.x + paddleParams.width &&
  paddleParams.y - ballParams.y <= ballParams.radius &&
  ballParams.y + ballParams.dy > ballParams.y;

const detectBoardCollision = ({
  boardParams,
  paddleParams,
}: DetectBoardCollisionParams): boolean =>
  paddleParams.x > 0 || paddleParams.x < boardParams.width;

export const detectPaddleCollisions = ({
  ballParams,
  boardParams,
  paddleParams,
}: DetectBallCollisionParams &
  DetectBoardCollisionParams): DetectPaddleCollisionsReturnType => {
  const isBallCollisionDetected = detectBallCollision({
    ballParams,
    paddleParams,
  });
  const isBoardCollisionDetected = detectBoardCollision({
    boardParams,
    paddleParams,
  });

  return {
    isBallCollisionDetected,
    isBoardCollisionDetected,
  };
};
