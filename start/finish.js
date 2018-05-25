'use strict';

let sixthAnswers = {
    answer0: function() {
        american.addPoints();
        abyssinian.resetPoints();
        peruvian.resetPoints();
        silkie.resetPoints();
        finish();
    },
    answer1: function() {
        silkie.addPoints();
        peruvian.addPoints();
        finish();
    },
    answer2: function() {
        abyssinian.addPoints();
        finish();
    }
}

// Calculate and display the information about the pig with the biggest num of points
function finish() {
    div.innerHTML = '';

    let pigPoints = [american.points, abyssinian.points, peruvian.points, silkie.points];
    let pigPointsMax = Math.max(... pigPoints);

    let finishHeader = document.createElement('h2');
    let textInsideHeader = "Congrats! You've got ";

    let finishText = document.createElement('p');

    if (pigPointsMax === american.points) {
        finishHeader.innerHTML = textInsideHeader + american.name;
        finishText.innerHTML = american.about;
    } else if (pigPointsMax === abyssinian.points) {
        finishHeader.innerHTML = textInsideHeader + abyssinian.name;
        finishText.innerHTML = abyssinian.about;
    } else if (pigPointsMax === peruvian.points) {
        finishHeader.innerHTML = textInsideHeader + peruvian.name;
        finishText.innerHTML = peruvian.about;
    } else {
        finishHeader.innerHTML = textInsideHeader + silkie.name;
        finishText.innerHTML = silkie.about;
    }

    let reloadButton = document.createElement('button');
    reloadButton.setAttribute('class', 'btn');
    reloadButton.innerHTML = "Do it again!";
    reloadButton.addEventListener('click', function() {
        window.location.reload(true);
    })

    div.appendChild(finishHeader);
    div.appendChild(finishText);
    div.appendChild(reloadButton);
    
    
}