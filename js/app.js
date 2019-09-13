
let mainDiv = document.querySelector('#main-code');
class Word {
    constructor(word, cl) {
        this.word = word;
        this.cl = cl;
    }

    generateWord() {
        let span = document.createElement('span');
        span.setAttribute('class', this.cl);
        span.textContent = this.word;
        return span;
    }
}

const words = [
    [
        {
            word: 'let',
            cl: 'key-word'
        },
        {
            word: ' congratulate',
            cl: 'fun'
        },
        {
            word: ' =',
            cl: 'operator'
        },
        {
            word: ' (',
            cl: 'bracket'
        },
        {
            word: 'img',
            cl: 'argument'
        },
        {
            word: ')',
            cl: 'bracket'
        },
        {
            word: ' => ',
            cl: 'argument'
        },
        {
            word: '{',
            cl: 'bracket'
        },
    ],
    [
        {
            word: 'return ',
            cl: 'key-word'
        },
        {
            word: '< img',
            cl: 'key-word'
        },
        {
            word: ' src',
            cl: 'attr'
        },
        {
            word: '=',
            cl: 'operator'
        },
        {
            word: '"img/',
            cl: 'string'
        },
        {
            word: '${',
            cl: 'key-word'
        },
        {
            word: 'img',
            cl: 'variable'
        },
        {
            word: '}',
            cl: 'key-word'
        },
        {
            word: '.png" ',
            cl: 'string'
        },
        {
            word: 'alt ',
            cl: 'attr'
        },
        {
            word: '=',
            cl: 'operator'
        },
        {
            word: '"Congratulation img"',
            cl: 'string'
        },
        {
            word: '>',
            cl: 'key-word'
        }
    ],
    [
        {
            word: '}',
            cl: 'bracket'
        },
    ],
    [
        {
            word: 'document ',
            cl: 'key-word'
        },
        {
            word: '.',
            cl: 'dot'
        },
        {
            word: 'appendChild',
            cl: 'fun'
        },
        {
            word: '(',
            cl: 'bracket'
        },
        {
            word: 'congratulate())',
            cl: 'fun'
        },
        {
            word: ';',
            cl: 'dot'
        }
    ]
]


const code = document.querySelector('#code');
const line1 = words[0];
const line2 = words[1];
const line3 = words[2];
const line4 = words[3];

let generateCode = (line, id) => {
    div = document.createElement('div');
        line.forEach(element => {
            const word = new Word(element.word, element.cl);
            div.appendChild(word.generateWord());
        });
    div.setAttribute('id', id);
    return div;
}

setTimeout(() => {
    let line = generateCode(line1, '1')
    console.log(line);
    code.appendChild(line)
    line.classList.add('type-line')
    
}, 2000);
setTimeout(() => {
    let line = generateCode(line2, '2')
    console.log(line);
    code.appendChild(line)
    line.classList.add('type-line')
    
}, 6000);
setTimeout(() => {
    let line = generateCode(line3, '3')
    console.log(line);
    code.appendChild(line)
    line.classList.add('type-line')
    
}, 10000);
setTimeout(() => {
    let line = generateCode(line4, '4')
    console.log(line);
    code.appendChild(line)
    line.classList.add('type-line');
    
}, 14000);
setTimeout(() => {
    let button = document.createElement('button');
    button.setAttribute('id', 'button');
    button.textContent = 'Lara';
    button.setAttribute('onclick', 'showImg()');
    mainDiv.appendChild(button);
}, 18000);

let showImg = ()=> {
    code.classList.add('hide');
    let containerImg = document.querySelector('#container-img');
    containerImg.classList.add('show');
}