const player1 = 'X'
const player2 = 'O'
var playTime = player1
var fimDeJogo = false

mostrador()
initialize()

function mostrador(){

    if(fimDeJogo){return;}

    if(playTime == player1){
        var player = document.querySelectorAll('div#contador img')[0]
        player.setAttribute('src', 'imagens/x.png')
        }

    else{
        var player = document.querySelectorAll('div#contador img')[0]
        player.setAttribute('src', 'imagens/circulo.png')
    }

}



function initialize(){
    var posicao = document.getElementsByClassName('posicao')
    
    for(var cont = 0; cont < posicao.length; cont++){

        posicao[cont].addEventListener("click", function(){

            
            if(fimDeJogo){return;}

            if(this.getElementsByTagName('img').length == 0){

                if(playTime == player1){

                    this.innerHTML = "<img src = 'imagens/x.png'>"
                    this.setAttribute('jogada', player1)
                    playTime = player2
                }

                else{

                    this.innerHTML = "<img src ='imagens/circulo.png'>"
                    this.setAttribute('jogada', player2)
                    playTime = player1

                }
                mostrador()
                resultado()
            }

        })

    }

}



function resultado(){

    var x1 = document.getElementById('x1').getAttribute('jogada')    
    var x2 = document.getElementById('x2').getAttribute('jogada')
    var x3 = document.getElementById('x3').getAttribute('jogada')

    var y1 = document.getElementById('y1').getAttribute('jogada')
    var y2 = document.getElementById('y2').getAttribute('jogada')
    var y3 = document.getElementById('y3').getAttribute('jogada')

    var z1 = document.getElementById('z1').getAttribute('jogada')
    var z2 = document.getElementById('z2').getAttribute('jogada')
    var z3 = document.getElementById('z3').getAttribute('jogada')

    vencedor = ''

    if((x1 == x2 && x1 == x3 && x1 !='' ) || (x1 == y1 && x1 == z1 && x1 !='') || (x1 == y2 && x1 == z3 && x1 !='')){
        
        vencedor = x1
    }

    if((y2 == x2 && y2 == z2 && y2 != '') || (y2 == y1 && y2 == y3 && y2 != '') || (y2 == z3 && y2 == x3 && y2 != '')){

        vencedor = y2

    }

    if((z3 == z2 && z3 == z1 && z3 != '') || (z3 == y3 && z3 == x3 && z3 != '')){
        vencedor = z3
    }


    if(vencedor != ''){
        fimDeJogo = true
        setTimeout(() => {alert(`O vencedor foi o : ${vencedor}`)}, 500)
    }


}











