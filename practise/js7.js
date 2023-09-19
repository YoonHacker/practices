console.log("This is JS tutorial");

function greet(name, greetText = "Greetings from JavaScript") {
    let name1 = "name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy ");
}

function sum(a, b, c) {
    let d = a + b + c;
    return d;
    // This line will never Work(Unrechable Code)
    // console.log("Function is returned");
}

let name = "Vivek";
let name1 = "Shubham";
let name2 = "Rohan";
let name3 = "Sagar";
let greetText = "Good Morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3);
// let returnVal = greet(name3);
// console.log(returnVal);
let returnVal = sum(1, 33, 2);
console.log(returnVal);
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
// console.log(name4 + " is a good boy");