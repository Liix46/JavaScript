//////////////////
//import class
 import Order from './order.js';
//////////////////
//functions


function ClickBook(){
    debugger;
    //получаем ключ выбраного поезда
    let nameTrain = city.value;
    let dateTicket = date.value;
    let checkboxes = document.getElementsByClassName("checkBox");
    
    for (let i = 0; i < checkboxes.length; i++) {
       if(checkboxes[i].checked){
            let order = new Order(dateTicket,i,nameTrain);
            orders.push(order);
       }
    }
     
}
// 
let orders = new Array();
//////////////////
//ставим обработчик на событие click кнопки Book
book.addEventListener('click', ClickBook)
//получаем элементы option
let optionElements = document.getElementsByTagName('option');

//создаем Map. key: value (options) поезда, value: массив мест поезда
let mapTrains = new Map();
for (let i = 0; i < optionElements.length; i++) {
    let train = new Array();

    //указываем количество мест в вагоне текущего поезда
    for (let j = 0; j < countSit; j++) {
        train.push(true);
    }
    // добавляем поезд в mapTrains (дерево поездов)
    mapTrains.set(optionElements[i].value, train);
}

//submit.addEventListener('click', submitClick);
debugger;