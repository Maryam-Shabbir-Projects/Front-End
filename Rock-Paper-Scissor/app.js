
let userScore = 0;
let comScore = 0;
//Access
const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const scoreOfUser = document.querySelector("#user-score");
const scoreOfCom = document.querySelector("#com-score");

//computer choice generate
const genComChoice =()=> {
let options = ["rock","paper","scissor"];
const rndmIndx = Math.floor(Math.random()*3);
return options[rndmIndx];
}

//user choice
choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        //calling of function
        playGame(userChoice);
    })
})

//playing game
const playGame = (userChoice)=>{
    console.log("user choice : ",userChoice);
    //comp choice
   const comChoice = genComChoice();
   console.log("computer choice: ",comChoice);
   //draw
   
   if(userChoice==comChoice){
    draw();
   }
   else{
    let userWin= true;
 if(userChoice == "rock"){
    userWin = comChoice == "scissor"?true:false;
}
else if(userChoice == "paper"){
    userWin = comChoice == "rock"?true:false;
}
else{
    userWin = comChoice == "paper"?true:false;
}
showWinner(userWin,userChoice,comChoice);
}
}
//win draw or lost
const draw = ()=>{
    console.log("its a draw game");
     msg.innerText = "It's a draw.Try again."; 
     msg.style.backgroundColor = "black";  
}
let showWinner = (userWin,userChoice,comChoice)=>{
if(userWin){
    console.log("you win!");
    msg.innerText = `you win! your ${userChoice} beat ${comChoice}`; 
    msg.style.backgroundColor = "green";
    userScore++;
    scoreOfUser.innerText = userScore;
}
else{
    console.log("you lost!");
    msg.innerText = `you lost! ${comChoice} beat your ${userChoice}`;
    msg.style.backgroundColor = "red";
    comScore++;
    scoreOfCom.innerText = comScore;
}
}

