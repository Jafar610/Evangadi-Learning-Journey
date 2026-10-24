// Q1
const myFirst = () => {
  console.log("Hello world");
};
myFirst();




//Q2
const mySecond = (name) => {
  console.log("Hello I'm " + name);
};
mySecond("Jafar");




//Q3
const myThird = (age) => {
  mySecond( age + " years old");
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
const converter = (minute) => {
  if (!Number.isInteger(minute) || minute < 0) {
    return "Enter a valid Integer number";
  }
  return minute * 60;
};
console.log(converter(4));




//Q7
const count = (num) => {
  if (typeof num !== "number") return "please enter a valid number";
//   return num + 1;
// return ++num;
  return num+=1;
};
console.log(count(2));




//Q8
const Area = (b, h) => {
  if(typeof b !== "number" || typeof h !== "number") return "Please enter a valid number";
  return (b * h) / 2;
};
console.log(Area(3, 5));



//Q9
const legCounter = (chicken, cows, pigs)=>{
    if(!Number.isInteger(chicken, cows, pigs) ||  chicken < 0 || cows < 0 || pigs < 0 ){
        return "Enter a valid number";
    }
    let noOfLegs = chicken * 2 + cows * 4 + pigs * 4;
    return noOfLegs
}
console.log(legCounter(2, 4,5));



//Q10
const twoArray = (number) => { 
  if(!Array.isArray(number) || number.length < 2) return "Enter valid array number"; 
  
  let fNumber = number[0] * 3; 
  return fNumber; 
} 

console.log(twoArray([5, 2])); // Correctly outputs 15
console.log(twoArray([5]));    // Outputs "Enter valid array number"




//Q11
const Equality = (num1, num2)=>{
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return false;
    }
     return num1 === num2;
}
console.log(Equality(12,13));



//Q12
const divisble = (num)=>{
    if(!Number.isInteger(num)){
        return "Enter a valid number";
    }
    return num % 100 === 0;
}
console.log(divisble(200));
console.log(divisble(21));



//Q13
const oddEven = (num)=>{
    if(!Number.isInteger(num)){
      return "Enter a valid number"
    }
     return num % 2 === 0 ? "Even" : "Odd";
}
console.log(oddEven(12));
console.log(oddEven(13));



//Q14
// const grade = (score) => {
//   if (typeof score !== 'number' || score < 0 || score > 100) {
//     return "Invalid score";
//   }

//   if (score >= 90) return "Grade A";
//   if (score >= 80) return "Grade B";
//   return "Grade C";
// };

// console.log(grade(79));


const grade = (score) => {
  switch (true) {
    case typeof score !== 'number' || score < 0 || score > 100:
      return "Invalid score";
    case score >= 90:
      return "Grade A";
    case score >= 80:
      return "Grade B";
    default:
      return "Grade C";
  }
};

console.log(grade(79));




//Q15
function add(x = 1, y = x, z = x + y) {
    return x + y + z;
}

console.log(add()); // 4

//Q16

function add(x, y = 1, z = 2) {
    console.log( arguments.length );
    return x + y + z;
}

add(10); // 1
add(10, 20); // 2
add(10, 20, 30); // 3