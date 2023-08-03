let countEl = document.getElementById("count-el");

let welcome = document.getElementById("welcome-el");

let saveEl= document.getElementById("save-el");
let name = " Ramandeep Singh";
let greeting = "Welcome Back!";

welcome.innerText = greeting + name;

welcome.innerText = welcome.innerText + "💋 😁";

console.log(welcome);

let count = -1;

function increment(){
     count = count + 1;
     countEl.innerText = count;
}

function save(){
      let countStr = count + " - ";
      saveEl.innerText += countStr;
      countEl.textContent = 0;
      count = 0;
      //console.log(saveEl);
      console.log(count);
}