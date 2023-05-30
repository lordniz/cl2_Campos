$(document).ready(function() {

  var urlParams = new URLSearchParams(window.location.search);
    var idUsuario = urlParams.get('idUsuario');
    var profileOverview = $('#profile-overview');
    //Horarios
    var checkboxContainer = $('#checkboxContainer');

    // Vaciar los campos
    var profileEdit = $('#profile-overview');
    profileEdit.find('.col-lg-9').empty()
    profileOverview.find('.col-lg-9').empty();
    $('.profile-card h2').empty();
    $('.profile-card h3').empty();

      // Realiza la petición AJAX al servidor para rellenar los roles de usuarios
      $.ajax({
        url: 'http://localhost:9090/api/especialidades', // Reemplaza 'ruta_del_servidor' por la URL de tu endpoint AJAX
        type: 'GET',
//        dataType: 'json',
        success: function(response) {
//        console.log("response",response)
         response.forEach(function(roles) {
//         console.log("roles",roles)

// Recorre los datos recibidos y agrega las opciones al elemento select
            $('#nombreRol').append('<option value="' + roles.idespecialidad + '">' + roles.nombre  + '</option>');
          });
        },
        error: function() {
          console.log('Error al obtener los datos');
        }
      });

    // Realizar la solicitud AJAX al cargar la pagina , no leas mi codigo y haz el tuyo :v
    $.ajax({
      url: 'http://localhost:9090/api/alumnos/' + idUsuario,
      method: 'GET',
      dataType: 'json',
      success: function(data) {
//      console.log(data)
        // Llenar los campos con los datos recibidos
        profileOverview.find('.col-lg-9:eq(0)').text(data.nombre);
        profileOverview.find('.col-lg-9:eq(1)').text(data.apellido);
        profileOverview.find('.col-lg-9:eq(2)').text(data.dni);
        profileOverview.find('.col-lg-9:eq(3)').text(data.correo);
        profileOverview.find('.col-lg-9:eq(4)').text(data.celular);
        profileOverview.find('.col-lg-9:eq(5)').text(data.especialidad.nombre );
        $('.profile-card h2').text(data.nombre);
        $('.profile-card h3').text(data.especialidad.nombre );
        $('#nombre').val(data.nombre);
                  $('#apellido').val(data.apellido);
                  $('#dni').val(data.dni);
                  $('#correo').val(data.correo);
                  $('#celular').val(data.celular);
                  $('#nombreRol').val(data.especialidad.idespecialidad);

                  $('#Twitter').val('https://twitter.com/');
                  $('#Facebook').val('https://facebook.com/');
                  $('#Instagram').val('https://instagram.com/');
                  $('#Linkedin').val('https://linkedin.com/');
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.error('Error:', errorThrown);
      }
    });


//traer datos - parece innecesario
    // Escucha el evento clic del botón "Editar Perfil"
    $('button[data-bs-target="#profile-edit"]').on('click', function() {
      // Realiza la petición AJAX
      $.ajax({
        url: 'http://localhost:9090/api/alumnos/' + idUsuario,
        method: 'GET',
        success: function(response) {

          // Imagen de Perfil
//          $('#profileImage').attr('src', response.imagenPerfil);
        },
        error: function() {
          // Maneja el error de la solicitud AJAX
        }
      });
    });

//Traer Horarios






//      // Realiza la petición AJAX
//      $.ajax({
//        url: 'http://localhost:8080/horarios',
//        method: 'GET',
//        success: function(response) {
////        console.log("response horarios",response)
//          // Crea los checkboxes basados en la respuesta de la solicitud AJAX
//          response.forEach(function(horario) {
////          console.log ("dentro",horario.nombre)
//            var checkbox = $('<div class="form-check">' +
//              '<input class="form-check-input" type="checkbox" id="' + horario.idHorario + '" />' +
//              '<label class="form-check-label" for="' + horario.idHorario + '">' + horario.nombre + ' (' + horario.horaEntrada +' - '+ horario.horaSalida+ ')'+'</label>' +
//              '</div>');
//
//            checkboxContainer.append(checkbox);
//
//          });
//        },
//        error: function() {
//          // Maneja el error de la solicitud AJAX
//        }
//      });//Fin de traer horarios


//Guardar datos de Profile

  $('form').submit(function(e) {
    e.preventDefault(); // Evita el comportamiento predeterminado del envío del formulario


    // Obtén los valores de los campos del formulario
        var nombre = $('#nombre').val();
        var apellido = $('#apellido').val();
        var dni = $('#dni').val();
        var correo = $('#correo').val();
        var contraseña = $('#contraseña').val();
        var celular = $('#celular').val();
        var rolId = $('#nombreRol').val();
        var rolNombre = $('#nombreRol option:selected').text();

    // Construye el objeto JSON con el formato requerido
        var data = {
          "nombre": nombre,
          "apellido": apellido,
          "dni": dni,
          "correo": correo,
          "contraseña": contraseña,
          "celular": celular,
          "especialidad": {
            "idespecialidad": rolId,
            "nombre": rolNombre
          }
        };

    // Determina la URL y el método de la solicitud AJAX
    var url, method;

    if (idUsuario) {
      // Si hay un ID de usuario, es una solicitud de edición (PUT)
      url = 'http://localhost:9090/api/alumnos/' + idUsuario;
      method = 'PUT';
    } else {
      // Si no hay un ID de usuario, es una solicitud de creación (POST)
      url = 'http://localhost:9090/api/alumnos';
      method = 'POST';
    }

    // Realiza la petición AJAX
    $.ajax({
      url: url,
      method: method,
      data: JSON.stringify(data),
      contentType: 'application/json',
      success: function(response) {
        // Maneja la respuesta de la solicitud AJAX
        console.log(response);
        if (response.error) {
            // Mostrar mensaje de error
            alert('Error: ' + response);
          } else {
            // Mostrar mensaje de éxito
            alert(response);
            window.location.href = '/home';
          }
      },
      error: function() {
        // Maneja el error de la solicitud AJAX
      }
    });
  });






});//fin del ready
