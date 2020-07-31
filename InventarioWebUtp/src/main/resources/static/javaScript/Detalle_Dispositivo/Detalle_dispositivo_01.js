(function($) {
  $(".delete").on('click', function(e) {
    $('#Popup_eliminar').modal();
    //$('#Modal').modal('show');
  });

// Click en crear
$(".create").on('click', function() {
   $('#Popup_guardar').modal();
});

$("#btn_modif").on('click', function() {
 $('#Popup_guardar_pc').modal();
});
})(jQuery); // End of use strict
