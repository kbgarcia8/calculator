function calc (expression) {
    const pattern = /\+|\-|\*|\/|\d+(\.\d+)?/g; //'?' makes the group before it optional
    const matches = expression.match(pattern);
    console.log(matches);
    if (!matches || matches.length < 3 || matches.length % 2 === 0) {
      return "Invalid expression";
      }

  // Initialize the result with the first number
  let final_result = parseFloat(matches[0]);

  // Iterate through the tokens and perform the operations
      for (let i = 1; i < matches.length; i += 2) {
          const operator = matches[i];
          const operand = parseFloat(matches[i + 1]);

          // Check if the operand is a valid number
          if (isNaN(operand)) {
              return "Invalid expression";
          }

          // Perform the operation based on the operator
          switch (operator) {
              case "+":
              final_result += operand;
                  break;
              case "-":
              final_result -= operand;
                  break;
              case "*":
              final_result *= operand;
                  break;
              case "/":
                  if (operand === 0) {
                      return "Division by zero";
                  }
                  final_result /= operand;
                  break;
              default:
                  return "Invalid operator";
          }
      }

      return final_result;
  }
  

  function typeScreen (button) {
      if (button.textContent == '+/-' || button.textContent == '/'
      || button.textContent == '*' || button.textContent == '-' || button.textContent == '+'
      || button.textContent == '1' || button.textContent == '2' || button.textContent == '3'
      || button.textContent == '4' || button.textContent == '5' || button.textContent == '6'
      || button.textContent == '7' || button.textContent == '8' || button.textContent == '9'
      || button.textContent == '0' || button.textContent == '.') {
          display.result.value += button.textContent;
          //hierarchy is used here <form_class>.<input_id>.value this is a method thas access
          //values of forms and input        
      }else if (button.textContent == 'AC') {
          display.result.value = '';
      }else if (button.textContent == '%') {
          display.result.value += '/100';
          calc(display.result.value);
      } else if (button.textContent == '=') {
        let ans = calc(display.result.value);
        display.result.value = ans;
      }
  }
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {

  button.addEventListener('click', () => {
   typeScreen(button);
  });
  });