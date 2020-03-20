function checkObjectProperty(propertyName, objectWithoutProp) {
  let objectWithProp = {};
  let testObject;
  objectWithProp[propertyName] = 'new';
  if (!objectWithoutProp.hasOwnProperty(propertyName)) {
    testObject = Object.assign(objectWithoutProp, objectWithProp);
    return testObject;
  }
  return objectWithoutProp;
}
module.exports = checkObjectProperty