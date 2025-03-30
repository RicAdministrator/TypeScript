// https://www.codewars.com/kata/555086d53eac039a2a000083/train/typescript

a_8kyu_opposites_attract();

function a_8kyu_opposites_attract(): void {
    let a = lovefunc(1, 4); // true
    console.log(a);

    let b = lovefunc(2, 2); // false
    console.log(b);
}

function lovefunc(flower1: number, flower2: number): boolean {
    if (flower1 === 0) flower1 = 2;

    if (flower2 === 0) flower2 = 2;

    return (flower1 % 2 === 0 && flower2 % 2 != 0) || (flower2 % 2 === 0 && flower1 % 2 != 0);
}