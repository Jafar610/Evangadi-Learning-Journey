// Q1
const num = ()=>{
    for(i = 1; i<=10; i++){
        console.log(i);
    }
}
num();


//Q2

const numbers = (num)=>{
    if(!Number.isInteger(num)){
        console.log("Please enter the valid number");
    }

    for(i = 1; i <=5; i++){
        console.log(num+=1);
    }
}

numbers(7);

//Q3
const singleNum = (num) =>{
    if(!Number.isInteger(num)) console.log("Please enter a valid number");
    let sum = 0;
    for(i = 1; i <= 10; i++){
       sum += num + i;
    }
    console.log(sum)
}
singleNum(7);


//Q4
const arr = (num)=>{
    if(!Array.isArray(num)){
        console.log('Only arrays allowed');
    }

    for(i = 0; i < num.length; i++){
        console.log(num[i]);
    }
}
arr([2,4,5,6,"Jafar"]);

//Q5
const arr2 = (arr) =>{
    if(!Array.isArray(arr)) console.log('Enter valid array number only.');
    console.log(arr.length);
}
arr2([3,4,'hello',true]);