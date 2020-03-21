function setNewFormat(defaultString) {
    let separateWord = defaultString.split(' ');
    for (let i = 0; i < separateWord.length; i++) {
        if (i === 0) {
            separateWord[i] = separateWord[i].charAt(0).toLowerCase() + separateWord[i].substring(1);
        }
        else {
            separateWord[i] = separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1).toLowerCase();
        }
    }
    return separateWord.join('');
}
module.exports = setNewFormat