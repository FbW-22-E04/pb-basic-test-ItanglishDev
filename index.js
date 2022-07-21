// Add answers here 
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




// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

