var slid = document.getElementById('slideImg');
var warp = document.getElementById('warp');
var buttons =document.querySelectorAll(".buttons span");

var maxNum = buttons.length-1;  //导航按钮个数-1
var offset = 1538;		//图片宽度
var slideTiime = 3000; //默认轮播时间
var posX = 0;
var timer = null; //定时器
var index = 0; //用来保存步数

// console.log( buttons);
	function toRight(){
		index++;
		if( index >maxNum) {
		    index = 0;
		}
		animate(-offset*index);
		buttonshow();
		// console.log( "index值为" + index);
	}
	function toLeft(){
		index--;
		if( index < 0) {
		    index = maxNum;
		}
		animate(-offset*index);
		console.log( "index值为" + index);
		buttonshow();
	}
//封装一个负责幻灯动画的函数
function animate( offsetNum){
		posX = offsetNum;
		if( posX < - maxNum*offset){
			posX = 0;
		}
		if(posX > 0){
			posX = - maxNum*offset;
		}
		slid.style.left=posX+"px";
		// console.log( offset );
}
//封装一个定时器开始函数
function play(){
	timer = setInterval(function(){
		toRight();
	},slideTiime)
}
play();
//封装一个定时器停止函数
function stop(){
	clearInterval( timer);
}
//当鼠标移入轮播图区域时，暂停播放
warp.onmouseover = function(){
	stop();
}
//当鼠标离开轮播图区域时，继续播放
warp.onmouseout = function(){
	play();
}

//封装一个控制导航按钮css的函数
function buttonshow(){
	for( var k=0; k<buttons.length; k++){
			buttons[k].className = "";
		}
	buttons[index].className = "on";
}
//为导航按钮绑定点击事件，（mouseover事件）
for( var i=0; i< buttons.length; i++){
	buttons[i].onclick = function(){
		for( var j=0; j<buttons.length; j++){
			//找到被点击的图片
			buttons[j].className = "";
			if( this == buttons[j]){
				//跳转到对应的图片
				animate(-offset*j);
				index  = j;
				// console.log("index的值为：" + index);
				// console.log("j的值为：" +j);
				buttons[j].className = "on";
			}
		}
	}
}
