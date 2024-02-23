const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const n = parseInt(line); 
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i)); 
    }
    rl.close();
}).on('close', function () {
    process.exit();
});