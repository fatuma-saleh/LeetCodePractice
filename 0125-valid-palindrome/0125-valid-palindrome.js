/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   const reg = new RegExp(/[^a-z0-9]/, 'g');
    const str = s.toLowerCase().replace(reg, '');
    const newArr = str.split('');
    return str === newArr.reverse().join('');
};