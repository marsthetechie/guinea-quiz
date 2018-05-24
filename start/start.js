'use strict';

// Starts the questions
function start() {
    let text1 = document.createElement('p');
    text1.innerHTML = questions.q0.text;
    
    div.innerHTML = '';

    div.appendChild(text1);

    for (let key in questions.q0.options) {
        let button = document.createElement('button');
        button.setAttribute('class', 'btn');
        button.innerHTML = questions.q0.options[key];
        div.appendChild(button);
    }

    let buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        let idB = `o${i}`;
        buttons[i].setAttribute('id', idB);
    }
    
    let o0 = document.getElementById('o0');
    o0.addEventListener('click', answer0);

    let o1 = document.getElementById('o1');
    o1.addEventListener('click', answer1);
}