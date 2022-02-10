const canConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;
    
    for (let word of wordBank) {
        if (target.indexOf(word) !== 0) continue;
        if (canConstruct(target.slice(word.length), wordBank, memo))
            return memo[target] = true;
    }
    return memo[target] = false;
}


console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));