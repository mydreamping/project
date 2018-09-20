

$(function(){



    // 数值加减
    $(".good_buy").click(function(e){

        if($(e.target).hasClass('up')){
            
            var nownum = $('.num');
            var num = $(nownum).val();
            if(num >= 100) {
                val = 100;
            }
            var now_num = $(nownum).val(num*1+1).val();
                        
        }

        if($(e.target).hasClass('down')){

            var nownum = $('.num');
            var num = $(nownum).val();
            if(num <= 1) {
                num = 1;
            }
            var now_num = $(nownum).val(num*1-1).val();
        }

    });


    // 获取cookie
    var goodslist = Cookie.get('goodslist');

            if(goodslist === ''){
                goodslist = [];
            }else{
                goodslist = JSON.parse(goodslist);
            }

    console.log(goodslist);

    // showdata();
    // function showdata(){


        // 获取cookie的值分别写到页面上
        var title;
        var price;
        var imgurl;
        var ind;
        var guid;

        goodslist.map(function(item){

            guid= item.guid;
            title  = item.title;
            ind = item.ind;
            price = item.price;
            imgurl = item.imgurl;
        });

        // console.log(guid);
        var product_name = document.querySelector('.product_name');
        var context = document.querySelector('.name .context')
        var _price = document.getElementsByClassName('price')[0].children[0];
        var pic = document.querySelector('.pic').children[0];
        // console.log(pic);
        product_name.innerText = title; 
        _price.innerText = price;
        context.innerText = ind;

        pic.src = imgurl;   
    // }


    $('.list_box').on('click','.btn_buy',function(){
        var qty = $('.num').val();
       
        console.log(title,price,imgurl);
        let xhr_car = new XMLHttpRequest;
        
        xhr_car.onreadystatechange = ()=>{

            location.href = "../html/car.html";
        }

        xhr_car.open('get',`../api/add_car.php?id=${guid}&imgurl=${imgurl}&title=${title}&qty=${qty}&price=${price}`,true);

        xhr_car.send();
    })



});