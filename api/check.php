<?php

    // 链接到数据库
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'project';


    //创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);

    //检查是否成功
    if ($conn->connect_error) {
            die("连接失败: " . $conn->connect_error);
        } 

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    
    //前端获取数据
    $username = isset($_GET['username']) ? $_GET['username'] : null;

    //获取结果集，从数据库中获取
    $sql = "select * from user where username='$username'";

    
    
    //执行sql语句
    $result = $conn->query($sql);


    // num_rows 是一个属性
    // 判断是否获取到数据
    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }


?>