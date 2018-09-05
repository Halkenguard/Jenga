
// Variable declarations
const genListDiv = document.querySelector('#gen-list');
const rulesetDiv = document.querySelector('#ruleset');
const mainContent = document.querySelector('#main-content');
const emptyGenList = genListDiv.innerHTML;
const emptyRuleList = rulesetDiv.innerHTML;
let blockInput = document.querySelector('#block-selector');
const blockForm = blockInput.parentElement;
const blockFormReset = blockForm.innerHTML;

// Event Listeners

document.addEventListener('click', event =>{
    var button = event.target;
    if (button.classList.contains('return')){
        returnToMainContent(button);
    }
    else if (button.classList.contains("gen-button")){
        let numOfBlocks =  document.querySelector('#block-selector').value;
        if (numOfBlocks < 1 || numOfBlocks > 100){
            console.log(numOfBlocks);
            blockInput.value = 0;
            blockInput.parentElement.innerHTML += "<p style='color: red'> You must input a number between 1 and 100 </p>";
        }
        else{
            displayDiv(button, numOfBlocks);
        }
    }
    else if (button.classList.contains("edit-button")){
        displayDiv(button);
    }
});

document.addEventListener('submit', event =>{
    event.preventDefault();
});

window.onbeforeunload = function(e){
    e.preventDefault();
    return '';
}

// Functions

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

function displayDiv(button, blocks){
    if (button.classList.contains('gen-button')){
        mainContent.style.display = 'none';
        genListDiv.style.display = 'block';
        writeRules(genListDiv, blocks);
    }
    else if (button.classList.contains('edit-button')){
        mainContent.style.display = 'none';
        rulesetDiv.style.display = 'block';
        writeRules(rulesetDiv)
    }
}

function returnToMainContent(button){
    button.parentElement.style.display = "none";
    mainContent.style.display = "block";
    if (button.parentElement === rulesetDiv){
        overwriteRules();
    }
    genListDiv.innerHTML = emptyGenList;
    rulesetDiv.innerHTML = emptyRuleList;
}

function overwriteRules(){
    let fields = document.querySelectorAll('.ruleField');
    console.info(fields.length);
    rules = [];
    for(let i = 0; i < fields.length; i++){
        rules.push(fields[i].value);
    }
}

function writeRules(div, blocks) {
    let shuffledRules = shuffle(rules);
    if (div === genListDiv){
        for (let i = 0; i < blocks; i++){
            div.lastElementChild.innerHTML += "<li>" + shuffledRules[i]; + "</li>";
        }
    }
    else if (div === rulesetDiv){
        for(let i = 0; i < rules.length; i ++){
            div.lastElementChild.innerHTML += "<input type='text' class='ruleField' value='" + rules[i] + "'>"
        }
    }
}