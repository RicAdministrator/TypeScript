"use strict";
a_8kyu_grasshopper_personalized_message();
function a_8kyu_grasshopper_personalized_message() {
    let a = greet('Daniel', 'Daniel');
    console.log(a);
    let b = greet('Greg', 'Daniel');
    console.log(b);
}
function greet(name, owner) {
    return name === owner ? "Hello boss" : "Hello guest";
}
//# sourceMappingURL=a_8kyu_grasshopper_personalized_message.js.map