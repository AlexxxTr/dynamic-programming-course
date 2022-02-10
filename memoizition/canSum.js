const canSum = (target, numbers, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === 0) return true;
    if (target < 0) return false;

    for (let num of numbers)
        if (canSum(target - num, numbers, memo)) 
            return memo[target] = true
        
    return memo[target] = false
}


console.log(canSum(3214, [7, 14]));