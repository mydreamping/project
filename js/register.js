
document.addEventListener('DOMContentLoaded',()=>{


            let username = document.querySelector('#username');
            let password = document.querySelector('#password');
            let btnReg = document.querySelector('.btnReg');

            console.log(username,password)
            let statusCode = [200,304];

            let xhr = new XMLHttpRequest();


            xhr.onload = function(){
                if(statusCode.indexOf(xhr.status)>=0){
                    let res = xhr.responseText;
                    // console.log(res);
                    // 获取父元素
                    let formGroup = username.parentNode;
                    let txt = formGroup.querySelector('.help-block');
                    let icon = formGroup.querySelector('.form-control-feedback');

                    if(res === 'no'){
                        formGroup.classList.remove('has-success');
                        icon.classList.remove('sr-only','glyphicon-ok');
                        icon.classList.add('glyphicon-remove');
                        formGroup.classList.add('has-error','has-feedback');
                        txt.innerText = '用户名太受欢迎';
                    }else if(res === 'yes'){
                        formGroup.classList.remove('has-error');
                        icon.classList.remove('sr-only','glyphicon-remove');
                        icon.classList.add('glyphicon-ok');
                        formGroup.classList.add('has-success','has-feedback');
                        txt.innerText = '';
                    }

                }
            }

            //检查用户是否被占用
            username.onblur = ()=>{
                xhr.open('get','../api/check.php?username='+username.value,true);

                xhr.send();
                
            }


            let xhr_reg = new XMLHttpRequest();

            xhr_reg.onload = function(){

                if(statusCode.indexOf(xhr_reg.status)>=0){

                    let res = xhr_reg.responseText;
                    if(res === 'success'){
                        location.href = 'text1.html';
                    }else{
                        alert('注册失败')
                    }

                }
            }

           


        }) 