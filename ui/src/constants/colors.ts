import { createColor } from '@ui/helpers/colors';

const hsl: Record<string, Record<number, number>> = {
  hue: {
    0: 0,
    15: 15,
    185: 185,
  },
  saturation: {
    0: 0,
    15: 15,
    80: 80,
  },
  lightness: {
    0: 0,
    10: 10,
    40: 40,
    45: 45,
    50: 50,
    60: 60,
    70: 70,
    75: 75,
    80: 80,
    95: 95,
    100: 100,
  },
};

const black = createColor({
  hue: hsl.hue[185],
  saturation: hsl.saturation[15],
  lightness: hsl.lightness[10],
});

const gray = createColor({
  hue: hsl.hue[0],
  saturation: hsl.saturation[0],
  lightness: hsl.lightness[95],
});

const turquoise = createColor({
  hue: hsl.hue[185],
  saturation: hsl.saturation[80],
  lightness: hsl.lightness[50],
});

const turquoise500 = createColor({
  hue: hsl.hue[185],
  saturation: hsl.saturation[80],
  lightness: hsl.lightness[45],
});

const turquoise600 = createColor({
  hue: hsl.hue[185],
  saturation: hsl.saturation[80],
  lightness: hsl.lightness[40],
});

const waxFlower = createColor({
  hue: hsl.hue[15],
  saturation: hsl.saturation[80],
  lightness: hsl.lightness[80],
});

const waxFlower500 = createColor({
  hue: hsl.hue[15],
  saturation: hsl.saturation[80],
  lightness: hsl.lightness[75],
});

const waxFlower600 = createColor({
  hue: hsl.hue[15],
  saturation: hsl.saturation[80],
  lightness: hsl.lightness[70],
});

const white = createColor({
  hue: hsl.hue[0],
  saturation: hsl.saturation[0],
  lightness: hsl.lightness[100],
});

export const colors = {
  black: {
    400: black,
  },
  gray: {
    400: gray,
  },
  turquoise: {
    400: turquoise,
    500: turquoise500,
    600: turquoise600,
  },
  waxFlower: {
    400: waxFlower,
    500: waxFlower500,
    600: waxFlower600,
  },
  white: {
    400: white,
  },
} as const;
