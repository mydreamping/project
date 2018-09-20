<?php
    
    include 'connect.php';

    $id = isset($_GET['id']) ? $_GET['id'] : null;

    $qty = isset($_GET['qty']) ? $_GET['qty'] : null;


    $sql = "update car set qty='$qty' where id='$id' ";

    $result = $conn->query($sql);

    echo json_encode($result,JSON_UNESCAPED_UNICODE);
?>