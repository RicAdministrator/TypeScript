"use strict";
a_8kyu_string_templates_bug_fixing_5();
function a_8kyu_string_templates_bug_fixing_5() {
    let outputA = buildString('Cheese', 'Milk', 'Chocolate');
    console.log(outputA);
    let outputB = buildString('Cheese', 'Milk');
    console.log(outputB);
}
function buildString(...template) {
    return 'I like ' + template.join(", ") + '!';
}
//# sourceMappingURL=a_8kyu_string_templates_bug_fixing_5.js.map