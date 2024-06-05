const dia = window.document.getElementById('dia')
const hora = window.document.getElementById('hora')
const minuto = window.document.getElementById('minuto')
const segundo = window.document.getElementById('segundo')

const lançamento = '19 sep 2024'

function countdown() {
    const dataDeLancamento = new Date(lançamento)
    const hoje = new Date()

    const totalDeSegundos = (dataDeLancamento - hoje)/1000;

    const finalDias = Math.floor(totalDeSegundos / 60 / 60 / 24);
    const finalHoras = Math.floor(totalDeSegundos / 60 / 60) % 24;
    const finalMinutos = Math.floor(totalDeSegundos / 60) % 60;
    const finalSegundos = Math.floor(totalDeSegundos) % 60;

    dia.innerHTML = (finalDias)
    hora.innerHTML = (finalHoras)
    minuto.innerHTML = (finalMinutos)
    segundo.innerHTML = (finalSegundos)
}

countdown();
setInterval(countdown, 1000)