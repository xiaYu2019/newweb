let textimg = document.getElementsByClassName("icon")[0]
textimg.onclick = ()=>{
console.log(textimg)
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}

huoji()														//调用方法





function huoji (){
	let ymHeight = window.innerHeight;       				//获取可视高度
	let ycHeight = document.documentElement.scrollTop;  	//获取滚动高度
	if(ycHeight>ymHeight){                    				//判断
		textimg.classList.add("icon_xy");
	}else{
		textimg.classList.remove("icon_xy");
	}
	
}
