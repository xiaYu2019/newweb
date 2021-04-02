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
