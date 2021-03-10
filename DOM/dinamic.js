function ClickItemList(event) {
    debugger;
    if (changeTextRadio.checked == true) {
        let CurrentElem = event.target;
        CurrentElem.textContent = textBox3.value;
    }
    else if (addInEndRadio.checked == true) {
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

    // elemMainUl.addEventListener("click", ClickItemList);
    //elemMainUl.appendChild(elemTopic);
    let elemParentUl = document.createElement("ul");  
    let elemParentLi = document.createElement("li");
    let elemChildUl = document.createElement("ul");
    let elemChildLi = document.createElement("li");
    let elemTopic = document.createTextNode("Topic");
    let elemItemText = document.createTextNode("New Item");

    // struct list
    elemParentUl.appendChild(elemParentLi);
    elemParentLi.appendChild(elemTopic);
    elemParentLi.appendChild(elemChildUl);
    elemChildUl.appendChild(elemChildLi);
    elemChildLi.appendChild(elemItemText);

    document.body.append(elemParentUl);

    //events: click - all <li>    
    elemParentLi.addEventListener("click", ClickItemList);
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

var buttonAdd = document.getElementById("newListButton");

buttonAdd.addEventListener('click', ClickButton);

let radioButtons = document.getElementsByName("radioButton");
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', ChangeRadio);
}