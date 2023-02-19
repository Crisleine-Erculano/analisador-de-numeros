var numero = document.getElementById('number');
var select = document.getElementById('selectValores');
var resultado = document.getElementById('resultado');
var valores = [];

// Função verifica se o valor de entrada é um número e se é de 1 a 100.
function verificar(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }

}
// Função verifica se o número digitado já foi digitado antes.
function listar(n, lis) {
    if (lis.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}
// Adicionando evento pra usar a tecla Enter.
document.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        console.log('apertou enter');
        let submit = document.querySelector('#submit')
        submit.click;
        adicionar();
    }

}, false);

//Função adiciona número caso seje um número e não esteja na lista.
function adicionar() {
    if (verificar(numero.value) && !listar(numero.value, valores)) {
        valores.push(Number(numero.value));
        let opitions = document.createElement('Option');
        opitions.text = `Valor ${numero.value} adicionado.`;
        select.appendChild(opitions);
        resultado.innerHTML = '';
    } else {
        alert("valor inválido ou já constado na lista.");
    }
    numero.value = '';
    numero.focus();
}
// Função é ativada quando clicado o botão de finalizar.
function finalizar() {
    if (valores.length == 0) {
        alert('Por favor digite um número de 1 a 100');
    } else {
        let soma = 0;
        let maiorValor = Math.max(...valores);
        let menorValor = Math.min(...valores);

        for (let pos in valores) {
            soma += valores[pos];
        }
        valores.sort((a, b) => a - b)
        mediaNumeros = soma / valores.length;
        resultado.innerHTML += `<p> Os números digitados são: ${valores} </p>`
        resultado.innerHTML += `<p>O total de números é: ${valores.length}</p>`;
        resultado.innerHTML += `<p>A soma dos valores é: ${soma}</p>`;
        resultado.innerHTML += `<p>O maior valor é o número: ${maiorValor}</p>`;
        resultado.innerHTML += `<p>O menor valor é o número: ${menorValor}</p>`;
        resultado.innerHTML += `<p>a média calculada é: ${mediaNumeros}</p>`;
    }
    
}
// Função limpa os campos de entrada de números, o array e o select.
function limpar(){
    valores.length = 0;
    select.length = ''
    resultado.innerHTML = '';
    numero.focus();
}





