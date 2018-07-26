/* START OF STARTER CODE: You should not need to modify these functions. */
function exponent(base, power) {
  var ans = 1;

  for (var i = 0; i < power; i++) {
    ans *= base;
  }

  return ans;
}

function calculate(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
      // Notice that we don't have break statements because
      // return will already break for us.

    case '-':
      return value1 - value2;

    case '*':
      return value1 * value2;

    case '/':
      return value1 / value2;

    case '%':
      return value1 % value2;

    case '^':
      return exponent(value1, value2);
    
    default:
      return false;
  }
}
/* END OF STARTER CODE */

// Your code goes here -- good luck!