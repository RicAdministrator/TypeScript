// 8 kyu - Basic variable assignment
// https://www.codewars.com/kata/50ee6b0bdeab583673000025/train/typescript
/*
let a: string = "code";
let b: string = "wa.rs";
export var name = a + b;
console.log(name);
*/

// 8 kyu - String Templates - Bug Fixing #5
// https://www.codewars.com/kata/55c90cad4b0fe31a7200001f/train/typescript
/*
let outputA: string = buildString('Cheese', 'Milk', 'Chocolate');
// I like Cheese, Milk, Chocolate!

let outputB: string = buildString('Cheese','Milk');
// I like Cheese, Milk!

function buildString(...template: string[]) : string
{
    return 'I like ' + template.join(", ") + '!';
}

console.log("stop");
*/

// "noUnusedParameters": true
/*
function calculateTax(income: number) : number
{
    return 0;
}
*/

// "noImplicitReturns": true
/*
function calculateTax(income: number) 
{
    if (income < 50_000)    
        return income * 1.2;
}
*/

// "noUnusedLocals": true
/*
function calculateTax(income: number) : number
{
    let x;
    if (income < 50_000)    
        return income * 1.2;

    return income * 1.3;
}
*/

// 8 kyu - Sum Mixed Array
// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/typescript

/*let a: number = sumMix([9, 3, '7', '3']);

function sumMix(x: any[]): number 
{
    let output: number = 0;

    x.forEach(function (value) 
    {
        if (typeof value === 'number')
        {
            output += value;
        }
        else 
        {
            output += parseInt(value);
        }
    }); 

    return output;
}

console.log(a);*/

// 8 kyu - Well of Ideas - Easy Version
// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/typescript
/*
let a: string = well(['bad', 'bad', 'bad']); // 'Fail!'
let b: string = well(['good', 'bad', 'bad', 'bad', 'bad']); // Publish!
let c: string = well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']); // I smell a series!

function well(x: string[]): string
{
    let numOfGood: number = 0;
    let output: string = "";

    x.forEach(function (value) 
    {
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
// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/typescript
/*
function mouthSize(animal: string): string 
{
    return animal.toLowerCase() === "alligator" ? "small" : "wide";
}

let a: string = mouthSize("toucan"); // wide
let b: string = mouthSize("alligator"); // small
console.log("stop");
*/

// 8 kyu - Beginner - Lost Without a Map
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/typescript
/*
function maps(x: number[]): number[]
{
    let output: number[] = [];

    x.forEach(function (value) 
    {
        output.push(value * 2);
    });

    return output;
}
/*
let a: number[] = maps([1, 2, 3]); // [2, 4, 6]
console.log("stop");
*/

// 8 kyu - Opposites Attract
// https://www.codewars.com/kata/555086d53eac039a2a000083/train/typescript
/*
function lovefunc(flower1: number, flower2: number): boolean 
{
    if (flower1 === 0) flower1 = 2;

    if (flower2 === 0) flower2 = 2;

    return (flower1 % 2 === 0 && flower2 % 2 != 0) || (flower2 % 2 === 0 && flower1 % 2 != 0);
}
*/

// 8 kyu - Grasshopper - Personalized Message
// https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/typescript
/*
function greet(name: string, owner: string): string
{
    return name === owner ? "Hello boss" : "Hello guest";
}
*/

// 8 kyu - Stringy Strings
// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/typescript
/*
const stringy = (n: number): string =>
{
    let output: string  = "";

    for (let x: number = 1; x <= n; x++)
    {
        output += x % 2 === 0 ? "0" : "1";
    }

    return output;
};
*/

// 8 kyu - Transportation on vacation
// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/typescript
/*
function rentalCarCost(d: number): number 
{
    let output: number = 0;

    if (d > 0 && d < 3)
    {
        output = d * 40;
    }
    else if (d < 7)
    {
        output = (d * 40) - 20;
    }
    else
    {
        output = (d * 40) - 50;
    }

    return output;
}
*/

// 4 kyu - Snail
// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
/*
function snail(array: number[][]) : number[] 
{
    let output: number[]  = [];
    let counter1: number = 0;
    let counter2: number = array[0].length - 1;
    let counter3: number = 1;            
    let counter4: number = array[0].length - 2;
    let outputIndex: number = 0;

    do
    {
        for (let a: number = counter1; a <= counter2; a++)
        {
            output[outputIndex] = array[counter1][a];
            outputIndex++;
        }

        for (let a: number = counter3; a <= counter2; a++)
        {
            output[outputIndex] = array[a][counter2];
            outputIndex++;
        }

        for (let a: number = counter4; a >= counter1; a--)
        {
            output[outputIndex] = array[counter2][a];
            outputIndex++;
        }

        for (let a: number = counter4; a >= counter3; a--)
        {
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

let arExpected1: number[] = snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
// [1, 2, 3, 6, 9, 8, 7, 4, 5]

let arExpected2: number[] = snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]);
// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]

let arExpected3: number[] = snail([[]]);
// []

let arExpected4: number[] = snail([[1]]);
// [1]

console.log("stop");
*/