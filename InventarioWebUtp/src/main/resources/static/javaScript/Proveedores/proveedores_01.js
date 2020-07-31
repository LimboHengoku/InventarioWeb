$(document).ready(function() {
     $('#table_prov').DataTable().columns.adjust().responsive.recalc();
     $('#smartwizard').smartWizard({
       selected: 0,
       theme: 'dots',
       autoAdjustHeight:true,
       transitionEffect:'fade',
       showStepURLhash: false, });
});

//Click en editar
$(".settings").on('click', function(e) {
  var cont = 0;
  var id_prov;
  var nom_prov;
  var descr_prov;
   //$('#Modal').modal('show');
   var $row = $(this).closest("tr"),       // Finds the closest row <tr>
       $tds = $row.find("td");             // Finds all children <td> elements

 $.each($tds, function() {
   cont = cont + 1;
   if ( cont == 1) {
       id_prov = $(this).text();
   }
   if ( cont == 2) {
       nom_prov = $(this).text();
   }
   if ( cont == 3) {
       descr_prov = $(this).text();
   }
     console.log($(this).text());        // Prints out the text within the <td> // Visits every single <td> element
   });
      $('#txt_id_prov').attr( "disabled", "disabled" );
      $('#txt_id_prov').val(id_prov);
      $('#txt_name_prov').val(nom_prov);
      $('#text_obs').val(descr_prov);
      $('#lbl_titulo_mant').text("Modificar Proveedor");
      $('#Popup_mantprov').modal();
});

$("#btn_new").on('click', function(e) {
     $('#txt_id_prov').attr( "disabled", "disabled" );
     $('#lbl_titulo_mant').text("Ingrese un Nuevo Proveedor");
     $('#Popup_mantprov').modal();
});
