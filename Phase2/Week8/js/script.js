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


