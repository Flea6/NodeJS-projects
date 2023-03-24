function contar(){
    //var res = document.querySelector('div#res')
    let inicio = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpas')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        //window.alert('[ERRO] faltam dados')
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f){
            // CONTAGEM CRESCENTE
            for (let c = i ; c <= f ; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            } 
        } else {
            // CONTAGEM REGRESSIVA
            for(let c = i; c >= f ; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

}
