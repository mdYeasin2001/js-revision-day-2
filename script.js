/*---------------variable------------*/
let money = 100;
money = 80;
// console.log(money);

const friendName = 'ali';
// friendName = 'abdul'; 
// console.log(friendName);


/*------------------ variable type---------------- */
//string, number, boolean
let friend = 'abdul';
let haveMoney = true;
const haveGirlFriends = false;
let friendsHave = 10;


/* ----------- string case change and string split */
let promise = 'I will hard work to become a Web Developer';
let up =  promise.toUpperCase();
let low = promise.toLowerCase();
// console.log(low, up, promise);
// console.log(promise.indexOf("won't"));
let promiseInArr = promise.split(' ');
// console.log(promiseInArr[7]);


/*-------------- integer, float, parseInt, parseFloat, type conversion, typeof, string to number by using '+' sign before the string, number to string using "" empty string -----------------*/
let integerNum = 5;
let floatNum = 3.05;
let stringNumber = +'10' // +
// console.log(integerNum + "");
// console.log(stringNumber);


/*---------------- mathematical operation -----------------*/
let num1 = 5;
let num2 = 3;
const total = num1 + num2;
const subtraction = num1 - num2;
const multiplication = num1 * num2;
const division = num1 / num2;
const modulus = num1 % num2;

num1 += num2;
//or, num1 = num1 + num2;
num1 *= num2;
// or, num1 = num1 * num2;
num1 -= num2;
// or, num1 = num1 - num2;
num1 /= num2;
// or, num1 = num1 / num2;


/*------------------ round, floor, ceil, toFixed, random -------------------*/
let num3 = 4.00083;
let num4 = 5.05;
let product = num3 * num4;
product = +product.toFixed(1) // any integer value can go in toFixed method it means the number after the decimal point
product = Math.round(product)
num3 = Math.round(num3);
num3 = Math.floor(num3);
num3 = Math.ceil(num3);
// console.log(product);
// console.log(num3);

const randomNum = Math.random();
// console.log(randomNum);