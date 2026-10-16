let arregloIzquierdo = [12, 15];
let arregloDerecho = [20, 25];

function agregarEdad() {
    let edad = parseInt(document.getElementById("edad").value);

    if (isNaN(edad) || edad < 0) {
        alert("Ingrese una edad válida.");
        return;
    }

    arregloIzquierdo.push(edad);
    document.getElementById("edad").value = "";

    pintarArregloIzquierda();
}

function pintarArregloIzquierda() {
    let contenido = "";
    let tabla = document.getElementById("tablaIzquierda");

    for (let i = 0; i < arregloIzquierdo.length; i++) {
        contenido += "<tr>";
        contenido += "<td>" + arregloIzquierdo[i] + "</td>";
        contenido += '<td><button class="btn-eliminar" onclick="eliminarIzquierdo(' + i + ')">Eliminar</button></td>';
        contenido += '<td><button class="btn-mover" onclick="moverHaciaDerecha(' + i + ')">➜</button></td>';
        contenido += "</tr>";
    }

    tabla.innerHTML = contenido;
}

function pintarArregloDerecha() {
    let contenido = "";
    let tabla = document.getElementById("tablaDerecha");

    for (let i = 0; i < arregloDerecho.length; i++) {
        contenido += "<tr>";
        contenido += '<td><button class="btn-mover" onclick="moverHaciaIzquierda(' + i + ')">⬅</button></td>';
        contenido += "<td>" + arregloDerecho[i] + "</td>";
        contenido += '<td><button class="btn-eliminar" onclick="eliminarDerecho(' + i + ')">Eliminar</button></td>';
        contenido += "</tr>";
    }

    tabla.innerHTML = contenido;
}
function eliminarIzquierdo(indice) {
    arregloIzquierdo.splice(indice, 1);
    pintarArregloIzquierda();
}

function eliminarDerecho(indice) {
    arregloDerecho.splice(indice, 1);
    pintarArregloDerecha();
}

function moverHaciaDerecha(indice) {
    let edad = arregloIzquierdo[indice];

    arregloDerecho.push(edad);
    arregloIzquierdo.splice(indice, 1);

    pintarArregloIzquierda();
    pintarArregloDerecha();
}

function moverHaciaIzquierda(indice) {
    let edad = arregloDerecho[indice];

    arregloIzquierdo.push(edad);
    arregloDerecho.splice(indice, 1);

    pintarArregloIzquierda();
    pintarArregloDerecha();
}

pintarArregloIzquierda();
pintarArregloDerecha();