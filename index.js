//🔥🔥🔥🔥🔥===========================(1)=====================================🔥🔥🔥🔥🔥//

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // Output: "olleh"

//🔥🔥🔥🔥🔥=============================(2)=====================================🔥🔥🔥🔥🔥//

function isPalindrome(str) {
  // Convert the string to lowercase and remove non-alphanumeric characters
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the cleaned string
  const reversedStr = cleanStr.split("").reverse().join("");

  // Compare the original cleaned string with the reversed one
  return cleanStr === reversedStr;
}

console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false

//🔥🔥🔥🔥🔥=============================(3)=====================================🔥🔥🔥🔥🔥//

function findLargestNumber(arr) {
  let largest = arr[0]; // Initialize with the first element

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(findLargestNumber([3, 5, 7, 2, 8])); // Output: 8

//🔥🔥🔥🔥🔥=============================(4)=====================================🔥🔥🔥🔥🔥//

function find2Largest(arr) {
  // Create a copy of the array and sort it in descending order
  let newArr = arr.slice().sort((a, b) => b - a);

  // Check if there are at least two distinct numbers
  let firstLargest = newArr[0];
  for (let i = 1; i < newArr.length; i++) {
    if (newArr[i] !== firstLargest) {
      return newArr[i];
    }
  }

  // If no second distinct largest number is found
  return null;
}

console.log(find2Largest([12, 35, 1, 10, 34, 1])); // Output: 34

//🔥🔥🔥🔥🔥=============================(5)=====================================🔥🔥🔥🔥🔥//
