'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 2. Largest Number'.
 *
 * Given an integer n, return the largest number that contains exactly n digits.
 *
 * @param {number} n
 * Integer.
 * Guaranteed constraints:
 * 1 ≤ n ≤ 9.
 *
 * @returns {number}
 * The largest integer of length n.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function largestNumber(n) {
  return Math.pow(10, n) - 1;
}

module.exports = largestNumber;
