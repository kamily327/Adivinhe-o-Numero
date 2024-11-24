function enviar(){

let numero =parseInt( Math.random() * 10 ) + 1 ;

    let numero_usuario =parseInt(document.getElementById('numero_usuario').value)
    let res = document.getElementById('res')
    if(numero_usuario < 1 || numero_usuario > 10 || isNaN(numero_usuario)){
        res.innerHTML =('Numero Invalido <br>digite um numero de 1 a 10')
    }

    else{
    if(numero_usuario < numero){
    res.innerHTML=('Voce chutou abaixo do <br>numero gerado, tente novamente <hr>')
    }
    if(numero_usuario > numero){
    res.innerHTML = ('Voce chutou acima do <br>numero gerado, tente novamente <hr>')
    }
    if(numero_usuario == numero){
        acertou = true
    res.innerHTML = ('Voce acertou <hr>')
    }
    }
}
