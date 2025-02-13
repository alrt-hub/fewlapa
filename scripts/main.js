var myImage=document.querySelector("#bt","#bt1");
var myImage1=document.querySelector("#bt1");
var myImage2=document.querySelector("#bt2");


myImage.onclick=function(){
	var mySrc=myImage.getAttribute("src");
		
	myImage.setAttribute("src", "images/sp1.jpg");
	
	}	

 myImage1.onclick=function(){
	var mySrc=myImage1.getAttribute("src");
		
	myImage1.setAttribute("src", "images/sp3.jpg");
	myImage1.style.filter("blur(0px)")
	
	}	
 myImage2.onclick=function(){
	var mySrc=myImage2.getAttribute("src");
		
	myImage2.setAttribute("src", "images/sp2.jpg");
	myImage2.style.filter("blur(0px)")
	
	}	


	
