const countConcstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) !== 0) continue;
        totalCount += countConcstruct(target.slice(word.length), wordBank, memo);
    }

    return memo[target] = totalCount;
}