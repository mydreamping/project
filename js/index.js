
$(function(){

  

    //新品上市 选项卡
    $('.tab p').mouseover(function(){

        $('.tab p').removeClass('on');
        $(this).addClass('on');

        var idx=$(this).index();
        // console.log(idx);
        // console.log($('.good').eq(idx));
        $('.good').css('display','none');
        $('.good').eq(idx).css('display','block');
    })

    
    // 时令水果选项卡
    $('.tab_btn span').mouseover(function(){

        $('.tab_btn span').removeClass('ontab');
        $(this).addClass('ontab');

        var idx=$(this).index();
        // console.log(idx);
        // console.log($('.good').eq(idx));
        $('.f_good').css('display','none');
        $('.f_good').eq(idx).css('display','block');

    });

    // 轮播图
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
            
            oBox.onmouseover=function(){//鼠标经过停止
                s1.autoplay.stop();
            }
            
            oBox.onmouseout=function(){//鼠标经过离开
                s1.autoplay.start();
            }
    }
   
})
