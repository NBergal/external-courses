function getNewString(defaultString) {
    let stringArray = defaultString.split('');
    stringArray.reverse();
    return stringArray.join(''); 
}
module.exports = getNewString