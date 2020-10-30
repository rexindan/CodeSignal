/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 15. Will You?'.
 *
 * Once Mary heard a famous song, and a line from it stuck in her head. That
 * line was "Will you still love me when I'm no longer young and beautiful?".
 * Mary believes that a person is loved if and only if he/she is both young and
 * beautiful, but this is quite a depressing thought, so she wants to put her
 * belief to the test.
 *
 * Knowing whether a person is young, beautiful and loved, find out if they
 * contradict Mary's belief.
 *
 * A person contradicts Mary's belief if one of the following statements is
 * true:
 *   - they are young and beautiful but not loved;
 *   - they are loved but not young or not beautiful.
 *
 * @param {boolean} young
 *
 * @param {boolean} beautiful
 *
 * @param {boolean} loved
 *
 * @returns {boolean}
 * true if the person contradicts Mary's belief, false otherwise.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function willYou(young: boolean, beautiful: boolean, loved: boolean): boolean {
  return (young && beautiful) !== loved;
}

module.exports = willYou;
