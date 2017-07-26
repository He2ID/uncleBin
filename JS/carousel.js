window.onload=function(){
	//获取DOM
	function byId(id){
		return typeof(id)==="string"?document.getElementById(id):id;
	}
	var index = 0,
		timer = null,
		pics = byId("banner").getElementsByTagName("div"),
		len = pics.length,
		tabs = byId("tab-group").getElementsByTagName("p");
		

	function slideImg(){
		var main = byId("main");
		//鼠标滑过 清除定时器
		main.onmouseover = function(){
			if(timer) clearInterval(timer);
		}
		//不经过时，index循环，图片&标签切换
		main.onmouseout = function(){
			timer = setInterval(function(){
				index++;
				if(index >= len){
					index = 0;
				}
				changeImg();
			},1000);
		}	
		//自动触发滑动	
		main.onmouseout();
		tabIndex();
	}
	//图片切换 修改显示的图片及按钮
	function changeImg(){
		for(var i=0;i<len;i++){
			pics[i].style.display = 'none';
			tabs[i].className = "";
		}
		pics[index].style.display = 'block';
		tabs[index].className = "tab-active";
	}
	//点击切换按钮，修改index
	function tabIndex(){
		for(var p=0;p<len;p++){
			tabs[p].id = p;
			tabs[p].onclick = function(){
				index = this.id;
				changeImg();
			}
		}
	}
	slideImg();	
}
