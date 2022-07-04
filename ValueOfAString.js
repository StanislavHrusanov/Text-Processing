function valueOfAString(arr) {

    let string = arr.shift();
    let upperOrLowerCase = arr.pop();

    let sum = 0;

    if (upperOrLowerCase == 'UPPERCASE') {

        for (let i = 0; i < string.length; i++) {

            if (string[i].charCodeAt() > 64 && string[i].charCodeAt() < 91) {
                sum += string[i].charCodeAt();
            }
        }
    } else {

        for (let i = 0; i < string.length; i++) {

            if (string[i].charCodeAt() > 96 && string[i].charCodeAt() < 123) {
                sum += string[i].charCodeAt();
            }
        }
    }

    console.log(`The total sum is: ${sum}`);
}
valueOfAString(['HelloFromMyAwesomePROGRAM',
    'LOWERCASE']
);