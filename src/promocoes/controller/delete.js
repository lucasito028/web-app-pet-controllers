$(document).ready(function(){
    
    $('#table-promo').on('click', 'button.btn-delete', function(e){

        e.preventDefault()

        let ID = `ID=${$(this).attr('id')}`

        Swal.fire({
            title:'Vai deletar ai?',
            text:'Serteza?',
            icon:'question',
            showCancelButton: true,
            confirmButtonText: 'SS',
            cancelButtonText:'NN'
        }).then((result => {
            if(result.value){
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    assync: true,
                    data: ID,
                    url: 'src/promocoes/model/delete.php',
                    success: function(dados){
                            Swal.fire({
                                title: 'SysRifa',
                                text: dados.mensagem,
                                icon: dados.tipo,
                                confirmButtonText: 'OK'
                            })
                            $('#table-promo').DataTable().ajax.reload()
                        }
                    })  
        
                    }
        }))
            
        })
    })