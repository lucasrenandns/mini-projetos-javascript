
let calcular = document.getElementById('calcular')

calcular.addEventListener('click', imc)

function imc() {

    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if (nome == '' || altura == '' || peso == '') {
        
        window.alert('Preencha todos os campos para continuar!')
    }

    else {

        const valor_imc = (peso / (altura * altura))
        let classificação = null

        if (valor_imc < 18.5) {
            classificação = ' abaixo do peso. Se cuida!'
        }

        else if (valor_imc >= 18.5 && valor_imc <= 24.9) {
            classificação = ' no peso ideal. Parabéns!'
        }

        else if (valor_imc >= 25 && valor_imc <= 29.9) {
            classificação = ' com sobrepeso. Atenção!'
        }

        else {
            classificação = ' com obesidade. Cuidado!'
        }

        resultado.textContent = `Olá ${nome.toUpperCase()}, seu IMC é ${valor_imc.toFixed(2)}. Você está ${classificação}!`
    }

}

