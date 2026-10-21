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
  return ++num;
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



//Q11
const Equality = (num1, num2)=>{
    if(!Number.isNaN(num1) && !Number.isNaN(num2) && num1 === num2){
        return true;
    }else{
        return false;
    }
}
console.log(Equality(12,23));



//Q12
const divisble = (num)=>{
    if(Number.isInteger(num)){
       return 100 % num === 0 ? true : false;
    }
    return "Enter a valid number";
}
console.log(divisble(20));
console.log(divisble(21));



//Q13
const oddEven = (num)=>{
    if(Number.isInteger(num)){
       return num % 2 === 0 ? "Even" : "Odd";
    }
    return "Enter a valid number"
}
console.log(oddEven(12));
console.log(oddEven(13));



//Q14
const grade = (score)=>{
    if(!Number.isNaN(score)){
        if(score < 0 || score > 100) return "Invalid score";
        else if(score >= 90 && score <=100) return "Grade A";
        else if(score >= 80 && score < 90) return "Grade B";
        else if(score <= 79) return "Grade C";
    }else{
        return "Enter a valid score";
    }
    
}
console.log(grade(79));