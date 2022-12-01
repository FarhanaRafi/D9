console.log("\n----------EXERCISE 1---------")

function giveMeRandom(n){
    let randomNumbers1 = [];
    for(let i = 0; i < n; i++){
        randomNumbers1.push(Math.floor(Math.random()*10));
    }
    return randomNumbers1
}

/* EXTRA 1
 Write a function called "checkArray" which receives an array of random numbers (created with 
giveMeRandom) and prints, for each item, whether it's bigger than 5 or not. The function 
should return the sum of just the numbers bigger than 5.
*/

function checkArray(array){
    let sum = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] > 5){
            sum += array[i];
        }
    }
    return sum;
}

let input = giveMeRandom(5)
console.log(input)
let result = checkArray(input);
console.log(`Sum of Random number: ${result}`);

console.log("\n----------EXERCISE 2---------")
/* EXTRA 2
 In your eCommerce you have an array of objects called shoppingCart. Each one of these 
 objects has a price, a name, an id and the quantity to be shipped. Create a function called 
 "shoppingCartTotal" which calculates the total due to the shop.
*/
let shoppingCart = [
    {name: "John", id: 675, quantity: 9, price: 200},
    {name: "Frank", id: 780, quantity: 8, price: 250},
    {name: "Antony", id: 395, quantity: 5, price: 200},
    {name: "Thomas", id: 875, quantity: 4, price: 200},
    {name: "Maria", id: 655, quantity: 11, price: 200}
]
function shoppingCartTotal(shoppingCart){
    let total = 0;
    for(let i =0 ; i < shoppingCart.length; i++){
        total += shoppingCart[i].price * shoppingCart[i].quantity
    }
    return total;
}

console.log(`Total Due: ${shoppingCartTotal(shoppingCart)}`);

console.log("\n----------EXERCISE 3---------")
/* EXTRA 3
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects 
 has a price, a name, an id and the quantity to be shipped. Create a function called 
 "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the 
 total number of items in the shoppingCart.
*/
function addToShoppingCart(item) {
    shoppingCart.push(item);
    return shoppingCart.length;
}

let item1 = {name: "Jack", id: 990, quantity: 9, price: 200}
let length = addToShoppingCart(item1);

console.log(shoppingCart)
console.log(`Shopping Cart: ${length}`)

console.log("\n----------EXERCISE 4---------")
/* EXTRA 4
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, 
 an id and the quantity to be shipped. Create a function called "maxShoppingCart" which receives the shoppingCart array 
 and returns the most expensive item in it.
*/

function maxShoppingCart(shoppingCart){
    let highest = shoppingCart[0].price
    for(let i =0; i < shoppingCart.length; i++){
        if(shoppingCart[i].price > highest){
            highest = shoppingCart[i].price;

        }
    }
    return highest
}

let highest = maxShoppingCart(shoppingCart);
console.log(`Most expensive item price: ${highest}`) 

console.log("\n----------EXERCISE 5---------")
/* EXTRA 5
 In your eCommerce you have an array of objects called shoppingCart. Each one of these objects has a price, a name, an id 
 and the quantity to be shipped. Create a function called "latestShoppingCart" which receives the shoppingCart array and 
 returns the last item.
*/

function latestShoppingCart(shoppingCart){
    return shoppingCart[shoppingCart.length - 1];
}

let lastItem = latestShoppingCart(shoppingCart);
console.log(`Latest item: ${lastItem.name}`);
