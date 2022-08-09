function fizzbuzz() {
    console.log('FizzBuzz!!!!!!!!!!');
    console.log('==================');
    console.log('Fizz- multiples of three');
    console.log('Buzz-multiplesof five');
    console.log('Bang-multiples of seven');
    console.log('Bong-multiple of 11');

    for (let i = 1; i <= 100; i++) {

        let displayName = "";

        if (MultipleOf11(i)) {
            console.log('Bong');
            i++;
        }
        if (MultipleOf3(i)) {
            displayName += 'Fizz';
        }
        if (MultipleOf5(i)) {
            displayName += 'Buzz';
        }
        if (Multipleof7(i)) {
            displayName += 'Bang';
        }
        if (displayName === '') {
            displayName += i.toString();
        }

        console.log(displayName);
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

fizzbuzz();