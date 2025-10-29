import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

//my code from here
let who = ['My mom', 'My father', 'My boyfriend', 'My teacher'];
let action = ['broke', 'forgot', 'lost', 'threw away']; 
let what = ['my keys', 'my food', 'my homework'];
let when = ['last week', 'while I was playing', 'during my lunch', 'when I was sleeping'];
let feeling = ['and I am sad', 'and I am happy', 'and I am angry', 'and I am relieved'];

const randomNumber = arr => {
  return Math.floor(Math.random() * arr.length)
}

console.log(randomNumber(who))
console.log(randomNumber(action))
console.log(randomNumber(what))
console.log(randomNumber(when))
console.log(randomNumber(feeling))