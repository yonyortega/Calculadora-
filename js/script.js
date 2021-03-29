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