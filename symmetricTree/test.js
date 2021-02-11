var { arrayToBST, assertEqual } = require('../testing');
var isSymmetric = require('./isSymmetric');

var testName = 'TEST 1';
var input = arrayToBST([1,2,2,3,4,4,3]);
var actual = isSymmetric(input);
var expected = true;
assertEqual(actual, expected, testName);

var testName = 'TEST 2';
var input = arrayToBST([1,2,2,null,3,null,3]);
var actual = isSymmetric(input);
var expected = false;
assertEqual(actual, expected, testName);

var testName = 'TEST 3';
var input = arrayToBST([]);
var actual = isSymmetric(input);
var expected = true;
assertEqual(actual, expected, testName);

var testName = 'TEST 4';
var input = arrayToBST([null]);
var actual = isSymmetric(input);
var expected = true;
assertEqual(actual, expected, testName);

var testName = 'TEST 5';
var input = arrayToBST([1,2,2,3,null,3,null]);
var actual = isSymmetric(input);
var expected = false;
assertEqual(actual, expected, testName);


