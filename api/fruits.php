<?php
    
    include 'connect.php';

    $sql = "select * from goodslist";

    $result = $conn->query($sql);

    $row = $result->fetch_all(MYSQLI_ASSOC);

    $result->close();

    $conn->close();

    // echo json_encode($row,JSON_UNESCAPED_UNICODE);

    $page = isset($_GET['page']) ? $_GET['page'] : 1;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : 10;

    // $arr = json_decode($row,true);

    $res = array(
        'total' => count($row),
        'pageNo' => $page*1,
        'qty' => $qty*1,
        'data' => array_slice($row,($page-1)*$qty,$qty)
    );

    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>