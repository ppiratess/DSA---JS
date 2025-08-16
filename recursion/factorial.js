// function factorial(number) {
//     let total = 1;

//     for (let i = number; i > 0; i--) {
//         console.log('number', number);
//         total *= number;
//         number--;
//     }

//     return total;
// }

// console.log('fff', factorial(5));

function factorial(number) {
    if (number === 1) return 1;

    return number * factorial(number - 1);
}

console.log('fff', factorial(5));
