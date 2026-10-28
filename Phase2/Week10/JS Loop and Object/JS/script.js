// Q1
const num = () => {
  for (i = 1; i <= 10; i++) {
    console.log(i);
  }
};
num();

//Q2

const numbers = (num) => {
  if (!Number.isInteger(num)) {
    console.log("Please enter the valid number");
  }

  for (i = 1; i <= 5; i++) {
    console.log((num += 1));
  }
};

numbers(7);

//Q3
const singleNum = (num) => {
  if (!Number.isInteger(num)) console.log("Please enter a valid number");
  let sum = 0;
  for (i = 1; i <= 10; i++) {
    sum += num + i;
  }
  console.log(sum);
};
singleNum(7);

//Q4
const arr = (num) => {
  if (!Array.isArray(num)) {
    console.log("Only arrays allowed");
  }

  for (i = 0; i < num.length; i++) {
    console.log(num[i]);
  }
};
arr([2, 4, 5, 6, "Jafar"]);

//Q5
const arr2 = (arr) => {
  if (!Array.isArray(arr)) console.log("Enter valid array number only.");
  console.log(arr.length);
};
arr2([3, 4, "hello", true]);

//Q6
const arr3 = (num) => {
  if (!Array.isArray(num)) {
    console.log("Please Enter an array");
  } else {
    var sum = 0;
    for (i = 0; i < num.length; i++) {
      if (!Number.isInteger(num[i])) {
        continue;
      }
      sum += num[i];
    }
    console.log(sum);
  }
};
arr3([5, 6, "99", 8, "76", 4, "68", 44]);



//Q7
const arr4 = (num) => {
  if (!Array.isArray(num)) {
    console.log("Please Enter an array");
  }
  var SumOdd = 0,
    SumEven = 0,
    total;
  for (i = 0; i < num.length; i++) {
    if (!Number.isInteger(num[i])) {
      console.log("please enter a valid number");
      // break;
    }
    if (num[i] % 2 === 0) {
      SumEven += num[i];
    } else {
      SumOdd += num[i];
    }
  }

  total = SumEven - SumOdd;

  console.log(SumEven);
  console.log(SumOdd);
  console.log(total);
};

arr4([5, 6, 99, 8, 76, 4, 68, 44]);

//Q8
const arr5 = (num) => {
  if (!Array.isArray(num)) {
    console.log("Please Enter an array");
  }
  for (i = 0; i < num.length; i++) {
    if (i % 2 === 0) {
      console.log(num[i]);
    }
  }
};
// arr5([5, 6, 99, 8, 76, 4, 68, 44])
arr5([11, "sam", 3, 7, "car"]);

let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
//Q9

const sArray = (num) => {
  num.pop();
  console.log(num);

  num.unshift(32);
  console.log(num);
};

sArray(sampleArray);

//10

const sortArray = (num) => {
  num.sort((a, b) => a - b);
  console.log(num);
};

sortArray(sampleArray);

//Q11 and Q12
let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },
    {
      name: "Challa",
      age: 22,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
};

//Q11
evangadiClass.lengthOfCourse = "5 Monthes";
console.log(evangadiClass.lengthOfCourse);

//Q12
evangadiClass.topicsCovered.push("Bootstrap");
console.log(evangadiClass.topicsCovered);

//Q13
const Avg = (num) => {
  let sum = 0;
  for (i = 0; i < num.students.length; i++) {
    console.log(num.students[i].age);
    sum += num.students[i].age;
  }
  console.log(sum / num.students.length);
};
Avg(evangadiClass);

//Q14
const Percentage = (num) => {
  let NumOfMale = 0;
  for (i = 0; i < num.students.length; i++) {
    // console.log(num.students[i].sex);
    if (num.students[i].sex === "F") {
      continue;
    }
    console.log(num.students[i].sex);
    NumOfMale++;
  }
  // percentage = (part/whole) * 100
  console.log((NumOfMale / num.students.length) * 100);
};

Percentage(evangadiClass);

//PUZZLE

//Q15
const number = (low, high) => {
  if (low >= high) {
    console.log(
      "Your low number greater than or equal to high please try again.",
    );
  } else {
    let num = [];
    for (i = low; i < high - 1; i++) {
      num.push((low += 1));
    }
    console.log(num);
    for (i = 0; i < num.length; i++) {
      if (num[i] % 3 === 0) {
        console.log(`${num[i]} is div by 3`);
      }
    }
  }
};
number(2, 10);

// Q16
// const FizzBuzz = () => {
//   let mutipleby3 = [];
//   let mutipleby5 = [];
//   for (i = 1; i <= 10; i++) {
//     mutipleby3.push(3 * i);
//     mutipleby5.push(5 * i);
//     console.log(5 * i);
//   }
//   if (mutipleby3) {
//     console.log("Fizz");
//   }
//   if (mutipleby5) {
//     console.log("Buzz");
//   }
  
// };

// FizzBuzz();



//Additional Thinks.
const arrs = [2,4,5,7];
let sum = 0;
for(i =0; i<arrs.length; i++){
  console.log(arrs.at(i));
  sum = sum + arrs.at(i);
}
console.log(sum);


const sampArr = (arr)=>{
  for(i = 0; i < arr.length; i++){
    if(arr.at(i) % 2 === 0){
      console.log(`${arr.at(i)} is even`)  ;
    }
    else{
      console.log(`${arr.at(i)} is odd`) ;
    }
  }
}

sampArr([2,4,5,7]);


