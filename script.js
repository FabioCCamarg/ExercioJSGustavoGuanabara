function contar() {
    //Pegar os Dados
    let inicio = document.querySelector('#inicio')
    let fim = document.querySelector('#fim')
    let passo = document.querySelector('#passo')
    //resultado
    let res = document.querySelector('.res')


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML ='Impossível contar!'
        
        
    }
    res.innerHTML = 'Contando: <br>'

    //Converter para numeros
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    //Verificar se o passo foi digitado
    if (passo <= 0){
        alert('Passo invalido! Consideraando PASSO 1')
        p = 1
    }
    //Contagem crescente
    if (i < f) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
        //Contagem decrescente
    } else {
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}