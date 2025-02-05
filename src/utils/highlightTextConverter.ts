/**
 * Convert text highlight api response to a nice string
 * @param text = Text to be converted
 * @returns The converted text
 */

export function highlightTextConverter(text: string): string {
  switch (text) {
    case 'alert':
      return '* Goal far from being achieved.'
    case 'success':
      return "* The month's goal was achieved. Congratulations!"
    case 'warning':
      return "* Almost there, let's go!"
    default:
      return '* No data at the moment.'
  }
}
