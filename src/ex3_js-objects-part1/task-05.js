function copyObject(object) {
  let testObject = Object.assign({}, object);
  return testObject;
}
module.exports = copyObject