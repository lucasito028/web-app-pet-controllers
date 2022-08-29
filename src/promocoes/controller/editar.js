$(document).ready(function(){
    
    $('#table-promo').on('click', 'button.btn-edit', function(e){

        e.preventDefault()

        $('.modal-title').empty()

        $('.modal-body').empty()

        $('.modal-title').append('Editar ai ai')

        let ID = `ID=${$(this).attr('id')}`



        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: ID,
            url: 'src/promocoes/model/vizualizar.php',
            success: function(dado) {
                if(dado.tipo == 'success'){
                    $('.modal-body').load('src/promocoes/view/form.html', function () {
                        $('#NOME').val(dado.dados.NOME)
                        $('#ID').val(dado.dados.ID)
                    })
                    $('.btn-salvar').show()
                    $('#modal-tipo').modal('show')
                    $('.btn-salvar').removeAttr('data-operation')
                }else{
                    Swal.fire({
                        title: 'SysRifa',
                        text: dado.messagem,
                        icon: dado.tipo,
                        confirmButtonText: 'OK'
                    })
                }
                $('#table-promo').DataTable().ajax.reload()

            }
        })

    })
})