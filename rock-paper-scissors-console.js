//Computer choice
function getComputerChoice(choice) {
    const randomValue = Math.floor(Math.random() * 3) + 1;
    if (randomValue === 1) {
      return "rock";
    } else if (randomValue === 2) {
      return "scissors";
    } else {
      return "paper";
    }
  }
  //console.log(getComputerChoice());
  
  //Human choice
  function getHumanChoice() {
    let humanChoice = prompt(
      "What is your choice? (rock, paper, scissors)"
    ).toLowerCase();
    while (
      humanChoice !== "rock" &&
      humanChoice !== "scissors" &&
      humanChoice !== "paper"
    ) {
      humanChoice = prompt(
        "Invalid choice. Please enter rock, paper, scissors."
      ).toLowerCase();
    }
    return humanChoice;
  }
  //console.log(getHumanChoice());
  
  //Play single round
  function playRound(humanChoice, computerChoice) {
    console.log(`Human: ${humanChoice}| Computer: ${computerChoice}`);
    if (humanChoice === computerChoice) {
      console.log("%c👥It’s a tie!🤝", "background: #82cef5; color#cff2cb");
      return "tie";
    } else if (
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "rock" && computerChoice === "scissors")
    ) {
      console.log(
        `%c😀You win!🎉 ${
          humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()
        } beats ${
          computerChoice.charAt(0).toUpperCase() +
          computerChoice.slice(1).toLowerCase()
        }`,
        "background: #f7f131; color: #0d0d0d"
      );
      return "human";
    } else {
      console.log(
        `%c😣You lose!❌  ${
          computerChoice.charAt(0).toUpperCase() +
          computerChoice.slice(1).toLowerCase()
        } beats ${
          humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase()
        }`,
        "background: #fac2b4; color: #0d0d0d"
      );
      return "computer";
    }
  }
  //console.log(playRound());
  
  //Play game with added Scores for computer and human
  function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      const result = playRound(humanSelection, computerSelection);
      console.log(`Round ${round}`);
  
      if (result === "human") {
        humanScore++;
      } else if (result === "computer") {
        computerScore++;
      }
      console.log(
        `Score after round ${round}: Human ${humanScore}, Computer ${computerScore}`
      );
      console.log(
        "*****************************************************************************"
      );
    }
  
    //Calculate the score and provide the winner
    if (humanScore > computerScore) {
      console.log(
        `%cCongratulation🎉!You won the game. \n\n Final score: Human ${humanScore} - Computer ${computerScore}`,
        "background-color: Yellow ; color: white ; font-weight: bold ; " +
          "font-size: 20px ; font-style: italic ; text-decoration: underline ; " +
          "font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ;"
      );
    } else if (humanScore < computerScore) {
      console.log(
        `%cSorry😟, you lost the game. \n\n Final score: Human ${humanScore} - Computer ${computerScore}`,
        "background-color: Tomato; color: white ; font-weight: bold ; " +
          "font-size: 20px ; font-style: italic ; text-decoration: underline ; " +
          "font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ;"
      );
    } else {
      console.log(
        `%cThe game is a tie🤝! \n\n Final score: Human ${humanScore} - Computer ${computerScore}`,
        "background-color: Blue ; color: white ; font-weight: bold ; " +
          "font-size: 20px ; font-style: italic ; text-decoration: underline ; " +
          "font-family: 'american typewriter' ; text-shadow: 1px 1px 3px black ;"
      );
    }
  }
  
  playGame();
  
  //1) Computer provide a random number that is the value to display: rock =1, scissors=2, paper=3
  //2) Human provide the answer: "rock" "scissors" "paper" and the answer should be checked if "rock" then 1, if scissors then 2, if paper then 3.
  //3) If you win! * 5 > you lose! * 5 return
  
  // you win!: scissors > paper, paper > rock, rock > scissors . ..... beats ....
  // you lose!: scissors < rock, paper < scissors, rock < paper
  
  //(humanChoice === "scissors" && computerChoice === "rock") ||
  //(humanChoice === "paper" && computerChoice === "scissors") ||
  //(humanChoice === "rock" && computerChoice === "paper")
  //)
  //return  computerChoice+=1 &&