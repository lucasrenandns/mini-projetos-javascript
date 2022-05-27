
let ligada_desligada = document.querySelector('#ligada-desligada')
let lampada = document.querySelector('#lampada')

ligada_desligada.addEventListener('click', ligar_desligar) 

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

function ligar_desligar() {
    
    if (ligada_desligada.textContent == 'Ligar') {
        ligar()
        ligada_desligada.textContent = 'Desligar'
    }

    else {
        desligar()
        ligada_desligada.textContent = 'Ligar'
    }
}