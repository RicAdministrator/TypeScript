// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/typescript

a_8kyu_sum_mixed_array();

function a_8kyu_sum_mixed_array(): void {
    let a: number = sumMix([9, 3, '7', '3']); // 22
    console.log(a);

    let b: number = sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]); // 42
    console.log(b);
}

function sumMix(x: any[]): number 
{
    let output: number = 0;

    x.forEach(function (value) 
    {
        if (typeof value === 'number')
        {
            output += value;
        }
        else 
        {
            output += parseInt(value);
        }
    }); 

    return output;
}