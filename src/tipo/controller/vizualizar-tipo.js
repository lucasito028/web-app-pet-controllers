$(document).ready(function(){
    
    $('#table-tipo').on('click', '.btn-view', function(e){

        e.preventDefault()

        $('.modal-title').empty()

        $('.modal-body').empty()


        $('.modal-title').append('Vizualizar perfil ai')

        let ID = `ID=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: ID,
            url: 'src/tipo/model/vizualizar-tipo.php',
            success: function(dado) {
                if(dado.tipo == 'success'){
                    $('.modal-body').load('src/tipo/view/form-tipo.html', function () {
                        $('#NOME').val(dado.dados.NOME)
                        $('#NOME').attr('readonly', 'true')
                    })
                    $('.btn-save').hide()
                    $('#modal-tipo').modal('show')
                }else{
                    Swal.fire({
                        title: 'SysRifa',
                        text: dado.messagem,
                        icon: dado.tipo,
                        confirmButtonText: 'OK'
                    })
                }

            }
        })

    })
})