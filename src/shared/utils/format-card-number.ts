export function formatCardNumber(value: string) {
  const v = value
    .replace(/\s+/g, '')
    .replace(/[^0-9]/gi, '')
    .substring(0, 16);
  const parts = [];

  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substring(i, i + 4));
  }

  console.log();

  return parts.length > 1 ? parts.join(' ') : value;
}
