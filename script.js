
const winner = document.querySelector("#winner");
const cells = document.querySelectorAll('.cell');
const restartButton = document.querySelector('#restart-button');
const turnInfo = document.querySelector('#turn-info');
const names = JSON.parse(localStorage.getItem('names'));
console.log('имна ' +names);
let nameX = names[0]
let nameO = names[1];

const players = {
   x: {
        x:"x",
        name:nameX
        },
    o: {
        x:"o",
        name:nameO
    }
}
let currentPayer = "";
let currentPayerName = '';
let isGameRunning = false;
let boardState = Array(9).fill("");
const winLines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
// console.log(players.x.x);
function initializeGame(){
    
    cells.forEach((cell)=>{
        cell.addEventListener('click', clickCell);
    });
    restartButton.addEventListener('click', restartGame);
}



function startGame(){
    isGameRunning = true;
    cells.forEach(cell => cell.textContent = "");
    boardState = Array(9).fill("");
    winner.textContent = "";
    currentPayer = players.x.x;
    currentPayerName = players.x.name
    turnInfo.textContent = `сейчас ходит '${currentPayerName}'`;
  
}


function clickCell() {
   
    if(!isGameRunning){
        
        return;
    }
    if(this.textContent){
     
        return;
    }
    this.textContent = currentPayer;
    const cellIndex = this.dataset.cellIndex;
    boardState[cellIndex] = currentPayer;
   
    if(checkGameOver()){
        return finishGame();
    }
    currentPayer = (currentPayer === players.x.x) ? players.o.x : players.x.x;
    currentPayerName = (currentPayerName===players.x.name) ? players.o.name : players.x.name;
    console.log(currentPayerName);
    turnInfo.textContent = `сейчас ходит '${currentPayerName}'`;
}
function checkLine(line){
    const [a,b,c] = line;

    const cellA = boardState[a];
    const cellB = boardState[b];
    const cellC = boardState[c];
    if ([cellA,cellB,cellC].includes("")){
        return false;
    }
    return cellA===cellB && cellB===cellC

}
function checkGameOver(){
    
    for(const line of winLines){
        if(checkLine(line)){
            winner.textContent = ` победил  "${currentPayerName}"`;
            return true;
        }
    }
    if(!boardState.includes("")){
        winner.textContent = "ничья!!!!";
        return true;
    }
};
function finishGame(){
    console.log('fin');
    isGameRunning = false;
    turnInfo.textContent = "";
   
  
};

function restartGame() {
    finishGame();
    // boardState = Array(9).fill("");
    startGame();
    console.log(boardState);

};

window.addEventListener('load', () =>{
    initializeGame();
    startGame();
    
});