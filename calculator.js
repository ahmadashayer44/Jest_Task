function calc(...args) {
  let number;
  for (let i = 0; i < args.length; i++) {
    if (i % 2 == 0) {
      if (Number(args[i])) {
        number = Number(args[i]);
      } else {
        throw new Error("Invalid input");
      }
    } else {
      switch (args[i]) {
        case "+":
          number += Number(args[i + 1]);
          break;
        case "-":
          number -= Number(args[i + 1]);
          break;
        case "*":
          number *= Number(args[i + 1]);
          break;
        case "/":
          number /= Number(args[i + 1]);
          break;
        default:
          throw new Error("Invalid input");
      }
      i++;
    }
    if (i == args.length - 1) {
      return number;
    }
  }
}

module.exports = calc;
