//hwDay4
// 1. Write a loop that outputs

for (i = 10; i != 0; i--) {
console.log(i);
}
console.log("BLAST OFF!");

// 2. create a function that takes an array of numbers & return both min and max in that order. (use a loop)
const numbers = [21, 4, 6, 87, 2, 22, 33, 88];
// console.log(Math.min(...numbers));
// console.log(Math.max(...numbers));

function returnMinMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
//   console.log(min);
//   console.log(max);
  return [min, max];
}
console.log(returnMinMax(numbers));

//3. Converts a string to uppercase letters:
//let str = "WHAT a TIME to BE ALIVE!";
{
let str = "WHAT a TIME to BE ALIVE!";
console.log(str.toUpperCase())
}
