function getPropertyValue(propertyName, object) {
  let prot = Object.getPrototypeOf(object)
  return prot[propertyName];
}
module.exports = getPropertyValue