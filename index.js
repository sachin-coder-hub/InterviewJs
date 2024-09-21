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

const mergeSortedArraysUnique = (arr1, arr2) => {
  // Merge arrays, sort, and remove duplicates using a Set
  return [...new Set([...arr1, ...arr2].sort((a, b) => a - b))];
};

// Testing with sample inputs
console.log(mergeSortedArraysUnique([1, 3, 5, 7, 3], [2, 4, 6, 8, 8])); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

//🔥🔥🔥🔥🔥=============================(6)=====================================🔥🔥🔥🔥🔥//

function findCommon(arr1, arr2) {
  let commonArr = [];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        commonArr.push(arr1[i]);
      }
    }
  }
  return commonArr;
}

console.log(findCommon([1, 4, 5, 7, 3, 7, 9, 6, 1], [2, 4, 6, 8, 5, 1, 3]));

// Time Complexity: You're using two nested loops, so the time complexity is O(n * m), where n and m are the lengths of arr1 and arr2. This could be optimized.
// Duplicate Handling: Your code might return duplicate elements if an element appears multiple times in either array.

function findCommon(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);

  let commonArr = [...set1].filter((item) => set2.has(item));

  return commonArr;
}

console.log(findCommon([1, 4, 5, 7, 3, 7, 9, 6, 1], [2, 4, 6, 8, 5, 1, 3]));

//🔥🔥🔥🔥🔥=============================(7)=====================================🔥🔥🔥🔥🔥//

function flattenArray(arr) {
  let result = []; // Initialize an empty array to store the flattened elements

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      // Check if the element is an array
      // If the element is an array, recursively call flattenArray
      result = result.concat(flattenArray(element)); // Concatenate the flattened result
    } else {
      // If it's not an array, just add it to the result
      result.push(element);
    }
  });

  return result; // Return the fully flattened array
}

console.log(flattenArray([1, [2, [3, 4], 5], 6]));

//🔥🔥🔥🔥🔥=============================(8)=====================================🔥🔥🔥🔥🔥//

function findPairs(arr, target) {
  const pairs = [];
  const seen = new Set();

  for (const num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }
  return pairs;
}

console.log(findPairs([1, 2, 3, 4, 5], 5));

//🔥🔥🔥🔥🔥=============================(9)=====================================🔥🔥🔥🔥🔥//

function firstNonRepeatingChar(str) {
  const charCount = {}; // Object to store character frequencies

  // Step 1: Count frequency of each character
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Step 2: Find the first character with a count of 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char; // Return the first non-repeating character
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

console.log(firstNonRepeatingChar("swiss")); // Output: 'w'
console.log(firstNonRepeatingChar("aabbcc")); // Output: null

//🔥🔥🔥🔥🔥=============================(10)=====================================🔥🔥🔥🔥🔥//

function removeFalsy(arr) {
  let truthyValues = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      // Check if the value is truthy
      truthyValues.push(arr[i]); // Push only truthy values
    }
  }
  return truthyValues;
}

console.log(removeFalsy([0, 1, false, 2, "", 3])); // Output: [1, 2, 3]

//🔥🔥🔥🔥🔥=============================(11)=====================================🔥🔥🔥🔥🔥//

function removeDupes(arr) {
  let unique = [];
  for (const num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  return unique;
}

console.log(removeDupes([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

//🔥🔥🔥🔥🔥=============================(12)=====================================🔥🔥🔥🔥🔥//

function capitalizeWords(str) {
  let newStr = str.toLowerCase().split(" ");

  for (let i = 0; i < newStr.length; i++) {
    newStr[i] = newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1);
  }

  return newStr.join(" "); // Join the array back into a string
}

console.log(capitalizeWords("hello world")); // Output: "Hello World"

//🔥🔥🔥🔥🔥=============================(12)=====================================🔥🔥🔥🔥🔥//

function count(str) {
  const charObj = {};

  for (let char of str) {
    if (char !== " ") {
      if (charObj[char]) {
        charObj[char]++;
      } else {
        charObj[char] = 1;
      }
    }
  }
  return charObj;
}

console.log(count("hello world"));

//🔥🔥🔥🔥🔥=============================(13)=====================================🔥🔥🔥🔥🔥//

function reverse(str) {
  let newStr = str.split("");
  let reversed = "";

  for (let i = newStr.length - 1; i >= 0; i--) {
    reversed += newStr[i];
  }
  return reversed;
}

console.log(reverse("hello"));
