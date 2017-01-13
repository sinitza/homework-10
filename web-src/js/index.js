var slider = document.getElementsByClassName('polosa')[0],
    sliderItems = slider.children,
    maxItems = sliderItems.length,
    currentItem = sliderItems[0],
    widthItem = currentItem.clientWidth,
    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    pos = 0;

next.onclick = sliderNext;
prev.onclick = sliderPrev;
prev.style.display = 'none';
next.style.display = 'block';

function sliderNext(){
    if (pos < maxItems-3){
        pos++;
        slider.style.left = ((-widthItem-30) * pos) + 'px';
        console.log(pos);
        console.log((-widthItem-30) * pos);
    } else {
        return;
    }
    if (pos == maxItems-3) {
        next.style.display = 'none';
    }
    if (pos > 0) {
        prev.style.display = 'block';
    }



}

function sliderPrev(){
    if (pos > 0){
        pos--;
        slider.style.left = ((-widthItem-30) * pos) + 'px';
        console.log(pos);
        console.log((-widthItem-30) * pos);
    } else {
        return;
    }
    if (pos == 0) {
        prev.style.display = 'none';
    }
    if (pos < maxItems-3){
        next.style.display = 'block';
    }
}




