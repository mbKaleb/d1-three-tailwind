function solveForX(y) {
  const a = -4;
  const b = 10 + 1; // 10x and x terms combined
  const c = 9500 - 1.5*y**2 + 10*y;

  const discriminant = Math.pow(b, 2) - (4 * a * c);

  if (discriminant < 0) {
      return 'No real solutions';
  } else {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

      return [x1, x2];
  }
}

export {solveForX}