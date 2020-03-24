function sliceFunction(array, begin = 0, end = array.length) {
    let result = [], beginValue = begin, endValue = end;
    if (begin < 0) {
        beginValue = array.length + begin;
        if (end < 0) {
            endValue = array.length + end;
        }
    }
    else if (begin >= 0 && end < 0) {
        endValue = array.length + end;
    }
    for (let i = beginValue; i < endValue; i++) {
        result[i - beginValue] = array[i];
    }
    return result;
}
module.exports = sliceFunction