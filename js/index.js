
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
    $('.fruits .tab_btn span').mouseover(function(){

        $('.fruits .tab_btn span').removeClass('ontab');
        $(this).addClass('ontab');

        var idx=$(this).index();
        // console.log(idx);
        // console.log($('.good').eq(idx));
        $('.f_good').css('display','none');
        $('.f_good').eq(idx).css('display','block');

    });


    // 水产海鲜
     $('.seafood .tab_btn span').mouseover(function(){

        $('.seafood .tab_btn span').removeClass('ontab');
        $(this).addClass('ontab');

        var idx=$(this).index();
        // console.log(idx);
        // console.log($('.good').eq(idx));
        $('.s_seafood ').css('display','none');
        $('.s_seafood ').eq(idx).css('display','block');

    });


     // 居家优选
     $('.home .tab_btn span').mouseover(function(){

        $('.home .tab_btn span').removeClass('ontab');
        $(this).addClass('ontab');

        var idx=$(this).index();
        // console.log(idx);
        // console.log($('.good').eq(idx));
        $('.h_home').css('display','none');
        $('.h_home').eq(idx).css('display','block');

    });

     //熟食面点

     $('.food .tab_btn span').mouseover(function(){

        $('.food .tab_btn span').removeClass('ontab');
        $(this).addClass('ontab');

        var idx=$(this).index();
        // console.log(idx);
        // console.log($('.good').eq(idx));
        $('.f_food').css('display','none');
        $('.f_food').eq(idx).css('display','block');

    });


     //乳络饮品

     $('.milk .tab_btn span').mouseover(function(){

        $('.milk .tab_btn span').removeClass('ontab');
        $(this).addClass('ontab');

        var idx=$(this).index();
        // console.log(idx);
        // console.log($('.good').eq(idx));
        $('.m_milk').css('display','none');
        $('.m_milk').eq(idx).css('display','block');

    });

     //休闲零食
     
     $('.snacks .tab_btn span').mouseover(function(){

        $('.snacks .tab_btn span').removeClass('ontab');
        $(this).addClass('ontab');

        var idx=$(this).index();
        // console.log(idx);
        // console.log($('.good').eq(idx));
        $('.s_snacks').css('display','none');
        $('.s_snacks').eq(idx).css('display','block');

    });

     //酒水茶饮
      $('.drink .tab_btn span').mouseover(function(){

        $('.drink .tab_btn span').removeClass('ontab');
        $(this).addClass('ontab');

        var idx=$(this).index();
        // console.log(idx);
        // console.log($('.good').eq(idx));
        $('.d_drink').css('display','none');
        $('.d_drink').eq(idx).css('display','block');

    });

    //厨房用品
    $('.kitchen .tab_btn span').mouseover(function(){

        $('.kitchen .tab_btn span').removeClass('ontab');
        $(this).addClass('ontab');

        var idx=$(this).index();
        // console.log(idx);
        // console.log($('.good').eq(idx));
        $('.k_kitchen').css('display','none');
        $('.k_kitchen').eq(idx).css('display','block');

    });
    
    // 轮播图
    banner();
    
    function banner(){
        // var arr = ['秘鲁牛油果89元10个','佳沛金果189元原箱','泰国椰青98元9粒','佳沛绿果99元原箱','拿得出手的中秋好礼'];
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
                    clickable: true,//点击焦点跳到指定图片+
                    renderBullet: function(index, className) {
                        return '<span class="' + className + '">' +(index + 1)+ '</span>';//生成焦点数字
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
