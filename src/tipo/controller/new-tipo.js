$(document).ready(function(){
    $('.btn-new').click(function(e){
        e.preventDefault()


        $('.modal-title').empty()

        $('.modal-body').empty()


        $('.modal-title').append('adicionar tipo atendente')

        $('.modal-body').load('src/tipo/view/form-tipo.html')


        $('.btn-salvar').show()
        
        $('.btn-salvar').attr('data-operation', 'insert')

        $('#modal-tipo').modal('show')
    })

    
})