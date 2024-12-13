/**
 * Convert Pixels to rem
 * @param pixels = Pixels value to be converted
 * @returns The converted rem value
 */

export const pxToRem = (pixels: number): string => `${pixels / 16}rem` // 16px = 1rem
