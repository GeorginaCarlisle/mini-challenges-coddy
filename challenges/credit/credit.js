function validateCreditCard(cardNumber) {
	const cardNumberString = cardNumber.toString();
    const cardNumberArray = cardNumberString.split("");
    const numberLength = cardNumberString.length;
    const odd = (numberLength) % 2;

    let arrayToDouble = [];
    let doubledArray = [];
    let arrayOfOthers = [];

    for (i = 0; i < numberLength; i++) {
        let digit = Number.parseInt(cardNumberArray[i]);
        if (odd === 0) {
            if (i % 2 === 0){
                arrayToDouble.push(digit);
            } else {
                arrayOfOthers.push(digit);
            }
        } else {
            if (i % 2 === 1){
                arrayToDouble.push(digit);
            } else {
                arrayOfOthers.push(digit);
            }
        }
    }

    for (k = 0; k < arrayToDouble.length; k++) {
        const doubledDigit = arrayToDouble[k] * 2;
        if (doubledDigit > 9) {
            const strDigit = doubledDigit.toString();
            const digitsArray = strDigit.split("");
            for (m = 0; m < digitsArray.length; m++) {
                const singleDigit = Number.parseInt(digitsArray[m]);
                doubledArray.push(singleDigit);
            }
        } else {
            doubledArray.push(doubledDigit);
        }
    }

    let sum = 0;

    for (n = 0; n < doubledArray.length; n++) {
        sum += doubledArray[n];
    }
    for (p = 0; p < arrayOfOthers.length; p++) {
        sum += arrayOfOthers[p];
    }

    if (sum % 10 === 0) {
        if (numberLength === 15 && cardNumberArray[0] == 3) {
            if (cardNumberArray[1] == 4 || cardNumberArray[1] == 7){
                console.log("AMEX");
            } else {
                console.log("INVALID");
            }
        } else if (numberLength === 16 && cardNumberArray[0] == 5) {
            console.log("MASTERCARD");
        } else {
            console.log("INVALID");
        }
    } else {
        console.log("INVALID");
    }
}

module.exports = { validateCreditCard };