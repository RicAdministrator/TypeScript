"use strict";
b_7kyu_reverse_words();
function b_7kyu_reverse_words() {
    let a = reverseWords('The quick brown fox jumps over the lazy dog.');
    console.log(a);
}
function reverseWords(str) {
    let output = "";
    let tempStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == ' ') {
            output += tempStr + " ";
            tempStr = "";
        }
        else {
            tempStr = str.charAt(i) + tempStr;
        }
    }
    if (tempStr != "") {
        output += tempStr;
    }
    return output;
}
//# sourceMappingURL=b_7kyu_reverse_words.js.map