let segundos = 2
let horas = 0
let minutos = 10
let dias = 0





function actualizarHora() {

    let textoSegundos
    let textoMinutos
    let textoHoras  

    if (segundos < 0){
        segundos = 59
        minutos--
    }

    if(segundos < 10){
        textoSegundos = "0" + segundos
    }else{
        textoSegundos = segundos
    }
    
    if(minutos < 10){
        textoMinutos = "0" + minutos
    }else{
        textoMinutos = minutos
    }

    if (minutos < 0){
        minutos = 59
        horas--
    }

    if (horas < 0){
        horas = 24
        dias--
    }

    if (horas < 10){
        textoHoras = "0" + horas
    }else{
        textoHoras = horas
    }

    if (dias < 0){
        dias = 0
        textoHoras = 0
        textoMinutos = 0
        clearInterval(intervalo)
    }

    botonDias = document.getElementById("botonDias").addEventListener("click", function(e){
        e.preventDefault()
        var inputDias = document.getElementById("inputDias").value
        dias = inputDias
    })

    botonHoras = document.getElementById("botonHoras").addEventListener("click", function(e){
        e.preventDefault()
        var inputHoras = document.getElementById("inputHoras").value
        horas = inputHoras
    })

    botonMinutos = document.getElementById("botonMinutos").addEventListener("click", function(e){
        e.preventDefault()
        var inputMinutos = document.getElementById("inputMinutos").value
        minutos = inputMinutos
    })


    cuentaAtras = document.getElementById("cuentaAtras").innerHTML = dias + ":" + textoHoras + ":" + textoMinutos + ":" + textoSegundos;
    segundos--;
}
intervalo = setInterval(actualizarHora, 1000)




