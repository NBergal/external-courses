function getPropertyValue(propertyName, guitarObject) {
  let prot = Object.getPrototypeOf(guitarObject)
  return prot[propertyName];
}
module.exports = getPropertyValue