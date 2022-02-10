const bestSum = (target, numbers) => {
    const table = Array(target + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= target; i++) {
        if (!table[i]) continue;
        for (let num of numbers) {
            const comb = [...table[i], num];
            if (!table[i + num] || comb.length < table[i + num].length)
                table[i + num] = comb;
        }
    }
    return table[target];
}