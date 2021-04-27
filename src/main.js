function phoneticNumber(number) {
    let phoneticsList = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    let phonetics = "";
    number = '' + number;
    for (let x in number) {
        phonetics += phoneticsList[parseInt(number[x])];
    }
    process.stdout.write(phonetics);
}

const args = process.argv.slice(2);
let culledArray = [];

args.forEach( function (item) {
    if(!(item < 0)) {
        culledArray.push(item)
    }
});

phoneticNumber(culledArray.shift());

let x = 0, count = culledArray.length;
while (x < count && count !== 0) {
    process.stdout.write(", ");
    phoneticNumber(culledArray.shift());
    x++;
}