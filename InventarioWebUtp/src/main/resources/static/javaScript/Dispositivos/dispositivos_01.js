$(document).ready(function() {
//     $('#example').DataTable().columns.adjust().responsive.recalc();
     $('#smartwizard').smartWizard({
selected: 0,
theme: 'dots',
autoAdjustHeight:true,
transitionEffect:'fade',
showStepURLhash: false, });
});

//Click en editar
$(".settings").on('click', function(e) {
     $('#lbl_titulo_mant').text("Modificar Dispositivo");
     $('#Popup_modif2').modal();
});

$("#btn_new").on('click', function(e) {
   $('#lbl_titulo_mant').text("Registrar Dispositivo");
   $('#Popup_modif2').modal();
});

$(".redip").on('click', function(e) {

  var cont = 0;
  var txt_rid_dispos;
  var txt_rmarca;
  var txt_rmodelo;
  var txt_rserie;
  var txt_rcod_barras;
   //$('#Modal').modal('show');
   var $row = $(this).closest("tr"),       // Finds the closest row <tr>
       $tds = $row.find("td");             // Finds all children <td> elements

 $.each($tds, function() {
   cont = cont + 1;
   if ( cont == 4) {
       txt_rid_dispos = $(this).text();
   }
   if ( cont == 7) {
       txt_rmarca = $(this).text();
   }
   if ( cont == 8) {
       txt_rmodelo = $(this).text();
   }
   if ( cont == 9) {
       txt_rserie = $(this).text();
   }
   if ( cont == 10) {
       txt_rcod_barras = $(this).text();
   }
     console.log($(this).text());        // Prints out the text within the <td> // Visits every single <td> element
   });

   $('#txt_rid_dispos').attr( "disabled", "disabled" );
   $('#txt_rmarca').attr( "disabled", "disabled" );
   $('#txt_rmodelo').attr( "disabled", "disabled" );
   $('#txt_rserie').attr( "disabled", "disabled" );
   $('#txt_rcod_barras').attr( "disabled", "disabled" );

   $('#txt_rid_dispos').val(txt_rid_dispos);
   $('#txt_rmarca').val(txt_rmarca);
   $('#txt_rmodelo').val(txt_rmodelo);
   $('#txt_rserie').val(txt_rserie);
   $('#txt_rcod_barras').val(txt_rcod_barras);
   $('#Popup_redip').modal();
});
