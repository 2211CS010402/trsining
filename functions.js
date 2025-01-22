//! without parameters and arguments
// function demo(){
//     console.log("Hello i am prudhvi");

// }
// demo();

//! with parameters and arguments

// function add1(a, b){
//     console.log(a+b);

// }
// add1(5, 9);


// function isPalindrome(str)
// {
//     let revStr = "";
//     for(let i = str.length-1; i>=0; i--){
//         revStr += str[i];
//     }
//     if(str == revStr){
//         console.log("palindrome");

//     }
//     else{
//         console.log("Not a palindrome");
//     }
// }
// isPalindrome("sir");
// isPalindrome("madam");
// isPalindrome("malayalam");

//IIFE
// (
//     function(){
//         console.log("Hello!");

//     }
// )();



// arrow function
// let x = _=>console.log("Hello!"); // to reduce execution time
// x();

//............. or.............

// let x = ()=>console.log("Hello!");
// x();

// let x = _=>{console.log("Hello!");
//             console.log("how");
//             console.log("are");
//             console.log("you");}

// x();



// Implict and explicit return

function add(a, b){
    console.log("printing...");// explicit
    return add;

}
add(5,5);