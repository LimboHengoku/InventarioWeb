$(document).ready(function() {

	$('#smartwizard').smartWizard({
		selected : 0,
		theme : 'dots',
		autoAdjustHeight : true,
		transitionEffect : 'fade',
		showStepURLhash : false,
	});
	
	$('#smartwizard1').smartWizard({
		selected : 0,
		theme : 'dots',
		autoAdjustHeight : true,
		transitionEffect : 'fade',
		showStepURLhash : false,
	});
	
});

// Click en editar
//$(".settings").on('click', function(e) {
//	$('#lbl_titulo_mant').text("Modificar Usuario");
//	$('#Popup_modif2').modal();
//});
//
//$(".settings").on('click', function(e) {
//	$('#lbl_titulo_mant').text("Modificar Usuario");
//	$('#Popup_edi2').modal();
//});
//
//$("#btn_new").on('click', function(e) {
//	$('#lbl_titulo_mant').text("Registrar Usuario");
//	$('#Popup_modif2').modal();
//});
