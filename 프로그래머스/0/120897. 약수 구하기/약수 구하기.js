const solution = (n) => {
    let arr = [];
    for(let i = 0; i <= n; i++) {
        n % i === 0 ? arr.push(i) : 0
    }
    return arr.sort((x, y) => x - y)
}