function setUpperToFirstLetter(defaultString) {
    let stringArray = defaultString.split(' ');
    for (let i = 0; i < stringArray.length; i++) {
        stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].substring(1);     
    }
    return stringArray.join(' ');
}
module.exports = setUpperToFirstLetter