
// Variable declarations
const genButton = document.querySelector('.gen-button');
const returnButton = document.querySelector('.return');
const editButton = document.querySelector('.edit-button')
const genListDiv = document.querySelector('#gen-list');
const rulesetDiv = document.querySelector('#ruleset');
const mainContent = document.querySelector('#main-content');

// Event Listeners
genButton.addEventListener('click', () => {displayDiv(genListDiv)});
editButton.addEventListener('click', () => {displayDiv(rulesetDiv)});

// Functions
function displayDiv(div){
    mainContent.style.display = 'none';
    div.style.display = 'block';
}