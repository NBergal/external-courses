function printDuplicate(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[0]) {
            return false;
        }
    }
    return true;
}
module.exports = printDuplicate