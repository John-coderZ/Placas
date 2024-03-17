const mobile = document.querySelector('#mobile'); 

function toggleMenu(event) {

    if(event.type === 'touchstart') preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains ('active');
    event.currentTarget.SetAttribute('aria-expanded', active);
    if(active) {   
        event.currentTarget.SetAttribute('aria-label', 'Fechar Menu');
    }else{
        event.currentTarget.SetAttribute('aria-label', 'Abrir Menu');
    }  

} 
   addEventListener('click', toggleMenu);
   addEventListener('touchstart', toggleMenu);


var conter = 1;
setInterval(function(){
    document.getElementById('radio' + conter).checked = true;
    conter++;
    if(conter > 2){
        conter = 1;
    }
},10*1000);


