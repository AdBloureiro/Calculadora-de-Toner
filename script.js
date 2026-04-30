// 🔐 BOTÃO SECRETO PARA ACESSAR CÓDIGO
function acessoCodigo(){

let senha = prompt("Digite a senha de acesso ao código:");

if(senha === "195912"){

let codigo = document.documentElement.outerHTML;

let novaAba = window.open();
novaAba.document.write("<pre>" + codigo.replace(/</g,"&lt;") + "</pre>");

}else{

alert("Senha incorreta.");

}

}


// 🔐 BLOQUEIO DE VISUALIZAÇÃO COM TECLAS
document.addEventListener("contextmenu", function(e){
e.preventDefault();
});

document.addEventListener("keydown", function(e){

if (e.key === "F12"){
e.preventDefault();
alert("Acesso ao código protegido.");
}

if (e.ctrlKey && e.shiftKey && e.key === "I"){
e.preventDefault();
alert("Acesso ao código protegido.");
}

if (e.ctrlKey && e.shiftKey && e.key === "J"){
e.preventDefault();
alert("Acesso ao código protegido.");
}

if (e.ctrlKey && e.key === "u"){
e.preventDefault();
alert("Acesso ao código protegido.");
}

});


// 📊 CONTADOR DE CÁLCULOS
let contadorCalculos = 0;
let limite = 10;

function calcular(){

if(contadorCalculos >= limite){
document.getElementById("info").innerHTML = "⛔ Limite de cálculos atingido.";
document.getElementById("nivel").innerHTML = "Sistema bloqueado.";
return;
}

contadorCalculos++;

let modelo = document.getElementById("modelo").value;
let pesoTotal = parseFloat(document.getElementById("peso").value);
let info = document.getElementById("info");
let barra = document.getElementById("barra");
let nivel = document.getElementById("nivel");

if(!modelo || isNaN(pesoTotal)){
info.innerHTML = "Preencha todos os campos.";
return;
}

let porcentagem = 0;
let tonerReal = 0;
let capacidadeMaxima = 0;
let pesoCarcaca = 0;

if(modelo === "brother"){
pesoCarcaca = 500;
capacidadeMaxima = 600;
}

if(modelo === "kyocera3655" || modelo === "kyocera5500"){
pesoCarcaca = 200;
capacidadeMaxima = 600;
}

if(pesoTotal < pesoCarcaca){
info.innerHTML = "Toner vazio ou peso inválido.";
return;
}

tonerReal = pesoTotal - pesoCarcaca;
porcentagem = (tonerReal * 100) / capacidadeMaxima;

if(porcentagem >= 100){
porcentagem = 100;
}

porcentagem = porcentagem.toFixed(2);

info.innerHTML =
"Quantidade de toner: " + tonerReal + "g<br>" +
"Porcentagem: " + porcentagem + "%<br>" +
"Cálculos restantes: " + (limite - contadorCalculos);

barra.style.width = porcentagem + "%";
barra.innerHTML = porcentagem + "%";

if (porcentagem >= 100){
barra.style.background = "green";
nivel.innerHTML = "🟢 TONER CHEIO - 100%";
}
else if(porcentagem == 0){
barra.style.background = "red";
nivel.innerHTML = "🔴 TONER VAZIO";
}
else if(porcentagem <= 20){
barra.style.background = "red";
nivel.innerHTML = "🔴 CRÍTICO - Recomendar recarga";
}
else if(porcentagem <= 50){
barra.style.background = "orange";
nivel.innerHTML = "🟡 MÉDIO - Acompanhar consumo";
}
else{
barra.style.background = "blue";
nivel.innerHTML = "🔵 BOM - Toner em boas condições";
}

}
