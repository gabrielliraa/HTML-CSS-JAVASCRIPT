var hora = 0
var min = 0
var seg = 0
var tempo = 1000;
var cron;

function iniciar(){
    
    var btnstart = document.getElementsByClassName('iniciar')[0]

    btnstart.addEventListener("click", function(){

        cron = setInterval(cronometro, tempo)      
        
    })
    

}


function parar(){
    
    var btnstop = document.getElementsByClassName('parar')[0]

    btnstop.addEventListener('click', function(){
        clearInterval(cron)
    })
}


function zerar(){
    
    var btnreset = document.getElementsByClassName('zerar')[0]

    btnreset.addEventListener('click', function(){

        hora = 0
        min = 0
        seg = 0
        setTimeout(clearInterval(cron), 500)
        cronometro()

    })

    

}


function cronometro(){


    var format = (hora < 10 ? '0'+hora:hora) + ':' + (min < 10 ? '0'+min:min) + ':' + (seg < 10 ? '0'+seg:seg)
    document.getElementById('tempo').innerHTML = format
    
    
    seg = seg+1

    if(seg == 60){
        min = min+1
        seg = 0
    }

    if(min == 60){
        hora = hora+1
        min = 0
    }

}

cronometro()
iniciar()
parar()
zerar()





