'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 12. Is Infinite Process?'.
 *
 * Given integers a and b, determine whether the following pseudocode results in
 * an infinite loop
 *
 * <pre>while a is not equal to b do
 *   increase a by 1
 *   decrease b by 1</pre>
 *
 * Assume that the program is executed on a virtual machine which can store
 * arbitrary long numbers and execute forever.
 *
 * @param {number} a
 * Integer.
 * Guaranteed constraints:
 * 0 ≤ a ≤ 20.
 *
 * @param {number} b
 * Integer.
 * Guaranteed constraints:
 * 0 ≤ b ≤ 20.
 *
 * @returns {boolean}
 * true if the pseudocode will never stop, false otherwise.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function isInfiniteProcess(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  while (a !== b) {
    min = ++a;
    max = --b;
    if (min > max) {
      return true;
    }
  }
  return false;
}

module.exports = isInfiniteProcess;
