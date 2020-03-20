function sliceFunction(array, begin = 0, end = array.length) {
    let result = [];
    if (begin >= 0 && end >= 0) {
        for (let i = begin; i < end; i++) {
            result[i - begin] = array[i];
        }
    }
    else {
        for (let i = array.length + begin; i < array.length + end; i++) {
            result[i - 1] = array[i];
        }
    }
    return result;
}
module.exports = sliceFunction