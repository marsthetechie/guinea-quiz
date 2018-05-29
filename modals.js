const helpModalTrigger = document.getElementById('help');
const aboutModalTrigger = document.getElementById('about');

const helpModal = document.getElementById('helpMod');
const aboutModal = document.getElementById('aboutMod');

const closeHelpButton = document.getElementById('close-help');
const closeAboutButton = document.getElementById('close-about');

function toggleModal(event) {
    if(event.target === helpModalTrigger || event.target === closeHelpButton) {
        helpModal.classList.toggle('show-modal');
    } else if (event.target === aboutModalTrigger || event.target === closeAboutButton) {
        aboutModal.classList.toggle('show-modal');
    }
}

helpModalTrigger.addEventListener('click', toggleModal);
closeHelpButton.addEventListener('click', toggleModal);

aboutModalTrigger.addEventListener('click', toggleModal);
closeAboutButton.addEventListener('click', toggleModal);