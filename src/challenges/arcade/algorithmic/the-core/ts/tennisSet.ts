/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 14. Tennis Set'.
 *
 * In tennis, the winner of a set is based on how many games each player wins.
 * The first player to win 6 games is declared the winner unless their opponent
 * had already won 5 games, in which case the set continues until one of the
 * players has won 7 games.
 *
 * Given two integers score1 and score2, your task is to determine if it is
 * possible for a tennis set to be finished with a final score of score1 :
 * score2.
 *
 * @param {number} score1
 * Number of games won by the 1<sup>st</sup> player, non-negative integer.
 * Guaranteed constraints:
 * 0 ≤ score1 ≤ 10.
 *
 * @param {number} score2
 * Number of games won by the 2<sup>nd</sup> player, non-negative integer.
 * Guaranteed constraints:
 * 0 ≤ score2 ≤ 10.
 *
 * @returns {boolean}
 * true if score1 : score2 represents a possible score for an ended set, false
 * otherwise.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function tennisSet(score1: number, score2: number): boolean {
  return (
    (score1 < 5 && score2 === 6) ||
    ((score1 === 5 || score1 === 6) && score2 === 7) ||
    (score2 < 5 && score1 === 6) ||
    ((score2 === 5 || score2 === 6) && score1 === 7)
  );
}

module.exports = tennisSet;
