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
    



