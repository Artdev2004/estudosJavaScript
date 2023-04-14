
function converterFahrenheit(celsius){
    
   let fahrenheit = (9 * celsius + 160)/5;
   
   document.getElementById("resultado").innerHTML = celsius + "°C é equivalente a " + fahrenheit + "°F"
}