//! Problem 01: Timeout Cancellation

/**
 * Solution 01:
 */

// const cancellable = function (fn, args, t) {
//   const timer = setTimeout(() => fn(...args), t);

//   return function () {
//     clearTimeout(timer);
//   };
// };

//! Problem 02: Interval Cancellation

/**
 * Solution: 02
 */

const cancellable = function (fn, args, t) {
  fn(...args);
  const interval = setInterval(() => fn(...args), t);
  return () => clearInterval(interval);
};

