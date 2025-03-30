// https://www.codewars.com/kata/55c90cad4b0fe31a7200001f/train/typescript

a_8kyu_string_templates_bug_fixing_5();

function a_8kyu_string_templates_bug_fixing_5(): void {
    // I like Cheese, Milk, Chocolate!
    let outputA: string = buildString('Cheese', 'Milk', 'Chocolate');
    console.log(outputA);

    // I like Cheese, Milk!
    let outputB: string = buildString('Cheese','Milk');
    console.log(outputB);
}

function buildString(...template: string[]) : string
{
    return 'I like ' + template.join(", ") + '!';
}