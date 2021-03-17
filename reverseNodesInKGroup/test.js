const { arrayToLinkedList, linkedListToArray, assertArraysEqual } = require('../testing');
const reverseKGroup = require('./reverseKGroup');

let input = arrayToLinkedList([1,2,3]);
let actual = linkedListToArray(reverseKGroup(input, 3));
let expected = [3,2,1];
assertArraysEqual(actual, expected, 'test1');

input = arrayToLinkedList([1,2,3]);
actual = linkedListToArray(reverseKGroup(input, 2));
expected = [2,1,3];
assertArraysEqual(actual, expected, 'test2');

input = arrayToLinkedList([1,2,3]);
actual = linkedListToArray(reverseKGroup(input, 1));
expected = [1,2,3];
assertArraysEqual(actual, expected, 'test3');

input = arrayToLinkedList([1,2,3]);
actual = linkedListToArray(reverseKGroup(input, 4));
expected = [1,2,3];
assertArraysEqual(actual, expected, 'test4');

input = arrayToLinkedList([1,2,3,4,5,6,7,8]);
actual = linkedListToArray(reverseKGroup(input, 3));
expected = [3,2,1,6,5,4,7,8];
assertArraysEqual(actual, expected, 'test5');

input = arrayToLinkedList([1,2,3,4,5,6,7,8]);
actual = linkedListToArray(reverseKGroup(input, 2));
expected = [2,1,4,3,6,5,8,7];
assertArraysEqual(actual, expected, 'test6');
