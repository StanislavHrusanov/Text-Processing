function asciiSumator(arr) {
    let firstChar = arr.shift();
    let secondChar = arr.shift();
    let string = arr.shift();
    let startCharNumber = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let endCharNumber = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    let sum = 0;

    for (let i = 0; i < string.length; i++) {

        if (string[i].charCodeAt() > startCharNumber && string[i].charCodeAt() < endCharNumber) {
            sum += string[i].charCodeAt();
        }
    }
    console.log(sum)
}
asciiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']
);