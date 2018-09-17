
document.addEventListener('DOMContentLoaded',function(){

    let hot_fruits = document.getElementsByClassName('hot_fruits')[0];
    let import_fruits = document.getElementsByClassName('import')[0];
    // console.log(hot_fruits);
    let ul1 = document.createElement('ul');

    let ul2 = document.createElement('ul');

    let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
    
        if(xhr.readyState === 4){
            let data = JSON.parse(xhr.responseText);
            console.log(data);

            // 2）根据数据生成html结构
                   // console.log(ul); 
                    ul1.innerHTML = data.map(goods=>{
                        return `<li data-id="${goods.id}">
                            <div class="box">
                            <img src="../${goods.imgurl}"/>
                            <h4>${goods.title}</h4>
                            <p class="category"><span>${goods.ind}</span></p>
                            <p class="price"><span>${goods.price}</span>&nbsp;<span>${goods.off}</span></p>

                            </div>
                        </li>`
                    }).join('');

                    // 写入页面
                    hot_fruits.innerHTML = '';
                    hot_fruits.appendChild(ul1);


                    ul2.innerHTML = data.map(goods=>{
                        return `<li data-id="${goods.id}">
                            <div class="box">
                            <img src="../${goods.imgurl}"/>
                            <h4>${goods.title}</h4>
                            <p class="category"><span>${goods.ind}</span></p>
                            <p class="price"><span>${goods.price}</span>&nbsp;<span>${goods.off}</span></p>

                            </div>
                        </li>`
                    }).join('');

                    import_fruits.innerHTML = '';
                    import_fruits.appendChild(ul2);
            }
        }

    xhr.open('get','../api/fruits.php',true);
    xhr.send();



    

    
});