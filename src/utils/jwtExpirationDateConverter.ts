/**
 * Convert Jwt exp in days
 * @param exp = Number value to be converted
 * @returns The converted exp in days
 */

export const jwtExpirationDateConverter = (exp: number): number =>
  (exp - Math.floor(Date.now() / 1000)) / 86400

// old versions
// export const jwtExpirationDateConverter = (exp: number): number => {
//   const currentTime = Math.floor(Date.now() / 1000)
//   const secondsUntilExpiration = exp - currentTime
//   const secondsInADay = 60 * 60 * 24
//   const daysUntilExpiration = secondsUntilExpiration / secondsInADay
//   return daysUntilExpiration
// }
