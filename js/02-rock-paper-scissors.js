//I think it would be fun to make a (very) simple radio factory 
//that other developers could use to quickly make radio button groups.
//calling function must pass, as arguments, the number of desired
//radio inputs, as well as the names of labels (as an array)
//these must be equal in length
/*
function createRadio(num, labelarray){       
    const parentDiv = document.createElement('div');
    parentDiv.id = 'radioDiv';
    if(num !== labelarray.length){ //guard clause
        console.log('you blew it!');
        return false;
    }
    for(let i=0; i<num; i++){
        parentDiv.innerHTML += `<input type="radio" value="${labelarray[i]}" id=${[i]} name="radioGroup"><label for="${labelarray[i]}">${labelarray[i]}</label><br>`;
    }
    document.body.appendChild(parentDiv);
}

function processClick(){
    let currentFocus = this.children;
    for(var i=0; i<this.children.length; i++){
        if(this.children[i].checked === true){
            currentFocus = this.children[i].id;
            break;
        }
    }
    runRPS(currentFocus);
}

function runRPS(focus){
    let playerChoice = focus;
    let computerChoice = Math.floor(Math.random() * 3);
    let element = document.createElement('p');
    element.id = 'choiceDisplay';
    if(document.getElementById('choiceDisplay') != null){
        let removeelem = document.getElementById('choiceDisplay');
        removeelem.remove();
    }
    if(playerChoice == computerChoice){
        element.innerHTML = `It's a tie!`;
    }                      //i really dislike all these if's and considered using a map function
    if(playerChoice == 0){ //but thought that might be taking things too far
        if(computerChoice == 1){
            element.innerHTML = 'You chose Rock, Computer chose paper, you lose!'
        }
        else if(computerChoice == 2){
            element.innerHTML = 'You chose Rock, Computer chose scissors, you win!'
        }
    }
    if(playerChoice == 1){
        if(computerChoice == 0){
            element.innerHTML = 'You chose Paper, Computer chose Rock, you win!'
        }
        else if(computerChoice == 2){
            element.innerHTML = 'You chose Paper, Computer chose Scissors, you lose!'
        }
    }
    if(playerChoice == 2){
        if(computerChoice == 0){
            element.innerHTML = 'You chose Scissors, Computer chose Rock, you lose!'
        }
        else if(computerChoice == 1){
            element.innerHTML = 'You chose Scissors, Computer chose Paper, you win!'
        }
    }
    element.style.fontSize = '50px';
    element.style.textAlign = 'center';
    document.body.appendChild(element);
}
createRadio(3, ["Rock", "Paper", "Scissors"]);
document.getElementById('radioDiv').addEventListener('click', processClick);
*/