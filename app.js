
// Variable declarations
const genButton = document.querySelector('.gen-button');
const returnButton = document.querySelectorAll('.return');
const editButton = document.querySelector('.edit-button')
const genListDiv = document.querySelector('#gen-list');
const rulesetDiv = document.querySelector('#ruleset');
const mainContent = document.querySelector('#main-content');

// Event Listeners

document.addEventListener('click', event =>{
    var button = event.target;
    if (button.classList.contains('return')){
        returnToMainContent(button);
    }
    else if(button.classList.contains('gen-button') || button.classList.contains('edit-button')) {
        displayDiv(button);
    }
});

// Functions

function displayDiv(button){
    mainContent.style.display = 'none';
    if (button.classList.contains('gen-button')){
        genListDiv.style.display = 'block'
    }
    else if (button.classList.contains('edit-button')){
        genListDiv.style.display = 'block'
    }
}

function returnToMainContent(button){
    button.parentElement.style.display = "none";
    mainContent.style.display = "block";
}