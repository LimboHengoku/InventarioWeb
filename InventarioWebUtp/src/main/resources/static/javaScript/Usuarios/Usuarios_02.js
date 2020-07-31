$(document).ready(function() {
  var table = $('#example').DataTable({
      orderCellsTop: true,
              dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                if (column.index() == 0 || column.index() == 2 ||
                    column.index() == 5 ) {
                  return;
                }
                console.log(column.index());

                var select = $('<select><option value=""></option></select>')
                    .appendTo( $("#example thead tr:eq(1) th").eq(column.index()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );

                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    } );

                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d+'</option>' );
                } );
            } );

        }
    } );


     $('#smartwizard').smartWizard({
selected: 0,
theme: 'dots',
autoAdjustHeight:true,
transitionEffect:'fade',
showStepURLhash: false, });
});
