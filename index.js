// Add answers here 
// Conditional Algorithms
// Ex 1

function nameOfCity(cityName) {
    const secondThreeLetters = cityName.slice(1, 3);
    const firstLetter = cityName.slice(0, 1).toUpperCase();
    const comparisonLetters = firstLetter + secondThreeLetters;
    // console.log(comparisonLetters);
    if (comparisonLetters == "Los" || comparisonLetters == 'New') {
        return cityName;
    } else {
        return "The city name does not begin with Los or New";
    }

}
console.log(nameOfCity('loswaa'))

//  EX 2

function isDivisible(num) {
    if (num % 100 == 0) {
        return true;
    }
    return false;

}

console.log(isDivisible(110))

// EX 4

function isRaining(weather) {
    weather == true ? console.log("wet day - you need an umbrella") : console.log("dry day - leave your umbrella at home");
}

isRaining(true)

//   Loops
// EX 1

function geometricalSequence(number) {
    const stringConcat = [number];
    let stringConcatNew = [];
    for (let i = 1; i < 9; i++) {
        number *= 2;
        stringConcat.push(number);

    } stringConcatNew = stringConcat.join(' ');
    return stringConcatNew;
}

console.log(geometricalSequence(1));

// EX 2

function multiplesOfThree() {
    let counter = "";
    let counterArray = [];
    for (let i = 1; i < 6; i++) {
        let numb = 3 * i;
        counterArray.push(numb);
    } return counterArray.join(' ');
}

console.log(multiplesOfThree(3));


// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

