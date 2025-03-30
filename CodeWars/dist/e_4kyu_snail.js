"use strict";
e_4kyu_snail();
function e_4kyu_snail() {
    let arExpected1 = snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    console.log(arExpected1);
    let arExpected2 = snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]);
    console.log(arExpected2);
    let arExpected3 = snail([[]]);
    console.log(arExpected3);
    let arExpected4 = snail([[1]]);
    console.log(arExpected4);
}
function snail(array) {
    let output = [];
    let counter1 = 0;
    let counter2 = array[0].length - 1;
    let counter3 = 1;
    let counter4 = array[0].length - 2;
    let outputIndex = 0;
    do {
        for (let a = counter1; a <= counter2; a++) {
            output[outputIndex] = array[counter1][a];
            outputIndex++;
        }
        for (let a = counter3; a <= counter2; a++) {
            output[outputIndex] = array[a][counter2];
            outputIndex++;
        }
        for (let a = counter4; a >= counter1; a--) {
            output[outputIndex] = array[counter2][a];
            outputIndex++;
        }
        for (let a = counter4; a >= counter3; a--) {
            output[outputIndex] = array[a][counter1];
            outputIndex++;
        }
        counter1++;
        counter2--;
        counter3++;
        counter4--;
    } while (outputIndex < (array[0].length * array[0].length));
    return output;
}
//# sourceMappingURL=e_4kyu_snail.js.map