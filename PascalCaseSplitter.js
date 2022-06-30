function pascalCaseSplitter(str) {
    let strInLowerCase = str.toLowerCase();
    let result = str[0];

    for (let i = 1; i < str.length; i++) {

        if (str[i] == strInLowerCase[i]) {
            result += str[i];
        } else {
            result += ', ' + str[i];
        }
    }
    console.log(result);
}
pascalCaseSplitter('ThisIsSoAnnoyingToDo');