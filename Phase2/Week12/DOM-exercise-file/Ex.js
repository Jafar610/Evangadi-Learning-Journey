let radioBtn = document.querySelectorAll("input[name = 'color']");

// console.log(radioBtn[1].id);

// #03c4a1
// #c300ff
// #FFEB3B
// #000
// #FFEB3B
// #000

const changeBg = () => {
  for (let i = 0; i < radioBtn.length; i++) {
    if (radioBtn[i].id.toString() === "blue") {
      document.body.style.backgroundColor = "#5ab5ff";
      console.log(radioBtn[i].id);
    }
    if (radioBtn[i].id === "green") {
      document.body.style.backgroundColor = "#03c4a1";
    }
    if (radioBtn[i].id === "purple") {
      document.body.style.backgroundColor = "#c300ff";
    }
    if (radioBtn[i].id === "orange") {
      document.body.style.backgroundColor = "#FFEB3B";
    }
    if (radioBtn[i].id === "black") {
      document.body.style.backgroundColor = "#0000";
    }
  }
};

radioBtn[0].addEventListener("click", changeBg);

let btn = document.querySelector("#btn");

btn.addEventListener("click", (e) => {
  let p = document.createElement("p");
  p.textContent = "hello world";
  document.body.appendChild(p);
  document.body.append(e.target);
});

let link = document.querySelector("a");

link.addEventListener("click", function (event) {
  console.log("clicked");
  event.preventDefault();
});

window.addEventListener("scroll", (event) => {
  console.log("Scrolling...");
});




const pwd = document.querySelector('input[type="password"]');
pwd.addEventListener("focus", (e) => {
  e.target.style.backgroundColor = "yellow";
});

pwd.addEventListener("blur", (e) => {
  e.target.style.backgroundColor = "";
});
