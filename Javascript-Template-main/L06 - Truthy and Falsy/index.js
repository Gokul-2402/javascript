// Truthy and Falsy Values
console.log('Truthy and Falsy Values');

// Falsy Values:

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(''));

// Truthy Values:

console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean(" "));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function () {}));

let cash=80;
if (cash){
    if ( cash>= 100){
        console.log("you can buy burger");
    }else{
            console.log("you dont have enough money");
        }
    }
else{
    console.log("you dont have money");
}