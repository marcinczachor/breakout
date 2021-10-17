interface CreateColorParams {
  hue?: number;
  saturation?: number;
  lightness?: number;
}

export const createColor = ({
  hue,
  saturation,
  lightness,
}: CreateColorParams): string => {
  if (
    hue === undefined ||
    saturation === undefined ||
    lightness === undefined
  ) {
    throw new TypeError(
      `One of the provided values is invalid. Values that were provided: ${JSON.stringify(
        { hue, saturation, lightness }
      )}`
    );
  }

  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
