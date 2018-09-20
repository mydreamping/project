<?php

    include 'connect.php';

     $id = isset($_GET['id']) ? $_GET['id'] : null;
    
    $title = isset($_GET['title']) ? $_GET['title'] : null;
    
    $imgurl = isset($_GET['imgurl']) ? $_GET['imgurl'] : null;
        
    $price = isset($_GET['price']) ? $_GET['price'] : null;

    $qty = isset($_GET['qty']) ? $_GET['qty'] : null;


    $sql = "insert into car(id,title,imgurl,price,qty) values('$id','$title','$imgurl','$price','$qty')";

    // $sql = "update car set qty='$qty' where id='$id' ";
    $result = $conn->query($sql);

    echo json_encode($result,JSON_UNESCAPED_UNICODE);
?>