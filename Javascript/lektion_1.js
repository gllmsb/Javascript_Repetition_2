/****************************************************
 * LEKTION 1 - Variabler, events og conditionals    *
 ****************************************************/

// Opgave 1
// Du skal i denne opgave redegøre for forskellen mellem en let, var og const.
// Det vil sige at du skal illustrere hvad der sker når man forsøger at ændre en
// var, en let og en const. Du skal bruge console.log til at demonstrere dette.

//* var is function-scoped or globally-scoped. It can be re-declared or updated.
var x = 10;
console.log(x);
x = 20;
console.log(x);

//*let is a block-scoped. It cannot be re-declared within the same block but can be updated.
let y = 10
console.log(y);
y = 20;
console.log(y);

//*const is a block-scoped.It cannot be re-declared or updated. The value holds cannot be changed,but if it holds an object , the object properties can upudated.
const z = 10;
console.log(z);

//_______________________________________________________________________________

// Opgave 2
// I denne opgave skal du bruge aritmetik til at lave nogle regnestykker.
// Du skal løse følgende:
// 992 + 237 = ?
// 44 - 12 = ?
// 142 * 23 = ?
// 94 / 23  = ?
// Svarene skal ligesom opgaven ovenfor vises i hver sin console.log

let sum = 992 + 237;
console.log("992 + 237=", sum);

let difference = 44 -12;
console.log("44 - 12=", difference);

let product = 142 * 23;
console.log("142 * 23=", product);

let qoutient = 94 / 23;
console.log("94 / 23=",qoutient);
//_______________________________________________________________________________

// Opgave 3
// Du skal nu lave en click counter med et onclick event. Din click counter skal have en knap
// der gennem Javascript får tildelt en eventlistener. Antal af clicks skal vises i DOM´en.

let clickCount = 0;

const button = document.getElementById('clickButton');
const counter = document.getElementById('counter');

button.addEventListener('click', () => {
    clickCount++;

    counter.textContent = `Clicks: ${clickCount}`;
});
//_______________________________________________________________________________

// Opgave 4
// I denne opgave skal du lave et input felt med validering. Du skal bruge en eventlistener til at måle på om brugeren
// har indtastet mere end 8 bogstaver. Hvis ikke brugeren har indtastet mere en 8 bogstaver skal der vises en fejl besked
// under input feltet, der beder brugeren om at indtaste mindst 8 bogstaver.

const input = document.getElementById('textInput');
const uppercaseError = document.getElementById('uppercaseError');
const nonLetterError = document.getElementById('nonLetterError');
const lengthError = document.getElementById('lengthError');

function validateInput(value) {
    const hasUpperCase = /[A-Z]/.test(value);
    const hasNonLetter = /[^a-zA-Z]/.test(value);
    const isValidLength = value.length <= 20;

    uppercaseError.classList.toggle('show', !hasUpperCase);
    nonLetterError.classList.toggle('show', !hasNonLetter);
    lengthError.classList.toggle('show', !isValidLength);
}

input.addEventListener('input', () => {
    validateInput(input.value);
});
//_________________________________________________________________________________

// Opgave 5
// I denne opgave skal du indele en side i fire lige store firkanter. Du skal herefter bruge en eventlistener til at
// måle om brugeren fører musen ind over hver af de fire firkanter. Når musen rammer en firkant skal den skifte farve til en
// tilfældigt genereret farve.

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const squares = Array.from(document.querySelectorAll('.square'));

squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = getRandomColor();
    });
});
//_________________________________________________________________________________

// Opgave 6
// I denne opgave skal du arbejde videre på input feltet fra opgave 5. Du skal nu tilføje følgende betingelser til valideringen.
//  - Brugeren skal indtaste et stort bogstav.
//  - Brugeren skal indtaste et tegn som ikke er et bogstav.
//  - Brugeren må ikke indtaste en string som er længere end 20 karakterer.
//_________________________________________________________________________________
