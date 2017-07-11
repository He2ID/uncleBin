# uncleBin
参加斌叔的teach girls coding线上学习  
## 第一个页面   
* 一个简单的HTML+CSS页面:https://he2id.github.io/uncleBin/first_site.html  
## 斌叔茶铺  
* 从服务器获取数据，然后将数据显示在页面上的jQuery demo:https://He2ID.github.io/uncleBin/TeaShop.HTML  
* note： 
    *  服务器获取数据  
          $.ajax({
            type:'GET',
            url:'http://resource.haorenao.cn/teas2.json',
            success: function(data){
              console.log(data);
            }
          });
    *  遍历数组    $.each(arrayname,function(key,value){});    
    *  插入DOM    $(selector).append(content);

