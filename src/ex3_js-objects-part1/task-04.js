function checkObjectProperty(propertyName, object) {
  if (!object.hasOwnProperty(propertyName)) {
    return Object.assign(object, {[propertyName]: "new"});
  }
  return object;
}
module.exports = checkObjectProperty