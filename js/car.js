

$(function(){

    let car_none = document.querySelector('.car_none');
    let title = document.querySelector('.title');
    let list_all = document.querySelector('.list_all');

    let xhr = new XMLHttpRequest();
    let xhr_update = new XMLHttpRequest();
    let xhr_del = new XMLHttpRequest();

    xhr.onreadystatechange = ()=>{
        if(xhr.readyState === 4){
            let data = JSON.parse(xhr.responseText);
            console.log(data); 
            if(data){
                // console.log(666);
                car_none.style.display = 'none';
                title.style.display = 'block';
                list_all.style.display = 'block';

                let content_all = document.querySelector('.content_all');

                content_all.innerHTML = data.map(item=>{
                        var url = item.imgurl.slice(22,);
                        return `<li  class="myli" data-id="${item.id}">
                                <span><input type="checkbox" class="checkbox"></span>
                                <span><img src="../${url}"/></span>
                                <span>${item.title}</span>
                                <span>${item.price}</span>
                                <span><a href="javascript:void(0);" class="on_down">-</a><input type="text" value="${item.qty}"><a href="javascript:void(0);" class="on_up">+</a></span>
                                <span>￥${(item.price*item.qty).toFixed(2)}</span>
                                <span>有货</span>
                                <span><a href="javascript:void(0);" class="del">删除</a></span>

                                
                            </li>`
                    }).join('');
            
            }
        }
    }

    xhr.open('get','../api/car.php',true);

    xhr.send();

    //减
    $('.content_all').on('click','.on_down',function(e){
        var guid = $(this).parent().parent().attr('data-id');
        var val = $(this).next().val();
        val--;
        console.log(val);
        $(this).next().val(val);
        price($(this));

        xhr_update.open('get','../api/update.php?id='+guid+'&qty='+val,true);

        xhr_update.send();
    })
    // 加
    $('.content_all').on('click','.on_up',function(){
        var guid = $(this).parent().parent().attr('data-id');
        var val = $(this).prev().val();
        val++;
        $(this).prev().val(val);
        price($(this));

        xhr_update.open('get','../api/update.php?id='+guid+'&qty='+val,true);

        xhr_update.send();
    })



    function price(now) {
        var pri = now.parent().prev().text();
        pri = $.trim(pri);
        var num = now.parent().find('input').val();
        // console.log(pri);
        var all = pri * num;
        now.parent().next().html('￥&nbsp;' + all.toFixed(2));
    }


    //删除
    $('.content_all').on('click','.del',function(){

        var li =$(this).parent().parent();
        var guid = li.attr('data-id');

        var mes = confirm('您确定要删除该行吗？');
        console.log(mes);
        if(mes) {
            li.remove();
            xhr_del.open('get','../api/del_car.php?id='+guid,true);

            xhr_del.send();
        }
    })

    //勾选
     $('.content_all').on('click','.checkbox',function(){
        var add_num;
        var pr = $(this).parent().next().next().next().next().next().text().slice(1,);
        
        var all_price =$('.all_price span');
        
        all_price.text(pr);
     });



})