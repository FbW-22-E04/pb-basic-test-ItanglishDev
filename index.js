// Add answers here 
// Ex 1

function nameOfCity(cityName) {
    const secondThreeLetters = cityName.slice(1, 3);
    const firstLetter = cityName.slice(0, 1).toUpperCase();
    const comparisonLetters = firstLetter + secondThreeLetters;
    // console.log(comparisonLetters);
    if (comparisonLetters == "Los" || comparisonLetters == 'New') {
        console.log(cityName);
    } else {
        console.log("The city name does not begin with Los or New");
    }

}
nameOfCity('loswaa')




// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};

