
document.addEventListener("DOMContentLoaded",()=>{


        let goodslist = document.querySelector('#list_contenet');
        // console.log(goodslist);
        let page = document.querySelector('#page');

        let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = ()=>{
                if(xhr.readyState === 4){
                let data = JSON.parse(xhr.responseText); 
                // console.log(data);

                // 生成span
                let len = Math.ceil(data.total/data.qty);
                // console.log(len);
                    page.innerText = '';
                    for(let i=0;i<len;i++){
                        let span = document.createElement('span');

                        span.innerText = i+1 ;
                        if(i === data.pageNo-1){

                            span.className = 'a_on';
                        }

                        page.appendChild(span);
                }




                //生成ul
                let ul = document.createElement('ul');
                ul.className="goods";
                ul.innerHTML = data.data.map(item=>{

                    return `<li  class="myli" data-id="${item.id}">
                            <img src="../${item.imgurl}"/>
                            <h4>${item.title}</h4>
                            <span>${item.ind}</span>
                            <p class="price"><s>${item.price}</s></p>
                            <div class="add2cart">
                                <p><img src="../images/list/list_btn01.gif"></p>
                            </div>
                        </li>`

                }).join('');

                goodslist.innerHTML = '';
                goodslist.appendChild(ul);

            }
        }
        

        xhr.open('get','../api/l_list.php?page=1&qty=10',true);

        xhr.send();


        // 排序
        let l_box = document.querySelector('.l_box');
        // console.log(l_box);
        let desc = false;

        l_box.onclick = e=>{
            // 价格排序
            
            if(e.target.className === 'default'){
                desc = !desc;
                xhr.open('get','../api/l_list.php',true);

                xhr.send();
            }
            
            
            if(e.target.className === 'sort-price'){
                desc = !desc;
                xhr.open('get','../api/l_list.php?sort=price' + (desc?'&desc':''),true);

                xhr.send();
            }
            if(e.target.className === 'sort-time'){
                // console.log(666);
                desc = !desc;
                xhr.open('get','../api/l_list.php?sort=time' + (desc?'&desc':''),true);

                xhr.send();
            }
            if(e.target.className === 'sort-sale'){
                // console.log(666);
                desc = !desc;
                xhr.open('get','../api/l_list.php?sort=sale_number' + (desc?'&desc':''),true);

                xhr.send();
            }
            if(e.target.className === 'sort-comment'){
                // console.log(666);
                desc = !desc;
                xhr.open('get','../api/l_list.php?sort=comment' + (desc?'&desc':''),true);

                xhr.send();
            }
        }

        // 分页
        page.onclick = e=>{
            if(e.target.tagName.toLowerCase() === 'span'){
                let pageNo = e.target.innerText;
                xhr.open('get','../api/l_list.php?page='+pageNo+'&qty=10',true);
                xhr.send();
            }
        }


        var content =document.getElementsByClassName('content')[0];
        console.log(content);
//点击列表进行传参
        content.onclick = function(e){


            var goodslist = Cookie.get('goodslist');

            if(goodslist === ''){
                goodslist = [];
            }else{
                goodslist = JSON.parse(goodslist);
            }

            console.log(goodslist);



            goodslist = [] ;
            var target = e.target || e.srcElement;
            var tagName = target.tagName.toLowerCase();

                location.href = 'detail.html';
                if(target.parentNode.className == 'myli'){
                    console.log(666);
                    var currentLi = target.parentNode;
                    console.log(currentLi);
                    var guid = currentLi.getAttribute('data-id');

                    console.log(guid);//唯一表示为空

                    // 获取商品信息，并写入对象
                    var mygoods = {
                        guid:guid,
                        imgurl:currentLi.children[0].src,
                        title:currentLi.children[1].innerText,
                        ind:currentLi.children[2].innerText,
                        price:currentLi.children[3].innerText,
                        // hot:currentLi.children[4].innerText,

                }
                    console.log(mygoods);
                    // 把当前商品写入数组
                    goodslist.unshift(mygoods);
                


                //跳转

                //cookie
                Cookie.set('goodslist',JSON.stringify(goodslist));
                    // document.cookie = 'goodslist=' + JSON.stringify(goodslist);
                    

            }
            

        }

       
    })