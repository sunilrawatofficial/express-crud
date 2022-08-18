function forkCompute() {
    console.log("=====forkCompute");
    let sum = 0;
    for(let i = 0; i < 10e9; i++){
        sum += i;
    }
    return sum;
} 

process.on('message', (message) => {
    if(message === 'start'){
        const sum = forkCompute();
        process.send(sum)
    }
})