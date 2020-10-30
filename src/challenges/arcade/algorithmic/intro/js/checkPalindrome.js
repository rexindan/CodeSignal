'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 3. checkPalindrome'.
 *
 * Given the string, check if it is a palindrome.
 *
 * @param {string} inputString
 * A non-empty string consisting of lowercase characters.
 * Guaranteed constraints:
 * 1 ≤ inputString.length ≤ 10<sup>5</sup>.
 *
 * @returns {boolean}
 * true if inputString is a palindrome, false otherwise.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function checkPalindrome(inputString) {
  return inputString === inputString.split('').reverse().join('');
}

module.exports = checkPalindrome;
