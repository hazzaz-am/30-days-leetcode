//! Problem 01: Fizz Buzz

/**
 * Solution 01:
 */

const fizzBuzz = function (n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push("FizzBuzz");
    } else if (i % 3 === 0) {
      answer.push("Fizz");
    } else if (i % 5 === 0) {
      answer.push("Buzz");
    } else {
      answer.push(String(i));
    }
  }
  return answer;
};

//! Problem 02: Two Sum

/**
 * Solution 02:
 */

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

//! Problem 03: Valid Anagram

/**
 * Solution 03:
 */

const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let os = {};
  let ot = {};
  for (let val of s) {
    os[val] = (os[val] || 0) + 1;
  }
  for (let val of t) {
    ot[val] = (ot[val] || 0) + 1;
  }
  for (let key in os) {
    if (os[key] !== ot[key]) {
      return false;
    }
  }
  return true;
};



