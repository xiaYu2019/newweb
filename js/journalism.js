let box = document.getElementsByClassName("box");
let context = document.getElementsByClassName("context");
for (let i = 0; i < box.length; i++) {
	box[i].onclick = () => {
		for (let a = 0; a < box.length; a++) {
			box[a].className = "box";
			context[a].className = "context";
		}
		box[i].classList.add("xue");
		context[i].classList.add("zhans");

	}


}
(function() {
	let html = document.documentElement;
	let width = html.getBoundingClientRect().width;
	html.style.fontSize = width * 100 / 1920 + "px";
})();
window.onresize = function() {
	let html = document.documentElement;
	let width = html.getBoundingClientRect().width;
	html.style.fontSize = width * 100 / 1920 + "px";
}


//获取页面进来的tab

let tab = getQueryVariable("tab");
box[tab].classList.add("xue");
context[tab].classList.add("zhans");

function getQueryVariable(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return (false);
}

