export function checkStringAnswer(value: any, name: string) {
  if (!isNaN(value)) {
    return `${name} can't be a number`;
  }
  if (value.length <= 2) {
    return `${name} too short`;
  }
  if (value.length > 20) {
    return `${name} too long`;
  }
  return true;
}
