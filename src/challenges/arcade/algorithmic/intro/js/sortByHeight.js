'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 12. sortByHeight'.
 *
 * Some people are standing in a row in a park. There are trees between them
 * which cannot be moved. Your task is to rearrange the people by their heights
 * in a non-descending order without moving the trees. People can be very tall!
 *
 * @param {number[]} a
 * Array of integers. If a[i] = -1, then the i<sup>th</sup> position is occupied
 * by a tree. Otherwise a[i] is the height of a person standing in the
 * i<sup>th</sup> position.
 * Guaranteed constraints:
 * 1 ≤ a.length ≤ 1000,
 * -1 ≤ a[i] ≤ 1000.
 *
 * @returns {number[]}
 * Sorted array a with all the trees untouched.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function sortByHeight(a) {
  const b = a.filter((i) => i !== -1).sort((a, b) => a - b);
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      b.splice(i, 0, -1);
    }
  }
  return b;
}

module.exports = sortByHeight;
