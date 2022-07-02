function melrahShake(arr) {
    let string = arr[0];
    let pattern = arr[1];

    while (pattern.length > 0) {

        let startIndexOfCorrespondence = string.indexOf(pattern);

        if (startIndexOfCorrespondence != -1) {
            string = string.split('');
            string.splice(startIndexOfCorrespondence, pattern.length);
            string = string.join('');
        } else {
            break;
        }
        let lastStartIndexOfCorrespondence = string.lastIndexOf(pattern);

        if (lastStartIndexOfCorrespondence != -1) {
            string = string.split('');
            string.splice(lastStartIndexOfCorrespondence, pattern.length);
            console.log('Shaked it.');
            string = string.join('');
        } else {
            break;
        }
        pattern = pattern.split('');
        pattern.splice(Math.floor(pattern.length / 2), 1);
        pattern = pattern.join('');
    }

    console.log('No shake.');
    console.log(string);

}
melrahShake(['##mtm!!mm.mm*mtm.#',
    'mtm']
);