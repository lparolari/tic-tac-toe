export function delta(x: number) {
  // TODO: replace x1 to function call and "normalize"
  // by dividing it with board width or heigh
  const x1 = x / 100;
  const x2 = Math.floor(x1);
  const x3 = x2 * 100;

  return x3;
}
