function hardWords(input) {
    let letter = input.shift().split(' ');
    let words = input.shift();

    for (let i = 0; i < letter.length; i++) {
        let currWord = letter[i];

        if (currWord.includes('_')) {
            currWord = currWord.split('');

            if (currWord[currWord.length - 1] != '_') {
                let lastSymbol = currWord.splice(-1);

                for (let hardWord of words) {

                    if (hardWord.length == currWord.length) {
                        letter[i] = hardWord + lastSymbol;
                        break;
                    }
                }

            } else {
                for (let hardWord of words) {

                    if (hardWord.length == currWord.length) {
                        letter[i] = hardWord;
                        break;
                    }
                }
            }
        }
    }
    console.log(letter.join(' '));
}
hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);