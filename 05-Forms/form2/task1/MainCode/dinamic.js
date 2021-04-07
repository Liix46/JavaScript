////////
window.addEventListener('load', Main);
let addWin;
let properties;
let sex = ['Мужской', 'Женский'];
//let sex = ['Man', 'Woman'];
let specialization = ['Дизайн', 'Программирование', 'Администрирование'];
function Main() {
    registration.addEventListener('click', ClickRegistration);
    resetbutton.addEventListener('click', ClickReset)
}

function ClickReset() {
    login.value = '';
    password1.value = '';
    password2.value = '';
    formFullName.value = '';
    rdMan.checked = true;

    for (const check of formCheckboxes) {
        check.checked = false;
    }
    formCheckboxes[0].checked = true;
    position.selectedIndex = 0;
}

function ClickRegistration() {

    login.value = login.value.replace(/ /g, '');
    if (login.value.length < 3 || login.value.length > 10) {
        alert("Длина логина должна быть от 3 до 10 символов");
        return;
    }
    password1.value = password1.value.replace(/ /g, '');
    if (password1.value.length < 3 || password1.value.length > 10) {
        alert("Длина пароля должна быть от 3 до 10 символов");
        return;
    }

    if (password1.value != password2.value) {
        alert("Пароли не совпадают");
        return;
    }

    let regexp = new RegExp(/\d/);
    if (regexp.test(formFullName.value)) {
        alert("В поле 'Полное имя' должны быть только буквы");
        return;
    }

    if (position.value == 0) {
        alert("Не выбрана должность");
        return;
    }

    let checked = true;
    for (const check of formCheckboxes) {
        if (check.checked) {
            checked = false;
        }
    }
    if (checked) {
        alert("Специализация не выбрана");
        return;
    }

    properties = new Array();
    properties.push(login.value);
    properties.push(formFullName.value);
    if (rdMan.checked) {
        properties.push(sex[0]);
    }
    else {
        properties.push(sex[1]);
    }


    let index = 0;
    let strSpecialization = '';
    for (const check of formCheckboxes) {
        if (check.checked) {
            strSpecialization += specialization[index];
            strSpecialization += '\n';
        }
        index++;
    }
    properties.push(strSpecialization);
    properties.push(position[position.selectedIndex].innerText);

    let path = '../AddCode/form.html?';
    let question = '';
    for (const elem of properties) {
        question += '/'
        question += elem;
    }
    path += text2Binary(question);
    //console.log(path);

    addWin = window.open(path);
    //debugger;
}

function text2Binary(string) {
    return string.split('').map(function (char) {
        return char.charCodeAt(0).toString(2);
    }).join(' ');
}

