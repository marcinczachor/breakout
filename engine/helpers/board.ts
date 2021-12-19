export const clearCanvas = (context: CanvasRenderingContext2D | null): void => {
  if (!context) {
    return;
  }

  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
};
