$(document).ready(function() {
console.log("horariosantes")


    var tbody = $('.table tbody');
console.log("horarios")
    $.ajax({
      url: 'http://localhost:8080/horarios',
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        tbody.empty(); // Limpia el contenido actual de la tabla antes de agregar nuevos datos

        // Crea la cabecera de la tabla
        var thead = $('<thead></thead>');
        var headerRow = $('<tr></tr>');
        headerRow.append('<th scope="col">#Id</th>' +
                        '<th scope="col">Nombre(s)</th>' +
                        '<th scope="col">Hora de Entrada(s)</th>' +
                        '<th scope="col">Hora de Salida</th>' +
                        '<th scope="col">Acciones</th>');
        thead.append(headerRow);

        $.each(data, function(index, horario) {
          var nuevaFila = $('<tr></tr>');
          nuevaFila.html('<th scope="row">' + horario.idHorario + '</th>' +
                        '<td>' + horario.nombre  + '</td>' +
                        '<td>' + horario.horaEntrada + '</td>' +
                        '<td>' + horario.horaSalida + '</td>' +
                        '<td>' +
                        '<a href="/userdetails?idUsuario=' + horario.idHorario + '" data-idusuario="' + horario.idHorario + '"><i class="bi bi-eye-fill" style="padding-right: 10px;"></i></a>' +
                        '<a href="#"><i class="bi bi-trash-fill"></i></a>' +
                        '</td>');

          tbody.append(nuevaFila);
        });
        // Actualiza el contenido del título y el párrafo
          $('.card-title').text('Horarios');
          $('div.card-body > p').text('En esta sección listamos a todos los horarios, mostrándonos sus asistencias, faltas y permisos; dándonos en la última columna acciones que podemos realizar en cada usuario');

        // Reemplaza la tabla existente con la nueva tabla que incluye la cabecera
        $('.table').html(thead);
        $('.table').append(tbody);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error:', errorThrown);
      }
    });

});
