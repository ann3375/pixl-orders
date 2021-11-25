export enum TypographyTypeStyle {
  h1 = 'h1',
  h2 = 'h2',
  p = 'p',
  span = 'span',
}

export const TypographyType = {
  [TypographyTypeStyle.h1]: 'h1',
  [TypographyTypeStyle.h2]: 'h2',
  [TypographyTypeStyle.p]: 'p',
  [TypographyTypeStyle.span]: 'span',
} as const;

export enum ColorType {
  grey = 'lightgray',
  darkGrey = 'darkgrey',
}
