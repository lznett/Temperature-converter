function Fahrenheit() {
    var valorElemento = document.getElementById("celsius");
    var valor = valorElemento.value;
    var valorCelsius = parseFloat(valor);
    var valorFahrenheit = (valorCelsius * 1.8)+32;
    console.log(valorFahrenheit);
  
    var valorConvertido = document.getElementById("valorFahrenheit");
    var valorFahrenheit = "A temperatura em Fahrenheit é: " + valorFahrenheit+"°F";
    valorConvertido.innerHTML = valorFahrenheit;
  }
  
  function Kelvin() {
    var valorElemento = document.getElementById("celsius");
    var valor = valorElemento.value;
    var valorCelsius = parseFloat(valor);
    var valorKelvin = valorCelsius+273.15;
    console.log(valorKelvin);
  
    var valorConvertido = document.getElementById("valorKelvin");
    var valorKelvin = "A temperatura em Kelvin é: " + valorKelvin+"K";
    valorConvertido.innerHTML = valorKelvin;
  }