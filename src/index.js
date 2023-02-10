const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let key = Object.keys(MORSE_TABLE).map(morse => morse.replace(/\./g, '10')).map(morse => morse.replace(/\-/g, '11')).map(morse => morse.padStart(10, '0'));
    let value = Object.values(MORSE_TABLE);


    let result = '';
    expr = expr.match(/.{1,10}/g);
    expr.forEach(element => {
        if (element.includes('*')) {
            result += ' ';
        } else {
            result += value[key.indexOf(element)];
        }
    })
    return result;
}

module.exports = {
    decode
}