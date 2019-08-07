'use script'

// task 1
   
    //1.1
let arr = [2,  -5, 1, -2, 0, -3, 2, -14];
function aboveZero(number){
    return number < 0;
} 
let negativeArr = arr.filter(aboveZero);
console.log(negativeArr);
    
    //1.2
let arr2 = [2, 1, 0, 2];
let results = arr2.map(function(num, index, arr) {
    return Math.pow(num, index);
});
alert(results);

    //1.3

console.log(results);

//task 2

let arr3 = [4, 3, 5, 5, 0, 4, 8, 6];
let result = arr3.reduce(function(sum, current){
    if (current == 0) {
        arr3.splice(0);
        }
        return sum + current; 
    
}, 0); 
console.log(result);



//task 3

let summArguments = [];
let result2 = summArguments.reduce(function(sum, current){
    return sum + current;
}, 0);
console.log(result2);

