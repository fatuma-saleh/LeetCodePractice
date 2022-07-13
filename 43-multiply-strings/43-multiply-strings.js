/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let first =num1.split("").join("");
    let second =num2.split("").join("");
    let result = BigInt(first)*BigInt(second)
    
    return result.toString()
};