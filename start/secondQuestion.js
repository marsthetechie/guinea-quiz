'use strict';

let firstAnswers = {
    answer0: function () {
        american.addPoints();
        secondQuestion()
    },
    answer1: function() {
        american.addPoints();
        abyssinian.addPoints();
        peruvian.addPoints();
        silkie.addPoints();
        secondQuestion();
    }
};

function secondQuestion() {
    let text2 = document.createElement('p');
    text2.innerHTML = questions.q1.text;

    div.innerHTML = '';

    div.appendChild(text2);

    for (let key in questions.q1.options) {
        let button = document.createElement('button');
        button.setAttribute('class', 'btn');
        button.innerHTML = questions.q1.options[key];
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
        answerButtons[i].addEventListener('click', secondAnswers['answer' + [i]]);
    }
}