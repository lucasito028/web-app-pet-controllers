$(document).ready(function(){
    
    $('#table-tipo').on('click', 'button.btn-delete', function(e){

        e.preventDefault()

        let ID = `ID=${$(this).attr('id')}`

        Swal.fire({
            title:'Vai deletar ai?',
            text:'Serteza?',
            icon:'question',
            showCancelButton: true,
            confirmButtonText: 'SS',
            cancelButtonText:'NN'
        }).then((result) => {
            if(result.value){
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: ID,
                    url: 'src/tipo/model/delete-tipo.php',
                    success: function(){
                            Swal.fire({
                                title: 'SysRifa',
                                text: dados.messagem,
                                icon: dados.tipo,
                                confirmButtonText: 'OK'
                            })
                            $('#table-tipo').DataTable().ajax.reload()
                        }
                    })  
        
                    }
                })
            
        })
    })
