
const img = document.querySelector('#image')
const buttons = document.querySelector('.buttons')
let colorindex = 0
let intarval_id = null

const traffic_light = (event) => {

    stop_automatic()
    turnOn[event.target.id]()
    
}

const nextindex = () => {

    if (colorindex < 2) {

        colorindex ++ 
    }

    else {

        colorindex = 0
    }
   
}

const changecolor = () => {

    const colors = ['red', 'yellow', 'green']
    const color = colors[colorindex]
    turnOn[color]()
    nextindex()
}

const stop_automatic = () => {

    clearInterval(intarval_id)
}

const turnOn = {

    'red':  () => img.src = 'img/vermelho.png',
    'yellow':  () => img.src = 'img/amarelo.png',
    'green': () => img.src = 'img/verde.png',
    'automatic': () => intarval_id = setInterval(changecolor, 1000)

}

buttons.addEventListener('click', traffic_light)