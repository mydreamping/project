
$(function(){

    $('.menu').on('click','.download',function(){
        // console.log(666);
        $('.menu li').eq(2).find('div').fadeToggle();
    });
    $('.menu').on('click','.serve',function(){
        // console.log(666);
        $('.menu li').eq(3).find('dl').fadeToggle();
    });
    
    banner();
    
    function banner(){

        var s1 = new Swiper('.swiper-container', {
                autoplay: { //自动轮播+延时两秒
                    delay:2000,
                    disableOnInteraction:false
                },
                loop: true,//无缝回路轮播
                speed: 500,//切换速度
                navigation: {//上下按钮
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                pagination: {//焦点跟随
                    el: '.swiper-pagination',
                    clickable: true,//点击焦点跳到指定图片
                    renderBullet: function(index, className) {
                        return '<span class="' + className + '">' + (index + 1) + '</span>';//生成焦点数字
                    }
                },
                mousewheel:true//滚动滑轮可以切图

            });
            
            var oBox=document.getElementById('swiper-container');
            // console.log(oBox);
            // 功能未实现，先注释
            // oBox.onmouseover=function(){//鼠标经过停止
            //     s1.autoplay.stop();
            // }
            
            // oBox.onmouseout=function(){//鼠标经过离开
            //     s1.autoplay.start();
            // }
    }

  // console.log($li);
})