/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 8. Phone Call'.
 *
 * Some phone usage rate may be described as follows:
 *   - first minute of a call costs min1 cents,
 *   - each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
 *   - each minute after 10th costs min11 cents.
 *
 * You have s cents on your account before the call. What is the duration of the
 * longest call (in minutes rounded down to the nearest integer) you can have?
 *
 * @param {number} min1
 * Integer.
 * Guaranteed constraints:
 * 1 ≤ min1 ≤ 10.
 *
 * @param {number} min2_10
 * Integer.
 * Guaranteed constraints:
 * 1 ≤ min2_10 ≤ 10.
 *
 * @param {number} min11
 * Integer.
 * Guaranteed constraints:
 * 1 ≤ min11 ≤ 10.
 *
 * @param {number} s
 * Integer.
 * Guaranteed constraints:
 * 2 ≤ s ≤ 500.
 *
 * @returns {number}
 * Integer.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function phoneCall(
  min1: number,
  min2_10: number,
  min11: number,
  s: number
): number {
  let mins: number;
  if (min1 > s) {
    mins = 0;
    return mins;
  } else {
    mins = 1;
    s -= min1;
  }
  if (min2_10 * 9 <= s) {
    mins += 9;
    s -= min2_10 * 9;
  } else {
    mins += parseInt(String(s / min2_10), 10);
  }
  if (mins === 10) {
    mins += parseInt(String(s / min11), 10);
  }
  return mins;
}

module.exports = phoneCall;
