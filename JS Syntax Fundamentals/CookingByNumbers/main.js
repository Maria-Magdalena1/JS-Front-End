function cooking(number,op1,op2,op3,op4,op5) {
    number=Number(number);

    function applyOperation(num, operation) {
    if (operation === 'chop') return num / 2;
    if (operation === 'dice') return Math.sqrt(num);
    if (operation === 'spice') return num + 1;
    if (operation === 'bake') return num * 3;
    if (operation === 'fillet') return num * 0.8;
  }

  number = applyOperation(number, op1);
  console.log(number);

  number = applyOperation(number, op2);
  console.log(number);

  number = applyOperation(number, op3);
  console.log(number);

  number = applyOperation(number, op4);
  console.log(number);

  number = applyOperation(number, op5);
  console.log(number);
}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop');