/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    for(let i =cost.length-3;i>-1;i--)
        cost[i]+=cost[i+1]<cost[i+2]?cost[i+1]:cost[i+2];
    return Math.min(cost[0],cost[1]) 
};