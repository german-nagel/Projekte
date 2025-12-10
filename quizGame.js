// Quiz Game

const questions = [
{
    category: 'car',
    question: 'Was ist eine deutsche Automarke?',
    choices: ['BMW', 'Hyndai', 'Ford'],
    answer: 'BMW'
},

{
    category: 'car',
    question: 'Wie viel PS hat der Bugatti Veyron?',
    choices: ['341', '1001', '801'],
    answer: '1001'
},

{
    category: 'car',
    question: 'Welcher Hersteller hat ein Pferd im Logo?',
    choices: ['Audi', 'Ferrari', 'Tesla'],
    answer: 'Ferrari'
},

{
    category: 'car',
    question: 'Wofür steht die Abkürzung VW?',
    choices: ['Volle Wucht', 'Volkswagen', 'Viel Wagen'],
    answer: 'Volkswagen'
},

{
    category: 'car',
    question: 'Aus welchem Land kommt die Marke Volvo?',
    choices: ['Deutschland', 'Schweden', 'Italien'],
    answer: 'Schweden'
}
];

function getRandomQuestion(questions){

    const randomIndex = Math.floor(Math.random() * questions.length);

    return questions[randomIndex];
}

function getRandomComputerChoice(choices){

    const randomChoice = Math.floor(Math.random() * choices.length);

    return choices[randomChoice];
}


function getResults(question, computerChoice){

    if (question.answer === computerChoice) {

    return "Die Antwort vom Computer ist richtig!";

    } else {

    return `Die Antwort vom Computer ist falsch! Die richtige Atnwort ist: ${question.answer}`;
    }
}

// 1. Eine zufällige Frage ziehen
const testQuestion = getRandomQuestion(questions);
console.log("Die Frage lautet: " + testQuestion.question);

// 2. Den Computer eine Antwort aus den Möglichkeiten wählen lassen
const computerGuess = getRandomComputerChoice(testQuestion.choices);
console.log("Der Computer tippt auf: " + computerGuess);

// 3. Prüfen, ob der Computer richtig lag
const gameResult = getResults(testQuestion, computerGuess);
console.log("Ergebnis: " + gameResult);