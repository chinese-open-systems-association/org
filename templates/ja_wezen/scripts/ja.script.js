<!--

//PRELOAD IMAGES
var myimages=new Array()
function preloadimages(){
	for (i=0;i<preloadimages.arguments.length;i++){
	myimages[i]=new Image()
	myimages[i].src=preloadimages.arguments[i]
	}
}

//TEXT RESIZE
var prefsLoaded = false;
var defaultFontSize = 66;
var currentFontSize = defaultFontSize;

function revertStyles(){
	currentFontSize = defaultFontSize;
	changeFontSize(0);
}

function changeFontSize(sizeDifference){
	currentFontSize = parseInt(currentFontSize) + parseInt(sizeDifference * 5);

	if(currentFontSize > 92){
		currentFontSize = 92;
	}else if(currentFontSize < 58){
		currentFontSize = 58;
	}

	setFontSize(currentFontSize);
	createCookie("fontSize", currentFontSize, 365);
};

function setFontSize(fontSize){
	var stObj = (document.getElementById) ? document.getElementById('content_area') : document.all('content_area');
	document.body.style.fontSize = fontSize + '%';
};


function setUserOptions(){
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);

	if(!prefsLoaded){

		cookie = readCookie("fontSize");
		currentFontSize = cookie ? cookie : defaultFontSize;
		setFontSize(currentFontSize);
		
		prefsLoaded = true;
	}

}

//STYLE SWITCHER
function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
  createCookie("style", title, 365);
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);

//-->
