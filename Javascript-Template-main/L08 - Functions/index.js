// Functions
'use strict'
dispmsg();
// Functions are pieces of code that we can reuse again and again in our code

// Function Declaration - JavaScript Hoisting
/* A function declaration defines a named function.It's hoisted,
 meaning you can call it before it's defined. */
function dispmsg(){
    console.log("I am cristiano ronaldo");
}
// Calling the function


// Function Parameters and Arguments
/*Functions can take parameters, which act as placeholders for the values 
that will be passed to the function.The passing value is called an argument.*/
 function greet(userName, country){
    console.log("Hello " + userName +" Are you from which country " + country );
 }
 greet("Gokul", "India");
// Default Parameter
 function printer ( color = "black"){
    console.log("print book in " + color);
 }

 printer("blue")
 printer();
// Function with Return Type

function add (a,b){
    return a+b;

}

let sum = add(10,20);
console.log(sum);

///////////////////////////////////////////////////////////////////////

// Function Expression
/* A function expression defines a function inside an expression.
It's not hoisted, so you can't call it before it's defined.*/
 const morning = function(){
    console.log("Good Morning everyone!");
 }
 morning();

// With Argument
const morningwithname = function(name){
    console.log(`Good Morning ${name}`);
}
 morningwithname("Gokul");

 const multiply = function(c,d){

    return c*d;
 }
console.log(multiply(9,9));
 
// Function Expression with Return Type

///////////////////////////////////////////////////////////////////////

// Arrow Function
// Arrow functions provide a concise syntax and do not bind their own 'this'. They are not hoisted.
const evening = ()=>{
console.log("Goood evening everyone");
}
evening();
// With Argument
const withname =(name)=>{
    console.log(`Good evening ${ name}`);


};
withname("Gokul");

// Arrow Function with Return Type

const subract=(a,b) =>{
    return a - b;

};

console.log(subract(5,2));

// Shorter Way

const addition =(a,b) => a+b;
console.log( addition(2,2));

//Function Calling Other Function

function welcomeshopper(name){
    console.log(`Welcome ${name} to the shop`);

};
function main(name){
    let shopkeep = name;
    welcomeshopper(name);
}

 main("gayathri");
 main("Madhu");
//Anonymous Functions: Later on Course on Arrays

//setTimeout(() => {
  //  console.log("Anonymous function executed");
//})

/**
Scope of variables will on functions and loops
var: Function scoped.
let: Block scoped.
const: Block scoped.
 */

function demo(){
if (true){
let a= "let";
var b = "var";
const c = "const";

console.log(a);
console.log(b);
console.log(c);
}
console.log(b);

}
demo();