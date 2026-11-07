const hiddenWord =(word)=>{
    let hiddenWord = '';
    if(typeof(word)!== 'string' || word.length < 1 || word === word.toUpperCase()){
        return 'Please Enter a valid string'
    }
    for(i = 0; i < word.length; i++){
        if(word[i] === word[i].toLowerCase()){
            hiddenWord+=word[i];
        }
    }

    return hiddenWord;
}

console.log(hiddenWord('EVcANGAaDIt'));

const nested =(arr1, arr2)=>{
 if(!Array.isArray(arr1, arr2) || arr1.length < 1 || arr2.length < 1){
    return 'Please enter a valid number'
 }

    let max1 = Math.max(...arr1);
    let min1 = Math.min(...arr1);
    let max2 = Math.max(...arr2);
    let min2 = Math.min(...arr2);


   if(max1 < max2 && min1 > min2 ){
    return true;
   }
   return false;
}

console.log(nested([1,42,5], [3,5,2]))




const isPrime = (num) =>{
    for(i = 2; i < num; i++){
       if(num % i === 0){
        return false;
       }
    }
    // console.log(num);
    return true;
}
// console.log(isPrime());

const prime = (arr)=>{
    var prr = 0;
    for(let i = 0; i < arr.length; i++){
        

        if(isPrime(arr[i])){
            prr += arr[i];
        }
    }

    if(arr[0] === prr){
        return 'Is Magic Array';
    }else{
        return 'Is not magic array'
    }
    
}

console.log(prime([21,3,7,9,11,4,6]));
console.log(prime([13,4,4,4,4]));



const maxMin = (arr)=>{
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    let minMax = [min, max];
    console.log(minMax);
}

maxMin([1,2,3,4,5]);

const factors = (num)=>{
    let fact = [];
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            fact.push(i)
        }
    }
    return fact;
}
console.log(factors(12));



const halvesNum = (num)=>{


   if(num % 2 === 0){
    let num1 = num /2;
    let num2 = num1;

    console.log(num1, num2);
   }else{
     let dev = num / 2;
     let oddNum1 = Math.floor(dev)
     let oddNum2 = Math.ceil(dev);

     console.log(oddNum1, oddNum2)
   }



}
halvesNum(4);


// Additional Question
//? Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
// Todo: First convert the hour to minutes and add them.
// Todo: convert the total minute to second.

const converter = (hours, minutes) =>{
    let total = (hours * 60 * 60) + (minutes * 60);

    return total;

}
console.log(converter(1,40));




//? Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.
//* wins get 3 points
//* draws get 1 point
//* losses get 0 points
//* e.g footballPoints(3, 4, 2) ➞ 13

const footballPoint =(wins, draws, losses)=>{
    return (wins * 3 + draws * 1 + losses * 0);
}
console.log(footballPoint(3, 4, 2));


//? There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

const remainder = (x, y)=>{
    return x % y;
}
console.log(remainder(4,5));


//? Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

const divisble = (num)=>{
    if(num % 100 === 0) return true;
    return false;
}

console.log(divisble(1000));



//?Your game needs a message for the player. Create gameMessage to return "Keep playing" when health is above 0. Otherwise, return "Game over".

const gameMessage = (health)=>{
    if(health > 0){
        return "Keep Playing";
    }
    return "Game Over";
}
console.log(gameMessage(10))


//? Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).
// Notes
// n will always be greater than 2.
// The formula (n - 2) x 180 gives the sum of all the measures of the angles of an n-sided polygon.
// e.g sumPolygon(3) ➞ 180
// sumPolygon(4) ➞ 360
// sumPolygon(6) ➞ 720

const sumPloygon = (n)=>{
    if(n<2) return 'Please enter an angle more than 2 side.';
    return (n-2) * 180;
}
console.log(sumPloygon(6));


//?  A spaceship will take three decades to build. Given the current population and the number of people born each month, return the population when the spaceship is complete.
// Examples
// futurePeople(256, 2) ➞ 976
// futurePeople(3248, 6) ➞ 5408
// futurePeople(5240, 3) ➞ 6320

const spaceship = (popullation, n)=>{
    return (n * 360) + popullation;
}
console.log(spaceship(256, 2));