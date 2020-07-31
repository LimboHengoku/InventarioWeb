$(document).ready(function() {
     $('#example').DataTable().columns.adjust().responsive.recalc();
     $('#smartwizard').smartWizard({
selected: 0,
theme: 'dots',
autoAdjustHeight:true,
transitionEffect:'fade',
showStepURLhash: false, });

$('#example2').DataTable().columns.adjust().responsive.recalc();
$('#smartwizard').smartWizard({
selected: 0,
theme: 'dots',
autoAdjustHeight:true,
transitionEffect:'fade',
showStepURLhash: false, });


});

$(".modal-wide").on("show.bs.modal", function() {
  var height = $(window).height() - 200;
  $(this).find(".modal-body").css("max-height", height);
});

//Click en desasociar
$(".desasociar").on('click', function(e) {
     $('#Popup_desag').modal();
});

$(".Asociar").on('click', function(e) {
     $('#Popup_asig').modal();
});


$(".Asig_us").on('click', function(e) {
     $('#Popup_asig').modal('toggle');
});
