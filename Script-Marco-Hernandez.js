function obtenerParametro(name) {
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        resultados = regex.exec(location.search);
    return resultados === null ? "" : decodeURIComponent(resultados[1]);
}

var nombre = obtenerParametro('nombre');
var edad = obtenerParametro('edad');
var sexo = obtenerParametro('sexo');
var niveleducacion = obtenerParametro('niveleducacion');
var ocupacion = obtenerParametro('ocupacion');
var correo = obtenerParametro('correo');

document.getElementById('resultado').innerHTML =
    '<p>Nombre: ' + nombre + '</p>' +
    '<p>Edad: ' + edad + '</p>' +
    '<p>Sexo: ' + sexo + '</p>' +
    '<p>Nivel de Educacion: ' + niveleducacion + '</p>' +
    '<p>Ocupación: ' + ocupacion + '</p>' +
    '<p>Correo: ' + correo + '</p>';
