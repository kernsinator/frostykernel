let answers = ['H', 'A', 'F', 'D', 'C', 'E', 'B', 'G'];
let accuracy = [false, false, false, false, false, false, false, false];
let answered = [false, false, false, false, false, false, false, false]

let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let q4 = document.getElementById('q4');
let q5 = document.getElementById('q5');
let q6 = document.getElementById('q6');
let q7 = document.getElementById('q7');
let q8 = document.getElementById('q8');

let correct = 0;

let progressBar = document.getElementById('correct');
let progressOutput = document.getElementById('num-correct');

let checkBtn = document.getElementById('check-button');

function checkAnswers() {
    if (q1.value === answers[0]) {
        accuracy[0] = true;
    } else {
        accuracy[0] = false;
    }

    if (q2.value === answers[1]) {
        accuracy[1] = true;
    } else {
        accuracy[1] = false;
    }

    if (q3.value === answers[2]) {
        accuracy[2] = true;
    } else {
        accuracy[2] = false;
    }

    if (q4.value === answers[3]) {
        accuracy[3] = true;
    } else {
        accuracy[3] = false;
    }

    if (q5.value === answers[4]) {
        accuracy[4] = true;
    } else {
        accuracy[4] = false;
    }

    if (q6.value === answers[5]) {
        accuracy[5] = true;
    } else {
        accuracy[5] = false;
    }

    if (q7.value === answers[6]) {
        accuracy[6] = true;
    } else {
        accuracy[6] = false;
    }

    if (q8.value === answers[7]) {
        accuracy[7] = true;
    } else {
        accuracy[7] = false;
    }

    tallyCorrect();

    progressOutput.innerHTML = correct;
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
    for (i = 0 ; i < 8 ; i++) {
        let inputName = 'q' + (i + 1);
        if (document.getElementById(inputName).value) {
            answered[i] = true;
        } else {
            answered[i] = false;
        }
    }

    console.log(answered);

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