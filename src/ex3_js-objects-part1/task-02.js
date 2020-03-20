function outputObject(testObject) {
  for (let key in testObject) {
    if (testObject.hasOwnProperty(key)) {
      console.log(key + ": " + testObject[key]);
    }
  }
  return;
}
module.exports = outputObject