function printEvenAndOdd(array) {
    let resultArray = [0, 0, 0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== null && array[i] !== undefined) {
            if (array[i] === 0) {
                resultArray[2]++;
            }
            else if (array[i] % 2 !== 0) {
                resultArray[1]++;
            }
            else if (array[i] % 2 === 0) {
                resultArray[0]++;
            }
        }
    }
    return resultArray;
}
module.exports = printEvenAndOdd