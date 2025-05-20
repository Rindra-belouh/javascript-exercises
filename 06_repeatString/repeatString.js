const repeatString = function(word, num) {
    if(num < 0){
        return 'ERROR';
    }else{
        let wordToReturn ='';
        for (let i = 1; i <= num; i++){
            wordToReturn += word;
        }
        return wordToReturn;
    }   
}

// Do not edit below this line
module.exports = repeatString;
