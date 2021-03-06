"use strict";

//Variáveis que serão manipuladas pelas funções:
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;
let vendaMussarela = 0.00;
let vendaMista = 0.00;
let vendaCalabresa = 0.00;

//Variáveis de manipulação do DOM para os botôes:
window.onload = function()  {
  let btnVendas = document.getElementById("vendas");
  let btnEstorno = document.getElementById("estorno");

/*Eventos para os botôes de clique
false -> pq não quero outro elemento do código HTML, apenas os botões e nada mais além disso.*/
  btnVendas.addEventListener("click", venda, false);
  btnEstorno.addEventListener("click", estorno, false);
}

//As funções recebem um evento:
function venda(e) {
  //Se o usuário escolher o sabor mussarela:
  if (document.getElementById("mussarela").checked) {
    somaMussarela = somaMussarela + 1;
    vendaMussarela = vendaMussarela + 25.00;
    //Colocando os valores na tabela:
    document.getElementById("resultadoMussarela").innerHTML = somaMussarela;
    document.getElementById("vendasMussarela").innerHTML = vendaMussarela.toFixed(2);
  } else if (document.getElementById("mista").checked) {
    somaMista += 1;
    vendaMista += 30.00;
    document.getElementById("resultadoMista").innerHTML = somaMista;
    document.getElementById("vendasMista").innerHTML = vendaMista.toFixed(2);
  } else if (document.getElementById("calabresa").checked) {
    somaCalabresa += 1;
    vendaCalabresa += 35.00;
    document.getElementById("resultadoCalabresa").innerHTML = somaCalabresa;
    document.getElementById("vendasCalabresa").innerHTML = vendaCalabresa.toFixed(2);
  }
}

function estorno(e) {
  //Se o usuário escolher o sabor mussarela:
  if (document.getElementById("mussarela").checked) {
    somaMussarela = somaMussarela - 1;
    vendaMussarela = vendaMussarela - 25.00;
    //Sendo que, logicamente, os valores de venda e estorno não podem ser negativos:
    if (somaMussarela < 0) {
      somaMussarela = 0;
      vendaMussarela = 0.00;
    }
    document.getElementById("resultadoMussarela").innerHTML = somaMussarela;
    document.getElementById("vendasMussarela").innerHTML = vendaMussarela.toFixed(2);
  } else if (document.getElementById("mista").checked) {
    somaMista -= 1;
    vendaMista -= 30.00;
    if (somaMista < 0) {
      somaMista = 0;
      vendaMista = 0.00;
    }
    document.getElementById("resultadoMista").innerHTML = somaMista;
    document.getElementById("vendasMista").innerHTML = vendaMista.toFixed(2);
  } else if (document.getElementById("calabresa").checked) {
    somaCalabresa -= 1;
    vendaCalabresa -= 35.00;
    if (somaCalabresa < 0) {
      somaCalabresa = 0;
      vendaCalabresa = 0.00;
    }
    document.getElementById("resultadoCalabresa").innerHTML = somaCalabresa;
    document.getElementById("vendasCalabresa").innerHTML = vendaCalabresa.toFixed(2);
  }
}
