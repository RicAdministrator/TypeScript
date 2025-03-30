// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

e_4kyu_snail();

function e_4kyu_snail(): void {
    // [1, 2, 3, 6, 9, 8, 7, 4, 5]
    let arExpected1: number[] = snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    console.log(arExpected1);

    // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
    let arExpected2: number[] = snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]);
    console.log(arExpected2);

    // []
    let arExpected3: number[] = snail([[]]);
    console.log(arExpected3);
    
    // [1]
    let arExpected4: number[] = snail([[1]]);
    console.log(arExpected4);
}

function snail(array: number[][]) : number[] {
    let output: number[]  = [];
    let counter1: number = 0;
    let counter2: number = array[0].length - 1;
    let counter3: number = 1;            
    let counter4: number = array[0].length - 2;
    let outputIndex: number = 0;

    do {
        for (let a: number = counter1; a <= counter2; a++) {
            output[outputIndex] = array[counter1][a];
            outputIndex++;
        }

        for (let a: number = counter3; a <= counter2; a++) {
            output[outputIndex] = array[a][counter2];
            outputIndex++;
        }

        for (let a: number = counter4; a >= counter1; a--) {
            output[outputIndex] = array[counter2][a];
            outputIndex++;
        }

        for (let a: number = counter4; a >= counter3; a--) {
            output[outputIndex] = array[a][counter1];
            outputIndex++;
        }

        counter1++;
        counter2--;
        counter3++;
        counter4--;
    } while(outputIndex < (array[0].length * array[0].length))

    return output;
}