/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 10. Knapsack Light'.
 *
 * You found two items in a treasure chest! The first item weighs weight1 and is
 * worth value1, and the second item weighs weight2 and is worth value2. What is
 * the total maximum value of the items you can take with you, assuming that
 * your max weight capacity is maxW and you can't come back for the items later?
 *
 * <strong>Note</strong> that there are only two items and you can't bring more
 * than one item of each type, i.e. you can't take two first items or two second
 * items.
 *
 * @param {number} value1
 * Integer.
 * Guaranteed constraints:
 * 2 ≤ value1 ≤ 20.
 *
 * @param {number} weight1
 * Integer.
 * Guaranteed constraints:
 * 2 ≤ weight1 ≤ 10.
 *
 * @param {number} value2
 * Integer.
 * Guaranteed constraints:
 * 2 ≤ value2 ≤ 20.
 *
 * @param {number} weight2
 * Integer.
 * Guaranteed constraints:
 * 2 ≤ weight2 ≤ 10.
 *
 * @param {number} maxW
 * Integer.
 * Guaranteed constraints:
 * 1 ≤ maxW ≤ 20.
 *
 * @returns {number}
 * Integer.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function knapsackLight(
  value1: number,
  weight1: number,
  value2: number,
  weight2: number,
  maxW: number
): number {
  if (weight1 + weight2 <= maxW) {
    return value1 + value2;
  }
  if (weight1 <= maxW && weight2 <= maxW) {
    return Math.max(value1, value2);
  }
  if (weight1 <= maxW) {
    return value1;
  }
  if (weight2 <= maxW) {
    return value2;
  }
  return 0;
}

module.exports = knapsackLight;
