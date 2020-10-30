/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 11. Extra Number'.
 *
 * You're given three integers, a, b and c. It is guaranteed that two of these
 * integers are equal to each other. What is the value of the third integer?
 *
 * @param {number} a
 * Integer.
 * Guaranteed constraints:
 * 1 ≤ a ≤ 10<sup>9</sup>.
 *
 * @param {number} b
 * Integer.
 * Guaranteed constraints:
 * 1 ≤ b ≤ 10<sup>9</sup>.
 *
 * @param {number} c
 * Integer.
 * Guaranteed constraints:
 * 1 ≤ c ≤ 10<sup>9</sup>.
 *
 * @returns {number}
 * Integer.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function extraNumber(a: number, b: number, c: number): number {
  return a / c === 1 ? b : a / b === 1 ? c : a;
}

module.exports = extraNumber;
