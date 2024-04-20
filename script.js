function evalua() {
    var cadena = document.getElementById('cadena').value;
    var contieneMayusculas = /[A-Z]/.test(cadena);
    var contieneMinusculas = /[a-z]/.test(cadena);

    var mensaje = '';

    if (contieneMayusculas && contieneMinusculas) {
        mensaje = 'La cadena "' + cadena + '" contiene mayúsculas y minúsculas.';
    } else if (contieneMayusculas) {
        mensaje = 'La cadena "' + cadena + '" contiene solo mayúsculas.';
    } else if (contieneMinusculas) {
        mensaje = 'La cadena "' + cadena + '" contiene solo minúsculas.';
    } else {
        mensaje = 'La cadena "' + cadena + '" no contiene ni mayúsculas ni minúsculas.';
    }

    document.getElementById('parrafo').innerText = mensaje;
}

