let para = document.getElementById("first");
console.log(para.className);
para.className = "blue";
// console.log(para.attributes.name.value);


let para2 = document.getElementById("second");
console.log(para2);

let countries = document.getElementById("countries");
console.log(countries)
countries.classList.add('listItems');
console.log(countries.firstElementChild.outerHTML)

for(let i = 0; i < countries.children.length; i++){
    console.log(countries.children[i].innerHTML);
}

// Selecting elements using className().

let listItems  = document.getElementsByClassName('pink');
console.log(listItems)

let arr = [];
for(let i = 0; i < listItems.length; i++){
// console.log(listItems[i].outerHTML);
    arr.push(listItems[i]);
}

console.log(arr);
for(let i = 0; i < arr.length; i++){
    arr[i].className = "blue";
}

