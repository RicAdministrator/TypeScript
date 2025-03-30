// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/typescript

a_8kyu_transportation_on_vacation();

function a_8kyu_transportation_on_vacation(): void {
    let a = rentalCarCost(1); // 40
    console.log(a);

    let b = rentalCarCost(2); // 80
    console.log(b);
}

function rentalCarCost(d: number): number {
    let output: number = 0;

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
