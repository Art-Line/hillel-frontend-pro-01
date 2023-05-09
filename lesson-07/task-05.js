// Create a function that removes from the string all the characters that we passed as the second argument.
// 'func("hello world", ['l', 'd'])' will return "heo wor" to us.
// The source string and characters to be deleted are specified by the user

function enterSentence() {
    let sentence = prompt('Enter sentence');
    return sentence;
}

function enterData() {
    let array = [];
    let k;
    do {
        array.push(prompt('Enter symbol'));
        k = confirm('Enter another one?')
    } while (k);
    return array;
}

// function deleteElem(string, data) {
//     const modifiedString = string.split('').filter(char => !data.includes(char)).join('');
//     return modifiedString;
// }

function deleteElem(strings, data) {
    let string = strings.split('');
    let newString = string;
    for (let i = 0; i < string.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (string[i] === data[j]) {
                newString.splice(i, 1);
            }
        }
    }
    return newString.join('');
}

console.log(deleteElem(enterSentence(), enterData()));
