///////////////
function Load(event){
    let currentImage = event.target;
    currentImage.style.margin = 0;
    currentImage.style.padding = 0;
    let height = currentImage.height;
    let width = currentImage.width;

    newWindow.resizeTo(width+30,height+85);
    
   
}
function Click(event){
    let currentImage = event.target;

    newWindow = window.open('', 'FullImage', 'width=400, height=400, resizable=');

    let puthImage = currentImage.src;
    puthImage = puthImage.replace('/SMALL', '');
    
    newWindow.document.write(`<img id = "mainImage" src =\" ${puthImage}\"></img>`);
    let newimg = newWindow.document.getElementById('mainImage');
    
    newimg.addEventListener("load", Load);
  }
let images = document.getElementsByTagName("img");

for(let i = 0; i < images.length; i++){
    images[i].src = `../DESIGN/SMALL/P${i}.JPG`;
    images[i].addEventListener("click", Click);
    //images[i].height = images[i].naturalHeight;
}

let newWindow;
//debugger;
