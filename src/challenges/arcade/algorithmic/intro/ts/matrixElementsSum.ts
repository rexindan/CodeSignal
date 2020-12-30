/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 8. matrixElementsSum'.
 *
 * After becoming famous, the CodeBots decided to move into a new building
 * together. Each of the rooms has a different cost, and some of them are free,
 * but there's a rumour that all the free rooms are haunted! Since the CodeBots
 * are quite superstitious, they refuse to stay in any of the free rooms,
 * <strong>or any of the rooms below any of the free rooms</strong>.
 *
 * Given matrix, a rectangular matrix of integers, where each value represents
 * the cost of the room, your task is to return the total sum of all rooms that
 * are suitable for the CodeBots (ie: add up all the values that don't appear
 * below a 0).
 * <br />
 * <img src="../src/res/arcade/algorithmic/intro/matrixElementsSum1.png"
   width=30% height=30% alt="Illustration picture for the task">&nbsp;
 * <img src="../src/res/arcade/algorithmic/intro/matrixElementsSum2.png"
   width=30% height=30% alt="Illustration picture for the task">
 *
 * @param {number[][]} matrix
 * A 2-dimensional array of integer numbers, representing the cost of each room
 * in the building. A value of 0 indicates that the room is haunted.
 * Guaranteed constraints:
 * 1 ≤ matrix.length ≤ 5,
 * 1 ≤ matrix[i].length ≤ 5,
 * 0 ≤ matrix[i][j] ≤ 10.
 *
 * @returns {number}
 * Integer. The total price of all the rooms that are suitable for the
 * CodeBots to live in.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function matrixElementsSum(matrix: number[][]): number {
  let s = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    for (let k = 0; k < matrix.length; k++) {
      if (matrix[k][i] === 0) {
        break;
      } else {
        s += matrix[k][i];
      }
    }
  }
  return s;
}

module.exports = matrixElementsSum;
