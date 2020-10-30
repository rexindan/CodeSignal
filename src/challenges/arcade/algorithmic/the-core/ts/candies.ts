/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 3. Candies'.
 *
 * n children have got m pieces of candy. They want to eat as much candy as they
 * can, but each child must eat exactly the same amount of candy as any other
 * child. Determine how many pieces of candy will be eaten by all the children
 * together. Individual pieces of candy cannot be split.
 *
 * @param {number} n
 * Integer. The number of children.
 * Guaranteed constraints:
 * 1 ≤ n ≤ 10.
 *
 * @param {number} m
 * Integer. The number of pieces of candy.
 * Guaranteed constraints:
 * 2 ≤ m ≤ 100.
 *
 * @returns {number}
 * Integer. The total number of pieces of candy the children will eat
 * provided they eat as much as they can and all children eat the same amount.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function candies(n: number, m: number): number {
  return m - (m % n);
}

module.exports = candies;
