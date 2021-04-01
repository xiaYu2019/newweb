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

//轮播图
let initial = -25;                                //初始
const increment = 50;		  						 //移动量
let left = document.getElementsByClassName("left")[0]; //获取到轮播左按钮
let right = document.getElementsByClassName("right")[0];
let box = document.getElementsByClassName("box")[0];   //获取整个轮播图盒子
let boxDiv = box.getElementsByTagName("div");

 left.onclick =()=>{
	let getinitial  = parseInt((box.style.left)?(box.style.left):initial);  //获取初始量转为数字类型
	let price = getinitial- increment; 										//移动的值
	let pitch = Math.ceil(Math.abs((price/increment)));					   //获取下标
	boxDiv[pitch-1].classList = "";                                       //修改class
	if(pitch>boxDiv.length-2){
		pitch = 1;
		price = initial;
	}
	console.log(pitch)
	boxDiv[pitch].classList = "pitch";						
	box.style.left =  price+ "%";			//赋值给盒子
	
 }
 right.onclick =()=>{
	let getinitial  = parseInt((box.style.left)?(box.style.left):initial);  //获取初始量转为数字类型
	let price = getinitial + increment; 									//移动的值
	
	let pitch = Math.ceil(Math.abs((price/increment)));					   //获取下标
	boxDiv[pitch+1].classList = "";                                       //修改class
	console.log(pitch)
	if(pitch<=1){
		boxDiv[pitch].classList = ""; 
		pitch = boxDiv.length -2;
		console.log(pitch)
		price = -(pitch*increment+(initial));
	}
	console.log(price)
	boxDiv[pitch].classList = "pitch";						
	box.style.left =  price+ "%";			//赋值给盒子
	 
 }
 
