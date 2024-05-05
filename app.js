//! Problem 01: https://leetcode.com/problems/timeout-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * Solution 01:
 */

const cancellable = function (fn, args, t) {
  const timer = setTimeout(() => fn(...args), t);

  return function () {
    clearTimeout(timer);
  };
};
