function phoneticNumber(number) {
    let phoneticsList = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    let phonetics = "";
    number = '' + number;
    for (x in number) {
        phonetics += phoneticsList[parseInt(number[x])];
    }
    process.stdout.write(phonetics);
}

phoneticNumber(10);