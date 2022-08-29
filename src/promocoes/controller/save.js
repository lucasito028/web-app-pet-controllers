
$(document).ready(function(){
    $('.btn-salvar').click(function(e){

        e.preventDefault()

        let dados = $('#form-tipo').serialize()
        dados += `&operacao=${$('.btn-salvar').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/promocoes/model/save.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Adicionar ',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'Pode pá'
                })

                $('#modal-tipo').modal('hide')
                $('#table-promo').DataTable().ajax.reload();

            }
        })
     
        
    })
})