/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
     const isCharOdd = []
    let oddsCounter = 0
    for (const char of s) {
        if (isCharOdd[char]) {
            isCharOdd[char] = false
            oddsCounter--
        } else {
            isCharOdd[char] = true
            oddsCounter++
        }
    }
    return oddsCounter ? s.length - oddsCounter + 1 : s.length
};