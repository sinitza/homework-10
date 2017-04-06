let slider = document.getElementsByClassName('row')[0],
    sliderItems = slider.children,
    maxItems = sliderItems.length,
    currentItem = sliderItems[0],
    widthItem = 370,
    prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    pos = 0;


prev.style.display = 'none';
next.style.display = 'block';

next.onclick = () => {
    if (pos < maxItems-3){
        pos++;
        slider.style.left = ((-widthItem-30) * pos) + 'px';
    } else {
        return;
    }
    if (pos == maxItems-3) {
        next.style.display = 'none';
    }
    if (pos > 0) {
        prev.style.display = 'block';
    }
};

prev.onclick = () => {
    if (pos > 0){
        pos--;
        slider.style.left = ((-widthItem-30) * pos) + 'px';
    } else {
        return;
    }
    if (pos == 0) {
        prev.style.display = 'none';
    }
    if (pos < maxItems-3){
        next.style.display = 'block';
    }
};






