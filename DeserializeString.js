function deserializeString(input) {
    let arr = [];
    let command = input.shift();

    while (command != 'end') {
        let charAndIndexes = command.split(':');
        let char = charAndIndexes.shift();
        let indexes = charAndIndexes.shift().split('/');

        for (let index of indexes) {
            index = Number(index);
            arr[index] = char;
        }
        command = input.shift();
    }

    console.log(arr.join(''));
}
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']
);