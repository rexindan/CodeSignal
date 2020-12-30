/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 16. Metro Card'.
 *
 * You just bought a public transit card that allows you to ride the Metro for a
 * certain number of days.
 *
 * Here is how it works: upon first receiving the card, the system allocates you
 * a 31-day pass, which equals the number of days in January. The second time
 * you pay for the card, your pass is extended by 28 days, i.e. the number of
 * days in February (note that leap years are not considered), and so on. The
 * 13<sup>th</sup> time you extend the pass, you get 31 days again.
 *
 * You just ran out of days on the card, and unfortunately you've forgotten how
 * many times your pass has been extended so far. However, you do remember the
 * number of days you were able to ride the Metro during this most recent month.
 * Figure out the number of days by which your pass will now be extended, and
 * return all the options as an array sorted in increasing order.
 *
 * @param {number} lastNumberOfDays
 * A positive integer, the number of days for which the card was extended the
 * last time.
 * Guaranteed constraints:
 * lastNumberOfDays = 28 or lastNumberOfDays = 30 or lastNumberOfDays = 31.
 *
 * @returns {number[]}
 * An array of positive integers, the possible number of days for which you will
 * extend your pass. The elements of the array can only be equal to 28, 30 or 31
 * and must be sorted in increasing order.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function metroCard(lastNumberOfDays: number): number[] {
  return lastNumberOfDays < 31 ? [31] : [28, 30, 31];
}

module.exports = metroCard;
