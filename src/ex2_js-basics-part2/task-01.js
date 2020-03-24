function printDataType(value) {
    let typeOfValue = typeof value;
    if (typeOfValue === "string") {
        return typeOfValue;
    }
    else if (!isNaN(value)) {
        if (typeOfValue === "number") {
            return typeOfValue;
        }
    }
    return undefined;
}
module.exports = printDataType