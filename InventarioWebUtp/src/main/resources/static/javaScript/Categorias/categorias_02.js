(function($) {
  $(".delete").on('click', function(e) {
    $('#Popup_eliminar').modal();
    //$('#Modal').modal('show');
  });
//Click en editar
$(".settings").on('click', function(e) {
 var cont = 0;
 var id_cat;
 var desc_cat;
 var tipo_cat;

  //$('#Modal').modal('show');
  var $row = $(this).closest("tr"),       // Finds the closest row <tr>
      $tds = $row.find("td");             // Finds all children <td> elements

$.each($tds, function() {
  cont = cont + 1;
  if ( cont == 1) {
      id_cat = $(this).text();
  }
  if ( cont == 2) {
      tipo_cat = $(this).text();
  }

  if ( cont == 3) {
      desc_cat = $(this).text();
  }
    console.log($(this).text());        // Prints out the text within the <td> // Visits every single <td> element
  });

  if ( id_cat != '' &&  desc_cat != '' ) {
     $('#txt_id').val(id_cat);
     $('#txt_descrip').val(desc_cat);
     $('#txt_tipo').val(tipo_cat);
     $('#Popup_modif').modal();
  }
});
// Click en impresoras
$("#btn_so").on('click', function() {
   $('#lbl_titulo').text("Ingresar Tipo de Sistema Operativo");
   $('#Popup_guardar').modal();
});

// Click en Dispositivos
$("#btn_antiv").click(function(){
  $('#lbl_titulo').text("Ingresar Tipo de Antivirus");
  $('#Popup_guardar').modal();
});

// Click en Recurso
$("#btn_proce").click(function(){
  $('#lbl_titulo').text("Ingresar Tipo de Procesadores");
  $('#Popup_guardar').modal();
});

})(jQuery); // End of use strict
