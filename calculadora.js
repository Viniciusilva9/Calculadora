var valor;
var resultado;

function botao(num) {

    valor = document.calc.visor.value += num;

}

function reseta() {

    valor = document.calc.visor.value = " ";

}

function calcula() {

    resultado = eval(valor);
    valor = document.calc.visor.value = resultado; 

}