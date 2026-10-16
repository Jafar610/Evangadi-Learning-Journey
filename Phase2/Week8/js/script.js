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


// includes() method.
// includes() method to check if a number or other data is included in an array

const student = ['abebe', 'gemechu' , 'chala'];
console.log(student.includes('Jafar')); // false
console.log(student.includes('abebe')); // true


// find() method.
//The find() method accepts a callback function that executes on every element of the array.
// Use the find() method to find the first element in an array that satisfies a provided testing function.
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


// map() method
// The JavaScript Array map() method creates a new array that includes the results by applying a function to every element in the original array.

const nn = [1,2,3];
const result = nn.map((n)=> n*4);
console.log(result);

// filter() method
// The filter() method creates a new array with elements from the original array, which passes a test function.

const numb = [1,3,4,2,5,9];
const res = numb.filter((n)=> n > 2);
console.log(res);

// additional example.

const cities = [
  { name: 'Los Angeles', population: 3_792_621 },
  { name: 'New York', population: 8_175_133 },
  { name: 'Chicago', population: 2_695_598 },
  { name: 'Houston', population: 2_099_451 },
  { name: 'Philadelphia', population: 1_526_006 },
];

const bigCities = cities.filter((city) => city.population > 3_000_000)
.map((c)=>c.name)
.forEach((c)=>console.log(c));

// The Array reduce() method iterate over an array and reduce their elements to a single value.
// The reduce() method executes a function for each value in the array from left to right and store the return value of the function in a accumulator.

const numReduce = [1,2,3];
const reduceValue = numReduce.reduce((acc, cv)=> acc + cv);
console.log(reduceValue);

// additional example
const cart = [
  {
    product: 'phone',
    qty: 1,
    price: 500,
  },
  {
    product: 'Screen Protector',
    qty: 1,
    price: 10,
  },
  {
    product: 'Memory Card',
    qty: 2,
    price: 20,
  },
];

const reducer = (acc, item) => acc + item.qty * item.price;
const total = cart.reduce(reducer, 0);

console.log({ total });


//every() method of array
//The every() method that allows you to check if every element of an array passes a test provided by a function.

const numbers = [1, 3, 5];
const r = numbers.every((n) => n > 0);

console.log({ r }); // true

// example 2
let numbers2 = [2, 4, 5];
let result2 = numbers.every((n) => n % 2 == 0);

console.log({ result2 }); // false

// sort() method 
// The sort() method allows you to sort elements of an array in place. It changes the positions of the elements in the original array and returns the sorted array.

// By default, the sort() method sorts the array elements in ascending order, placing the smallest value first and the largest value last.

let numbers3 = [0, 2, 5, 3, 10];
numbers.sort();
console.log(numbers3);