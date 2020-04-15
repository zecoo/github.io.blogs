var index = 0;
var btns = $('.oval-button');

function animate(){
    index++;
    var imgs = $('.img-slide');
    if (index >= imgs.length){
        index = 0;
    }
    for (var i=0; i<imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[index].style.display = 'block';
}

function stop() {
    clearInterval(t);
    console.log('aaa');
}

var t = setInterval(() => {
    animate();
}, 1500);

