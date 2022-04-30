// arithmetic
function arithmetic(a, b, operator){
    switch (operator) {
      case "add":
        operator = "+"
        break;
      case "subtract":
        operator = "-"
        break;
      case "multiply":
        operator = "*"
        break;
      case "divide":
        operator = "/"
        break;
    }
    return eval(`${a} ${operator} ${b}`)
  }
  