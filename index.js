console.log("\n----------EXERCISE 1---------")
/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area 
 of the associated rectangle.
*/

function area (l1,l2){
    return l1 * l2;
}
let area1 = area(5 , 10)
console.log(`Area of a Rectangle: ${area1}`);

console.log("\n----------EXERCISE 2---------")
/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their sum 
 multiplied by 3.
*/

function crazySum(n1,n2){
    if(n1===n2){
        return(n1+n2)*3
    }else{
        return n1+n2
    }
}

let sum =crazySum(30,20);
console.log(`Crazy Sum: ${sum}`);

console.log("\n----------EXERCISE 3---------")
/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/

function crazyDiff(num){
    if(num > 19){
        return Math.abs(num - 19)*3
    }else{
        return Math.abs(num - 19)
    }
}

let number = crazyDiff(10)
console.log(`Crazy Diff difference between 19: ${number}`)

console.log("\n----------EXERCISE 4---------")
/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within 20 and 100 
 (included) or if n it's equal to 400.
*/
function boundary(n){
    if(n > 20 && n < 100 || n === 400){
        return true
    }else{
        return false
    }
}

let number1 = boundary(14);
console.log(`Boundary: ${number1}`);

console.log("\n----------EXERCISE 5---------")
/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", 
 then it should just return the original string.
*/
function strivify(string){
    if(string === "Strive"){
        return string
    }else {
        return "Strive" +" " + string
    }
}

let string1 = strivify("Star");
console.log(`Word: ${string1}`);

console.log("\n----------EXERCISE 6---------")
/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it is a multiple of 3 
 or a multiple of 7. HINT: Modulus Operator
*/

function check3and7(num1){
    if(num1 % 3 === 0 || num1 % 7 === 0 ){
        return true
    }else{
        return false
    }
}

let num2 = check3and7(54);
console.log(`Multiple of 3 0r 7: ${num2}`);

console.log("\n----------EXERCISE 7---------")
/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string (es.: Strive => evirtS).
*/

function reverseString(string){
    let newString = "";
    for(let i = string.length - 1; i >= 0; i--){
        newString += string[i];
    }
return newString;
}

let reversedString = reverseString("Parameters");
console.log(`Reversed String: ${reversedString}`);

console.log("\n----------EXERCISE 8---------")
/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given string passed as a 
 parameter.
*/

function upperFirst(str){
    let array = str.split(" ");
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);  
    }
    let str2 = array.join(" ");
    return str2;
}

let sentence = upperFirst("the capital of germany is berlin");
console.log(`First letter capitalized string: ${sentence}`);

console.log("\n----------EXERCISE 9---------")
/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character of a given string 
 passed as a parameter.
*/

function cutString(str){
    let slicedString = str.slice(1 , -1)
    return slicedString;
}

let cutString1 = cutString("Photosynthesis");
console.log(`Cut string: ${cutString1}`);

console.log("\n----------EXERCISE 10---------")
/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing n random numbers
 between 0 and 10.
*/
function giveMeRandom(n){
    let randomNumbers1 = [];
    for(let i = 0; i < n; i++){
        randomNumbers1.push(Math.floor(Math.random()*11));
    }
    return randomNumbers1
}

let randomNumbers = giveMeRandom(9);
console.log(`Random Numbers in an array: ${randomNumbers}`);