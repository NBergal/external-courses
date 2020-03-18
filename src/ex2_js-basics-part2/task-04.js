function displayDuplicate(array) {
    let result;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[0]) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}
module.exports = displayDuplicate