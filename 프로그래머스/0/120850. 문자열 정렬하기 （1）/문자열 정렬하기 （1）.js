const solution = (my_string) => {
    let result = [];
    my_string
        .split("")
        .map((idx) => (!isNaN(idx) ? result.push(parseInt(idx)) : 0));
    return result.sort((x, y) => x - y);
}