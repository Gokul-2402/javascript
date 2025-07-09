// Decision Making: if, if...else, else if
console.log('Decision Making');

// Example 1: if statement
let temp = 25;
if ( temp > 25);{
    console.log("very hot");
}



// Example 2: if...else statement

if ( temp >= 30){
    console.log("very hot");
}else{
    console.log("it is cold outside");

}

let israin = false;
if (israin){
    console.log("take a umberlla ");

}else{
    console.log("dont take umberlla");
}


// Example 3: else if statement

let time = 19;
if (time < 12){
    console.log("Good morning");
}else if (time < 18){
    console.log("Good afternoon");
}else {
    console.log("Good evening");
}

// Example 4: Nested if statements
// Variables

let age= 21;
let parent = false;
let id = true;
if (age >= 18){
    if (id){
        console.log("you can visit the mall not  to watch movie");
    }else{
        console.log("you can visit the mall");
    }
}else{
    if ( parent){
        console.log("You can visit the play area");

    }else{
        console.log("you are not allowed in play area");
    }
}

// Decision logic

// Switch Statement

let day= 20;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("holiday");
        break;
}

//Ternary Operator

let isadmin = false;
let userrole = isadmin ? "admin" : "user";
console.log(userrole);
