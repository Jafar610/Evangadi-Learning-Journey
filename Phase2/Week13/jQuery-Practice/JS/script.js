//* Q1

let div = $("#sample1");
console.log(div[0]);

//* Print the content of the element on the console upon page refresh. Use jQuery to select the content of the element.

console.log(div[0].innerText);

//* Q2

// todo:  2.1. Select the element with an ID of "techCompanies" and display it on your console.

let ul = $("#techCompanies");
console.log(ul);

// todo:  2.2. How many tech companies are listed under the ul element with an id of "techCompanies"?
let li = $("#techCompanies li");
console.log(li.length);

// todo: 2.3. Select all elements with a class of "red" and display them on the console.
let redClass = $(".red");
console.log(redClass);

// todo: 2.4. Create a new li HTML element with a content of "Facebook" and display it on console

let newLi = $("<li>Facebook</li>");
console.log(newLi[0]);

// todo: 2.5. Give the newly created element a class of "blue" using jQuery

newLi.addClass("blue");

// todo: 2.6. Append the newly created element next to the the "Sony" <li> element.
ul.append(newLi);
console.log(ul[0]);

// todo: How many of the tech companies are labeled blue? Find the result using jQuery and display the result inside the "blueCompanies" div.

let blueClass = $("#techCompanies .blue");
console.log(blueClass.length);

for (let i = 0; i < blueClass.length; i++) {
  $("#blueCompanies").append(`<p>${blueClass[i].innerText}</p>`);
}

//* Q3
// A form with two text fields is provided under the section which says "For question 3". Write a jQuery code which takes the values of the two fields, checks if they are number values and calculate the sum and average of the two numbers.

$("form").submit((e) => {
  e.preventDefault();
  let value1 = $("#in1").val().trim();
  let value2 = $("#in2").val().trim();

  const num1 = Number(value1);
  const num2 = Number(value2);

  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    console.log("Please enter a valid number.");
  } else {
    let avg = (num1 + num2)/2;
    $("#davg").text(`${avg}`);
    $("#dsum").text(`${num1 + num2}`);
    
    // console.log(num1 + num2);

  }
});

//* Q4


