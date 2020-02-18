let num1 = prompt('Write number1');
let defaultnum1 = '', defaultnum2 = '';

while(num1==null||num1==''||isNaN(num1)){
   
    if(num1==null || num1=='' || isNaN(num1)){
    defaultnum1 = num1;
    num1 = prompt('Please enter the number1 again, it was not accepted, please write a number!', defaultnum1);
    }
}

let num2 = prompt('Write number2');

while(num2==null||num2==''||isNaN(num2)){
   
    if(num2==null || num2=='' || isNaN(num2)){
    defaultnum2 = num2;
    num2 = prompt('Please enter the number2 again, it was not accepted, please write a number!', defaultnum2);
    }
}

let operator = prompt('Write mathematical operation, which you want to execute:');

function Calculator(n1, n2, oprt) {
    let result;
switch(oprt){

    case '+':
        result = parseInt(n1) + parseInt(n2);
        break;
    
    case '-':
        result = n1 -n2;
        break;
    
    case '*':
        result = n1 * n2;
        break;

    case '/':
        result = n1 / n2;
        break;

    default:
        result = "The operation isn't correct!"

}
    return result;
}

alert(Calculator(num1, num2, operator));