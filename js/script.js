

function calcular() {
    var valor = $('#valor').val() * 1;
    var utilidad = $('#utilidad').val() * 1;
    var iva = $('#iva').val() * 1;
    var ganancia = (valor * utilidad) / 100;
    var vlrIva = (valor * iva) / 100;
    var vlrVenta = valor + vlrIva + ganancia;

    console.log(valor, vlrIva, ganancia);

    $('#ganancia').val(ganancia);
    $('#vlrVenta').val(vlrVenta);
}

function registrar() {

    var Codigo = document.getElementById("codigo").value;

    if(Codigo == ""){
        alert("No se ha escrito nada en Codigo");
        return;
    }

    var nombreP = document.getElementById("nombre").value;

    if(nombreP == ""){
        alert("No se ha escrito el nombre del producto");
        return;
    }
    var Marca = document.getElementById("marca").value;
    if(Marca == ""){
        alert("No se ha escrito la marca de producto");
        return;
    }

    var Precio = document.getElementById("Precio").value;
    if(Precio == ""){
        alert("No se ha escrito el precio unitario del prducto");
        return;
    }
    var Cantidad = document.getElementById("Cantidad").value;
    if(Cantidad == ""){
        alert("No se ha escrito la cantidad");
        return;
    }
    
    var fila = "<tr><td>" + Codigo + "</td><td>" + nombreP + "</td><td>" + Marca + "</td><td>" + Precio + "</td><td>" + Cantidad + "</td></tr>";
    
    
    var btn = document.createElement("TR");
        btn.innerHTML = fila
        document.getElementById("Tab").appendChild(btn);
    
}

