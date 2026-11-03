//? Question 1 Given an array of numbers, write a function that prints in the console another array
// ? which contains all the even numbers in the original array, which also have even indexes only.
// TODO : ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// TODO : ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]

// crafting steps for problem 1
// * checking the number weather its even or odd.
// * count only the even number
// * store the counted number.

// PseudoCode1
// * create a function called getOnlyEvens that take an argument.
// * use for loop to itarate the array
// * Create if statement to check the number even or odd.
// * if number % 2 === 0 then even
// * count the even number only.
// * return the value.

//JS code.
const getOnlyEvens = (number) => {
  if (!Array.isArray(number)) console.log("Please enter array number.");
  let sum = 0,
    newArr = [];
  for (i = 0; i < number.length; i++) {
    if (number[i] % 2 === 0) {
      sum += 1;
      newArr.push(i);
    }
  }
  console.log(sum);
  console.log(newArr);
};
getOnlyEvens([1, 2, 3, 6, 4, 8]);
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
    console.log("OK");
  } else {
    console.log("NOT OK");
  }
};
compare(27);

//Question 3
// ? Write a function that takes a positive integer and returns the factorial of the number.
// ? Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. Thefactorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is 4 * 3 * 2 * 1 = 24)
// Todo: ○ Test 1: returnFactorial(5) outputs 120
// Todo: ○ Test 2: returnFactorial(6) outputs 720
// Todo: ○ Test 3: returnFactorial(0) outputs 1

// 4 = 4x3x2x1; ----- n = n x (n-1) x (n-2) x (n-3)
//4 = 1x2x3x4;  ----- n = 1 x 2 x3 x ... x n

// * SOLUTION 1
const factorial = (num) =>{
    if(num < 0) return 'Please Enter only positive number'
    if(num===0){
      return 1;
    }

    let f = 1;
    for(i = 1; i <= num; i++){
      f = f * num * factorial(num - 1)
    }

    return f;
}
console.log(factorial(3));


// * SOLUTION 2

const fact = (num)=>{
  if(num === 0){
    return 1;
  }
  let f =1;
  for(i = 1; i <= num; i++){
    f = f * i;
  }

  return f;
}

console.log(fact(5));




