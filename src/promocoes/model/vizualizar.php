<?php

include('../../conexao/conn.php');

$ID = $_REQUEST['ID'];

$sql = "SELECT * FROM TIPO WHERE ID = $ID";

$resultado = $pdo->query($sql);

if($resultado){
    $result = array();

    while($row = $resultado -> fetch(PDO::FETCH_ASSOC)){
        $result = array_map('utf8_encode', $row);
    }
    $dados = array(
        'tipo' => 'success',
        'mensagem' => '',
        'dados' => $result
    );
}
else{
    $dados = array(
        'tipo' => 'error',
        'mensagem' => 'Deu pau ai',
        'dados' => array()
    );

}

echo json_encode($dados);

?>