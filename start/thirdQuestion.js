'use strict';

let secondAnswers = {
    answer0: function() {
        american.addPoints();
        thirdQuestion();
    },
    answer1: function() {
        abyssinian.addPoints();
        thirdQuestion();
    },
    answer2: function() {
        peruvian.addPoints();
        thirdQuestion();
    },
    answer3: function() {
        silkie.addPoints();
        thirdQuestion();
    }
}

function thirdQuestion() {
    let text3 = document.createElement('p');
    text3.innerHTML = questions.q2.text;

    div.innerHTML = '';

    div.appendChild(text3);

    for (let key in questions.q2.options) {
        let button = document.createElement('button');
        button.setAttribute('class', 'btn');
        button.innerHTML = questions.q2.options[key];
        div.appendChild(button);
    }

    let buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        let idB = `o${i}`;
        buttons[i].setAttribute('id', idB);
    }
}