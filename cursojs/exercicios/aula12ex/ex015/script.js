function verificar() {
    var ano = new Date().getFullYear()
    var fano = document.getElementById('iano')   
    var res = document.querySelector('div#res')
    if (fano.value == 0 || fano.value < 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')    
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 14) {
                //criança
            }else if (idade < 21){
                //jovem
            }else if (idade < 50){
                //adulto
            }else {
                //idoso
            }
        }else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 14) {
                //criança
            }else if (idade < 21){
                //jovem
            }else if (idade < 50){
                //adulto
            }else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}