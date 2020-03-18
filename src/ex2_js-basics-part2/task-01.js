function displayDataType(value) {
    let typeOfValue = typeof value;
    if (typeOfValue === "string") {
        return typeOfValue;
    } else if (typeOfValue === "number") {
        return typeOfValue;
    }
    return undefined;
}
module.exports = displayDataType