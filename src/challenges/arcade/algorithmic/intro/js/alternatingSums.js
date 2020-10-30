'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 14. alternatingSums'.
 *
 * Several people are standing in a row and need to be divided into two teams.
 * The first person goes into team 1, the second goes into team 2, the third
 * goes into team 1 again, the fourth into team 2, and so on.
 *
 * You are given an array of positive integers - the weights of the people.
 * Return an array of two integers, where the first element is the total weight
 * of team 1, and the second element is the total weight of team 2 after the
 * division is complete.
 *
 * @param {number[]} a
 * Array of integers.
 * Guaranteed constraints:
 * 1 ≤ a.length ≤ 10<sup>5</sup>,
 * 45 ≤ a[i] ≤ 100.
 *
 * @returns {number[]}
 * Array of integers.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function alternatingSums(a) {
  return [
    a.map((b, i) => (i % 2 === 0 ? b : 0)).reduce((acc, c) => acc + c),
    a.map((b, i) => (i % 2 === 1 ? b : 0)).reduce((acc, c) => acc + c),
  ];
}

module.exports = alternatingSums;
