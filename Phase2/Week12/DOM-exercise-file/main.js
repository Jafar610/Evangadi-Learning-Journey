//  your solutions start here
//  make sure to connect your main.js file with your html 
// happy coding 🧑‍💻

let q1 = document.getElementById('sample1');
console.log(q1);
console.log(q1.textContent);





//* Q2

let list = document.getElementById("techCompanies");
console.log(list);

let list2 = document.querySelector("#techCompanies");
console.log(list2);

// let list3 = document.querySelectorAll("#techCompanies");

// console.log(list3[0].children.length);

let list4 = document.querySelectorAll("#techCompanies li");
console.log(list4.length);



// for(let i = 0; i < list3[0].children.length; i++){
//     console.log(list3[0].children[i].textContent);
// }

//* Select all elements with a class name of "red" and display them on the console. Use both "querySelectorAll" and "getElementByClass"

// let redClass = document.querySelectorAll(".red");
// console.log(redClass);

// let redCl = document.getElementsByClassName("red");
// console.log(redCl);


// * Create a new li HTML element with a content of "Facebook" and display it on console.

let newLi = document.createElement("li");
newLi.textContent = "Facebook";




//* Give the newly created element a class of "blue" using JavaScript

newLi.className = "blue";
console.log(newLi);

//* Append the newly created element next to the the "Sony" li element
list.appendChild(newLi);
console.log(list);

//* How many of the tech companies are labeled blue? Find the result using JavaScript and display the result inside the "blueCompanies" div.

let blueCompanies = document.querySelectorAll(".blue");
console.log(blueCompanies.length);

let blueCmp = document.getElementById("blueCompanies");
for(let i = 0; i<blueCompanies.length; i++){
 let p = document.createElement("p");
 p.textContent = `${blueCompanies[i].textContent}`;
 blueCmp.appendChild(p);

}

 console.log(blueCmp);