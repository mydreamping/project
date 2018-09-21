
// document.addEventListener('DOMContentLoaded',function(){
$(function(){


    //时令水果
    
    function friuts(){

        let hot_fruits = document.getElementsByClassName('hot_fruits')[0];
        let import_fruits = document.getElementsByClassName('import')[0];
        let make_in_china = document.getElementsByClassName('make_in_china')[0];

        // 时令水果
        let ul1 = document.createElement('ul');
        let ul2 = document.createElement('ul');
        let ul3 = document.createElement('ul');
     
            
        let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function(){
        
            if(xhr.readyState === 4){
                let data = JSON.parse(xhr.responseText);
                // console.log(data);

                // 2）根据数据生成html结构
                       // console.log(ul); 
                       // 时令水果
                        ul1.innerHTML = data.data.map(goods=>{
                            return `<li data-id="${goods.id}">
                                <div class="box">
                                <img src="../${goods.imgurl}"/>
                                <h4>${goods.title}</h4>
                                <p class="category"><span>${goods.ind}</span></p>
                                <p class="price"><span>${goods.price}</span>&nbsp;<del>${goods.off}</del></p>

                                <div class="btn"></div>
                                </div>
                            </li>`
                        }).join('');

                        // 写入页面
                        hot_fruits.innerHTML = '';
                        hot_fruits.appendChild(ul1);


                        ul2.innerHTML = data.data.map(goods=>{
                            return `<li data-id="${goods.id}">
                                <div class="box">
                                <img src="../${goods.imgurl}"/>
                                <h4>${goods.title}</h4>
                                <p class="category"><span>${goods.ind}</span></p>
                                <p class="price"><span>${goods.price}</span>&nbsp;<del>${goods.off}</del></p>
                                <div class="btn"></div>
                                </div>
                            </li>`
                        }).join('');

                        import_fruits.innerHTML = '';
                        import_fruits.appendChild(ul2);


                       ul3.innerHTML = data.data.map(goods=>{
                            return `<li data-id="${goods.id}">
                                <div class="box">
                                <img src="../${goods.imgurl}"/>
                                <h4>${goods.title}</h4>
                                <p class="category"><span>${goods.ind}</span></p>
                                <p class="price"><span>${goods.price}</span>&nbsp;<del>${goods.off}</del></p>
                                <div class="btn"></div>
                                </div>
                            </li>`
                        }).join('');

                        make_in_china.innerHTML = '';
                        make_in_china.appendChild(ul3);




                }
            }
            
        

        xhr.open('get','../api/fruits.php?page=1&qty=10',true);
        xhr.send(); 

        let tab_btn = document.getElementsByClassName('tab_btn')[0];
        let tab_btnA = document.querySelectorAll('.tab_btn');
    
        // console.log(tab_btnA);
        // document.body.onmouseover = function(ev){
            // console.log(ev.target.parentNode);
            // if(ev.target.parentNode.className == 'tab_btn'){
                for(var j=0;j<tab_btnA.length;j++){

                    tab_btnA[j].onmouseover= function(e){
                    // console.log(this);

                        if(e.target.tagName.toLowerCase() === 'span'){
                                let page = e.target.parentNode.children;
                                // console.log(e.target);
                                for(var i=0;i<page.length;i++){
                                    // console.log(page[i]);
                                    page[i].setAttribute('idx',i);
                                    // console.log(idx);
                                }
                                var idx = e.target.getAttribute('idx');
                                // console.log(idx); 
                                let pageNo = idx++;  

                                xhr.open('get','../api/fruits.php?page='+pageNo+'&qty=10',true);
                                xhr.send(); 
                                
                        }
                    }
                }
                
            
            // }
            
        // }
    }

    seafood()
    function seafood(){
        //水产海鲜
        let hot_seafood = document.getElementsByClassName('hot_seafood')[0];
        let fish = document.getElementsByClassName('fish')[0]; 
        let sea_1 = document.getElementsByClassName('sea_1')[0]; 
        let sea_2 = document.getElementsByClassName('sea_2')[0]; 
        let sea_3 = document.getElementsByClassName('sea_3')[0]; 
        let sea_4 = document.getElementsByClassName('sea_4')[0]; 


        let ul4 = document.createElement('ul');
        let ul5 = document.createElement('ul');
        let ul6 = document.createElement('ul');
        let ul7 = document.createElement('ul');
        let ul8 = document.createElement('ul');

        let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function(){
        
            if(xhr.readyState === 4){
                let data = JSON.parse(xhr.responseText);
                // console.log(data);

                // 2）根据数据生成html结构
                       // console.log(ul); 

                        //海鲜
                        ul4.innerHTML = data.data.map(goods=>{
                            return `<li data-id="${goods.id}">
                                <div class="box">
                                <img src="../${goods.imgurl}"/>
                                <h4>${goods.title}</h4>
                                <p class="category"><span>${goods.ind}</span></p>
                                <p class="price"><span>${goods.price}</span>&nbsp;<del>${goods.off}</del></p>
                                <div class="btn"></div>
                                </div>
                            </li>`
                        }).join('');

                        hot_seafood.innerHTML = '';
                        hot_seafood.appendChild(ul4);

                        ul5.innerHTML = data.data.map(goods=>{
                            return `<li data-id="${goods.id}">
                                <div class="box">
                                <img src="../${goods.imgurl}"/>
                                <h4>${goods.title}</h4>
                                <p class="category"><span>${goods.ind}</span></p>
                                <p class="price"><span>${goods.price}</span>&nbsp;<del>${goods.off}</del></p>
                                <div class="btn"></div>
                                </div>
                            </li>`
                        }).join('');

                        fish.innerHTML = '';
                        fish.appendChild(ul5);


                }
            }
            
        

        xhr.open('get','../api/fruits.php?page=1&qty=10',true);
        xhr.send(); 

        let tab_btn = document.getElementsByClassName('tab_btn')[0];
        let tab_btnA = document.querySelectorAll('.tab_btn');
     
        // console.log(tab_btnA);
        // document.body.onmouseover = function(ev){
            // console.log(ev.target.parentNode);
            // if(ev.target.parentNode.className == 'tab_btn'){
                for(var j=0;j<tab_btnA.length;j++){

                    tab_btnA[j].onmouseover= function(e){
                    // console.log(this);

                        if(e.target.tagName.toLowerCase() === 'span'){
                                let page = e.target.parentNode.children;
                                // console.log(e.target);
                                for(var i=0;i<page.length;i++){
                                    // console.log(page[i]);
                                    page[i].setAttribute('idx',i);
                                    // console.log(idx);
                                }
                                var idx = e.target.getAttribute('idx');
                                // console.log(idx); 
                                let pageNo = idx++;  

                                xhr.open('get','../api/fruits.php?page='+pageNo+'&qty=10',true);
                                xhr.send(); 
                                
                        }
                    }
                }
                
            
            // }
            
        // }
    }

    home();
    function home(){
        let hot_home = document.getElementsByClassName('hot_home')[0]; 
        let mice = document.getElementsByClassName('mice')[0]; 
        let noodle = document.getElementsByClassName('noodle')[0]; 
        let health = document.getElementsByClassName('health')[0]; 
        let kic = document.getElementsByClassName('kic')[0]; 

        let ul9 = document.createElement('ul');
        let ul10 = document.createElement('ul');
        let ul11 = document.createElement('ul');
        let ul12 = document.createElement('ul');
        let ul13 = document.createElement('ul');
        

         let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function(){
        
            if(xhr.readyState === 4){
                let data = JSON.parse(xhr.responseText);
                // console.log(data);

                // 2）根据数据生成html结构
                       // console.log(ul); 

                        //海鲜
                        ul9.innerHTML = data.data.map(goods=>{
                            return `<li data-id="${goods.id}">
                                <div class="box">
                                <img src="../${goods.imgurl}"/>
                                <h4>${goods.title}</h4>
                                <p class="category"><span>${goods.ind}</span></p>
                                <p class="price"><span>${goods.price}</span>&nbsp;<del>${goods.off}</del></p>
                                <div class="btn"></div>
                                </div>
                            </li>`
                        }).join('');

                        hot_home.innerHTML = '';
                        hot_home.appendChild(ul9);

                        ul10.innerHTML = data.data.map(goods=>{
                            return `<li data-id="${goods.id}">
                                <div class="box">
                                <img src="../${goods.imgurl}"/>
                                <h4>${goods.title}</h4>
                                <p class="category"><span>${goods.ind}</span></p>
                                <p class="price"><span>${goods.price}</span>&nbsp;<del>${goods.off}</del></p>
                                <div class="btn"></div>
                                </div>
                            </li>`
                        }).join('');

                        mice.innerHTML = '';
                        mice.appendChild(ul10);


                }
            }
            
        

        xhr.open('get','../api/fruits.php?page=1&qty=10',true);
        xhr.send(); 

        let tab_btn = document.getElementsByClassName('tab_btn')[0];
        let tab_btnA = document.querySelectorAll('.tab_btn');
     
        // console.log(tab_btnA);
        // document.body.onmouseover = function(ev){
            // console.log(ev.target.parentNode);
            // if(ev.target.parentNode.className == 'tab_btn'){
                for(var j=0;j<tab_btnA.length;j++){

                    tab_btnA[j].onmouseover= function(e){
                    // console.log(this);

                        if(e.target.tagName.toLowerCase() === 'span'){
                                let page = e.target.parentNode.children;
                                // console.log(e.target);
                                for(var i=0;i<page.length;i++){
                                    // console.log(page[i]);
                                    page[i].setAttribute('idx',i);
                                    // console.log(idx);
                                }
                                var idx = e.target.getAttribute('idx');
                                // console.log(idx); 
                                let pageNo = idx++;  

                                xhr.open('get','../api/fruits.php?page='+pageNo+'&qty=10',true);
                                xhr.send(); 
                                
                        }
                    }
                }
                
            
            // }
            
        // }
    }

    food();
    function food(){
        let hot_food = document.getElementsByClassName('hot_home')[0]; 
        let food_1 = document.getElementsByClassName('food_1')[0]; 
        let food_2 = document.getElementsByClassName('food_2')[0]; 
        let food_3 = document.getElementsByClassName('food_3')[0]; 
        let food_4 = document.getElementsByClassName('food_4')[0]; 

        let ul14 = document.createElement('ul');
        let ul15 = document.createElement('ul');
        let ul16 = document.createElement('ul');
        let ul17 = document.createElement('ul');
        let ul18 = document.createElement('ul');
        

         let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function(){
        
            if(xhr.readyState === 4){
                let data = JSON.parse(xhr.responseText);
                // console.log(data);

                // 2）根据数据生成html结构
                       // console.log(ul); 

                        //海鲜
                        ul14.innerHTML = data.data.map(goods=>{
                            return `<li data-id="${goods.id}">
                                <div class="box">
                                <img src="../${goods.imgurl}"/>
                                <h4>${goods.title}</h4>
                                <p class="category"><span>${goods.ind}</span></p>
                                <p class="price"><span>${goods.price}</span>&nbsp;<del>${goods.off}</del></p>
                                <div class="btn"></div>
                                </div>
                            </li>`
                        }).join('');

                        hot_food.innerHTML = '';
                        hot_food.appendChild(ul14);

                        ul15.innerHTML = data.data.map(goods=>{
                            return `<li data-id="${goods.id}">
                                <div class="box">
                                <img src="../${goods.imgurl}"/>
                                <h4>${goods.title}</h4>
                                <p class="category"><span>${goods.ind}</span></p>
                                <p class="price"><span>${goods.price}</span>&nbsp;<del>${goods.off}</del></p>
                                <div class="btn"></div>
                                </div>
                            </li>`
                        }).join('');

                        food_1.innerHTML = '';
                        food_1.appendChild(ul15);


                }
            }
            
        

        xhr.open('get','../api/fruits.php?page=1&qty=10',true);
        xhr.send(); 

        let tab_btn = document.getElementsByClassName('tab_btn')[0];
        let tab_btnA = document.querySelectorAll('.tab_btn');
     
        // console.log(tab_btnA);
        // document.body.onmouseover = function(ev){
            // console.log(ev.target.parentNode);
            // if(ev.target.parentNode.className == 'tab_btn'){
                for(var j=0;j<tab_btnA.length;j++){

                    tab_btnA[j].onmouseover= function(e){
                    // console.log(this);

                        if(e.target.tagName.toLowerCase() === 'span'){
                                let page = e.target.parentNode.children;
                                // console.log(e.target);
                                for(var i=0;i<page.length;i++){
                                    // console.log(page[i]);
                                    page[i].setAttribute('idx',i);
                                    // console.log(idx);
                                }
                                var idx = e.target.getAttribute('idx');
                                // console.log(idx); 
                                let pageNo = idx++;  

                                xhr.open('get','../api/fruits.php?page='+pageNo+'&qty=10',true);
                                xhr.send(); 
                                
                        }
                    }
                }
                
            
            // }
            
        // }
    }

    milk();
    function milk(){
        let hot_milk = document.getElementsByClassName('hot_milk')[0]; 
        let milk_1 = document.getElementsByClassName('milk_1')[0]; 
        let milk_2 = document.getElementsByClassName('milk_2')[0]; 
        

        let ul19 = document.createElement('ul');
        let ul20 = document.createElement('ul');
        let ul21 = document.createElement('ul');
        
        

         let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function(){
        
            if(xhr.readyState === 4){
                let data = JSON.parse(xhr.responseText);
                // console.log(data);

                // 2）根据数据生成html结构
                       // console.log(ul); 

                        //海鲜
                        ul19.innerHTML = data.data.map(goods=>{
                            return `<li data-id="${goods.id}">
                                <div class="box">
                                <img src="../${goods.imgurl}"/>
                                <h4>${goods.title}</h4>
                                <p class="category"><span>${goods.ind}</span></p>
                                <p class="price"><span>${goods.price}</span>&nbsp;<del>${goods.off}</del></p>
                                <div class="btn"></div>
                                </div>
                            </li>`
                        }).join('');

                        hot_milk.innerHTML = '';
                        hot_milk.appendChild(ul19);

                        ul20.innerHTML = data.data.map(goods=>{
                            return `<li data-id="${goods.id}">
                                <div class="box">
                                <img src="../${goods.imgurl}"/>
                                <h4>${goods.title}</h4>
                                <p class="category"><span>${goods.ind}</span></p>
                                <p class="price"><span>${goods.price}</span>&nbsp;<del>${goods.off}</del></p>
                                <div class="btn"></div>
                                </div>
                            </li>`
                        }).join('');

                        milk_1.innerHTML = '';
                        milk_1.appendChild(ul20);


                }
            }
            
        

        xhr.open('get','../api/fruits.php?page=1&qty=10',true);
        xhr.send(); 

        let tab_btn = document.getElementsByClassName('tab_btn')[0];
        let tab_btnA = document.querySelectorAll('.tab_btn');
     
        // console.log(tab_btnA);
        // document.body.onmouseover = function(ev){
            // console.log(ev.target.parentNode);
            // if(ev.target.parentNode.className == 'tab_btn'){
                for(var j=0;j<tab_btnA.length;j++){

                    tab_btnA[j].onmouseover= function(e){
                    // console.log(this);

                        if(e.target.tagName.toLowerCase() === 'span'){
                                let page = e.target.parentNode.children;
                                // console.log(e.target);
                                for(var i=0;i<page.length;i++){
                                    // console.log(page[i]);
                                    page[i].setAttribute('idx',i);
                                    // console.log(idx);
                                }
                                var idx = e.target.getAttribute('idx');
                                // console.log(idx); 
                                let pageNo = idx++;  

                                xhr.open('get','../api/fruits.php?page='+pageNo+'&qty=10',true);
                                xhr.send(); 
                                
                        }
                    }
                }
                
            
            // }
            
        // }
    }

    snacks();
    function snacks(){
        let hot_snacks = document.getElementsByClassName('hot_snacks')[0]; 
        let snacks_1 = document.getElementsByClassName('snacks_1')[0]; 
        let snacks_2 = document.getElementsByClassName('snacks_2')[0]; 
        

        let ul22 = document.createElement('ul');
        let ul23 = document.createElement('ul');
        let ul24 = document.createElement('ul');
        
        

         let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function(){
        
            if(xhr.readyState === 4){
                let data = JSON.parse(xhr.responseText);
                // console.log(data);

                // 2）根据数据生成html结构
                       // console.log(ul); 

                        //海鲜
                        ul22.innerHTML = data.data.map(goods=>{
                            return `<li data-id="${goods.id}">
                                <div class="box">
                                <img src="../${goods.imgurl}"/>
                                <h4>${goods.title}</h4>
                                <p class="category"><span>${goods.ind}</span></p>
                                <p class="price"><span>${goods.price}</span>&nbsp;<del>${goods.off}</del></p>
                                <div class="btn"></div>
                                </div>
                            </li>`
                        }).join('');

                        hot_snacks.innerHTML = '';
                        hot_snacks.appendChild(ul22);

                        ul23.innerHTML = data.data.map(goods=>{
                            return `<li data-id="${goods.id}">
                                <div class="box">
                                <img src="../${goods.imgurl}"/>
                                <h4>${goods.title}</h4>
                                <p class="category"><span>${goods.ind}</span></p>
                                <p class="price"><span>${goods.price}</span>&nbsp;<del>${goods.off}</del></p>
                                <div class="btn"></div>
                                </div>
                            </li>`
                        }).join('');

                        snacks_1.innerHTML = '';
                        snacks_1.appendChild(ul23);


                }
            }
            
        

        xhr.open('get','../api/fruits.php?page=1&qty=10',true);
        xhr.send(); 

        let tab_btn = document.getElementsByClassName('tab_btn')[0];
        let tab_btnA = document.querySelectorAll('.tab_btn');
     
        // console.log(tab_btnA);
        // document.body.onmouseover = function(ev){
            // console.log(ev.target.parentNode);
            // if(ev.target.parentNode.className == 'tab_btn'){
                for(var j=0;j<tab_btnA.length;j++){

                    tab_btnA[j].onmouseover= function(e){
                    // console.log(this);

                        if(e.target.tagName.toLowerCase() === 'span'){
                                let page = e.target.parentNode.children;
                                // console.log(e.target);
                                for(var i=0;i<page.length;i++){
                                    // console.log(page[i]);
                                    page[i].setAttribute('idx',i);
                                    // console.log(idx);
                                }
                                var idx = e.target.getAttribute('idx');
                                // console.log(idx); 
                                let pageNo = idx++;  

                                xhr.open('get','../api/fruits.php?page='+pageNo+'&qty=10',true);
                                xhr.send(); 
                                
                        }
                    }
                }
                
            
            // }
            
        // }
    }

    drink();
    function drink(){
        let hot_drink = document.getElementsByClassName('hot_drink')[0]; 
        let drink_1 = document.getElementsByClassName('drink_1')[0]; 
        let drink_2 = document.getElementsByClassName('drink_2')[0]; 
        

        let ul25 = document.createElement('ul');
        let ul26 = document.createElement('ul');
        let ul27 = document.createElement('ul');
        
        

         let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function(){
        
            if(xhr.readyState === 4){
                let data = JSON.parse(xhr.responseText);
                // console.log(data);

                // 2）根据数据生成html结构
                       // console.log(ul); 

                        //海鲜
                        ul25.innerHTML = data.data.map(goods=>{
                            return `<li data-id="${goods.id}">
                                <div class="box">
                                <img src="../${goods.imgurl}"/>
                                <h4>${goods.title}</h4>
                                <p class="category"><span>${goods.ind}</span></p>
                                <p class="price"><span>${goods.price}</span>&nbsp;<del>${goods.off}</del></p>
                                <div class="btn"></div>
                                </div>
                            </li>`
                        }).join('');

                        hot_drink.innerHTML = '';
                        hot_drink.appendChild(ul25);

                        ul26.innerHTML = data.data.map(goods=>{
                            return `<li data-id="${goods.id}">
                                <div class="box">
                                <img src="../${goods.imgurl}"/>
                                <h4>${goods.title}</h4>
                                <p class="category"><span>${goods.ind}</span></p>
                                <p class="price"><span>${goods.price}</span>&nbsp;<del>${goods.off}</del></p>
                                <div class="btn"></div>
                                </div>
                            </li>`
                        }).join('');

                        drink_1.innerHTML = '';
                        drink_1.appendChild(ul26);


                }
            }
            
        

        xhr.open('get','../api/fruits.php?page=1&qty=10',true);
        xhr.send(); 

        let tab_btn = document.getElementsByClassName('tab_btn')[0];
        let tab_btnA = document.querySelectorAll('.tab_btn');
     
        // console.log(tab_btnA);
        
                for(var j=0;j<tab_btnA.length;j++){

                    tab_btnA[j].onmouseover= function(e){
                    // console.log(this);

                        if(e.target.tagName.toLowerCase() === 'span'){
                                let page = e.target.parentNode.children;
                                // console.log(e.target);
                                for(var i=0;i<page.length;i++){
                                    // console.log(page[i]);
                                    page[i].setAttribute('idx',i);
                                    // console.log(idx);
                                }
                                var idx = e.target.getAttribute('idx');
                                // console.log(idx); 
                                let pageNo = idx++;  

                                xhr.open('get','../api/fruits.php?page='+pageNo+'&qty=10',true);
                                xhr.send(); 
                                
                        }
                    }
                }
                       
    }

    kitchen();
    function kitchen(){
        let hot_kitchen = document.getElementsByClassName('hot_kitchen')[0]; 
        let kitchen_1 = document.getElementsByClassName('kitchen_1')[0]; 
        let kitchen_2 = document.getElementsByClassName('kitchen_2')[0]; 
        

        let ul28 = document.createElement('ul');
        let ul29 = document.createElement('ul');
        let ul30 = document.createElement('ul');
        
        

         let xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function(){
        
            if(xhr.readyState === 4){
                let data = JSON.parse(xhr.responseText);
                // console.log(data);

                // 2）根据数据生成html结构
                       // console.log(ul); 

                        //海鲜
                        ul29.innerHTML = data.data.map(goods=>{
                            return `<li data-id="${goods.id}">
                                <div class="box">
                                <img src="../${goods.imgurl}"/>
                                <h4>${goods.title}</h4>
                                <p class="category"><span>${goods.ind}</span></p>
                                <p class="price"><span>${goods.price}</span>&nbsp;<del>${goods.off}</del></p>
                                <div class="btn"></div>
                                </div>
                            </li>`
                        }).join('');

                        hot_kitchen.innerHTML = '';
                        hot_kitchen.appendChild(ul29);

                        ul30.innerHTML = data.data.map(goods=>{
                            return `<li data-id="${goods.id}">
                                <div class="box">
                                <img src="../${goods.imgurl}"/>
                                <h4>${goods.title}</h4>
                                <p class="category"><span>${goods.ind}</span></p>
                                <p class="price"><span>${goods.price}</span>&nbsp;<del>${goods.off}</del></p>
                                <div class="btn"></div>
                                </div>
                            </li>`
                        }).join('');

                        kitchen_1.innerHTML = '';
                        kitchen_1.appendChild(ul30);


                }
            }
            
        

        xhr.open('get','../api/fruits.php?page=1&qty=10',true);
        xhr.send(); 

        let tab_btn = document.getElementsByClassName('tab_btn')[0];
        let tab_btnA = document.querySelectorAll('.tab_btn');
     
        // console.log(tab_btnA);
        
                for(var j=0;j<tab_btnA.length;j++){

                    tab_btnA[j].onmouseover= function(e){
                    // console.log(this);

                        if(e.target.tagName.toLowerCase() === 'span'){
                                let page = e.target.parentNode.children;
                                // console.log(e.target);
                                for(var i=0;i<page.length;i++){
                                    // console.log(page[i]);
                                    page[i].setAttribute('idx',i);
                                    // console.log(idx);
                                }
                                var idx = e.target.getAttribute('idx');
                                // console.log(idx); 
                                let pageNo = idx++;  

                                xhr.open('get','../api/fruits.php?page='+pageNo+'&qty=10',true);
                                xhr.send(); 
                                
                        }
                    }
                }
                         
    }

    friuts()
    // document.body.onmouseover = function(e){

    //     console.log(e.target);


    // }

// });

// 回到顶部
    $('#go_top').click(function(){
        
        $('html,body').animate({scrollTop:0},2000)
    });

    
     

})