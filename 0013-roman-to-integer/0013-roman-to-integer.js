/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
     let number =convert(s.charAt(0));
    let curr,prev;
    for(let i = 1;i<s.length;i++){
        curr = convert(s.charAt(i));
        prev =  convert(s.charAt(i-1));
        if(curr<=prev){
            number+=curr;
        }else{
            number = number-(prev*2) +curr
            
        }
    }
    return number
};

const convert = function(r){
    switch(r){
        case 'I':return 1;
         case 'V':return 5;
         case 'X':return 10;
         case 'L':return 50;
         case 'C':return 100;
         case 'D':return 500;
         case 'M':return 1000;
        default:return -1 
        
    }
}