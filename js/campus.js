//使用rem
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

// tab切换
let tab = document.getElementsByClassName("tabli");
let content = document.getElementsByClassName("content_a");
let i = 0 ;
for(let a = 0 ;a<tab.length;a++){
	tab[a].onclick = function(){
		tab[i].classList.remove("pitch");
		content[i].classList.remove("pitchon");
		tab[a].classList.add("pitch");
		content[a].classList.add("pitchon");
		i = a;
	}
}

//弹出层控制

let nape = document.getElementsByClassName("nape"); 		//获取点击位置	
let popups = document.getElementsByClassName("popups")[0]; 		//弹出层
for(let a = 0 ; a<nape.length;a++){
	nape[a].onclick = function(){
		console.log(popups)
		popups.style.display="block";
	}
}
popups.onclick = function(){
	popups.style.display = "none";
}


