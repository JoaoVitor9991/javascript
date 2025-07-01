

console.log("Mensagem no console");
//essa função é similar ao print no python

var botao_cor = document.getElementById("btn_color");
var botao_mais = document.getElementById("btn_plus");
var botao_menos = document.getElementById("btn_less");
var botao_click = document.getElementById("btn_click");

var header = document.querySelector(".cabecalho");

header.addEventListener('mouseover',  function(){
    header.style.backgroundColor = 'black';
    header.style.color = '#3519e6'
})





function mudacor(){
    //alert("Muda cor");
    var div = document.querySelector(".div_texto");
    //var div2 = document.getElementsByClassName("div_texto");
    var container = document.getElementById("container_btns");


    div.style.backgroundColor = "yellow";
    container.style.backgroundColor = "blue";
}

function postar(){
    console.log("Clicou");
}



botao_cor.addEventListener('click',postar);
botao_cor.addEventListener('click',mudacor);
