"use strict";
a_8kyu_opposites_attract();
function a_8kyu_opposites_attract() {
    let a = lovefunc(1, 4);
    console.log(a);
    let b = lovefunc(2, 2);
    console.log(b);
}
function lovefunc(flower1, flower2) {
    if (flower1 === 0)
        flower1 = 2;
    if (flower2 === 0)
        flower2 = 2;
    return (flower1 % 2 === 0 && flower2 % 2 != 0) || (flower2 % 2 === 0 && flower1 % 2 != 0);
}
//# sourceMappingURL=a_8kyu_opposites_attract.js.map