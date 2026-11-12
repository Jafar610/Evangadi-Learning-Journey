const hiddenWord =(word)=>{
    let hiddenWord = '';
    if(typeof(word)!== 'string' || word.length < 1 || word === word.toUpperCase()){
        return 'Please Enter a valid string'
    }
    for(i = 0; i < word.length; i++){
        if(word[i] === word[i].toLowerCase()){
            hiddenWord+=word[i];
        }
    }

    return hiddenWord;
}

console.log(hiddenWord('EVcANGAaDIt'));

const nested =(arr1, arr2)=>{
 if(!Array.isArray(arr1, arr2) || arr1.length < 1 || arr2.length < 1){
    return 'Please enter a valid number'
 }

    let max1 = Math.max(...arr1);
    let min1 = Math.min(...arr1);
    let max2 = Math.max(...arr2);
    let min2 = Math.min(...arr2);


   if(max1 < max2 && min1 > min2 ){
    return true;
   }
   return false;
}

console.log(nested([1,42,5], [3,5,2]))




const isPrime = (num) =>{
    for(i = 2; i < num; i++){
       if(num % i === 0){
        return false;
       }
    }
    // console.log(num);
    return true;
}
// console.log(isPrime());

const prime = (arr)=>{
    var prr = 0;
    for(let i = 0; i < arr.length; i++){
        

        if(isPrime(arr[i])){
            prr += arr[i];
        }
    }

    if(arr[0] === prr){
        return 'Is Magic Array';
    }else{
        return 'Is not magic array'
    }
    
}

console.log(prime([21,3,7,9,11,4,6]));
console.log(prime([13,4,4,4,4]));



const maxMin = (arr)=>{
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    let minMax = [min, max];
    console.log(minMax);
}

maxMin([1,2,3,4,5]);

const factors = (num)=>{
    let fact = [];
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            fact.push(i)
        }
    }
    return fact;
}
console.log(factors(12));



const halvesNum = (num)=>{


   if(num % 2 === 0){
    let num1 = num /2;
    let num2 = num1;

    console.log(num1, num2);
   }else{
     let dev = num / 2;
     let oddNum1 = Math.floor(dev)
     let oddNum2 = Math.ceil(dev);

     console.log(oddNum1, oddNum2)
   }



}
halvesNum(4);


// Additional Question
//? Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
// Todo: First convert the hour to minutes and add them.
// Todo: convert the total minute to second.

const converter = (hours, minutes) =>{
    let total = (hours * 60 * 60) + (minutes * 60);

    return total;

}
console.log(converter(1,40));




//? Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
//* wins get 3 points
//* draws get 1 point
//* losses get 0 points
//* e.g footballPoints(3, 4, 2) ➞ 13

const footballPoint =(wins, draws, losses)=>{
    return (wins * 3 + draws * 1 + losses * 0);
}
console.log(footballPoint(3, 4, 2));


//? There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

const remainder = (x, y)=>{
    return x % y;
}
console.log(remainder(4,5));


//? Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

const divisble = (num)=>{
    if(num % 100 === 0) return true;
    return false;
}

console.log(divisble(1000));



//?Your game needs a message for the player. Create gameMessage to return "Keep playing" when health is above 0. Otherwise, return "Game over".

const gameMessage = (health)=>{
    if(health > 0){
        return "Keep Playing";
    }
    return "Game Over";
}
console.log(gameMessage(10))


//? Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
// Notes
// n will always be greater than 2.
// The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.
// e.g sumPolygon(3) ➞ 180
// sumPolygon(4) ➞ 360
// sumPolygon(6) ➞ 720

const sumPloygon = (n)=>{
    if(n<2) return 'Please enter an angle more than 2 side.';
    return (n-2) * 180;
}
console.log(sumPloygon(6));


//?  A spaceship will take three decades to build. Given the current population and the number of people born each month, return the population when the spaceship is complete.
// Examples
// futurePeople(256, 2) ➞ 976
// futurePeople(3248, 6) ➞ 5408
// futurePeople(5240, 3) ➞ 6320

const spaceship = (popullation, n)=>{
    return (n * 360) + popullation;
}
console.log(spaceship(256, 2));


//? Create a function that will work as the modulus operator % without using the modulus operator. The modulus operator is a way to determine the remainder of a division operation. Instead of returning the result of the division, the modulo operation returns the whole number remainder.

const remin = (a, b)=>{
    return a - (b * Math.floor(a / b))
}

console.log(remin(5, 2));


// Evaluate a gapless arithmetic expression written as a string. Inputs use +, -, *, and / with normal operator precedence. A number may begin with a minus sign, and division may produce a decimal result.

// Examples
// calculator("23+4") ➞ 27
// calculator("45-15") ➞ 30
// calculator("13+2-5*2") ➞ 5
// calculator("49/7*2-3") ➞ 11

const calculator = (str)=>{
    return eval(str);
}

console.log(calculator("49/7*2-3"));


// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

// Examples
// totalAmountAdjectives({ a: "moron" }) ➞ 1

// totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }) ➞ 3


const totalAmountAdjectives = (obj)=>{
    return Object.keys(obj).length;
}
console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot", d:"idiot" }))


// Create a function that takes the number of daily average recovered cases recovers, daily average newCases, current activeCases, and returns the number of days it will take to reach zero cases.
// Examples
// endCorona(4000, 2000, 77000) ➞ 39
// endCorona(3000, 2000, 50699) ➞ 51
// endCorona(30000, 25000, 390205) ➞ 79

const endCorona = (recovered, newCases, activeCases)=>{
    return (Math.ceil(activeCases/(recovered - newCases)));
}
console.log(endCorona(30000, 25000, 390205))



// Each entry in results is either "pass" or "fail". Create backToBackFailures to return true if two failures appear next to each other anywhere in the array. Otherwise, return false. Failures separated by a pass do not count.

// Examples
// backToBackFailures(["pass","fail","fail"]) // true

// backToBackFailures(["fail","pass","fail"]) // false

// backToBackFailures(["pass","pass"]) // false





// For this challenge, an email reply has a subject that starts with "Re:". Write isEmailReply to return true if subject starts with that exact prefix, or false otherwise.

// Examples
// isEmailReply("Re: Lunch tomorrow") // true

// isEmailReply("Lunch Re: tomorrow") // false

// isEmailReply("RE: Lunch") // false






// Create scoresByTarget to return two arrays: first the scores that are at least target, then the scores below it. Return them together as [reached, below]. Keep the original order within each group and keep repeated scores.

// Examples
// scoresByTarget([40,70,50], 50) // [[70,50],[40]]

// scoresByTarget([10,20], 30) // [[],[10,20]]

// scoresByTarget([50,80], 50) // [[50,80],[]]






// Create beforeCancel to return the actions before the first "cancel" in actions. Do not include "cancel" or anything after it. If there is no "cancel", return all the actions. Keep their order.

// Examples
// beforeCancel(["save","send","cancel","print"]) // ["save","send"]

// beforeCancel(["cancel","save"]) // []

// beforeCancel(["save","print"]) // ["save","print"]






// Each task is written as [name, done], where done is true for a completed task and false otherwise. Create firstUnfinished to return the name of the first unfinished task in the given order. Return null if there are no unfinished tasks.

// Examples
// firstUnfinished([["write",true],["test",false],["ship",false]]) // "test"

// firstUnfinished([["wash",true],["dry",true]]) // null

// firstUnfinished([["read",false],["read",false]]) // "read"








// The starter writes every count with the word "items", such as "3 items". Extend itemLabel to return "1 item" when the count is 1. Keep the current output for every other count.

function itemLabel(count) {
  if(count === 1) return count + " item";
  return count + " items";
}

console.log(itemLabel(3));


// Given an array, rotate the values clockwise by one (the last value is sent to the first position).
// Check the examples for a better understanding.
// Examples
// rotateByOne([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]
// rotateByOne([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]
// rotateByOne([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8]




// Create a function that takes a string txt and a number n and returns the repeated string n number of times.
// If given argument txt is not a string, return Not A String !!
// Examples
// repeatString("Mubashir", 2) ➞ "MubashirMubashir"
// repeatString("Matt", 3) ➞ "MattMattMatt"
// repeatString(1990, 7) ➞ "Not A String !!"

function repeatString(txt, n) {
	if(typeof(txt) !== 'string'){
    return "Not A String !!";
  }else{
    return txt.repeat(n);
  }
}




// Bart is back at the chalkboard. Create chalkboard to repeat word exactly times times and return the result as one string, with no added spaces or line breaks.

// Examples
// chalkboard("Sorry", 3) // "SorrySorrySorry"

// chalkboard("Oops", 1) // "Oops"

// chalkboard("Again", 0) // ""


const chalkboard = (word, times)=>{
    return word.repeat(times)
}
console.log(chalkboard('Jafar', 2));


// The input is an integer or a string of decimal digits. Rearrange its digits to form and return the greatest possible integer.

// Examples
// rotateMaxNumber(123) ➞ 321

// rotateMaxNumber("001") ➞ 100

// rotateMaxNumber(999) ➞ 999

function rotateMaxNumber(num) {
	let rev =  num.toString().split('').sort((a,b)=>b-a).join('');
  return parseInt(rev);
}

// A Narcissistic Number is a number that is the sum of its own digits each raised to the power of the number of digits.

// For example, take 153 (3 digits), which is narcisstic:

// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// 1652 (4 digits), is non-narcisstic:

// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// Create a function that returns true or false depending upon whether the given number n is a Narcissistic number or not.

// Examples
// isNarcissistic(153) ➞ true

// isNarcissistic(370) ➞ true

// isNarcissistic(1652) ➞ false


function isNarcissistic(n) {
	let len = n.toString();
    let sum = 0
    for(let i=0; i<len.length; i++){
        sum = sum + Math.pow(len[i], len.length);
        
    }
console.log(sum)
if(sum === n){
    console.log(true);
}else{
    console.log(false)
}
}

isNarcissistic(153)