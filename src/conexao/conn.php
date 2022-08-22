<?php
$hostname = "localhost:3307";	
$database ="rifa_tb";
$user = "root";
$password = "usbw";

try{
    $pdo = new PDO('mysql:host=' . $hostname .';dbname=' . $database, $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
}catch(PDOException $e){
    echo 'Erro: ' . $e->getMessage();
}