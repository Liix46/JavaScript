function updateClock() {

  let date = new Date(Date.now());
   //date = new Date(2018,5,5,8,50,5);

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if(hours < 10){
    hour1.style.backgroundImage = "url('./src/0.gif')";
    let hourLastPart = hours%10;
    let hour2path = `url(\'${puths[hourLastPart]}\')`;
    hour2.style.backgroundImage = hour2path;
  }
  else{
    let hourFirstPart = parseInt(hours/10);
    let hourLastPart = hours%10;
    let hour1path = `url(\'${puths[hourFirstPart]}\')`;
    let hour2path = `url(\'${puths[hourLastPart]}\')`;

    hour1.style.backgroundImage = hour1path;
    hour2.style.backgroundImage = hour2path;
  }

  if(minutes < 10){
    minut1.style.backgroundImage = "url('./src/0.gif')";
    let minutLastPart = minutes%10;
    let minut2path = `url(\'${puths[minutLastPart]}\')`;
    minut2.style.backgroundImage = minut2path;
  }
  else{
    let minutFirstPart = parseInt(minutes/10);
    let minutLastPart = minutes%10;
    let minut1path = `url(\'${puths[minutFirstPart]}\')`;
    let minut2path = `url(\'${puths[minutLastPart]}\')`;

    minut1.style.backgroundImage = minut1path;
    minut2.style.backgroundImage = minut2path;
  }

  if(seconds < 10){
    second1.style.backgroundImage = "url('./src/0.gif')";
    let secondLastPart = seconds%10;
    let second2path = `url(\'${puths[secondLastPart]}\')`;
    second2.style.backgroundImage = second2path;
  }
  else{
    let secondFirstPart = parseInt(seconds/10);
    let secondLastPart = seconds%10;
    let second1path = `url(\'${puths[secondFirstPart]}\')`;
    let second2path = `url(\'${puths[secondLastPart]}\')`;

    second1.style.backgroundImage = second1path;
    second2.style.backgroundImage = second2path;
  }
  
  let DateNames = new Array();
  DateNames.push(hour1);
  DateNames.push(hour2);
  DateNames.push(minut1);
  DateNames.push(minut2);
  DateNames.push(second1);
  DateNames.push(second2);

  for (const item of DateNames) {
    item.style.backgroundRepeat = "no-repeat";
    item.style.backgroundPosition = "center center";
    item.style.backgroundSize ="50px 100px";
  }  
}

let puths = new Array();

for (let i = 0; i < 10; i++) {
  puths.push(`./src/${i}.gif`);
}

//debugger;
let t = setInterval("updateClock()", 1000);

