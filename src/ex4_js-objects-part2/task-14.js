function getRndInteger(min, max) {
    result = Math.floor(Math.random() * (max - min)) + min;
    return result;
}
module.exports = getRndInteger