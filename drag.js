function drag(id){
	//author zyx zyx new
	var obj = document.getElementById(id);
	var disX = 0;
	var disY = 0;
	obj.onmousedown  = function(e){
		var e = e 

		disX = e.pageX - obj.offsetLeft;
		disY = e.pageY - obj.offsetTop;

		document.ommousemove = function(e){
			obj.style.top = e.pageY*1 + "px";
			obj.style.left = e.pageX + "px";
		}
	}
}
