var mergeTwoLists = require('./mergeTwoSortedLists');

var ListNode = (val, next) => {
  return {
    val: val === undefined ? 0 : val,
    next: next === undefined ? null : next,
  };
};

var arrayToList = (nums) => {
  if (nums.length === 0) { return null; }

  var head = ListNode(nums[0]);
  var current = head;

  for (var i = 1; i < nums.length; i++) {
    current.next = ListNode(nums[i]);
    current = current.next;
  }

  return head;
};

var listToArray = (list) => {
  var arr = [];
  while (list) {
    arr.push(list.val);
    list = list.next;
  }

  return arr;
};

var assertArraysEqual = (actual, expected, testName) => {
  var result = 'PASS';

  for (var i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      result = 'FAIL';
    }
  }

  if (actual.length !== expected.length) {
    result = 'FAIL';
  }

  console.log(testName, result);
  console.log('   ACTUAL  :', actual);
  console.log('   EXPECTED:', expected);
};

var l1 = arrayToList([1,2,4]);
var l2 = arrayToList([1,3,4]);
var actual = listToArray(mergeTwoLists(l1, l2));
var expected = [1,1,2,3,4,4];
console.log(assertArraysEqual(actual, expected, 'TEST 1:'));

var l1 = arrayToList([]);
var l2 = arrayToList([]);
var actual = listToArray(mergeTwoLists(l1, l2));
var expected = [];
console.log(assertArraysEqual(actual, expected, 'TEST 2:'));

var l1 = arrayToList([]);
var l2 = arrayToList([0]);
var actual = listToArray(mergeTwoLists(l1, l2));
var expected = [0];
console.log(assertArraysEqual(actual, expected, 'TEST 3:'));

var l1 = arrayToList([1,2,3,4,5]);
var l2 = arrayToList([6,7,8,9,10]);
var actual = listToArray(mergeTwoLists(l1, l2));
var expected = [1,2,3,4,5,6,7,8,9,10];
console.log(assertArraysEqual(actual, expected, 'TEST 4:'));

var l1 = arrayToList([1]);
var l2 = arrayToList([1]);
var actual = listToArray(mergeTwoLists(l1, l2));
var expected = [1,1];
console.log(assertArraysEqual(actual, expected, 'TEST 5:'));

var l1 = arrayToList([1,2,3,4,5]);
var l2 = arrayToList([4,5,6,7,8]);
var actual = listToArray(mergeTwoLists(l1, l2));
var expected = [1,2,3,4,4,5,5,6,7,8];
console.log(assertArraysEqual(actual, expected, 'TEST 2:'));