'use strict';
// Create a constructor for pigs and methods for adding points and reseting them after the quiz is over
class Pigs {
    constructor(name, points, about) {
        this.name = name;
        this.points = points;
        this.about = about;
    }
    addPoints() {
        this.points++;
    }
    removePoints() {
        this.points--;
    }
    resetPoints() {
        this.points = 0;
    }
}

// Objects for pigs
let american = new Pigs('The American', 0, aboutPigs.american);
let abyssinian = new Pigs('The Abyssinian', 0, aboutPigs.abyssinian);
let peruvian = new Pigs('The Peruvian', 0, aboutPigs.peruvian);
let silkie = new Pigs('The Silkie', 0, aboutPigs.silkie);

const div = document.getElementById('quest');

let firstButton = document.getElementById('first');
firstButton.addEventListener('click', start);