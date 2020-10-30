'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 1. Add Two Digits'.
 *
 * You are given a two-digit integer n. Return the sum of its digits.
 *
 * @param {number} n
 * A positive two-digit integer.
 * Guaranteed constraints:
 * 10 ≤ n ≤ 99.
 *
 * @returns {number}
 * Integer. The sum of the first and second digits of the input number.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */
// prettier-ignore
function addTwoDigits(n) {
  return n.toString().split('').map(Number).reduce((a, b) => a + b);
}

module.exports = addTwoDigits;
