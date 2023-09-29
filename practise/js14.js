// Arrow Function

// let greet = () => {
//     console.log('Good Morning');
// }
let greet = () => console.log('Good Morning');

// function greet1() {
//     console.log("Good Evening");
// }

// let sum = (a, b) => {
// return a + b; // return is used to give the value of expression in it's argument
// }
// these are some shortcut
let sum = (a, b) => a + b;
let half = a => a / 2;

greet();

setTimeout(() => {
    console.log("We are inside settimeout")
}, 3000);

// let obj1 = {
//     greeting: "Good Morning",
//     names: ["Vivek", "Souvick", "Shaswat"],
//     speak() {
//         this.names.forEach((student) => {
//             console.log(this.greeting + " Kukdoo Koo " + student);
//         });
//     }
// }
// obj1.speak();
let obj1 = {
    greeting: "Good Morning",
    names: ["Vivek", "Souvick", "Shaswat"],
    speak() {
        this.names.forEach(function s(student) {
            console.log(this.greeting + " Kukdoo Koo " + student);
        });
    }
}
obj1.speak();