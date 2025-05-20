const sumAll = function(num1, num2) {
let number1 = parseInt(num1);
let number2 = parseInt(num2);
let result = 0;

if(isNaN(num1) || isNaN(num2)){
    return "ERROR";
}else{
    if(num1 < 0 || num2 < 0){
        return "ERROR";
    }else{
        if(Number.isInteger(num1) && Number.isInteger(num2)){
            if(number1 < number2){
            do{
                    result += number1;
                    number1++;
                }while(number1 <= number2);

            return result;
        }else{
            do{
                result += number2;
                number2++;
            }while(number2 <= number1);

        return result;
            }
        } else {
            return "ERROR";
        }
    }
}
}

// Do not edit below this line
module.exports = sumAll;
