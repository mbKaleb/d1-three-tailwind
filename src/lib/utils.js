function solveForX(y, quadrant) {
  // Y must be in range from 83 - (-76)
  // console.log(y, quadrant)
  if (y > 83){y = 83}
  const a = -4;
  const b = 10 + 1; // 10x and x terms combined
  const c = 9500 - 1.5*y**2 + 10*y;

  const discriminant = Math.pow(b, 2) - (4 * a * c);

  if (discriminant < 0) {
      return 'No real solutions';
  } else {
      const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

      // console.log([x1, x2])

      return [x1, x2];
  }
}

//Version 2 (-4x^{2}+(10000-1y^{2})=0)
function solveQE(y, quadrant) {
  console.log("og var: " +quadrant)
  quadrant += 4
  quadrant = quadrant%4
  // console.log(first)

  if (y > 100) y = 100
  const a = -4;
  const b = 0; // No x term in this equation
  const c = 10000 - y ** 2;

  const discriminant = Math.pow(b, 2) - (4 * a * c);

  if (discriminant < 0) {
    // console.log('No real solutions');
    return null
  } else {
    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    
    if ((quadrant === 1) || (quadrant == 2)  ){
      console.log('x1: '+ x1)
      return x1
    } else {
      console.log('x2: '+ x2)
      return x2
    }

  }
}

function getRotation(x, y){ //Mapping plot points to radians for model rotation
  let a = Math.sqrt(2500);
  let b = Math.sqrt(10000);

  let theta = Math.atan2(y * Math.sqrt(250), x * Math.sqrt(1000));
  return theta + 0.2;
}

export {solveForX, solveQE, getRotation}