const reverseString = function(words) {
    let string = words.toString();
    const arr1 = string.split("");
    arr1.reverse();
    let stringToReturn = "";
    for (let i = 0; i < arr1.length; i++){
        stringToReturn += arr1[i].toString();
    }
    return stringToReturn;
}

// Do not edit below this line
module.exports = reverseString;
