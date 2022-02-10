const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill().map(() => []);
    table[0] = [[]];

    for (let i = 0; i <= target.length; i++) {
        if (table[i].length === 0) continue;
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) !== word) continue;
            const newComb = table[i].map(sub => [...sub, word]);
            table[i + word.length].push(...newComb);
        }
    }
    return table[target.length];
}
