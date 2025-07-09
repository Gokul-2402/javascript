// Datatypes
// Javascript is Dynamic Typing
// Primitive and Object Type

//Primitive Data Types
//1.Number - Represents both integer and floating-point numbers.
let age= 24;
console.log(age);
console.log(typeof(age));

age= "24"
console.log(age);
console.log(typeof age);

let num = 23.22;
console.log(num);
console.log(typeof(num));


//2.String - Represents a sequence of characters.
let greet = " Good morning";
console.log(greet);
console.log(typeof(greet));
//3.Boolean - Represents a logical entity and can have two values: true or false.
let isactive = true;
console.log(isactive);

//4.Undefined - A variable that has been declared but not assigned a value.
let undef;
console.log(undef);
//5.Null - Represents the intentional absence of any object value.
 let box= null;
 console.log(box);

//6.Symbol - Represents a unique and immutable value, often used as object property keys.
let unique = Symbol("key");
console.log(unique);

//7.BigInt - Represents whole numbers larger than 2^53 - 1 (the largest number JavaScript can reliably represent with the Number type).
let largenum= 984614614684639845267456164n;
console.log(largenum);
let larnum = BigInt(79469694946947479477);
console.log(larnum);
//Non-Primitive Data Types
//1.Object
/*Represents a collection of properties, each consisting of a key (usually a string) 
and a value (which can be any data type, including another object).*/
let person = {
    Name :"Gokul", 
    age :24, 
    isemp :true,
};

let employee = {
    Name : "mad",
    age : 23,
    isemp : false,
};
console.log(person);
console.log(employee);
console.log(person.Name);
console.log(employee.Name);

let emp = {};
console.log(emp);
//2.Array
//A special type of object used for storing ordered collections of values.
let numbers = [1,2,3,4,5];
console.log(numbers);

let mix = [1,"Gokul",true, null];
console.log(mix);
//3.Function
//A special type of object that is callable and can perform an action.
function invite(){
    console.log("you are invited");
}

invite();
//4.Date - A built-in object for handling dates and times.
let now = new Date();
console.log(now);