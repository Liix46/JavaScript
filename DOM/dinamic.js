function ClickItemList(event) {
    debugger;
    if(changeTextRadio.checked == true){
        let childElem = event.target;
        childElem.innerHTML = textBox3.value;
    }
    else if(addInEndRadio.checked == true){
        let elemLi = document.createElement("li");
        elemLi.addEventListener("click", ClickItemList);
        let elemText = document.createTextNode(textBox1.value);
        elemLi.appendChild(elemText);
        event.target.appendChild(elemLi);
    }
    event.stopPropagation();
}

function ClickButton(event) {
    //debugger;
    let elemUl = document.createElement("ul");
    elemUl.addEventListener("click", ClickItemList);
    let elemTopic = document.createTextNode("new List");
    elemUl.appendChild(elemTopic);
    let elemLi = document.createElement("li");
    elemLi.addEventListener("click", ClickItemList);
    let elemText = document.createTextNode("new Item");
    elemLi.appendChild(elemText);
    elemUl.appendChild(elemLi);
    document.body.append(elemUl);
}
function ChangeRadio(event) {
    let textBox = document.querySelectorAll('input[type="text"]');
    let radioButtons = document.getElementsByName("radioButton");
    for (let i = 0; i < textBox.length; i++) {
        if (radioButtons[i].checked == true) {
            textBox[i].disabled = false;
        }
        else {
            textBox[i].disabled = true;
        }
    }
}

function ChangeTextBox1(event){

}

var buttonAdd = document.getElementById("newListButton");

buttonAdd.addEventListener('click', ClickButton);

let radioButtons = document.getElementsByName("radioButton");
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', ChangeRadio);
}

textBox1.addEventListener('change', ChangeTextBox1);
