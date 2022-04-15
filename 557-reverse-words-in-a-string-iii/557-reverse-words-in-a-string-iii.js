/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
   
   return s.split(" ").map(result =>{
       result = result.split("").reverse().join("")
       return result
   }).join(" ")
    
};