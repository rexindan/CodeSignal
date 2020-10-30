'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 13. Arithmetic Expression'.
 *
 * Consider an arithmetic expression of the form a#b=c. Check whether it is
 * possible to replace # with one of the four signs: +, -, * or / to obtain a
 * correct expression.
 *
 * @param {number} a
 * Integer.
 * Guaranteed constraints:
 * 1 ≤ a ≤ 20.
 *
 * @param {number} b
 * Integer.
 * Guaranteed constraints:
 * 1 ≤ b ≤ 20.
 *
 * @param {number} c
 * Integer.
 * Guaranteed constraints:
 * 0 ≤ c ≤ 20.
 *
 * @returns {boolean}
 * true if the desired replacement is possible, false otherwise.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function arithmeticExpression(a, b, c) {
  return a + b === c || a - b === c || a * b === c || a / b === c;
}

module.exports = arithmeticExpression;
