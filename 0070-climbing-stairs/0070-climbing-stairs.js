/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let stair1 = 1,stair2 = 2;
    if(n==1){
        return 1;
        
    }
    for(let i =3;i<=n;i++){
        let temp = stair2;
        stair2+=stair1;
         stair1=temp;
    }
    return stair2;
};