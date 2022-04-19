/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxlength = 0,subString ="";
    for(let character of s){
        if(!subString.includes(character)){
            subString += character
        }else{
           maxlength = Math.max(maxlength,subString.length)
            subString = subString.substring(subString.indexOf(character)+1)+character
            
            
        }
    }
    if(maxlength >=subString.length){
        return maxlength            
    }else{
        return subString.length
    }
};