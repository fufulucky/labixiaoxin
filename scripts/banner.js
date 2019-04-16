function BANNER() {
    var container=document.getElementById('container');
    var animated=false;
    var banner=document.getElementById('banner');
    var buttons=document.getElementById('botton').getElementsByTagName('span');
    var pre=document.getElementById('prev');
    var next=document.getElementById('next');
    var timer;
    var index=1;
    var w = document.body.clientWidth
    var BU=document.getElementById('botton');
    banner.style.width = 4*w+40+"px";
    console.log(banner.style.width)
    container.style.width=w+"px";
    console.log(container.style.width)
    container.style.height=w/3.5+"px";
    console.log(container.style.height)
    pre.style.top=w/8.2+"px";
    next.style.top=w/8.2+"px";
    BU.style.left = w/2+"px"
    imgs=banner.getElementsByTagName("img");
    for (var j =0;j<imgs.length;j++){
        imgs[j].style.width = w + "px";
        imgs[j].style.height= w/3.5 +"px";
    }
    console.log(banner.getElementsByTagName("img"))


    function showButton() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = "on";
    }
    function animate(offset) {
        animated=true;
        var newleft=parseInt(banner.style.left)+offset;
        console.log(newleft);
        var time = 300;
        var interval = 10;
        var speed=offset/(time/interval);
        console.log(speed);
        function go() {
            if ((speed<0&&parseInt(banner.style.left)>newleft)||((speed>0&&parseInt(banner.style.left)<newleft))){
                banner.style.left=parseInt(banner.style.left)+speed+'px';
                setTimeout(go,interval);
            } else {
                animated=false;
                banner.style.left=newleft+'px';
                if(newleft>0){
                    banner.style.left=-w*3+'px';
                }
                if(newleft<-w*3){
                    banner.style.left=0+'px';
                }
            }
        }
        go()
    }
    function play() {
        timer=setInterval(function () {
            next.onclick()
        },w*4);
    }
    function stop() {
        clearInterval(timer);
    }
    next.onclick=function () {
        if (index==4){
            index=1;
        } else {
            index=index+1;
        }
        showButton()
        if (animated==false){
            animate(-w)
        }
    }
    pre.onclick=function () {
        if (index==1){
            index=4;
        }
        else {
            index=index-1;
        }
        showButton();
        if(animated==false){
            animate(w);
        }

    }
    for (var i=0;i<buttons.length;i++){
        buttons[i].onclick=function () {
            if (this.className=='on'){
                return
            }
            var myindex = parseInt(this.getAttribute('index'));
            console.log(myindex);
            console.log(index)
            var offset=-w*(myindex-index)
            console.log(offset);
            index = myindex;
            showButton();
            console.log(buttons);
            if (animated==false){
                animate(offset);
            }
        }
    }
    container.onmouseover=stop;
    container.onmouseout=play;
    console.log(w);
    play();
    highlight();
    prepareInternalnav();
}
addload(BANNER);
/*
*/



