

document.addEventListener('DOMContentLoaded',()=>{

            let username = document.querySelector('#username');
            let password = document.querySelector('#password');
            let btnLogin = document.querySelector('.btnLogin');

            let output_u = document.querySelector('.output_u');
            let output_p = document.querySelector('.output_p');

            let s_icon_1 = document.querySelector('s');

            let s_icon_2 = document.querySelectorAll('s')[1];
            // console.log(s_icon_2);

             // 记住7天密码
            let checkbox = document.getElementsByClassName('check')[0];
            // console.log(checkbox);

            let statusCode = [200,304];


            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                if(statusCode.indexOf(xhr.status)>=0){
                    let res = xhr.responseText;

                    if(res == 'success'){
                        location.href = '../index.html';
                        console.log('登录成功')
                    }else{
                        output_p.innerText ='用户名或密码错误';
                        
                    }
                }
            }

            // 登录
            btnLogin.onclick = function(){
                let _username = username.value;
                let _password = password.value;

                // xhr.open('get',`../api/login.php?username=${_username}&password=${_password}`,true);
                // xhr.send();


                // 判断是否勾选
                // checked
                if(checkbox.checked){
                        // 写入cookie，并保留7天(expires)

                        // 先获取当前事件
                        var d = new Date();
                        d.setDate(d.getDate()+7);

                        document.cookie = 'username=' + _username + ';expires=' + d.toUTCString();
                        document.cookie = 'password=' + _password + ';expires=' + d.toUTCString();
                    }
               

                // 页面刷新，自动登录
                var currentUserName,currentPassword;
                var allCookie = document.cookie;

                // String -> Array
                allCookie = allCookie.split('; ');

                // 遍历所有cookie，找出username,password
                allCookie.forEach(function(item){
                    // 拆分name和value
                    var arr = item.split('=');

                    // 获取username,password的值
                    if(arr[0] === 'username'){
                        currentUserName = arr[1];
                    }else if(arr[0] === 'password'){
                        currentPassword = arr[1];
                    }
                });

                // 如果currentUserName和currentPassword都有值
                // 自动登录
                if(currentUserName && currentPassword){
                    location.href = '../index.html';
                }

                xhr.open('get',`../api/login.php?username=${_username}&password=${_password}`,true);
                xhr.send();
            }
            

            // username失去焦点时验证
            username.onblur = function(){

                if(username.value == ''){
                    
                    output_u.innerText="请输入邮箱/手机";
                    s_icon_1.className = '';
                    s_icon_1.className= 'no';

                console.log(666);
                }else{
                    output_u.innerText = '';
                }

   
            }

            // 验证用户电话号码
            username.onkeyup = function(){
                var _username = username.value;

                var reg = /^1[3-9]\d{9}$/;
                if(!reg.test(_username)){
                    output_u.innerText="用户名不合法";
                    s_icon_1.className = '';
                    s_icon_1.className= 'no';
                    return false;
                }else{
                    output_u.innerText="";
                    s_icon_1.className = '';
                    s_icon_1.className= 'yes';
                }
            }

            password.onblur = function(){

                if(password.value == ''){
                    
                    output_p.innerText="请输入密码";
                    s_icon_2.className= '';
                    s_icon_2.className  = 'no';
    
                }else{
                    output_p.innerText = '';
                }
            }

            password.onkeyup = function(){
                var _password = password.value;

                var reg = /^[^\s]{5,16}$/;

                if(!reg.test(_password)){
                    output_p.innerText = '密码至少6位，最多16位!';
                    s_icon_2.className = '';

                    s_icon_2.className= 'no';
                    return false;
                }else{

                    output_p.innerText="";

                    s_icon_2.className = '';
                    s_icon_2.className= 'yes';
                }

            }

        



           

                
})