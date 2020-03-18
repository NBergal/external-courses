function checkPrimeNumber(value) {
    let result;
    if (value <= 1000) {
        if (value === 1) {
            return "Число " + value + " - единица";
        } else if (value === 2) {
            return "Число " + value + " - составное число";
        }
        for (var x = 2; x < value; x++) {
            if (value % x === 0) {
                return "Число " + value + " - составное число";
            }
        }
        return "Число " + value + " - простое число";
    }
    return "Данные неверны";
}
module.exports = checkPrimeNumber