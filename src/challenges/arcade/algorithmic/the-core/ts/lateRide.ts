/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 7. Late Ride'.
 *
 * One night you go for a ride on your motorcycle. At 00:00 you start your
 * engine, and the built-in timer automatically begins counting the length of
 * your ride, in minutes. Off you go to explore the neighborhood.
 *
 * When you finally decide to head back, you realize there's a chance the
 * bridges on your route home are up, leaving you stranded! Unfortunately, you
 * don't have your watch on you and don't know what time it is. All you know
 * thanks to the bike's timer is that n minutes have passed since 00:00.
 *
 * Using the bike's timer, calculate the current time. Return an answer as the
 * sum of digits that the digital timer in the format hh:mm would show.
 *
 * @param {number} n
 * Integer. The duration of your ride, in minutes. It is guaranteed that you've
 * been riding for less than a day (24 hours).
 * Guaranteed constraints:
 * 0 ≤ n < 60 * 24.
 *
 * @returns {number}
 * Integer. The sum of the digits the digital timer would show.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function lateRide(n: number): number {
  const a = parseInt(String(n / 60), 10);
  const b = n - a * 60;
  const c = Array.from(a.toString().concat(b.toString())).map(Number);
  return c.reduce((a, b) => a + b);
}

module.exports = lateRide;
