// Adding a new property

let person = {
    name : "Gokul",
    age : 23,
    isemployed :true,
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isemployed);

person.city = "chennai";
console.log(person);



// Modifying an existing property

person.age =24;
console.log(person);

// Object with method
 let car = {
    brand : " Fiat",
    year : 2008,
    model : 'racing',
    displayinfo : function() {
        return `${this.brand} ${this.model} ${ this.year}`;
    },
 };

 let Bike = {
    brand : "Yamaha",
    model : "classic",
    year : 2025,
    disp : function(){
         return `${this.brand} ${this.model} ${this.year}`
    }

 };

 console.log(Bike.disp());

 console.log(car);
 console.log(car.displayinfo());

// Destructuring assignment

let student = {
    Name : "gokul",
    clas : 12,
    section: "D",
};

let {Name , clas ,section } = student;
console.log(Name);
console.log(clas);
console.log(section);

//Nested Complex Objects
 let restuarent = {
    name: "KFC",
    location : "Chennai",
    owner: {
        name : "Gokul",
        age : 23,
        contact : {
            mail : "Gokulronny@gmail.com",
            ph : 525452,

        },
},
     menu: [
        {dish : " Dosa", price : 50, spicy :true},
        {dish : " cofee", price : 30, spicy : false},
        {dish : " idly", price : 50, spicy  :false},    
     ]
 };

// Accessing properties of the nested objects

console.log(` Welcome to ${restuarent.name} especially this ${restuarent. location} Location`);
console.log(` owner name is ${restuarent.owner.name} and age is ${restuarent.owner.age}`);
console.log(` owners contact details are ${restuarent.owner.contact. mail} and phone no is ${restuarent.owner.contact. ph} `);

restuarent.menu.forEach((item) =>{
    console.log(`the list of items are ${item.dish} and price is ${item.price} and it is ${item.spicy ? 'spicy' : 'Not spicy'}`);
});

// Destructure owner object
let { name : ownerName, age : ownerage, contact : {email: ownerenail, ph : ownerPh}} = restuarent.owner


// Output details about the restaurant
console.log(` owner name is ${ownerName} and age is ${ownerage}`);
// Output the menu items using destructuring within forEach
restuarent.menu.forEach(({dish,price,spicy}) =>{
    console.log(`the list of items are ${dish} and price is ${price} and it is ${spicy ? 'spicy' : 'Not spicy'}`);
});