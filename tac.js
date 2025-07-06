let boxes= document.querySelectorAll(".box");
let resetBtn= document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turn0= true;    //player0  or playerX
 const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
 ];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


 boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if(turn0){
            box.innerHTML = "O";
            turn0 = false;
        } else{
            box.innerHTML= "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinnwer();
    });
 });

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled=true;
    }
};


const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled=false;
        box.innerHTML="";
    }
};

const showWinner = (winner) =>{
    msg.innerHTML= `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

 const checkwinnwer = () => {
    for(let pattern of win){
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;
        
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){

                showWinner(pos1val);
            }
        }
    }
 };

 newGameBtn.addEventListener("click", resetGame);
 resetBtn.addEventListener("click", resetGame);