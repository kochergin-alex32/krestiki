
function registerNameRender1(){
    document.body.insertAdjacentHTML('afterbegin',
     `<div class="register ">
     <div class="name ">
     <label for="">кто ты, воин...?</label>
     <input class="nameInp"id="nameX" type="text" placeholder=" введите имя"  >
     </div>
     <div class="name">
   
     <button class="start"> добавить </button>        
     </div>
     `)
     
 
     function getNames(){
  
         const nameX = document.querySelector('#nameX').value;
         const nameO = 'kiborg'
        //  var names = [nameX]
         var names = [nameX, nameO]
         // console.log(names);
         localStorage.setItem('names',JSON.stringify(names));
         
         document.body.innerHTML = "";
     
         renderGameArea1();
       
     }
     document.querySelector('.start').addEventListener('click', getNames)
     
     
 }