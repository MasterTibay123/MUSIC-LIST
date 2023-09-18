//0-1 Ex: [1]
function farbschrift() 
{ 
for(var i=0 ; i<Buchstabe.length; i++) 
{ 
document.all["a"+i].style.color=farben[i]; 
} 
farbverlauf(); 
} 
function string2array(text) 
{ 
Buchstabe = new Array(); 
while(farben.length<text.length) 
{ 
farben = farben.concat(farben); 
} 
k=0; 
while(k<=text.length) 
{ 
Buchstabe[k] = text.charAt(k); 
k++; 
} 
} 
function divserzeugen() 
{ 
for(var i=0 ; i<Buchstabe.length; i++) 
{ 
document.write("<font face='Impact' size=30><span id='a"+i+"' class='a"+i+"'>"+Buchstabe[i] + "</span></font>"); 
} 
farbschrift(); 
} 
var a=1; 
function farbverlauf() 
{ 
for(var i=0 ; i<farben.length; i++) 
{ 
farben[i-1]=farben[i]; 
} 
farben[farben.length-1]=farben[-1];
setTimeout("farbschrift()",30); 
} 
// Zu Demonstrationszwecken***************** 
var farbsatz=1; 
function farbtauscher() 
{ 
farben = farbbibliothek[farbsatz]; 
while(farben.length<text.length) 
{ 
farben = farben.concat(farben); 
} 
farbsatz=Math.floor(Math.random()*(farbbibliothek.length-0.0001)); 
} 
setInterval("farbtauscher()",4000); 
text= "Awit Ng Anak"; //h 
string2array(text); 
divserzeugen();
//document.write(text); 

var myVar;
function myFunction() {
myVar = setTimeout(showPage, 3000);
}
function showPage() {
document.getElementById("loader").style.display = "none";
}

// desktop and mobile view

var viewMode = getCookie("view-mode"); 
if (viewMode == "mobile"){ 
viewport.setAttribute('content', 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no'); 
}
else if(viewMode == "desktop"){ 
viewport.setAttribute('content', 'width=1024'); 
}
