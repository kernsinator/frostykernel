let answers = ['B', 'D', 'C', 'A'];
let accuracy = [false, false, false, false];
let answered = [false, false, false, false];

let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let q4 = document.getElementById('q4');

let userInputs = [q1, q2, q3, q4];

let correct = 0;

let progressBar = document.getElementById('correct');
let progressOutput = document.getElementById('num-correct');

let checkBtn = document.getElementById('check-button');

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

    for(i = 0 ; i < 8 ; i++) {
        if (accuracy[i]) {
            correct++
        }
    }
}

function checkFilled() {
    let complete = 0;
    for (i = 0 ; i < answered.length ; i++) {
        if (userInputs[i].value) {
            answered[i] = true;
        } else {
            answered[i] = false;
        }
    }

    for (i = 0 ; i < answered.length ; i++) {
        if (answered[i]) {
            complete++;
        }
    }

    if (complete === 4) {
        checkBtn.disabled = '';
    } else {
        checkBtn.disabled = 'disabled';
    }
}