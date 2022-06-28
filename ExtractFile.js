function extractFile(str) {
    str = str.split('.');
    let extension = str.pop();
    str = str.join('.');
    str = str.split('\\');
    let fileName = str.pop();
    console.log(`File name: ${fileName}\nFile extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx');