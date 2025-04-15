// userScore=0;
// compScore=0;

// let choices=document.querySelectorAll(".choice");

// const gencompChoice=()=>{
//     let options=["rock","paper","scissors"];
//     let randIdx=Math.floor(Math.random()*3);
//     return options[randIdx];
// }

// const drawGame=()=>{
//     console.log("draw");
// }

// const playGame=(userChoice)=>{
//     const compChoice=gencompChoice();
//     console.log("player choice=",userChoice);
//     console.log("comp Choice=",compChoice)
    
//     if (compChoice===userChoice){
//         drawGame();
        
//     }
    
//     else {
//         let userWin=true;
//         if (userChoice==="rock"){
//             userWin=compChoice==="paper" ? false:true;
//         }
//         else if(userChoice==="paper"){
//             userWin=compChoice==="scissors" ? false:true;
//         }
//         else if(userChoice==="scissors"){
//             userWin=compChoice==="rock" ? false:true;
//         }
//         result(userWin);
//     }

// }
// const result=(userWin)=>{
//     if (userWin){
        
//         console.log("You Win");
        
//     }
//     else{
        
//         console.log("You lost");
//     }
// }

// choices.forEach((choice)=>{
//     choice.addEventListener("click",()=>{
//         const userChoice=choice.getAttribute("id");
//         playGame(userChoice);
        
//     });
// });
// let userScore=0;
// let compScore=0;
// let choices=document.querySelectorAll(".choice");


// const gencompChoice=()=>{
//     options=["rock","paper","scissors"];
//     randIdx=Math.floor(Math.random()*3);
//     return options[randIdx];
// }

// const drawGame=()=>{
//     console.log("draw");
// }
//     const result=(userWin)=>{
//         if (userWin){
//             console.log("You win");
//         }
//         else{
//             console.log("You lose");
//         }
//     }

// const playGame=(userChoice)=>{
//     const compChoice=gencompChoice();
//     console.log("player=",userChoice);
//     console.log("computer=",compChoice);
//     if (compChoice===userChoice){
//         drawGame();
//     }
//     else{
//         let userWin=true;
//         if(userChoice==="rock"){
//             userWin=compChoice==="paper" ? false:true;
//         }
//         else if (userChoice==="paper"){
//             userWin=compChoice==="scissors" ? false:true;
//         }
//         else if(userChoice==="scissors"){
//             userWin=compChoice==="rock" ? false:true;
//         }
//         result(userWin);
//     }
// }


// choices.forEach((choice)=>{
//     choice.addEventListener("click",()=>{
//         const userChoice=choice.getAttribute("id");
//         playGame(userChoice);
//     });
// });

let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".move");
const Uscore=document.querySelector(".userScore");
const Cscore=document.querySelector(".compScore");
const gencompChoice=()=>{
    options=["rock","paper","scissors"];
    randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=(userChoice)=>{
    console.log("Draw.");
    msg.innerText=` It's a Draw. You both chose ${userChoice}.`
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
    
}
const result=(userWin,userChoice,compChoice)=>{
    if (userWin){
        userScore++;
        Uscore.innerText=userScore;
        console.log("You win");
        msg.innerText=` You win. your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }
    else{
        compScore++;
        Cscore.innerText=compScore;
        console.log("You lost");
        msg.innerText=` You lose. ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
}

const WorL=(compChoice,userChoice)=>{
    if (compChoice===userChoice){
        drawGame(userChoice);
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false:true;
        }
        else if(userChoice==="scissors"){
            userWin=compChoice==="rock" ? false:true;
        }
    
        result(userWin,userChoice,compChoice);
    }

}

const playGame=(userChoice)=>{
    const compChoice=gencompChoice();
    console.log("player=",userChoice);
    console.log("computer=",compChoice);
    WorL(compChoice,userChoice);
    
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});