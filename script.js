const choices=document.querySelectorAll(".choice");
const moves=document.querySelector("#play");
const userscore=document.querySelector("#man");
const aiscore=document.querySelector("#bot");
const reset=document.querySelector("#reset");
const newgame=(reset)=>{
    reset.addEventListener("click",()=>{
        aiscore.innerText=0;
        userscore.innerText=0;
        moves.innerText="Play Again";
    });
};
const drawgame=()=>{
    moves.innerText="DRAW";
};
const showwinner=(userwin)=>{
if(userwin){
   moves.innerText="You win!";
   userscore.innerText++;
}else{
    moves.innerText="You Lose!";
    aiscore.innerText++;
}
}
const playgame=(userchoice)=>{
    console.log("the user choice is",userchoice);
const getchoice= getcompchoice();   
console.log("the comp choice is",getchoice);
if(userchoice===getchoice){
    drawgame();
} else {
    let userwin=true;
    if(userchoice==="rock"){
        userwin=getchoice==="paper"? false:true;
    }
    else if(userchoice==="paper"){
        userwin=getchoice==="scissor"?false:true;
    }
    else{
        userwin=getchoice==="rock"?false:true;
    }
    showwinner(userwin);
}
};
choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playgame(userchoice);
  })
});
const getcompchoice=()=>{
const options=["rock","paper","scissor"];
const index=Math.floor(Math.random()*3);
return options[index];
};
newgame(reset);