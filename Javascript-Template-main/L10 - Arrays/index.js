/*
An array is a data structure that can hold multiple values at once. 
These values can be of any type, including numbers, strings, objects, or even other arrays.
Arrays in JavaScript are zero-indexed, meaning the first element is at index 0.
*/

// Using square brackets
let fruits = ["Apple","Orange","banana","lichi"];
console.log(fruits);

// Accessing Array Elements:
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

// Change Value in Array
fruits[3]= "melon";
console.log(fruits);

/*
Using for loop to print array with hard-coded condition 
it will create issue if condition is like i < 5
*/
for (i=0;i<=3;i++){
    console.log(fruits[i]);
};


/* 
To avoid hard-coded condition switch to array methods


*/
// We can use array length
console.log(fruits.length);
for (i=0;i<fruits.length;i++){
    console.log(fruits[i]);
};

// More Array Methods

let box=["books","toys","pen"];
console.log(box);


/* 
Add element to array
Adds one or more elements to the end of an array 
and returns the new length of the array.
*/
box.push("diary");
console.log(box);


/*
Remove element from array
Removes the last element from an array and returns that element.
*/
box.pop();
console.log(box);
/*
Adds one or more elements to the beginning of an array and returns the new length of the array.
*/
box.unshift("map");
console.log(box);
/*
Removes the first element from an array and returns that element.
*/

box.shift();
console.log(box);



// Anonymous Functions
box.forEach(function(x,Index) {
    console.log(x,Index);
});

// Combining Arrays

let arr1 = [1,2,3];
let arr2= [4,5,6];
console.log(arr1,arr2);

let arr = arr1.concat(arr2);
console.log(arr);

// Finding an Element Index, If not found it will return -1

let index= arr.indexOf(5);
console.log(index);



// Array with mixed data types

let mixeddata = [1, 3.4, "home",true,'d'];

let result = mixeddata.includes("ome");
console.log(result);



// Array of Employee Objects

let employees = [
    { id: 1, Name: "Gokul",age: 24},
    { id: 2, Name: "Mad",age: 22},
    { id: 3, Name: "sankar",age: 24},

];

console.log(employees);



employees.forEach((Gokul) => {
    console.log(`Employee Id ${Gokul.id}`)
    console.log(`Employee Id ${Gokul.Name}`)
    console.log(`Employee Id ${Gokul.age}`)
});

//Fliters

/*let employee = employees.find((x) => x.id === 2);
console.log(employee);

let empl1 = employees.find((y) => y.id === 3);
console.log(empl1); */

let x= employees.filter((x) => x.age > 20);
console.log(x);



// Map

let z = employees.map((employee) => {
    console.log(`Name ${ employee.Name}, DOB ${new Date().getFullYear() - employee.age}`
        
        
);
});

let c = employees.map((employee) => {
    console.log(`Name : ${ employee.Name} , DOB : ${ new Date().getFullYear() - employee.age}`);
});


