'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 9. Reach Next Level'.
 *
 * You are playing an RPG game. Currently your experience points (XP) total is
 * equal to experience. To reach the next level your XP should be at least at
 * threshold. If you kill the monster in front of you, you will gain more
 * experience points in the amount of the reward.
 *
 * Given values experience, threshold and reward, check if you reach the next
 * level after killing the monster.
 *
 * @param {number} experience
 * Integer.
 * Guaranteed constraints:
 * 3 ≤ experience ≤ 250.
 *
 * @param {number} threshold
 * Integer.
 * Guaranteed constraints:
 * 5 ≤ threshold ≤ 300.
 *
 * @param {number} reward
 * Integer.
 * Guaranteed constraints:
 * 2 ≤ reward ≤ 65.
 *
 * @returns {boolean}
 * true if you reach the next level, false otherwise.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function reachNextLevel(experience, threshold, reward) {
  return experience + reward >= threshold;
}

module.exports = reachNextLevel;
