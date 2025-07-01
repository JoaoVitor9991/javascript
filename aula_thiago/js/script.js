

console.log("Mensagem no console");
//essa função é similar ao print no python

var botao_cor = document.getElementById("btn_color");
var botao_mais = document.getElementById("btn_plus");
var botao_menos = document.getElementById("btn_less");
var botao_click = document.getElementById("btn_click");


var contador = parseInt(document.querySelector("#texto").textContent);



console.log(contador);
console.log(typeof(contador) );

botao_mais.addEventListener('click', function(){
    contador++;
    console.log(contador);
    document.querySelector("contador").textContent = contador;
})

botao_menos.addEventListener('click', function(){
    contador--;
    console.log(contador);
    document.querySelector("contador").textContent = contador;
})








var header = document.querySelector(".cabecalho");









header.addEventListener('mouseover',  function(){
    header.style.backgroundColor = 'black';
    header.style.color = '#3519e6'
})

header.addEventListener('mouseout',  function(){
    header.style.backgroundColor = '#3519e6';
    header.style.color = ' black'
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
