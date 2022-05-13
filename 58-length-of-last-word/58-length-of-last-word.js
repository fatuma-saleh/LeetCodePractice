/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let temp = []
   let str =  s.trim().split(" ")
   for(let i = 0;i<str.length;i++){
       if(str[i]!=""){
           temp.push(str[i])
       }
   } 
    return temp[temp.length-1].length
};