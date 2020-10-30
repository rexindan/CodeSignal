'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 2. centuryFromYear'.
 *
 * Given a year, return the century it is in. The first century spans from the
 * year 1 up to and including the year 100, the second - from the year 101 up to
 * and including the year 200, etc.
 *
 * @param {number} year
 * A positive integer, designating the year.
 * Guaranteed constraints:
 * 1 ≤ year ≤ 2005.
 *
 * @returns {number}
 * Integer. The number of the century the year is in.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function centuryFromYear(year) {
  return Math.ceil(year / 100);
}

module.exports = centuryFromYear;
