$(document).ready(function() {
    $('#myTable').DataTable( {
        language: {
            url:'https://cdn.datatables.net/plug-ins/1.11.5/i18n/es-MX.json'
        }
     
    } );
} );

$('#myTable').DataTable( {
    dom: 'Bfrtlp',
    buttons: [

        'copy', 'excel', 'pdf','searchPanes',
    ]
} );


