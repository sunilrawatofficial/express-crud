module.exports = function(...numbers){
    if(numbers.length > 0) {
        let sum =0;
        numbers.forEach(number => {
            sum = sum+number;
        })
        return sum;
    }else{
        return 0;
    }    
}