//? Question 1 Given an array of numbers, write a function that prints in the console another array
// ? which contains all the even numbers in the original array, which also have even indexes only.
// TODO : ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// TODO : ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]



//JS code.
// const getOnlyEvens = (number) => {
//   if (!Array.isArray(number)) console.log("Please enter array number.");
//   let sum = 0,
//     newArr = [];
//   for (i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0) {
//       sum += 1;
//       newArr.push(i);
//     }
//   }
//   console.log(sum);
//   console.log(newArr);
// };
// getOnlyEvens([1, 2, 3, 6, 4, 8]);
// getOnlyEvens([0, 1, 2, 3, 4])

//Question 2
// ? ● Create a function that takes a two-digit number as an parameter and prints "Ok" in the console if the given string is greater than its reversed digit version. If not, the function will print "Not ok"
// Todo : ○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
// Todo : ○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32



// JS code
const compare = (num) => {
  let revNumber = num.toString().split("").reverse().join("");
  let IntNum = parseInt(revNumber, 10);
  if (num > IntNum) {
    return "OK";
  } else {
    return "NOT OK";
  }
};
console.log(compare(27))




//Question 3
// ? Write a function that takes a positive integer and returns the factorial of the number.
// ? Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. Thefactorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is 4 * 3 * 2 * 1 = 24)
// Todo: ○ Test 1: returnFactorial(5) outputs 120
// Todo: ○ Test 2: returnFactorial(6) outputs 720
// Todo: ○ Test 3: returnFactorial(0) outputs 1

// 4 = 4x3x2x1; ----- n = n x (n-1) x (n-2) x (n-3)
//4 = 1x2x3x4;  ----- n = 1 x 2 x3 x ... x n

// * SOLUTION 1
const factorial = (num) => {
  if (num < 0) return "Please Enter only positive number";
  if (num === 0) {
    return 1;
  }

  let f = 1;
  for (i = 1; i <= num; i++) {
    f = f * num * factorial(num - 1); // n! = n * (n-1)! => 4! = 4*(4-1)! ---- 4! = 4 * (3)!
  }

  return f;
};
console.log(factorial(3));

// * SOLUTION 2

const fact = (num) => {
  if(!Number.isInteger(num) || num < 0) return 'Please enter a valid number';
  if (num === 0) {
    return 1;
  }
  let f = 1;
  for (i = 1; i <= num; i++) {
    f = f * i; //4 -- 1x2x3
  }

  return f;
};

console.log(fact(-4));

//Question 4 (Meera array)

//? ● A Meera array is defined to be an array containing only numbers as its elements and for all n values in the array, the value n*2 is not in the array.

//? So [3, 5, -2] is a Meera array because 3*2, 5*2 or 2*2 are not in the array.
//?  But [8, 3, 4] is not a Meera array because 2*4=8 and both 4 and 8 are elements found in the array.

//? Write a function that takes an array of numbered elements and prints “I am a Meera array” in the console if its array does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a Meera array”
// Todo: ○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 * 2 is 10
// Todo: ○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
// Todo: ○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3 * 2 is -6

// * SOLUTION 1

const meeraArray = (arr) => {
  let result;
  for (i = 0; i < arr.length; i++) {
    result = 2 * arr[i];

    for (j = 0; j < arr.length; j++) {
      if (result === arr[j]) {
        return "I am Not Meera Array";
      } else {
        continue;
      }
    }
  }

  return "I am Meera Array.";
};

console.log(meeraArray([10, 4, 0, 5]));
console.log(meeraArray([7, 4, 9]));
console.log(meeraArray([1, -6, 4, -3]));




// * SOLUTION 2
const isMeera = (arr) => {
  const newArray = arr.map((x) => x * 2);
  console.log(newArray);

  for (const el of arr) {
    if (newArray.includes(el)) {
      return "I am not a meera array";
    } else {
      continue;
    }
  }
  return "I am Meera array";
};
console.log(isMeera([7, 4, 9]));
console.log(isMeera([1, -6, 4, -3]));
console.log(isMeera([10, 4, 0, 5]));






// Question 5 (Dual array)

//? ● Define a Dual array to be an array where every value occurs exactly twice. For example,
//?  {1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5 occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two times).

// Todo: Write a function named isDual that returns 1 if its array argument is a Dual array. Otherwise it returns 0.

const isDual = (arr) => {
  if (arr.length % 2 !== 0) {
    return 0;
  }

  for (i = 0; i < arr.length; i++) {
    let count = 0;
    for (j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }

    if(count !== 2){
      return 0;
    }
  }
  return 1;
};

console.log(isDual([3, 1, 1, 2, 2]));
console.log(isDual([1, 2, 1, 3, 3, 2]));


// Question 6
//?  ● Write a function that takes the number of seconds and returns the digital format clock
//? time as a string. Time should be counted from 00:00:00.
// ○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
// secs.
// ■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
// ■ digitalClock(87000) as "00:10:00" It's 00:10 next day.


function digitalClock(seconds) {
    // Calculate total hours and convert to 24-hour format
    const hours = Math.floor(seconds / 3600) % 24;

    // Calculate remaining minutes
    const minutes = Math.floor((seconds % 3600) / 60);

    // Calculate remaining seconds
    const remainingSeconds = seconds % 60;

    // Format each value with two digits
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

console.log(digitalClock(5025));  // 01:23:45
console.log(digitalClock(61201)); // 17:00:01
console.log(digitalClock(87000)); // 00:10:00
