//////////////////
//////////////////
//functions
window.addEventListener('load', LoadWindow);
let orders = new Array();
let checkboxes;
let price = 62;
function TotalAmount(countTickets, price){
    //debugger;
    let priceOrder = countTickets * price;
    labelPrice.innerText = `Total price: ${priceOrder}`;
}
function showTickets(){
    //debugger;
    for (const order of orders) {
        tickets.appendChild(tr = document.createElement("tr"));
        tr.appendChild(td = document.createElement("td"));
        td.innerHTML = `${order.trainName}`;
        tr.appendChild(td = document.createElement("td"));
        td.innerHTML = `${order.date}`;
        tr.appendChild(td = document.createElement("td"));
        td.innerHTML = `${order.place}`;
    }
   
}
function ClickBook(){
    
    //сбор данных
    let nameTrain = city.value;
    let dateTicket = date.value;

    for (let i = 0; i < checkboxes.length; i++) {
       if(checkboxes[i].checked && !(checkboxes[i].disabled)){
            let order = new Order(dateTicket,i,nameTrain);
            orders.push(order);
       }
    }
    ClickSearch();
    TotalAmount(0,price);
    showTickets();
   // debugger;
}

function ClickSearch(){
    let nameTrain = city.value;
    let dateTicket = date.value;

    for (const checkBox of checkboxes) {
        checkBox.disabled = false;
        checkBox.checked = false;
    }
    for(let i =0; i< orders.length; i++){
        let order = orders[i];
        if(order.trainName == nameTrain && order.date == dateTicket){
            checkboxes[order.place].checked = true;
            checkboxes[order.place].disabled = true;
        }
    }
}
function ChangeCheckbox(){
    let nameTrain = city.value;
    let dateTicket = date.value;
    let countTickets = 0;
    for (const checkBox of checkboxes) {
       if (checkBox.checked && !(checkBox.disabled)) {
        countTickets++;
       }        
    }
    TotalAmount(countTickets, price);
}

function LoadWindow(){
    
    //////////////////
    book.addEventListener('click', ClickBook)
    submit.addEventListener('click', ClickSearch)
    checkboxes = document.getElementsByClassName("checkBox");
    for (const checkbox of checkboxes) {
        checkbox.addEventListener('change', ChangeCheckbox);
    }
}