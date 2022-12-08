// // https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// let myVariable = "bob";
// myVariable = "steve";

// // comment

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("Yay, I love chocolate ice cream!");
// } else {
//   alert("Awwww, but chocolate is my favorite…");
// }

// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
//   }

// document.querySelector("html").addEventListener("click", function () {
//   alert("Ouch! Stop poking me!");
// });  
// //or
// document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!");
// });

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/gengar.png") {
    myImage.setAttribute("src", "images/bonk-rat.png");
  } else {
    myImage.setAttribute("src", "images/gengar.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };
