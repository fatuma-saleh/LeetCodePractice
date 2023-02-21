/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
     let start = 0;
    let end = 0;
    
    for(let i=0; i<s.length; i++) {
        let len1 = expand(s, i, i);
        let len2 = expand(s, i, i+1);
        let size = Math.max(len1, len2);
        if(size > end-start) {
            start =i-( Math.floor ((size-1) / 2));
            end = Math.floor(i + (size/2));
        }
    }
    
    return s.substring(start, end+1);
};

const expand = (str, left, right) => {
    let l = left;
    let r = right;
    while(l >= 0 && r < str.length && str[l] === str[r]) {
        l--;
        r++;
    }
    
    return r-l-1;
}

