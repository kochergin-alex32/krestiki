const startGame = startGameRender()
document.body.innerHTML = ""
document.body.insertAdjacentHTML('afterbegin', startGame);



function startGameRender(){
    
    return `<div class="register ">
   
    <div class="name">
    <span class="styles">
    крестики
    </span>
    <span class="styles">-</span>
    <span class="styles">нолики</span>
    </div>
    
    <button class="pusk">начало игры</button>        
    </div>
    `
    
}
function newGame(){
 
    
    console.log(7777);
    document.body.innerHTML = "";

    registerNameRender();
  
}

document.querySelector('.pusk').addEventListener('click', newGame)
