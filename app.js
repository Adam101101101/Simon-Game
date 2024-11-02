let gameSeq= [];
let userSeq =[];
let btns =["yellow","red","green","blue"]
let started = false;
let p = document.querySelector("p");
let level =0;
// let btn = document.querySelector("button")
document.addEventListener("keypress",function(){
    if(started===false){
        console.log("Game Is Start");
        started = true;
        levelUp();
    }
})
function userFlash(btn){
 btn.classList.add("user")
 setTimeout(function(){
    btn.classList.remove("user")
 },200)
}
//check Ans Is correct Or not 
function checkAns(idx){
    console.log(`current Level Is ${level}`)
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,500)
        }
    }
    else{
        p.innerText = `Game Over! Your Score is ${level}! press any key and Start`
        reset()
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);
    userSeq.push(btn.getAttribute("id"))
    console.log(userSeq)
    checkAns(userSeq.length-1);
}
function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },300)
    }

function levelUp(){
    level++;
    userSeq =[];
    p.innerText = `level ${level}`
  // select the random number 
  let randBtnIndx = Math.floor(Math.random() * 3);
  let randCol = btns[randBtnIndx];
  let ranBtn = document.querySelector(`.${randCol}`);
  gameFlash(ranBtn);
  gameSeq.push(randCol);
  console.log(gameSeq)

}

let AllBtn = document.querySelectorAll(".box")
for(btn of AllBtn){
   btn.addEventListener("click",btnPress);
   
}
function reset(){
    started=false;
    userSeq=[]
    gameSeq=[]
    level=0;
}
// add Button click add Start
let startButton = document.getElementById("start-button");

startButton.addEventListener("click", function() {
    if (started === false) {
        console.log("Game Is Start");
        started = true;
        levelUp();
    }
});
