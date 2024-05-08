//! Problem 01: Timeout Cancellation

/**
 * Solution 01:
 */

const cancellable = function (fn, args, t) {
  const timer = setTimeout(() => fn(...args), t);

  return function () {
    clearTimeout(timer);
  };
};

//! Problem 02: Interval Cancellation

/**
 * Solution: 02
 */

const cancellable = function (fn, args, t) {
  fn(...args);
  const interval = setInterval(() => fn(...args), t);
  return () => clearInterval(interval);
};

//! Problem 03: Add Two Promise

/**
 * Solution: 03
 */

async function addTwoPromises(promise1, promise2) {
  return Promise.all([promise1, promise2]).then((values) => {
    return values.reduce((a, b) => a + b);
  });
}

//! Problem 04: Sleep

/**
 * Solution: 04
 */

async function sleep(millis) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, millis);
  });
}

//! Problem 05: Promise Time Limit

/**
 * Solution: 05
 */

const timeLimit = function (fn, t) {
  return async function (...args) {
    const promises = [
      new Promise((resolve) => resolve(fn(...args))),
      new Promise((resolve, reject) =>
        setTimeout(() => reject("Time Limit Exceeded"), t)
      ),
    ];

    return Promise.race(promises);
  };
};

//! Problem 06: Is Object or Array Empty

/**
 * Solution: 06
 */

const isEmpty = function (obj) {
  if (Object.keys(obj).length > 0 || obj.length > 0) {
    return false;
  } else {
    return true;
  }
};
