$(document).ready(function(){

    $('#table-tipo').DataTable({
        "processing":true,
        "serverSide":true,
        "ajax": {
            "url": "src/tipo/model/list-tipo.php",
            "type": "POST"

        },
        "columns": [{
            "data" : 'ID',
            "classname": 'text-center'
        },
        {
            "data": 'NOME',
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