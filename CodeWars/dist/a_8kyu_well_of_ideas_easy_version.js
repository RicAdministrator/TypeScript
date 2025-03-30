"use strict";
a_8kyu_well_of_ideas_easy_version();
function a_8kyu_well_of_ideas_easy_version() {
    let a = well(['bad', 'bad', 'bad']);
    console.log(a);
    let b = well(['good', 'bad', 'bad', 'bad', 'bad']);
    console.log(b);
    let c = well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']);
    console.log(c);
}
function well(x) {
    let numOfGood = 0;
    let output = "";
    x.forEach(function (value) {
        if (value == "good")
            numOfGood += 1;
    });
    if (numOfGood == 0)
        output = "Fail!";
    else if (numOfGood > 2)
        output = "I smell a series!";
    else
        output = "Publish!";
    return output;
}
//# sourceMappingURL=a_8kyu_well_of_ideas_easy_version.js.map