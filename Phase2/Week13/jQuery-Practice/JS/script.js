//* Q1

let div = $("#sample1");
console.log(div[0]);

//* Print the content of the element on the console upon page refresh. Use jQuery to select the content of the element.

console.log(div[0].innerText)

//* Q2

// todo:  2.1. Select the element with an ID of "techCompanies" and display it on your console.

let ul = $('#techCompanies');
console.log(ul);

// todo:  2.2. How many tech companies are listed under the ul element with an id of "techCompanies"?
let li = $('#techCompanies li');
console.log(li.length)

// todo: 2.3. Select all elements with a class of "red" and display them on the console.
let redClass = $('.red')
console.log(redClass)