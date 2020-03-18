function changeToUpperCase(defaultString) {
    resultString = defaultString.charAt(0).toUpperCase() + defaultString.slice(1);
    return resultString;
}
module.exports = changeToUpperCase