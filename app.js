let gameSeq= [];
let userSeq =[];
let started = false;
let p = document.querySelector("p");
document.addEventListener("keypress",function(){
    if(started===false){
        console.log("Game Is Start");
        started = true;
        p.innerText =  "Level 1"
    }
})