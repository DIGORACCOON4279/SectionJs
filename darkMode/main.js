

/************************* DarkMode *****************************/


// Pseudocodigo
// *crear los estilos de background y color en css
// *crear dos constantes en el archivo de js osea main:
//  una clase para body y otra para button  o sea la clase toggleDarkMode
// *en la clase creada para el button toggleDarkMode escuche el evento para encender y pagar

// const toggleDarkMode = document.querySelector(".toggleDarkMode");
// const body = document.querySelector("body");

// toggleDarkMode.addEventListener("click", e =>{
//     body.classList.toggle("roomDarkMode");
// });


const toggleDarkMode = document.querySelector('.toggleDarkMode');
const body = document.querySelector('body');

load();

toggleDarkMode.addEventListener('click', e =>{
    body.classList.toggle('roomDarkMode');
    store(body.classList.contains('roomDarkMode'));
});

function load(){
    const roomDarkMode = localStorage.getItem('roomDarkMode');

    if(!roomDarkMode){
        store('false');
    }
    else if(roomDarkMode == 'true'){
            body.classList.add('roomDarkMode');
        }
    }

function store(valor){
    localStorage.setItem('roomDarkMode', valor);

}
