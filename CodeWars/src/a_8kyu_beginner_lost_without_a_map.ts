// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/typescript

a_8kyu_beginner_lost_without_a_map();

function a_8kyu_beginner_lost_without_a_map(): void {
    let a: number[] = maps([1, 2, 3]); // [2, 4, 6]
    console.log(a);
}

function maps(x: number[]): number[] {
    let output: number[] = [];

    x.forEach(function (value) 
    {
        output.push(value * 2);
    });

    return output;
}