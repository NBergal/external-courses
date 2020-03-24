function printData(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    console.log(array.length + ' elements');
    return;
}
module.exports = printData