let number1 = prompt("Please enter first number");

let operator = prompt("Please enter the operator: + - * /");

let number2 = prompt("Please enter second number");

let calculator;

// if(operator === "+" || operator === "-" || operator === "*"  || operator === "-"){
//      if(operator === "+"){
//     calculator = parseInt(number1) + parseInt(number2);
//     console.log("Result from your inputs is: " + calculator);
//     }else if(operator === "-"){
//         calculator = parseInt(number1) - parseInt(number2);
//         console.log("Result from your inputs is: " + calculator);
//     }else if(operator === "*"){
//         calculator = parseInt(number1) * parseInt(number2);
//         console.log("Result from your inputs is: " + calculator);
//     }else if(operator === "/"){
//         calculator = parseInt(number1) / parseInt(number2);
//         console.log("Result from your inputs is: " + calculator);
//     }else{
//         console.log("Wrong input number or operator");
//     }
// }



// if(!(operator === "+" || operator === "-" || operator === "*"  || operator === "-")){
//      console.log("Wrong operator");
// }else{
//     if(operator === "+"){
//         calculator = parseInt(number1) + parseInt(number2);
//         console.log("Result from your inputs is: " + calculator);
//     }else if(operator === "-"){
//         calculator = parseInt(number1) - parseInt(number2);
//          console.log("Result from your inputs is: " + calculator);
//     }else if(operator === "*"){
//          calculator = parseInt(number1) * parseInt(number2);
//          console.log("Result from your inputs is: " + calculator);
//     }else if(operator === "/"){
//         calculator = parseInt(number1) / parseInt(number2);
//          console.log("Result from your inputs is: " + calculator);
//     }else{
//         console.log("Wrong input number or operator");
//     }
// }

 if(!(operator === "+" || operator === "-" || operator === "*"  || operator === "-")|| !(typeof(number1) && typeof(number2) === Number)){
     console.log("Wrong operator or yo didn't enter number");
 }else{
     if(operator === "+" ){
         calculator = parseInt(number1) + parseInt(number2);
        console.log("Result from your inputs is: " + calculator);
     }else if(operator === "-"){
         calculator = parseInt(number1) - parseInt(number2);
          console.log("Result from your inputs is: " + calculator);
      }else if(operator === "*"){
          calculator = parseInt(number1) * parseInt(number2);
          console.log("Result from your inputs is: " + calculator);
     }else if(operator === "/"){
         calculator = parseInt(number1) / parseInt(number2);
         console.log("Result from your inputs is: " + calculator);
     }else{
         console.log("Wrong input number or operator");
    }
 }