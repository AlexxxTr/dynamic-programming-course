const howSum = (target, numbers) => {
    const table = Array(target + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= target; i++) 
        if (table[i] !== null) 
            for (let num of numbers) 
                table[i + num] = [...table[i], num];
    
    return table[target];
}