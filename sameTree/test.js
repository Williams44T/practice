const { arrayToBST, assertEqual } = require('../testing');
const isSameTree = require('./isSameTree');

var testName = 'TEST 1';
var p = arrayToBST([1,2,3]);
var q = arrayToBST([1,2,3]);
var actual = isSameTree(p, q);
var expected = true;
assertEqual(actual, expected, testName);

var testName = 'TEST 2';
var p = arrayToBST([1,2]);
var q = arrayToBST([1,null,2]);
var actual = isSameTree(p, q);
var expected = false;
assertEqual(actual, expected, testName);

var testName = 'TEST 3';
var p = arrayToBST([1,2,1]);
var q = arrayToBST([1,1,2]);
var actual = isSameTree(p, q);
var expected = false;
assertEqual(actual, expected, testName);

var testName = 'TEST 4';
var p = arrayToBST([]);
var q = arrayToBST([]);
var actual = isSameTree(p, q);
var expected = true;
assertEqual(actual, expected, testName);