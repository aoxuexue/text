var but=document.getElementById('but');
var bg=document.getElementById('bg');
var red=document.getElementById('red');
var yellow=document.getElementById('yellow');
var blue=document.getElementById('blue');
var width1=document.getElementById('width1');
var width2=document.getElementById('width2');
var width3=document.getElementById('width3');
var height1=document.getElementById('height1');
var height2=document.getElementById('height2');
var height3=document.getElementById('height3');
var box1=document.getElementById('box1');
var bot1=document.getElementById('botton1');
var bot2=document.getElementById('botton2');


but.onclick=function(){
	bg.style.display = 'block';
}
red.onclick=function(){
	box1.style.background = 'red';
}
yellow.onclick=function(){
	box1.style.background = 'yellow';
}
blue.onclick=function(){
	box1.style.background = 'blue';
}
width1.onclick=function(){
	box1.style.width = '200px';
}
width2.onclick=function(){
	box1.style.width = '300px';
}
width3.onclick=function(){
	box1.style.width = '400px';
}
height1.onclick=function(){
	box1.style.height = '200px';
}
height2.onclick=function(){
	box1.style.height = '300px';
}
height3.onclick=function(){
	box1.style.height = '400px';
}
bot1.onclick=function(){
	bg.style.display = 'none';
	box1.style.cssText = 'width:100px;height:100px;border:5px solid #393129';
	
}
bot2.onclick=function(){
	bg.style.display = 'none';
}