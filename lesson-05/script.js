// array [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// Find the sum and number of positive elements. sumPositiveItems countPositiveItems
// Find the multiplication of positive elements. multiplicationPositiveItems
// Determine the number of negative elements. countNegativeItems
// Find the minimum element of the array and its ordinal number. minimumItem minimumItemOrder
// Find the maximum element of the array and its ordinal number. maximumItem maximumItemOrder
// Find the number of odd positive elements. numberOddPositiveItems
// Find the number of even positive elements. numberEvenPositiveItems
// Find the sum of odd positive elements. sumOddPositiveItems
// Find the sum of even positive elements. sumEvenPositiveItems

const array = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sumPositiveItems = 0;
let countPositiveItems = 0;
let multiplicationPositiveItems = 0;
let countNegativeItems = 0;
let minimumItem = array[0];
let minimumItemOrder = 0;
let maximumItem = array[0];
let maximumItemOrder = 0;
let numberOddPositiveItems = 0;
let numberEvenPositiveItems = 0;
let sumOddPositiveItems = 0;
let sumEvenPositiveItems = 0;

for(let i = 0; i <= array.length; i++) {
    if (array[i] > 0) {
        sumPositiveItems += array[i];                   // Find the sum of positive elements
        countPositiveItems++;                           // Find the number of positive elements
        multiplicationPositiveItems *= array[i];        // Find the multiplication of positive elements
    }
    if (array[i] < 0) {
        countNegativeItems++;                           // Find the number of negative elements
    }
    if(minimumItem > array[i]) {
        minimumItem =  array[i];                        // Find the minimum element of the array and its ordinal number
        minimumItemOrder = i;
    }
    if(maximumItem < array[i]) {
        maximumItem =  array[i];                        // Find the maximum element of the array and its ordinal number
        maximumItemOrder = i;
    }
    if((array[i] % 2 !== 0) && (array[i] > 0)) {
        numberOddPositiveItems++;                       // Find the number of odd positive elements
        sumOddPositiveItems += array[i];                // Find the sum of odd positive elements
    } else if((array[i] % 2 === 0) && (array[i] > 0)) {
        numberEvenPositiveItems++;                      // Find the number of even positive elements
        sumEvenPositiveItems += array[i];               // Find the sum of even positive elements
    }
}

console.log('Sum of positive array elements = ', sumPositiveItems);
console.log('Number of positive array elements = ', countPositiveItems);
console.log('Multiplication of positive items = ', multiplicationPositiveItems);
console.log('Negative array items = ', countNegativeItems);
console.log('Minimum array element = ', minimumItem);
console.log('Ordinal number of the minimum array element = ', minimumItemOrder);
console.log('Maximum array element = ', maximumItem);
console.log('Sequential number of the maximum array element = ', maximumItemOrder);
console.log('Number of odd positive items = ', numberOddPositiveItems);
console.log('Number of even positive items = ', numberEvenPositiveItems);
console.log('Sum of odd positive items = ', sumOddPositiveItems);
console. log('Sum of even positive items = ', sumEvenPositiveItems);
