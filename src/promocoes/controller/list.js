$(document).ready(function(){

    $('#table-promo').DataTable({
        "processing":true,
        "serverSide":true,
        "ajax": {
            "url": "src/tipo/promocoes/list.php",
            "type": "POST"

        },
        "columns": [{
            "data" : 'ID',
            "classname": 'text-center'
        },
        {
            "data": 'TITULO',
            "classname": 'text-center'
        },
        {
            "data": 'DESCRICAO',
            "classname": 'text-center'
        },
        {
            "data": 'DATA_INICIO',
            "classname": 'text-center'
        },
        {
            "data": 'DATA_FIM',
            "classname": 'text-center'
        },
        {
            "data": 'ARRECADACAO',
            "classname": 'text-center'
        },
        {
            "data": 'VALOR_RIFA',
            "classname": 'text-center'
        },     
        {
            "data" : 'ID',
            "orderable": false,
            "classname": 'text-center',
            "searchable": false,
            "render": function(data, type, row, meta){
                return `
                <button id="${data}" class="btn btn-info btn-view">Vizualizar</button>
                <button id="${data}" class="btn btn-warning btn-edit">Editar</button>
                <button id="${data}" class="btn btn-danger btn-delete">Excluir</button>
                `
            }


        }
    ]


    })

})