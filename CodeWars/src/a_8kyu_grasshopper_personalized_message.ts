// https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/typescript

a_8kyu_grasshopper_personalized_message();

function a_8kyu_grasshopper_personalized_message(): void {
    let a = greet('Daniel', 'Daniel'); // Hello boss
    console.log(a);

    let b = greet('Greg', 'Daniel'); // Hello guest
    console.log(b);
}

function greet(name: string, owner: string): string {
    return name === owner ? "Hello boss" : "Hello guest";
}