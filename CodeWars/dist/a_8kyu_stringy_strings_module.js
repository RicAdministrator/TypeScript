"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringy = void 0;
const stringy = (n) => {
    let output = "";
    for (let x = 1; x <= n; x++) {
        output += x % 2 === 0 ? "0" : "1";
    }
    return output;
};
exports.stringy = stringy;
//# sourceMappingURL=a_8kyu_stringy_strings_module.js.map