var assertEqual = (actual, expected, testName) => {
  if (actual === expected) {
    console.log('PASS:', testName);
  } else {
    console.log('FAIL:', testName);
    console.log('   EXPECTED:', expected);
    console.log('   ACTUAL  :', actual);
  }
};

module.exports = assertEqual;