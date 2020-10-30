/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 9. allLongestStrings'.
 *
 * Given an array of strings, return another array containing all of its longest
 * strings.
 *
 * @param {string[]} inputArray
 * A non-empty array of strings.
 * Guaranteed constraints:
 * 1 ≤ inputArray.length ≤ 10,
 * 1 ≤ inputArray[i].length ≤ 10.
 *
 * @returns {string[]}
 * Array of the longest strings, stored in the same order as in the inputArray.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function allLongestStrings(inputArray: string[]): string[] {
  const x = Math.max(...inputArray.map((i) => i.length));
  return inputArray.filter((i) => i.length === x);
}

module.exports = allLongestStrings;
