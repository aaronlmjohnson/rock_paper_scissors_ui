
let computerPlay = ()=>{
  let randNum = Math.ceil(Math.random() * 3)
  let choice = randNum === 1 ? "rock" : randNum === 2 ? "paper" : "scissors";
  return choice;
}
let capFirstLetter = (str) =>{
  return str.slice(0 , 1).toUpperCase() + str.slice(1);
}

let gameOver = false;
let playerScore = 0;
let computerScore = 0;

  document.addEventListener('click', playRPS);

function playRPS(e){ 
  let playerChoice = e.path[0].id;
  let computerChoice = computerPlay();
  let score = document.querySelector('#score');
  let prompt = document.querySelector('#prompt');
  
  if(playerChoice === computerChoice){
    prompt.textContent = `It's a Tie! ${capFirstLetter(playerChoice)} ties with ${capFirstLetter(computerChoice)}.`;
  }else if(playerChoice === "rock" && computerChoice === "scissors"){
      prompt.textContent = "Round Winner! Rock beats scissors.";
      playerScore++;
  }else if(playerChoice === "scissors" && computerChoice === "rock"){
      prompt.textContent = "Round Loser! Rock beats scissors.";
      computerScore++;
  }else if(playerChoice === "paper" && computerChoice === "rock"){
    prompt.textContent = "Round Winner! Paper beats rock.";
    playerScore++;
  }else if( playerChoice === "rock" && computerChoice === "paper"){
    prompt.textContent = "Round Loser! Paper beats rock.";
    computerScore++;
  }else if( playerChoice === "scissors" && computerChoice === "paper"){
    prompt.textContent = "Round Winner! Scissors beats paper."
    playerScore++;
  }else{
    prompt.textContent = "Round Loser! Scissors beats paper";
    computerScore++;
  }
  
  score.textContent = `You: ${playerScore} Computer: ${computerScore} `;

  if(playerScore > 4 || computerScore > 4){
    gameOver = true;
    document.removeEventListener('click', playRPS);
    /*let buttons = [...document.querySelectorAll('button')];
    buttons.forEach((button)=>{
      button.classList.remove("hover");
    });*/

    if(playerScore > 4){
      prompt.textContent = "YOU WIN!";
      prompt.setAttribute('style', 'color: green; font-size: 24px');
    } else{
      prompt.textContent = "YOU LOSE!";
      prompt.setAttribute('style', 'color: red; font-size: 24px');
    }
    
  }
}
