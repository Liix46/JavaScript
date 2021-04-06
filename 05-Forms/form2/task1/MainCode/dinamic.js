////////
window.addEventListener('load', Main);

function Main() {
    registration.addEventListener('click', Click);
}

function Click() {
    //debugger;
    // if (login.value.length < 3 || login.value.length > 10) {
    //     return;
    // }

    // if (password1.value.length < 3 || password1.value.length > 10) {
    //     return;
    // }

    // if (password1.value != password2.value) {
    //     return;
    // }
    
    // let regexp = new RegExp(/\d/);
    // if (regexp.test(formFullName.value)) {
    //     // Наличие цифр в поле Полное имя
    //     return;
    // }
    
    // if(position.value ==0){
    //     return;
    // }
   
    
    let addWin = window.open('../AddCode/form.html', "table Form");

    let properties = new Array();
    properties.push(login.value);
    properties.push(formFullName.value);
    if(rdMan.checked){
        properties.push('Мужской');
    }
    else{
        properties.push('Женский');
    }
    
    let specialization = ['Дизайн','Программирование','Администрирование'];
    let index =0;
    for (const check of formCheckboxes) {
       
        if (check.checked){
            properties.push(specialization[index]);
        } 
        index++;
    }
    
    
    properties.push(position[position.selectedIndex].innerText);
    debugger;
    index =0;
    let trElem = addWin.document.getElementsByTagName('tr');
    for (const tr of trElem) {
        tr.lastChild.textContent
        index++;
    }
}