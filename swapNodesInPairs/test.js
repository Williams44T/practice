const { arrayToLinkedList, linkedListToArray, assertArraysEqual } = require('../testing');
const swapPairs = require('./swapPairs');

var testName = 'TEST 1';
var input = arrayToLinkedList([1,2,3,4]);
var actual = linkedListToArray(swapPairs(input));
var expected = [2,1,4,3];
assertArraysEqual(actual, expected, testName);

var testName = 'TEST 2';
var input = arrayToLinkedList([]);
var actual = linkedListToArray(swapPairs(input));
var expected = [];
assertArraysEqual(actual, expected, testName);

var testName = 'TEST 3';
var input = arrayToLinkedList([1]);
var actual = linkedListToArray(swapPairs(input));
var expected = [1];
assertArraysEqual(actual, expected, testName);

var testName = 'TEST 4';
var input = arrayToLinkedList([1,2]);
var actual = linkedListToArray(swapPairs(input));
var expected = [2,1];
assertArraysEqual(actual, expected, testName);

var testName = 'TEST 5';
var input = arrayToLinkedList([1,2,3]);
var actual = linkedListToArray(swapPairs(input));
var expected = [2,1,3];
assertArraysEqual(actual, expected, testName);