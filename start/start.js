'use strict';

// Starts the questions
function start() {

    // Makes text for the first question
    let text1 = document.createElement('p');
    text1.innerHTML = questions.q1.text;
    
    // Empty the div
    div.innerHTML = '';

    // Add first question to the div
    div.appendChild(text1);

    // Make and add buttons for options
    for (let key in questions.q1.options) {
        let button = document.createElement('button');
        button.setAttribute('class', 'btn');
        button.innerHTML = questions.q1.options[key];
        div.appendChild(button);
    }

    // Add id's to the buttons
    let buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute('id', i);
    }
    
}