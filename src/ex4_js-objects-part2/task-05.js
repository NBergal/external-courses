function checkString(defaultString, innerString) {
    if (defaultString.includes(innerString)) {
        return true;
    }
    return false;
}
module.exports = checkString