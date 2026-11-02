//? Question 1 Given an array of numbers, write a function that prints in the console another array
// ? which contains all the even numbers in the original array, which also have even indexes only.
// TODO : ○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
// TODO : ○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]


// crafting steps for problem 1
// * checking the number weather its even or odd.
// * count only the even number
// * store the counted number.

// PseudoCode1
// * create a function called getOnlyEvens that take an argument.
// * use for loop to itarate the array
// * Create if statement to check the number even or odd.
// * if number % 2 === 0 then even
// * count the even number only.
// * return the value.



//JS code.
const getOnlyEvens = (number) => {
    if(!Array.isArray(number)) console.log('Please enter array number.');
    let sum = 0, newArr = [];
    for(i = 0; i<number.length; i++){
        if(number[i] % 2 === 0){
            sum+=1;
            newArr.push(i);
        }
    }
    console.log(sum)
    console.log(newArr)
}
getOnlyEvens([1, 2, 3, 6, 4, 8]);
// getOnlyEvens([0, 1, 2, 3, 4])