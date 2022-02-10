const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;
    
    for (let i = 0; i <= target.length; i++) {
        if (!table[i]) continue;
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) !== word) continue;
            table[i + word.length] = true;
        }
    }
    return table[target.length];
}