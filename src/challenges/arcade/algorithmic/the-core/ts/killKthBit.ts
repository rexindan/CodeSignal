/**
 * Solution to a challenge
 * 'CodeSignal, Arcade, The Core, 17. Kill K-th Bit'.
 *
 * In order to stop the Mad Coder evil genius you need to decipher the encrypted
 * message he sent to his minions. The message contains several numbers that,
 * when typed into a supercomputer, will launch a missile into the sky blocking
 * out the sun, and making all the people on Earth grumpy and sad.
 *
 * You figured out that some numbers have a modified single digit in their
 * binary representation. More specifically, in the given number n the
 * k<sup>th</sup> bit from the right was initially set to 0, but its current
 * value might be different. It's now up to you to write a function that will
 * change the k<sup>th</sup> bit of n back to 0.
 *
 * @param {number} n
 * Integer.
 * Guaranteed constraints:
 * 0 ≤ n ≤ 2<sup>31</sup> - 1.
 *
 * @param {number} k
 * The 1-based index of the changed bit (counting from the right).
 * Guaranteed constraints:
 * 1 ≤ k ≤ 31.
 *
 * @returns {number}
 * Integer.
 *
 * @author Viacheslav Turovskyi
 *
 * {@link https://app.codesignal.com/profile/rexindan|CodeSignal}
 * {@link https://github.com/rexindan|GitHub}
 */

function killKthBit(n: number, k: number): number {
  return n & ~(1 << (k - 1));
}

module.exports = killKthBit;
