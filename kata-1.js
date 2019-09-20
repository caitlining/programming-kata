/* given an array of 2 or more numbers,
find the two largest numbers in that array,
sum those two numbers together,
return that sum
*/

const sumLargestNumbers = function(arr) {
  arr = arr.sort((a, b) => (b - a));
  return arr[0] + arr[1];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbers([1, 2, 3, 4, 4]));


const sumLargestNumbersNoSort = function(arr) {
  let firstLargestElement = arr[0];
  let secondLargestElement = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargestElement) {
      firstLargestElement = arr[i];
    }
  } arr.splice(arr.indexOf(firstLargestElement),1);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargestElement) {
      secondLargestElement = arr[i];
    }
  }
  arr.splice(arr.indexOf(secondLargestElement),1);
  return firstLargestElement + secondLargestElement;
};


console.log(sumLargestNumbersNoSort([1, 10]));
console.log(sumLargestNumbersNoSort([1, 2, 3]));
console.log(sumLargestNumbersNoSort([10, 4, 34, 6, 92, 2]));
console.log(sumLargestNumbersNoSort([1, 2, 3, 4, 4]));