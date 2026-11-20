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

radioBtn[0].addEventListener('click', changeBg);