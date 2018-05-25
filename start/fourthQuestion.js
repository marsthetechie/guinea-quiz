'use strict';

let thirdAnswers = {
    answer0: function() {
        american.addPoints();
        fourthQuestion();
    },
    answer1: function() {
        abyssinian.addPoints();
        fourthQuestion();
    },
    answer2: function() {
        peruvian.addPoints();
        fourthQuestion();
    },
    answer3: function() {
        silkie.addPoints();
        fourthQuestion();
    }
}

function fourthQuestion() {
    let text4 = document.createElement('p');
    text4.innerHTML = questions.q3.text;

    div.innerHTML = '';

    div.appendChild(text4);

    for (let key in questions.q3.options) {
        let button = document.createElement('button');
        button.setAttribute('class', 'btn');
        button.innerHTML = questions.q3.options[key];
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
        answerButtons[i].addEventListener('click', fourthAnswers['answer' + [i]]);
    }
}