let answers = ['talatakki', 'pirak', 'talatalobag', 'lalalabang', 'balabakbakat'];
let accuracy = [false, false, false, false, false];

let q1 = document.getElementById('little-leg');
let q2 = document.getElementById('money');
let q3 = document.getElementById('little-beetle');
let q4 = document.getElementById('little-patch');
let q5 = document.getElementById('little-granny');

let correct = 0;

let progressBar = document.getElementById('correct');
let progressOutput = document.getElementById('num-correct');

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

    tallyCorrect();

    progressOutput.innerHTML = correct;
    progressBar.value = correct;
}

function tallyCorrect() {
    correct = 0;

    for(i = 0 ; i < 5 ; i++) {
        if (accuracy[i]) {
            correct++
        }
    }
}