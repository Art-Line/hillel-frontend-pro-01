// Write loops that can:

// - Output numbers from 20 to 30 separated by a space, using a step of 0.5 (20 20.5 21 21.5….)

const task1 = document.querySelector('#task-01');
let memory1 = '';
for (let i = 20; i <= 30; i = i + 0.5) {
    memory1 += i + ' ';
}
task1.textContent = memory1;


// -One dollar costs 27 hryvnias. Display data with a cost calculation of 10, 20, 30 ... 100 dollars

const task2 = document.querySelector('#task-02');
const price = 27;
let memory2 = '';
for(let i = 10; i <= 100; i = i + 10) {
    memory2 += price * i + '<br>';
}
task2.innerHTML = memory2;


// - An integer is given. Print all integers from 1 to 100 whose square does not exceed N
const task3 = document.querySelector('#task-03');
const N = 56;
let memory3 = '';
for(let i = 1; i <= 100; i++) {
    if(i*i < N) memory3 += i + ' ';
}

task3.innerHTML = memory3;


// - An integer is given. Find out if it is prime (
// a prime is a number greater than 1 that has no other divisors except 1 and itself).

const task4 = document.querySelector('#task-04');
const data = 97;
let memory4 = 0;
let str = ''
for(let i = 1; i <= data; i++) {
   if(data % i === 0) {
        memory4++
   }
}
if (memory4 == 2) {
    str = 'это число простоe';
} else {
    str = 'это число НЕ простоe';
}

task4.innerHTML = str;

// -Given some number. Determine if this number can be obtained by raising the number 3 to some power.
// (For example, the numbers 9, 81 can be obtained, but 13 cannot)

const task5 = document.querySelector('#task-05');
const insetData = 12;
const number = 3;
let memory = 1;
let result = false;
for (let i = 1; i < insetData; i++) {
    memory *= number;
    console.log(memory)
    if(memory === insetData) {
        result = true;
        break;
    }
}

task4.textContent = result;