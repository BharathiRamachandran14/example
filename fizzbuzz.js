function fizzbuzz() {
    console.log('FizzBuzz!!!!!!!!!!');
    console.log('==================');
    console.log('Fizz- multiples of three');
    console.log('Buzz-multiplesof five');
    console.log('Bang-multiples of seven')

    for (let i = 1; i <= 100; i++) {

        let displayName = "";

        if (MultipleOf3(i)) {
            displayName += 'Fizz';
        }
        if (MultipleOf5(i)) {
            displayName += 'Buzz';
        }
        if (Multipleof7(i)) {
            displayName += 'Bang';
        }
        if (!MultipleOf3(i) && !MultipleOf5(i) && !Multipleof7(i)) {
            displayName += i.toString();
        }

        console.log(displayName)
    }
}

function MultipleOf3(number) {
    if (number % 3 === 0) {
        return true;
    }
}

function MultipleOf5(number) {
    if (number % 5 === 0) {
        return true;
    }
}

function Multipleof7(number) {
    if (number % 7 === 0) {
        return true;
    }
}


fizzbuzz();