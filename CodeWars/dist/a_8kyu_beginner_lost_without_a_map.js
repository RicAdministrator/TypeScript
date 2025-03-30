"use strict";
a_8kyu_beginner_lost_without_a_map();
function a_8kyu_beginner_lost_without_a_map() {
    let a = maps([1, 2, 3]);
    console.log(a);
}
function maps(x) {
    let output = [];
    x.forEach(function (value) {
        output.push(value * 2);
    });
    return output;
}
//# sourceMappingURL=a_8kyu_beginner_lost_without_a_map.js.map