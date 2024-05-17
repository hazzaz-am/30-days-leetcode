//! Problem 01: Fizz Buzz

/**
 * Solution 01:
 */

// const fizzBuzz = function (n) {
//   let answer = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       answer.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       answer.push("Fizz");
//     } else if (i % 5 === 0) {
//       answer.push("Buzz");
//     } else {
//       answer.push(String(i));
//     }
//   }
//   return answer;
// };

//! Problem 02: Two Sum

/**
 * Solution 02:
 */

// const twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

//! Problem 03: Valid Anagram

/**
 * Solution 03:
 */

// const isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;
//   let os = {};
//   let ot = {};
//   for (let val of s) {
//     os[val] = (os[val] || 0) + 1;
//   }
//   for (let val of t) {
//     ot[val] = (ot[val] || 0) + 1;
//   }
//   for (let key in os) {
//     if (os[key] !== ot[key]) {
//       return false;
//     }
//   }
//   return true;
// };

//! Problem 04: Reverse String

/**
 * Solution 04:
 */

// const reverseString = function (s) {
//   let i = 0;
//   let j = s.length - 1;
//   while (i < j) {
//     let temp = s[i];
//     s[i] = s[j];
//     s[j] = temp;
//     i++;
//     j--;
//   }
// };

//! Problem 05: Valid Palindrome

/**
 * Solution 05:
 */

// var isPalindrome = function (s) {
//   const str1 = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   const str = s.split("");
//   let i = 0;
//   let j = str.length - 1;
//   while (i < j) {
//     let temp = s[i];
//     str[i] = str[j];
//     str[j] = temp;
//     i++;
//     j--;
//   }

//   const str2 = str
//     .join("")
//     .replace(/[^a-zA-Z0-9]/g, "")
//     .toLowerCase();

//   if (str1 === str2) {
//     return true;
//   } else {
//     return false;
//   }
// };

//! Problem 06: Longest Common Prefix

/**
 * Solution 06:
 */

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[length - 1];

  let prefix = strs[0];
  // console.log("prefix-", prefix);

  for (let i = 1; i < strs.length; i++) {
    // console.log("strs[i]-", strs[i]);

    for (let j = 0; j < strs[i].length; j++) {
      // console.log("strs[i][j]-", strs[i][j]);
      if (strs[i][j] !== prefix[j]) {
        prefix = strs[i].slice(0, j);
      } else {
        continue;
      }
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
