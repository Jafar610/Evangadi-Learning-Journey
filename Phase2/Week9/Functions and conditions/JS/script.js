// Q1

const myFirst = () => {
  console.log("Hello world");
};
myFirst();

//Q2

const mySecond = (name) => {
  console.log("Hello " + name);
};
mySecond("Jafar");

//Q3
const myThird = (age) => {
  mySecond("I'm  " + age + " years old");
};
myThird(24);

//Q4
const myForth = (num) => {
  console.log(num[0]);
};
myForth([1, 3, 4, 5]);

//Q5
const myFifth = (num) => {
  console.log(num[0] + num[1]);
};
myFifth([2, 4]);

//Q6
//pseudo code
// - create a function converter and take an integer.
// - validate the number
// - convert and display the result.

const converter = (minute) => {
  if (!Number.isInteger(minute) || minute < 0) {
    return "Enter a valid minute";
  }
  return minute * 60;
};

console.log(converter(4));

//Q7

const count = (num) => {
  if (typeof num !== "number" || !Number.isFinite(num)) {
    return "please enter a valid number";
  }

  return num + 1;
};

console.log(count(NaN));
console.log(count(2));
console.log(count(true));
console.log(count("true"));
console.log(count(Math.sqrt(2)));

//Q8
const Area = (b, h) => {
  if (typeof b == "number" && typeof h == "number") {
    console.log((b * h) / 2);
  }
  console.log("Please enter a number");
};

Area(3, 5);

//Q9
const legCounter = (chicken, cows, pigs)=>{
    if(!Number.isInteger(chicken, cows, pigs) ||chicken < 0 || cows < 0 || pigs < 0 ){
        return "Enter a valid number";
    }
    let noOfLegs = chicken * 2 + cows * 4 + pigs * 4;

    return noOfLegs
}

console.log(legCounter(2, 4,5));


//Q10

const twoArray = (number)=>{
    if(!Array.isArray(number) || Array.length < 2) return "Enter valid array number";

    let fNumber = number[0]*3;
    return fNumber;
}

console.log(twoArray([5, true]));

