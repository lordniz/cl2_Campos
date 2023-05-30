$(document).on("click", "#btnagregar", function(){
    $("#txtnomempleado").val("");
    $("#txtapeempleado").val("");
    $("#hddidempleado").val("0");
    $("#modalNuevo").modal("show");
});

$(document).on("click", "#btnguardar", function(){
    $.ajax({
        type: "POST",
        url: "/Empleado/registrarEmpleado",
        contentType: "application/json",
        data: JSON.stringify({
            nomempleado: $("#txtnomempleado").val(),
            apeempleado: $("#txtapeempleado").val()
        }),
        success: function(resultado){
            if(resultado.respuesta){
                ListarEmpleados();
            }
            alert(resultado.mensaje);
        }
    });
    $("#modalNuevo").modal("hide");
});

function ListarEmpleados(){
    $.ajax({
        type: "GET",
        url: "/Empleado/listarEmpleados",
        dataType: "json",
        success: function(resultado){
            $("#tblempleado > tbody").html("");
            $.each(resultado, function(index, value){
                $("#tblempleado > tbody").append("<tr>"+
                    "<td>"+value.idempleado+"</td>"+
                    "<td>"+value.nombre+"</td>"+
                    "<td>"+value.apellido+"</td>"+
                    "<td>"+value.fechacontrat+"</td>"+
                    "</tr>");
            })
        }
    })
}