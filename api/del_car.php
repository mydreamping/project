<?php

    include 'connect.php';

    $id = isset($_GET['id']) ? $_GET['id'] : null;

    $sql = "delete from car where id='$id' ";


    $result = $conn->query($sql);

    echo json_encode($result,JSON_UNESCAPED_UNICODE);
?>