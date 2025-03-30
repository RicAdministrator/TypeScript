"use strict";
a_8kyu_transportation_on_vacation();
function a_8kyu_transportation_on_vacation() {
    let a = rentalCarCost(1);
    console.log(a);
    let b = rentalCarCost(2);
    console.log(b);
}
function rentalCarCost(d) {
    let output = 0;
    if (d > 0 && d < 3) {
        output = d * 40;
    }
    else if (d < 7) {
        output = (d * 40) - 20;
    }
    else {
        output = (d * 40) - 50;
    }
    return output;
}
//# sourceMappingURL=a_8kyu_transportation_on_vacation.js.map