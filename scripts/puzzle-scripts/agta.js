let q1 = document.getElementById('little-leg');
let q2 = document.getElementById('money');
let q3 = document.getElementById('little-beetle');
let q4 = document.getElementById('little-patch');
let q5 = document.getElementById('little-granny');

let answers = ['talatakki', 'pirak', 'talatalobag', 'lalalabang', 'balabakbakat'];
let accuracy = [false, false, false, false, false];
let userInputs = [q1, q2, q3, q4, q5];

let correct = 0;

let progressBar = document.getElementById('correct');
let progressOutput = document.getElementById('num-correct');

function checkAnswers() {
    for (i = 0; i < userInputs.length; i++) {
        if (userInputs[i].value === answers[i]) {
            accuracy[i] = true;
        }
    }
    
    tallyCorrect();

    progressOutput.textContent = correct;
    progressBar.value = correct;
}

function tallyCorrect() {
    correct = 0;

    for(i = 0 ; i < 5 ; i++) {
        if (accuracy[i]) {
            correct++;
        }
    }
}