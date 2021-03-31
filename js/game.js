(function() {
	 let html = document.documentElement;
     let width = html.getBoundingClientRect().width;
     html.style.fontSize =  width*100/1920+"px";
})();
window.onresize = function(){
	let html = document.documentElement;
	let width = html.getBoundingClientRect().width;
	html.style.fontSize =  width*100/1920+"px";
}
























let weChat = document.getElementsByClassName("weChat")[0]
	weChat.onmouseover = ()=>{
		weChat.parentNode.classList.add("code")
	}
	weChat.onmouseout = ()=>{
		weChat.parentNode.classList.remove("code")
	}