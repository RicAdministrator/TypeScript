// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/typescript

b_7kyu_reverse_words();

function b_7kyu_reverse_words(): void {
    // assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god', "Input: 'The quick brown fox jumps over the lazy dog.'");
    // assert.strictEqual(reverseWords('apple'), 'elppa', "Input: 'apple'");
    // assert.strictEqual(reverseWords('a b c d'), 'a b c d', "Input: 'a b c d'");
    // assert.strictEqual(reverseWords('  double  spaced  words  '), '  elbuod  decaps  sdrow  ', "Input: '  double  spaced  words  '");

    // ehT kciuq nworb xof spmuj revo eht yzal .god
    let a = reverseWords('The quick brown fox jumps over the lazy dog.');
    console.log(a);
}

function reverseWords(str: string): string {
    let output = "";
    let tempStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == ' ') {
            output += tempStr + " ";
            tempStr = "";
        }
        else {
            tempStr = str.charAt(i) + tempStr;
        }
    }

    if (tempStr != "") {
        output += tempStr;
    }

    return output;
}