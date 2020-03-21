function checkObjectProperty(propertyName, objectWithoutProp) {
  let objectWithProp = {};
  let testObject;
  objectWithProp[propertyName] = 'new';
  if (!objectWithoutProp.hasOwnProperty(propertyName)) {
    return Object.assign(objectWithoutProp, objectWithProp);
  }
  return objectWithoutProp;
}
module.exports = checkObjectProperty