/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 11. isLucky'.
 *
 * Ticket numbers usually consist of an even number of digits. A ticket number
 * is considered lucky if the sum of the first half of the digits is equal to
 * the sum of the second half.
 *
 * Given a ticket number n, determine if it's lucky or not.
 *
 * @param {number} n
 * A ticket number represented as a positive integer with an even number of
 * digits.
 * Guaranteed constraints:
 * 10 ≤ n < 106.
 *
 * @returns {boolean}
 * true if n is a lucky ticket number, false otherwise.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function isLucky(n: number): boolean {
  const a = ('' + n).split('').map(Number);
  const b = a.slice(0, a.length / 2).reduce((d, e) => d + e);
  const c = a.slice(a.length / 2, a.length).reduce((d, e) => d + e);
  return b === c;
}

module.exports = isLucky;
