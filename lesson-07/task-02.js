// Write a characteristic that takes 1 parameter.
// At the first call, it remembers it, at the second it sums up the passed parameter with the one passed for the first time, and so on.
// These are all closures, for example: sum(3) = 3 sum(5) = 8 sum(20) = 28

function sum() {
    let x = 0;
    return function (num) {
        x += num;
        return x;
    }
}
let rezult = sum();

console.log(rezult(3))
console.log(rezult(5))
console.log(rezult(20))
