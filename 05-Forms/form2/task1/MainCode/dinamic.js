////////
window.addEventListener('load', Main);
let addWin;
let properties;
let sex = ['Мужской', 'Женский'];
let specialization = ['Дизайн','Программирование','Администрирование'];
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
   
    properties = new Array();
    properties.push(login.value);
    properties.push(formFullName.value);
    if(rdMan.checked){
        properties.push(sex['Мужской']);
    }
    else{
        properties.push(sex['Женский']);
    }
    
    
    let index =0;
    for (const check of formCheckboxes) {
       
        if (check.checked){
            properties.push(specialization[index]);
        } 
        index++;
    }   
    
    properties.push(position[position.selectedIndex].innerText);   
      
    addWin = window.open('../AddCode/form.html', "table Form");
     // не отрабатывает событие Load
    addWin.addEventListener('load', LoadAddWindow);
   debugger;
}

function LoadAddWindow() {
     // index =0;
     debugger;
     //let trElem = addWin.tableForm.children;
    // for (const tr of trElem) {
    //     tr.lastChild.textContent
    //     index++;
    // }
} 