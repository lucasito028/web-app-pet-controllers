
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
            url: 'src/tipo/model/save-tipo.php',
            success: function(dados) {
                Swal.fire({
                    title: 'Adicionar Tipo de atendende',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modal-tipo').modal('hide')

            }
        })
     
        
    })
})