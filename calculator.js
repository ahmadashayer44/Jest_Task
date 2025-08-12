function calc(...args) {
  let arr = [];
  let number;
  if (args.length == 0) {
    throw new Error("Missing items");
  }
  if (args.length == 1 && typeof args[0] === "number") {
    return args[0];
  }
  for (let i = 0; i < args.length; i++) {
    if (i % 2 == 0) {
      if (typeof args[i] === "number") {
        arr.push(args[i]);
      } else {
        throw new Error("Invalid input type");
      }
    } else {
      switch (args[i]) {
        case "+":
          arr.push("+");
          break;
        case "-":
          arr.push("-");
          break;
        case "*":
          arr.push("*");
          break;
        case "/":
          if (Number(args[i + 1]) === 0) {
            throw new Error("Division by zero");
          }
          arr.push("/");
          break;
        default:
          throw new Error("Invalid operator");
      }
    }
    if (i == args.length - 1) {
      let number;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "*") {
          if (i + 1 == arr.length) {
            throw new Error("Missing items");
          }
          number = arr[i - 1] * arr[i + 1];
          arr[i - 1] = number;
          arr.splice(i, 2);
          i--;
        } else if (arr[i] == "/") {
          if (i + 1 == arr.length) {
            throw new Error("Missing items");
          }
          number = arr[i - 1] / arr[i + 1];
          arr[i - 1] = number;
          arr.splice(i, 2);
          i--;
        }
      }
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "+") {
          if (i + 1 == arr.length) {
            throw new Error("Missing items");
          }
          number = arr[i - 1] + arr[i + 1];
          arr[i - 1] = number;
          arr.splice(i, 2);
          i--;
        } else if (arr[i] == "-") {
          if (i + 1 == arr.length) {
            throw new Error("Missing items");
          }
          number = arr[i - 1] - arr[i + 1];
          arr[i - 1] = number;
          arr.splice(i, 2);
          i--;
        }
      }
      return number;
    }
  }
}

module.exports = calc;
