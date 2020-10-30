'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 6. Circle of Numbers'.
 *
 * Consider integer numbers from 0 to n - 1 written down along the circle in
 * such a way that the distance between any two neighboring numbers is equal
 * (note that 0 and n - 1 are neighboring, too).
 *
 * Given n and firstNumber, find the number which is written in the radially
 * opposite position to firstNumber.
 *
 * <strong>Example</strong>
 * <br />
 * For n = 10 and firstNumber = 2, the output should be circleOfNumbers(n,
 * firstNumber) = 7.
 * <br />
 * <img src="../src/res/arcade/algorithmic/the-core/circleOfNumbers.png"
   alt="Illustration picture for the task">
 *
 * @param {number} n
 * A positive <strong>even</strong> integer.
 * Guaranteed constraints:
 * 4 ≤ n ≤ 20.
 *
 * @param {number} firstNumber
 * Integer.
 * Guaranteed constraints:
 * 0 ≤ firstNumber ≤ n - 1.
 *
 * @returns {number}
 * Integer.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function circleOfNumbers(n, firstNumber) {
  return (firstNumber + n / 2) % n;
}

module.exports = circleOfNumbers;
