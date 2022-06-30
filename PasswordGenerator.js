function passwordGenerator(arr) {
    let concatenatedStrings = arr[0] + arr[1];
    concatenatedStrings = concatenatedStrings.toLowerCase();
    let thirdStringToUpperCase = arr[2].toUpperCase();
    let concatenatedStringsAsArr = concatenatedStrings.split('');
    let isFinished = false;

    for (let i = 0; i < thirdStringToUpperCase.length; i++) {

        for (let j = 0; j < concatenatedStringsAsArr.length; j++) {

            if (concatenatedStringsAsArr[j] == 'a' ||
                concatenatedStringsAsArr[j] == 'e' ||
                concatenatedStringsAsArr[j] == 'i' ||
                concatenatedStringsAsArr[j] == 'o' ||
                concatenatedStringsAsArr[j] == 'u') {
                concatenatedStringsAsArr[j] = thirdStringToUpperCase[i];

                if (j == concatenatedStringsAsArr.length - 1) {
                    isFinished = true;
                }
                break;
            }
            if (j == concatenatedStringsAsArr.length - 1) {
                isFinished = true;
            }
        }
        if (!isFinished && i == thirdStringToUpperCase.length - 1) {
            i = -1;
        }
        if (isFinished) {
            break;
        }
    }

    concatenatedStringsAsArr = concatenatedStringsAsArr.reverse();

    console.log(`Your generated password is ${concatenatedStringsAsArr.join('')}`);
}
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute']);