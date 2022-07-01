function replaceRepeatingChars(str) {
    str = str.split('');
    for (let i = 0; i < str.length; i++) {
        let currLetter = str[i];
        let nextLetter = str[i + 1];
        if (currLetter == nextLetter) {
            str.splice(i, 1);
            i--;
        }
    }
    console.log(str.join(''));
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');