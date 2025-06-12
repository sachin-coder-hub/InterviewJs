==================================================(1)==========================================================
Write a function to reverse a string in JavaScript.

Example:

Input: "hello"
Output: "olleh"

==================================================(2)==========================================================

Write a function to check if a string is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward (ignoring spaces, punctuation, and capitalization).

Example:

Input: "madam"

Output: true

Input: "hello"

Output: false

==================================================(3)==========================================================

Write a function to find the largest number in an array of numbers.

Example:

Input: [3, 5, 7, 2, 8]
Output: 8

==================================================(4)==========================================================

Write a function to find the second largest number in an array.

Example:

Input: [12, 35, 1, 10, 34, 1]
Output: 34

==================================================(5)===========================================================

Write a function to merge two sorted arrays into one sorted array.

Example:

Input: [1, 3, 5, 7] and [2, 4, 6, 8]
Output: [1, 2, 3, 4, 5, 6, 7, 8]

==================================================(6)===========================================================

Write a function to find the common elements in two arrays.

Example:

Input: [1, 2, 3, 4, 5] and [4, 5, 6, 7, 8]
Output: [4, 5]

==================================================(7)===========================================================

Write a function to flatten a nested array.

Example:

Input: [1, [2, [3, 4], 5], 6]
Output: [1, 2, 3, 4, 5, 6]

==================================================(8)===========================================================

Write a function to find all pairs in an array that sum up to a specific target value.

Example:

Input: ([1, 2, 3, 4, 5], 5)
Output: [[1, 4], [2, 3]]

======================================================(9)=========================================================================

Write a function to find the first non-repeating character in a string. If there is no such character, return null.

Example:

Input: "swiss"
Output: 'w'
Input: "aabbcc"
Output: null

====================================================(10)==========================================================================

Write a function to remove all falsy values from an array. Falsy values in JavaScript include false, null, 0, "", undefined,
and NaN.

Example:
Input: [0, 1, false, 2, "", 3]
Output: [1, 2, 3]

======================================================(11)========================================================================

Write a function to remove duplicates from an array without using Set.

Example:
Input: [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]

======================================================(12)========================================================================

Write a function to capitalize the first letter of every word in a given string.

Example:
Input: "hello world"
Output: "Hello World"

======================================================(12)========================================================================

Write a function to count the occurrences of each character in a string.

Example:
Input: "hello"
Output: { h: 1, e: 1, l: 2, o: 1 }

======================================================(13)========================================================================

Write a function to reverse a string without using built-in methods like reverse().

Example:
Input: "hello"
Output: "olleh"

======================================================(14)========================================================================

Write a function that checks if two strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of a different word or phrase.

Input: "listen", "silent"
Output: true

Input: "hello", "world"
Output: false

======================================================(15)========================================================================

Find Missing Number in Array

You are given an array containing n - 1 integers where the integers are in the range from 1 to n. There are no duplicates in the list. One integer is missing from the range. Write a function to find the missing number.

findMissing([3, 7, 1, 2, 8, 4, 5]); // Output: 6
findMissing([1, 2, 4, 6, 3, 7, 8]); // Output: 5

======================================================(16)========================================================================

Write a function that takes an array of numbers and moves all the zeros to the end of the array, maintaining the relative order of the other elements.

Example:

js
Copy code
Input: [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]

======================================================(17)========================================================================
Rotate Array
Problem Statement: Given an array nums and a number k, rotate the array to the right by k steps, where k is non-negative.

Example:
Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
Output: [5, 6, 7, 1, 2, 3, 4]

======================================================(18)========================================================================
Promise Chaining (Easy)
Question: Write a function that returns a promise that resolves after a specified time.

======================================================(19)========================================================================

Handling Promises (Medium)
Question: Create a function that accepts an array of URLs and fetches data from each URL. Use Promise.all() to wait for all requests to complete and return the data.

======================================================(20)========================================================================

Async/Await with Error Handling (Medium)
Question: Implement an asynchronous function that fetches user data from an API and handles any potential errors using try/catch.

======================================================(21)========================================================================

Create a function once(fn) that ensures the given function fn can only be called once. Subsequent calls should return the result of the first call.

======================================================(22)========================================================================

Write a function memoize(fn) that returns a memoized version of fn.
If the memoized function is called with the same arguments again, it should return the cached result instead of computing it again.

======================================================(23)========================================================================

Implement a function groupBy that groups the elements of an array based on a provided key function.

======================================================(24)========================================================================

Write a function maxOccurringChar(str) that returns the character which appears maximum number of times in the string. If multiple characters have the same max frequency, return the first one that appears.

======================================================(25)========================================================================

Longest Substring Without Repeating Characters
Write a function longestUniqueSubstring(str) that returns the length of the longest substring with all unique characters.