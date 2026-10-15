// Q1
// A
console.log("A :", 24 > 3);
console.log("B :", 2 < "12");
console.log("C :", 0 === 2);
console.log("D :", 2.0 === 2);
console.log("E :" ,2.0 === "2");
console.log("F :", 2 < "John");
console.log("G :", 2 > "John");
console.log("H :", "2" < "2");
console.log("I :", "2" > "12");
console.log("J :", 1==1 || 3==2 || 3==7);
console.log("K :",1==1 && 2==2 && 3==7);
console.log("L :", 1==1 || 2==2 && 3==7);
console.log("M :", 1==true && 0 > true || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1"));



// Q2
// 2
// let x = (1 == true)
// console.log(x);

// // 3
// let y = 10;
// let z = (y > 5) && (y < 15)
// console.log(z);

// let x = 10;
// let y = x++;
// console.log(y);

let x =1;
let y = (x !== 2);
console.log(y)

console.log(+ "2" + 2);
console.log(7 % 3);
console.log(2 + true);

// Q3
let a = 1;
let b = 2;
let c = a + b;
console.log(c);

//Q4
let firstName = "Jafar";
let lastName = "Mohamed";
let fullName = firstName + " " + lastName;

console.log(fullName);



// Arrays 
const personalInfo = ['Jafar', 24, 'male'];
const fname = "Mohamed";

personalInfo.push('Mohamed');
console.log(personalInfo);
personalInfo.reverse();

personalInfo.unshift('Yenewa');
console.log(personalInfo);

personalInfo.pop();
console.log(personalInfo);

personalInfo.shift();
console.log(personalInfo);

const index = personalInfo.indexOf('Mohamed');
console.log(index);



// splice method to delete the element of an array.
const number = [1,3,4,5,32];
const deletedNumber = number.splice(3, 2);
console.log(number, " deleted array number: ", deletedNumber);


//splice method to insert an array.
const color = ['Green', 'Yellow', 'Red'];
color.splice(2, 0,'Blue', 'Black', 'White', 'Orange');
console.log(color);
console.log(color.length);

//splice method for replacing an array element.

const programmingLanguage = ['C','C++', 'Java', ' Javascript'];
programmingLanguage.splice(1, 1, 'Python');
console.log(programmingLanguage);


// Slice method slice()
// slice() method is to copy a portion of an array without modifying the source array.

const num = [1, 2,3,4,5,6];
const newNum = num.slice(0, 3);
console.log(newNum);


// include() method.
// includes() method to check if a number or other data is included in an array

const student = ['abebe', 'gemechu' , 'chala'];
console.log(student.includes('Jafar')); // false
console.log(student.includes('abebe')); // true


// find() method.
//The find() method accepts a callback function that executes on every element of the array.
const oldNum = num.slice(0,5); // to use the above num value instead of creating a new array.

const evenNum = oldNum.find((even)=> even % 2 == 0);
console.log(evenNum);

const Info = student.slice(0, 3);
console.log(Info);

const stud = Info.find((name)=> name.includes('abe'));
console.log(stud);

// Using the find() method with an array of object 
const ProgStudents = [
  {
    id: 1,
    text: 'Learn JavaScript',
    isCompleted: true,
  },

  {
    id: 2,
    text: 'Master React',
    isCompleted: false,
  },

  {
    id: 3,
    text: 'Build an App ',
    isCompleted: false,
  },
];

const search = ProgStudents.find((completed)=>completed.isCompleted == true);
console.log(search);
console.log(search.id);


