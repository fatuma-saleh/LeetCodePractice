/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let count = {},sum = 0;
    for(let i = 0;i< s.length;i++){
        let ch = s[i]
        if(ch in count){
           sum +=2
            delete count[ch]
            continue;
            
        }
        count[ch] = 1
    }
   return s.length > sum ? sum + 1: sum
};