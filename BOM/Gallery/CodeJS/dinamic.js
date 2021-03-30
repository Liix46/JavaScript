///////////////
function Load(event) {
    let currentImage = event.target;
    currentImage.style.margin = -8;
    let height = currentImage.height;
    let width = currentImage.width;

    newWindow.resizeTo(width + 16, height + 68);
    newWindow.moveTo( (window.outerWidth / 2) -width/2, (window.outerHeight / 2) - height/2)
    
}
function Click(event) {
    let currentImage = event.target;
    let puthImage = currentImage.src;
    puthImage = puthImage.replace('/SMALL', '');

    newWindow = window.open('modal.html', 'modalWindow', `width=400, height=400, resizable=yes`);

    newWindow.document.write(`<img id = "mainImg" src =\" ${puthImage}\"></img>`);
    let newimg = newWindow.document.getElementById('mainImg');
   
    newimg.addEventListener("load", Load);
}
function MouseEnter(event){
    let currentImage = event.target;
    let puthImage = currentImage.src;
    puthImage = puthImage.replace('/SMALL', '');
    let index = puthImage.lastIndexOf('/');
    puthImage = puthImage.slice(index+1);
    puthImage = puthImage.replace('.JPG', '');

    document.title = puthImage;
   // debugger;
}
let images = document.getElementsByTagName("img");

for (let i = 0; i < images.length; i++) {
    images[i].src = `../DESIGN/SMALL/P${i}.JPG`;
    images[i].addEventListener("click", Click);
    images[i].addEventListener("mouseenter", MouseEnter);
}

let newWindow;

//debugger;
