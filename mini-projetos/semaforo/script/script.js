
const img = document.querySelector("#img")
const buttons = document.querySelector("#buttons")

let idInterval = null
let indiceCor = 0

// Função evento tráfego
function trafficLight(event) {

    pararAutomatico()
    ligado[event.target.id]()
}

// Função parar automático
const pararAutomatico = () => {

    clearInterval(idInterval)    
}

// Função próxima cor
const proximoIndice = () => {

    if (indiceCor < 2) {
        ++indiceCor
    }
    else {
        indiceCor = 0
    }
}

// Função cor automática
const automaticCor = () => {

    const cores = ['red', 'yellow', 'green']
    const cor = cores[indiceCor]
    ligado[cor]()
    proximoIndice()
}

// função semáforo ligado
const ligado = {

    'red': () => img.src = 'img/vermelho.png',
    'yellow': () => img.src = 'img/amarelo.png',
    'green': () => img.src = 'img/verde.png',
    'automatic': () => idInterval = setInterval(automaticCor, 1000)
}

buttons.addEventListener('click', trafficLight)