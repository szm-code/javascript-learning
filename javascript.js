// 99 BOTTLES INTERVIEW QUESTION
var num = 99;

while (num >=1) {
   if (num === 1){
      console.log(num+" bottle of juice on the wall! "+num+" bottle of juice! Take one down, pass it around... "+(num-1)+" bottles of juice on the wall!");
   }else if (num === 2){
        console.log(num+" bottles of juice on the wall! "+num+" bottles of juice! Take one down, pass it around... "+(num-1)+" bottle of juice on the wall!");
   }else{
        console.log(num+" bottles of juice on the wall! "+num+" bottles of juice! Take one down, pass it around... "+(num-1)+" bottle of juice on the wall!");
   }
num = num - 1;
}

// FIZZ BUZZ INTERVIEW QUESTION
var x = 1;

while (x <= 20) {
    if(x % 3 === 0 && x % 5 === 0){
    console.log("JuliaJames");
    
    }else if (x % 3 === 0){
     console.log("Julia");
    
    } else if(x % 5 === 0){
    console.log("James");
    
    }else {
        console.log(x);
       }
    x = x + 1;
    }
   //  NASA Countdown Interview Question
var x = 60

while( x <= 60 && x >= 0){
    if( x === 50){
        console.log("Orbiter transfers from ground to internal power");
    }else if( x === 31){
        console.log("Ground launch sequencer is go for auto sequence start");
    }else if( x === 16){
        console.log("Activate launch pad sound suppression system");
    }else if( x === 10){
        console.log("Activate main engine hydrogen burnoff system");
    }else if( x === 6){
        console.log("Main engine start");
    }else if( x === 0){
        console.log("Solid rocket booster ignition and liftoff!");
    }else{
        console.log("T-"+(x)+" seconds");
    }
    x=x-1;
}

// while and for comparisons
// while
var x = 9
while (x >= 1){
   console.log("hello " + x);
   x=x-1;
}

// for
for( var x=9; x>=1;x=x-1){
   console.log("hello " + x)
}


// NESTED LOOP
for(var x=0; x<26; x++){
    for( var y =0; y<100; y++){
    console.log(x +"-"+ y);
    }
}

// THREE SCOPE TYPES
// Global scope - When a particular variable is visible (can be used) anywhere in the code. Such a variable is generally called as Global variable.
// Function scope - When a particular variable is visible (can be used) within a particular function only. Such a variable is generally called as Local variable.
// Block scope - When a particular variable is visible (can be used) within a pair of { . . . } only.
/*
 * Global scope. 
 * This variable declared outside of any function is called Global variable. 
 * Hence, you can use this anywhere in the code
 */
var opinion = "This nanodegree is amazing";

// Function scope
function showMessage() {
    // Local variable, visible within the function `showMessage`
    var message = "I am an Udacian!"; 

    // Block scope
    {
          let greet = "How are you doing?";
        /*
         * We have used the keyword `let` to declare a variable `greet` because variables declared with the `var` keyword can not have Block Scope. 
         */
    } // block scope ends

    console.log( message ); // OK
    console.log( greet ); // ERROR. 
    // Variable greet can NOT be used outside the block

    console.log( opinion ); // OK    to use the gobal variable anywhere in the code

} // function scope ends


