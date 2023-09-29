"use strict";

// Arrow Function
// let greet = () => {
//     console.log('Good Morning');
// }
var greet = function greet() {
  return console.log('Good Morning');
}; // function greet1() {
//     console.log("Good Evening");
// }
// let sum = (a, b) => {
// return a + b; // return is used to give the value of expression in it's argument
// }
// these are some shortcut


var sum = function sum(a, b) {
  return a + b;
};

var half = function half(a) {
  return a / 2;
};

greet();
setTimeout(function () {
  console.log("We are inside settimeout");
}, 3000); // let obj1 = {
//     greeting: "Good Morning",
//     names: ["Vivek", "Souvick", "Shaswat"],
//     speak() {
//         this.names.forEach((student) => {
//             console.log(this.greeting + " Kukdoo Koo " + student);
//         });
//     }
// }
// obj1.speak();

var obj1 = {
  greeting: "Good Morning",
  names: ["Vivek", "Souvick", "Shaswat"],
  speak: function speak() {
    this.names.forEach(function s(student) {
      console.log(this.greeting + " Kukdoo Koo " + student);
    });
  }
};
obj1.speak();