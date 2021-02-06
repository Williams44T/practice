/*
LEETCODE: Divide Two Integers
https://leetcode.com/problems/divide-two-integers/

Given two integers, dividend and divisor, divide two integers
without using multiplication, division, and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero, which means
losing its fractional part.
For example, truncate(8.345) = 8 and truncate(-2.7335) = -2.

Note:
Assume we are dealing with an environment that could only store
integers within the 32-bit signed integer range: [−2^31,  2^31 − 1].
For this problem, assume that your function
returns 2^31 − 1 when the division result overflows.

Example 1:
Input: dividend = 10, divisor = 3
Output: 3
Explanation: 10/3 = truncate(3.33333..) = 3.

Example 2:
Input: dividend = 7, divisor = -3
Output: -2
Explanation: 7/-3 = truncate(-2.33333..) = -2.

Example 3:
Input: dividend = 0, divisor = 1
Output: 0

Example 4:
Input: dividend = 1, divisor = 1
Output: 1

Constraints:
-2^31 <= dividend, divisor <= 2^31 - 1
divisor != 0
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
let divide = function(dividend, divisor) {
  if (dividend === 0 || Math.abs(divisor) > Math.abs(dividend)) {
    return 0;
  }

  let sign = '+';
  if (dividend > 0 && divisor < 0 || dividend < 0 && divisor > 0) {
    sign = '-';
  }

  let target = Math.abs(dividend);
  let base = Math.abs(divisor);
  let current = base;
  let changeCurrentBy = base;
  let quotient = 1;
  let changeQuotientBy = 1;
  let direction = 'up';
  let notInRange = true;

  while (notInRange) {
    if (current === target) { break; }

    //check to see if we're in range
    if (current < target && current > target - base) { break; }
    if (current > target && current < target + base) {
      quotient -= 1
      break;
    }

    //figure out if we are changing directions
    var newDirection = current > target ? 'down' : 'up';
    if (direction !== newDirection) {
      changeCurrentBy = base;
      changeQuotientBy = 1;
      direction = newDirection;
    }

    if (direction === 'up') {
      current += changeCurrentBy;
      quotient += changeQuotientBy;
    } else {
      current -= changeCurrentBy;
      quotient -= changeQuotientBy;
    }

    changeCurrentBy += changeCurrentBy;
    changeQuotientBy += changeQuotientBy;
  }

  return sign === '+'
    ? Math.min(2 ** 31 - 1, quotient)
    : Math.max((-2) ** 31, quotient - quotient - quotient);
};

//TESTS
var assertEqual = (actual, expected, test) => {
  var result = expected === actual ? 'PASS:' : 'FAIL:';
  console.log(result, test, '\n', '   EXPECTED:', expected, '\n', '   ACTUAL  :', actual);
};

assertEqual(divide(10, 3), 3, '10 / 3');
assertEqual(divide(7, -3), -2, '7 / -3');
assertEqual(divide(0, 1), 0, '0 / 1');
assertEqual(divide(1, 1), 1, '1 / 1');
assertEqual(divide(101, 2), 50, '101 / 2');
assertEqual(divide(400, 4), 100, '400 / 4');
assertEqual(divide(2 ** 31 - 1, 2), Math.floor((2 ** 31 - 1) / 2), '(2 ** 31 - 1) / 2');
assertEqual(divide((-2) ** 31, -1), 2 ** 31 - 1, '-2 ** 31 / -1');

/*
First Attempt (02.05.21):
Failed
Didn't account for maximum and minimum integers

Second Attempt (02.05.21):
Runtime: 96 ms, faster than 84.17% of JavaScript online submissions for Divide Two Integers.
Memory Usage: 40.3 MB, less than 39.93% of JavaScript online submissions for Divide Two Integers.
*/