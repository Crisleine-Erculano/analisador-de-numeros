var numero = document.getElementById('number');
var select = document.getElementById('selectValores');
var resultado = document.getElementById('resultado');
var valores = [];
function verificar(n){
    if(Number(n)>=1 && Number(n)<= 100){
        return true;
    }else{
        return false;
    }

}
function listar(n,lis){
    if(lis.indexOf(Number(n) )!= -1){
        return true;
    }else{
        return false;
    }
}
  function adicionar() {
    if(verificar(numero.value)&& !listar(numero.value, valores)){
        valores.push();
        let opitions = document.createElement('Option');
        opitions.text = `Valor ${numero.value} adicionado.`;
        select.appendChild(opitions);
        res.innerHTML = '';
     } else {
        window.alert("valor inválido ou já consta.");
     }
    numero.value = '';
    numero.focus();
    }
    



