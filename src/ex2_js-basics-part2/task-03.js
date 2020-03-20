function printEvenAndOdd(funcArray) {
    let resultArray = [0, 0, 0];
    for (let i = 0; i < funcArray.length; i++) {
        if (funcArray[i] !== null && funcArray[i] !== undefined) {
            if (funcArray[i] === 0) {
                resultArray[2]++;
            }
            else if (funcArray[i] % 2 !== 0) {
                resultArray[1]++;
            }
            else if ((funcArray[i] % 2 === 0)) {
                resultArray[0]++;
            }
        }
    }
    return resultArray;
}
module.exports = printEvenAndOdd