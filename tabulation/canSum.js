const canSum = (target, numbers) => {
    const table = Array(target + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target; i++) {
        if (!table[i]) continue;
        for (let num of numbers) if (!(i + num > target)) table[i + num] = true;
    }

    return table[target]
}
