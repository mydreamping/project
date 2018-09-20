
$(function(){

            let username = document.querySelector('#username');
            let password = document.querySelector('#password');
            let btnReg = document.querySelector('#btnReg');
            let compassword = document.querySelector('#compassword');

            let verifyUserNameMsg = document.querySelector('#verifyUserNameMsg');
            let verifyPasswordMsg = document.querySelector('#verifyPasswordMsg');
            // 确认密码
            let verifyMsg = document.querySelector('#verifyMsg');

            let s_icon_1 = document.querySelector('s');

            let s_icon_2 = document.querySelectorAll('s')[2];
            let s_icon_3 = document.querySelectorAll('s')[3];

            let statusCode = [200,304];

            let check = document.getElementById('check');
            console.log(check);

            let xhr = new XMLHttpRequest();


            xhr.onload = function(){
                if(statusCode.indexOf(xhr.status)>=0){
                    let res = xhr.responseText;
                    

                    if(res === 'no'){
                       
                        verifyUserNameMsg.innerText = '用户名太受欢迎';

                    }else if(res === 'yes'){
                       
                        verifyUserNameMsg.innerText = '';
                    }

                }
            }

            //检查用户是否被占用
            username.onblur = ()=>{

                xhr.open('get','../api/check.php?username='+username.value,true);

                xhr.send();
                console.log()
            }


            let xhr_reg = new XMLHttpRequest();

            xhr_reg.onload = function(){

                if(statusCode.indexOf(xhr_reg.status)>=0){

                    let res = xhr_reg.responseText;
                    if(res === 'success'){
                        location.href = 'index.html';
                    }else{
                        alert('注册失败')
                    }

                }
            }
            //注册
            btnReg.onclick = function(){
                let _username = username.value;
                var _password = password.value;

                xhr_reg.open('get',`../api/register.php?username=${_username}&password=${_password}`,true);

                xhr_reg.send();
                
            }

            // 注册按钮高亮
            let checkbox = document.getElementById('check');
            // console.log(checkbox.checked);
            btnReg.children[0].disabled = true;

            checkbox.onclick= function(){
                
                if(checkbox.checked){

                    btnReg.style.background = "#ff6900";
                    btnReg.children[0].style.background = "#ff6900";
                    btnReg.children[0].disabled = false;
                }else{
                    btnReg.style.background = "#bbb";
                    btnReg.children[0].style.background = "#bbb";
                    btnReg.children[0].disabled = true;
                }
            }

        //显示提示语
         username.onblur = function(){

            if(username.value == ''){
                
                verifyUserNameMsg.innerText="请输入手机号";
                s_icon_1.className = '';
                s_icon_1.className= 'no';

            }else{
                verifyUserNameMsg.innerText = '';
            }

        }


        // 验证用户电话号码
            username.onkeyup = function(){
                var _username = username.value;

                var reg = /^1[3-9]\d{9}$/;
                if(!reg.test(_username)){
                    verifyUserNameMsg.innerText="用户名不合法";
                    s_icon_1.className = '';
                    s_icon_1.className= 'no';
                    return false;
                }else{
                    verifyUserNameMsg.innerText="";
                    s_icon_1.className = '';
                    s_icon_1.className= 'yes';
                }
            }

            password.onblur = function(){

                if(password.value == ''){
                    
                    verifyPasswordMsg.innerText="请输入密码";
                    s_icon_2.className= '';
                    s_icon_2.className  = 'no';
    
                }else{
                    verifyPasswordMsg.innerText = '';
                }
            }

            password.onkeyup = function(){
                var _password = password.value;

                var reg = /^[^\s]{5,16}$/;

                if(!reg.test(_password)){
                    verifyPasswordMsg.innerText = '密码至少6位，最多16位!';
                    s_icon_2.className = '';

                    s_icon_2.className= 'no';
                    return false;
                }else{

                    verifyPasswordMsg.innerText="";

                    s_icon_2.className = '';
                    s_icon_2.className= 'yes';
                }

            }


            compassword.onkeyup = function(){
                var _password = password.value;
                var _compassword =compassword.value;

                if(_password != _compassword){
                    verifyMsg.innerText = '请输入确认密码!';
                    s_icon_3.className = '';
                    s_icon_3.className= 'no';

                    btnReg.children[0].disabled = true;

                }else{
                    verifyMsg.innerText = '';
                    s_icon_3.className = '';
                    s_icon_3.className= 'yes';

                    btnReg.children[0].disabled = false;
                }

            }



})



           
