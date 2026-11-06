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
   // 4/2 = 2=> keri 2.
   // 8/2 = 4 => keri 

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
halvesNum(5)