function checkObjectProperty(propertyName, testObject) {
  return testObject.hasOwnProperty(propertyName);
}
module.exports = checkObjectProperty