let q1 = document.getElementById('q1');
let q2 = document.getElementById('q2');
let q3 = document.getElementById('q3');
let q4 = document.getElementById('q4');
let q5 = document.getElementById('q5');

let answers = ['The child is seeking the cow.', 'The father is leaving the man.', 'Babamu dada virkkurshi vi.', 'Dogi berkurshi bi.', "Buva diya vark'arshi di."];
let accuracy = [false, false, false, false, false];
let userInputs = [q1, q2, q3, q4, q5];

let correct = 0;

let progressBar = document.getElementById('correct');
let progressOutput = document.getElementById('num-correct');

function checkAnswers() {
    for (i = 0; i < userInputs.length; i++) {
        if (userInputs[i].value === answers[i]) {
            accuracy[i] = true;
        } else {
            accuracy[i] = false;
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