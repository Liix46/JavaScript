function ClickItemList(event) {
    //debugger;
    if (addInEndRadio.checked) {
        //debugger;
        let newElem = document.createElement("li");
        newElem.addEventListener("click", ClickItemList);
        let textElem = document.createTextNode(textBox1.value);
        newElem.appendChild(textElem);
        let parentElem = event.target.parentElement;
        parentElem.appendChild(newElem);
    }
    else if (addBeforeRadio.checked) {
        let currentElem = event.target;
        let parentElem = event.target.parentElement;
        let newElem = document.createElement("li");
        let textElem = document.createTextNode(textBox2.value);

        //adding new elements to the list
        newElem.appendChild(textElem);
        parentElem.insertBefore(newElem, currentElem);

        //add events
        newElem.addEventListener("click", ClickItemList);
    }
    else if (changeTextRadio.checked) {
        let elements = event.target.childNodes;
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].nodeName == '#text') {
                elements[i].nodeValue = textBox3.value;
                break;
            }
        }
    }
    else if (addNestedListRadio.checked) {
        let currentElem = event.target;

        // checking for a nested list
        if (currentElem.children.length == 0) {

            let newElemUl = document.createElement("ul");
            let newElemLi = document.createElement("li");
            let elemTopic = document.createTextNode(textBox4.value);

            //struct list
            newElemLi.appendChild(elemTopic);
            newElemUl.appendChild(newElemLi);
            currentElem.appendChild(newElemUl);

            //add events
            newElemLi.addEventListener("click", ClickItemList);
        }
    }
    else if (deleteListItemRadio.checked) {
        let currentElem = event.target;
        let parentElem = currentElem.parentElement;

        //delete current Element
        parentElem.removeChild(currentElem);
        debugger;
        if (mainUl.children.length == 0) {
            let parentMainUl = mainUl.parentElement;
            parentMainUl.removeChild(mainUl);
            newListButton.disabled = false;
        }
    }
    event.stopPropagation();
}

function ClickButton(event) {
    //debugger;
    let elemParentUl = document.createElement("ul");
    let elemParentLi = document.createElement("li");
    let elemTopic = document.createTextNode("Topic");

    // struct list
    elemParentUl.appendChild(elemParentLi);
    elemParentLi.appendChild(elemTopic);

    document.body.append(elemParentUl);

    //events: click     
    elemParentLi.addEventListener("click", ClickItemList);

    //disable button
    event.target.disabled = true;

    // set Id main Ul
    elemParentUl.id = "mainUl";
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