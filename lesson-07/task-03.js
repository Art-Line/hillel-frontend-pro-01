// Write a function doMath(x, znak, y) that takes 3 arguments: numbers x and y, string znak.
// Variable znak can contain: +, -, *, /, %, ^ (degree).
// Print the result of the math operation specified in the znak variable.
// Both numbers and sign are obtained from the user.

function doMath(x, sign, y) {
    switch (sign) {
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '*':
            return x * y;
            break;
        case '/':
            return x / y;
            break;
        case '%':
            return x % y;
            break;
        case '^':
            return x ** y;
            break;
        default:
            return 'no sign found';
    }
}

function getData() {
    const x = Number(prompt('Enter first number'));
    const znak = prompt('Enter math znak');
    const y = Number(prompt('Enter second number'));
    return doMath(x, znak, y);
}

alert(getData());
