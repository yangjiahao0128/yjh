var chux = document.getElementById("chux");
var fuxuan = document.getElementById("fuxuan");
var iconn = document.getElementById("iconn");
chux.onmouseover = function(){
	fuxuan.style.display = "block";
	iconn.innerHTML = "&#xe618;";
}
chux.onmouseout = function(){
	fuxuan.style.display = "none";
	iconn.innerHTML = "&#xe6aa;";
}

var chukuang = document.getElementById("chukuang");
var kuangk = document.getElementById("kuangk");
chukuang.onmouseover = function(){
	kuangk.style.display = "block";
}
chukuang.onmouseout = function(){
	kuangk.style.display = "none";
}

var yichu = document.getElementById("yichu");
var yikuang = document.getElementById("yikuang");
yichu.onmouseover = function(){
	yikuang.style.display = "block";
}
yichu.onmouseout = function(){
	yikuang.style.display = "none";
}


/*var icccon = document.getElementById("icccon");
	function $(id){
		return document.getElementById(id);
	}
var  b = $(window).screenTop(body);
	function chuxian(){
		if(b>500){
			icccon.style.display = "block";
		}else{
			icccon.style.display = "none";
		}
	}
	chuxian();*/

