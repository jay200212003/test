function drag(id){
	var obj = document.getElementById(id);
	var disX = 0;
	var disY = 0;
	obj.onmousedown  = function(e){
		var e = e 

		disX = e.pageX - obj.offsetLeft;
		disY = e.pageY - obj.offsetTop;

		document.onmousemove = function(e){
			obj.style.left = e.pageX;
		}
	}
}