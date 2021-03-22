function updateClock() {

  let date = new Date(Date.now());
   date = new Date(2018,5,5,10,50,5);

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hour1.style.backgroundImage = "url('../src/1.gif')";
  point1.style.color = "blue";
  debugger;
}

let puths = new Array();

for (let i = 0; i < 10; i++) {
  puths.push(`src/${i}.gif`);
}

//debugger;
let t = setInterval("updateClock()", 1000);

