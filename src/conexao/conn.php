<?php
$hostname = "sql209.epizy.com";	
$database ="epiz_31448453_sysrifa";
$user = "epiz_31448453";
$password = "AGhCmIfXUfn";

try{
    $pdo = new PDO('mysql:host=' . $hostname .';dbname=' . $database, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
}catch(PDOException $e){
    echo 'Erro: ' . $e->getMessage();
}