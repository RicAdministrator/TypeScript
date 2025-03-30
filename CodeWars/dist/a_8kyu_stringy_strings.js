"use strict";
const stringy = (n) => {
    let output = "";
    for (let x = 1; x <= n; x++) {
        output += x % 2 === 0 ? "0" : "1";
    }
    return output;
};
console.log(stringy);
//# sourceMappingURL=a_8kyu_stringy_strings.js.map