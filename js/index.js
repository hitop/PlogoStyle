function Getv(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null)
		return decodeURI(r[2]);
	return null;
}

var pret = Getv("pret");
var post = Getv("post");

if (pret && Getv("fr") != "dianlk") {window.location.href='./'}

pret = pret?pret:"Pxxr";
post = post?post:"hub";

document.getElementById('preText').innerHTML = pret
document.getElementById('postText').innerHTML = post

if (Getv("fv") == "v") {
	document.getElementById("logo").style.display = "inline-grid";
}