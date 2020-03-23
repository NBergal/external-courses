function getNewString(defaultString, innerString, wordIndex) {
    let lowerCaseStr = defaultString.split(' ');
    lowerCaseStr.splice(wordIndex + 1, 0, innerString);
    return lowerCaseStr.join(' '); 
}
module.exports = getNewString