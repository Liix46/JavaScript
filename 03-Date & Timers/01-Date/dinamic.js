///////////////
//debugger;



// let Currentdate = new Date(Date.now());
let Currentdate = new Date("2021", "3", "5");
if(Currentdate.getMonth()+1==1||Currentdate.getMonth()+1 ==2 ||Currentdate.getMonth()+1 ==12){
    tbody.style.backgroundImage = "url('../01-Date/Calendar/1.JPG')";
}
else if(Currentdate.getMonth()+1>2 && Currentdate.getMonth()+1 < 6){
    tbody.style.backgroundImage = "url('../01-Date/Calendar/2.JPG')";
}
else if(Currentdate.getMonth()+1>5 && Currentdate.getMonth()+1 < 9){
    tbody.style.backgroundImage = "url('../01-Date/Calendar/3.JPG')";
}
else{
    tbody.style.backgroundImage = "url('../01-Date/Calendar/4.JPG')";
}
tbody.style.backgroundRepeat = "no-repeat";
tbody.style.backgroundSize = "cover";

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
let lenght = 35;
for (let i = 0; i < lenght; i++) {
    let index = i + UTCDay + 7;
    if(index == lenght+7)
        break;   
        
    if(i< days){
        Days[index].textContent = `${i+1}`;
    }
    else{
        Days[index].textContent = `${i+1-days}`;
    }
}

Currentdate.setMonth(Currentdate.getMonth()-1);
let newDate = new Date(Currentdate.getFullYear(), Currentdate.getMonth()-1, Currentdate.getDate());

month = newDate.getMonth();
days=0;
while (month == newDate.getMonth()) {
    newDate.setDate(newDate.getDate() + 1);
    days++;
}


for(let i = 0; i< UTCDay; i++){
    let index = i + 7;
    Days[index].textContent = `${days - UTCDay + i+1}`;
}

//debugger;

function Click(event){
    let cell = event.target;
}

tbody.addEventListener('click',Click);