var assertArraysEqual = (actual, expected, testName) => {
  var sameLength = actual.length === expected.length;
  var sameElements = true;

  if (sameLength) {
    for (var i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        sameElements = false;
      }
    }
  }

  if (sameLength && sameElements) {
    console.log('PASS:', testName);
  } else {
    console.log('FAIL:', testName);
  }
    console.log('   EXPECTED:', expected);
    console.log('   ACTUAL  :', actual);
};

module.exports = assertArraysEqual;