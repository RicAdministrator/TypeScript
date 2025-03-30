// 8 kyu - Basic variable assignment
// tsc output
/*
let a = "code";
let b = "wa.rs";
let name = a + b;
*/

// 8 kyu - String Templates - Bug Fixing #5
// tsc output
/*
function buildString(...template) 
{
    return 'I like ' + template.join(", ") + '!';
}
*/

// 8 kyu - Sum Mixed Array
// tsc output
/*
function sumMix(x) {
    let output = 0;
    x.forEach(function (value) {
        if (typeof value === 'number') {
            output += value;
        }
        else {
            output += parseInt(value);
        }
    });
    return output;
}
*/

// 8 kyu - Well of Ideas - Easy Version
// tsc output
/*
function well(x) {
    let numOfGood = 0;
    let output = "";
    x.forEach(function (value) {
        if (value == "good")
            numOfGood += 1;
    });
    if (numOfGood == 0)
        output = "Fail!";
    else if (numOfGood > 2)
        output = "I smell a series!";
    else
        output = "Publish!";
    return output;
}
*/

// 8 kyu - The Wide-Mouthed frog!
// tsc output
/*
function mouthSize(animal) {
    return animal.toLowerCase() === "alligator" ? "small" : "wide";
}
*/

// 8 kyu - Beginner - Lost Without a Map
// tsc output
/*
function maps(x) {
    let output = [];
    x.forEach(function (value) {
        output.push(value * 2);
    });
    return output;
}
*/

// 8 kyu - Opposites Attract
// tsc output
/*
function lovefunc(flower1, flower2) {
    if (flower1 === 0)
        flower1 = 2;
    if (flower2 === 0)
        flower2 = 2;
    return (flower1 % 2 === 0 && flower2 % 2 != 0) || (flower2 % 2 === 0 && flower1 % 2 != 0);
}
*/

// 8 kyu - Grasshopper - Personalized Message
// tsc output
/*
function greet(name, owner) 
{
    return name === owner ? "Hello boss" : "Hello guest";
}
*/

// 8 kyu - Stringy Strings
// tsc output
/*
const stringy = (n) => 
{
    let output = "";

    for (let x = 1; x <= n; x++) 
    {
        output += x % 2 === 0 ? "0" : "1";
    }

    return output;
};
*/

// 8 kyu - Transportation on vacation
// tsc output
/*
function rentalCarCost(d) {
    let output = 0;
    if (d > 0 && d < 3) {
        output = d * 40;
    }
    else if (d < 7) {
        output = (d * 40) - 20;
    }
    else {
        output = (d * 40) - 50;
    }
    return output;
}
*/

// 4 kyu - Snail
// tsc output
/*
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
let arExpected1 = snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
let arExpected2 = snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]);
let arExpected3 = snail([[]]);
let arExpected4 = snail([[1]]);
console.log("stop");
*/