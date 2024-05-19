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

//! Problem 07: Chunk Array

/**
 * Solution: 07
 */

var chunk = function (arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
};

//! Problem 08: Cache With Time Limit

/**
 * Solution: 08
 */

class TimeLimitedCache {
  constructor() {
    this.cache = new Map();
  }

  set(key, value, duration) {
    const expiredKeys = this.cache.get(key);
    if (expiredKeys) {
      clearTimeout(expiredKeys.timerId);
    }

    const timerId = setTimeout(() => {
      this.cache.delete(key);
    }, duration);

    this.cache.set(key, { value, timerId });
    return Boolean(expiredKeys);
  }

  get(key) {
    if (this.cache.has(key)) {
      return this.cache.get(key).value;
    }
    return -1;
  }

  count() {
    return this.cache.size;
  }
}

//! Problem 09: Debounce

/**
 * Solution: 09
 */

const debounce = function (fn, t) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), t);
  };
};

//! Problem 10: Execute Asynchronous Functions in Parallel

/**
 * Solution: 10
 */

const promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    let results = [];
    if (functions.length === 0) {
      resolve(results);
      return;
    }
    let pending = functions.length;
    functions.forEach((promise, idx) => {
      Promise.resolve(promise())
        .then((res) => {
          results[idx] = res;
          pending--;

          if (pending === 0) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
};

//! Problem 11: Array Prototype Last

/**
 * Solution: 11
 */

Array.prototype.last = function () {
  let length = this.length;
  if (length === 0) {
    return -1;
  } else {
    return this[length - 1];
  }
};

//! Problem 13: Group By

/**
 * Solution: 13
 */

Array.prototype.groupBy = function (fn) {
  let obj = {};

  for (let i = 0; i < this.length; i++) {
    let key = fn(this[i]);
    if (obj.hasOwnProperty(key)) {
      obj[key].push(this[i]);
    } else {
      obj[key] = [this[i]];
    }
  }

  return obj;
};

//! Problem 14: Sort By

/**
 * Solution: 14
 */

var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};
