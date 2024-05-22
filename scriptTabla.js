function generarTabla() {
  var numero = prompt("Introduce un número para generar la tabla de multiplicar:");
  
  if (numero === null || isNaN(numero)) {
    alert("Por favor, introduce un número válido.");
    return;
  }
  
  numero = parseInt(numero);
  var tablaHTML = "<h2>Tabla de Multiplicar del " + numero + "</h2><table><tr><th>Multiplicando</th><th>Multiplicador</th><th>Resultado</th></tr>";
  
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    tablaHTML += "<tr><td>" + numero + "</td><td>" + i + "</td><td>" + resultado + "</td></tr>";
  }
  
  tablaHTML += "</table>";
  
  document.getElementById("tabla-container").innerHTML = tablaHTML;
}
