function couuntStringOccurrences(text, word) {
    let textAsArr = text.split(' ');
    let counter = 0;
    for (let str of textAsArr) {
        if (str == word) {
            counter++;
        }
    }
    console.log(counter);
}
couuntStringOccurrences('This is a word and it also is a sentence',
    'is'
);