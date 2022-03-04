// score is the h2 display
const score = document.querySelector("#score"); 
// btn roll button
const roll = document.querySelector("#roll")
// dice images 
const dice = document.querySelector("#dice");
// score counter h2 display
let scoreCounter = document.querySelector("#scoreCounter");

const score1 = document.querySelector("#score1"); 
// btn roll button
const roll1 = document.querySelector("#roll1")
// dice images 
const dice1 = document.querySelector("#dice1");
// score counter h2 display
let scoreCounter1 = document.querySelector("#scoreCounter1");

let Counter = 0;
let user1 = 0;

let Counter1 = 0;
let user2 = 0;


// ROLL button
roll.addEventListener("click", function() {
    // button display
    roll.textContent = "Roll"
    // 1. Random number
    let dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    let diceDOM = document.querySelector("#dice");
    diceDOM.style.display = "block";
    diceDOM.src = `./images/${dice}.png`;
// DICE ROLL 
    user1 = dice ;
    score.textContent = user1;
    // score counter 
Counter += user1
scoreCounter.textContent = Counter;
// if dice = 1
        if(dice === 1 && Counter != 20) {
             score.textContent = `You lose!`;
            user1 = 0;
            roll.textContent = `Try again?`;
              roll.addEventListener("click" , ( ) => {
            window.location.reload();
        })
} 


//  IF DICE IS > 1 
        else if (Counter <=20){
            score.textContent = ` You rolled a ${score.textContent}`;
            scoreCounter.textContent = `Your Score is ${scoreCounter.textContent}`;
            user1 = 0;
            // roll.textContent = `Roll Again!`
           ;
        }
        //  IF DICE ONLY = 21
    else if (Counter === 21){
        score.textContent = `You have rolled ${score.textContent} YOU WIN!! `;
        scoreCounter = `Your Score is ${scoreCounter.textContent} YOU WIN!!`;

        user1 = 0;
        roll.textContent = `WINNER`;
        // return roll;
    } else {
        scoreCounter.textContent = ` ${scoreCounter.textContent} Unluckyyyyy!! `
        roll.textContent = `Try again ->`;
        roll.addEventListener("click" , ( ) => {
            window.location.reload();
        })
    }
         
        
    }
    
     
   

    
    );


    

    //Player 2




    // ROLL button
roll1.addEventListener("click", function() {
    // button display
    roll1.textContent = "Roll"
    // 1. Random number
    let dice1 = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result
    let diceDOM1 = document.querySelector("#dice1");
    diceDOM1.style.display = "block";
    diceDOM1.src = `./images/${dice1}.png`;
// DICE ROLL 
    user2 = dice1 ;
    score1.textContent = user2;
    // score counter 
Counter1 += user2
scoreCounter1.textContent = Counter1;
// if dice = 1
        if(dice1 === 1 && Counter1 != 20) {
             score1.textContent = `You lose!`;
            user2 = 0;
            roll1.textContent = `Try again?`;
              roll1.addEventListener("click" , ( ) => {
            window.location.reload();
        })
} 


//  IF DICE IS > 1 
        else if (Counter1 <=20){
            score1.textContent = ` You rolled a ${score1.textContent}`;
            scoreCounter1.textContent = `Your Score is ${scoreCounter1.textContent}`;
            user2 = 0;
            // roll.textContent = `Roll Again!`
           ;
        }
        //  IF DICE ONLY = 21
    else if (Counter1 === 21){
        score1.textContent = `You have rolled ${score1.textContent} YOU WIN!! `;
        scoreCounter1 = `Your Score is ${scoreCounter1.textContent} YOU WIN!!`;

        user2 = 0;
        roll1.textContent = `WINNER`;
        // return roll;
    } else {
        scoreCounter1.textContent = ` ${scoreCounter1.textContent} Unluckyyyyy!! `
        roll1.textContent = `Try again ->`;
        roll1.addEventListener("click" , ( ) => {
            window.location.reload();
        })
    }
         
        
    }
    
     
   

    
    );



            
            



      

      


       

      

