// Implement a recursive function that raises a number to a power.
// The number to be raised to the membership power as the first argument in the function
// excluded as the second argument in the function
// pow(num, degree)

function pow(num, degree) {
    if (degree > 1) {
        return num * pow(num,  degree - 1)
    }
    return num;
}

let result = pow(2, 4);
console.log(result);
