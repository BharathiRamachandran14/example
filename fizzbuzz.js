const readline = require('readline-sync');
function fizzbuzz() {
    console.log('FizzBuzz!!!!!!!!!!');
    console.log('==================');
    console.log('\nBang-multiples of 7');
    console.log('Bong-multiple of 11');
    console.log('__________________________');

    console.log('\nHow many numbers do you want to go upto?');
    let numbersToPrint = + readline.prompt();
    console.log('\nOut of the below options, select one each for the following numbers:');
    console.log(' *Fizz\n *Buzz \n *Frezz');
    console.log('What do you want to print for number 3?');
    let wordFor3 = readline.prompt();
    console.log('What do you want to print for number 5?');
    let wordFor5 = readline.prompt();
    console.log('What do you want to print for number 13?');
    let wordFor13 = readline.prompt();

    for (let i = 1; i <= numbersToPrint; i++) {

        let displayName = [];

        if (MultipleOf11(i) && MultipleOf13(i)) {
            console.log(wordFor13 + 'Bong');
            i++;
        } else if (MultipleOf11(i)) {
            console.log('Bong');
            i++;
        }
        if (MultipleOf3(i)) {
            displayName.push(wordFor3);
        }
        if (MultipleOf13(i)) {
            displayName.push(wordFor13);
        }
        if (MultipleOf5(i)) {
            displayName.push(wordFor5);
        }
        if (Multipleof7(i)) {
            displayName.push('Bang');
        }
        if (displayName.length === 0) {
            displayName.push(i);
        }
        if (MultipleOf17(i)) {
            displayName.reverse();
        }

        console.log(displayName.join(''));
    }
}

function MultipleOf3(number) {
    return number % 3 === 0;
}

function MultipleOf5(number) {
    return number % 5 === 0;
}

function Multipleof7(number) {
    return number % 7 === 0;
}

function MultipleOf11(number) {
    return number % 11 === 0;
}

function MultipleOf13(number) {
    return number % 13 === 0;
}

function MultipleOf17(number) {
    return number % 17 === 0;
}

fizzbuzz();