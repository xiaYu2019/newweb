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
 
 
 
 
 var map = new BMap.Map("container");          // 创建地图实例  
 var point = new BMap.Point(111.49949, 27.65856);  // 创建点坐标  
 map.centerAndZoom(point, 18);                 // 初始化地图，设置中心点坐标和地图级别 
 map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放


var opts = {
    position: new BMap.Point(111.49949, 27.65856),  // 指定文本标注所在的地理位置
    offset: new BMap.Size(30, -30) // 设置文本偏移量
};

var marker1 = new BMap.Marker(new BMap.Point(111.49949, 27.65856));
map.addOverlay(marker1);
// 创建文本标注对象
var label = new BMap.Label('湖南炫蓝信息科技有限公司', opts);
// 自定义文本标注样式
label.setStyle({
    color: '#000',
    borderRadius: '5px',
    borderColor: '#ccc',
    padding: '10px',
    fontSize: '16px',
    height: '30px',
})

map.addOverlay(label)

