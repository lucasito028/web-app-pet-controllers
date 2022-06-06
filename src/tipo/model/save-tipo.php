<?php

include("../../conexao/conn.php");

$requestData = $_REQUEST;

if(empty($requestData['NOME'])){
    $dados = array(
        'tipo' => 'error',
        'mensagem' => "O campo nome precisa estar preenchido" 
    );

}else{

    $ID = isset($requestData['ID']) ? $requestData['ID'] : "";
    $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : "";

    if($operacao == "insert"){
        try{
            $stmt = $pdo->prepare('INSERT INTO TIPO (NOME) VALUES(:a)');
            $stmt->execute(array(
                ':a' => $requestData['NOME']
            ));
            $dados = array(
                'tipo' => 'success',
                'mensagem' => "Registro salvo com sucesso"
            );
        }catch(PDOException $e){
            $dados = array(
                'tipo' => 'error',
                'mensagem' => "Erro ao tentar salvar o registro"
            );
        }
        
    }else{
        try{
            $stmt = $pdo->prepare('UPDATE TIPO SET (NOME) VALUES (:a) where ID = :id');
            $stmt->execute(
                array(
                    ':id' => $ID,
                    ':a' => $requestData['NOME']
            ));

            $dados = array(
                'tipo' => 'error',
                'mensagem' => 'Registro atualizado com sucesso'
            );
        }catch(PDOException $e){
            $dados = array(
                'tipo' => 'error',
                'mensagem' => 'Erro ao atualizar o registro'
            );
        }
    }
}


echo json_encode($dados);