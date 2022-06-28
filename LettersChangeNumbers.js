function lettersChangeNymbers(sequence) {

    let strings = defineStrings(sequence);
    let sum = 0;

    for (let string of strings) {

        let stringAsArr = string.split('');
        let letterBeforeNumber = stringAsArr.shift();
        let letterAfterNumber = stringAsArr.pop();
        let number = Number(stringAsArr.join(''));

        if (letterBeforeNumber == letterBeforeNumber.toUpperCase()) {
            number = number / findLetterPosition(letterBeforeNumber);

        } else {
            number = number * findLetterPosition(letterBeforeNumber);
        }

        if (letterAfterNumber == letterAfterNumber.toUpperCase()) {
            number = number - findLetterPosition(letterAfterNumber);

        } else {
            number = number + findLetterPosition(letterAfterNumber);
        }

        sum += number;
    }

    console.log(sum.toFixed(2));

    function findLetterPosition(letter) {

        letter = letter.toLowerCase();
        let alphabet = ' abcdefghijklmnopqrstuvwxyz';

        for (let position = 1; position <= alphabet.length; position++) {

            if (letter == alphabet[position]) {
                return position;
            }
        }
    }

    function defineStrings(sequence) {

        let sequenceAsArr = sequence.split(' ');
        sequenceAsArr = sequenceAsArr.filter(str => str != '');
        return sequenceAsArr;
    }
}
lettersChangeNymbers('P34562Z q2576f   H456z');