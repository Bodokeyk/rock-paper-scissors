
//insert your selection down here 
 let pwon = document.querySelector('.y-won');
 numpwon = 0;
let compwon = document.querySelector('.c-won');
numcompwon = 0;
let PlayerElection = 0;
let options = document.getElementById('B-of').value;
let logcont = document.getElementById('log');
console.log(options)
let Result;
let roundNum = 1;
let rounds = document.querySelector('.round-num');


function rpc(value){
  if(value == 4)
  {
return "scissors";
  }else if(value == 2)
{
  return "paper";
}else if(value == 1)
return "rock"
}
/*añadir rounds a la pagina*/
function roundsUp () 
{ 
  roundNum = roundNum + 1;
  rounds.innerHTML = roundNum;
}


/*bajar rounds para acabar juego*/
function roundsDown()
{
  options = options - 1;
  console.log("valor de options ahora es" + options);
}


function atenttion ()
{
  logcont.lastChild.style.color = "white";
  let timeout = setTimeout (()=> logcont.lastChild.style.color="black", 250 )
}
function gameOverLog()
{

  logcont.lastChild.style.color = "white";
  let timeout = setTimeout (()=> logcont.lastChild.style.color="black", 500 )
  setTimeout (()=> logcont.lastChild.style.color="white", 1000 )
}
 

/*Botones asignados a las elecciones*/
let Elections = document.querySelectorAll('.imaged');
console.log(Elections);
for(let elec of Elections)
{
elec.addEventListener('click',()=> 
{
  PlayerElection = elec.value;
  console.log(PlayerElection);/* borrar */
})
} 


/*recargar la pagina*/
function reload(){ location.reload()}



/*la compu selecciona una opcion*/
function computerSelec()
{
  let random = Math.floor(Math.random() * 3) + 1; 
  
  while(random == 3)
  {
    random = Math.floor(Math.random() * 4) + 1;

  }
  console.log(random)
  return random;
}




/*iniciar juego*/
const startGame = document.querySelector('.start');
startGame.addEventListener('click',()=>{ game() });



function game (){

  let playerVal = PlayerElection;
  let CompuVal = computerSelec();
  console.log(playerVal + " " + CompuVal);

  if (playerVal == "0")
  {
    let nLog = document.createElement('p');
    nLog.textContent="Please, Select Rock paper or Scissors"
    logcont.appendChild(nLog);
    logcont.scrollTop = logcont.scrollHeight;
    atenttion();
  }
  else{
    let operated = playerVal - CompuVal; 
    console.log(operated + "value")
    
    winner(operated);
  }
  if(options == 0){
    let button = document.querySelector('.start');
    button.innerHTML = "play again";
    button.addEventListener('click',reload)
    if (numpwon > numcompwon)
  {
    logcont.lastChild.style.color = "black";
    let nLog = document.createElement('p');
    nLog.textContent="You are the winner, kinda lucky"
    logcont.appendChild(nLog);
    logcont.scrollTop = logcont.scrollHeight;
    gameOverLog()
    let boso = document.querySelector('.rounds-cont')
    boso.innerHTML = "Game Over";
  }
  else
  {
    logcont.lastChild.style.color = "black";
    let nLog = document.createElement('p');
    nLog.textContent="The computer is the winner lol"
    logcont.appendChild(nLog);
    logcont.scrollTop = logcont.scrollHeight;
    gameOverLog()
    let boso = document.querySelector('.rounds-cont')
    boso.innerHTML = "Game Over";
  }
  }
}

function winner(Result)

{
  let end =  Result;
  let coso = rpc(PlayerElection);
  let poso = rpc(computerSelec());
  if ( end == 0)
  {

    let nLog = document.createElement('p');
    nLog.textContent=`Its a tie, both selected ${coso} , play round again`; 
    logcont.appendChild(nLog);
    logcont.scrollTop = logcont.scrollHeight;
    atenttion();
  }else if
     (end == 1 || end == 2 || end == -3){
    numpwon = numpwon + 1;
    pwon.innerHTML = numpwon;
    let nLog = document.createElement('p');
    nLog.textContent="You won, " + coso + " beats " + poso;
    logcont.appendChild(nLog);
    logcont.scrollTop = logcont.scrollHeight;
    atenttion();
    roundsDown()
    roundsUp()
  } else {
    numcompwon = numcompwon + 1;
    compwon.innerHTML = numcompwon;
    let nLog = document.createElement('p');
    nLog.textContent="The computer won, " + poso +  " beats " + coso;
    logcont.appendChild(nLog);
    logcont.scrollTop = logcont.scrollHeight;
    atenttion();
    roundsDown()
    roundsUp()
  }


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

