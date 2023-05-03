// Write loops that can:

// -Output numbers from 10 to 20 on the page in one line separated by commas

const task1 = document.querySelector('#task-01');
let memory1 = '';
for (let i = 10; i <= 20; i++) {
    memory1 += i + ', ';
}
task1.textContent = memory1;


// -Output squares of numbers from 10 to 20

const task2 = document.querySelector('#task-02');
let memory2 = '';
for (let i = 10; i <= 20; i++) {
    memory2 += i * i + ' ';
}
task2.textContent = memory2;


// -Display the multiplication table for 7

const task3 = document.querySelector('#task-03');
let memory3 = '';
for (let i = 1; i <= 10; i++) {
    memory3 += `${i} *  7 = ${i * 7} <br>`;
}
task3.innerHTML = memory3;


// -Find the sum of all integers from 1 to 15

const task4 = document.querySelector('#task-04');
let summa4 = 0;
for (let i = 1; i <= 15; i++) {
    summa4 += i;
}
task4.textContent = summa4;


// -Find the product of all integers from 15 to 35

const task5 = document.querySelector('#task-05');
let multi5 = 1;
for (let i = 15; i <= 35; i++) {
    multi5 *= i;
}
task5.textContent = multi5;


// -Find the arithmetic mean of all integers from 1 to 500

const task6 = document.querySelector('#task-06');
let summa6 = 0;
for (let i = 1; i <= 500; i++) {
    summa6 += i;
}
task6.textContent = summa6 / 500;


// -Display the sum of only even numbers in the range from 30 to 80

const task7 = document.querySelector('#task-07');
let summa7 = 0;
for (let i = 30; i <= 80; i++) {
    if(i % 2 === 0) {
        summa7 += i;
    }
}
task7.textContent = summa7;

// -Display all numbers in the range from 100 to 200 divisible by 3

const task8 = document.querySelector('#task-08');
let memory8 = '';
for (let i = 100; i <= 200; i++) {
    if(i % 3 === 0) {
        memory8 += i + ' ';
    }
}
task8.textContent = memory8;


// -Given a natural number. Find and display all its divisors on the page.

const natural = 16;
let memory9 = 0;

for(let i = 0; i <= natural; i++) {
    if(natural % i === 0 ) {
        memory9++;
    }
}

document.querySelector('#task-09').textContent = memory9;


// -Determine the number of its even divisors

let memory10 = 0;
for(let i = 0; i <= natural; i++) {
    if((natural % i === 0) && (i % 2 === 0)) {
        memory10++;
    }
}

document.querySelector('#task-10').textContent = memory10;


// -Find the sum of its even divisors

let memory11 = 0;
for(let i = 0; i <= natural; i++) {
    if((natural % i === 0) && (i % 2 === 0)) {
        memory11 += i;
    }
}

document.querySelector('#task-11').textContent = memory11;


// -Print the complete multiplication table from 1 to 10

let memory12 = '';
memory12 += '<table class="table">'
for(let i = 1; i <= 9; i++) {
    memory12 += '<tr>'
    for(let j = 1; j <= 9; j++) {
        memory12 += '<td>' + j + ' * ' + i + ' = ' + i*j + '</td>';
    }
    memory12 += '</tr>'
}
memory12 += '</table>'
document.querySelector('#task-12').innerHTML = memory12;