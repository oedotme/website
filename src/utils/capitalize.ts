export function capitalize([first, ...rest]: string): string {
  return first.toUpperCase() + rest.join('')
}
