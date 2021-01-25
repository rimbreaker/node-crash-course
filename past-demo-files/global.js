//console.log(global);

setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int)
}, 3000);

const int = setInterval(() => {
    console.log("dupa")
}, 1000);

console.log(__dirname);
console.log(__filename);