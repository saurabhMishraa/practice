
// // loops arrays object and function

// // Ternary operator / conditional operator 

// // let age = 18
// // let drink = (age>=20) ? "coffee" : "milk";
// // // console.log(drink);



// // And or operator  

// let age = 16
// let myName = "saurabh";

// if(myName[0] === "s" || age>18){
//     console.log("inside if");
// }
// else {
//     console.log("inside else");
// }

// const num1 = 1100
// const num2 = 1500
// const num3 = 100

// // if(num1 > num2 && num1 > num3){
// //     console.log(`${num1} is greatest number`);
// // }else if(num2 > num3 && num2 > num1){
// //     console.log(`${num2} is second greatest number`);
// // }else if(num3 > num1 && num3 > num2){
// //     console.log(`${num3} is third greatest number`);
// // }

// switch(true){
//     case (num1 > num2 && num1 > num3):
//         console.log(`${num1} is greatest number`);
//         break;
//     case (num2 > num3 && num2 > num1):
//             console.log(`${num2} is second greatest number`);
//             break;
//     case (num3 > num1 && num3 > num2):
//             console.log(`${num3} is third greatest number`);
//             break;
// }

// nested if else 

// let winNumber = 26  
// let guessNumber = prompt("guess a number");

// if(guessNumber == winNumber){
//     console.log("your guess is right");
// }
// else{
//     if(guessNumber > winNumber){
//         console.log("your guess is too hight");
//     }
//     else{
//         console.log("your guess is too low");
//     }
// }

// if 
// else if 
// else if 
// else if 

// let tempInF = 52

// if(tempInF < 5){
//     console.log("it is snow out");
// }else if(tempInF < 15){
//         console.log("it is rain out");
// }else if(tempInF < 25){
//     console.log("it is cold out");
// }else if(tempInF < 35){
//     console.log("it is cloudy weather");
// }else if(tempInF < 45){
//     console.log("it is good climate out");
// }else if(tempInF < 55){
//     console.log("it is hot out");
// // }

// // switch case 

// let day = prompt("enter num");

// switch(num){
//     case(num = 1):
//         console.log("one");
//     break;
//     case(num = 2):
//         console.log("two");
//     break;
//     case(num = 3):
//         console.log("three");
//     break;
//     case(num = 4):
//         console.log("four");
//     break;
//     case(num = 5):
//         console.log("five");
//     break;
//     case(num = 6):
//         console.log("six");
//     break;
//     case(num = 7):
//         console.log("seven");
//     break;
//     default:
//         console.log("invalid key");
// }

// While loop

// let i = 0;
// while(i<=6){
//     console.log(i);
//     i++;
// }
// console.log(`the current value of i is ${i}`);
    
// first n natural number using while loop

// let num = 100;
// let total = 0;
// let i = 0;

// while(i<=100){
//     total = total + i;
//     i++;
// }
// console.log("hello rohit")


// By using maths formula 

// let num = 100;

// let total = (num*(num+1))/2;
// console.log(total);

// For Loop

// for(i=0;i<=9;i++){
//     console.log(i);
// }

// console.log(`value of i is`, i);

// Break and Continue keyword

// for(let i=0;i<=9;i++){
//     if(i===6){
//     break;
//     }
//     console.log(i);
// }

// Arrays >> Clone & Concat

// let array1 = ["item1","item2"];
// // let array2 = array1

// array1.push("item3","item4");

// let oneMoreArray = ["item5","item6"];
// // let array2 = [].concat(array1);

// let array2 = [...array1, ...oneMoreArray];

// console.log(array1===array2);
// console.log(array1);
// console.log(array2);

// for loop in array 

// let powerRangers = ["Dino","spd","ninja","mystic"];

// let powerRangers2 = []

// for(i=0;i<powerRangers.length;i++){
//     powerRangers2.push(powerRangers[i].toUpperCase());
// }

// console.log(powerRangers2);

// while loop in Array

// const powerRangers = ["Dino","spd","ninja","mystic"]; 

// let i = 0

// const powerRangers2 = []

// while(i<powerRangers.length){
//     powerRangers2.push(powerRangers[i].toUpperCase());
//     i++;
// }

// console.log(powerRangers2)

// for loop in array

// let fruits = ["apple","grapes","berry","mango"]

// let fruits2 = []
// for(let i=0; i<fruits.length; i++){
//     fruits2.push(fruits[i].toUpperCase());
// }

// console.log(fruits2);

// use const for using arrays 

// const fruits = ["apple","grapes"]

// fruits.push("berry"); // we can push items in const varibale

// console.log(fruits);

// for of loop in array 

// const fruits = ["apple","grapes","berry"]

// for(let index of fruits){
//     console.log(fruit.toUpperCase());
// }

// array destructuring 

// let myArray = ["item1","item2"]

// let newValue1 = myArray[0]
// let newValue2 = myArray[1]

// let myArray2 = ["item3","item4"];

// using Spread operator 

// let lastArray = [...myArray, ...myArray2];


// console.log(lastArray);

// console.log("value of my array is", myArray);
// console.log("value of m array is", newValue2);

// Introduction to objects 
// object is reference data type

// how to create objects 

// const obj = {
//     name: "rohit",
//     age: 22,
//     hobbies: ["sleeping","watching YT"],
// }

// console.log(obj);

// how to access objects with dot

// console.log(obj.name);   dot notation
// console.log(obj.hobbies);   

// how to access objects with spaces and dot 

// const key = "email"; adding a key to person
// const person = {
//     new: "games",
//     "rohit plays":["CS","BGMI","VAL"],  
// }

// console.log(person["rohit plays"]); bracket notation

// person[key] = "dubeyrohit7069@gmail.com"

// console.log(person);

// how to iterate objects

// two ways to itearte  objects 1- for loop , 2- Object.key

// const person = {
//         new: "games",
//         "rohit plays":["CS","BGMI","VAL"],  
//     }

    // 1st method using loop
// for(let key in person){
    // console.log(key);
    // console.log(person[key]); to access person data
    // console.log(`${key}, ${person[key]}`); another way to access using backticks
    // console.log(key," : ",person[key]); if we also need the colon :
// }

 // 2 second method using Object.keys

//  console.log(Object.keys(person));
// console.log(typeof (Object.keys(person)));   checking the type it is object
// const val = Array.isArray(Object.keys(person));  checking if it is real array if.e true or false 
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }

// computed properties 

// const obj1 = "goHead";
// const obj2 = "goBoat";

// const newBoss1 = "mphasis";
// const newBoss2 = "trident";

// const meme = {
//     [obj1] : "mphasis",
//     [obj2] : "tridnet",
// }

// console.log(meme);

// spread operator in objects 

// const obj1 = {
//     power1: "spd",
//     power2: "dino",
// }

// const obj2 = {
// power1: "newRanger",  adding new key and it will change in first object 
//     run1: "vector",
//     run2: "spidy",
// }

// const newObject = {...obj1, ...obj2};
// const newObject = {..."abc"};
// console.log(newObject);

// Object destructing 

// const band = {
//     bandName: "one direction",
//     bandSong: "night changes",
//     year: "1947",
//     newSong: "one thing",
// }

// const bandName = band.bandName;
// const bandSong = band.bandSong;

// console.log(bandName, bandSong);

// how to destructure

// const { bandName, bandSong, ...restProps } = band;
// console.log(band);

// Obejcts inside Arrays 
// very useful in real world programs 

// const users = [
//     {userId: 1, firstName: 'ashish', gender: 'male'},
//     {userId: 2, firstName: 'rohit', gender: 'male'},
//    {userId: 3, firstName: 'saurabh', gender: 'male'},
// ]
// for(let user of users){
// console.log(user.firstName);
// }

// console.log("hello world");

// nested destructuring 

// const users = [
//         {userId: 1, firstName: 'ashish', gender: 'male'},
//         {userId: 2, firstName: 'rohit', gender: 'male'},
//        {userId: 3, firstName: 'saurabh', gender: 'male'},
//     ]

// const [ user1, user2, user3] = users
// console.log(users);

// const [{firstName}, ,{gender}] = users 
// console.log(firstName);
// console.log(gender);

// const [{firstName: userFirstName}, ,{gender}] = users 
// console.log(userFirstName);

// function declaration 

//  ex 1 -
//  function singHappyBirthday(){
//     console.log("happy birthday to you");
// }

// singHappyBirthday();

// ex 2 - 

// function sumOfThreeNumber(number1, number2, number3){
//     return number1 + number2 + number3;
// }
// const ans = sumOfThreeNumber(4, 5, 6);
// console.log(ans);

// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     else {return false}
// }

// console.log(isEven(5));

// function anyNumber(anyString){
//     return anyString[3];;
// }

// console.log(anyNumber("rohit"));

// function myTarget(array, target){
//     for(i=0; i<=array.length; i++){
//         if(array[i]===target)
//         return i;
//     }
//     return -1;
// }

// const myArray = [4, 5, 10, 15];
// const ans = myTarget(myArray, 10)
// console.log(ans);



// function declaration

// const singHappyBirthday = function(){
//     console.log("happy birthday to you....");
// }

// singHappyBirthday();

// const sumOfThreeNumber = function(number1, number2, number3){
//     return number1 + number2 + number3;
// }

// const ans = sumOfThreeNumber(4,5,4);
// console.log(ans);

// const isEven = function(number){
//     return number % 2 === 0;
// }
// const ans = isEven(40);
// console.log(ans);

// const anyNumber = function(anyString){
//     return anyString[2];;
// }

// console.log(anyNumber("rohit"));

// const myTarget = function(array, target){
//     for(i=0; i<=array.length; i++){
//         if(array[i]===target)
//             return i
//     }
//             return -1
// }

// const myArray = [1, 45, 55, 65];
// const ans = myTarget(myArray, 45);
// console.log(ans);

// arrow function

// const singHappyBirthday = () => {
//     console.log("happy birthday to you ..");

// }
// singHappyBirthday();

// const sumOfThreeNumber = (number1, number2, number3) => {
//     return number1+ number2 + number3;
// }

// const ans = sumOfThreeNumber(4,8,8);
// console.log(ans);

// const isEven = number => {     you can remove the () when there is one data 
//     return number % 2 === 0;
// }

// const ans = isEven(5);
// console.log(ans);


// const anyNumber = (anyString) => {
//     return anyString[4];;
// }

// console.log(anyNumber("rohit"));

// if there is only one data you can remove the () and you can do in this type 

// const anyNumber = anyString => anyString[4];

// console.log(anyNumber("rohit"));

// const myTarget = (array, target) => {
//     for(i=0; i<=array.length; i++){
//         if(array[i]===target)
//             return i
//     }
//             return -1
// }

// const myArray = [1, 45, 55, 65];
// const ans = myTarget(myArray, 65);
// console.log(ans);

// hoisting 

// hello();

// function hello(){
//     console.log("hello rohit");
// }

// console.log("hello");
// var hello = "hello rohit";
// console.log("hello");

// Function into function 

// function app(){

//     const myfav = () => {
//         console.log("Rohit learn fast JS");
//     }

//     const addThree = (num1, num2, num3) => {
//         return num1 + num2 + num3;
//     }

//     const mul = (num1, num2) => num1 * num2;

//     console.log("hello world");

//     console.log(addThree(4,5,6));
//     console.log(mul(4,4));
// }

// app();

// Lexical scope 

// const newVar = "value47"

// function myWall(){

    

//     function myFunc(){
//         const newVar2 = () => {
//             console.log("inside rohit", newVar);
            
//         }
//         newVar2();
//     }

//     console.log("hello rohit");
//     console.log(newVar);
//     myFunc();
    
// }

// myWall();

// default parameters 

// old method for default parameters 
// function addNum(a,b){
//     if(typeof b==="undefined"){
//         b=0;
//     }
//      return a+b;
// }

// const ans = addNum(4);
// console.log(ans);

// New method for default parameters 

// function addNum(a,b=0){
//      return a+b;
// }

// const ans = addNum(4);
// console.log(ans);

// rest parameters

// function addval(a,b,...c){
//     console.log("value of a is", a);
//     console.log("value of b is", b);
//     console.log("value of c is", c);
// }

// addval(4,5,6,5,8,7,9);

// function addNum(...numbers){
//     console.log(numbers);
//     console.log(Array.isArray(numbers));
// }
// addNum();


// function addNum(...numbers){
//     let total = 0

// for(let number of numbers){
//     total = total + number;
// }
// return total;
// }
// const ans = addNum(4,5,8,7,);
// console.log(ans);

// parameter destructing

// const person = {
//     firstName: "rohit",
//     gender: "Male",
//     age: 28
// }

// function getDetail(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }

// getDetail(person);

// how to destructure 

// function getDetail({firstName, gender, age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }
// getDetail(person);

// Callback function 

// function myFun2(Name){
//     const myVar = "value55";
//     console.log("lets play a game");
//     console.log(myVar, `this is ${Name}`);
// }

// function myFun(numy){
//     console.log("my name is numy");
//     console.log("hello DSA");
//     numy("rohit");    >> this is callback 
// }

// myFun(myFun2);

// function returning function 

// function myFun(){
//     function hello(){
//         return "hello world";
//     }
//     return hello;
// }

// const ans = myFun();
// console.log(ans());

// Important array methods 

// const numbers = [4,5,8,9]

// function myFunc(number, index){
    // console.log("index is", index);
//     // console.log(`index is ${index} number is ${number}`);
// }

// myFunc(numbers[0], 0);
// myFunc(numbers[1], 1);
// myFunc(numbers[2], 2);
// myFunc(numbers[3], 3);

// for(let i=0; i<= numbers.length; i++){
//     myFunc(numbers[i], i);
// }

// numbers.forEach(function(number, index){
//     console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach(function(number){
//     console.log(number*2);
// })


// const users = [
//     {firstName: "rohit", age:22},
//     {firstName: "saurabh", age:23},
// ]

// using arrow function 
// users.forEach(users=>{
//     console.log(users.firstName);
//     console.log(users.age);
// })

// users.forEach(function(user){
//     console.log(user.firstName);
//     console.log(user.age);
// })

// for(let user of users){
//     console.log(user.firstName);
//     console.log(user.age);
// }

// const myArray = [5,6,8,9,4];

// myArray.forEach(function(myArray){
//     console.log(`the number is`,myArray*2);

// })

// Map method very impotant 

// const myNumber = [7,5,6,2,4]

// const square = function(number){
//     return number * number;
// }

// using arrow function 

// const newSquare = myNumber.map(number => {
//     return number * number;
// });
// console.log(newSquare);

// const friends = [
//     {firstName: "rohit", age: 22},
//     {firstName: "saurabh", age: 22},
//     {firstName: "sidra", age: 25},
//     {firstName: "baswad", age:22},
// ]

// const ans = friends.map((friend)=>{
//     return friend.firstName;
    
// })

// console.log(ans);

// Filter method 

// const oddNumbers = [1,3,2,4,7,8,6]

// const ans = oddNumbers.filter((number)=>{
    // return number % 2 !== 0;    for odd
        // return number % 2 === 0;   for even
// })

// console.log(ans);

// reduce method 

// const val = [1,5,8,9,7,6]

// const ans = val.reduce((add, titon)=> {
//     return add + titon;
// })

// console.log(ans);

const myCart = [
    {personId: 1, product: "laptop", price: 5000},
    {personId: 2, product: "soundbox", price: 10000},
    {personId: 3, product: "monitor", price: 6000},
]

const totalValue = myCart.reduce((productName, product)=>{
    return productName + product.price;
}, 0);

console.log(totalValue);

