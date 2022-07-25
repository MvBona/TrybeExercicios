const custoDoProduto = 10;
const valorDeVenda = 15;

let imposto = custoDoProduto / 5;
let custoTotalDoProduto = custoDoProduto + imposto;
let lucroPorVenda = valorDeVenda - custoTotalDoProduto;
let lucroTotal = lucroPorVenda * 1000;

if(valorDeVenda > 0 && custoDoProduto > 0){
   console.log('O lucro será de:', lucroTotal) 
} else{
    console.log('ERROR! Uma das constantes é menor que 0.');
}


