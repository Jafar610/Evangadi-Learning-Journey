// Q1

const myFirst = ()=>{
    console.log("Hello world");
}
myFirst();

//Q2

const mySecond = (name) =>{
    console.log("Hello " + name);
}
mySecond("Jafar");

//Q3
const myThird = (age)=>{
    mySecond("I'm  " + age + " years old");
}
myThird(24);

const myForth = (num) =>{
    console.log(num[0]);
}
myForth([1,3,4,5]);

//Q7

const count = (num) => {
    if (typeof num !== 'number' || !Number.isFinite(num)) {
        return "please enter a valid number";
    }

    return num + 1;
}

console.log(count(NaN));          
console.log(count(2));          
console.log(count(true));        
console.log(count('true'));       
console.log(count(Math.sqrt(2)));

// Q8

// const Area = (b, h)=>{
//     if(typeof(b) == 'number' && typeof(h)=='number'){
//         console.log("Please enter a number")
//     }

//     console.log((b*h)/2);
// }

// Area(3,5);


