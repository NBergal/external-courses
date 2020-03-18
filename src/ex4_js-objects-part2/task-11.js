function countSymbols(defaultString) {
    let symbol, count;
    let symbolAmount = {};
    for (let i = 0; i < defaultString.length; i++) {
        symbol = defaultString.charAt(i);
        count = symbolAmount[symbol];
        if (symbolAmount[symbol] === count) {
            symbolAmount[symbol] = count + 1;
        } else {
            symbolAmount[symbol] = 1;
        }
    }
    for (symbol in symbolAmount) {
        if (symbolAmount.hasOwnProperty(symbol)) {
            console.log(symbol + " count: " + symbolAmount[symbol]);
        }
    }
}
module.exports = countSymbols