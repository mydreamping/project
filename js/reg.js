


$(function() {

    //用户名验证
    /*
    验证用户名
    get
        guestbook/index.php
            m : index
            a : verifyUserName
            username : 要验证的用户名
        返回
            {
                code : 返回的信息代码 0 = 没有错误，1 = 有错误
                message : 返回的信息 具体返回信息
            }
    */
    $('#username').keyup(function() {
        var usn = $('#username').val();
        $.ajax({
            type: "get",
            url: "../api/guestbook/index.php",
            async: true,
            data: {
                'm': 'index',
                'a': 'verifyUserName',
                'username': usn
            },
            success: function(str) {
                console.log(str);
                var data = JSON.parse(str);
                console.log(data);
                if(!data.code) {
                    $('#verifyUserNameMsg').html(data.message).css('color', 'green');
                } else {
                    $('#verifyUserNameMsg').html(data.message).css('color', 'red');
                }
            }
        });
    });

    //2、注册
    /*
    用户注册
    get/post
        guestbook/index.php
            m : index
            a : reg
            username : 要注册的用户名
            password : 注册的密码
        返回
            {
                code : 返回的信息代码 0 = 没有错误，1 = 有错误
                message : 返回的信息 具体返回信息
            }
    */

    $('#btnReg').click(function() {
        var usn = $('#username').val();
        var psw = $('#password').val();
        // console.log(psw);
        $.ajax({
            type: "post",
            url: "../api/guestbook/index.php",
            async: true,
            data: {
                'm': 'index',
                'a': 'reg',
                'username': usn,
                'password': psw
            },
            success: function(str) {
                
                var data = JSON.parse(str);
                console.log(data);
                if(!data.code) {
                    alert(data.message);
                } else {
                    alert(data.message);
                }
            }
        });
    });


    
    let checkbox = document.getElementById('check');
    let btnReg = document.getElementById('btnReg');
    console.log(checkbox.checked);

    checkbox.onclick= function(){
        
        if(checkbox.checked){

            btnReg.style.background = "#ff6900";
        }else{
            btnReg.style.background = "#bbb";

        }
    }

   


});