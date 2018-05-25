'use strict';

let fourthAnswers = {
    answer0: function() {
        american.addPoints();
        abyssinian.removePoints();
        peruvian.removePoints();
        silkie.removePoints();
        fifthQuestions();
    },
    answer1: function() {
        american.addPoints();
        abyssinian.addPoints();
        peruvian.addPoints();
        silkie.addPoints();
        fifthQuestions();
    }
}

function fifthQuestions() {
    let text5 = document.createElement('p');
    text5.innerHTML = questions.q4.text;

    div.innerHTML = '';

    div.appendChild(text5);

    for (let key in questions.q4.options) {
        let button = document.createElement('button');
        button.setAttribute('class', 'btn');
        button.innerHTML = questions.q4.options[key];
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
        answerButtons[i].addEventListener('click', fifthAnswers['answer' + [i]]);
    }
}