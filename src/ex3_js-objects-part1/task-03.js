function checkObjectProperty(propertyName, testObject) {
  let result = testObject.hasOwnProperty(propertyName);
  return result;
}
module.exports = checkObjectProperty