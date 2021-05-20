export function capitalize(string: string, all?: boolean): string {
  const regex = new RegExp(/\b[a-z]/, all ? 'g' : '')
  return string.toLowerCase().replace(regex, (character) => character.toUpperCase())
}
