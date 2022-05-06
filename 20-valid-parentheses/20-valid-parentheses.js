/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length < 2) return false
    let stack = []
    let obj={
        '{':'}',
        '[':']',
        '(':')'
    }
    
    for(const char of s){
      if(char === '{'||char==="("||char==="[")  {
          stack.push(char)
      }else{
          if(obj[stack[stack.length-1]]!==char){
              return false
          }else{
              stack.pop()
          }
      }
        
    }
if(stack.length > 0){
    

    return false}else{
        return true
    }
    
};