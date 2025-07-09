// Loops
/* 
In programming, loops are used to execute a block of code repeatedly until
a specific condition is met or for a specified number of times.
They provide a way to perform repetitive tasks efficiently without writing
the same code multiple times.
*/

/* 
Types of Loops
1. For Loop
2. While Loop
3. Do While Loop
 */

// For Loop Example

for (let i=1;i<=5;i++){
    console.log(`iteration  Let ${i}`);
}


for (var i=1;i<=5;i++){
    console.log(`iteration var ${i}`);
}

//Looping Backwards

for (i=5;i>0;i--){
    console.log(`reverse ${i}`);
}

//Nested Loop
for (let x=1;x<=2;x++){
    console.log(`Outer Loop ${x}`);
     for (let y=1;y<=3;y++){
        console.log(`inner loop ${y}`);
     }
}

// While Loop Example

let balance = 10;

while(balance > 0){
    console.log(`your balance is ${balance}`);
    balance--;
    }

while (balance < 50){
    balance =balance+10;
    console.log(`Your balance is ${balance}`);

}

// Do While Loop Example

let num=10;

do {
    console.log(`Number ${num}`);
    num++;


}while(num <=5){
    console.log(`whilenumber ${num}`);
}


for(i=0;i<=5;i++){
    if(i===3){
        continue;
    }
    console.log(`Iteration ${ i}`);
}

function greet(number){
    console.log(`hello gokul Number ${number}`);
}

for (i=1;i<=10;i++){
    greet(i);
}