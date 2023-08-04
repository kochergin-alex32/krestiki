
const registerName = registerNameRender()
// document.body.innerHTML = "";   
document.body.insertAdjacentHTML('afterbegin',registerName);



function registerNameRender(){
    
    return `<div class="register ">
    <div class="name ">
    <label for="">введите имя 1 игрока</label>
    <input class="nameInp"id="nameX" type="text" placeholder="  имя"  >
    </div>
    <div class="name">
    <label for="">введите имя 2 игрока</label>
    <input  class="nameInp" id="nameO" type="text" placeholder="  имя" >
    </div> 
    <button class="start"> start</button>        
    </div>
    `
    
}
function getNames(){
 
    const nameX = document.querySelector('#nameX').value;
    const nameO = document.querySelector('#nameO').value;
    var names = [nameX, nameO]
    // console.log(names);
    localStorage.setItem('names',JSON.stringify(names));
    document.querySelector('.register').classList.toggle('out');
    document.querySelector('#game-container').classList.toggle('out')
    // document.body.innerHTML = "";

    // renderGameArea();
  
}

document.querySelector('.start').addEventListener('click', getNames)
