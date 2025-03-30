"use strict";
a_8kyu_the_wide_mouthed_frog();
function a_8kyu_the_wide_mouthed_frog() {
    let a = mouthSize("toucan");
    console.log(a);
    let b = mouthSize("alligator");
    console.log(b);
}
function mouthSize(animal) {
    return animal.toLowerCase() === "alligator" ? "small" : "wide";
}
//# sourceMappingURL=a_8kyu_the_wide_mouthed_frog.js.map