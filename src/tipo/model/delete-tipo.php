<?php

include('../../conexao/conn.php');

$ID = $_REQUEST['ID'];

$sql = "DELETE FROM TIPO WHERE ID =  $ID";

if($resultado){
    $dados = array(
        'tipo' => 'success',
        'mensagem' => 'Deletado com suseço',
    );
}
else{
    $dados = array(
        'tipo' => 'error',
        'mensagem' => 'Deu pau ai'

    );

}

echo json_encode($dados)

?>