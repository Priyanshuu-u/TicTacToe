let allBtn = document.querySelectorAll(".btn")
const winning =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
for(btn of allBtn)
    btn.addEventListener("click",turn)
let playerX=true;
function turn(){
    btn =this;
if(playerX){
    // btn.innerText="X";
   
    btn.innerText="X";
    playerX=false;
}
else{
    btn.innerText="O";
    playerX=true;
}

btn.disabled=true;
checkWinner();
}
let reset = document.querySelector(".reset");

reset.addEventListener("click",resetgame);
function resetgame(){
    playerX=true;
    allBtn.forEach(button => {
        button.innerText = ""; // Reset text
        button.disabled = false; // Enable button
        result.innerText="";
    });
}
let result = document.querySelector(".result");
function checkWinner(){
    const board = Array.from(allBtn).map(button => button.innerText);//getting all inner text
    console.log(board)
    for (let combo of winning) {
        const [a, b, c] = combo;//destructuring
        if (board[a] && board[a] === board[b] && board[a] === board[c]) { //board[a]!=0 and board[a]=board[b]=board[c]
            result.innerText=`Player ${board[a]} wins!`;
            allBtn.forEach(button => {
           
                button.disabled = true; // Enable button
            });
            
        }
    }
    if (board.every(cell => cell)) {
        result.innerText="It's a draw!"
    }
}