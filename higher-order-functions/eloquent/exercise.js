// Challenge 1. Flattening 
let arrays = [[1, 2, 3], [4, 5], [6]];
function flatten(arrays) {
  return arrays.reduce((accumelator,currentValue) => {
  return accumelator.concat(currentValue)
})
}

// Your code here.
// → [1, 2, 3, 4, 5, 6]

// Challenge 2. Your own loop
// Your code here.
function loop(n,condition,update,body) {
  for(let n = n; condition; update)
   var check = condition
    if ( check(n) === true) {
   var upda = update;
   var num = update(n); 
   body(num)
 } else return;
 }

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// Challenge 3. Everything
function every(array, test) {
  for(let i of array) {
  if(!test(i)) return false
 }
return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// Challenge 4. Dominant writing direction
function dominantDirection(text) {
  // Your code here.
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
