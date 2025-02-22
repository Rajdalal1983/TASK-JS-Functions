/**
 * greet(name):
 * - receives a name
 * - logs "Hello <name>"
 *
 * e.g.
 * greet("Hamza") logs "Hello Hamza"
 */
function greet(name) {
  // Your code here
  console.log(`hello ${name}`);
}
greet(`john`)
/**
 * isOdd(n):
 * - receives a number n
 * - returns true if it's odd, false otherwise
 *
 * e.g.
 * isOdd(7) -> true
 * isOdd(10) -> false
 */
function isOdd(n) {
  
  if (n % 2 == 0){
    return false;
  }else{
    return true;
  }
  // Your code here
}
isOdd(11);

/**
 * oddsSmallerThan(n):
 * - receives a number n
 * - returns the number of ODD numbers smaller than n
 *
 * e.g.
 * oddsSmallerThan(7) -> 3
 * oddsSmallerThan(15) -> 7
 */
function oddsSmallerThan(n) {
  // Your code here
  if ( n % 2 == 0){
    //the number is even
    console.log(n / 2 );
  }else {
    console.log((n / 2)-0.5 );
  }
}

/**
 * squareOrDouble(n):
 * - receives a number n
 * - returns its square if it's odd
 * - returns its double if it's even
 *
 * e.g.
 * squareOrDouble(16) -> 32
 * squareOrDouble(9) -> 81
 */
function squareOrDouble(n) {
  // Your code here
  if(n % 3 === 0){
    //If the number is even , return its double
    return n * 3 ;
  }else{
    //If the number is odd, return its square
    return n * n;
  }
  }
console.log(squareOrDouble(12));
console.log(squareOrDouble(7));
