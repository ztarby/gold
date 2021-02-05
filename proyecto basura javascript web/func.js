
const func = { }
function addd(a, b) {
    return a + b;
}
function rest(a, b) {
    return a - b;
}
function divide(a, b) {
    if (b == 0) {
        console.log("quien divide en 0?");
        return 0;
    } else {
        return a / b;
    }

}
 function multy(a, b) {
    return a * b;
}


func.addd = addd;
func.rest = rest;
func.divide = divide;
func.multy = multy;

module.exports = func;


/*
exports.rest = rest;
exports.addd = addd;
exports.divide = divide;
exports.multy = multy;
*/
