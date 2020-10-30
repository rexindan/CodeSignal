'use strict';
/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, Intro, 4. adjacentElementsProduct'.
 *
 * Given an array of integers, find the pair of adjacent elements that has the
 * largest product and return that product.
 *
 * @param {number[]} inputArray
 * An array of integers containing at least two elements.
 * Guaranteed constraints:
 * 2 ≤ inputArray.length ≤ 10,
 * -1000 ≤ inputArray[i] ≤ 1000.
 *
 * @returns {number}
 * Integer. The largest product of adjacent elements.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function adjacentElementsProduct(inputArray) {
  let largest = -1000;
  for (let i = 0; i < inputArray.length - 1; i++) {
    largest = Math.max(largest, inputArray[i] * inputArray[i + 1]);
  }
  return largest;
}

module.exports = adjacentElementsProduct;
