/**
 * Convert Pixels to BRL currency format
 * @param value = Number value to be converted
 * @returns The converted BRL string
 */

export const currencyConverter = (value: number): string =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    value
  )
