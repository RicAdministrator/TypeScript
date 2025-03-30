// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/typescript

a_8kyu_well_of_ideas_easy_version();

function a_8kyu_well_of_ideas_easy_version() : void {
    let a: string = well(['bad', 'bad', 'bad']); // 'Fail!'
    console.log(a);

    let b: string = well(['good', 'bad', 'bad', 'bad', 'bad']); // Publish!
    console.log(b);

    let c: string = well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']); // I smell a series!
    console.log(c);
}

function well(x: string[]): string
{
    let numOfGood: number = 0;
    let output: string = "";

    x.forEach(function (value) 
    {
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
