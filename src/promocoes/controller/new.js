$(document).ready(function(){
    $('.btn-new').click(function(e){
        e.preventDefault()


        $('.modal-title').empty()

        $('.modal-body').empty()


        $('.modal-title').append('Add novo tipo')

        $('.modal-body').load('src/promocoes/view/form.html')

        $('.btn-salvar').show()
        
        $('.btn-salvar').attr('data-operation', 'insert')

        $('#modal-tipo').modal('show')
    })

    
})