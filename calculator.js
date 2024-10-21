const readlineSync = require('readline-sync');
console.log("chose from the list bellow")
console.log("=============================")
console.log(" 1 for addition")
console.log(" 2 for subtraction")
console.log(" 3 for multiplication")
console.log(" 4 for division")
console.log(" 5 for exit")
console.log("=============================")
while (true) {
    function calcul() {
        let firstNumber = readlineSync.question('Please enter the first number: ');
        let secondNumber = readlineSync.question('Please enter the second number: ');
        let operator = readlineSync.question('Please enter the operator: ');
    
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);
    
        if (operator === '1') {
            console.log("the resul is :"+(firstNumber + secondNumber));
        } else if (operator === '2') {
            console.log("the resul is :"+firstNumber - secondNumber);
        } else if (operator === '3') {
            console.log("the resul is :"+firstNumber * secondNumber);
        } else if (operator === '4') {
            console.log(firstNumber / secondNumber);
        } else if (operator === '5' || firstNumber === '5' || secondNumber === '5') {
            console.log("Exiting...");
            process.exit();
        }  
    }
    calcul();
  }

