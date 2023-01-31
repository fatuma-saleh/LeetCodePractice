/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   const reg = new RegExp(/[^a-z0-9]/, 'g');
    const str = s.toLowerCase().replace(reg, '');
    return str === str.split('').reverse().join('');
};