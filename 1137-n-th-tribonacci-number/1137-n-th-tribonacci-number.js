/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let num1=0,num2=1,num3=1;
    if(n<2){
        return n
    }
    for(let i=3;i<=n;i++){
        let temp = num1+num2+num3;
        num1=num2;
        num2=num3;
        num3=temp;
    }
    return num3
};
