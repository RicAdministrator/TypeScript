// https://www.codewars.com/kata/563b74ddd19a3ad462000054/train/typescript

const stringy = (n: number): string =>
{
    let output: string  = "";

    for (let x: number = 1; x <= n; x++) {
        output += x % 2 === 0 ? "0" : "1";
    }

    return output;
};

console.log(stringy);