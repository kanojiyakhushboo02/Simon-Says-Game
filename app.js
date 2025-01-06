let gameSeq = [];
let userSeq = [];

let btns = ["orange", "pink", "purple","blue"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

// to start the game when any key press on the keyboard
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash"); 
    // after flashing and then back to its original bg color
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

//userflas
function userFlash(btn){
    btn.classList.add("userFlash"); 
    // after flashing and then back to its original bg color
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerText = `level${level}`;

    //randon number to display randay color 
    let randIndx = Math.floor(Math.random()*3) ;
    let randColor = btns[randIndx]; // assigning index of btns array
    let randbtn = document.querySelector(`.${randColor}`); //accessing color class by there name
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}

//check seq is equal or not
function checkAns(idx){
    // console.log("curr level:"+ level);
   
   if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
       setTimeout(levelUp,1000);
    }
   }else{
    h3.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundcolor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundcolor = "white";
    },150)
    reset();
   }
}
// add eventlistener on clicking btn
// btn pressed
function btnPress(){
    let btn = this;// which butn pressed
    console.log(btn);
    userFlash(btn); 
    let userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}










