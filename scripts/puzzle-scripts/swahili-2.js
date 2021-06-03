// DECLARATIONS

let answers = ['F', 'E', 'B', 'A', 'D', 'C', 'tarehe tano Aprili jumatano', 'tarehe pili Disemba jumapili'];
let accuracy = [false, false, false, false, false, false, false, false];
let answered = [false, false, false, false, false, false, false, false];

let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let q4 = document.getElementById('q4');
let q5 = document.getElementById('q5');
let q6 = document.getElementById('q6');
let q7 = document.getElementById('q7');
let q8 = document.getElementById('q8');

let inputs = [q1, q2, q3, q4, q5, q6, q7, q8];

let correct = 0;

let progressBar = document.getElementById('correct');
let progressOutput = document.getElementById('num-correct');

let checkBtn = document.getElementById('check-button');

// FUNCTIONS

function checkAnswers() {
    for (i = 0; i < inputs.length; i++) {
        if (inputs[i].value === answers[i]) {
            accuracy[i] = true;
        } else {
            accuracy[i] = false;
        }
    }

    tallyCorrect();

    progressOutput.innerHTML = correct;
    progressBar.value = correct;
}

function tallyCorrect() {
    correct = 0;

    for(i = 0 ; i < accuracy.length ; i++) {
        if (accuracy[i]) {
            correct++
        }
    }
}

function checkFilled() {
    let complete = 0;
    for (i = 0 ; i < 8 ; i++) {
        let inputName = inputs[i];
        if (inputName.value) {
            answered[i] = true;
        } else {
            answered[i] = false;
        }
    }

    for (i = 0 ; i < 8 ; i++) {
        if (answered[i]) {
            complete++;
        }
    }

    if (complete === 8) {
        checkBtn.disabled = '';
    } else {
        checkBtn.disabled = 'disabled';
    }
}