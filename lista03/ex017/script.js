var temperatura = prompt("Digite a temperatura");
var unidade = prompt('Digite o formato da temperatura. "C" para Celsius e "F" para Fahrenheit');
var celsius = (temperatura - 32) / 1.8;
var fahrenheit = (temperatura * 1.8) + 32;

if (unidade.toUpperCase() == "C") {
    alert(`${fahrenheit.toFixed(2)} °F`);
} else if (unidade.toUpperCase() == "F") {
    alert(`${celsius.toFixed(2)} °C`);
} else {
    alert('Erro: Digite "C" para Celsius e "F" para Fahrenheit.');
}