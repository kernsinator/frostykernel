let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');

let answers = ['Aliwaona.', 'Nitakawuona.', 'Aliniona.'];
let accuracy = [false, false, false];
let userInputs = [q1, q2, q3];

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

    for(i = 0 ; i < accuracy.length ; i++) {
        if (accuracy[i]) {
            correct++;
        }
    }
}