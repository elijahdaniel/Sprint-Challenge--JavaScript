// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */

const consume = (first, second, last) => {
  return last(first, second);
};

const lastParam = (a, b) => {
  return `${a} ${b}`;
};
console.log(consume("Hello", ":)", lastParam)); // Hello :)

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

const add = (a, b) => {
  return a + b;
};
console.log(consume(10, 5, add)); //15

const multiply = (a, b) => {
  return a * b;
};
console.log(consume(10, 5, multiply)); //50

const greeting = (a, b) => {
  return `Hello ${a} ${b}, nice to meet you!`;
};
console.log(consume("Jon", "Doe", greeting)); //1

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:

// nestedfunction() can access the variable `internal` because the constant was created within the scope of the parent function

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
