/*
1. What is the difference between var, let, and const?
  var: function-scoped, can be re-declared and updated.
  let: block-scoped, can be updated but not re-declared.
  const: block-scoped, cannot be updated or re-declared.

2.What are primitive and reference data types?
  Primitive: string, number, boolean, null, undefined, symbol, bigint
  Reference: object, array, function

3. What is hoisting?
  JavaScript moves variable and function declarations to the top before execution.


4. What are truthy and falsy values?
  Falsy: false, 0, "", null, undefined, NaN
  Everything else is truthy.

5. What is the difference between == and ===?
  == compares value only (type coercion).
  === compares value and type.

6. What is a closure?
  A function that remembers its lexical scope even when the function is executed outside that scope.

7. What is the event loop?
  It handles async operations by using the call stack and task queue.

8. What is the difference between map(), filter(), forEach(), reduce()?
  map(): returns a new array after applying a function.
  filter(): returns elements that pass the condition.
  forEach(): just runs function for each element.
  reduce(): accumulates a single result from all elements.

9. What are promises?
  A Promise represents the result of an async operation:
  fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

10. Explain this keyword in JS.
  Refers to the object that owns the current function execution context.

11. Explain call(), apply(), and bind()
  call: calls a function with a given this
  apply: like call, but takes arguments as an array
  bind: returns a new function with a bound this

*/


// reverse a string
const reverse = (str) => {
    return str.split('').reverse().join("");
}
console.log(reverse("Tanha"));

// isPalindrome
const isPalindrome = (str) => {
    return str === str.split('').reverse().join("");
}
console.log(isPalindrome("121"));

// FizzBuzz from 1 to 20
for(let i = 0; i <= 20; i++){
    if(i%15 === 0){
        console.log("FizzBuzz");
    }else if(i%2 === 0){
        console.log("Fizz");
    }else if(i%5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

// find the max numbers
console.log(Math.max(...[4,2,2,0,7,3,9]));

// remove duplicates from array
const numbers = [1,2,2,3,5,1,5,7];
const removeDup = [...new Set(numbers)];
console.log(removeDup);

// flatten a nested array
const arr = [1,2,[5,6,[9]]];
//console.log(arr.toString())
console.log(arr.flat(Infinity));

// find a factorial 
const fact = (n) => {
    return n === 0 ? 1 : n * fact(n-1);
}
console.log(fact(5));

// check if an object is empty
const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
}
console.log(isEmpty({}));

// find the second largest number
const num = [2,3,1,2,8,9,0,4];
const unique = [...new Set(num)];
unique.sort((a,b) => b - a);
console.log(unique[1])

// count vowel in a string (regex)
const findVowels = (str) => {
    return str.match(/[aeiou]/gi)?.length || 0; // g- match all not only first || i- case-intensive
}
console.log(findVowels("rupoen"));

// count vowel without regex
const countVowels = (str) =>  {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("rupon")); // 2

