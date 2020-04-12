function countSymbols(defaultString) {
    let stringArray = defaultString.split(''),
        resultArray = {},
        symbol;
    for (let i = 0; i < stringArray.length; i++) {
        symbol = stringArray[i];
        if (resultArray[symbol] !== undefined) {
            resultArray[symbol]++;
        }
        else {
            resultArray[symbol] = 1;
        }
    }
    for (symbol in resultArray) {
        if (resultArray.hasOwnProperty(symbol)) {
            console.log('символ "' + symbol + '" встречается ' + resultArray[symbol] + ' раз(а)')
        }
    }
}
module.exports = countSymbols