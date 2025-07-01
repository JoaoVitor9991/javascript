

console.log("Mensagem no console");
//essa função é similar ao print no python

var botao_cor = document.getElementById("btn_color");
var botao_mais = document.getElementById("btn_plus");
var botao_menos = document.getElementById("btn_less");
var botao_click = document.getElementById("btn_click");


function mudacor(){
    alert("Muda cor");
}

botao_cor.addEventListener('click',mudacor);