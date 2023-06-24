export function formatNumber(number: number): string {
  const units: string[] = ['', 'K', 'M', 'B', 'T'];

  const unitIndex = Math.floor(Math.log10(number) / 3);

  if (unitIndex >= units.length) {
    return number.toString();
  }

  const scaledNumber = number / Math.pow(1000, unitIndex);
  const suffix = units[unitIndex];
  const formattedNumber = `${scaledNumber.toFixed(1)}${suffix}`;

  return formattedNumber;
}
