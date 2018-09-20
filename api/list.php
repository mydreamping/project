<?php
    
    include 'connect.php';

    //从前端获取数据
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    // echo $id;
    
    

    $sql = "select * from goodslist";
    
    $result = $conn->query($sql);

    $row = $result->fetch_all(MYSQLI_ASSOC);

    $result->close();
    
    $conn->close();

    
    echo json_encode($row,JSON_UNESCAPED_UNICODE);
        
    

?>