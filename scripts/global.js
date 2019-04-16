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
    for(var i=1; i<sections.length;i++){
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


