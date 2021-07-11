let dx = 1;
let dy = -1;

let nameUser = "";
let radioBoxes = document.getElementsByName('flexRadioDefault');
let rateValue;
let start = false;
let levels = ['easy','medium','hard'];

nameLabel.addEventListener('input', changeName);
saveButton.addEventListener('click', saveSetting);

function changeName(event){
    //debugger;
    nameUser = event.target.value;
    if (nameUser != "") {
        saveButton.disabled = false;
    }
    else{
        saveButton.disabled = true;
    }

}

function saveSetting(event){

    for(let i = 0; i < radioBoxes.length; i++){
        if(radioBoxes[i].checked){
            rateValue = radioBoxes[i].value;
        }
    }
    StartButton.style.display = "none";
    myCanvas.style.display = "block";

    if (rateValue == levels[1]) {
        // myCanvas.style.height = "480px"
        // myCanvas.style.widht = "640px"
        dx = 2;
        dy = -2;
    }
    else if(rateValue == levels[2]){
        // myCanvas.style.height = "100%"
        // myCanvas.style.width = "100%"
        dx = 3;
        dy = -3;
    }
    else{
        // myCanvas.style.height = "320px"
        // myCanvas.style.width = "480px"
    }
    
    start = true;
}


