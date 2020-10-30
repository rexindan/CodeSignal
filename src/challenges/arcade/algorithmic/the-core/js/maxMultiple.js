'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 5. Max Multiple'.
 *
 * Given a divisor and a bound, find the largest integer N such that:
 *   - N is divisible by divisor.
 *   - N is less than or equal to bound.
 *   - N is greater than 0.
 *
 * It is guaranteed that such a number exists.
 *
 * @param {number} divisor
 * Integer.
 * Guaranteed constraints:
 * 2 ≤ divisor ≤ 10.
 *
 * @param {number} bound
 * Integer.
 * Guaranteed constraints:
 * 5 ≤ bound ≤ 100.
 *
 * @returns {number}
 * The largest integer not greater than bound that is divisible by
 * divisor.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

module.exports = maxMultiple;
