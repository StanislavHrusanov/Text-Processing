function serializeString(input) {

    let str = input[0];
    let chars = [];

    for (let i = 0; i < str.length; i++) {
        if (!chars.includes(str[i])) {
            chars.push(str[i]);
        }
    }

    for (let char of chars) {
        let line = '';

        for (let i = 0; i < str.length; i++) {

            if (char == str[i]) {
                line += i + '/'
            }
        }
        console.log(`${char}:${line.substring(0, line.length - 1)}`);
    }
}
serializeString(["avjavamsdmcalsdm"]);