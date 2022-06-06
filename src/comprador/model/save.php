<?php

include("../../conexao/conn.php");

$requestData = $_REQUEST;

if(empty($requestData['NOME']) || empty($requestData['CELL'])){
    $dados = array(
        'tipo' => 'error',
        'mensagem' => "O campo nome precisa estar preenchido" 
    );

}else{

    $ID = isset($requestData['ID']) ? $requestData['ID'] : "";
    $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : "";

    if($operacao == "insert"){
        try{
            $stmt = $pdo->prepare('INSERT INTO COMPRADOR (NOME, CELULAR) VALUES (:a,:b)');
            $stmt->execute(array(
                ':a' => $requestData['NOME'],
                ':b' => $requestData['CELL']
            ));
            $dados = array(
                'tipo' => 'success',
                'mensagem' => "We are champions my friend"
            );
        }catch(PDOException $e){
            $dados = array(
                'tipo' => 'error',
                'mensagem' => "Deu pau ai, ta o ok"
            );
        }
        
    }else{
        try{
            $stmt = $pdo->prepare('UPDATE COMPRADOR SET NOME = :a , CELULAR = :b WHERE :id');
            $stmt->execute(
                array(
                    ':id' => $ID,
                    ':a' => $requestData['NOME'],
                    ':b' => $requestData['CELL']
            ));

            $dados = array(
                'tipo' => 'success',
                'mensagem' => "We are champions my friend"
            );
        }catch(PDOException $e){
            $dados = array(
                'tipo' => 'error',
                'mensagem' => "Deu pau ai, ta o ok"
            );
        }
    }
}


echo json_encode($dados);