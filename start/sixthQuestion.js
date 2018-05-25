'use strict';

let fifthAnswers = {
    answer0: function() {
        fifthQuestionExtra();
    },
    answer1: function() {
        american.addPoints();
        abyssinian.addPoints();
        peruvian.addPoints();
        silkie.addPoints();
        sixthQuestion();
    }
}

function fifthQuestionExtra() {
    let text5a = document.createElement('p');
    text5a.innerHTML = questions.q5.text;

    div.innerHTML = '';

    div.appendChild(text5a);

    for (let key in questions.q5.options) {
        let button = document.createElement('button');
        button.setAttribute('class', 'btn');
        button.innerHTML = questions.q5.options[key];
        div.appendChild(button);
    }

    let buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        let idB = `o${i}`;
        buttons[i].setAttribute('id', idB);
    }

    let answerButtons = [];
    for (let i = 0; i < buttons.length; i++) {
        answerButtons[i] = document.getElementById('o' + i);
        answerButtons[i].addEventListener('click', fifthAnswersExtra['answer' + [i]]);
    }
}

let fifthAnswersExtra = {
    answer0: function() {
        american.addPoints();
        abyssinian.resetPoints();
        peruvian.resetPoints();
        silkie.resetPoints();
        sixthQuestion();
    },
    answer1: function() {
        american.addPoints();
        abyssinian.addPoints();
        peruvian.addPoints();
        silkie.addPoints();
        sixthQuestion();
    }
}

function sixthQuestion() {
    let text6 = document.createElement('p');
    text6.innerHTML = questions.q6.text;

    div.innerHTML = '';

    div.appendChild(text6);

    for (let key in questions.q6.options) {
        let button = document.createElement('button');
        button.setAttribute('class', 'btn');
        button.innerHTML = questions.q6.options[key];
        div.appendChild(button);
    }

    let buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        let idB = `o${i}`;
        buttons[i].setAttribute('id', idB);
    }

    let answerButtons = [];
    for (let i = 0; i < buttons.length; i++) {
        answerButtons[i] = document.getElementById('o' + i);
        answerButtons[i].addEventListener('click', sixthAnswers['answer' + [i]]);
    }
}