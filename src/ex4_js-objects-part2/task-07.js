function countStringLength(defaultString, stringLength) {
    if (defaultString.length > stringLength) {
        resultString = defaultString.slice(0, stringLength - 1) + "…";
        return resultString;
    }
    resultString = "String must be longer than length value";
    return resultString;
}
module.exports = countStringLength