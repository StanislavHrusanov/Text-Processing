function stringSubstring(word, text) {
    let wordToLowerCase = word.toLowerCase();
    let textToLowerCase = text.toLowerCase();
    textToLowerCase = textToLowerCase.split(' ');
    textToLowerCase.includes(wordToLowerCase) ? console.log(word) : console.log(`${word} not found!`);
}
stringSubstring('python',
    'JavaScript is the best programming language'
);