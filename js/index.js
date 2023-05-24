let numero1 = document.getElementById ('number1');
let numero2 = document.getElementById ('number2');
let numero3 = document.getElementById ('number3');
let numero4 = document.getElementById ('number4');

let colorr = document.getElementsByClassName('numbers');
let colo = document.getElementsByClassName('result-component');

let resultado = document.getElementById('resultados');

let button = document.getElementById('button');

let letra = document.getElementsByClassName('status');

let parrafo = document.getElementsByClassName('result-component-paragraph');

function rand() {
    numero1.textContent = Math.trunc(Math.random()*100);
    numero2.textContent = Math.trunc(Math.random()*100);
    numero3.textContent = Math.trunc(Math.random()*100);
    numero4.textContent = Math.trunc(Math.random()*100);
}

function promedio() {
    resultado.textContent = (parseInt(numero1.textContent) + parseInt(numero2.textContent) + parseInt(numero3.textContent) + parseInt(numero4.textContent))/4;
    resultado.textContent = Math.trunc (resultado.textContent);
}

function colores () {
    if (resultado.textContent<=43){
        colorr[0].style.backgroundColor = ('#9e0004');
        colo[0].style.backgroundColor = ('#f51441');
        button.style.backgroundColor = ('red');
        letra[0].innerHTML = 'Danger';
        parrafo[0].innerHTML = 'You got a score of ' + resultado.textContent +'% your status is critical'; 
        parrafo[0].style.color = ('#b9a9fd');
        } else if (resultado.textContent <=75){
        colorr[0].style.backgroundColor = ('#eda011');
        colo[0].style.backgroundColor = ('#ffab03');
        button.style.backgroundColor = ('yellow');
        letra[0].innerHTML = 'Medium';
        parrafo[0].innerHTML = 'You got a score of ' + resultado.textContent +'% your status is Medium';
        parrafo[0].style.color = ('#b9a9fd'); 
    }else if (resultado.textContent <=100){
        colorr[0].style.backgroundColor = ('#079ea6');
        colo[0].style.backgroundColor = ('#40957f');
        button.style.backgroundColor = ('blue');
        letra[0].innerHTML= 'Great';
        parrafo[0].innerHTML = 'You got a score of ' + resultado.textContent +'% your status is Great';
        parrafo[0].style.color = ('#b9a9fd'); 
    }
}

button.onclick= ( function(){
    rand();
    promedio();
    colores();
});
    
    
    
    







