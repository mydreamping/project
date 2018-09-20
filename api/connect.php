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

?>