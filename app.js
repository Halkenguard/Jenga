
// Variable declarations
const genListDiv = document.querySelector('#gen-list');
const rulesetDiv = document.querySelector('#ruleset');
const mainContent = document.querySelector('#main-content');
const emptyGenList = genListDiv.innerHTML;
const blockInput = document.querySelector('#block-selector');
const blockForm = blockInput.parentElement;
const blockFormReset = blockForm.innerHTML;

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
    console.info(parseInt(blockInput.value))
    if (button.classList.contains('gen-button')){
        mainContent.style.display = 'none';
        genListDiv.style.display = 'block';
        writeRules(genListDiv);
    }
    else if (button.classList.contains('edit-button')){
        mainContent.style.display = 'none';
        rulesetDiv.style.display = 'block'
    }
}

function returnToMainContent(button){
    button.parentElement.style.display = "none";
    mainContent.style.display = "block";
    genListDiv.innerHTML = emptyGenList;
}

function writeRules(div) {
    console.info("Writerules fuction fired");
    div.innerHTML += "<ol>";
    for (let i = 0; i < rules.length; i++){
        div.innerHTML += "<li>" + rules[i]; + "</li>";
    }
    // div.innerHTML += "</ol>";
}