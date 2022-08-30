$(document).ready(function(){
    
    $('#table-promo').on('click', 'button.btn-view', function(e){

        e.preventDefault()

        $('.modal-title').empty()

        $('.modal-body').empty()


        $('.modal-title').append('É pave ou pa cume?')

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
                        $('#TITULO').val(dado.dados.TITULO)
                        $('#TITULO').attr('readonly', 'true')
                    })
                    $('.btn-salvar').hide()
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