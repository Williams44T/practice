var singleNumber = require('./singleNumber.js');
var { assertEqual } = require('../testing');

var testName = 'TEST 1';
var input = [1, 2, 1];
var actual = singleNumber(input);
var expected = 2;
assertEqual(actual, expected, testName);

var testName = 'TEST 2';
var input = [4, 1, 2, 1, 2];
var actual = singleNumber(input);
var expected = 4;
assertEqual(actual, expected, testName);

var testName = 'TEST 3';
var input = [1];
var actual = singleNumber(input);
var expected = 1;
assertEqual(actual, expected, testName);