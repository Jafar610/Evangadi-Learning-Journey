let para = document.getElementById("first");
para.textContent = "Hello There";
// console.log(para.attributes.name.value);
console.log(para.baseURI)

if(para.attributes.name.value === 'Jafar'){
    console.log("Jafar is there.");
}


let para2 = document.getElementById("second");
console.log(para2);

let countries = document.getElementById("countries");
console.log(countries)
countries.classList.add('listItems');
console.log(countries.firstElementChild.outerHTML)

for(let i = 0; i < countries.children.length; i++){
    console.log(countries.children[i].innerHTML);
}