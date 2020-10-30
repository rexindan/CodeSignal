/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 5. shapeArea'.
 *
 * Below we will define an n-interesting polygon. Your task is to find the area
 * of a polygon for a given n.
 *
 * A 1-interesting polygon is just a square with a side of length 1. An
 * n-interesting polygon is obtained by taking the n - 1-interesting polygon and
 * appending 1-interesting polygons to its rim, side by side. You can see the
 * 1-, 2-, 3- and 4-interesting polygons in the picture below.
 * <br />
 * <img src="../src/res/arcade/algorithmic/intro/shapeArea.png"
   width=50% height=50% alt="Illustration picture for the task">
 *
 * @param {number} n
 * Integer.
 * Guaranteed constraints:
 * 1 ≤ n < 10<sup>4</sup>.
 *
 * @returns {number}
 * Integer. The area of the n-interesting polygon.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function shapeArea(n: number): number {
  return n * n + (n - 1) * (n - 1);
}

module.exports = shapeArea;
