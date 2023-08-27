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
    <button class="pusk1">играть одному</button>        
    <button class="pusk">играть вдвоём</button>        
     </div>
    `
    
}
function newGame(){
 
    
    console.log(7777);
    document.body.innerHTML = "";

    registerNameRender();
  
}
function newGame1(){
 
    
    console.log(7777);
    document.body.innerHTML = "";

    registerNameRender1();
  
}

document.querySelector('.pusk').addEventListener('click', newGame)
document.querySelector('.pusk1').addEventListener('click', newGame1)
