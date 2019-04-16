function addload(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldonload();
            func;

        }
    }
}
function insertAfter(newEle,targerEle) {
    var parent=targerEle.parentNode;
    if(parent.lastChild==targerEle){
        parent.appendChild(newEle);
    }else {
        parent.insertBefore(newEle,targerEle.nextSibling);
    }
}
function addClass(element,value) {
    if(!element.className) {
        element.className = value;
    }else {
        newClassName=element.className;
        newClassName+=" ";
        newClassName+=value;
        element.className=newClassName;
    }
}
function highlight() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    var headers = document.getElementsByTagName('header');
    if (headers.length == 0)return false;
    var navs = headers[0].getElementsByTagName('nav');
    if (navs.length ==0) return false;
    console.log(navs)
    var links = navs[0].getElementsByTagName("a");
    console.log(links);
    var linkurl;
    for (var i = 0; i<links.length; i++){
        linkurl = links[i].getAttribute("href");
        console.log(linkurl);
        if (window.location.href.indexOf(linkurl)!=-1){
            links[i].className = "here";
            var linktext=links[i].lastChild.nodeValue.toLowerCase();
            console.log(linktext)
            document.body.setAttribute("id",linktext);
        }
    }
}
function showSection(id) {
    var sections=document.getElementsByTagName("section");
    console.log(sections);
    for(var i=0; i<sections.length;i++){
        console.log(sections[i].getAttribute("id"))
        console.log(id)
        if (sections[i].getAttribute("id")!=id) {
            sections[i].style.display="none";
        }else {
            sections[i].style.display="block";
        }
        
    }
}
function prepareInternalnav() {
    var articles=document.getElementsByTagName("article");
    var navs = articles[0].getElementsByTagName("nav");
    var nav = navs[0];
    var links = nav.getElementsByTagName("a");
    console.log(links)
    for (var i=0;i<links.length;i++){
        var sectionId = links[i].getAttribute("href").split("#")[1];
        if(!document.getElementById(sectionId))continue;
        document.getElementById(sectionId).style.display="none";
        links[i].destination=sectionId;
        console.log(links)
        links[i].onclick = function () {
            showSection(this.destination);
            console.log(this.destination)
            return false
        }
    }

}
function prepareImg() {
    if (!document.createElement) return false;
    var gallery=document.getElementById("gallery");
    var holdimage=document.createElement("img");
    holdimage.setAttribute("src","images/16.jpg");
    holdimage.setAttribute("id","tag");
    holdimage.setAttribute("alt","gallery");
    var text=document.createElement("p");
    text.setAttribute("id","description");
    var content=document.createTextNode("choose an image");
    text.appendChild(content);
    console.log(gallery);
    console.log(holdimage);
    insertAfter(holdimage,gallery);
    insertAfter(text,holdimage);
}
function prejudge() {
    if (!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if (!document.getElementById("gallery")) return false;
    var Images=document.getElementById("gallery");
    var link=Images.getElementsByTagName("a");
    for (var i=0;i<link.length;i++)
    {
        link[i].onclick=function () {

            return !showPic(this);
        }
    }

}
function showPic(whichpic){
    if (!document.getElementById("tag")) return false;
    var source=whichpic.getAttribute("href");
    var pic=document.getElementById("tag");
    var tit=whichpic.getAttribute("title");
    var des=document.getElementById("description")
    pic.setAttribute("src",source);
    des.firstChild.nodeValue=tit;
    return true;
}
prepareImg();
prejudge();

