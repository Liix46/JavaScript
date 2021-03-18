///////////////
//debugger;
table.style.backgroundImage = "url('../01-Date/Calendar/1.JPG')";

let Currentdate = new Date(Date.now());

let month = Currentdate.getMonth();
Currentdate.setDate(1);
let UTCDay = Currentdate.getUTCDay();
let days = 0;

while (month == Currentdate.getMonth()) {
    Currentdate.setDate(Currentdate.getDate() + 1);
    days++;
}
console.log(days);
console.log(UTCDay);

let Days = document.getElementsByTagName('td');
//debugger;
for (let i = 0; i < 35; i++) {
    let index = i + UTCDay + 7;
    if(i< days){
        Days[index].textContent = `${i+1}`;
    }
    else{
        Days[index].textContent = `${i+1-days}`;
    }
}
debugger;