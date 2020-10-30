/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 7. almostIncreasingSequence'.
 *
 * Given a sequence of integers as an array, determine whether it is possible to
 * obtain a strictly increasing sequence by removing no more than one element
 * from the array.
 *
 * Note: sequence a<sub>0</sub>, a<sub>1</sub>, ..., a<sub>n</sub> is considered
 * to be a strictly increasing if a<sub>0</sub> < a<sub>1</sub> < ... <
 * a<sub>n</sub>. Sequence containing only one element is also considered to be
 * strictly increasing.
 *
 * @param {number[]} sequence
 * Array of integers.
 * Guaranteed constraints:
 * 2 ≤ sequence.length ≤ 10<sup>5</sup>,
 * -10<sup>5</sup> ≤ sequence[i] ≤ 10<sup>5</sup>.
 *
 * @returns {boolean}
 * Return true if it is possible to remove one element from the array in order
 * to get a strictly increasing sequence, otherwise return false.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function almostIncreasingSequence(sequence: number[]): boolean {
  let a;
  let n = sequence.length;
  while (n--) {
    a = sequence.slice();
    a.splice(n, 1);
    if (
      a.every(function (i, index, arr) {
        if (index === 0) {
          return true;
        } else {
          return i > arr[index - 1];
        }
      })
    ) {
      return true;
    }
  }
  return false;
}

module.exports = almostIncreasingSequence;
