//Type Conversion (Manually)
/*Type conversion (also known as type casting) is when you explicitly convert a
value from one type to another. JavaScript provides several functions for this purpose.*/

// Type Conversion
console.log('Type Conversion');

// String to Number
let strnum = "123";
let numb =Number(strnum);
console.log((numb));
console.log(typeof(numb));
// Number to String

let num2 = 456;
let str2 = String(num2);
console.log(str2);
console.log(typeof(str2));

// Boolean to String

let bool = true;
let strbool =String(bool);
console.log(strbool);
console.log(typeof(strbool));

// String to Boolean
let booltru = "true"
let boolstr = "false";
let bool1= Boolean(boolstr);
let bool2= Boolean(boolstr);
console.log(bool1, typeof(bool1));
console.log(bool1, typeof(bool2));
// Parsing integers and floats

let floatstr = "123.45";
let intnum= parseInt(floatstr);
console.log(intnum);
let floatnum= parseFloat(floatstr);
console.log(floatnum);

//Type Coercion
/*Type coercion is when JavaScript automatically converts a
value from one type to another during an operation.
This often happens with equality checks and arithmetic operations. */

// Type Coercion (Automatically)
console.log('Type Coercion');

// String and Number

let result1 = "5" + 2;
console.log(result1);

let result2 = '5' - 2;
console.log(result2);

let result3= "5"* 2;
console.log(result3);



// Boolean and Number

let result4 = true + 1;
console.log(result4);

let result5= false + 1;
console.log(result5);

// Coercion occurs in equality checks (==), but not in strict equality checks (===).
// Equality checks

console.log(1 == '1');
console.log(1 === "1");
console.log( 0 == false);
console.log(0 === false);
console.log(1 === 1);
