"use strict";
a_8kyu_sum_mixed_array();
function a_8kyu_sum_mixed_array() {
    let a = sumMix([9, 3, '7', '3']);
    console.log(a);
    let b = sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]);
    console.log(b);
}
function sumMix(x) {
    let output = 0;
    x.forEach(function (value) {
        if (typeof value === 'number') {
            output += value;
        }
        else {
            output += parseInt(value);
        }
    });
    return output;
}
//# sourceMappingURL=a_8kyu_sum_mixed_array.js.map