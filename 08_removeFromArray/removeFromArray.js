const removeFromArray = function(arr, ...args) {

    const arrToRetrun = [];

    arr.forEach(element => {
        if(!args.includes(element)){
            arrToRetrun.push(element);
        }
    });
    return arrToRetrun;

}
    //Function to remove one Argument
    /*function removeAnArgument(arr1, val){
        const arrToReturn = [];
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] === val){
                continue;
            }else{
                arrToReturn.push(arr1[i]);
            }
        }
        return arrToReturn;
    }*/

/*for(let j = 1; j < arguments.length; j++){
const arrToRetrun = [];
    for (let i = 0; i < arguments[0].length; i++){
        if(arguments[0].At(i) === val || arrToRetrun.includes(arguments[j])){
            continue;
        }else{
            arrToRetrun.push(arguments[j]);
        }
    }
return arrToRetrun;
};*/
/*const arrIntermediate = [];

function checkOneVariable(arr1, val){
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] === val){
            continue;
        }else{
            arrIntermediate.push(arr1[i]);
        }
    }
}

for(let j = 1; j < arguments.length; j++){
    checkOneVariable(arguments[0], arguments[j]);
}

const arrFinal = [];

for(let k = 0; k < arrIntermediate.length; k++){
    if(arrFinal.includes(arrIntermediate[k])){
       continue; 
    }else{
        arrFinal.push(arrIntermediate[k]);
    }
}

return arrFinal;
}*/




// Do not edit below this line
module.exports = removeFromArray;
