const result = ["Rock","Paper","Scissors"];

function getComputerChoice() {
    
    let random = Math.floor(Math.random() * 3);
    return result[random];
}



function playRound (){
    
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("What's your sign?");
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let ps = playerSelection[0];
    let cs = computerSelection[0]; 
    while (ps == cs){
        computerSelection = getComputerChoice();
        cs = computerSelection[0];
    }

    if (ps == 'R' && cs == 'S' || ps == 'P' && cs == 'R' || ps == 'S' &&cs == 'P'){
        console.log(playerSelection + " beats " + computerSelection);
        pcount ++ ;
        console.log("You: " + pcount);
        return "You win!" + playerSelection + " beat " + computerSelection; 
    }

    else{
        console.log(computerSelection + " beats " + playerSelection);
        ccount ++ ;
        console.log("Computer: " + ccount);
       return "You lose!" + computerSelection + " beat " + playerSelection ;
    }
}

let pcount = 0;
let ccount = 0;
function game(){
    for (let i=0; i < 5; i++){
        playRound ();

    }

    if (pcount > ccount){
        console.log("You win!");
    }
    else{
        console.log("You lose!");
    }
}

game();






