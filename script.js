
const elementosExercicio = document.querySelectorAll('.exercicio');
const elementoTela = document.querySelector('.tela');
const elementoVoltar = document.querySelector('.voltar');
const elementoClose = document.querySelector('.close');
const elementoPlay = document.querySelector('.play');
const elementoPause = document.querySelector('.pause');
const elementoCronometro = document.querySelector('.cronometro');
const elementoHorario = document.querySelector('.horario');
const elementoMinuto = document.querySelector('.minuto');
const elementoSegundo = document.querySelector('.segundo');
const elementoCentesimo = document.querySelector('.centesimo');

let timer = 0;
let idIntervalo;


// adiciona a classe tela--cronometro 
elementosExercicio.forEach(function(elementoExercicio){
    elementoExercicio.addEventListener('click', function(){
        elementoTela.classList.add('tela--cronometro');
    });
});

// remove a classe tela--cronometro
elementoVoltar.addEventListener('click', function(){
    elementoTela.classList.remove('tela--cronometro');
    clicouClose();
});

function clicouClose() {
    elementoCronometro.classList.remove('iniciou');
    clearInterval(idIntervalo);
    timer = 0;
    atualizarCronometro();
}

// remove a classe iniciou
elementoClose.addEventListener('click', function(){
    clicouClose();
});

function clicouPlay() {
    elementoCronometro.classList.add('iniciou');
    rodarTimer();
}

// adiciona a classe iniciou
elementoPlay.addEventListener('click', function(){
    clicouPlay();
});

function clicouPause() {
    elementoCronometro.classList.remove('iniciou');
    clearInterval(idIntervalo);
}

// remove a classe iniciou
elementoPause.addEventListener('click', function(){
    clicouPause();
});




// atualizar horário
function atualizarHorario(){
    const horas = new Date().getHours().toString().padStart(2,'0');
    const minutos = new Date().getMinutes().toString().padStart(2,'0');
    const horario = horas + ":" + minutos;
    elementoHorario.innerText = horario;
}



// atualiza horário de 1 em 1 segundo
atualizarHorario();
setInterval(() => {
    atualizarHorario();
}, 1000);

// construíndo o cornômetro
function rodarTimer() {
    idIntervalo = setInterval(() => {
        timer += 10;
        atualizarCronometro();
    }, 10);    
}


function atualizarCronometro() {
    const minutos = Math.floor(timer/60000).toString().padStart(2,'0');
    const segundos = Math.floor((timer%60000)/1000).toString().padStart(2,'0');
    const centesimos = Math.floor(((timer%60000)%1000)/10).toString().padStart(2,'0');
    const tempoCronometro = minutos + ":" + segundos + ":" + centesimos;

    elementoMinuto.innerText = minutos;
    elementoSegundo.innerText = segundos;
    elementoCentesimo.innerText = centesimos;

    console.log(tempoCronometro);
}






