let html = document.getElementsByTagName("html")[0];

let fs = window.innerWidth;
html.style.fontSize = fs*100/1920+"px";


window.onresize = function(){
	let fs = window.innerWidth;
	html.style.fontSize = fs*100/1920+"px";
	// html.style.fontSize = ((fs*100/1920>39)?(fs*100/1920):39)+"px"
	console.log(((fs*100/1920>39)?(fs*100/1920):39))
}


let brief = document.getElementsByClassName("brief");
for(let a = 0;a<brief.length;a++){
	brief[a].onmouseover = function(){
		brief[a].classList.add("brief_f")
	}
	
	
	brief[a].onmouseout = function(){
		brief[a].classList.remove("brief_f")
	}
}

//轮播
let box = document.getElementsByClassName("box")[0];
let left = document.getElementsByClassName("left")[0];
let right = document.getElementsByClassName("right")[0];

 

left.onmouseover = ()=>{
	left.style.backgroundImage = "url(./img/left.png)"
}
left.onmouseout = ()=>{
	left.style.backgroundImage = ""
}
left.onclick = ()=>{
	 let newleft = parseInt(box.style.left)-50 ;
	 if(newleft<-175){
		 newleft = -25;
	 }
	 box.style.left = newleft + "%";
	 
}

right.onmouseover = ()=>{
	right.style.backgroundImage = "url(./img/right.png)"
}
right.onmouseout = ()=>{
	right.style.backgroundImage = ""
}

right.onclick = ()=>{
	let newleft = parseInt(box.style.left)+50 ;
	if(newleft>-25){
		newleft = -175
	}
	box.style.left = newleft + "%";
}

//自动轮播



//二维码弹出


