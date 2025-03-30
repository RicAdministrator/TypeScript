// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/typescript

a_8kyu_the_wide_mouthed_frog();

function a_8kyu_the_wide_mouthed_frog(): void {
    let a: string = mouthSize("toucan"); // wide
    console.log(a);

    let b: string = mouthSize("alligator"); // small
    console.log(b);
}

function mouthSize(animal: string): string {
    return animal.toLowerCase() === "alligator" ? "small" : "wide";
}
