'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 6. makeArrayConsecutive2'.
 *
 * Ratiorg got statues of different sizes as a present from CodeMaster for his
 * birthday, each statue having an non-negative integer size. Since he likes to
 * make things perfect, he wants to arrange them from smallest to largest so
 * that each statue will be bigger than the previous one exactly by 1. He may
 * need some additional statues to be able to accomplish that. Help him figure
 * out the minimum number of additional statues needed.
 *
 * @param {number[]} statues
 * An array of distinct non-negative integer numbers.
 * Guaranteed constraints:
 * 1 ≤ statues.length ≤ 10,
 * 0 ≤ statues[i] ≤ 20.
 *
 * @returns {number}
 * Integer. The minimal number of statues that need to be added to existing
 * statues such that it contains every integer size from an interval [L, R] (for
 * some L, R) and no other sizes.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function makeArrayConsecutive2(statues) {
  return Math.max(...statues) - Math.min(...statues) - statues.length + 1;
}

module.exports = makeArrayConsecutive2;
