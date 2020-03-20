var input = prompt("Please enter a number");
var input2 = prompt("Please enter anoter number");
var inputOperator = prompt("Please enter an operator");

switch(inputOperator.toString()){
  case '+' :
    console.log(input + " + " + input2 + " = " + parseInt(input) + parseInt(input2));
    break;
}

switch(inputOperator.toString()){
  case '-' :
    console.log(input + " - " + input2 + " = " + parseInt(input) - parseInt(input2));
    break;
}

switch(inputOperator.toString()){
  case '*' :
    console.log(input + " * " + input2 + " = " + parseInt(input) * parseInt(input2));
    break;
}

switch(inputOperator.toString()){
  case '/' :
    console.log(input + " / " + input2 + " = " + parseInt(input) / parseInt(input2));
    break;
}

