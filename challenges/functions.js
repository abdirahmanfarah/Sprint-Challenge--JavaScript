// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(a, b, cb){
  return cb(a, b);
}
// consume(25, 20, cb =>{
//   console.log(cb)
// });
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(a, b){
  return (a + b);
}
// add(2, 5, cb =>{
//   console.log(cb)
// });
function multiply(a, b){
  return (a * b)
};
// multiply( 2, 4, cb=>{
//   console.log(cb)
// })

function greeting (a, b){
  return (`Hello ${a} ${b}, nice to meet you!`)
}
// greeting("Abdi", "Farah", cb =>{
//   console.log(cb)
// });

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 
// Nested function can access the variable internal because it is nested within myFunction. Nested function can't access external, but it can access internal because
// it's a child of myFunction and whatever myFunction has, nestedFunction inherits. 

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();
