 /* getting the score out of localatorage
             and updating it */
let score = 
      JSON.parse(localStorage.getItem("score"));
    
    if(score === null) {
      score = {
      wins: 0,
      losses: 0,
      ties: 0,
      }
    }
       updateScore();
    
       /* creating auto play function */
    let isAutoPlaying = false;
    let intervalId;
    
      function autoPlay() {
        if(!isAutoPlaying) {
     intervalId = setInterval(()=> {
          const playerMove = PickComputerMove();
        playGame(playerMove);
      },1000)
      isAutoPlaying = true;
        }else{
          clearInterval(intervalId);
          isAutoPlaying = false;
        }
     }
    
    /* comparing the moves,generating 
        the result and saving the result 
           in localstorage */
    function playGame(playerMove) {
  
    const computerMove = PickComputerMove();
        
     let result = ''; 
  
   if (playerMove === 'scissors') 
   {
     if(computerMove === 'rock')
       {result = 'You Lose';}
       
     else if(computerMove ==='paper')
       {result = 'You Win';}
       
     else if(computerMove === 'scissors')
        {result = 'Tie';}
        } 
    
     else if (playerMove === 'rock') 
       {
          
          if(computerMove === 'rock') 
           {result = 'Tie';}
           
          else if (computerMove === 'paper') 
           {result = 'You Lose';} 
           
          else if (computerMove === 'scissors') 
           {result = 'You Win';}  
       }
      
      
       else if (playerMove === 'paper')   
       {
          if(computerMove === 'rock') 
                {result = 'You Win';}
           
          else if (computerMove === 'paper') 
                  {result = 'Tie';} 
           
          else if (computerMove === 'scissors') 
                 {result = 'You Lose';}  
       }       
         
          if (result === 'You Win')
               {score.wins += 1;} 
           
          else if (result === 'You Lose')
               {score.losses +=1;} 
          
          else if (result === 'Tie') 
              {score.ties +=1;}
         
     localStorage.setItem("score",       
       JSON.stringify(score));
       
      updateScore();
  
    /* puting the result in web page */
    
        document.querySelector('.js-result')
    .innerHTML= result;     

 document.querySelector('.js-moves')
   .innerHTML=`You
    <img src="Images/${playerMove}-emoji.png"
         class="move-icon">
       <img src="Images/${computerMove}-emoji.png" 
         class="move-icon">
       Computer`
   }
   
    
    /* uodating the score from the page */
         
    function updateScore() {
      document.querySelector('.js-score')
  .innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
    
    
       /* generating computer move */
       
   function PickComputerMove () {
    
    let computerMove = '';
    
      const randomNumber = Math.random();
      
         
        if (randomNumber >= 0 && 
               randomNumber < 1 / 3)    
              {computerMove = 'rock';}
         
        else if (randomNumber >= 1 / 3 &&
              randomNumber< 2 / 3)
             {computerMove = 'paper';}
            
        else if (randomNumber >= 2 / 3 &&     
               randomNumber < 1)
               {computerMove = 'scissors';}
               
        return computerMove;
         
    }
