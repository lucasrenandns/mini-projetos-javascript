
const img = document.querySelector("#img")
const buttons = document.querySelector("#buttons")

let idInterval = null
let indiceCor = 0

// evento tráfego
function trafficLight(event) {

    pararAutomatico()
    ligado[event.target.id]()
}

// parar automático
const pararAutomatico = () => {

    clearInterval(idInterval)    
}

// próxima cor
const proximoIndice = () => {

    if (indiceCor < 2) {
        ++indiceCor
    }
    else {
        indiceCor = 0
    }
}

// cor automática
const automaticCor = () => {

    const cores = ['red', 'yellow', 'green']
    const cor = cores[indiceCor]
    ligado[cor]()
    proximoIndice()
}

// ligar semáforo
const ligado = {

    'red': () => img.src = 'img/vermelho.png',
    'yellow': () => img.src = 'img/amarelo.png',
    'green': () => img.src = 'img/verde.png',
    'automatic': () => idInterval = setInterval(automaticCor, 1000)
}

buttons.addEventListener('click', trafficLight)