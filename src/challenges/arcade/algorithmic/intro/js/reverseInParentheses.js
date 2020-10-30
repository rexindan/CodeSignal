'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 13. reverseInParentheses'.
 *
 * Write a function that reverses characters in (possibly nested) parentheses in
 * the input string.
 *
 * Input strings will always be well-formed with matching ()s.
 *
 * @param {string} inputString
 * A string consisting of lowercase English letters and the characters
 * '(' and ')'.
 * It is guaranteed that all parentheses in inputString form a regular bracket
 * sequence.
 * Guaranteed constraints:
 * 0 ≤ inputString.length ≤ 50.
 *
 * @returns {string}
 * inputString, with all the characters that were in parentheses reversed.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function reverseInParentheses(inputString) {
  inputString = inputString.split('');
  for (let i = inputString.length - 1; i >= 0; i--) {
    if (inputString[i] === '(') {
      for (let k = i; k <= inputString.length - 1; k++) {
        if (inputString[k] === ')') {
          if (inputString.slice(i, i + 1).toString() === '(') {
            const inputStringElementReversed = inputString
              .slice(i + 1, k)
              .reverse();
            inputString.splice(i, 1);
            inputString.splice(k - 1, 1);
            if (inputStringElementReversed.length === 0) {
              break;
            }
            for (let x = 0; x < inputStringElementReversed.length; x++) {
              inputString[x + i] = inputStringElementReversed[x];
            }
          }
        }
      }
    }
  }
  return inputString.join('');
}

module.exports = reverseInParentheses;
