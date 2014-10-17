/*!
 * sort-numbers | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/sort-numbers.js
*/
'use strict';

function assertIsArray(maybeArr) {
  if (!Array.isArray(maybeArr)) {
    throw new TypeError(maybeArr + ' is not an array.');
  }
}

function assertIsNumber(maybeNumber) {
  if (typeof maybeNumber !== 'number' || maybeNumber !== maybeNumber) {
    throw new TypeError('All elements of the array should be number.');
  }
}

function isLargerThanNext(current, next) {
  assertIsNumber(current);
  return current - next;
}

function isSmallerThanNext(current, next) {
  assertIsNumber(current);
  return next - current;
}

function sortNumbers(arr) {
  assertIsArray(arr);
  if (arr.length === 0) {
    return [];
  }
  assertIsNumber(arr[arr.length - 1]);
  return arr.sort(isLargerThanNext);
}

sortNumbers.asc = sortNumbers;

sortNumbers.desc = function sortNumbersDesc(arr) {
  assertIsArray(arr);
  if (arr.length === 0) {
    return [];
  }
  assertIsNumber(arr[arr.length - 1]);
  return arr.sort(isSmallerThanNext);
};
module.exports = sortNumbers;
