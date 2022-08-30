<?php

include("../../conexao/conn.php");

$requestData = $_REQUEST;

if(empty($requestData['TITULO']) && empty($requestData['DESCRICAO']) && empty($requestData['DATA_INICIO']) && empty($requestData['DATA_FIM']) &&
empty($requestData['DATA_SORTEIO']) && empty($requestData['ARRECADACAO']) && empty($requestData['VALOR_RIFA'])){
    $dados = array(
        'tipo' => 'error',
        'mensagem' => "O campo nome precisa estar preenchido" 
    );

}else{

    $ID = isset($requestData['ID']) ? $requestData['ID'] : "";
    $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : "";

    if($operacao == "insert"){
        try{
            $stmt = $pdo->prepare('INSERT INTO PROMOCAO (TITULO, DESCRICAO, DATA_INICIO, DATA_FIM, DATA_SORTEIO, ARRECADACAO, VALOR_RIFA)
             VALUES (:a, :b, DATE :c, DATE :d, DATE :e, :f, :g');
            $stmt->execute(array(
                ':a' => utf8_decode($requestData['TITULO']),
                ':b' => utf8_decode($requestData['DESCRICAO']),
                ':c' => utf8_decode($requestData['DATA_INICIO']),
                ':d' => utf8_decode($requestData['DATA_FIM']),
                ':e' => utf8_decode($requestData['DATA_SORTEIO']),
                ':f' => utf8_decode($requestData['ARRECADACAO']),
                ':g' => utf8_decode($requestData['VALOR_RIFA'])
            ));
            $dados = array(
                'tipo' => 'success',
                'mensagem' => "We are champions my friend"
            );
        }catch(PDOException $e){
            $dados = array(
                'tipo' => 'error',
                'mensagem' => "Deu pau na oral de cadastrar ai"
            );
        }
        
    }else{
        try{
            $stmt = $pdo->prepare('UPDATE TIPO SET NOME = :a where ID = :id');
            $stmt->execute(
                array(
                    ':id' => $ID,
                    ':a' => utf8_decode($requestData['NOME'])
            ));

            $dados = array(
                'tipo' => 'success',
                'mensagem' => "We are champions my friend"
            );
        }catch(PDOException $e){
            $dados = array(
                'tipo' => 'error',
                'mensagem' => "Deu pau na oral de atualiuzar ai"
            );
        }
    }
}


echo json_encode($dados);