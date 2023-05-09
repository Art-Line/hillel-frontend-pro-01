// Write a function to fill a two-dimensional array with user data.
// The length of the main array and internal arrays is set by the user.
// The values ​​of all elements of all arrays are set by the user.

function createAndFillArray() {
    let x = +prompt('Enter main array size');
    let y = +prompt('Enter second array size');
    let arrayMain = new Array(x);
    for (let i = 0; i < arrayMain.length; i++) {
        arrayMain[i] = new Array(y);
        for (let j = 0; j < arrayMain[i].length; j++) {
            arrayMain[i][j] = prompt('Enter data');
        }
    }
    return arrayMain;
}

console.log(createAndFillArray());
