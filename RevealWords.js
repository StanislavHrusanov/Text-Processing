function revealWords(words, text) {
    words = words.split(', ');
    text = text.split(' ');

    for (let i = 0; i < text.length; i++) {
        let el = text[i];
        if (el.includes('*')) {
            let lengthOfEl = el.length;
            for (let word of words) {
                if (word.length == lengthOfEl) {
                    text[i] = word;
                    break;
                }
            }
        }
    }

    console.log(text.join(' '));
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);