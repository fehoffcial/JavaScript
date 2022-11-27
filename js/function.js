function soma(x1,x2,x3){
    return eval(`${x1}${x3}${x2}`);
}
/// FUNCAO ANONIMA 
(function(a1,a2){
    return eval(a1+a2)

})(10,20)
// Function 
let carro = (placa,cnh,o) => {
    return eval(`${placa}${o}${cnh}`)
}
console.log(soma(10,6,'*'))
resultado = soma(10,6,'*')
resultado_placa = carro(10,20,"+")
alert(`A FUNCAO FUNCTION DEU O RESULTADO ${resultado}`)
alert(`Funcao CARRO NUMERO DA CNH ${resultado_placa}`)