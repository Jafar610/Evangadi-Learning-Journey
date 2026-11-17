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

//* Selecting elements using className().

let listItems  = document.getElementsByClassName('pink');
console.log(listItems)

let arr = [];
for(let i = 0; i < listItems.length; i++){
// console.log(listItems[i].outerHTML);
    arr.push(listItems[i]);
}

console.log(arr);
// for(let i = 0; i < arr.length; i++){
//     arr[i].className = "blue";
// }



//* selecting getElementByName()

let input = document.getElementsByName("fname");
console.log(input[0].attributes[2].textContent);


//* getElementByTagName().

let tagname = document.getElementsByTagName("li");
console.log(tagname);

let newEl = document.createElement("p");
newEl.id = "added";
newEl.className = "hello"
newEl.innerHTML = "Hello this is new created element."
document.body.append(newEl);
console.log(newEl);


let li = document.createElement("li");
li.textContent = "Sudan";
li.className = "black";
let ul = document.getElementById("countries");
ul.appendChild(li);


function loadJs(url){
    let script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
    console.log(script);
}
// loadJs("./script.js");


//* appendChild 
const creatingLists = (name)=>{
    let std = document.createElement("li");
    std.textContent = name;

    document.getElementById("students").appendChild(std);

    
console.log(std.innerHTML);
}

creatingLists("Jafar");
creatingLists("Kedi");
creatingLists("Mohamed");
creatingLists("Ahmed");


let foodList = document.getElementById("food");
foodList.innerHTML = `
<li>Pizza</li>
<li>Burger</li>
<li>Dorowet</li>
<li>Shiro</li>
`

for(let i = 0; i < 5; i++){
    let div = document.createElement("div");
    div.innerHTML = `<p>Paragraph ${i}</p>`;
    document.body.appendChild(div);
}