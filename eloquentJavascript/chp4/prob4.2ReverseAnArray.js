/*
Problem 4.2: Reversing an array

Arrays have a method reverse, which changes the array by inverting the order in which its elements appear.
For this exercise, write two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a new array that has the same
elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does:
it modifies the array given as argument in order to reverse its elements.
Neither may use the standard reverse method.

console.log(reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → [5, 4, 3, 2, 1]

*/

function reverseArray(array) {
  var n = array.length;
  var result = [];

  for (var i = 0; i < n; i++)
    result[i] = array[n-i-1];

  return result;
}

function reverseArrayInPlace(array) {
  var n = array.length;

  for (var i = 0, j = n-1; i < j; i++, j--) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

console.log(reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → [5, 4, 3, 2, 1]