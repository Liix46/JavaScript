///////////////////
function ClickRBtn(event) {
   
    let images = document.getElementsByTagName('img');

    let puthImages = new Array();

    for (const image of images) {
        puthImages.push(image.src);
    }
    let newPuthImages = new Array();

    newPuthImages.push(puthImages[4]);
    newPuthImages.push(puthImages[0]);
    newPuthImages.push(puthImages[1]);
    newPuthImages.push(puthImages[2]);
    newPuthImages.push(puthImages[3]);

    //debugger;

    for (let i = 0; i < images.length; i++) {
        images[i].src = newPuthImages[i];
    }


}

rightBtn.addEventListener('click', ClickRBtn);
leftBtn.AddEventListener('click', ClickLBtn)