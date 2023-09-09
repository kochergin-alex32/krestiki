function renderGameArea1(){
    const names = JSON.parse(localStorage.getItem('names'));
// console.log('имна ' +names);

let nameX = names[0]
let nameO = names[1];
    
    document.body.insertAdjacentHTML('afterbegin',`<div  id="game-container">
	<div class="winCounter">
    <div class="wins">
    <div id="wins1"></div>:
    <span id="check1">0</span>
</div> 
<h1 id="winner">победил</h1>
<div class="wins" >
    <div id="wins2">💻</div>:
     <span id="check2">0</span>
    </div>
</div>
    <div id="cells-container">
        <div class="cell" data-cell-index="0"></div>
        <div class="cell" data-cell-index="1"></div>
        <div class="cell" data-cell-index="2"></div>
        <div class="cell" data-cell-index="3"></div>
        <div class="cell" data-cell-index="4"></div>
        <div class="cell" data-cell-index="5"></div>
        <div class="cell" data-cell-index="6"></div>
        <div class="cell" data-cell-index="7"></div>
        <div class="cell" data-cell-index="8"></div>
    </div>
    <p id="turn-info">?win</p>
    <button id="restart-button">ещё раз</button>
    
    
    </div>`);
let isGameRunning = false;
const winner = document.querySelector("#winner");
const cells = document.querySelectorAll('.cell');
const restartButton = document.querySelector('#restart-button');
const turnInfo = document.querySelector('#turn-info');

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
let currentPayerName = ''

let boardState = [null, null, null, null, null, null, null, null, null]
let arrWin = Array(9).fill("");

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

// переменнные для счетчика
const win1= document.querySelector('#wins1');
// const win2= document.querySelector('#wins2');
const check1 = document.querySelector('#check1');
const check2 = document.querySelector('#check2');


function startGame(){
    isGameRunning = false;
    cells.forEach(cell => cell.textContent = "");
    boardState = [null, null, null, null, null, null, null, null, null]
    arrWin = Array(9).fill("");

    winner.textContent = "";
    currentPayer = players.x.x;
    currentPayerName = players.x.name
    turnInfo.textContent = ` ходит ${currentPayerName}`;

	 // ниже переменные присваивают имена пользователей счетчику
	 win1.textContent=`${nameX}`;
	 // win2.textContent=`${nameO} `;
  
}


const concat = function(a, b, c){
	let result = boardState[a] + boardState[b] + boardState[c] 
	
	if (result === "xxx" || result === "ooo"){
		return result
	}
	
	switch (result){
		case "xxnull":
          
			return ["x", c]
			
		case "xnullx":
			return ["x", b]
			
		case "nullxx":
			return ["x", a]
			
		case "oonull":
			return ["o", c]
			
		case "onullo":
			return ["o", b]
			
		case "nulloo":
			return ["o", a]
	}
    // console.log(result);
}

function checkLine(line){
    const [a,b,c] = line;
   
    boardState.forEach((item,i)=>{
        if(item!=null){
           
            arrWin[i]=item
        }
    })
    const cellA = arrWin[a];
    const cellB = arrWin[b];
    const cellC = arrWin[c];
    if ([cellA,cellB,cellC].includes("")){
        return false;
    }
    if(cellA==="o" && cellB==="o" && cellC==="o"){
        console.log(cellA,cellB,cellC);
        winner.textContent = ` победил 💻`;
		let chek1=`${check1.textContent}`;
		let chek2=`${check2.textContent}`;
		if(currentPayerName===win1.textContent){
		chek2++;
		check2.textContent=chek2
		}
		
        finishGame()
    }else{
        return cellA===cellB && cellB===cellC

    }
 
   

}


function checkGameOver(){
    
    for(const line of winLines){

        if(checkLine(line)){
            winner.textContent = ` победил ${currentPayerName}`;
			 
			
		//    счетчик побед
		let chek1=`${check1.textContent}`;
		let chek2=`${check2.textContent}`;
		if(currentPayerName===win1.textContent){
		chek1++;
		check1.textContent=chek1
		}
		
            finishGame()
            return true;
        }
    }
    if(!arrWin.includes("")){
        winner.textContent = "ничья!!!!";
        
        return true;
    }
    
};

function finishGame(){
    console.log('fin');
    
    isGameRunning = true;
   
    turnInfo.textContent = "";
   
  
};


const botZero = ()=>{
	
	//проверка комбинаций из двух "оо"
	for (var i = 0; i < 3; i++){
		var result = concat(i, i + 3, i + 6)
		
		if (typeof(result) === "object" && result[0] === "o"){
			cells[result[1]].innerHTML = "o"
			boardState[result[1]] = "o"
			return
		}
	}
	
	for (var i = 0; i <= 6; i +=3){
		var result = concat(i, i + 1, i + 2)
		
		if (typeof(result) === "object" && result[0] === "o"){
			cells[result[1]].innerHTML = "o"
			boardState[result[1]] = "o"
			return
		}
	}
	
	result = concat(0, 4, 8)
	if (typeof(result) === "object" && result[0] === "o"){
		cells[result[1]].innerHTML = "o"
		boardState[result[1]] = "o"
		return
	}
	
	result = concat(2, 4, 6)
	if (typeof(result) === "object" && result[0] === "o"){
		cells[result[1]].innerHTML = "o"
		boardState[result[1]] = "o"
		return
	}	
	
	//проверка комбинаций из двух "xx"
	for (var i = 0; i < 3; i++){
		var result = concat(i, i + 3, i + 6)
		
		if (typeof(result) === "object" && result[0] === "x"){
			cells[result[1]].innerHTML = "o"
			boardState[result[1]] = "o"
			return
		}
	}
	
	for (var i = 0; i <= 6; i +=3){
		var result = concat(i, i + 1, i + 2)
		
		if (typeof(result) === "object" && result[0] === "x"){
			cells[result[1]].innerHTML = "o"
			boardState[result[1]] = "o"
			return
		}
	}
	
	result = concat(0, 4, 8)
	if (typeof(result) === "object" && result[0] === "x"){
		cells[result[1]].innerHTML = "o"
		boardState[result[1]] = "o"
		return
	}
	
	result = concat(2, 4, 6)
	if (typeof(result) === "object" && result[0] === "x"){
		cells[result[1]].innerHTML = "o"
		boardState[result[1]] = "o"
		return
	}
	
	// ставим "о" в случайную пустую ячейку
	var tempArr = []
	
	for(var i = 0; i < 9; i++){
		if (boardState[i] === null){
			tempArr.push(i)
		}
	}
	
	var randIndexTempArr = Math.floor(Math.random() * tempArr.length)
	
	var randNull = tempArr[randIndexTempArr]
	
	cells[randNull].innerHTML = "o"
	boardState[randNull] = "o"	
}

restartButton.addEventListener('click',startGame );

addEventListener("click", function(e){
    let sell = e.target
    let sellIndex = sell.dataset.cellIndex
	if (isGameRunning === true){return}
	if (sell.className === "cell" && sell.textContent === ""){
		sell.textContent = currentPayer
		boardState[sellIndex] = currentPayer
	}
    else{
		return
	}
// для отрисовки ничьей
    checkGameOver()
    if (isGameRunning === true){return}
	setTimeout(botZero(),500);
        // botZero()
        checkGameOver()
    })

startGame()
}
