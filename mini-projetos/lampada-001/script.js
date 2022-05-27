
let ligada = document.querySelector('#ligada')
let desligada = document.querySelector('#desligada')
let lampada = document.querySelector('#lampada')

ligada.addEventListener('click', ligar) 
desligada.addEventListener('click', desligar)

lampada.addEventListener('mouseover', ligar)
lampada.addEventListener('mouseleave', desligar)
lampada.addEventListener('dblclick', quebrar)

function ligar() {

    if (!lampada_quebrada()) {
        lampada.src = 'img/ligada.jpg' 
    }
} 
    
function desligar() {

    if (!lampada_quebrada()) {
        lampada.src = 'img/desligada.jpg'
    }  
}

function quebrar() {
    lampada.src = 'img/quebrada.jpg'
}

function lampada_quebrada(){
    return lampada.src.indexOf ('quebrada') > -1
}