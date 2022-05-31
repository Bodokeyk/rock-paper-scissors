
//insert your selection down here 
let pwon = 0;
let p1_win = 0;
let compwon = 0;
function computerSelec()
{
  let random = Math.floor(Math.random() * 3) + 1;
  if (random == 1)
  {
    com_results = "rock";
  } else if (random == 2)
  {
    com_results = "paper";
  }else if(random == 4)
   {
    com_results = "scissors";
  }
  console.log(random)
  return com_results;
}
/* function playersele ()
{
  let election = prompt("rock, paper or scissors?", undefined);
  election = election.toLocaleLowerCase();
  election = election.trim();
  return election;
 
} */
/* function game()
{
  for ( ; pwon != 3 && compwon != 3;) {
    playRound()
    
    if(p1_win == 2)
    {
      compwon = ++compwon;
      console.log("player wons = " + pwon + " --- " + "computer wons = " + compwon);
      
    } else if (p1_win == 1)
    {
      pwon = ++pwon;
      console.log("player wons = " + pwon + " --- " + "computer wons = " + compwon);
    } */
    
  
 /*  }//for end
  if (pwon > compwon)
  {
    console.log("Congratulations, You won");
  }
  else
  {
    console.log("Well, Computers won lol");
  }
} */


/* function playRound(playerSelec = playersele(), computerSele = computerSelec()) {
  console.log("*");
  console.log("*");
    console.log("computer election --- " +computerSele);
    console.log("player election --- " +playerSelec);
    
    if (playerSelec == computerSele)
    {
      console.log("Tie, please Play again")
      p1_win = 0;
    } else if(playerSelec != "rock" && playerSelec != "paper" && playerSelec != "scissors" )
    {
      console.log("Please Rewrite your selection to a valid one(rock,paper,scissor)");
      p1_win = 0;
    }else if(playerSelec == "rock" && computerSele == "scissors" ||
    playerSelec == "scissors" && computerSele == "paper"||
    playerSelec == "paper" && computerSele == "rock")
    {
      console.log("You are the winner, " + playerSelec + " wins against " + computerSele);   
      p1_win = 1;
      
    }else 
    {
      console.log("Computer Wins, " + playerSelec + " losses against " + computerSele);
      p1_win = 2;
    }
  
  } */

