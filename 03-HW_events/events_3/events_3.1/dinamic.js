
function Input(event){
    //debugger;
    let areaElement = event.target;
    areaElement.firstChild.data = areaElement.value;
}

function KeyDown(event) {

    if (event.ctrlKey && event.code == 'KeyE') {
        event.preventDefault();
        let item = body.innerHTML;
        item = item.replace(/div/g, "textarea");
        body.innerHTML = item;
        
        let children = body.children; 
        for (let i = 0; i < children.length; i++) {
            if(children[i].localName =='textarea'){
                children[i].addEventListener("input", Input);
            }
        }
    }
    else if (event.ctrlKey && event.code == 'KeyS') {
        event.preventDefault();
        let item = body.innerHTML;
        item = item.replace(/textarea/g, "div");
        body.innerHTML = item;
    }
    
}
body.addEventListener("keydown", KeyDown);





